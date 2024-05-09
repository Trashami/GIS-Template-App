/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{r as e,c as t,h as i,g as s,F as a,H as n}from"./p-2cca1b5a.js";import{c as o}from"./p-720054c4.js";import{d as c}from"./p-471227bd.js";import{c as l,d as r,a as d,H as h}from"./p-028b0bc6.js";import{c as p,d as f,u,I as m}from"./p-827bd580.js";import{c as b,d as g,g as v}from"./p-45e5e6ed.js";import{s as y,a as w,c as x}from"./p-01eca752.js";import{g as C}from"./p-c6aeed91.js";import{V as k}from"./p-3870e69b.js";import"./p-46e63924.js";import"./p-696889fe.js";import"./p-7a70c542.js";const z=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";const O=z;const P=class{constructor(i){e(this,i);this.calciteInternalOptionChange=t(this,"calciteInternalOptionChange",6);this.mutationObserver=o("mutation",(()=>{this.ensureTextContentDependentProps();this.calciteInternalOptionChange.emit()}));this.disabled=false;this.label=undefined;this.selected=undefined;this.value=undefined}handlePropChange(e,t,i){if(i==="label"||i==="value"){this.ensureTextContentDependentProps()}this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:t,internallySetValue:i,label:s,value:a}=this;if(!s||s===t){this.label=e;this.internallySetLabel=e}if(a==null||a===i){this.value=e;this.internallySetValue=e}}connectedCallback(){this.ensureTextContentDependentProps();this.mutationObserver?.observe(this.el,{attributeFilter:["label","value"],characterData:true,childList:true,subtree:true})}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){return i("slot",{key:"5da42b98d7f8d5a6036f9b2a4f45113752289d6d"},this.label)}get el(){return s(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};P.style=O;const I=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";const j=I;const L=class{constructor(i){e(this,i);this.calciteInternalOptionGroupChange=t(this,"calciteInternalOptionGroupChange",6);this.disabled=false;this.label=undefined}handlePropChange(){this.calciteInternalOptionGroupChange.emit()}render(){return i(a,{key:"52990dfd78732b297a9693682994eac13de0ea6c"},i("div",{key:"f8907d01f123eb1f3df0055cafc6bba8d6067080"},this.label),i("slot",{key:"393f15738c365072299d1b60be1408a5e86a95f3"}))}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"]}}};L.style=j;const E={icon:"icon",iconContainer:"icon-container",select:"select",wrapper:"wrapper"};const T=":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.wrapper{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}.wrapper:focus-within .icon,.wrapper:active .icon,.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .wrapper{block-size:1.5rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .wrapper{block-size:2rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .wrapper{block-size:44px}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:inherit;color:var(--calcite-color-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}select:disabled{border-color:var(--calcite-color-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:transparent;color:var(--calcite-color-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.icon-container .icon{color:var(--calcite-color-text-3)}:host([status=invalid]) select,:host([status=invalid]) .icon-container{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) select:focus,:host([status=invalid]) .icon-container:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.select:focus~.icon-container{border-color:transparent}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const A=T;function N(e){return e.tagName==="CALCITE-OPTION"}function H(e){return e.tagName==="CALCITE-OPTION-GROUP"}const F=class{constructor(i){e(this,i);this.calciteSelectChange=t(this,"calciteSelectChange",6);this.componentToNativeEl=new Map;this.mutationObserver=o("mutation",(()=>this.populateInternalSelect()));this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e);requestAnimationFrame((()=>this.emitChangeEvent()))};this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>e.tagName==="CALCITE-OPTION"||e.tagName==="CALCITE-OPTION-GROUP"));this.clearInternalSelect();e.forEach((e=>this.selectEl?.append(this.toNativeElement(e))))};this.storeSelectRef=e=>{this.selectEl=e;this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)};this.emitChangeEvent=()=>{this.calciteSelectChange.emit()};this.disabled=false;this.form=undefined;this.label=undefined;this.validationMessage=undefined;this.validationIcon=undefined;this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.name=undefined;this.required=false;this.scale="m";this.status="idle";this.value=null;this.selectedOption=undefined;this.width="auto"}valueHandler(e){const t=this.el.querySelectorAll("calcite-option");t.forEach((t=>t.selected=t.value===e))}selectedOptionHandler(e){this.value=e?.value}connectedCallback(){const{el:e}=this;this.mutationObserver?.observe(e,{subtree:true,childList:true});p(this);b(this);l(this)}disconnectedCallback(){this.mutationObserver?.disconnect();f(this);g(this);r(this)}componentWillLoad(){y(this)}componentDidLoad(){w(this);d(this,this.selectedOption?.value??"")}componentDidRender(){u(this)}async setFocus(){await x(this);c(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target;const i=this.componentToNativeEl.get(t);if(!i){return}this.updateNativeElement(t,i);if(N(t)&&t.selected){this.deselectAllExcept(t);this.selectedOption=t}}onLabelClick(){this.setFocus()}updateNativeElement(e,t){t.disabled=e.disabled;t.label=e.label;if(N(e)){const i=t;i.selected=e.selected;i.value=e.value;i.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove()));this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e){return}let t;this.componentToNativeEl.forEach(((i,s)=>{if(N(s)&&i===e){s.selected=true;t=s;this.deselectAllExcept(s)}}));if(t){this.selectedOption=t}}toNativeElement(e){if(N(e)){const t=document.createElement("option");this.updateNativeElement(e,t);this.componentToNativeEl.set(e,t);return t}if(H(e)){const t=document.createElement("optgroup");this.updateNativeElement(e,t);Array.from(e.children).forEach((i=>{const s=this.toNativeElement(i);t.append(s);this.componentToNativeEl.set(e,s)}));this.componentToNativeEl.set(e,t);return t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{if(t===e){return}t.selected=false}))}renderChevron(){return i("div",{class:E.iconContainer},i("calcite-icon",{class:E.icon,icon:"chevron-down",scale:C(this.scale)}))}render(){const{disabled:e}=this;return i(n,{key:"86822f587da89633e725f5fe6426f588f367b266"},i(m,{key:"93d728f3ee9cee364d439d7af2eda096a93bee10",disabled:e},i("div",{key:"e399054306a1f62b920ffbd0276fcb2da35950ad",class:E.wrapper},i("select",{key:"61e58c1f549ab066e6508efad18ec20a0629bb87","aria-label":v(this),class:E.select,disabled:e,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},i("slot",{key:"feae368c462d5562396458a434d6be9574236d20"})),this.renderChevron(),i(h,{key:"8c2ee60a5f1192b063ef0d190a44e4afbd8b66ca",component:this})),this.validationMessage&&this.status==="invalid"?i(k,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}get el(){return s(this)}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}};F.style=A;export{P as calcite_option,L as calcite_option_group,F as calcite_select};
//# sourceMappingURL=p-ee64d295.entry.js.map