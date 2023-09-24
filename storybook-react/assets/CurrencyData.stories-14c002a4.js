import{j as s,a as k,F as x}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-cbfd9612.js";import{D as E,P as T,A as V,b as q,d as I}from"./index-b2336122.js";import{t as L,d as O}from"./util-7a3e2898.js";import{c as U}from"./clsx.m-1229b3e0.js";import{r as $}from"./index-76fb7be0.js";import{P as j}from"./Paragraph-e67a9fcb.js";import"./iframe-b53bc6bb.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./index-8d47fad6.js";const w=(r,t,a)=>new Intl.NumberFormat(r,{style:"currency",currency:t,minimumFractionDigits:Number.isInteger(a)?0:void 0,useGrouping:!1}).format(a).replace(/[\s]+/g,"").replace("-","−"),A=(r,t,a)=>{let e=new Intl.NumberFormat(r,{style:"currency",currency:t}).format(a);return e=e.replace(/-/,"−"),(r==="nl"||r==="nl-NL")&&/\u2212/.test(e)&&(e=e.replace(/(.+)\u2212(.+)/,"− $1$2")),e=e.replace(/ /g," "),e},u=$.forwardRef(({children:r,currency:t="EUR",amount:a,locale:e="nl-NL",className:C,...D},S)=>{const n=typeof a=="string"?parseFloat(a):a,P=w(e,t,n),F=A(e,t,n);return s("data",{...D,ref:S,value:`${t} ${a}`,className:U("utrecht-currency-data",n<0&&"utrecht-currency-data--negative",n>0&&"utrecht-currency-data--positive",C),"aria-label":P,children:r||F})});u.displayName="CurrencyData";try{u.displayName="CurrencyData",u.__docgenInfo={description:"",displayName:"CurrencyData",props:{currency:{defaultValue:{value:"EUR"},description:"",name:"currency",required:!1,type:{name:"string"}},amount:{defaultValue:null,description:"",name:"amount",required:!0,type:{name:"string | number"}},locale:{defaultValue:{value:"nl-NL"},description:"",name:"locale",required:!1,type:{name:"string"}}}}}catch{}const M=`<!-- @license CC0-1.0 -->

# Currency data
`,G={"currency-data":{}},Y={utrecht:G},K={title:"React Component/Currency data",id:"react-currency-data",component:u,args:{amount:"0",currency:"EUR",locale:"nl-NL"},argTypes:{amount:{name:"amount",type:{name:"string",required:!0},table:{defaultValue:{summary:""}}},currency:{name:"amount",type:{name:"string",required:!0},table:{defaultValue:{summary:"EUR"}}},locale:{name:"locale",type:{name:"string",required:!1},table:{defaultValue:{summary:"nl-NL"}}}},parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-currency-data",tokens:L,tokensDefinition:Y,docs:{page:()=>k(x,{children:[s(E,{children:M}),s(T,{}),s(V,{story:q}),s(I,{})]})}},decorators:[r=>s(j,{children:r()})]},o={args:{amount:"42.42"}},c={args:{amount:"-42.42"}},i={args:{amount:"1212121"}},m=O(K);var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    amount: '42.42'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,g,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    amount: '-42.42'
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var N,b,h;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    amount: '1212121'
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var R,v,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:"designTokenStory(meta)",...(_=(v=m.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ue=["Positive","Negative","Million","DesignTokens"];export{m as DesignTokens,i as Million,c as Negative,o as Positive,ue as __namedExportsOrder,K as default};
//# sourceMappingURL=CurrencyData.stories-14c002a4.js.map
