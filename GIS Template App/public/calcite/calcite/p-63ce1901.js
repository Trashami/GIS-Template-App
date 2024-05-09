/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{h as t}from"./p-2cca1b5a.js";const o={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};const r={width:12,height:6,strokeWidth:1};const e=({floatingLayout:e,key:i,ref:a})=>{const{width:s,height:c,strokeWidth:n}=r;const h=s/2;const d=e==="vertical";const l="M0,0"+` H${s}`+` L${s-h},${c}`+` Q${h},${c} ${h},${c}`+" Z";return t("svg",{"aria-hidden":"true",class:o.arrow,height:s,key:i,viewBox:`0 0 ${s} ${s+(!d?n:0)}`,width:s+(d?n:0),ref:a},n>0&&t("path",{class:o.arrowStroke,d:l,fill:"none","stroke-width":n+1}),t("path",{d:l,stroke:"none"}))};export{e as F};
//# sourceMappingURL=p-63ce1901.js.map