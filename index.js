// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,e="function"==typeof r?r.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,f,i,y,a;if(null==t)return n.call(t);f=t[e],a=e,r=null!=(y=t)&&o.call(y,a);try{t[e]=void 0}catch(o){return n.call(t)}return i=n.call(t),r?t[e]=f:delete t[e],i}:function(t){return n.call(t)},i="function"==typeof Float32Array,y=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0,u=function(){var t,n,o;if("function"!=typeof a)return!1;try{n=new a([1,3.14,-3.14,5e40]),o=n,t=(i&&o instanceof Float32Array||"[object Float32Array]"===f(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===y}catch(n){t=!1}return t}()?l:function(){throw new Error("not implemented")},c="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0,b=function(){var t,n,o;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(c&&o instanceof Uint32Array||"[object Uint32Array]"===f(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")},m=new u(1),A=new b(m.buffer);return function(t){return m[0]=t,A[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).toWordf=n();
//# sourceMappingURL=index.js.map
