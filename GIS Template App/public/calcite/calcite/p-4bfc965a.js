/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
class t{constructor(){this._formatterCache=new Map;this._commonDateTimeFormatterOptions={year:"numeric",month:"2-digit",day:"2-digit",timeZoneName:"shortOffset"}}get name(){return"native"}create(t){return new Date(t)}increase(t){const e=864e5;return new Date(t.getTime()+e)}formatToIsoDateString(t){const e=t.getFullYear();const n=t.getMonth()+1;const s=t.getDate();return`${e}-${n.toString().padStart(2,"0")}-${s.toString().padStart(2,"0")}`}isoToTimeZone(t,e){const n=this._toDate(t);const s=this._getFormatter(e);const r=s.formatToParts(n);const[o]=r.filter((({type:t})=>t==="timeZoneName")).map((({value:t})=>t));const i=this._getTimeZoneOffsetInMins(o);const a=n.getMinutes()-(n.getTimezoneOffset()-i);n.setMinutes(a);return n}same(t,e){return t.getTime()===e.getTime()}_toDate(t){return new Date(t)}_getFormatter(t){let e=this._formatterCache.get(t);if(!e){e=new Intl.DateTimeFormat("en-US",{timeZone:t,...this._commonDateTimeFormatterOptions});this._formatterCache.set(t,e)}return e}_getTimeZoneOffsetInMins(t){const[e,...n]=t.slice(3);const[s,r]=n.join("").split(":");const o=e==="+"?1:-1;return o*(Number(s)*60+Number(r||0))}}export{t as DateEngine};
//# sourceMappingURL=p-4bfc965a.js.map