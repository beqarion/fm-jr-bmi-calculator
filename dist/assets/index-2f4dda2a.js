(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const T=e=>{let r;if(e instanceof Array?r=document.querySelectorAll(e[0]):r=document.querySelector(e),!r)throw new Error(`no result for query - ${e}`);return r},V=e=>{const r=e.split("").map(t=>{if(t==="."||!isNaN(t))return t}).join("");return Number(r)===0?NaN:Number(r)};function nr(e,r){let t=0;return function(...a){const n=new Date().getTime();n-t<r||(t=n,e(...a))}}function De(e,r){let t;return function(){const a=this,n=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(a,n)},r)}}var Le={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ie={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},ar=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],W={CSS:{},springs:{}};function P(e,r,t){return Math.min(Math.max(e,r),t)}function N(e,r){return e.indexOf(r)>-1}function te(e,r){return e.apply(null,r)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return N(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!Le.hasOwnProperty(e)&&!ie.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Pe(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(t){return parseFloat(t)}):[]}function Ce(e,r){var t=Pe(e),a=P(f.und(t[0])?1:t[0],.1,100),n=P(f.und(t[1])?100:t[1],.1,100),o=P(f.und(t[2])?10:t[2],.1,100),u=P(f.und(t[3])?0:t[3],.1,100),s=Math.sqrt(n/a),i=o/(2*Math.sqrt(n*a)),h=i<1?s*Math.sqrt(1-i*i):0,c=1,l=i<1?(i*s+-u)/h:-u+s;function m(p){var d=r?r*p/1e3:p;return i<1?d=Math.exp(-d*i*s)*(c*Math.cos(h*d)+l*Math.sin(h*d)):d=(c+l*d)*Math.exp(-d*s),p===0||p===1?p:1-d}function I(){var p=W.springs[e];if(p)return p;for(var d=1/6,M=0,x=0;;)if(M+=d,m(M)===1){if(x++,x>=16)break}else x=0;var g=M*d*1e3;return W.springs[e]=g,g}return r?m:I}function ir(e){return e===void 0&&(e=10),function(r){return Math.ceil(P(r,1e-6,1)*e)*(1/e)}}var or=function(){var e=11,r=1/(e-1);function t(c,l){return 1-3*l+3*c}function a(c,l){return 3*l-6*c}function n(c){return 3*c}function o(c,l,m){return((t(l,m)*c+a(l,m))*c+n(l))*c}function u(c,l,m){return 3*t(l,m)*c*c+2*a(l,m)*c+n(l)}function s(c,l,m,I,p){var d,M,x=0;do M=l+(m-l)/2,d=o(M,I,p)-c,d>0?m=M:l=M;while(Math.abs(d)>1e-7&&++x<10);return M}function i(c,l,m,I){for(var p=0;p<4;++p){var d=u(l,m,I);if(d===0)return l;var M=o(l,m,I)-c;l-=M/d}return l}function h(c,l,m,I){if(!(0<=c&&c<=1&&0<=m&&m<=1))return;var p=new Float32Array(e);if(c!==l||m!==I)for(var d=0;d<e;++d)p[d]=o(d*r,c,m);function M(x){for(var g=0,v=1,O=e-1;v!==O&&p[v]<=x;++v)g+=r;--v;var E=(x-p[v])/(p[v+1]-p[v]),b=g+E*r,S=u(b,c,m);return S>=.001?i(x,b,c,m):S===0?b:s(x,g,g+r,c,m)}return function(x){return c===l&&m===I||x===0||x===1?x:o(M(x),l,I)}}return h}(),ke=function(){var e={linear:function(){return function(a){return a}}},r={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,o=4;a<((n=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var o=P(a,1,10),u=P(n,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(a,n){r[a]=function(){return function(o){return Math.pow(o,n+2)}}}),Object.keys(r).forEach(function(a){var n=r[a];e["easeIn"+a]=n,e["easeOut"+a]=function(o,u){return function(s){return 1-n(o,u)(1-s)}},e["easeInOut"+a]=function(o,u){return function(s){return s<.5?n(o,u)(s*2)/2:1-n(o,u)(s*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-n(o,u)(1-s*2))/2:(n(o,u)(s*2-1)+1)/2}}}),e}();function oe(e,r){if(f.fnc(e))return e;var t=e.split("(")[0],a=ke[t],n=Pe(e);switch(t){case"spring":return Ce(e,r);case"cubicBezier":return te(or,n);case"steps":return te(ir,n);default:return te(a,n)}}function Ee(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function _(e,r){for(var t=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],o=0;o<t;o++)if(o in e){var u=e[o];r.call(a,u,o,e)&&n.push(u)}return n}function J(e){return e.reduce(function(r,t){return r.concat(f.arr(t)?J(t):t)},[])}function Me(e){return f.arr(e)?e:(f.str(e)&&(e=Ee(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ue(e,r){return e.some(function(t){return t===r})}function se(e){var r={};for(var t in e)r[t]=e[t];return r}function ne(e,r){var t=se(e);for(var a in e)t[a]=r.hasOwnProperty(a)?r[a]:e[a];return t}function G(e,r){var t=se(e);for(var a in r)t[a]=f.und(e[a])?r[a]:e[a];return t}function ur(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function sr(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(r,function(s,i,h,c){return i+i+h+h+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+n+","+o+","+u+",1)"}function cr(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),t=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,n=parseInt(r[3],10)/100,o=r[4]||1;function u(m,I,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?m+(I-m)*6*p:p<1/2?I:p<2/3?m+(I-m)*(2/3-p)*6:m}var s,i,h;if(a==0)s=i=h=n;else{var c=n<.5?n*(1+a):n+a-n*a,l=2*n-c;s=u(l,c,t+1/3),i=u(l,c,t),h=u(l,c,t-1/3)}return"rgba("+s*255+","+i*255+","+h*255+","+o+")"}function fr(e){if(f.rgb(e))return ur(e);if(f.hex(e))return sr(e);if(f.hsl(e))return cr(e)}function k(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function lr(e){if(N(e,"translate")||e==="perspective")return"px";if(N(e,"rotate")||N(e,"skew"))return"deg"}function ae(e,r){return f.fnc(e)?e(r.target,r.id,r.total):e}function C(e,r){return e.getAttribute(r)}function ce(e,r,t){var a=k(r);if(ue([t,"deg","rad","turn"],a))return r;var n=W.CSS[r+t];if(!f.und(n))return n;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+t;var i=o/u.offsetWidth;s.removeChild(u);var h=i*parseFloat(r);return W.CSS[r+t]=h,h}function Se(e,r,t){if(r in e.style){var a=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[r]||getComputedStyle(e).getPropertyValue(a)||"0";return t?ce(e,n,t):n}}function fe(e,r){if(f.dom(e)&&!f.inp(e)&&(!f.nil(C(e,r))||f.svg(e)&&e[r]))return"attribute";if(f.dom(e)&&ue(ar,r))return"transform";if(f.dom(e)&&r!=="transform"&&Se(e,r))return"css";if(e[r]!=null)return"object"}function Be(e){if(f.dom(e)){for(var r=e.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=t.exec(r);)a.set(n[1],n[2]);return a}}function dr(e,r,t,a){var n=N(r,"scale")?1:0+lr(r),o=Be(e).get(r)||n;return t&&(t.transforms.list.set(r,o),t.transforms.last=r),a?ce(e,o,a):o}function le(e,r,t,a){switch(fe(e,r)){case"transform":return dr(e,r,a,t);case"css":return Se(e,r,t);case"attribute":return C(e,r);default:return e[r]||0}}function de(e,r){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var a=k(e)||0,n=parseFloat(r),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return n+o+a;case"-":return n-o+a;case"*":return n*o+a}}function Fe(e,r){if(f.col(e))return fr(e);if(/\s/g.test(e))return e;var t=k(e),a=t?e.substr(0,e.length-t.length):e;return r?a+r:a}function ve(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function vr(e){return Math.PI*2*C(e,"r")}function gr(e){return C(e,"width")*2+C(e,"height")*2}function hr(e){return ve({x:C(e,"x1"),y:C(e,"y1")},{x:C(e,"x2"),y:C(e,"y2")})}function Ae(e){for(var r=e.points,t=0,a,n=0;n<r.numberOfItems;n++){var o=r.getItem(n);n>0&&(t+=ve(a,o)),a=o}return t}function mr(e){var r=e.points;return Ae(e)+ve(r.getItem(r.numberOfItems-1),r.getItem(0))}function Ve(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return vr(e);case"rect":return gr(e);case"line":return hr(e);case"polyline":return Ae(e);case"polygon":return mr(e)}}function pr(e){var r=Ve(e);return e.setAttribute("stroke-dasharray",r),r}function yr(e){for(var r=e.parentNode;f.svg(r)&&f.svg(r.parentNode);)r=r.parentNode;return r}function Re(e,r){var t=r||{},a=t.el||yr(e),n=a.getBoundingClientRect(),o=C(a,"viewBox"),u=n.width,s=n.height,i=t.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function Mr(e,r){var t=f.str(e)?Ee(e)[0]:e,a=r||100;return function(n){return{property:n,el:t,svg:Re(t),totalLength:Ve(t)*(a/100)}}}function br(e,r,t){function a(c){c===void 0&&(c=0);var l=r+c>=1?r+c:0;return e.el.getPointAtLength(l)}var n=Re(e.el,e.svg),o=a(),u=a(-1),s=a(1),i=t?1:n.w/n.vW,h=t?1:n.h/n.vH;switch(e.property){case"x":return(o.x-n.x)*i;case"y":return(o.y-n.y)*h;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function be(e,r){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Fe(f.pth(e)?e.totalLength:e,r)+"";return{original:a,numbers:a.match(t)?a.match(t).map(Number):[0],strings:f.str(e)||r?a.split(t):[]}}function ge(e){var r=e?J(f.arr(e)?e.map(Me):Me(e)):[];return _(r,function(t,a,n){return n.indexOf(t)===a})}function je(e){var r=ge(e);return r.map(function(t,a){return{target:t,id:a,total:r.length,transforms:{list:Be(t)}}})}function xr(e,r){var t=se(r);if(/^spring/.test(t.easing)&&(t.duration=Ce(t.easing)),f.arr(e)){var a=e.length,n=a===2&&!f.obj(e[0]);n?e={value:e}:f.fnc(r.duration)||(t.duration=r.duration/a)}var o=f.arr(e)?e:[e];return o.map(function(u,s){var i=f.obj(u)&&!f.pth(u)?u:{value:u};return f.und(i.delay)&&(i.delay=s?0:r.delay),f.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return G(u,t)})}function wr(e){for(var r=_(J(e.map(function(o){return Object.keys(o)})),function(o){return f.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),t={},a=function(o){var u=r[o];t[u]=e.map(function(s){var i={};for(var h in s)f.key(h)?h==u&&(i.value=s[h]):i[h]=s[h];return i})},n=0;n<r.length;n++)a(n);return t}function Ir(e,r){var t=[],a=r.keyframes;a&&(r=G(wr(a),r));for(var n in r)f.key(n)&&t.push({name:n,tweens:xr(r[n],e)});return t}function Or(e,r){var t={};for(var a in e){var n=ae(e[a],r);f.arr(n)&&(n=n.map(function(o){return ae(o,r)}),n.length===1&&(n=n[0])),t[a]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function Tr(e,r){var t;return e.tweens.map(function(a){var n=Or(a,r),o=n.value,u=f.arr(o)?o[1]:o,s=k(u),i=le(r.target,e.name,s,r),h=t?t.to.original:i,c=f.arr(o)?o[0]:h,l=k(c)||k(i),m=s||l;return f.und(u)&&(u=h),n.from=be(c,m),n.to=be(de(u,c),m),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=oe(n.easing,n.duration),n.isPath=f.pth(o),n.isPathTargetInsideSVG=n.isPath&&f.svg(r.target),n.isColor=f.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var $e={css:function(e,r,t){return e.style[r]=t},attribute:function(e,r,t){return e.setAttribute(r,t)},object:function(e,r,t){return e[r]=t},transform:function(e,r,t,a,n){if(a.list.set(r,t),r===a.last||n){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function He(e,r){var t=je(e);t.forEach(function(a){for(var n in r){var o=ae(r[n],a),u=a.target,s=k(o),i=le(u,n,s,a),h=s||k(i),c=de(Fe(o,h),i),l=fe(u,n);$e[l](u,n,c,a.transforms,!0)}})}function Dr(e,r){var t=fe(e.target,r.name);if(t){var a=Tr(r,e),n=a[a.length-1];return{type:t,property:r.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function Lr(e,r){return _(J(e.map(function(t){return r.map(function(a){return Dr(t,a)})})),function(t){return!f.und(t)})}function Ne(e,r){var t=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):r.duration,n.delay=t?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):r.delay,n.endDelay=t?n.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):r.endDelay,n}var xe=0;function Pr(e){var r=ne(Le,e),t=ne(ie,e),a=Ir(t,e),n=je(e.targets),o=Lr(n,a),u=Ne(o,t),s=xe;return xe++,G(r,{id:s,children:[],animatables:n,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var L=[],Ue=function(){var e;function r(){!e&&(!we()||!y.suspendWhenDocumentHidden)&&L.length>0&&(e=requestAnimationFrame(t))}function t(n){for(var o=L.length,u=0;u<o;){var s=L[u];s.paused?(L.splice(u,1),o--):(s.tick(n),u++)}e=u>0?requestAnimationFrame(t):void 0}function a(){y.suspendWhenDocumentHidden&&(we()?e=cancelAnimationFrame(e):(L.forEach(function(n){return n._onDocumentVisibility()}),Ue()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),r}();function we(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,t=0,a=0,n,o=0,u=null;function s(g){var v=window.Promise&&new Promise(function(O){return u=O});return g.finished=v,v}var i=Pr(e);s(i);function h(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,n.forEach(function(v){return v.reversed=i.reversed})}function c(g){return i.reversed?i.duration-g:g}function l(){r=0,t=c(i.currentTime)*(1/y.speed)}function m(g,v){v&&v.seek(g-v.timelineOffset)}function I(g){if(i.reversePlayback)for(var O=o;O--;)m(g,n[O]);else for(var v=0;v<o;v++)m(g,n[v])}function p(g){for(var v=0,O=i.animations,E=O.length;v<E;){var b=O[v],S=b.animatable,R=b.tweens,B=R.length-1,w=R[B];B&&(w=_(R,function(tr){return g<tr.end})[0]||w);for(var F=P(g-w.start-w.delay,0,w.duration)/w.duration,U=isNaN(F)?1:w.easing(F),D=w.to.strings,X=w.round,ee=[],rr=w.to.numbers.length,A=void 0,j=0;j<rr;j++){var $=void 0,he=w.to.numbers[j],me=w.from.numbers[j]||0;w.isPath?$=br(w.value,U*he,w.isPathTargetInsideSVG):$=me+U*(he-me),X&&(w.isColor&&j>2||($=Math.round($*X)/X)),ee.push($)}var pe=D.length;if(!pe)A=ee[0];else{A=D[0];for(var H=0;H<pe;H++){D[H];var ye=D[H+1],re=ee[H];isNaN(re)||(ye?A+=re+ye:A+=re+" ")}}$e[b.type](S.target,b.property,A,S.transforms),b.currentValue=A,v++}}function d(g){i[g]&&!i.passThrough&&i[g](i)}function M(){i.remaining&&i.remaining!==!0&&i.remaining--}function x(g){var v=i.duration,O=i.delay,E=v-i.endDelay,b=c(g);i.progress=P(b/v*100,0,100),i.reversePlayback=b<i.currentTime,n&&I(b),!i.began&&i.currentTime>0&&(i.began=!0,d("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,d("loopBegin")),b<=O&&i.currentTime!==0&&p(0),(b>=E&&i.currentTime!==v||!v)&&p(v),b>O&&b<E?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,d("changeBegin")),d("change"),p(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,d("changeComplete")),i.currentTime=P(b,0,v),i.began&&d("update"),g>=v&&(t=0,M(),i.remaining?(r=a,d("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&h()):(i.paused=!0,i.completed||(i.completed=!0,d("loopComplete"),d("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,n=i.children,o=n.length;for(var v=o;v--;)i.children[v].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,p(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,v){return He(g,v),i},i.tick=function(g){a=g,r||(r=a),x((a+(t-r))*y.speed)},i.seek=function(g){x(c(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,L.push(i),l(),Ue())},i.reverse=function(){h(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var v=ge(g);ze(v,i)},i.reset(),i.autoplay&&i.play(),i}function Ie(e,r){for(var t=r.length;t--;)ue(e,r[t].animatable.target)&&r.splice(t,1)}function ze(e,r){var t=r.animations,a=r.children;Ie(e,t);for(var n=a.length;n--;){var o=a[n],u=o.animations;Ie(e,u),!u.length&&!o.children.length&&a.splice(n,1)}!t.length&&!a.length&&r.pause()}function Cr(e){for(var r=ge(e),t=L.length;t--;){var a=L[t];ze(r,a)}}function kr(e,r){r===void 0&&(r={});var t=r.direction||"normal",a=r.easing?oe(r.easing):null,n=r.grid,o=r.axis,u=r.from||0,s=u==="first",i=u==="center",h=u==="last",c=f.arr(e),l=parseFloat(c?e[0]:e),m=c?parseFloat(e[1]):0,I=k(c?e[1]:e)||0,p=r.start||0+(c?l:0),d=[],M=0;return function(x,g,v){if(s&&(u=0),i&&(u=(v-1)/2),h&&(u=v-1),!d.length){for(var O=0;O<v;O++){if(!n)d.push(Math.abs(u-O));else{var E=i?(n[0]-1)/2:u%n[0],b=i?(n[1]-1)/2:Math.floor(u/n[0]),S=O%n[0],R=Math.floor(O/n[0]),B=E-S,w=b-R,F=Math.sqrt(B*B+w*w);o==="x"&&(F=-B),o==="y"&&(F=-w),d.push(F)}M=Math.max.apply(Math,d)}a&&(d=d.map(function(D){return a(D/M)*M})),t==="reverse"&&(d=d.map(function(D){return o?D<0?D*-1:-D:Math.abs(M-D)}))}var U=c?(m-l)/M:l;return p+U*(Math.round(d[g]*100)/100)+I}}function Er(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(t,a){var n=L.indexOf(r),o=r.children;n>-1&&L.splice(n,1);function u(m){m.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=G(t,ne(ie,e));i.targets=i.targets||e.targets;var h=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=f.und(a)?h:de(a,h),u(r),r.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var l=Ne(o,e);return r.delay=l.delay,r.endDelay=l.endDelay,r.duration=l.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=L;y.remove=Cr;y.get=le;y.set=He;y.convertPx=ce;y.path=Mr;y.setDashoffset=pr;y.stagger=kr;y.timeline=Er;y.easing=oe;y.penner=ke;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const q=(e,r)=>{const t=window.getComputedStyle(e).getPropertyValue("color");y({targets:e,color:[r,t],easing:"easeOutInBounce",duration:1e3})},Sr=(e,r)=>{e/=100;const t=r/(e*e);return Math.round(t*10)/10},Br=(e,r)=>{const t=r/(e*e)*703;return Math.round(t*10)/10},Fr=e=>{const r=18.5*Math.pow(e/100,2),t=Math.round(r*10)/10,a=24.9*Math.pow(e/100,2),n=Math.round(a*10)/10;return`${t}kgs - ${n}kgs`},Ar=e=>{const r=18.5*Math.pow(e,2)/703,t=Math.round(r*10)/10,a=24.9*Math.pow(e,2)/703,n=Math.round(a*10)/10;return`${z(t).stones}st ${z(t).pounds}lbs - ${z(n).stones}st ${z(n).pounds}lbs`};function z(e){return{stones:Math.floor(e/14),pounds:Math.round(e%14*10)/10}}function Oe(e){return e<18.5?"underweight":e>=18.5&&e<=24.9?"healthy weight":e>=25&&e<=29.9?"overweight":"obese"}const We=T("#metric"),qe=T("#imperial"),Vr=T("#metric-btn"),Rr=T("#imperial-btn"),Ke=T("#cm"),Ze=T("#kg"),K=T("#feets"),Z=T("#inches"),Q=T("#stones"),Y=T("#pounds"),Qe=T("#result"),Ye=()=>{[Ke,Ze,K,Z,Q,Y].forEach(e=>{e.value=""})},_e=()=>{Vr.checked=!0,qe.classList.add("hidden"),We.classList.remove("hidden"),localStorage.setItem("unitsBMI","metric")},Je=()=>{Rr.checked=!0,qe.classList.remove("hidden"),We.classList.add("hidden"),localStorage.setItem("unitsBMI","imperial")},Ge=()=>{const e=localStorage.getItem("unitsBMI");return e||"metric"},jr=()=>{const e=Ge();if(e)switch(e){case"metric":_e();break;case"imperial":Je();break}},$r=De((e,r)=>{e>=12&&(K.value=Math.floor(r/12)||"",Z.value=r%12||"",q(K,"#00FF00"),q(Z,"#00FF00"))},2e3);let Hr=De((e,r)=>{e>=14&&(Q.value=Math.floor(r/14)||"",Y.value=r%14||"",q(Q,"#00FF00"),q(Y,"#00FF00"))},2e3);function Xe(e){let r,t;const a=Ge();if(a==="metric"){const n=V(Ke.value),o=V(Ze.value);r=Sr(n,o),t=Oe(r);const u=Fr(n);Te(r,t,u)}else if(a==="imperial"){const n=V(K.value)||0,o=V(Z.value)||0,u=V(Q.value)||0,s=V(Y.value)||0,i=o+12*n;$r(o,i);const h=s+14*u;Hr(s,h),r=Br(i,h),t=Oe(r);const c=Ar(i);Te(r,t,c)}if(!r)return Ur()}const Nr=nr(Xe,500);function Te(e,r,t){Qe.innerHTML=`
    <div class="sm:flex-1 flex flex-col gap-2">
      <h4 class="text-custom-white font-semibold">
        Your BMI is...
      </h4>
      <h3
        id="bmi-result-num"
        class="text-custom-white -tracking-[2.4px] lg:-tracking-[3.2px] leading-[52.8px] lg:leading-[70.4px] text-5xl lg:text-[64px] font-semibold"
      >
        ${e}
      </h3>
  </div>
  <p
    class="sm:flex-1 text-custom-white text-[14px] leading-[21px]"
  >
    Your BMI suggests you're
    <span id="bmi-result-verbal">${r}</span> Your
    ideal weight is between
    <span
      id="weight-range"
      class="font-bold"
      >${t}</span
    >.
  </p>
  `}function Ur(){Qe.innerHTML=`
    <div class="flex flex-col gap-4">
      <h2
        class="text-2xl text-custom-white font-semibold leading-[29px] -tracking-[1.2px]"
      >
        Welcome!
      </h2>
      <p class="text-[14px] text-custom-white leading-[21px]">
        Enter your height and weight and you’ll see your BMI result
        here
      </p>
  </div>  
  `}const zr=T("#metric-btn"),Wr=T("#imperial-btn"),er=T("#bmi-form");zr.addEventListener("click",()=>{_e(),Ye()});Wr.addEventListener("click",()=>{Je(),Ye()});window.addEventListener("DOMContentLoaded",()=>{jr()});er.addEventListener("keyup",Nr);er.addEventListener("click",Xe);
