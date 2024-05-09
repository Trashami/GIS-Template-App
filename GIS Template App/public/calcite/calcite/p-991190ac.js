/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
var n=typeof global=="object"&&global&&global.Object===Object&&global;const e=n;var r=typeof self=="object"&&self&&self.Object===Object&&self;var t=e||r||Function("return this")();const u=t;var i=u.Symbol;const f=i;var a=Object.prototype;var o=a.hasOwnProperty;var c=a.toString;var v=f?f.toStringTag:undefined;function d(n){var e=o.call(n,v),r=n[v];try{n[v]=undefined;var t=true}catch(n){}var u=c.call(n);if(t){if(e){n[v]=r}else{delete n[v]}}return u}var l=Object.prototype;var s=l.toString;function b(n){return s.call(n)}var p="[object Null]",y="[object Undefined]";var j=f?f.toStringTag:undefined;function m(n){if(n==null){return n===undefined?y:p}return j&&j in Object(n)?d(n):b(n)}function h(n){return n!=null&&typeof n=="object"}var T="[object Symbol]";function g(n){return typeof n=="symbol"||h(n)&&m(n)==T}var O=/\s/;function x(n){var e=n.length;while(e--&&O.test(n.charAt(e))){}return e}var w=/^\s+/;function $(n){return n?n.slice(0,x(n)+1).replace(w,""):n}function E(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var M=0/0;var S=/^[-+]0x[0-9a-f]+$/i;var F=/^0b[01]+$/i;var I=/^0o[0-7]+$/i;var N=parseInt;function U(n){if(typeof n=="number"){return n}if(g(n)){return M}if(E(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=E(e)?e+"":e}if(typeof n!="string"){return n===0?n:+n}n=$(n);var r=F.test(n);return r||I.test(n)?N(n.slice(2),r?2:8):S.test(n)?M:+n}var W=function(){return u.Date.now()};const k=W;var q="Expected a function";var z=Math.max,A=Math.min;function B(n,e,r){var t,u,i,f,a,o,c=0,v=false,d=false,l=true;if(typeof n!="function"){throw new TypeError(q)}e=U(e)||0;if(E(r)){v=!!r.leading;d="maxWait"in r;i=d?z(U(r.maxWait)||0,e):i;l="trailing"in r?!!r.trailing:l}function s(e){var r=t,i=u;t=u=undefined;c=e;f=n.apply(i,r);return f}function b(n){c=n;a=setTimeout(j,e);return v?s(n):f}function p(n){var r=n-o,t=n-c,u=e-r;return d?A(u,i-t):u}function y(n){var r=n-o,t=n-c;return o===undefined||r>=e||r<0||d&&t>=i}function j(){var n=k();if(y(n)){return m(n)}a=setTimeout(j,p(n))}function m(n){a=undefined;if(l&&t){return s(n)}t=u=undefined;return f}function h(){if(a!==undefined){clearTimeout(a)}c=0;t=o=u=a=undefined}function T(){return a===undefined?f:m(k())}function g(){var n=k(),r=y(n);t=arguments;u=this;o=n;if(r){if(a===undefined){return b(o)}if(d){clearTimeout(a);a=setTimeout(j,e);return s(o)}}if(a===undefined){a=setTimeout(j,e)}return f}g.cancel=h;g.flush=T;return g}export{f as S,g as a,m as b,h as c,B as d,e as f,E as i,u as r};
//# sourceMappingURL=p-991190ac.js.map