/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{r as e,c as t,h as i,g as s}from"./p-2cca1b5a.js";import{f as a}from"./p-356d6723.js";import{c as n,u as o,d as c,I as r}from"./p-827bd580.js";import{s as l,a as d,c as h}from"./p-01eca752.js";import{c as p,d as f}from"./p-4a2aba9a.js";import{u as m,s as u,c as b,d as g}from"./p-9ca50819.js";import{d as y}from"./p-991190ac.js";import"./p-7a70c542.js";import"./p-471227bd.js";import"./p-46e63924.js";import"./p-696889fe.js";import"./p-f8ee4dc8.js";import"./p-720054c4.js";const v={container:"container",searchIcon:"search-icon"};const x={search:"search",close:"x"};const j=250;const k=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}";const w=k;const z=class{constructor(i){e(this,i);this.calciteFilterChange=t(this,"calciteFilterChange",6);this.filterDebounced=y(((e,t=false,i)=>this.items.length&&this.updateFiltered(a(this.items,e),t,i)),j);this.inputHandler=e=>{const t=e.target;this.value=t.value;this.filterDebounced(t.value,true)};this.keyDownHandler=e=>{if(e.defaultPrevented){return}if(e.key==="Escape"){this.clear();e.preventDefault()}if(e.key==="Enter"){e.preventDefault()}};this.clear=()=>{this.value="";this.filterDebounced("",true);this.setFocus()};this.items=[];this.disabled=false;this.filteredItems=[];this.placeholder=undefined;this.scale="m";this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}watchItemsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(e){this.filterDebounced(e)}effectiveLocaleChange(){m(this,this.effectiveLocale)}async componentWillLoad(){l(this);if(this.items.length){this.updateFiltered(a(this.items,this.value))}await u(this)}connectedCallback(){n(this);p(this);b(this)}componentDidRender(){o(this)}disconnectedCallback(){c(this);f(this);g(this);this.filterDebounced.cancel()}componentDidLoad(){d(this)}async filter(e=this.value){return new Promise((t=>{this.value=e;this.filterDebounced(e,false,t)}))}async setFocus(){await h(this);this.el?.focus()}updateFiltered(e,t=false,i){this.filteredItems=e;if(t){this.calciteFilterChange.emit()}i?.()}render(){const{disabled:e,scale:t}=this;return i(r,{key:"f7270a6dc848da7a11ffeffd783836d083f75378",disabled:e},i("div",{key:"7fe378823d3a5c458fcf385ffce80b498a599fa8",class:v.container},i("label",{key:"7ff51820e2e168353ff00629c3bcbc9e5b13ef54"},i("calcite-input",{key:"bc6bb09f4a967f31a55d000e377379842d150f1c",clearable:true,disabled:e,icon:x.search,label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,scale:t,type:"text",value:this.value,ref:e=>{this.textInput=e}}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{items:["watchItemsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};z.style=w;export{z as calcite_filter};
//# sourceMappingURL=p-671f482d.entry.js.map