import mongoose from "mongoose";
const Schema = mongoose.Schema;
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
import mongoosePaginate from "mongoose-paginate-v2";
import paginateConfig from "../config/paginate.js";


const userSchema = new Schema(
  {
    isActive: { type: Boolean, default:true },
    isValidate:{type: Boolean, default:false}, 
    password: {
      type: String,
      select: false,
      trim:true, 
      minlength: 6, 
      required:[true, 'Password requiere']
    },
    username: {type: String,unique: true},
    email: {type: String,unique: true},
    isAdminUser:{type: Boolean},
    type: {
      type: String,
      default: "personal",
      enum: ["personal", "business", "worker"],
    },
    phone:{type: String},
    img:{
      imgUrl: {type: String, default: ""},
      coverImg: {type: String, default: ""},
      gallery:{type: Array},
    },   
    updatedAt: {
      type: Date,
      default: new Date(),
    },
    lastLogin: {
      type: Date,
      default: new Date(),
    },
    about:{type: String, default: ""},
    language: {
      type: String,
      default: "EN",
      enum: ["EN", "ES", "Fr", "Br"],
    },
    personalData:{
      name: {
        first: {
          type: String,
        },
        last: {
          type: String,
        },
        nickName:{
          type:String
        }
      },
      nationality:{type: String},
      country:{type: String},
      idNumber:{type: String},

    },
    workerData:{
      languages:{
        main:{
          type: String,
          default: "EN",
          enum: ["EN", "ES", "Fr", "Br"],
        },
        secondary:{type: Array},
      },
      services:[
        {
          id: {
            type: String,
            ref:"Service",
          },
          subServices: Array({
            type: String,
            ref: "SubServices",
          }),
          gallery:{type: Array},
        },
      ],
    },
    businessData:{
      location:{
        country:{type: String},
        city:{type: String},
      },
      type:{
        type: String, 
        enum: ["hotel", "hostel", "other"],
      },
      name:{type: String},     
      owner:{
        name: {
          first: {
            type: String,
          },
          last: {
            type: String,
          },
        },
      }  
    },
    paymentData:{
    },
    currency:{type: String, ref:"Currency"}
  },
  { timestamps: true }
);



//Validate unique value message
userSchema.plugin(uniqueValidator, { message: 'This {PATH} is already in use.' });
userSchema.plugin(mongoosePaginate);
mongoosePaginate.paginate.options = paginateConfig;




const User= mongoose.model("User", userSchema);
export default User;



// Functions custom for model

User.hash = (password) => {
  return bcrypt.hashSync(password, salt, null);
};
User.validPassword = async (id, password) => {
  const user = await User.findById(id, "password").exec();
  let valid = false;
  try {
    valid = bcrypt.compareSync(password, user.password);
  } catch (err) {
    valid = false;
  }

  return valid;
};