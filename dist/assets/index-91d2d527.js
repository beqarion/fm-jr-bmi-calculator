(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const T=e=>{let t;if(e instanceof Array?t=document.querySelectorAll(e[0]):t=document.querySelector(e),!t)throw new Error(`no result for query - ${e}`);return t},V=e=>{const t=e.split("").map(r=>{if(r==="."||!isNaN(r))return r}).join("");return Number(t)===0?NaN:Number(t)};function Le(e,t){let r=0;return function(...a){const n=new Date().getTime();n-r<t||(r=n,e(...a))}}function Pe(e,t){let r;return function(){const a=this,n=arguments;clearTimeout(r),r=setTimeout(function(){e.apply(a,n)},t)}}var De={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ie={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},it=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],W={CSS:{},springs:{}};function D(e,t,r){return Math.min(Math.max(e,t),r)}function N(e,t){return e.indexOf(t)>-1}function re(e,t){return e.apply(null,t)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return N(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!De.hasOwnProperty(e)&&!ie.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Ee(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function Ce(e,t){var r=Ee(e),a=D(f.und(r[0])?1:r[0],.1,100),n=D(f.und(r[1])?100:r[1],.1,100),o=D(f.und(r[2])?10:r[2],.1,100),u=D(f.und(r[3])?0:r[3],.1,100),s=Math.sqrt(n/a),i=o/(2*Math.sqrt(n*a)),h=i<1?s*Math.sqrt(1-i*i):0,c=1,l=i<1?(i*s+-u)/h:-u+s;function p(m){var d=t?t*m/1e3:m;return i<1?d=Math.exp(-d*i*s)*(c*Math.cos(h*d)+l*Math.sin(h*d)):d=(c+l*d)*Math.exp(-d*s),m===0||m===1?m:1-d}function I(){var m=W.springs[e];if(m)return m;for(var d=1/6,M=0,x=0;;)if(M+=d,p(M)===1){if(x++,x>=16)break}else x=0;var g=M*d*1e3;return W.springs[e]=g,g}return t?p:I}function ot(e){return e===void 0&&(e=10),function(t){return Math.ceil(D(t,1e-6,1)*e)*(1/e)}}var ut=function(){var e=11,t=1/(e-1);function r(c,l){return 1-3*l+3*c}function a(c,l){return 3*l-6*c}function n(c){return 3*c}function o(c,l,p){return((r(l,p)*c+a(l,p))*c+n(l))*c}function u(c,l,p){return 3*r(l,p)*c*c+2*a(l,p)*c+n(l)}function s(c,l,p,I,m){var d,M,x=0;do M=l+(p-l)/2,d=o(M,I,m)-c,d>0?p=M:l=M;while(Math.abs(d)>1e-7&&++x<10);return M}function i(c,l,p,I){for(var m=0;m<4;++m){var d=u(l,p,I);if(d===0)return l;var M=o(l,p,I)-c;l-=M/d}return l}function h(c,l,p,I){if(!(0<=c&&c<=1&&0<=p&&p<=1))return;var m=new Float32Array(e);if(c!==l||p!==I)for(var d=0;d<e;++d)m[d]=o(d*t,c,p);function M(x){for(var g=0,v=1,O=e-1;v!==O&&m[v]<=x;++v)g+=t;--v;var S=(x-m[v])/(m[v+1]-m[v]),b=g+S*t,k=u(b,c,p);return k>=.001?i(x,b,c,p):k===0?b:s(x,g,g+t,c,p)}return function(x){return c===l&&p===I||x===0||x===1?x:o(M(x),l,I)}}return h}(),Se=function(){var e={linear:function(){return function(a){return a}}},t={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,o=4;a<((n=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var o=D(a,1,10),u=D(n,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},r=["Quad","Cubic","Quart","Quint","Expo"];return r.forEach(function(a,n){t[a]=function(){return function(o){return Math.pow(o,n+2)}}}),Object.keys(t).forEach(function(a){var n=t[a];e["easeIn"+a]=n,e["easeOut"+a]=function(o,u){return function(s){return 1-n(o,u)(1-s)}},e["easeInOut"+a]=function(o,u){return function(s){return s<.5?n(o,u)(s*2)/2:1-n(o,u)(s*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-n(o,u)(1-s*2))/2:(n(o,u)(s*2-1)+1)/2}}}),e}();function oe(e,t){if(f.fnc(e))return e;var r=e.split("(")[0],a=Se[r],n=Ee(e);switch(r){case"spring":return Ce(e,t);case"cubicBezier":return re(ut,n);case"steps":return re(ot,n);default:return re(a,n)}}function ke(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function _(e,t){for(var r=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],o=0;o<r;o++)if(o in e){var u=e[o];t.call(a,u,o,e)&&n.push(u)}return n}function J(e){return e.reduce(function(t,r){return t.concat(f.arr(r)?J(r):r)},[])}function Me(e){return f.arr(e)?e:(f.str(e)&&(e=ke(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ue(e,t){return e.some(function(r){return r===t})}function se(e){var t={};for(var r in e)t[r]=e[r];return t}function ne(e,t){var r=se(e);for(var a in e)r[a]=t.hasOwnProperty(a)?t[a]:e[a];return r}function G(e,t){var r=se(e);for(var a in t)r[a]=f.und(e[a])?t[a]:e[a];return r}function st(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function ct(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(s,i,h,c){return i+i+h+h+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),n=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+n+","+o+","+u+",1)"}function ft(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,a=parseInt(t[2],10)/100,n=parseInt(t[3],10)/100,o=t[4]||1;function u(p,I,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?p+(I-p)*6*m:m<1/2?I:m<2/3?p+(I-p)*(2/3-m)*6:p}var s,i,h;if(a==0)s=i=h=n;else{var c=n<.5?n*(1+a):n+a-n*a,l=2*n-c;s=u(l,c,r+1/3),i=u(l,c,r),h=u(l,c,r-1/3)}return"rgba("+s*255+","+i*255+","+h*255+","+o+")"}function lt(e){if(f.rgb(e))return st(e);if(f.hex(e))return ct(e);if(f.hsl(e))return ft(e)}function C(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function dt(e){if(N(e,"translate")||e==="perspective")return"px";if(N(e,"rotate")||N(e,"skew"))return"deg"}function ae(e,t){return f.fnc(e)?e(t.target,t.id,t.total):e}function E(e,t){return e.getAttribute(t)}function ce(e,t,r){var a=C(t);if(ue([r,"deg","rad","turn"],a))return t;var n=W.CSS[t+r];if(!f.und(n))return n;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+r;var i=o/u.offsetWidth;s.removeChild(u);var h=i*parseFloat(t);return W.CSS[t+r]=h,h}function Be(e,t,r){if(t in e.style){var a=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[t]||getComputedStyle(e).getPropertyValue(a)||"0";return r?ce(e,n,r):n}}function fe(e,t){if(f.dom(e)&&!f.inp(e)&&(!f.nil(E(e,t))||f.svg(e)&&e[t]))return"attribute";if(f.dom(e)&&ue(it,t))return"transform";if(f.dom(e)&&t!=="transform"&&Be(e,t))return"css";if(e[t]!=null)return"object"}function Fe(e){if(f.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=r.exec(t);)a.set(n[1],n[2]);return a}}function vt(e,t,r,a){var n=N(t,"scale")?1:0+dt(t),o=Fe(e).get(t)||n;return r&&(r.transforms.list.set(t,o),r.transforms.last=t),a?ce(e,o,a):o}function le(e,t,r,a){switch(fe(e,t)){case"transform":return vt(e,t,a,r);case"css":return Be(e,t,r);case"attribute":return E(e,t);default:return e[t]||0}}function de(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var a=C(e)||0,n=parseFloat(t),o=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return n+o+a;case"-":return n-o+a;case"*":return n*o+a}}function Ae(e,t){if(f.col(e))return lt(e);if(/\s/g.test(e))return e;var r=C(e),a=r?e.substr(0,e.length-r.length):e;return t?a+t:a}function ve(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function gt(e){return Math.PI*2*E(e,"r")}function ht(e){return E(e,"width")*2+E(e,"height")*2}function pt(e){return ve({x:E(e,"x1"),y:E(e,"y1")},{x:E(e,"x2"),y:E(e,"y2")})}function Ve(e){for(var t=e.points,r=0,a,n=0;n<t.numberOfItems;n++){var o=t.getItem(n);n>0&&(r+=ve(a,o)),a=o}return r}function mt(e){var t=e.points;return Ve(e)+ve(t.getItem(t.numberOfItems-1),t.getItem(0))}function Re(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return gt(e);case"rect":return ht(e);case"line":return pt(e);case"polyline":return Ve(e);case"polygon":return mt(e)}}function yt(e){var t=Re(e);return e.setAttribute("stroke-dasharray",t),t}function Mt(e){for(var t=e.parentNode;f.svg(t)&&f.svg(t.parentNode);)t=t.parentNode;return t}function He(e,t){var r=t||{},a=r.el||Mt(e),n=a.getBoundingClientRect(),o=E(a,"viewBox"),u=n.width,s=n.height,i=r.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function bt(e,t){var r=f.str(e)?ke(e)[0]:e,a=t||100;return function(n){return{property:n,el:r,svg:He(r),totalLength:Re(r)*(a/100)}}}function xt(e,t,r){function a(c){c===void 0&&(c=0);var l=t+c>=1?t+c:0;return e.el.getPointAtLength(l)}var n=He(e.el,e.svg),o=a(),u=a(-1),s=a(1),i=r?1:n.w/n.vW,h=r?1:n.h/n.vH;switch(e.property){case"x":return(o.x-n.x)*i;case"y":return(o.y-n.y)*h;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function be(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Ae(f.pth(e)?e.totalLength:e,t)+"";return{original:a,numbers:a.match(r)?a.match(r).map(Number):[0],strings:f.str(e)||t?a.split(r):[]}}function ge(e){var t=e?J(f.arr(e)?e.map(Me):Me(e)):[];return _(t,function(r,a,n){return n.indexOf(r)===a})}function je(e){var t=ge(e);return t.map(function(r,a){return{target:r,id:a,total:t.length,transforms:{list:Fe(r)}}})}function wt(e,t){var r=se(t);if(/^spring/.test(r.easing)&&(r.duration=Ce(r.easing)),f.arr(e)){var a=e.length,n=a===2&&!f.obj(e[0]);n?e={value:e}:f.fnc(t.duration)||(r.duration=t.duration/a)}var o=f.arr(e)?e:[e];return o.map(function(u,s){var i=f.obj(u)&&!f.pth(u)?u:{value:u};return f.und(i.delay)&&(i.delay=s?0:t.delay),f.und(i.endDelay)&&(i.endDelay=s===o.length-1?t.endDelay:0),i}).map(function(u){return G(u,r)})}function It(e){for(var t=_(J(e.map(function(o){return Object.keys(o)})),function(o){return f.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),r={},a=function(o){var u=t[o];r[u]=e.map(function(s){var i={};for(var h in s)f.key(h)?h==u&&(i.value=s[h]):i[h]=s[h];return i})},n=0;n<t.length;n++)a(n);return r}function Ot(e,t){var r=[],a=t.keyframes;a&&(t=G(It(a),t));for(var n in t)f.key(n)&&r.push({name:n,tweens:wt(t[n],e)});return r}function Tt(e,t){var r={};for(var a in e){var n=ae(e[a],t);f.arr(n)&&(n=n.map(function(o){return ae(o,t)}),n.length===1&&(n=n[0])),r[a]=n}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function Lt(e,t){var r;return e.tweens.map(function(a){var n=Tt(a,t),o=n.value,u=f.arr(o)?o[1]:o,s=C(u),i=le(t.target,e.name,s,t),h=r?r.to.original:i,c=f.arr(o)?o[0]:h,l=C(c)||C(i),p=s||l;return f.und(u)&&(u=h),n.from=be(c,p),n.to=be(de(u,c),p),n.start=r?r.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=oe(n.easing,n.duration),n.isPath=f.pth(o),n.isPathTargetInsideSVG=n.isPath&&f.svg(t.target),n.isColor=f.col(n.from.original),n.isColor&&(n.round=1),r=n,n})}var $e={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,a,n){if(a.list.set(t,r),t===a.last||n){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function Ne(e,t){var r=je(e);r.forEach(function(a){for(var n in t){var o=ae(t[n],a),u=a.target,s=C(o),i=le(u,n,s,a),h=s||C(i),c=de(Ae(o,h),i),l=fe(u,n);$e[l](u,n,c,a.transforms,!0)}})}function Pt(e,t){var r=fe(e.target,t.name);if(r){var a=Lt(t,e),n=a[a.length-1];return{type:r,property:t.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function Dt(e,t){return _(J(e.map(function(r){return t.map(function(a){return Pt(r,a)})})),function(r){return!f.und(r)})}function Ue(e,t){var r=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},n={};return n.duration=r?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):t.duration,n.delay=r?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):t.delay,n.endDelay=r?n.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):t.endDelay,n}var xe=0;function Et(e){var t=ne(De,e),r=ne(ie,e),a=Ot(r,e),n=je(e.targets),o=Dt(n,a),u=Ue(o,r),s=xe;return xe++,G(t,{id:s,children:[],animatables:n,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var P=[],ze=function(){var e;function t(){!e&&(!we()||!y.suspendWhenDocumentHidden)&&P.length>0&&(e=requestAnimationFrame(r))}function r(n){for(var o=P.length,u=0;u<o;){var s=P[u];s.paused?(P.splice(u,1),o--):(s.tick(n),u++)}e=u>0?requestAnimationFrame(r):void 0}function a(){y.suspendWhenDocumentHidden&&(we()?e=cancelAnimationFrame(e):(P.forEach(function(n){return n._onDocumentVisibility()}),ze()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),t}();function we(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var t=0,r=0,a=0,n,o=0,u=null;function s(g){var v=window.Promise&&new Promise(function(O){return u=O});return g.finished=v,v}var i=Et(e);s(i);function h(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,n.forEach(function(v){return v.reversed=i.reversed})}function c(g){return i.reversed?i.duration-g:g}function l(){t=0,r=c(i.currentTime)*(1/y.speed)}function p(g,v){v&&v.seek(g-v.timelineOffset)}function I(g){if(i.reversePlayback)for(var O=o;O--;)p(g,n[O]);else for(var v=0;v<o;v++)p(g,n[v])}function m(g){for(var v=0,O=i.animations,S=O.length;v<S;){var b=O[v],k=b.animatable,R=b.tweens,B=R.length-1,w=R[B];B&&(w=_(R,function(at){return g<at.end})[0]||w);for(var F=D(g-w.start-w.delay,0,w.duration)/w.duration,U=isNaN(F)?1:w.easing(F),L=w.to.strings,X=w.round,ee=[],nt=w.to.numbers.length,A=void 0,H=0;H<nt;H++){var j=void 0,he=w.to.numbers[H],pe=w.from.numbers[H]||0;w.isPath?j=xt(w.value,U*he,w.isPathTargetInsideSVG):j=pe+U*(he-pe),X&&(w.isColor&&H>2||(j=Math.round(j*X)/X)),ee.push(j)}var me=L.length;if(!me)A=ee[0];else{A=L[0];for(var $=0;$<me;$++){L[$];var ye=L[$+1],te=ee[$];isNaN(te)||(ye?A+=te+ye:A+=te+" ")}}$e[b.type](k.target,b.property,A,k.transforms),b.currentValue=A,v++}}function d(g){i[g]&&!i.passThrough&&i[g](i)}function M(){i.remaining&&i.remaining!==!0&&i.remaining--}function x(g){var v=i.duration,O=i.delay,S=v-i.endDelay,b=c(g);i.progress=D(b/v*100,0,100),i.reversePlayback=b<i.currentTime,n&&I(b),!i.began&&i.currentTime>0&&(i.began=!0,d("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,d("loopBegin")),b<=O&&i.currentTime!==0&&m(0),(b>=S&&i.currentTime!==v||!v)&&m(v),b>O&&b<S?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,d("changeBegin")),d("change"),m(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,d("changeComplete")),i.currentTime=D(b,0,v),i.began&&d("update"),g>=v&&(r=0,M(),i.remaining?(t=a,d("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&h()):(i.paused=!0,i.completed||(i.completed=!0,d("loopComplete"),d("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,n=i.children,o=n.length;for(var v=o;v--;)i.children[v].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,v){return Ne(g,v),i},i.tick=function(g){a=g,t||(t=a),x((a+(r-t))*y.speed)},i.seek=function(g){x(c(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,P.push(i),l(),ze())},i.reverse=function(){h(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var v=ge(g);We(v,i)},i.reset(),i.autoplay&&i.play(),i}function Ie(e,t){for(var r=t.length;r--;)ue(e,t[r].animatable.target)&&t.splice(r,1)}function We(e,t){var r=t.animations,a=t.children;Ie(e,r);for(var n=a.length;n--;){var o=a[n],u=o.animations;Ie(e,u),!u.length&&!o.children.length&&a.splice(n,1)}!r.length&&!a.length&&t.pause()}function Ct(e){for(var t=ge(e),r=P.length;r--;){var a=P[r];We(t,a)}}function St(e,t){t===void 0&&(t={});var r=t.direction||"normal",a=t.easing?oe(t.easing):null,n=t.grid,o=t.axis,u=t.from||0,s=u==="first",i=u==="center",h=u==="last",c=f.arr(e),l=parseFloat(c?e[0]:e),p=c?parseFloat(e[1]):0,I=C(c?e[1]:e)||0,m=t.start||0+(c?l:0),d=[],M=0;return function(x,g,v){if(s&&(u=0),i&&(u=(v-1)/2),h&&(u=v-1),!d.length){for(var O=0;O<v;O++){if(!n)d.push(Math.abs(u-O));else{var S=i?(n[0]-1)/2:u%n[0],b=i?(n[1]-1)/2:Math.floor(u/n[0]),k=O%n[0],R=Math.floor(O/n[0]),B=S-k,w=b-R,F=Math.sqrt(B*B+w*w);o==="x"&&(F=-B),o==="y"&&(F=-w),d.push(F)}M=Math.max.apply(Math,d)}a&&(d=d.map(function(L){return a(L/M)*M})),r==="reverse"&&(d=d.map(function(L){return o?L<0?L*-1:-L:Math.abs(M-L)}))}var U=c?(p-l)/M:l;return m+U*(Math.round(d[g]*100)/100)+I}}function kt(e){e===void 0&&(e={});var t=y(e);return t.duration=0,t.add=function(r,a){var n=P.indexOf(t),o=t.children;n>-1&&P.splice(n,1);function u(p){p.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=G(r,ne(ie,e));i.targets=i.targets||e.targets;var h=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=f.und(a)?h:de(a,h),u(t),t.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var l=Ue(o,e);return t.delay=l.delay,t.endDelay=l.endDelay,t.duration=l.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=P;y.remove=Ct;y.get=le;y.set=Ne;y.convertPx=ce;y.path=bt;y.setDashoffset=yt;y.stagger=St;y.timeline=kt;y.easing=oe;y.penner=Se;y.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const q=(e,t)=>{const r=window.getComputedStyle(e).getPropertyValue("color");y({targets:e,color:[t,r],easing:"easeOutInBounce",duration:1e3})},Bt=(e,t)=>{e/=100;const r=t/(e*e);return Math.round(r*10)/10},Ft=(e,t)=>{const r=t/(e*e)*703;return Math.round(r*10)/10},At=e=>{const t=18.5*Math.pow(e/100,2),r=Math.round(t*10)/10,a=24.9*Math.pow(e/100,2),n=Math.round(a*10)/10;return`${r}kgs - ${n}kgs`},Vt=e=>{const t=18.5*Math.pow(e,2)/703,r=Math.round(t*10)/10,a=24.9*Math.pow(e,2)/703,n=Math.round(a*10)/10;return`${z(r).stones}st ${z(r).pounds}lbs - ${z(n).stones}st ${z(n).pounds}lbs`};function z(e){return{stones:Math.floor(e/14),pounds:Math.round(e%14*10)/10}}function Oe(e){return e<18.5?"underweight":e>=18.5&&e<=24.9?"healthy weight":e>=25&&e<=29.9?"overweight":"obese"}const qe=T("#metric"),Ye=T("#imperial"),Rt=T("#metric-btn"),Ht=T("#imperial-btn"),Ke=T("#cm"),Ze=T("#kg"),Y=T("#feets"),K=T("#inches"),Z=T("#stones"),Q=T("#pounds"),Qe=T("#result"),_e=()=>{[Ke,Ze,Y,K,Z,Q].forEach(e=>{e.value=""})},Je=()=>{Rt.checked=!0,Ye.classList.add("hidden"),qe.classList.remove("hidden"),localStorage.setItem("unitsBMI","metric")},Ge=()=>{Ht.checked=!0,Ye.classList.remove("hidden"),qe.classList.add("hidden"),localStorage.setItem("unitsBMI","imperial")},Xe=()=>{const e=localStorage.getItem("unitsBMI");return e||"metric"},jt=()=>{const e=Xe();if(e)switch(e){case"metric":Je();break;case"imperial":Ge();break}},$t=Pe((e,t)=>{e>=12&&(Y.value=Math.floor(t/12)||"",K.value=t%12||"",q(Y,"#00FF00"),q(K,"#00FF00"))},2e3);let Nt=Pe((e,t)=>{e>=14&&(Z.value=Math.floor(t/14)||"",Q.value=t%14||"",q(Z,"#00FF00"),q(Q,"#00FF00"))},2e3);function et(e){let t,r;const a=Xe();if(a==="metric"){const n=V(Ke.value),o=V(Ze.value);t=Bt(n,o),r=Oe(t);const u=At(n);Te(t,r,u)}else if(a==="imperial"){const n=V(Y.value)||0,o=V(K.value)||0,u=V(Z.value)||0,s=V(Q.value)||0,i=o+12*n;$t(o,i);const h=s+14*u;Nt(s,h),t=Ft(i,h),r=Oe(t);const c=Vt(i);Te(t,r,c)}if(!t)return zt()}const Ut=Le(et,500);function Te(e,t,r){Qe.innerHTML=`
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
    <span id="bmi-result-verbal">${t}</span> Your
    ideal weight is between
    <span
      id="weight-range"
      class="font-bold"
      >${r}</span
    >.
  </p>
  `}function zt(){Qe.innerHTML=`
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
  `}const Wt=()=>{y.timeline({easing:"easeOutExpo"}).add({targets:"#nav-logo",translateX:["-200px",0],opacity:[0,1],rotate:[-360,360],duration:1500}).add({targets:"#bmi-form",translateY:["-30vh",0],opacity:[0,1],easing:"easeOutElastic"},"-=700").add({targets:"#hero-info",opacity:[0,1],translateX:["-400px",0]},"-=700").add({targets:"#hero-bg-absolute",opacity:[0,1],translateX:["-100%",0],translateY:["-100%",0],easing:"easeInOutSine"},"-=500")},tt=document.querySelectorAll(".section");tt.forEach(e=>{e.style.opacity=0});function qt(){tt.forEach(e=>{const t=window.innerHeight;e.getBoundingClientRect().top<t-150?y({targets:e,opacity:1,translateY:0}):y({targets:e,opacity:0,translateY:"20%"})})}const Yt=Le(qt,300),Kt=T("#metric-btn"),Zt=T("#imperial-btn"),rt=T("#bmi-form");Kt.addEventListener("click",()=>{Je(),_e()});Zt.addEventListener("click",()=>{Ge(),_e()});window.addEventListener("DOMContentLoaded",()=>{jt(),Wt(),window.addEventListener("scroll",Yt)});rt.addEventListener("keyup",Ut);rt.addEventListener("click",et);
