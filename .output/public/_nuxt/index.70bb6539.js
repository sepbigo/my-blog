import{K as I,F as T,o as V,a0 as ee,b as q,a5 as ve,r as O,_ as me,d as ye,a9 as Ee,S as Se,P as te,a6 as xe}from"./entry.01da0e6f.js";function Te(e){return e==null}class we extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Qe(e,t){throw new we(`[${e}] ${t}`)}function Xe(e,t){}const et=({from:e,replacement:t,scope:r,version:n,ref:a,type:s="API"},i)=>{I(()=>T(i),f=>{},{immediate:!0})};let x=[];const re=e=>{const t=e;t.key===ve.esc&&x.forEach(r=>r(t))},Fe=e=>{V(()=>{x.length===0&&document.addEventListener("keydown",re),ee&&x.push(e)}),q(()=>{x=x.filter(t=>t!==e),x.length===0&&ee&&document.removeEventListener("keydown",re)})},tt=Symbol("formContextKey"),rt=Symbol("formItemContextKey"),B="focus-trap.focus-after-trapped",K="focus-trap.focus-after-released",ke="focus-trap.focusout-prevented",ne={cancelable:!0,bubbles:!1},Me={cancelable:!0,bubbles:!1},ae="focusAfterTrapped",se="focusAfterReleased",Ae=Symbol("elFocusTrap"),G=O(),C=O(0),z=O(0);let A=0;const pe=e=>{const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0||n===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t},ie=(e,t)=>{for(const r of e)if(!Re(r,t))return r},Re=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},He=e=>{const t=pe(e),r=ie(t,e),n=ie(t.reverse(),e);return[r,n]},Pe=e=>e instanceof HTMLInputElement&&"select"in e,y=(e,t)=>{if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),z.value=window.performance.now(),e!==r&&Pe(e)&&t&&e.select()}};function oe(e,t){const r=[...e],n=e.indexOf(t);return n!==-1&&r.splice(n,1),r}const _e=()=>{let e=[];return{push:n=>{const a=e[0];a&&n!==a&&a.pause(),e=oe(e,n),e.unshift(n)},remove:n=>{var a,s;e=oe(e,n),(s=(a=e[0])==null?void 0:a.resume)==null||s.call(a)}}},Ie=(e,t=!1)=>{const r=document.activeElement;for(const n of e)if(y(n,t),document.activeElement!==r)return},fe=_e(),Oe=()=>C.value>z.value,R=()=>{G.value="pointer",C.value=window.performance.now()},ue=()=>{G.value="keyboard",C.value=window.performance.now()},Ce=()=>(V(()=>{A===0&&(document.addEventListener("mousedown",R),document.addEventListener("touchstart",R),document.addEventListener("keydown",ue)),A++}),q(()=>{A--,A<=0&&(document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R),document.removeEventListener("keydown",ue))}),{focusReason:G,lastUserFocusTimestamp:C,lastAutomatedFocusTimestamp:z}),H=e=>new CustomEvent(ke,{...Me,detail:e}),Le=ye({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[ae,se,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const r=O();let n,a;const{focusReason:s}=Ce();Fe(o=>{e.trapped&&!i.paused&&t("release-requested",o)});const i={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},f=o=>{if(!e.loop&&!e.trapped||i.paused)return;const{key:u,altKey:l,ctrlKey:v,metaKey:p,currentTarget:Z,shiftKey:Q}=o,{loop:X}=e,be=u===ve.tab&&!l&&!v&&!p,M=document.activeElement;if(be&&M){const L=Z,[N,U]=He(L);if(N&&U){if(!Q&&M===U){const m=H({focusReason:s.value});t("focusout-prevented",m),m.defaultPrevented||(o.preventDefault(),X&&y(N,!0))}else if(Q&&[N,L].includes(M)){const m=H({focusReason:s.value});t("focusout-prevented",m),m.defaultPrevented||(o.preventDefault(),X&&y(U,!0))}}else if(M===L){const m=H({focusReason:s.value});t("focusout-prevented",m),m.defaultPrevented||o.preventDefault()}}};Ee(Ae,{focusTrapRef:r,onKeydown:f}),I(()=>e.focusTrapEl,o=>{o&&(r.value=o)},{immediate:!0}),I([r],([o],[u])=>{o&&(o.addEventListener("keydown",f),o.addEventListener("focusin",F),o.addEventListener("focusout",k)),u&&(u.removeEventListener("keydown",f),u.removeEventListener("focusin",F),u.removeEventListener("focusout",k))});const h=o=>{t(ae,o)},w=o=>t(se,o),F=o=>{const u=T(r);if(!u)return;const l=o.target,v=o.relatedTarget,p=l&&u.contains(l);e.trapped||v&&u.contains(v)||(n=v),p&&t("focusin",o),!i.paused&&e.trapped&&(p?a=l:y(a,!0))},k=o=>{const u=T(r);if(!(i.paused||!u))if(e.trapped){const l=o.relatedTarget;!Te(l)&&!u.contains(l)&&setTimeout(()=>{if(!i.paused&&e.trapped){const v=H({focusReason:s.value});t("focusout-prevented",v),v.defaultPrevented||y(a,!0)}},0)}else{const l=o.target;l&&u.contains(l)||t("focusout",o)}};async function J(){await te();const o=T(r);if(o){fe.push(i);const u=o.contains(document.activeElement)?n:document.activeElement;if(n=u,!o.contains(u)){const v=new Event(B,ne);o.addEventListener(B,h),o.dispatchEvent(v),v.defaultPrevented||te(()=>{let p=e.focusStartEl;xe(p)||(y(p),document.activeElement!==p&&(p="first")),p==="first"&&Ie(pe(o),!0),(document.activeElement===u||p==="container")&&y(o)})}}}function Y(){const o=T(r);if(o){o.removeEventListener(B,h);const u=new CustomEvent(K,{...ne,detail:{focusReason:s.value}});o.addEventListener(K,w),o.dispatchEvent(u),!u.defaultPrevented&&(s.value=="keyboard"||!Oe()||o.contains(document.activeElement))&&y(n??document.body),o.removeEventListener(K,w),fe.remove(i)}}return V(()=>{e.trapped&&J(),I(()=>e.trapped,o=>{o?J():Y()})}),q(()=>{e.trapped&&Y()}),{onKeydown:f}}});function Ne(e,t,r,n,a,s){return Se(e.$slots,"default",{handleKeydown:e.onKeydown})}var nt=me(Le,[["render",Ne],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);function c(e,t){Ue(e)&&(e="100%");var r=Be(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function P(e){return Math.min(1,Math.max(0,e))}function Ue(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Be(e){return typeof e=="string"&&e.indexOf("%")!==-1}function ge(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function _(e){return e<=1?"".concat(Number(e)*100,"%"):e}function S(e){return e.length===1?"0"+e:String(e)}function Ke(e,t,r){return{r:c(e,255)*255,g:c(t,255)*255,b:c(r,255)*255}}function ce(e,t,r){e=c(e,255),t=c(t,255),r=c(r,255);var n=Math.max(e,t,r),a=Math.min(e,t,r),s=0,i=0,f=(n+a)/2;if(n===a)i=0,s=0;else{var h=n-a;switch(i=f>.5?h/(2-n-a):h/(n+a),n){case e:s=(t-r)/h+(t<r?6:0);break;case t:s=(r-e)/h+2;break;case r:s=(e-t)/h+4;break}s/=6}return{h:s,s:i,l:f}}function D(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function De(e,t,r){var n,a,s;if(e=c(e,360),t=c(t,100),r=c(r,100),t===0)a=r,s=r,n=r;else{var i=r<.5?r*(1+t):r+t-r*t,f=2*r-i;n=D(f,i,e+1/3),a=D(f,i,e),s=D(f,i,e-1/3)}return{r:n*255,g:a*255,b:s*255}}function he(e,t,r){e=c(e,255),t=c(t,255),r=c(r,255);var n=Math.max(e,t,r),a=Math.min(e,t,r),s=0,i=n,f=n-a,h=n===0?0:f/n;if(n===a)s=0;else{switch(n){case e:s=(t-r)/f+(t<r?6:0);break;case t:s=(r-e)/f+2;break;case r:s=(e-t)/f+4;break}s/=6}return{h:s,s:h,v:i}}function We(e,t,r){e=c(e,360)*6,t=c(t,100),r=c(r,100);var n=Math.floor(e),a=e-n,s=r*(1-t),i=r*(1-a*t),f=r*(1-(1-a)*t),h=n%6,w=[r,i,s,s,f,r][h],F=[f,r,r,i,s,s][h],k=[s,s,f,r,r,i][h];return{r:w*255,g:F*255,b:k*255}}function de(e,t,r,n){var a=[S(Math.round(e).toString(16)),S(Math.round(t).toString(16)),S(Math.round(r).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function $e(e,t,r,n,a){var s=[S(Math.round(e).toString(16)),S(Math.round(t).toString(16)),S(Math.round(r).toString(16)),S(je(n))];return a&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function je(e){return Math.round(parseFloat(e)*255).toString(16)}function le(e){return d(e)/255}function d(e){return parseInt(e,16)}function Ve(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function qe(e){var t={r:0,g:0,b:0},r=1,n=null,a=null,s=null,i=!1,f=!1;return typeof e=="string"&&(e=Je(e)),typeof e=="object"&&(b(e.r)&&b(e.g)&&b(e.b)?(t=Ke(e.r,e.g,e.b),i=!0,f=String(e.r).substr(-1)==="%"?"prgb":"rgb"):b(e.h)&&b(e.s)&&b(e.v)?(n=_(e.s),a=_(e.v),t=We(e.h,n,a),i=!0,f="hsv"):b(e.h)&&b(e.s)&&b(e.l)&&(n=_(e.s),s=_(e.l),t=De(e.h,n,s),i=!0,f="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=ge(r),{ok:i,format:e.format||f,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var Ge="[-\\+]?\\d+%?",ze="[-\\+]?\\d*\\.\\d+%?",E="(?:".concat(ze,")|(?:").concat(Ge,")"),W="[\\s|\\(]+(".concat(E,")[,|\\s]+(").concat(E,")[,|\\s]+(").concat(E,")\\s*\\)?"),$="[\\s|\\(]+(".concat(E,")[,|\\s]+(").concat(E,")[,|\\s]+(").concat(E,")[,|\\s]+(").concat(E,")\\s*\\)?"),g={CSS_UNIT:new RegExp(E),rgb:new RegExp("rgb"+W),rgba:new RegExp("rgba"+$),hsl:new RegExp("hsl"+W),hsla:new RegExp("hsla"+$),hsv:new RegExp("hsv"+W),hsva:new RegExp("hsva"+$),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Je(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(j[e])e=j[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=g.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=g.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=g.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=g.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=g.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=g.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=g.hex8.exec(e),r?{r:d(r[1]),g:d(r[2]),b:d(r[3]),a:le(r[4]),format:t?"name":"hex8"}:(r=g.hex6.exec(e),r?{r:d(r[1]),g:d(r[2]),b:d(r[3]),format:t?"name":"hex"}:(r=g.hex4.exec(e),r?{r:d(r[1]+r[1]),g:d(r[2]+r[2]),b:d(r[3]+r[3]),a:le(r[4]+r[4]),format:t?"name":"hex8"}:(r=g.hex3.exec(e),r?{r:d(r[1]+r[1]),g:d(r[2]+r[2]),b:d(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function b(e){return!!g.CSS_UNIT.exec(String(e))}var at=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var n;if(t instanceof e)return t;typeof t=="number"&&(t=Ve(t)),this.originalInput=t;var a=qe(t);this.originalInput=t,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=r.format)!==null&&n!==void 0?n:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,n,a,s=t.r/255,i=t.g/255,f=t.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),f<=.03928?a=f/12.92:a=Math.pow((f+.055)/1.055,2.4),.2126*r+.7152*n+.0722*a},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=ge(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=he(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=he(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),a=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=ce(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=ce(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),a=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),de(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),$e(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(n,")"):"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(c(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(c(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+de(this.r,this.g,this.b,!1),r=0,n=Object.entries(j);r<n.length;r++){var a=n[r],s=a[0],i=a[1];if(t===i)return s}return!1},e.prototype.toString=function(t){var r=!!t;t=t??this.format;var n=!1,a=this.a<1&&this.a>=0,s=!r&&a&&(t.startsWith("hex")||t==="name");return s?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=P(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=P(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=P(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=P(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var n=this.toRgb(),a=new e(t).toRgb(),s=r/100,i={r:(a.r-n.r)*s+n.r,g:(a.g-n.g)*s+n.g,b:(a.b-n.b)*s+n.b,a:(a.a-n.a)*s+n.a};return new e(i)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var n=this.toHsl(),a=360/r,s=[this];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,s.push(new e(n));return s},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),n=r.h,a=r.s,s=r.v,i=[],f=1/t;t--;)i.push(new e({h:n,s:a,v:s})),s=(s+f)%1;return i},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),n=new e(t).toRgb(),a=r.a+n.a*(1-r.a);return new e({r:(r.r*r.a+n.r*n.a*(1-r.a))/a,g:(r.g*r.a+n.g*n.a*(1-r.a))/a,b:(r.b*r.a+n.b*n.a*(1-r.a))/a,a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),n=r.h,a=[this],s=360/t,i=1;i<t;i++)a.push(new e({h:(n+i*s)%360,s:r.s,l:r.l}));return a},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();export{nt as E,Ae as F,at as T,rt as a,Xe as d,tt as f,Te as i,Qe as t,et as u};
