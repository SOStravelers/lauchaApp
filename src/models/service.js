import mongoose from "mongoose";
const Schema = mongoose.Schema;
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from "mongoose-paginate-v2";
import paginateConfig from "../config/paginate.js";

const serviceSchema = new Schema(
  {
    name:{type: String,unique: true},
    isActive: { type: Boolean, default:true },
    icon:{type:String},
    details:{type:String},
    imgUrl: {type:String},
    coverImg: {
      type: String,
      default: "",
    },
    creator:{ type: String,ref:"User" },
    updated:{
      updatedAt: {
          type: Date,
          default: new Date(),
      },
      updatedBy:{ type: String,ref:"User"},
  }
  },
  
  { timestamps: true }
);
serviceSchema.plugin(uniqueValidator, { message: 'This {PATH} is already in use.' });
serviceSchema.plugin(mongoosePaginate);
mongoosePaginate.paginate.options = paginateConfig;
const Service= mongoose.model("Service", serviceSchema);
export default Service;


