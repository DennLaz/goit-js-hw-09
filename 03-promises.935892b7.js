var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector(".form"),l=i.querySelector('[name="delay"]'),u=i.querySelector('[name="step"]'),a=i.querySelector('[name="amount"]');let s,d,f;function c(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.addEventListener("submit",(function(e){e.preventDefault(),f=u.valueAsNumber,s=a.valueAsNumber,d=l.valueAsNumber;for(let e=0;e<s;e+=1)c(e+1,d+e*f).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.935892b7.js.map
