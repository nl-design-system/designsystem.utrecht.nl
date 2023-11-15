/*! For license information please see logo-stories-mdx.54af9190.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[9876],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/logo.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>logo_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.15_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n",(0,jsx_runtime.jsx)(_components.h1,{id:"logo",children:"Logo"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Het logo van de gemeente Utrecht is opgebouwd uit 3 onderdelen:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"het beeldmerk (het schild met de leeuwen)"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"het woordmerk (Gemeente Utrecht)"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"het gele accent, ook wel het ‘gouden randje’ genoemd, dit refereert aan het goud van de kroon en de leeuwen"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Kies bij het plaatsen van het logo op een gekleurde achtergrond of op een foto altijd de variant die het meeste contrast oplevert, zodat het merkteken goed leesbaar is."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Het monochrome logo mag je slechts in enkele gevallen gebruiken. Bijvoorbeeld bij applicaties met donkere achtergrond of als een samenwerkende of externe partij het logo gebruikt in communicatiemiddelen. Neem dan contact met ons op."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"design",children:"Design"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=69%3A907",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma - Utrecht Design System - Logo"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"normaal",children:"Normaal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Het normale logo in het rood met geel. Gebruik voor desktop webapplicaties en e-mail handtekeningen met donkere achtergrond. Dit logo is het meest herkenbaar en straalt vertrouwen uit."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Afmetingen: 192 × 100 pixels"}),"\n",(0,jsx_runtime.jsx)("p",{style:{padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo.svg",width:"192",height:"100",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)("p",{style:{backgroundColor:"var(--utrecht-color-red-40, black)",color:"var(--utrecht-color-grey-100, white)",padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-monochrome.svg",width:"192",height:"100",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"normaal-zonder-balk",children:"Normaal zonder balk"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Het normale logo in het rood zonder balk.\nGebruik voor desktop webapplicaties waar de achtergrond in conflict is met de gele kleur van de balk."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Afmetingen: 163 × 100 pixels"}),"\n",(0,jsx_runtime.jsx)("p",{style:{padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-lg.svg",width:"163",height:"100",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)("p",{style:{backgroundColor:"var(--utrecht-color-red-40, black)",color:"var(--utrecht-color-grey-100, white)",padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-lg-monochrome.svg",width:"163",height:"100",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"medium",children:"Medium"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Kleiner formaat van het logo voor gebruik van apps of andere mobiele applicaties."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Afmetingen: 160 × 77 pixels"}),"\n",(0,jsx_runtime.jsx)("p",{style:{padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-md.svg",width:"160",height:"77",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)("p",{style:{backgroundColor:"var(--utrecht-color-red-40, black)",color:"var(--utrecht-color-grey-100, white)",padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-md-monochrome.svg",width:"160",height:"77",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"klein",children:"Klein"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Basic klein formaat van het logo van de Gemeente Utrecht, voor gebruik van avatar of mobiele oplossingen waar ruimte gebrek kan onstaan."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Afmetingen: 108 × 64 pixels"}),"\n",(0,jsx_runtime.jsx)("p",{style:{padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-sm.svg",width:"108",height:"64",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)("p",{style:{backgroundColor:"var(--utrecht-color-red-40, black)",color:"var(--utrecht-color-grey-100, white)",padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-sm-monochrome.svg",width:"108",height:"64",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"favicon",children:"Favicon"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Gebruiken als favicon."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Afmetingen: 31 × 32 pixels"}),"\n",(0,jsx_runtime.jsx)("p",{style:{padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-xs.svg",width:"31",height:"32",alt:"Wapen van de Gemeente Utrecht"})}),"\n",(0,jsx_runtime.jsx)("p",{style:{backgroundColor:"var(--utrecht-color-red-40, black)",color:"var(--utrecht-color-grey-100, white)",padding:"1em"},children:(0,jsx_runtime.jsx)("img",{src:"logo-xs-monochrome.svg",width:"31",height:"32",alt:"Wapen van de Gemeente Utrecht"})})]})}const logo=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function logo_stories_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Logo",parameters:{status:{type:"ALPHA"}}}),"\n",(0,jsx_runtime.jsx)(logo,{})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Logo",parameters:{status:{type:"ALPHA"}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function logo_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(logo_stories_createMdxContent,{...props})}):logo_stories_createMdxContent()}};const logo_stories=componentMeta}}]);