(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Admin-Users"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7");function a(t,e,r,a,n,o,i){try{var s=t[o](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(a,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}},8308:function(t,e,r){},"96cf":function(t,e,r){var a=function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r,a){var n=e&&e.prototype instanceof m?e:m,o=Object.create(n.prototype),i=new R(a||[]);return o._invoke=k(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(a){return{type:"throw",arg:a}}}t.wrap=c;var u="suspendedStart",d="suspendedYield",v="executing",h="completed",f={};function m(){}function b(){}function p(){}var g={};g[o]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(T([])));x&&x!==r&&a.call(x,o)&&(g=x);var O=p.prototype=m.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t,e){function r(n,o,i,s){var c=l(t[n],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var n;function o(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function k(t,e,r){var a=u;return function(n,o){if(a===v)throw new Error("Generator is already running");if(a===h){if("throw"===n)throw o;return V()}r.method=n,r.arg=o;while(1){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var c=l(t,e,r);if("normal"===c.type){if(a=r.done?h:d,c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=h,r.method="throw",r.arg=c.arg)}}}function C(t,r){var a=t.iterator[r.method];if(a===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:V}}function V(){return{value:e,done:!0}}return b.prototype=O.constructor=p,p.constructor=b,p[s]=b.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(j.prototype),j.prototype[i]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new j(c(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(O),O[s]="Generator",O[o]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return s.type="throw",s.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:T(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},db3e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-tabs",{attrs:{"background-color":"white",color:"primary","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{attrs:{href:"#one"}},[r("i",{staticClass:"fa fa-cog"}),t._v(" Gestión Usuarios ")]),r("v-tab",{attrs:{href:"#two"}},[r("i",{staticClass:"fa fa-cogs"}),t._v(" Torneo ")]),r("v-tabs-items",{attrs:{value:t.tab}},[r("v-tab-item",{attrs:{value:"one"}},[r("v-container",{attrs:{fluid:""}},[r("Users")],1)],1),r("v-tab-item",{attrs:{value:"two"}},[r("v-container",{attrs:{fluid:""}},[r("Torneo")],1)],1)],1)],1)],1)},n=[],o=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),i=r("5530"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-2"},[r("tablaUserAdmin"),r("newUser"),r("editarRol"),r("dialogConfirmar")],1)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"elevation-12"},[r("v-system-bar",{attrs:{color:"grey darken-4"}}),r("v-card-title",[t._v(" Tabla de Usuarios y Roles "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" Registrados: "+t._s(t.usuarios.length)+" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),r("v-text-field",{staticClass:"elevation-2",attrs:{"append-icon":"mdi-magnify",label:" Buscar Usuario","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{dark:"","ml-auto":"",color:"warning"},on:{click:function(e){return t.getUsers()}}},[t._v("Obtener Usuarios")])],1)]),r("v-col",{attrs:{Cols:"12",md:"6"}},[r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{dark:"","ml-auto":"",color:"green accent-5"},on:{click:function(e){return t.createUser()}}},[t._v("Crear Nuevo Usuario")])],1)])],1),r("v-data-table",{staticClass:"elevation-7",attrs:{dense:"",headers:t.headers,items:t.usuarios,search:t.search},scopedSlots:t._u([{key:"item.accion",fn:function(e){var a=e.item;return[r("v-btn",{staticClass:"mr-2",attrs:{tile:"",large:"",color:"primary",icon:""},on:{click:function(e){return t.editarUser(a)}}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1),r("v-btn",{staticClass:"mr-2",attrs:{tile:"",large:"",color:"error",icon:""},on:{click:function(e){return t.deleteUser(a)}}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-delete")])],1)]}}],null,!0)})],1)},u=[],d=r("2f62"),v={name:"tablaUserAdmin",data:function(){return{search:"",headers:[{text:"CORREO",align:"start",sortable:!0,value:"email"},{text:"NOMBRE",value:"name",sortable:!0},{text:"APELLIDO",value:"lastName",sortable:!0},{text:"ROLES",value:"role",sortable:!0},{text:"CREADO (d/m/a)",value:"date",sortable:!0},{text:"ACCIÓN",value:"accion",sortable:!1}]}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["e"])(["token"])),Object(d["e"])("userAdmin",["usuarios","pedido"])),{},{config:function(){return{headers:{token:this.token}}}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("userAdmin",["nuevoUsuario","pedir","editarRol"])),Object(d["d"])("loading",["loadingFunction"])),Object(d["d"])("confirmar",["confirmar"])),Object(d["b"])("userAdmin",["obtenerUsers"])),{},{createUser:function(){this.nuevoUsuario()},getUsers:function(){var t=this;this.loadingFunction(),this.axios.get("/users/admin/users",this.config).then((function(e){var r=e.data;t.obtenerUsers(r),t.loadingFunction(),t.pedir()})).catch((function(e){t.loadingFunction(),console.log(e.response)}))},editarUser:function(t){this.editarRol(t)},deleteUser:function(t){var e={titulo:"¿Está seguro de eliminar a ".concat(t.email,"?"),cuerpo:"Al eliminar, toda la información del usuario será borrada de manera permanente",boton:"borrarUsuario",datos:[]};e.datos=t,this.confirmar(e)}}),created:function(){!1===this.pedido&&this.getUsers()}},h=v,f=r("2877"),m=r("6544"),b=r.n(m),p=r("8336"),g=r("b0af"),y=r("99d9"),x=r("62ad"),O=r("8fea"),w=r("ce7e"),j=r("132d"),k=r("0fd9"),C=(r("a9e3"),r("c7cd"),r("8308"),r("3a66")),_=r("a9ad"),E=r("7560"),R=r("58df"),T=r("80d2"),V=Object(R["a"])(Object(C["a"])("bar",["height","window"]),_["a"],E["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(i["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(T["g"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(T["s"])(this))}}),U=r("8654"),A=Object(f["a"])(h,l,u,!1,null,null,null),L=A.exports;b()(A,{VBtn:p["a"],VCard:g["a"],VCardTitle:y["c"],VCol:x["a"],VDataTable:O["a"],VDivider:w["a"],VIcon:j["a"],VRow:k["a"],VSystemBar:V,VTextField:U["a"]});var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogNew,callback:function(e){t.dialogNew=e},expression:"dialogNew"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("Nuevo Usuario")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Nombre*",require:""},model:{value:t.nuevoNombre,callback:function(e){t.nuevoNombre=e},expression:"nuevoNombre"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Apellido*",required:""},model:{value:t.nuevoApellido,callback:function(e){t.nuevoApellido=e},expression:"nuevoApellido"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Email*",required:"",hint:"Un correo por Usuario","persistent-hint":""},model:{value:t.nuevoEmail,callback:function(e){t.nuevoEmail=e},expression:"nuevoEmail"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Password*",type:"password",required:""},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Repetir Password*",type:"password",required:""},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["USER","EDITOR","RELATOR","ADMIN"],label:"Rol",required:""},model:{value:t.nuevoRole,callback:function(e){t.nuevoRole=e},expression:"nuevoRole"}})],1)],1),r("small",[t._v("*indicates required field")])],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cerrarDialog()}}},[t._v("Cancelar")]),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.crearUsuario()}}},[t._v("Crear Usuario")])],1)],1)],1)],1)],1)},N=[],D=(r("99af"),{name:"newUser",data:function(){return{nuevoNombre:"",nuevoApellido:"",nuevoEmail:"",password1:"",password2:"",nuevoRole:""}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["e"])("userAdmin",["dialogNew"])),Object(d["e"])(["token"])),{},{config:function(){return{headers:{token:this.token}}}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("loading",["loadingFunction"])),Object(d["d"])("userAdmin",["agregarUsuario","nuevoUsuario"])),{},{crearUsuario:function(){var t=this;this.loadingFunction();var e={name:this.nuevoNombre,lastName:this.nuevoApellido,email:this.nuevoEmail,password1:this.password1,password2:this.password2,role:this.nuevoRole};this.axios.post("/users/admin/user",e,this.config).then((function(e){var r=e.data,a=new Date(r.date);r.fecha="".concat(a.getDay(),"/").concat(a.getMonth(),"/").concat(a.getFullYear()),t.agregarUsuario(r),t.loadingFunction(),t.nuevoUsuario()})).catch((function(e){t.loadingFunction(),console.log(e.response)}))},cerrarDialog:function(){this.nuevoUsuario()}})}),S=D,I=r("a523"),P=r("169a"),$=r("b974"),B=r("2fa4"),G=Object(f["a"])(S,F,N,!1,null,null,null),J=G.exports;b()(G,{VBtn:p["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:x["a"],VContainer:I["a"],VDialog:P["a"],VRow:k["a"],VSelect:$["a"],VSpacer:B["a"],VTextField:U["a"]});var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.usuarioEdit.estado,callback:function(e){t.$set(t.usuarioEdit,"estado",e)},expression:"usuarioEdit.estado"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("Usuario: "+t._s(t.usuarioEdit.usuario.email))])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["USER","EDITOR","RELATOR","ADMIN"],label:"Rol",required:""},model:{value:t.nuevoRole,callback:function(e){t.nuevoRole=e},expression:"nuevoRole"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.usuarioEdit.estado=!1}}},[t._v("Cancelar")]),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cambiarRol()}}},[t._v("Cambiar Rol")])],1)],1)],1)],1)},M=[],H={name:"editarRol",data:function(){return{nuevoRole:""}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["e"])("userAdmin",["usuarioEdit"])),Object(d["e"])(["token"])),{},{config:function(){return{headers:{token:this.token}}}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("loading",["loadingFunction"])),Object(d["d"])("userAdmin",["nuevoRol"])),{},{cambiarRol:function(){var t=this;this.loadingFunction();var e=this.usuarioEdit.usuario,r=e._id;e.role=this.nuevoRole,this.axios.put("/users/admin/user/".concat(r),e,this.config).then((function(e){var r=e.data;t.nuevoRol(r),t.loadingFunction(),t.usuarioEdit.estado=!1})).catch((function(e){t.loadingFunction(),console.log(e.response)}))}})},Y=H,K=Object(f["a"])(Y,q,M,!1,null,null,null),Q=K.exports;b()(K,{VBtn:p["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:x["a"],VContainer:I["a"],VDialog:P["a"],VRow:k["a"],VSelect:$["a"],VSpacer:B["a"]});var z=r("cc1d"),W={name:"Users",components:{tablaUserAdmin:L,newUser:J,editarRol:Q,dialogConfirmar:z["a"]}},X=W,Z=Object(f["a"])(X,s,c,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CreateTorneo"),r("tablaTorneoPlayers")],1)},rt=[],at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[""===t.torneos[0].name?r("v-btn",{staticClass:"my-5",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(e){t.dialogo=!0}}},[t._v("Crear Torneo")]):t._e(),""!=t.torneos[0].name?r("v-btn",{staticClass:"my-5",attrs:{rounded:"",color:"error",dark:""},on:{click:function(e){return t.terminarTorneo()}}},[t._v("Terminar Torneo")]):t._e(),""!=t.torneos[0].name?r("v-card",{staticClass:"pa-0 mx-auto",attrs:{"max-width":"800px"}},[r("v-system-bar",{attrs:{color:"#2C3A47"}}),r("v-list",{staticClass:"pa-0 mb-5"},[r("v-list-item-group",{staticClass:"pa-0"},[r("v-list-item",{staticClass:"pa-0"},[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s(t.torneos[0].name)+" ")]),r("v-col",{attrs:{cols:"2"}},[t._v(" "+t._s(t.torneos[0].players.length)+"/25 ")]),r("v-col",{attrs:{cols:"4"}},["false"===t.torneos[0].edition?r("v-btn",{attrs:{small:"",rounded:"",color:"success",dark:""},on:{click:function(e){return t.edicion("true")}}},[t._v("Activar Edicion")]):t._e(),"true"===t.torneos[0].edition?r("v-btn",{attrs:{small:"",rounded:"",color:"warning",dark:""},on:{click:function(e){return t.edicion("false")}}},[t._v("Desactivar Edicion")]):t._e()],1)],1)],1)],1)],1)],1):t._e(),r("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogo,callback:function(e){t.dialogo=e},expression:"dialogo"}},[r("v-card",{staticClass:"container"},[r("v-card-title",[t._v(" Escribe el nombre del torneo ")]),r("v-card-text",[r("v-text-field",{staticClass:"mr-10 ml-5",attrs:{label:"Nombre del Torneo",type:"text",outlined:"",dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.crearTorneo(),t.dialogo=!1}},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}},[t._v(" Escribe el nombre para el Torneo ")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogo=!1}}},[t._v("Cancelar")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.crearTorneo(),t.dialogo=!1}}},[t._v("Crear Torneo")])],1)],1)],1)],1)},nt=[],ot=(r("b0c0"),r("d3b7"),r("ddb0"),r("b85c")),it={name:"CreateTorneo",data:function(){return{dialogo:!1,nombre:null,creado:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(d["e"])("relato",["partidosCalendario"])),Object(d["e"])("torneo",["torneos","boton","botonDos"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("loading",["loadingFunction"])),Object(d["d"])("confirmar",["confirmar"])),Object(d["d"])("torneo",["obtenerTorneos","cambiarBoton","eliminarTorneo"])),Object(d["b"])("relato",["obtenerCalendario"])),{},{crearTorneo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,n,o,i,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingFunction(),r=[],e.next=4,t.axios.get("/matches/match-estado/POR-JUGAR").then((function(e){t.obtenerCalendario(r),r=e.data})).catch((function(t){console.log(t.response.data.mensaje)}));case 4:a={name:t.nombre,edition:"true",matches:[]},n=Object(ot["a"])(r);try{for(n.s();!(o=n.n()).done;){i=o.value,s={_id:i._id,score:null,ruleResult:[],valorRegla:[],apuesta:i.apuesta,ruleApuesta:[],valorApuestaRegla:[]},c=Object(ot["a"])(i.rules);try{for(c.s();!(l=c.n()).done;)u=l.value,s.valorApuestaRegla.push(u.options.values)}catch(d){c.e(d)}finally{c.f()}a.matches.push(s)}}catch(d){n.e(d)}finally{n.f()}return e.next=9,t.axios.post("/torneos/torneos",a).then((function(e){t.obtenerTorneos(e.data)})).catch((function(t){console.log(t.response.data.mensaje)}));case 9:t.loadingFunction();case 10:case"end":return e.stop()}}),e)})))()},edicion:function(t){var e=this;this.loadingFunction();var r=this.torneos[0];r.edition=t,this.axios.put("/torneos/torneos",r).then((function(t){var r=[];r.push(t.data),e.obtenerTorneos(r),e.loadingFunction()})).catch((function(t){console.log(t.response.data.mensaje),e.loadingFunction()}))},terminarTorneo:function(){var t={titulo:"¿Quieres terminar el Torneo: ".concat(this.torneos[0].name,"?"),cuerpo:"Al terminar el torneo, toda la información asociada será borrada de manera permanente",boton:"finishTorneo",datos:[]};t.datos=this.torneos[0]._id,this.confirmar(t)}})},st=it,ct=r("8860"),lt=r("da13"),ut=r("1baa"),dt=Object(f["a"])(st,at,nt,!1,null,null,null),vt=dt.exports;b()(dt,{VBtn:p["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:x["a"],VDialog:P["a"],VList:ct["a"],VListItem:lt["a"],VListItemGroup:ut["a"],VRow:k["a"],VSpacer:B["a"],VSystemBar:V,VTextField:U["a"]});var ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-center"},[r("v-card",{staticClass:"elevation-15",attrs:{"max-width":"800px"}},[r("v-card-title",[r("v-text-field",{staticClass:"elevation-3",attrs:{dense:"","append-icon":"mdi-magnify",label:" Buscar Jugador","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,items:t.torneos[0].players,search:t.search},scopedSlots:t._u([{key:"item.accion",fn:function(e){var a=e.item;return[r("v-btn",{staticClass:"mr-2 mx-2",attrs:{small:"",tile:"",color:"primary"},on:{click:function(e){return t.verJugador(a._id)}}},[r("i",{staticClass:"fas fa-search"}),t._v(" Puntajes ")]),r("v-btn",{staticClass:"mr-2 mx-2",attrs:{small:"",tile:"",large:"",color:"error",icon:""},on:{click:function(e){return t.kickUser(a)}}},[r("i",{staticClass:"fas fa-skull"}),t._v(" Kick ")])]}}],null,!0)})],1)],1)},ft=[],mt={name:"tablaTorneoPlayers",data:function(){return{search:"",headers:[{text:"JUGADOR",align:"center",sortable:!0,value:"nickName"},{text:"CORREO",align:"center",sortable:!0,value:"email"},{text:"ID",align:"center",sortable:!0,value:"_id"},{text:"ACCION",align:"center",value:"accion",sortable:!1}]}},computed:Object(i["a"])({},Object(d["e"])("torneo",["torneos"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("loading",["loadingFunction"])),Object(d["d"])("textoSnack",["agregarSnack"])),Object(d["d"])("confirmar",["confirmar"])),Object(d["b"])("torneo",["agregarPorJugar","puntajes"])),{},{kickUser:function(t){var e={titulo:"¿Está seguro de expulsar a ".concat(t.email,"?"),cuerpo:"Al expulsar, toda la información del jugador en el torneo será borrada de manera permanente",boton:"kickPlayer",datos:[]};e.datos=t._id,this.confirmar(e)},verJugador:function(t){this.$router.push({path:"/admin/torneos/".concat(t)})}})},bt=mt,pt=Object(f["a"])(bt,ht,ft,!1,null,null,null),gt=pt.exports;b()(pt,{VBtn:p["a"],VCard:g["a"],VCardTitle:y["c"],VDataTable:O["a"],VTextField:U["a"]});var yt={name:"Torneo",components:{CreateTorneo:vt,tablaTorneoPlayers:gt}},xt=yt,Ot=Object(f["a"])(xt,et,rt,!1,null,null,null),wt=Ot.exports,jt={name:"Index",components:{Torneo:wt,Users:tt},computed:Object(i["a"])(Object(i["a"])({},Object(d["e"])("torneo",["torneos","contadorTorneo"])),{},{tab:{set:function(t){this.$router.replace({query:Object(i["a"])(Object(i["a"])({},this.$route.query),{},{tab:t})})},get:function(){return this.$route.query.tab}}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("loading",["loadingFunction"])),Object(d["d"])("torneo",["pedirContador"])),Object(d["b"])("torneo",["agregarPorJugar","puntajes"])),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:!1===t.contadorTorneo&&(t.loadingFunction(),t.axios.get("/torneos/find").then((function(e){var r=e.data;t.puntajes(e.data),t.axios.get("/matches/match-estado/JUGANDO&POR-JUGAR&TERMINADO").then((function(e){var a=[r,e.data];t.loadingFunction(),t.agregarPorJugar(a),t.pedirContador()})).catch((function(e){t.loadingFunction(),console.log(e.response.data.mensaje)}))})).catch((function(e){t.puntajes([{name:"",players:[]}]),t.loadingFunction(),console.log(e.response.data.mensaje)})));case 1:case"end":return e.stop()}}),e)})))()}},kt=jt,Ct=r("71a3"),_t=r("c671"),Et=r("fe57"),Rt=r("aac8"),Tt=Object(f["a"])(kt,a,n,!1,null,null,null);e["default"]=Tt.exports;b()(Tt,{VContainer:I["a"],VTab:Ct["a"],VTabItem:_t["a"],VTabs:Et["a"],VTabsItems:Rt["a"]})}}]);
//# sourceMappingURL=Admin-Users.08644511.js.map