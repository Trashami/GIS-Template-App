/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{r as t,c as i,h as e,g as a}from"./p-2cca1b5a.js";import{c as n,u as o,d as c,I as s}from"./p-827bd580.js";import{c as l,s as r,a as d}from"./p-01eca752.js";import"./p-7a70c542.js";const h={container:"container",dividerContainer:"divider-container",divider:"divider",widthAuto:"width-auto",widthHalf:"width-half",widthFull:"width-full"};const p=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host:host([kind=brand]){--calcite-split-button-background:var(--calcite-color-brand);--calcite-split-button-divider:var(--calcite-color-foreground-1)}:host:host([kind=danger]){--calcite-split-button-background:var(--calcite-color-status-danger);--calcite-split-button-divider:var(--calcite-color-foreground-1)}:host:host([kind=neutral]){--calcite-split-button-background:var(--calcite-color-foreground-3);--calcite-split-button-divider:var(--calcite-color-text-1)}:host:host([kind=inverse]){--calcite-split-button-background:var(--calcite-color-inverse);--calcite-split-button-divider:var(--calcite-color-foreground-1)}:host([appearance=transparent]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-color-brand);--calcite-split-button-background:transparent}:host([appearance=transparent]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-color-status-danger);--calcite-split-button-background:transparent}:host([appearance=transparent]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-color-text-1);--calcite-split-button-background:transparent}:host([appearance=transparent]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-color-foreground-1);--calcite-split-button-background:transparent}:host([appearance=outline]){--calcite-split-button-background:transparent}:host([appearance=outline-fill]){--calcite-split-button-background:var(--calcite-color-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-color-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-color-status-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-color-border-1);--calcite-split-button-background:var(--calcite-color-border-1)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-color-inverse)}.container{display:flex;align-items:stretch}.container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}.divider-container{display:flex;inline-size:1px;align-items:stretch;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-split-button-background)}.divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]) .divider-container,:host([appearance=outline]) .divider-container{border-block:1px solid var(--calcite-split-button-divider)}:host([appearance=outline-fill]):hover .divider-container,:host([appearance=outline]):hover .divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:hover) .divider-container,:host([appearance=outline]:hover) .divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-split-button-divider:var(--calcite-color-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-split-button-divider:var(--calcite-color-status-danger-press)}:host([appearance=outline-fill]:focus-within) .divider-container,:host([appearance=outline]:focus-within) .divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .divider-container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const u=p;const b=class{constructor(e){t(this,e);this.calciteSplitButtonPrimaryClick=i(this,"calciteSplitButtonPrimaryClick",6);this.calciteSplitButtonSecondaryClick=i(this,"calciteSplitButtonSecondaryClick",6);this.calciteSplitButtonPrimaryClickHandler=()=>this.calciteSplitButtonPrimaryClick.emit();this.calciteSplitButtonSecondaryClickHandler=()=>this.calciteSplitButtonSecondaryClick.emit();this.appearance="solid";this.kind="brand";this.disabled=false;this.active=false;this.dropdownIconType="chevron";this.dropdownLabel=undefined;this.loading=false;this.overlayPositioning="absolute";this.primaryIconEnd=undefined;this.primaryIconFlipRtl=undefined;this.primaryIconStart=undefined;this.primaryLabel=undefined;this.primaryText=undefined;this.scale="m";this.width="auto"}handleDisabledChange(t){if(!t){this.active=false}}activeHandler(){if(this.disabled){this.active=false}}async setFocus(){await l(this);this.el.focus()}connectedCallback(){n(this)}componentWillLoad(){r(this)}componentDidLoad(){d(this)}componentDidRender(){o(this)}disconnectedCallback(){c(this)}render(){const t=this.width==="auto"?"auto":"full";return e(s,{key:"5bca9f9751e7f7ff1a4fb5bde5dd2cf8adeb039b",disabled:this.disabled},e("div",{key:"d8d95651c49144034a5356b045b39a9b80ed8778",class:h.container},e("calcite-button",{key:"d882eca49b2d32c0c366bac900c01b6f448e2af6",appearance:this.appearance,disabled:this.disabled,"icon-end":this.primaryIconEnd?this.primaryIconEnd:null,"icon-start":this.primaryIconStart?this.primaryIconStart:null,iconFlipRtl:this.primaryIconFlipRtl?this.primaryIconFlipRtl:null,kind:this.kind,label:this.primaryLabel,loading:this.loading,onClick:this.calciteSplitButtonPrimaryClickHandler,scale:this.scale,splitChild:"primary",type:"button",width:t},this.primaryText),e("div",{key:"7756c7e247a7d74c94d635b7da4e23e25588ccdc",class:h.dividerContainer},e("div",{key:"b855b43e1338dd73b8f9fa27217843bb0e1bdf64",class:h.divider})),e("calcite-dropdown",{key:"ab0fba71ae22c3af9563f99a5ac0feb51be0fb9f",disabled:this.disabled,onClick:this.calciteSplitButtonSecondaryClickHandler,open:this.active,overlayPositioning:this.overlayPositioning,placement:"bottom-end",scale:this.scale,"width-scale":this.scale},e("calcite-button",{key:"6b94ce6f08d225bff2be6a3ece459e991436835d",appearance:this.appearance,disabled:this.disabled,"icon-start":this.dropdownIcon,kind:this.kind,label:this.dropdownLabel,scale:this.scale,slot:"trigger",splitChild:"secondary",type:"button"}),e("slot",{key:"d7ddac81064109f923f0e871b59ff38128a17ab8"}))))}get dropdownIcon(){return this.dropdownIconType==="chevron"?"chevronDown":this.dropdownIconType==="caret"?"caretDown":this.dropdownIconType==="ellipsis"?"ellipsis":"handle-vertical"}static get delegatesFocus(){return true}get el(){return a(this)}static get watchers(){return{disabled:["handleDisabledChange"],active:["activeHandler"]}}};b.style=u;export{b as calcite_split_button};
//# sourceMappingURL=p-b6803350.entry.js.map