(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const i=e=>{let t;if(e instanceof Array?t=document.querySelectorAll(e[0]):t=document.querySelector(e),!t)throw new Error(`no result for query - ${e}`);return t},c=e=>{const t=e.split("").map(n=>{if(n==="."||!isNaN(n))return n}).join("");return Number(t)===0?NaN:Number(t)},N=(e,t)=>{e/=100;const n=t/(e*e);return Math.round(n*10)/10},E=(e,t)=>{const n=t/(e*e)*703;return Math.round(n*10)/10},S=e=>{const t=18.5*Math.pow(e/100,2),n=Math.round(t*10)/10,r=24.9*Math.pow(e/100,2),s=Math.round(r*10)/10;return`${n}kgs - ${s}kgs`},R=e=>{const t=18.5*Math.pow(e,2)/703,n=Math.round(t*10)/10,r=24.9*Math.pow(e,2)/703,s=Math.round(r*10)/10;return console.log(a(n),n),`${a(n).stones}st ${a(n).pounds}lbs - ${a(s).stones}st ${a(s).pounds}lbs`};function a(e){return{stones:Math.floor(e/14),pounds:Math.round(e%14*10)/10}}function d(e){return e<18.5?"underweight":e>=18.5&&e<=24.9?"healthy weight":e>=25&&e<=29.9?"overweight":"obese"}const h=i("#metric"),p=i("#imperial"),f=i("#metric-btn"),g=i("#imperial-btn"),M=i("#cm"),w=i("#kg"),x=i("#feets"),b=i("#inches"),v=i("#stones"),y=i("#pounds"),L=i("#result"),O=()=>{[M,w,x,b,v,y].forEach(e=>{e.value=""})},I=()=>{f.checked=!0,p.classList.add("hidden"),h.classList.remove("hidden"),localStorage.setItem("unitsBMI","metric")},D=()=>{g.checked=!0,p.classList.remove("hidden"),h.classList.add("hidden"),localStorage.setItem("unitsBMI","imperial")},$=()=>{const e=localStorage.getItem("unitsBMI"),t=[f,g].reduce((n,r)=>(r.checked&&(n=r.value),n),"");return e||t},H=()=>{const e=$();if(e)switch(e){case"metric":I();break;case"imperial":D();break}};function U(){let e,t;const n=$();if(n==="metric"){const r=c(M.value),s=c(w.value);e=N(r,s),t=d(e);const o=S(r);m(e,t,o)}else if(n==="imperial"){const r=c(x.value)||0,s=c(b.value)||0,o=c(v.value)||0,l=c(y.value)||0,u=s+12*r,k=l+14*o;e=E(u,k),t=d(e);const B=R(u);m(e,t,B)}if(!e)return A()}function m(e,t,n){L.innerHTML=`
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
      >${n}</span
    >.
  </p>
  `}function A(){L.innerHTML=`
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
  `}const P=i("#metric-btn"),W=i("#imperial-btn"),Y=i("#bmi-form");P.addEventListener("click",()=>{I(),O()});W.addEventListener("click",()=>{D(),O()});window.addEventListener("DOMContentLoaded",()=>{H()});Y.addEventListener("keyup",U);
