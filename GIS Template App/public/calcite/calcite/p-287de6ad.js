/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{f as t,h as o}from"./p-2cca1b5a.js";import{g as n}from"./p-471227bd.js";import{S as e}from"./p-93f9182d.js";import{S as c}from"./p-e611029b.js";const i=150;const a=2;const s=t=>t.reduce(((t,o)=>t+o),0)/t.length;const r=t=>{const o=t.filter((t=>t.slot!==e.menuActions));const n=o?.length;return{actionWidth:n?s(o.map((t=>t.clientWidth||0))):0,actionHeight:n?s(o.map((t=>t.clientHeight||0))):0}};const l=({width:t,actionWidth:o,layout:n,height:e,actionHeight:c,groupCount:i})=>{const s=n==="horizontal"?t:e;const r=n==="horizontal"?o:c;return Math.floor((s-i*a)/r)};const h=({layout:t,actionCount:o,actionWidth:n,width:e,actionHeight:c,height:i,groupCount:a})=>Math.max(o-l({width:e,actionWidth:n,layout:t,height:i,actionHeight:c,groupCount:a}),0);const u=t=>Array.from(t.querySelectorAll("calcite-action")).filter((t=>t.closest("calcite-action-menu")?t.slot===c.trigger:true));const p=({actionGroups:o,expanded:n,overflowCount:c})=>{let i=c;o.reverse().forEach((o=>{let c=0;const a=u(o).reverse();a.forEach((t=>{if(t.slot===e.menuActions){t.removeAttribute("slot");t.textEnabled=n}}));if(i>0){a.some((t=>{const o=a.filter((t=>!t.slot));if(o.length>1&&a.length>2&&!t.closest("calcite-action-menu")){t.textEnabled=true;t.setAttribute("slot",e.menuActions);c++;if(c>1){i--}}return i<1}))}t(o)}))};const f={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function d(t,o){return t||o.closest("calcite-shell-panel")?.position||"start"}function g({el:t,expanded:o}){u(t).filter((t=>t.slot!==e.menuActions)).forEach((t=>t.textEnabled=o));t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t=>t.expanded=o))}const m=({tooltip:t,referenceElement:o,expanded:n,ref:e})=>{if(t){t.referenceElement=!n&&o?o:null}if(e){e(o)}return o};const x=({expanded:t,expandText:e,collapseText:c,toggle:i,el:a,position:s,tooltip:r,ref:l,scale:h})=>{const u=n(a)==="rtl";const p=t?c:e;const g=[f.chevronsLeft,f.chevronsRight];if(u){g.reverse()}const x=d(s,a)==="end";const C=x?g[1]:g[0];const b=x?g[0]:g[1];const v=o("calcite-action",{icon:t?C:b,onClick:i,scale:h,text:p,textEnabled:t,title:!t&&!r?p:null,ref:o=>m({tooltip:r,referenceElement:o,expanded:t,ref:l})});return v};export{x as E,p as a,h as b,r as g,i as o,u as q,g as t};
//# sourceMappingURL=p-287de6ad.js.map