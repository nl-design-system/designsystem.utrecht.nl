/*! For license information please see 65278.d05fea84.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[65278],{"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"../../documentation/components/DesignTokensTable.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>DesignTokensTable});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/color-sample/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ColorExample=({color})=>(0,jsx_runtime.jsx)("data",{className:"utrecht-color-sample",style:{color,outline:"1px solid silver"},value:color});ColorExample.displayName="ColorExample",ColorExample.propTypes={color:prop_types_default().string.isRequired};const visualizeToken=token=>token.$extensions&&token.$extensions["nl.nldesignsystem.css.property"]&&"<color>"===token.$extensions["nl.nldesignsystem.css.property"].syntax?(0,jsx_runtime.jsx)(ColorExample,{color:token.value}):"",DesignTokensTable=({tokens})=>(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Theme for Gemeente Utrecht"}),(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Design token name"}),(0,jsx_runtime.jsx)("th",{children:"Design token value"}),(0,jsx_runtime.jsx)("th",{}),(0,jsx_runtime.jsx)("th",{children:"Support"})]})}),(0,jsx_runtime.jsx)("tbody",{children:tokens.map((token=>{const{name,path,value}=token;return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("code",{children:path.join(".")})}),(0,jsx_runtime.jsx)("td",{children:value}),(0,jsx_runtime.jsx)("td",{children:visualizeToken(token)}),(0,jsx_runtime.jsx)("td",{children:token.$extensions&&!1===token.$extensions["nl.nldesignsystem.figma.supports-token"]?(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"CSS"}):"string"==typeof token.type?(0,jsx_runtime.jsxs)("div",{className:"utrecht-badge-list",children:[(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"CSS"}),(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"Figma"})]}):""})]},name)}))})]})]});DesignTokensTable.displayName="DesignTokensTable",DesignTokensTable.propTypes={tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))}},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/color-sample/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-color-sample{background-color:var(--utrecht-color-sample-background-color, currentColor);block-size:var(--utrecht-color-sample-block-size, 2em);border-color:var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));border-radius:var(--utrecht-color-sample-border-radius, 0);border-style:solid;border-width:var(--utrecht-color-sample-border-width, 0);box-sizing:border-box;display:inline-block;inline-size:var(--utrecht-color-sample-inline-size, 2em);-webkit-print-color-adjust:exact;print-color-adjust:exact}@media(forced-colors: active){.utrecht-color-sample{forced-color-adjust:none}}@media(forced-colors: active)and (prefers-color-scheme: dark){.utrecht-color-sample{--utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000)}}@media(forced-colors: active)and (prefers-color-scheme: light){.utrecht-color-sample{--utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff)}}","",{version:3,sources:["webpack://./../../components/color-sample/css/index.scss","webpack://./../../components/color-sample/css/_mixin.scss"],names:[],mappings:"AAQA,sBCDE,2EAAA,CACA,sDAAA,CACA,uGAAA,CACA,0DAAA,CACA,kBAAA,CACA,wDAAA,CACA,qBAAA,CACA,oBAAA,CACA,wDAAA,CACA,gCAAA,CACA,wBAAA,CAEA,8BACE,sBACE,wBAAA,CAAA,CAGJ,8DACE,sBACE,gGAAA,CAAA,CAGJ,+DACE,sBACE,iGAAA,CAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-color-sample {\n  @include utrecht-color-sample;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@mixin utrecht-color-sample {\n  background-color: var(--utrecht-color-sample-background-color, currentColor);\n  block-size: var(--utrecht-color-sample-block-size, 2em);\n  border-color: var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));\n  border-radius: var(--utrecht-color-sample-border-radius, 0);\n  border-style: solid;\n  border-width: var(--utrecht-color-sample-border-width, 0);\n  box-sizing: border-box;\n  display: inline-block;\n  inline-size: var(--utrecht-color-sample-inline-size, 2em);\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n\n  @media (forced-colors: active) {\n    & {\n      forced-color-adjust: none;\n    }\n  }\n  @media (forced-colors: active) and (prefers-color-scheme: dark) {\n    & {\n      --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000);\n    }\n  }\n  @media (forced-colors: active) and (prefers-color-scheme: light) {\n    & {\n      --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/map-marker/README.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\n# Map marker\n"},"../../components/icon/dist/index.json":module=>{module.exports=JSON.parse('[{"id":"utrecht-icon-afspraak-maken","src":"afspraak-maken.svg"},{"id":"utrecht-icon-afval-container","src":"afval-container.svg"},{"id":"utrecht-icon-afval-containerpas","src":"afval-containerpas.svg"},{"id":"utrecht-icon-afval-kalender","src":"afval-kalender.svg"},{"id":"utrecht-icon-afval-pmd","src":"afval-pmd.svg"},{"id":"utrecht-icon-afval-scheiden","src":"afval-scheiden.svg"},{"id":"utrecht-icon-afval","src":"afval.svg"},{"id":"utrecht-icon-afvalkalender","src":"afvalkalender.svg"},{"id":"utrecht-icon-alleen","src":"alleen.svg"},{"id":"utrecht-icon-arrow","src":"arrow.svg"},{"id":"utrecht-icon-auto","src":"auto.svg"},{"id":"utrecht-icon-begroting","src":"begroting.svg"},{"id":"utrecht-icon-bestemmingsplan","src":"bestemmingsplan.svg"},{"id":"utrecht-icon-betaaldatum","src":"betaaldatum.svg"},{"id":"utrecht-icon-bewijsstukken","src":"bewijsstukken.svg"},{"id":"utrecht-icon-bijstand","src":"bijstand.svg"},{"id":"utrecht-icon-blad","src":"blad.svg"},{"id":"utrecht-icon-bouwproject","src":"bouwproject.svg"},{"id":"utrecht-icon-brandgevaar","src":"brandgevaar.svg"},{"id":"utrecht-icon-brief-betalen","src":"brief-betalen.svg"},{"id":"utrecht-icon-checkmark","src":"checkmark.svg"},{"id":"utrecht-icon-college-b-w","src":"college-b-w.svg"},{"id":"utrecht-icon-container-bio","src":"container-bio.svg"},{"id":"utrecht-icon-container-glas","src":"container-glas.svg"},{"id":"utrecht-icon-container-groenafval","src":"container-groenafval.svg"},{"id":"utrecht-icon-container-met-zak","src":"container-met-zak.svg"},{"id":"utrecht-icon-container-papier","src":"container-papier.svg"},{"id":"utrecht-icon-container-pmd","src":"container-pmd.svg"},{"id":"utrecht-icon-container-restafval","src":"container-restafval.svg"},{"id":"utrecht-icon-container-textiel","src":"container-textiel.svg"},{"id":"utrecht-icon-cross","src":"cross.svg"},{"id":"utrecht-icon-dakloos","src":"dakloos.svg"},{"id":"utrecht-icon-dementie","src":"dementie.svg"},{"id":"utrecht-icon-documenten","src":"documenten.svg"},{"id":"utrecht-icon-duurzaam","src":"duurzaam.svg"},{"id":"utrecht-icon-eenzaamheid","src":"eenzaamheid.svg"},{"id":"utrecht-icon-eikenprocessie","src":"eikenprocessie.svg"},{"id":"utrecht-icon-elektrisch-rijden","src":"elektrisch-rijden.svg"},{"id":"utrecht-icon-energie-vergoeding","src":"energie-vergoeding.svg"},{"id":"utrecht-icon-energietransitie","src":"energietransitie.svg"},{"id":"utrecht-icon-error","src":"error.svg"},{"id":"utrecht-icon-evenementen","src":"evenementen.svg"},{"id":"utrecht-icon-facebook","src":"facebook.svg"},{"id":"utrecht-icon-fiets","src":"fiets.svg"},{"id":"utrecht-icon-filter","src":"filter.svg"},{"id":"utrecht-icon-geboorte","src":"geboorte.svg"},{"id":"utrecht-icon-gebruiker-centraal","src":"gebruiker-centraal.svg"},{"id":"utrecht-icon-gebruiker-ingelogd","src":"gebruiker-ingelogd.svg"},{"id":"utrecht-icon-gegevenswoordenboek","src":"gegevenswoordenboek.svg"},{"id":"utrecht-icon-geluid","src":"geluid.svg"},{"id":"utrecht-icon-gemeente-locatie","src":"gemeente-locatie.svg"},{"id":"utrecht-icon-gemeenteraad","src":"gemeenteraad.svg"},{"id":"utrecht-icon-gereedschap","src":"gereedschap.svg"},{"id":"utrecht-icon-gezicht","src":"gezicht.svg"},{"id":"utrecht-icon-gezin","src":"gezin.svg"},{"id":"utrecht-icon-glas-afval","src":"glas-afval.svg"},{"id":"utrecht-icon-glijbaan","src":"glijbaan.svg"},{"id":"utrecht-icon-grafiek","src":"grafiek.svg"},{"id":"utrecht-icon-grofvuil-ophalen","src":"grofvuil-ophalen.svg"},{"id":"utrecht-icon-grofvuil","src":"grofvuil.svg"},{"id":"utrecht-icon-herdenking","src":"herdenking.svg"},{"id":"utrecht-icon-hondenbelasting","src":"hondenbelasting.svg"},{"id":"utrecht-icon-horeca","src":"horeca.svg"},{"id":"utrecht-icon-horecavergunning","src":"horecavergunning.svg"},{"id":"utrecht-icon-huis-en-omgeving","src":"huis-en-omgeving.svg"},{"id":"utrecht-icon-huis","src":"huis.svg"},{"id":"utrecht-icon-huishoudelijk-geweld","src":"huishoudelijk-geweld.svg"},{"id":"utrecht-icon-hulp-huishouden","src":"hulp-huishouden.svg"},{"id":"utrecht-icon-hulp-vervoer","src":"hulp-vervoer.svg"},{"id":"utrecht-icon-hulp-zorg","src":"hulp-zorg.svg"},{"id":"utrecht-icon-hulpmiddelen-gezin","src":"hulpmiddelen-gezin.svg"},{"id":"utrecht-icon-hulpverlening","src":"hulpverlening.svg"},{"id":"utrecht-icon-idee","src":"idee.svg"},{"id":"utrecht-icon-informatie","src":"informatie.svg"},{"id":"utrecht-icon-information","src":"information.svg"},{"id":"utrecht-icon-innovatie","src":"innovatie.svg"},{"id":"utrecht-icon-inspraak-inwoners","src":"inspraak-inwoners.svg"},{"id":"utrecht-icon-instagram","src":"instagram.svg"},{"id":"utrecht-icon-kalender","src":"kalender.svg"},{"id":"utrecht-icon-kennis","src":"kennis.svg"},{"id":"utrecht-icon-kerstbomen","src":"kerstbomen.svg"},{"id":"utrecht-icon-klachten","src":"klachten.svg"},{"id":"utrecht-icon-kroon","src":"kroon.svg"},{"id":"utrecht-icon-laadpaal","src":"laadpaal.svg"},{"id":"utrecht-icon-lantaarnpaal-oud","src":"lantaarnpaal-oud.svg"},{"id":"utrecht-icon-lantaarnpaal","src":"lantaarnpaal.svg"},{"id":"utrecht-icon-leren","src":"leren.svg"},{"id":"utrecht-icon-let-op","src":"let-op.svg"},{"id":"utrecht-icon-linkedin","src":"linkedin.svg"},{"id":"utrecht-icon-list","src":"list.svg"},{"id":"utrecht-icon-loupe","src":"loupe.svg"},{"id":"utrecht-icon-markt","src":"markt.svg"},{"id":"utrecht-icon-melding-boom","src":"melding-boom.svg"},{"id":"utrecht-icon-melding-klacht","src":"melding-klacht.svg"},{"id":"utrecht-icon-melding-openbareruimte","src":"melding-openbareruimte.svg"},{"id":"utrecht-icon-melding-verlichting","src":"melding-verlichting.svg"},{"id":"utrecht-icon-melding","src":"melding.svg"},{"id":"utrecht-icon-menselijk","src":"menselijk.svg"},{"id":"utrecht-icon-meterkast","src":"meterkast.svg"},{"id":"utrecht-icon-milieu-ontheffing","src":"milieu-ontheffing.svg"},{"id":"utrecht-icon-milieu-zone","src":"milieu-zone.svg"},{"id":"utrecht-icon-mobiliteit","src":"mobiliteit.svg"},{"id":"utrecht-icon-natuur","src":"natuur.svg"},{"id":"utrecht-icon-nieuw-huis","src":"nieuw-huis.svg"},{"id":"utrecht-icon-nummerbord","src":"nummerbord.svg"},{"id":"utrecht-icon-om-het-huis","src":"om-het-huis.svg"},{"id":"utrecht-icon-omgeving","src":"omgeving.svg"},{"id":"utrecht-icon-omgevingsvisie","src":"omgevingsvisie.svg"},{"id":"utrecht-icon-omgevingswet","src":"omgevingswet.svg"},{"id":"utrecht-icon-onderhoud","src":"onderhoud.svg"},{"id":"utrecht-icon-ondernemen","src":"ondernemen.svg"},{"id":"utrecht-icon-openingstijden","src":"openingstijden.svg"},{"id":"utrecht-icon-over-de-stad","src":"over-de-stad.svg"},{"id":"utrecht-icon-overlijden","src":"overlijden.svg"},{"id":"utrecht-icon-panden","src":"panden.svg"},{"id":"utrecht-icon-park","src":"park.svg"},{"id":"utrecht-icon-parkeerkaart","src":"parkeerkaart.svg"},{"id":"utrecht-icon-parkeervergunning","src":"parkeervergunning.svg"},{"id":"utrecht-icon-parken","src":"parken.svg"},{"id":"utrecht-icon-parkeren-bedrijven","src":"parkeren-bedrijven.svg"},{"id":"utrecht-icon-parkeren-betaalautomaat","src":"parkeren-betaalautomaat.svg"},{"id":"utrecht-icon-parkeren-betalen","src":"parkeren-betalen.svg"},{"id":"utrecht-icon-parkeren","src":"parkeren.svg"},{"id":"utrecht-icon-participatie-campagne","src":"participatie-campagne.svg"},{"id":"utrecht-icon-participatie-like","src":"participatie-like.svg"},{"id":"utrecht-icon-participatie-pitch","src":"participatie-pitch.svg"},{"id":"utrecht-icon-paspoort","src":"paspoort.svg"},{"id":"utrecht-icon-presentatie","src":"presentatie.svg"},{"id":"utrecht-icon-prijskaartje","src":"prijskaartje.svg"},{"id":"utrecht-icon-rijbewijs","src":"rijbewijs.svg"},{"id":"utrecht-icon-rioolheffing","src":"rioolheffing.svg"},{"id":"utrecht-icon-rolstoel","src":"rolstoel.svg"},{"id":"utrecht-icon-schild-gemeente-utrecht","src":"schild-gemeente-utrecht.svg"},{"id":"utrecht-icon-shoppen","src":"shoppen.svg"},{"id":"utrecht-icon-sinterklaas","src":"sinterklaas.svg"},{"id":"utrecht-icon-slechtziende-hoordende","src":"slechtziende-hoordende.svg"},{"id":"utrecht-icon-sport-en-cultuur","src":"sport-en-cultuur.svg"},{"id":"utrecht-icon-sport-voetbal","src":"sport-voetbal.svg"},{"id":"utrecht-icon-sport","src":"sport.svg"},{"id":"utrecht-icon-stookverbod","src":"stookverbod.svg"},{"id":"utrecht-icon-strand","src":"strand.svg"},{"id":"utrecht-icon-strooien","src":"strooien.svg"},{"id":"utrecht-icon-subsidie-gezin","src":"subsidie-gezin.svg"},{"id":"utrecht-icon-subsidie","src":"subsidie.svg"},{"id":"utrecht-icon-t-shirt","src":"t-shirt.svg"},{"id":"utrecht-icon-thuiswerken","src":"thuiswerken.svg"},{"id":"utrecht-icon-toeslag","src":"toeslag.svg"},{"id":"utrecht-icon-trein","src":"trein.svg"},{"id":"utrecht-icon-trouwen","src":"trouwen.svg"},{"id":"utrecht-icon-twitter","src":"twitter.svg"},{"id":"utrecht-icon-uw-wijk","src":"uw-wijk.svg"},{"id":"utrecht-icon-vaccinatie","src":"vaccinatie.svg"},{"id":"utrecht-icon-veilige-wijk","src":"veilige-wijk.svg"},{"id":"utrecht-icon-vergaderen","src":"vergaderen.svg"},{"id":"utrecht-icon-vergaderendigitaal","src":"vergaderendigitaal.svg"},{"id":"utrecht-icon-vergoeding","src":"vergoeding.svg"},{"id":"utrecht-icon-verhuizen","src":"verhuizen.svg"},{"id":"utrecht-icon-verkeerslicht","src":"verkeerslicht.svg"},{"id":"utrecht-icon-verkiezingen","src":"verkiezingen.svg"},{"id":"utrecht-icon-verslaving","src":"verslaving.svg"},{"id":"utrecht-icon-vervoersvoorziening","src":"vervoersvoorziening.svg"},{"id":"utrecht-icon-virus","src":"virus.svg"},{"id":"utrecht-icon-vluchtelingen","src":"vluchtelingen.svg"},{"id":"utrecht-icon-voorzieningen-vervoer","src":"voorzieningen-vervoer.svg"},{"id":"utrecht-icon-vrijwilligerswerk","src":"vrijwilligerswerk.svg"},{"id":"utrecht-icon-vuilnisbak","src":"vuilnisbak.svg"},{"id":"utrecht-icon-vuilniszak","src":"vuilniszak.svg"},{"id":"utrecht-icon-vuurwerk","src":"vuurwerk.svg"},{"id":"utrecht-icon-wandelstok","src":"wandelstok.svg"},{"id":"utrecht-icon-warm","src":"warm.svg"},{"id":"utrecht-icon-warning","src":"warning.svg"},{"id":"utrecht-icon-werken","src":"werken.svg"},{"id":"utrecht-icon-werkzaamheden","src":"werkzaamheden.svg"},{"id":"utrecht-icon-whatsapp","src":"whatsapp.svg"},{"id":"utrecht-icon-wonen-kosten","src":"wonen-kosten.svg"},{"id":"utrecht-icon-woning-zoeken","src":"woning-zoeken.svg"},{"id":"utrecht-icon-x","src":"x.svg"},{"id":"utrecht-icon-youtube","src":"youtube.svg"},{"id":"utrecht-icon-zelfstandig-wonen","src":"zelfstandig-wonen.svg"},{"id":"utrecht-icon-zoomin","src":"zoomin.svg"},{"id":"utrecht-icon-zoomout","src":"zoomout.svg"},{"id":"utrecht-icon-zorg-huis","src":"zorg-huis.svg"},{"id":"utrecht-icon-zweefpaal","src":"zweefpaal.svg"},{"id":"utrecht-icon-zwemmen","src":"zwemmen.svg"}]')},"../../components/map-marker/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"map-marker":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"box-shadow-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}}')}}]);