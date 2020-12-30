!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DynamicStylesheet=t():e.DynamicStylesheet=t()}(self,(function(){return(()=>{"use strict";var e={564:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!t||"object"!==n(t))return 0;var i=0,l=[],a=function(){for(var t=0;t<l.length;t++){var n=l[t].trim();n&&";"!==n.charAt(n.length-1)&&(l[t]=n+";")}if(l=l.join("")){var o=r.join("").trim();(e.sheet||{}).insertRule?e.sheet.insertRule(o+"{"+l+"}",s+i):(e.styleSheet||e.sheet).addRule(o,l,s+i),i++}l=[]};if(Array.isArray(t))for(var u=0;u<t.length;u++){var c=t[u];"string"==typeof c?l.push(c):"object"===n(c)&&(a(),i+=o(e,c,r,s+i))}else for(var h in t)if(t.hasOwnProperty(h)){var f=t[h];"string"==typeof f?l.push(h+":"+f+";"):"object"===n(f)&&(a(),"&"===h.charAt(0)?h=h.substr(1):[">",":","+","~"," "].indexOf(h.charAt(0))<0&&(h=" "+h),i+=o(e,f,r.concat([h]),s+i))}return a(),i}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e||"object"!==n(e))return 0;var r="",o=[],i=function(){for(var e=[],n=0;n<o.length;n++){var s=o[n].trim();s&&(";"===s.charAt(s.length-1)?e.push(s):e.push(s+";"))}if(e.length){e=e.join("\n\t");var i=t.join("").trim();r+="\n"+i+" {\n\t"+e+"\n}"}o=[]};if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];"string"==typeof a?o.push(a):"object"===n(a)&&(i(),r+=s(a,t.concat([""])))}else for(var u in e)if(e.hasOwnProperty(u)){var c=e[u];"string"==typeof c?o.push(u+": "+c+";"):"object"===n(c)&&(i(),"&"===u.charAt(0)?u=u.substr(1):[">",":","+","~"," "].indexOf(u.charAt(0))<0&&(u=" "+u),r+=s(c,t.concat([u])))}return i(),r+(t.length?"":"\n")}r.r(t),r.d(t,{addStylesheetRules:()=>o,buildStylesheetCSS:()=>s,default:()=>u});var i=function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"dynamic-stylesheet",staticStyle:{display:"none"}})};i._withStripped=!0;var l=function(e,t,r,n,o,s,i,l){var a,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=[],u._compiled=!0),a)if(u.functional){u._injectStyles=a;var c=u.render;u.render=function(e,t){return a.call(t),c(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,a):[a]}return{exports:e,options:u}}({props:{rules:[Object,Array],innerMarkupOutput:Boolean},watch:{rules:{deep:!0,handler:function(){this.recreateSheet()}}},mounted:function(){this.recreateSheet()},beforeDestroy:function(){this.removeSheet()},methods:{recreateSheet:function(){if(this.$stylesheet&&(this.$el.removeChild(this.$stylesheet),this.$stylesheet=null),this.rules){var e=document.createElement("style");e.type="text/css",this.$el.appendChild(e),this.$stylesheet=e,!e.styleSheet&&!e.sheet||this.innerMarkupOutput?e.innerHTML=s(this.rules):o(e,this.rules)}},removeSheet:function(){this.$stylesheet&&(this.$el.removeChild(this.$stylesheet),this.$stylesheet=null)}}},i);l.options.__file="dynamic-stylesheet.vue";const a=l.exports,u=a;window.Vue&&Vue.component("dynamic-stylesheet",a)}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(564)})()}));