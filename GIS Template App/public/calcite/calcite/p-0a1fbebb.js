/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
const n=/^[0-9A-F]$/i;const t=/^#[0-9A-F]{3}$/i;const r=/^#[0-9A-F]{6}$/i;const s=/^#[0-9A-F]{4}$/i;const e=/^#[0-9A-F]{8}$/i;const a=n=>Number((n*100).toFixed());const u=n=>Number((n/100).toFixed(2));function f(n,t=false){return o(n,t)||i(n,t)}function c(n,t,r){if(!n){return false}return n.length===t&&r.test(n)}function o(n,r=false){const e=r?5:4;const a=r?s:t;return c(n,e,a)}function i(n,t=false){const s=t?9:7;const a=t?e:r;return c(n,s,a)}function l(n,t=false,r=false){n=n.toLowerCase();if(!n.startsWith("#")){n=`#${n}`}if(o(n,t)){return h(p(n,t))}if(t&&r&&f(n,false)){const t=o(n,false);return h(p(`${n}${t?"f":"ff"}`,true))}return n}function $(n,t=false){return t?n.hexa():n.hex()}function h(n){const{r:t,g:r,b:s}=n;const e=b(t);const a=b(r);const u=b(s);const f="a"in n?b(n.a*255):"";return`#${e}${a}${u}${f}`.toLowerCase()}function b(n){return n.toString(16).padStart(2,"0")}function S(n){const t={...n,a:n.alpha??1};delete t.alpha;return t}function g(n){const t={...n,alpha:n.a??1};delete t.a;return t}function p(n,t=false){if(!f(n,t)){return null}n=n.replace("#","");let r;let s;let e;let a;const u=n.length===3||n.length===4;if(u){const[t,u,f,c]=n.split("");r=parseInt(`${t}${t}`,16);s=parseInt(`${u}${u}`,16);e=parseInt(`${f}${f}`,16);a=parseInt(`${c}${c}`,16)/255}else{r=parseInt(n.slice(0,2),16);s=parseInt(n.slice(2,4),16);e=parseInt(n.slice(4,6),16);a=parseInt(n.slice(6,8),16)/255}return isNaN(a)?{r,g:s,b:e}:{r,g:s,b:e,a}}const A=n=>n;const H=A({HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"});const I=A({RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"});function C(n){if(typeof n==="string"){if(n.startsWith("#")){const{length:t}=n;if(t===4||t===7){return H.HEX}if(t===5||t===9){return H.HEXA}}if(n.startsWith("rgba(")){return H.RGBA_CSS}if(n.startsWith("rgb(")){return H.RGB_CSS}if(n.startsWith("hsl(")){return H.HSL_CSS}if(n.startsWith("hsla(")){return H.HSLA_CSS}}if(typeof n==="object"){if(F(n,"r","g","b")){return F(n,"a")?I.RGBA:I.RGB}if(F(n,"h","s","l")){return F(n,"a")?I.HSLA:I.HSL}if(F(n,"h","s","v")){return F(n,"a")?I.HSVA:I.HSV}}return null}function F(n,...t){return t.every((t=>t&&n&&`${t}`in n))}function B(n,t){return n?.rgb().array().toString()===t?.rgb().array().toString()}function G(n){return n===H.HEXA||n===H.RGBA_CSS||n===H.HSLA_CSS||n===I.RGBA||n===I.HSLA||n===I.HSVA}function L(n){const t=n===H.HEX?H.HEXA:n===H.RGB_CSS?H.RGBA_CSS:n===H.HSL_CSS?H.HSLA_CSS:n===I.RGB?I.RGBA:n===I.HSL?I.HSLA:n===I.HSV?I.HSVA:n;return t}function N(n){const t=n===H.HEXA?H.HEX:n===H.RGBA_CSS?H.RGB_CSS:n===H.HSLA_CSS?H.HSL_CSS:n===I.RGBA?I.RGB:n===I.HSLA?I.HSL:n===I.HSVA?I.HSV:n;return t}export{H as C,$ as a,a as b,G as c,g as d,B as e,S as f,L as g,p as h,f as i,i as j,n as k,l as n,u as o,C as p,h as r,N as t};
//# sourceMappingURL=p-0a1fbebb.js.map