(function(e){function t(t){for(var i,s,l=t[0],o=t[1],u=t[2],p=0,f=[];p<l.length;p++)s=l[p],r[s]&&f.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("VueUpload"),n("br"),n("br"),n("br"),n("br"),n("VueUpload",{scopedSlots:e._u([{key:"file-list",fn:function(t){var i=t.list,r=t.remove;return n("div",{},e._l(i,function(t,i){return n("p",{key:i},[e._v("\n        "+e._s(e.getFileName(t))+"\n        "),n("button",{on:{click:function(e){r(t,i)}}},[e._v("删除")])])}),0)}},{key:"upload-btn",fn:function(t){var i=t.handlerStartUpload;return n("div",{},[n("button",{on:{click:i}},[e._v("开始上传")])])}}])},[n("button",{attrs:{slot:"select-btn"},slot:"select-btn"},[e._v("自定义按钮选择文件上传")])])],1)},a=[],s=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload"},[n("div",{staticClass:"upload-main"},[n("input",{attrs:{type:"file",accept:e.accept,multiple:e.multiple&&"multiple"},on:{change:e.handlerFileChange}}),e._t("select-btn",[e._m(0)])],2),e._t("file-list",[n("ul",{staticClass:"upload-list"},e._l(e.fileList,function(t,i){return n("li",{key:t.name},[t.preview?n("img",{attrs:{src:t.preview}}):e._e(),n("label",[e._v("\n          ("+e._s(e.getSize(t.size))+")\n          "+e._s(t.name)+"\n        ")]),n("span",{class:{error:t.status===e.UPLOAD_FAIL||!!t.msg,success:t.status===e.UPLOAD_SUCCESS},on:{click:function(n){e.handlerRemoveFile(t,i)}}},[e._v("\n          "+e._s(t.msg||(t.per?t.per+"%":""))+"\n        ")]),n("i",{class:{error:t.status===e.UPLOAD_FAIL,success:t.status===e.UPLOAD_SUCCESS},style:{width:(t.per||0)+"%"}})])}),0)],{list:e.fileList,remove:e.handlerRemoveFile}),e._t("upload-btn",[e.fileList.some(function(t){return[e.READY_UPLOAD,e.UPLOAD_FAIL].includes(t.status)})?n("button",{staticClass:"upload-btn",on:{click:e.handlerUploading}},[e._v("\n      开始上传\n    ")]):e._e()],{handlerStartUpload:e.handlerUploading})],2)}),l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn"},[n("button",{staticClass:"select-btn"},[e._v("选择文件")])])}],o=(n("20d6"),n("795b")),u=n.n(o),c=(n("96cf"),n("3b8d")),p=(n("6762"),n("2fdb"),n("c5f6"),n("bc3a")),f=n.n(p),d={},h=-1,m=0,v=1,b=2,g=3,_={name:"upload-app",props:{multiple:{type:Boolean,default:!0},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:5368709120},multiUploadSize:{type:Number,default:104857600},eachSize:{type:Number,default:52428800},postUrl:{type:String,default:"http://localhost:8888"},validateUrl:{type:String,default:"http://localhost:8888/validateFile"}},data:function(){return{READY_UPLOAD:m,UPLOADING:v,UPLOAD_FAIL:b,UPLOAD_SUCCESS:g}},methods:{handlerFileChange:function(e){var t=this,n=e.target.files,i=this.fileList,r=this.maxSize,a=this.getImgBlob;Array.prototype.map.call(n,function(e){i.some(function(t){return t.name===e.name})||(e.preview=a(e),e.status=m,e.per=0,e.size>r&&(e.status=h,e.msg="大于".concat(t.getSize(r))),i.push(e))}),this.$emit("on-file-change",i.slice())},handlerUploading:function(){var e=this.fileList,t=this.multiUploadSize,n=this.splitUpload,i=this.singleUpload,r=this.setFileData;e.map(function(e){if([m,b].includes(e.status)){var a=e.size>t?n:i;r(e.name,{per:0,msg:null,status:v}),a(e)}})},singleUpload:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.setFileData,e.prev=1,e.next=4,this.postFile({file:t,fileName:t.name});case 4:n(t.name,"status",g),this.$emit("on-success"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),n(t.name,{per:0,msg:e.t0,status:b}),this.$emit("on-error",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),splitUpload:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var n,i,r,a,s,l,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.eachSize,i=this.setFileData,e.prev=1,r=Math.ceil(t.size/n),e.next=5,this.splitFile(t,n,r);case 5:a=e.sent,s=0,l=0;case 8:if(!(l<a.length)){e.next=16;break}if(Number(s)!==l){e.next=13;break}return e.next=12,this.postFile({chunked:!0,chunk:l,chunks:r,eachSize:n,fileName:t.name,fullSize:t.size,file:a[l]});case 12:s=e.sent;case 13:l++,e.next=8;break;case 16:return i(t.name,"per",99.99),e.next=19,this.validateFile({chunks:a.length,fileName:t.name,fullSize:t.size});case 19:if(o=e.sent,o){e.next=22;break}throw new Error("文件校验异常");case 22:i(t.name,{per:100,status:g}),this.$emit("on-success"),e.next=30;break;case 26:e.prev=26,e.t0=e["catch"](1),i(t.name,{per:0,msg:e.t0,status:b}),this.$emit("on-error",e.t0);case 30:case"end":return e.stop()}},e,this,[[1,26]])}));function t(t){return e.apply(this,arguments)}return t}(),getSize:function(e){return e>1024?e/1024>1024?e/1048576>1024?(e/1073741824).toFixed(2)+"GB":(e/1048576).toFixed(2)+"MB":(e/1024).toFixed(2)+"KB":e.toFixed(2)+"B"},splitFile:function(e,t,n){return new u.a(function(i,r){try{setTimeout(function(){for(var r=[],a=0;n>0;n--)r.push(e.slice(a,a+t)),a+=t;i(r)},0)}catch(a){r(new Error("文件切块发生错误"))}})},handlerRemoveFile:function(e,t){d[e.name]&&(d[e.name](),delete d[e.name]),this.fileList.splice(t,1)},postFile:function(e){var t=this,n=new FormData;for(var i in e)n.append(i,e[i]);var r=e.fileName,a={cancelToken:new f.a.CancelToken(function(e){d[r]&&(d[r](),delete d[r]),d[r]=e}),onUploadProgress:function(n){var i=0;i=e.chunked?Number(((e.chunk*(e.eachSize-1)+n.loaded)/e.fullSize*100).toFixed(2)):Number((n.loaded/n.total*100).toFixed(2)),t.setFileData(r,"per",i)}};return f.a.post(this.postUrl,n,a).then(function(e){return e.data})},validateFile:function(e){return f.a.post(this.validateUrl,e).then(function(e){return e.data})},getImgBlob:function(e){var t=/\S(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i.test(e.name);return t?window.URL.createObjectURL(e):null},setFileData:function(e,t,n){var i=this.fileList.findIndex(function(t){return t.name===e}),r=this.fileList[i];if(r){if("string"===typeof t)r[t]=n;else for(var a in t)r[a]=t[t];this.$set(this.fileList,i,r)}}}},y=_,S=(n("e1a7"),n("2877")),U=Object(S["a"])(y,s,l,!1,null,"ddd951ea",null);U.options.__file="index.vue";var F=U.exports,x=F,w={name:"app",components:{VueUpload:x},data:function(){return{}},methods:{getFileName:function(e){return e.name}}},k=w,L=(n("7c55"),Object(S["a"])(k,r,a,!1,null,null,null));L.options.__file="App.vue";var O=L.exports;new i["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var i=n("5c48"),r=n.n(i);r.a},de02:function(e,t,n){},e1a7:function(e,t,n){"use strict";var i=n("de02"),r=n.n(i);r.a}});
//# sourceMappingURL=app.941545fb.js.map