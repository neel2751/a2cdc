(()=>{var e={};e.id=464,e.ids=[464],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3422:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(3084),s(7764),s(8258);var i=s(3191),r=s(8716),a=s(7922),n=s.n(a),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(Sections)",{children:["Projects",{children:["[slug]",{children:["[subslug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3084)),"/Users/dixitapatel/Downloads/test/my-app/app/(Sections)/Projects/[slug]/[subslug]/page.js"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e),async e=>(await Promise.resolve().then(s.bind(s,4697))).default(e)],apple:[async e=>(await Promise.resolve().then(s.bind(s,8544))).default(e)],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,3735))).default(e)],twitter:[],manifest:"/manifest.webmanifest"}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"/Users/dixitapatel/Downloads/test/my-app/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,8258)),"/Users/dixitapatel/Downloads/test/my-app/app/not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e),async e=>(await Promise.resolve().then(s.bind(s,4697))).default(e)],apple:[async e=>(await Promise.resolve().then(s.bind(s,8544))).default(e)],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,3735))).default(e)],twitter:[],manifest:"/manifest.webmanifest"}}],c=["/Users/dixitapatel/Downloads/test/my-app/app/(Sections)/Projects/[slug]/[subslug]/page.js"],p="/(Sections)/Projects/[slug]/[subslug]/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(Sections)/Projects/[slug]/[subslug]/page",pathname:"/Projects/[slug]/[subslug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4693:(e,t,s)=>{Promise.resolve().then(s.bind(s,669)),Promise.resolve().then(s.bind(s,6e3)),Promise.resolve().then(s.bind(s,310)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23))},3084:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u,generateMetadata:()=>p});var i=s(9510),r=s(8258),a=s(7315),n=s(2600),o=s(998),l=s(3439),d=s(7710);s(1159);let c=({data:e})=>{let t=[],s=(e,t)=>`
<svg width="${e}" height="${t}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${e}" height="${t}" fill="#333" />
  <rect id="r" width="${e}" height="${t}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${e}" to="${e}" dur="1s" repeatCount="indefinite"  />
</svg>`,r=e=>Buffer.from(e).toString("base64"),a="https://cdcgrouplimited.com/nodejs/uploads/projects/";for(let n=1;n<=e.images;n++)t.push(i.jsx(d.default,{className:"rounded-xl",width:800,height:600,src:`${a}${e.images_link}/${n}.jpg`,alt:`${a}${e.images_link}/${n}.jpg`,placeholder:`data:image/svg+xml;base64,${r(s(700,475))}`},n));return i.jsx(i.Fragment,{children:i.jsx("div",{className:"max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:(0,i.jsxs)("div",{className:"space-y-5 md:space-y-8",children:[(0,i.jsxs)("div",{className:"space-y-3 max-w-3xl",children:[i.jsx("h2",{className:"text-2xl font-semibold md:text-3xl",children:e.title}),i.jsx("p",{className:"text-lg text-gray-800 ",children:e.description})]}),i.jsx("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-10",children:t})]})})})})};async function p({params:e}){let t=e.slug,s=l.b2.find(e=>e.link===t);return s?{title:`${s.title} - Project`,description:`This is the page of ${s.description}.`,twitter:{card:s.title,title:s.title,description:s.description,creator:"@CDC",images:[`${process.env.WEBSITE_URI}/${s.image}`]},openGraph:{images:["/images/Logo_New.svg",`${process.env.WEBSITE_URI}/${s.image}`]}}:{notFound:!0}}function u({params:e}){let t=l.b2.find(t=>t.link===e.subslug);return t?(0,i.jsxs)(i.Fragment,{children:[i.jsx(o.Wd,{children:i.jsx(n.ZP,{})}),i.jsx(c,{data:t}),i.jsx(a.ZP,{})]}):i.jsx(r.default,{})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[948,357,664,710,408,883,609],()=>s(3422));module.exports=i})();