/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{h as t,r as i,c as e,H as s,g as a}from"./p-2cca1b5a.js";import{c as n,d as o,H as c}from"./p-028b0bc6.js";import{g as r}from"./p-46e63924.js";import{c as l,d as h,u as d,I as u}from"./p-827bd580.js";import{c as p,d as f}from"./p-45e5e6ed.js";import{s as b,a as m,c as g}from"./p-01eca752.js";import{c as v,d as y}from"./p-4a2aba9a.js";import{u as k,c as w,s as x,d as j}from"./p-9ca50819.js";import{f as z}from"./p-471227bd.js";import"./p-7a70c542.js";import"./p-c6aeed91.js";import"./p-f8ee4dc8.js";import"./p-720054c4.js";import"./p-696889fe.js";const C=({full:i,scale:e,partial:s})=>t("calcite-icon",{class:s?undefined:"icon",icon:i?"star-f":"star",scale:e});const L=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-color-border-input)}.star:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-color-status-warning)}.hovered,.selected{color:var(--calcite-color-brand)}.fraction{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-color-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const D=L;const I=class{constructor(t){i(this,t);this.calciteRatingChange=e(this,"calciteRatingChange",6);this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=false};this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=true;this.hoverValue=null};this.handleHostKeyDown=()=>{this.isKeyboardInteraction=true};this.handleLabelKeyDown=t=>{const i=this.getValueFromLabelEvent(t);const e=t.key;const s=e==" "?undefined:Number(e);this.emit=true;if(isNaN(s)){switch(e){case"Enter":case" ":this.value=!this.required&&this.value===i?0:i;break;case"ArrowLeft":this.value=this.getPreviousRatingValue(i);this.updateFocus();t.preventDefault();break;case"ArrowRight":this.value=this.getNextRatingValue(i);this.updateFocus();t.preventDefault();break;case"Tab":this.hoverValue=null}}else{if(!this.required&&s>=0&&s<=this.max){this.value=s}else if(this.required&&s>0&&s<=this.max){this.value=s}this.updateFocus()}};this.handleInputChange=t=>{if(this.isKeyboardInteraction===true){const i=Number(t.target["value"]);this.hoverValue=i;this.value=i}};this.handleLabelPointerOver=t=>{this.hoverValue=this.getValueFromLabelEvent(t)};this.handleLabelPointerDown=t=>{const i=t.currentTarget;const e=this.getValueFromLabelEvent(t);this.hoverValue=e;this.emit=true;this.value=!this.required&&this.value===e?0:e;i.focus()};this.handleLabelClick=t=>{t.preventDefault()};this.handleLabelFocus=t=>{const i=this.getValueFromLabelEvent(t);this.hoverValue=i};this.setLabelEl=t=>{this.labelElements.push(t)};this.emit=false;this.guid=`calcite-ratings-${r()}`;this.isKeyboardInteraction=true;this.labelElements=[];this.max=5;this.average=undefined;this.count=undefined;this.disabled=false;this.form=undefined;this.messages=undefined;this.messageOverrides=undefined;this.name=undefined;this.readOnly=false;this.required=false;this.scale="m";this.showChip=false;this.value=0;this.effectiveLocale="";this.defaultMessages=undefined;this.hoverValue=undefined}onMessagesChange(){}handleValueUpdate(t){this.hoverValue=t;if(this.emit){this.calciteRatingChange.emit()}this.emit=false}effectiveLocaleChange(){k(this,this.effectiveLocale)}connectedCallback(){l(this);v(this);w(this);p(this);n(this)}async componentWillLoad(){await x(this);b(this)}componentWillRender(){this.starsMap=Array.from({length:this.max},((t,i)=>{const e=i+1;const s=!this.hoverValue&&this.average&&!this.value&&e<=this.average;const a=e===this.value;const n=this.average&&this.average+1-e;const o=e<=this.hoverValue;const c=`${this.guid}-${e}`;const r=!this.hoverValue&&!this.value&&!o&&n>0&&n<1;const l=this.value>=e;const h=this.getTabIndex(e);return{average:s,checked:a,fraction:n,hovered:o,id:c,partial:r,selected:l,value:e,tabIndex:h}}))}componentDidLoad(){m(this)}disconnectedCallback(){h(this);y(this);j(this);f(this);o(this)}componentDidRender(){d(this)}render(){return t(s,{key:"a52cda8c257cd7d890f2828228c22e6f55da6ec8",onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},t(u,{key:"d600bf2953778bfd2b934c64afecec1075f4092a",disabled:this.disabled},t("span",{key:"fe31c08304e6ba4426aaf56fdfbd3cc660f364fc",class:"wrapper"},t("fieldset",{key:"090ccda26e6043bee537571a459df82342d416df",class:"fieldset",disabled:this.disabled},t("legend",{key:"844a839881be1428b098db9da2d462c48a218b1b",class:"visually-hidden"},this.messages.rating),this.starsMap.map((({average:i,checked:e,fraction:s,hovered:a,id:n,partial:o,selected:c,value:r,tabIndex:l})=>t("label",{class:{star:true,selected:c,hovered:a,average:i,partial:o},"data-value":r,htmlFor:n,onClick:this.handleLabelClick,onFocus:this.handleLabelFocus,onKeyDown:this.handleLabelKeyDown,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver,tabIndex:l,ref:this.setLabelEl},t("input",{checked:e,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:n,name:this.guid,onChange:this.handleInputChange,tabIndex:-1,type:"radio",value:r}),t(C,{full:c||i,scale:this.scale}),o&&t("div",{class:"fraction",style:{width:`${s*100}%`}},t(C,{full:true,partial:true,scale:this.scale})),t("span",{class:"visually-hidden"},this.messages.stars.replace("{num}",`${r}`))))),(this.count||this.average)&&this.showChip?t("calcite-chip",{scale:this.scale,value:this.count?.toString()},!!this.average&&t("span",{class:"number--average"},this.average.toString()),!!this.count&&t("span",{class:"number--count"},"(",this.count?.toString(),")")):null),t(c,{key:"a01bb6f3aae187ccacbb31607f259e9de5ce90aa",component:this}))))}onLabelClick(){this.setFocus()}updateFocus(){this.hoverValue=this.value;this.labelElements[this.value-1].focus()}getTabIndex(t){if(this.readOnly||this.value!==t&&(this.value||t!==1)){return-1}return 0}getValueFromLabelEvent(t){const i=t.currentTarget;return Number(i.getAttribute("data-value"))}getNextRatingValue(t){return t===5?1:t+1}getPreviousRatingValue(t){return t===1?5:t-1}async setFocus(){await g(this);z(this.el)}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};I.style=D;export{I as calcite_rating};
//# sourceMappingURL=p-69b6dc3c.entry.js.map