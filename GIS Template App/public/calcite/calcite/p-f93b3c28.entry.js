/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{r as e,c as t,h as s,H as i,g as o}from"./p-2cca1b5a.js";import{t as a}from"./p-471227bd.js";import{c,d as n,H as l}from"./p-028b0bc6.js";import{g as r}from"./p-46e63924.js";import{c as h,d,u as f,I as p}from"./p-827bd580.js";import{i as b}from"./p-f8ee4dc8.js";import{c as u,d as m,g}from"./p-45e5e6ed.js";import{c as k,s as v,a as x}from"./p-01eca752.js";import"./p-696889fe.js";import"./p-7a70c542.js";import"./p-c6aeed91.js";const y=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input);color:var(--calcite-color-background)}:host([status=invalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status=invalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.toggle::after{content:"";inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute;transform:translateX(-50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}';const w=y;const z=class{constructor(s){e(this,s);this.calciteInternalCheckboxBlur=t(this,"calciteInternalCheckboxBlur",6);this.calciteCheckboxChange=t(this,"calciteCheckboxChange",6);this.calciteInternalCheckboxFocus=t(this,"calciteInternalCheckboxFocus",6);this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";this.indeterminatePath="M13 8v1H3V8z";this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"";this.toggle=()=>{if(!this.disabled){this.checked=!this.checked;this.setFocus();this.indeterminate=false;this.calciteCheckboxChange.emit()}};this.keyDownHandler=e=>{if(b(e.key)){this.toggle();e.preventDefault()}};this.clickHandler=()=>{if(this.disabled){return}this.toggle()};this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(false)};this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(true)};this.onLabelClick=()=>{this.toggle()};this.checked=false;this.disabled=false;this.form=undefined;this.guid=undefined;this.hovered=false;this.indeterminate=false;this.label=undefined;this.name=undefined;this.required=false;this.scale="m";this.status="idle";this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.value=undefined}async setFocus(){await k(this);this.toggleEl?.focus()}syncHiddenFormInput(e){e.type="checkbox"}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${r()}`;h(this);u(this);c(this)}disconnectedCallback(){d(this);m(this);n(this)}componentWillLoad(){v(this)}componentDidLoad(){x(this)}componentDidRender(){f(this)}render(){return s(i,{key:"6ef0c5b4fe62f003d9fe1ea6979cb5aeb564dac7",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},s(p,{key:"72f94ddb0795e2e0d10aac69af05c1ce7d6e5ead",disabled:this.disabled},s("div",{key:"1cfc46f5a7180d6cd52962a26488c66eec14d852","aria-checked":a(this.checked),"aria-label":g(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,role:"checkbox",tabIndex:this.disabled?undefined:0,ref:e=>this.toggleEl=e},s("svg",{key:"4956ac9d598af8267781610220896e07aad56c65","aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},s("path",{key:"bd650b149977569e00a99be2fbc8a836cbfd4cfe",d:this.getPath()})),s("slot",{key:"604e420b7fe7014a202991d0e5c992e57d540d16"})),s(l,{key:"9ec0eab7c20a9dffed6a1a9b517ece8b8ed1cb26",component:this})))}get el(){return o(this)}};z.style=w;export{z as calcite_checkbox};
//# sourceMappingURL=p-f93b3c28.entry.js.map