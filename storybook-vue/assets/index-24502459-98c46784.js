import{d as V,a as j,z as A,h as B,g as P}from"./vue.esm-bundler-c077df82.js";const F=`<!-- @license CC0-1.0 -->

# Link to Social Media
`,R={"link-social":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},hover:{scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},G={utrecht:R},$="update:modelValue",f="modelValue",z="routerLink",b="navManager",J="router",S="aria",c=Symbol(),m={default:c},T=s=>(s==null?void 0:s.split(" "))||[],q=(s,h,v=[])=>{var o;return[...Array.from(((o=s.value)==null?void 0:o.classList)||[]),...v].filter((i,a,r)=>!h.has(i)&&r.indexOf(i)===a)},y=(s,h,v=[],o,i,a)=>{h!==void 0&&h();const r=V((t,{attrs:g,slots:x,emit:w})=>{var L;let d=t[o];const k=j(),C=new Set(T(g.class)),H=l=>{l.el&&(Array.isArray(i)?i:[i]).forEach(u=>{l.el.addEventListener(u.toLowerCase(),n=>{d=(n==null?void 0:n.target)[o],w($,d),a&&w(a,n)})})},E=P(),M=(L=E==null?void 0:E.appContext)!=null&&L.provides[b]?A(b):void 0,O=l=>{const{routerLink:u}=t;if(u!==c)if(M!==void 0){let n={event:l};for(const e in t){const p=t[e];t.hasOwnProperty(e)&&e.startsWith(J)&&p!==c&&(n[e]=p)}M.navigate(n)}else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")};return()=>{d=t[o],T(g.class).forEach(e=>{C.add(e)});const l=t.onClick,u=e=>{l!==void 0&&l(e),e.defaultPrevented||O(e)};let n={ref:k,class:q(k,C),onClick:u,onVnodeBeforeMount:i?H:void 0};for(const e in t){const p=t[e];(t.hasOwnProperty(e)&&p!==c||e.startsWith(S))&&(n[e]=p)}return o&&(t[f]!==c?n={...n,[o]:t[f]}:d!==c&&(n={...n,[o]:d})),B(s,n,x.default&&x.default())}});return r.name=s,r.props={[z]:m},v.forEach(t=>{r.props[t]=m}),o&&(r.props[f]=m,r.emits=[$,a]),r},I=y("utrecht-icon-facebook",void 0),D=y("utrecht-icon-instagram",void 0),K=y("utrecht-icon-linkedin",void 0),N=y("utrecht-icon-twitter",void 0),Q=y("utrecht-icon-whatsapp",void 0);(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var s=HTMLElement;window.HTMLElement=function(){return Reflect.construct(s,[],this.constructor)},HTMLElement.prototype=s.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,s)}})();export{D as B,I as J,N as a,Q as j,K as q,F as r,G as t};
//# sourceMappingURL=index-24502459-98c46784.js.map
