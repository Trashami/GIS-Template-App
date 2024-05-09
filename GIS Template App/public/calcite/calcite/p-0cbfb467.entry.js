/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{r as t,c as e,h as i,F as s,g as n}from"./p-2cca1b5a.js";import{g as o}from"./p-fe5d2d5f.js";import{t as a,d as r}from"./p-471227bd.js";import{g as c}from"./p-46e63924.js";import{i as l}from"./p-f8ee4dc8.js";import{s as h,a as d,c as u}from"./p-01eca752.js";import{a as p,C as f,I as m,S as b}from"./p-e611029b.js";import"./p-696889fe.js";const x=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";const g=x;const v=["ArrowUp","ArrowDown","End","Home"];const I=class{constructor(i){t(this,i);this.calciteActionMenuOpen=e(this,"calciteActionMenuOpen",6);this.actionElements=[];this.guid=`calcite-action-menu-${c()}`;this.menuId=`${this.guid}-menu`;this.menuButtonId=`${this.guid}-menu-button`;this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:i,label:s}=this;const n=this.slottedMenuButtonEl||this.defaultMenuButtonEl;if(this.menuButtonEl===n){return}this.disconnectMenuButtonEl();this.menuButtonEl=n;this.setTooltipReferenceElement();if(!n){return}n.active=i;n.setAttribute("aria-controls",e);n.setAttribute("aria-expanded",a(i));n.setAttribute("aria-haspopup","true");if(!n.id){n.id=t}if(!n.label){n.label=s}if(!n.text){n.text=s}n.addEventListener("click",this.menuButtonClick);n.addEventListener("keydown",this.menuButtonKeyDown)};this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;if(!t){return}t.removeEventListener("click",this.menuButtonClick);t.removeEventListener("keydown",this.menuButtonKeyDown)};this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t?.matches("calcite-action")));this.slottedMenuButtonEl=e[0];this.connectMenuButtonEl()};this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t;this.connectMenuButtonEl()};this.handleCalciteActionClick=()=>{this.open=false;this.setFocus()};this.menuButtonClick=()=>{this.toggleOpen()};this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t?.matches("calcite-tooltip")));this.tooltipEl=e[0];this.setTooltipReferenceElement()};this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:i,open:s}=this;if(t){t.referenceElement=!e&&!s?i:null}};this.updateAction=(t,e)=>{const{guid:i,activeMenuItemIndex:s}=this;const n=`${i}-action-${e}`;t.tabIndex=-1;t.setAttribute("role","menuitem");if(!t.id){t.id=n}t.toggleAttribute(p,e===s)};this.updateActions=t=>{t?.forEach(this.updateAction)};this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:true}).reduce(((t,e)=>{if(e?.matches("calcite-action")){t.push(e);return t}if(e?.matches("calcite-action-group")){return t.concat(Array.from(e.querySelectorAll("calcite-action")))}return t}),[]);this.actionElements=e.filter((t=>!t.disabled&&!t.hidden))};this.menuButtonKeyDown=t=>{const{key:e}=t;const{actionElements:i,activeMenuItemIndex:s,open:n}=this;if(!i.length){return}if(l(e)){t.preventDefault();if(!n){this.toggleOpen();return}const e=i[s];e?e.click():this.toggleOpen(false)}if(e==="Tab"){this.open=false;return}if(e==="Escape"){this.toggleOpen(false);t.preventDefault();return}this.handleActionNavigation(t,e,i)};this.handleActionNavigation=(t,e,i)=>{if(!this.isValidKey(e,v)){return}t.preventDefault();if(!this.open){this.toggleOpen();if(e==="Home"||e==="ArrowDown"){this.activeMenuItemIndex=0}if(e==="End"||e==="ArrowUp"){this.activeMenuItemIndex=i.length-1}return}if(e==="Home"){this.activeMenuItemIndex=0}if(e==="End"){this.activeMenuItemIndex=i.length-1}const s=this.activeMenuItemIndex;if(e==="ArrowUp"){this.activeMenuItemIndex=o(Math.max(s-1,-1),i.length)}if(e==="ArrowDown"){this.activeMenuItemIndex=o(s+1,i.length)}};this.toggleOpenEnd=()=>{this.setFocus();this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)};this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd);this.open=t};this.handlePopoverOpen=()=>{this.open=true};this.handlePopoverClose=()=>{this.open=false};this.appearance="solid";this.expanded=false;this.flipPlacements=undefined;this.label=undefined;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.scale=undefined;this.menuButtonEl=undefined;this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){h(this)}componentDidLoad(){d(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=false;this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1;if(this.menuButtonEl){this.menuButtonEl.active=t}this.calciteActionMenuOpen.emit();this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await u(this);return r(this.menuButtonEl)}renderMenuButton(){const{appearance:t,label:e,scale:s,expanded:n}=this;const o=i("slot",{name:b.trigger,onSlotchange:this.setMenuButtonEl},i("calcite-action",{appearance:t,class:f.defaultTrigger,icon:m.menu,scale:s,text:e,textEnabled:n,ref:this.setDefaultMenuButtonEl}));return o}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:s,menuId:n,menuButtonEl:o,label:a,placement:r,overlayPositioning:c,flipPlacements:l}=this;const h=t[e];const d=h?.id||null;return i("calcite-popover",{autoClose:true,flipPlacements:l,focusTrapDisabled:true,label:a,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:s,overlayPositioning:c,placement:r,pointerDisabled:true,referenceElement:o},i("div",{"aria-activedescendant":d,"aria-labelledby":o?.id,class:f.menu,id:n,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},i("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return i(s,{key:"172df111e58778a1006253a0eb444e767ad2d12b"},this.renderMenuButton(),this.renderMenuItems(),i("slot",{key:"1df982aa86cbdd0c2c7d847e9b6f0a4d35b5ba15",name:b.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return n(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};I.style=g;export{I as calcite_action_menu};
//# sourceMappingURL=p-0cbfb467.entry.js.map