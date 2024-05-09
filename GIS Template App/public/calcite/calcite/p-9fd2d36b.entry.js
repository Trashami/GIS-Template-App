/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
import{r as t,c as e,h as i,H as n,g as s,e as o,F as a}from"./p-2cca1b5a.js";import{A as c,k as r,g as l,B as d,t as h}from"./p-471227bd.js";import{g as b}from"./p-46e63924.js";import{a as f,b as u,d as p}from"./p-308645d2.js";import{c as v}from"./p-720054c4.js";import{c as g,d as m}from"./p-4a2aba9a.js";import{c as k,s as y,d as x,u as w}from"./p-9ca50819.js";import{C as T}from"./p-696889fe.js";import{c as z,d as C,I,u as A}from"./p-827bd580.js";import{g as L}from"./p-c6aeed91.js";import"./p-f8ee4dc8.js";import"./p-7a70c542.js";const H={container:"container",content:"content"};const S=":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([hidden]){display:none}[hidden]{display:none}";const j=S;const B=class{constructor(i){t(this,i);this.calciteInternalTabRegister=e(this,"calciteInternalTabRegister",6);this.guid=`calcite-tab-title-${b()}`;this.tab=undefined;this.selected=false;this.scale="m";this.labeledBy=undefined}render(){const t=this.el.id||this.guid;return i(n,{key:"71074d2c26a860d7934fbd9b236f9a264ab3c34f","aria-labelledby":this.labeledBy,id:t},i("div",{key:"3fcf14f4aaddf9ad579c26c962ad75803febcea0",class:{[H.container]:true,[`scale-${this.scale}`]:true},role:"tabpanel",tabIndex:this.selected?0:-1},i("section",{key:"ba967be2e5121636d81754ec959452160bc4bb0d",class:H.content},i("slot",{key:"fae921d6fe2ae713bddc83adacbcf7e418aa1b7c"}))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}disconnectedCallback(){document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(t){const e=t.composedPath().find((t=>t.tagName==="CALCITE-TABS"));if(e!==this.parentTabsEl){return}if(this.tab){this.selected=this.tab===t.detail.tab}else{this.getTabIndex().then((e=>{this.selected=e===t.detail.tab}))}t.stopPropagation()}async getTabIndex(){return Array.prototype.indexOf.call(c(this.el.parentElement.children).filter((t=>t.matches("calcite-tab"))),this.el)}async updateAriaInfo(t=[],e=[]){this.labeledBy=e[t.indexOf(this.el.id)]||null}get el(){return s(this)}};B.style=j;const E={chevronRight:"chevron-right",chevronLeft:"chevron-left"};const R={activeIndicatorContainer:"tab-nav-active-indicator-container",container:"tab-nav",containerHasEndTabTitleOverflow:"tab-nav--end-overflow",containerHasStartTabTitleOverflow:"tab-nav--start-overflow",scrollButton:"scroll-button",scrollButtonContainer:"scroll-button-container",scrollBackwardContainerButton:"scroll-button-container--backward",scrollForwardContainerButton:"scroll-button-container--forward",tabTitleSlotWrapper:"tab-titles-slot-wrapper"};const F=':host{--calcite-internal-tab-nav-gradient-start-side:left;--calcite-internal-tab-nav-gradient-end-side:right;position:relative;display:flex}.scale-s{--calcite-internal-tab-nav-scroller-button-width:24px;min-block-size:1.5rem}.scale-m{--calcite-internal-tab-nav-scroller-button-width:32px;min-block-size:2rem}.scale-l{--calcite-internal-tab-nav-scroller-button-width:44px;min-block-size:2.75rem}.calcite--rtl{--calcite-internal-tab-nav-gradient-start-side:right;--calcite-internal-tab-nav-gradient-end-side:left}.tab-nav--start-overflow .tab-nav-active-indicator-container,.tab-nav--start-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--end-overflow .tab-nav-active-indicator-container,.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%)}.tab-nav--start-overflow.tab-nav--end-overflow .tab-nav-active-indicator-container,.tab-nav--start-overflow.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%), linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side), transparent, transparent var(--calcite-internal-tab-nav-scroller-button-width), white var(--calcite-internal-tab-nav-scroller-button-width), white 51%, transparent 51%)}.tab-nav::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}:host([layout=center]) ::slotted(calcite-tab-title){display:flex;flex-grow:1;flex-shrink:0;min-inline-size:auto;white-space:nowrap}:host([layout=center]) ::slotted(calcite-tab-title[selected]){overflow:unset}:host(:not([bordered])) .scale-l{--calcite-internal-tab-nav-gap:var(--calcite-size-xxl)}:host(:not([bordered])) .scale-m{--calcite-internal-tab-nav-gap:var(--calcite-size-xl)}:host(:not([bordered])) .scale-s{--calcite-internal-tab-nav-gap:var(--calcite-size-lg)}:host(:not([bordered])) .tab-titles-slot-wrapper{gap:var(--calcite-internal-tab-nav-gap)}:host([layout=center]:not([bordered])) .tab-titles-slot-wrapper{padding-inline:var(--calcite-spacing-xxl)}.tab-nav,.tab-titles-slot-wrapper{display:flex;inline-size:100%;justify-content:flex-start;overflow:hidden;white-space:nowrap}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-color-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}.scroll-button-container{position:absolute;inset-block:0px}.scroll-button-container calcite-button{--calcite-offset-invert-focus:1;--calcite-color-text-1:var(--calcite-color-text-3);block-size:100%}.scroll-button-container calcite-button:hover{--calcite-color-text-1:unset;--calcite-color-foreground-1:var(--calcite-color-transparent-hover);--calcite-color-foreground-3:var(--calcite-color-transparent)}.scroll-button-container--forward{inset-inline-end:0;z-index:var(--calcite-z-index)}.scroll-button-container--backward{inset-inline-start:0;z-index:var(--calcite-z-index)}:host(:not([bordered])) .scroll-button-container--backward::before,:host(:not([bordered])) .scroll-button-container--forward::before{background-color:var(--calcite-color-border-3);content:"";inline-size:var(--calcite-border-width-sm);inset-block-start:var(--calcite-border-width-md);inset-block-end:var(--calcite-border-width-md);position:absolute}:host(:not([bordered])) .scroll-button-container--backward::before{inset-inline-end:0}:host(:not([bordered])) .scroll-button-container--forward::before{inset-inline-start:0}:host .position-bottom .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host .position-bottom .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered]) .position-bottom .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}';const O=F;const $=class{constructor(n){t(this,n);this.calciteTabChange=e(this,"calciteTabChange",6);this.calciteInternalTabChange=e(this,"calciteInternalTabChange",6);this.effectiveDir="ltr";this.lastScrollWheelAxis="x";this.resizeObserver=v("resize",(()=>{this.updateScrollingState();if(!this.activeIndicatorEl){return}this.updateActiveIndicator()}));this.onTabTitleWheel=t=>{t.preventDefault();const{deltaX:e,deltaY:i}=t;const n=Math.abs(e);const s=Math.abs(i);let o;if(n===s){o=this.lastScrollWheelAxis==="x"?e:i}else if(n>s){o=e;this.lastScrollWheelAxis="x"}else{o=i;this.lastScrollWheelAxis="y"}const a=(this.effectiveDir==="rtl"?-1:1)*o;t.currentTarget.scrollBy(a,0);requestAnimationFrame((()=>this.updateActiveIndicator()))};this.onSlotChange=t=>{this.intersectionObserver?.disconnect();const e=t.target.assignedElements();e.forEach((t=>{this.intersectionObserver?.observe(t)}))};this.storeContainerRef=t=>this.containerEl=t;this.storeTabTitleWrapperRef=t=>{this.tabTitleContainerEl=t;this.intersectionObserver=v("intersection",(()=>this.updateScrollingState()),{root:t,threshold:[0,.5,1]})};this.scrollToTabTitles=t=>{o((()=>{const e=this.tabTitleContainerEl;const i=e.getBoundingClientRect();const n=Array.from(this.el.querySelectorAll("calcite-tab-title"));const{effectiveDir:s}=this;if(t==="forward"){n.reverse()}let o=null;n.forEach((e=>{const n=e.getBoundingClientRect();const a=i.x+i.width;const c=n.x+n.width;if(t==="forward"&&s==="ltr"||t==="backward"&&s==="rtl"){const t=n.x>a;if(t){o=e}else{const t=c>a&&n.x>i.x;if(t){o=e}}}else{const t=c<i.x;if(t){o=e}else{const t=c<a&&n.x<i.x;if(t){o=e}}}}));if(o){const{scrollerButtonWidth:i}=this;const n=t==="forward"&&s==="ltr"||t==="backward"&&s==="rtl"?-i:o.offsetWidth-e.clientWidth+i;const a=o.offsetLeft+n;e.scrollTo({left:a,behavior:"smooth"})}}))};this.scrollToNextTabTitles=()=>this.scrollToTabTitles("forward");this.scrollToPreviousTabTitles=()=>this.scrollToTabTitles("backward");this.handleTabFocus=(t,e,i)=>{const n=r(this.enabledTabTitles,e,i);this.scrollTabTitleIntoView(n,"instant");t.stopPropagation()};this.onTabTitleScroll=()=>{this.updateActiveIndicator();this.updateScrollingState()};this.renderScrollButton=t=>{const{bordered:e,messages:n,hasOverflowingStartTabTitle:s,hasOverflowingEndTabTitle:o,scale:a}=this;const c=t==="end";return i("div",{class:{[R.scrollButtonContainer]:true,[R.scrollBackwardContainerButton]:!c,[R.scrollForwardContainerButton]:c},hidden:c&&!o||!c&&!s,key:t},i("calcite-button",{appearance:e?"outline-fill":"transparent","aria-label":c?n.nextTabTitles:n.previousTabTitles,class:{[R.scrollButton]:true},iconFlipRtl:"both",iconStart:c?E.chevronRight:E.chevronLeft,kind:"neutral",onClick:c?this.scrollToNextTabTitles:this.scrollToPreviousTabTitles,scale:a,tabIndex:-1}))};this.storageId=undefined;this.syncId=undefined;this.selectedTitle=null;this.scale="m";this.layout="inline";this.position="bottom";this.bordered=false;this.indicatorOffset=undefined;this.indicatorWidth=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.hasOverflowingStartTabTitle=false;this.hasOverflowingEndTabTitle=false;this.selectedTabId=undefined}onMessagesChange(){}async selectedTabIdChanged(){if(localStorage&&this.storageId&&this.selectedTabId!==undefined&&this.selectedTabId!==null){localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId))}this.calciteInternalTabChange.emit({tab:this.selectedTabId});this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateActiveIndicator()}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs");this.resizeObserver?.observe(this.el);g(this);k(this)}async componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}await y(this)}componentDidLoad(){this.scrollTabTitleIntoView(this.selectedTitle,"instant")}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t?.layout;this.bordered=t?.bordered;this.effectiveDir=l(this.el);if(this.selectedTitle){this.updateActiveIndicator()}}componentDidRender(){if(this.tabTitles.length&&this.tabTitles.every((t=>!t.selected))&&!this.selectedTabId){this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteInternalTabChange.emit({tab:t})}))}}disconnectedCallback(){this.resizeObserver?.disconnect();m(this);x(this)}render(){const t=`${this.indicatorWidth}px`;const e=`${this.indicatorOffset}px`;const s=this.effectiveDir!=="rtl"?{width:t,left:e}:{width:t,right:e};return i(n,{key:"0824dd4470393b0e186b0fdf238420454fed396c",role:"tablist"},i("div",{key:"205551441feaaa61e2b4b603a7b37ce3d18bdba8",class:{[R.container]:true,[R.containerHasStartTabTitleOverflow]:!!this.hasOverflowingStartTabTitle,[R.containerHasEndTabTitleOverflow]:!!this.hasOverflowingEndTabTitle,[`scale-${this.scale}`]:true,[`position-${this.position}`]:true,[T.rtl]:this.effectiveDir==="rtl"},ref:this.storeContainerRef},this.renderScrollButton("start"),i("div",{key:"64844ffd05363fe55e2ae9d4d820dc5113da57d8",class:{[R.tabTitleSlotWrapper]:true},onScroll:this.onTabTitleScroll,onWheel:this.onTabTitleWheel,ref:this.storeTabTitleWrapperRef},i("slot",{key:"a77b898cac87d4fa190ad717a3c0ca4474a962fe",onSlotchange:this.onSlotChange})),i("div",{key:"0bf812fe39d07fbddd54ddb515e2eb31adea9a74",class:{[R.activeIndicatorContainer]:true},ref:t=>this.activeIndicatorContainerEl=t},i("div",{key:"e1624e7b9845ea37eea06ca7a85816d782530c79",class:"tab-nav-active-indicator",style:s,ref:t=>this.activeIndicatorEl=t})),this.renderScrollButton("end")))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){const e=t.target;this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(e);t.stopPropagation();this.scrollTabTitleIntoView(e)}scrollTabTitleIntoView(t,e="smooth"){if(!t){return}o((()=>{const i=this.effectiveDir==="ltr";const n=this.tabTitleContainerEl;const s=n.getBoundingClientRect();const o=t.getBoundingClientRect();const a=n.scrollLeft;const c=i?this.hasOverflowingStartTabTitle:this.hasOverflowingEndTabTitle;const r=i?this.hasOverflowingEndTabTitle:this.hasOverflowingStartTabTitle;if(o.left<s.left+(c?this.scrollerButtonWidth:0)){const t=a+(o.left-s.left)-this.scrollerButtonWidth;n.scrollTo({left:t,behavior:e})}else if(o.right>s.right-(r?this.scrollerButtonWidth:0)){const t=a+(o.right-s.right)+this.scrollerButtonWidth;n.scrollTo({left:t,behavior:e})}}))}activateTabHandler(t){this.calciteTabChange.emit();t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e);t.stopPropagation()}updateTabTitles(t){if(t.target.selected){this.selectedTabId=t.detail}}globalInternalTabChangeHandler(t){if(this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab){this.selectedTabId=t.detail.tab}t.stopPropagation()}iconStartChangeHandler(){this.updateActiveIndicator()}effectiveLocaleChange(){w(this,this.effectiveLocale)}get scrollerButtonWidth(){const{scale:t}=this;return parseInt(t==="s"?f:t==="m"?u:p)}updateActiveIndicator(){const t=this.tabTitleContainerEl?.scrollLeft;const e=this.containerEl?.scrollLeft;const i=this.activeIndicatorContainerEl?.offsetWidth;const n=this.selectedTitle?.offsetLeft;const s=this.selectedTitle?.offsetWidth;const o=i-n-s;const a=this.effectiveDir==="ltr"?n:o;const c=this.effectiveDir==="ltr"?-1:1;this.indicatorOffset=a+c*(e+t);this.indicatorWidth=this.selectedTitle?.offsetWidth}updateScrollingState(){const t=this.tabTitleContainerEl;if(!t){return}let e;let i;const n=t.scrollLeft;const s=t.clientWidth;const o=t.scrollWidth;if(this.effectiveDir==="ltr"){e=n>0;i=n+s<o}else{e=n<0;i=n!==-(o-s)}this.hasOverflowingStartTabTitle=e;this.hasOverflowingEndTabTitle=i}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((e=>this.tabTitles[e.indexOf(t)]))}get tabTitles(){return d(this.el,"calcite-tab-title")}get enabledTabTitles(){return d(this.el,"calcite-tab-title:not([disabled])").filter((t=>!t.closed))}handleTabTitleClose(t){const{tabTitles:e}=this;const i=t.selected;const n=e.reduce(((t,e,i)=>!e.closed?[...t,i]:t),[]);const s=n.length;if(s===1&&e[n[0]].closable){e[n[0]].closable=false;this.selectedTabId=n[0];if(i){e[n[0]].activateTab()}}else if(s>1){const i=e.findIndex((e=>e===t));const o=n.find((t=>t>i));if(this.selectedTabId===i){this.selectedTabId=o?o:s-1;e[this.selectedTabId].activateTab()}}requestAnimationFrame((()=>{this.updateActiveIndicator();e[this.selectedTabId].focus()}))}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"],effectiveLocale:["effectiveLocaleChange"]}}};$.style=O;const D={closeButton:"close-button",container:"container",content:"content",contentHasText:"content--has-text",iconEnd:"icon-end",iconPresent:"icon-present",iconStart:"icon-start",titleIcon:"calcite-tab-title--icon"};const P={close:"x"};const W=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{display:flex;align-items:center;justify-content:center}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([closable]) .content{box-sizing:border-box;block-size:100%;border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:0.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-color-text-1)}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-color-border-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}.close-button{display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding:0.25rem;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-button-transparent-1);margin-inline-start:auto}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );outline-offset:-1px}.close-button:focus,.close-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close-button:active{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-color-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-color-foreground-1)}:host([bordered]:hover) .container{background-color:var(--calcite-color-transparent-hover)}:host([closable]) .container,:host([bordered]) .container{border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([closable]) .container .close-button,:host([bordered]) .container .close-button{margin-inline:0}:host([closable][position=bottom]) .container,:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-color-border-1);border-inline-end-color:var(--calcite-color-border-1)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:0.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:0.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}.close-button{z-index:var(--calcite-z-index)}}:host([hidden]){display:none}[hidden]{display:none}";const M=W;const N=class{constructor(i){t(this,i);this.calciteTabsActivate=e(this,"calciteTabsActivate",6);this.calciteInternalTabsActivate=e(this,"calciteInternalTabsActivate",6);this.calciteTabsClose=e(this,"calciteTabsClose",6);this.calciteInternalTabsClose=e(this,"calciteInternalTabsClose",6);this.calciteInternalTabsFocusNext=e(this,"calciteInternalTabsFocusNext",6);this.calciteInternalTabsFocusPrevious=e(this,"calciteInternalTabsFocusPrevious",6);this.calciteInternalTabsFocusFirst=e(this,"calciteInternalTabsFocusFirst",6);this.calciteInternalTabsFocusLast=e(this,"calciteInternalTabsFocusLast",6);this.calciteInternalTabTitleRegister=e(this,"calciteInternalTabTitleRegister",6);this.calciteInternalTabIconChanged=e(this,"calciteInternalTabIconChanged",6);this.closeClickHandler=()=>{this.closeTabTitleAndNotify()};this.mutationObserver=v("mutation",(()=>this.updateHasText()));this.resizeObserver=v("resize",(()=>{this.calciteInternalTabIconChanged.emit()}));this.guid=`calcite-tab-title-${b()}`;this.selected=false;this.closable=false;this.closed=false;this.disabled=false;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.layout=undefined;this.position="top";this.scale="m";this.bordered=false;this.tab=undefined;this.messages=undefined;this.messageOverrides=undefined;this.controls=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined;this.hasText=false}selectedHandler(){if(this.selected){this.activateTab(false)}}onMessagesChange(){}connectedCallback(){z(this);g(this);k(this);this.setupTextContentObserver();this.parentTabNavEl=this.el.closest("calcite-tab-nav");this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){this.mutationObserver?.disconnect();document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}));this.resizeObserver?.disconnect();C(this);m(this);x(this)}async componentWillLoad(){await y(this);{this.updateHasText()}if(this.tab&&this.selected){this.activateTab(false)}}componentWillRender(){if(this.parentTabsEl){this.layout=this.parentTabsEl.layout;this.bordered=this.parentTabsEl.bordered}}render(){const{el:t,closed:e}=this;const s=t.id||this.guid;const o=i("calcite-icon",{key:"dc31a68fd20ffcf451d5b23e2aaae683249aa50a",class:{[D.titleIcon]:true,[D.iconStart]:true},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:L(this.scale)});const a=i("calcite-icon",{key:"b8b85c799e950e050bb6c953cec61ab871894c9c",class:{[D.titleIcon]:true,[D.iconEnd]:true},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:L(this.scale)});return i(n,{key:"532a18e093cd481a1058e55f1ac936489cad3ddb","aria-controls":this.controls,"aria-selected":h(this.selected),id:s,role:"tab",tabIndex:this.selected&&!this.disabled?0:-1},i(I,{key:"dede575160963d2463e50f6e8baab92319acda9f",disabled:this.disabled},i("div",{key:"79e9c6d5f15626cd84101e7b85365c9af2c1453b",class:{container:true,[D.iconPresent]:!!this.iconStart||!!this.iconEnd,[`scale-${this.scale}`]:true},hidden:e,ref:t=>this.resizeObserver?.observe(t)},i("div",{key:"8076d17c92940370363d9bc1dae416fdcdf4b716",class:{[D.content]:true,[D.contentHasText]:this.hasText}},this.iconStart?o:null,i("slot",{key:"b25df3722162e58cb196ca500a7b4c718d5f2ed7"}),this.iconEnd?a:null),this.renderCloseButton())))}renderCloseButton(){const{closable:t,messages:e}=this;return t?i("button",{"aria-label":e.close,class:D.closeButton,disabled:false,key:D.closeButton,onClick:this.closeClickHandler,title:e.close,type:"button",ref:t=>this.closeButtonEl=t},i("calcite-icon",{icon:P.close,scale:L(this.scale)})):null}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){A(this)}internalTabChangeHandler(t){const e=t.composedPath().find((t=>t.tagName==="CALCITE-TABS"));if(e!==this.parentTabsEl){return}if(this.tab){this.selected=this.tab===t.detail.tab}else{this.getTabIndex().then((e=>{this.selected=e===t.detail.tab}))}t.stopPropagation()}onClick(){this.activateTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":if(!t.composedPath().includes(this.closeButtonEl)){this.activateTab();t.preventDefault()}break;case"ArrowRight":t.preventDefault();if(l(this.el)==="ltr"){this.calciteInternalTabsFocusNext.emit()}else{this.calciteInternalTabsFocusPrevious.emit()}break;case"ArrowLeft":t.preventDefault();if(l(this.el)==="ltr"){this.calciteInternalTabsFocusPrevious.emit()}else{this.calciteInternalTabsFocusNext.emit()}break;case"Home":t.preventDefault();this.calciteInternalTabsFocusFirst.emit();break;case"End":t.preventDefault();this.calciteInternalTabsFocusLast.emit();break}}async getTabIndex(){return Array.prototype.indexOf.call(c(this.el.parentElement.children).filter((t=>t.matches("calcite-tab-title"))),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],e=[]){this.controls=t[e.indexOf(this.el.id)]||null}async activateTab(t=true){if(this.disabled||this.closed){return}const e={tab:this.tab};this.calciteInternalTabsActivate.emit(e);if(t){requestAnimationFrame((()=>this.calciteTabsActivate.emit()))}}effectiveLocaleChange(){w(this,this.effectiveLocale)}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){this.mutationObserver?.observe(this.el,{childList:true,subtree:true})}closeTabTitleAndNotify(){this.closed=true;this.calciteInternalTabsClose.emit({tab:this.tab});this.calciteTabsClose.emit()}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{selected:["selectedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};N.style=M;const _={titleGroup:"title-group"};const U=":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1);background-color:var(--calcite-color-foreground-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1), inset 0 -1px 0 var(--calcite-color-border-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-color-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-color-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}";const q=U;const J=class{constructor(e){t(this,e);this.mutationObserver=v("mutation",(t=>{for(const e of t){const t=e.target;if(t.nodeName==="CALCITE-TAB-NAV"||t.nodeName==="CALCITE-TAB-TITLE"||t.nodeName==="CALCITE-TAB"){this.updateItems()}}}));this.layout="inline";this.position="top";this.scale="m";this.bordered=false;this.titles=[];this.tabs=[]}handleInheritableProps(){this.updateItems()}connectedCallback(){this.mutationObserver.observe(this.el,{childList:true});this.updateItems()}async componentWillLoad(){this.updateItems()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){return i(a,{key:"3298379f9625744b770c10f0f86fc1b2bc990cad"},i("slot",{key:"fd0be78d348a01b701d58f37663d392ee04ca6a9",name:_.titleGroup}),i("section",{key:"31212d582a0e6367ed38d250c1acc39cad3fa987"},i("slot",{key:"179bdacefed784c60dd000101e606d5e678d93c9"})))}calciteInternalTabTitleRegister(t){this.titles=[...this.titles,t.target];this.registryHandler();t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter((e=>e!==t.detail));this.registryHandler();t.stopPropagation()}calciteInternalTabRegister(t){this.tabs=[...this.tabs,t.target];this.registryHandler();t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter((e=>e!==t.detail));this.registryHandler();t.stopPropagation()}updateItems(){const{position:t,scale:e}=this;const i=this.el.querySelector("calcite-tab-nav");if(i){i.position=t;i.scale=e}Array.from(this.el.querySelectorAll("calcite-tab")).forEach((t=>{if(t.parentElement===this.el){t.scale=e}}));Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((i=>{i.position=t;i.scale=e}))}async registryHandler(){let t;let e;if(this.tabs.some((t=>t.tab))||this.titles.some((t=>t.tab))){t=this.tabs.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id));e=this.titles.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id))}else{const i=await Promise.all(this.tabs.map((t=>t.getTabIndex())));const n=await Promise.all(this.titles.map((t=>t.getTabIndex())));t=i.reduce(((t,e,i)=>{t[e]=this.tabs[i].id;return t}),[]);e=n.reduce(((t,e,i)=>{t[e]=this.titles[i].id;return t}),[])}this.tabs.forEach((i=>i.updateAriaInfo(t,e)));this.titles.forEach((i=>i.updateAriaInfo(t,e)))}get el(){return s(this)}static get watchers(){return{position:["handleInheritableProps"],scale:["handleInheritableProps"]}}};J.style=q;export{B as calcite_tab,$ as calcite_tab_nav,N as calcite_tab_title,J as calcite_tabs};
//# sourceMappingURL=p-9fd2d36b.entry.js.map