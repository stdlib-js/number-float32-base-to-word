// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,f,i,y,a;if(null==t)return n.call(t);f=t[r],a=r,e=null!=(y=t)&&o.call(y,a);try{t[r]=void 0}catch(o){return n.call(t)}return i=n.call(t),e?t[r]=f:delete t[r],i}:function(t){return n.call(t)},f="function"==typeof Float32Array,i=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null,a="function"==typeof Float32Array?Float32Array:void 0,l=function(){var t,n,o;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,5e40]),o=n,t=(f&&o instanceof Float32Array||"[object Float32Array]"===e(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===i}catch(n){t=!1}return t}()?a:function(){throw new Error("not implemented")},u="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0,d=function(){var t,n,o;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(u&&o instanceof Uint32Array||"[object Uint32Array]"===e(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")},b=new l(1),m=new d(b.buffer);return function(t){return b[0]=t,m[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).toWordf=n();
//# sourceMappingURL=index.js.map
