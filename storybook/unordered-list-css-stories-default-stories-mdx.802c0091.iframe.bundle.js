/*! For license information please see unordered-list-css-stories-default-stories-mdx.802c0091.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[21585],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/unordered-list/css/stories/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/unordered-list/css/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../components/unordered-list/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultStory=_story_template__WEBPACK_IMPORTED_MODULE_1__.QI.bind({});defaultStory.storyName="Default",defaultStory.args=_story_template__WEBPACK_IMPORTED_MODULE_1__.sS,defaultStory.parameters={storySource:{source:"UnorderedList.bind({})"}};const componentMeta={title:"CSS Component/Unordered List",id:"css-unordered-list",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.QI,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{id:"css-unordered-list",title:"CSS Component/Unordered List",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.QI,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Default",args:_story_template__WEBPACK_IMPORTED_MODULE_1__.sS,children:_story_template__WEBPACK_IMPORTED_MODULE_1__.QI.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.$4,{story:"Default"})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/unordered-list/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,QI:()=>UnorderedList,_O:()=>defaultArgs,sS:()=>exampleArgs});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={distanced:{description:"Distance the element from adjacent content",control:"boolean"},htmlContent:{description:"Content is HTML without class names",control:"boolean"},items:{description:"List items",control:"array"}},defaultArgs={distanced:!1,htmlContent:!1,items:[]},exampleArgs={items:[{innerHTML:"Lorem"},{innerHTML:"Ipsum"},{innerHTML:"Dolor"}]},HTMLUnorderedListItem=({children,innerHTML,items})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li",{children:[children,innerHTML&&(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML),items&&HTMLUnorderedList({items})]});HTMLUnorderedListItem.displayName="HTMLUnorderedListItem";const HTMLUnorderedList=({children,items=defaultArgs.items})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul",{children:[children,items&&items.map((({children:subChildren,items:subItems,innerHTML},index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HTMLUnorderedListItem,{innerHTML,items:subItems,children:subChildren},index)))]});HTMLUnorderedList.displayName="HTMLUnorderedList";const UnorderedListItem=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:"utrecht-unordered-list__item",children});UnorderedListItem.displayName="UnorderedListItem";const UnorderedList=({children,center=defaultArgs.center,distanced=defaultArgs.distanced,items=defaultArgs.items,htmlContent=defaultArgs.htmlContent,nested=!1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("utrecht-unordered-list",{"utrecht-unordered-list--center":center,"utrecht-unordered-list--distanced":distanced,"utrecht-unordered-list--html-content":htmlContent,"utrecht-unordered-list--nested":nested}),role:"list",children:[children,htmlContent?items.map((({children:subChildren,items:subItems,innerHTML},index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HTMLUnorderedListItem,{items:subItems,innerHTML,children:subChildren},index))):items.map((({children:subChildren,items:subItems,innerHTML},index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(UnorderedListItem,{children:[subChildren,innerHTML&&(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML),subItems&&UnorderedList({nested:!0,items:subItems})]},index)))]});UnorderedList.displayName="UnorderedList"},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/unordered-list/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.utrecht-unordered-list,.utrecht-unordered-list--html-content ul{box-sizing:border-box;font-family:var(--utrecht-document-font-family, inherit);font-size:var(--utrecht-unordered-list-font-size, var(--utrecht-document-font-size, inherit));line-height:var(--utrecht-unordered-list-line-height, var(--utrecht-document-line-height, inherit));margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-unordered-list-margin-block-end, var(--utrecht-paragraph-margin-block-end, 0)));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-unordered-list-margin-block-start, var(--utrecht-paragraph-margin-block-start, 0)));padding-inline-start:var(--utrecht-unordered-list-padding-inline-start, 2ch);text-align:start}.utrecht-unordered-list--center{inline-size:max-content;margin-inline-end:auto;margin-inline-start:auto;max-inline-size:100%}.utrecht-unordered-list--distanced{--utrecht-space-around: 1}.utrecht-unordered-list--nested,.utrecht-unordered-list--html-content ul{margin-block-end:0;margin-inline-start:2ch}.utrecht-unordered-list--html-content>li,.utrecht-unordered-list--html-content ul>li,.utrecht-unordered-list__item{margin-block-end:var(--utrecht-unordered-list-item-margin-block-end);margin-block-start:var(--utrecht-unordered-list-item-margin-block-start);padding-inline-start:var(--utrecht-unordered-list-item-padding-inline-start, 1ch)}.utrecht-unordered-list--html-content>li::marker,.utrecht-unordered-list--html-content ul>li::marker,.utrecht-unordered-list__item::marker,.utrecht-unordered-list__marker{color:var(--utrecht-unordered-list-marker-color);content:"●"}',"",{version:3,sources:["webpack://./../../components/unordered-list/css/index.scss","webpack://./../../components/unordered-list/css/_mixin.scss"],names:[],mappings:"AAAA,iEAQA,qBAAA,CAAA,wDCCE,CAAA,6FACA,CAAA,mGACA,CAAA,kJACA,CAAA,wJAIA,CAAA,4EAIA,CAAA,gBACA,CAAA,gCDRF,uBCYE,CAAA,sBACA,CAAA,wBACA,CAAA,oBACA,CAAA,mCDXF,yBCeE,CAAA,yEDXF,kBCeE,CAAA,uBACA,CAAA,mHDXF,oECeE,CAAA,wEACA,CAAA,iFACA,CAAA,2KDXF,gDCeE,CAAA,WACA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n * Copyright (c) 2021 Gemeente Utrecht\n */\n\n@import "./mixin";\n\n.utrecht-unordered-list,\n.utrecht-unordered-list--html-content ul {\n  @include utrecht-unordered-list;\n}\n\n.utrecht-unordered-list--center {\n  @include utrecht-unordered-list--center;\n}\n\n.utrecht-unordered-list--distanced {\n  @include utrecht-unordered-list--distanced;\n}\n\n.utrecht-unordered-list--nested,\n.utrecht-unordered-list--html-content ul {\n  @include utrecht-unordered-list--nested;\n}\n\n.utrecht-unordered-list--html-content > li,\n.utrecht-unordered-list--html-content ul > li,\n.utrecht-unordered-list__item {\n  @include utrecht-unordered-list__item;\n}\n\n.utrecht-unordered-list--html-content > li::marker,\n.utrecht-unordered-list--html-content ul > li::marker,\n.utrecht-unordered-list__item::marker,\n.utrecht-unordered-list__marker {\n  @include utrecht-unordered-list__marker;\n}\n','/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Robbert Broersma\n * Copyright (c) 2021 Gemeente Utrecht\n */\n\n@mixin utrecht-unordered-list {\n  /* Configure `box-sizing` and `text-align` for `--center` */\n  box-sizing: border-box;\n  font-family: var(--utrecht-document-font-family, inherit);\n  font-size: var(--utrecht-unordered-list-font-size, var(--utrecht-document-font-size, inherit));\n  line-height: var(--utrecht-unordered-list-line-height, var(--utrecht-document-line-height, inherit));\n  margin-block-end: calc(\n    var(--utrecht-space-around, 0) *\n      var(--utrecht-unordered-list-margin-block-end, var(--utrecht-paragraph-margin-block-end, 0))\n  );\n  margin-block-start: calc(\n    var(--utrecht-space-around, 0) *\n      var(--utrecht-unordered-list-margin-block-start, var(--utrecht-paragraph-margin-block-start, 0))\n  );\n  padding-inline-start: var(--utrecht-unordered-list-padding-inline-start, 2ch);\n  text-align: start;\n}\n\n@mixin utrecht-unordered-list--center {\n  inline-size: max-content;\n  margin-inline-end: auto;\n  margin-inline-start: auto;\n  max-inline-size: 100%;\n}\n\n@mixin utrecht-unordered-list--distanced {\n  --utrecht-space-around: 1;\n}\n\n@mixin utrecht-unordered-list--nested {\n  margin-block-end: 0;\n  margin-inline-start: 2ch;\n}\n\n@mixin utrecht-unordered-list__item {\n  margin-block-end: var(--utrecht-unordered-list-item-margin-block-end);\n  margin-block-start: var(--utrecht-unordered-list-item-margin-block-start);\n  padding-inline-start: var(--utrecht-unordered-list-item-padding-inline-start, 1ch);\n}\n\n@mixin utrecht-unordered-list__marker {\n  color: var(--utrecht-unordered-list-marker-color);\n  content: "●";\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/unordered-list/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/unordered-list/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);