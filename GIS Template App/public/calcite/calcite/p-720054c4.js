/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import"./p-2cca1b5a.js";function t(t,n,i){const r=s(t);return new r(n,i)}function s(t){class s extends window.MutationObserver{constructor(t){super(t);this.observedEntry=[];this.callback=t}observe(t,s){this.observedEntry.push({target:t,options:s});return super.observe(t,s)}unobserve(t){const s=this.observedEntry.filter((s=>s.target!==t));this.observedEntry=[];this.callback(super.takeRecords(),this);this.disconnect();s.forEach((t=>this.observe(t.target,t.options)))}}return function(){return t==="intersection"?window.IntersectionObserver:t==="mutation"?s:window.ResizeObserver}()}export{t as c};
//# sourceMappingURL=p-720054c4.js.map