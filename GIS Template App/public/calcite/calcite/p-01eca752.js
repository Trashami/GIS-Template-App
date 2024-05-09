/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{f as n}from"./p-2cca1b5a.js";const a=new WeakMap;const e=new WeakMap;function s(n){e.set(n,new Promise((e=>a.set(n,e))))}function t(n){a.get(n)()}function o(n){return e.get(n)}async function r(a){await o(a);n(a);return new Promise((n=>requestAnimationFrame((()=>n()))))}export{t as a,o as b,r as c,s};
//# sourceMappingURL=p-01eca752.js.map