/*! For license information please see blockquote-css-stories-language-stories-mdx.aa81c7e1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[66817],{"../../components/blockquote/css/stories/language.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,language:()=>language});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.3.2_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_paragraph_css_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/paragraph/css/story-template.jsx"),_story_template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/blockquote/css/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({div:"div",h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{id:"css-blockquote--lang",title:"CSS Component/Blockquote/Language",component:_story_template__WEBPACK_IMPORTED_MODULE_2__.V6,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.div,{lang:"nl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_paragraph_css_story_template__WEBPACK_IMPORTED_MODULE_1__.nv,{children:"Zoals René Descartes ooit schreef:"}),Story()]})],parameters:{status:{type:"WORK IN PROGRESS"},chromatic:{disableSnapshot:!0}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"blockquote-in-another-language",children:"Blockquote in another language"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Language",args:{lang:"fr",textContent:"Je pense, donc je suis"},children:_story_template__WEBPACK_IMPORTED_MODULE_2__.V6.bind({})})})]})}const language=_story_template__WEBPACK_IMPORTED_MODULE_2__.V6.bind({});language.storyName="Language",language.args={lang:"fr",textContent:"Je pense, donc je suis"},language.parameters={storySource:{source:"Blockquote.bind({})"}};const componentMeta={title:"CSS Component/Blockquote/Language",id:"css-blockquote--lang",parameters:{status:{type:"WORK IN PROGRESS"},chromatic:{disableSnapshot:!0}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{lang:"nl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_paragraph_css_story_template__WEBPACK_IMPORTED_MODULE_1__.nv,{children:"Zoals René Descartes ooit schreef:"}),Story()]})],component:_story_template__WEBPACK_IMPORTED_MODULE_2__.V6,tags:["stories-mdx"],includeStories:["language"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/blockquote/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,V6:()=>Blockquote,_O:()=>defaultArgs,sS:()=>exampleArgs});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),_paragraph_css_story_template__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/paragraph/css/story-template.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={textContent:{description:"Content of the quote",control:"text"},attribution:{description:"Attribution of the quote",control:"text"},distanced:{description:"Distance the element from adjacent content",control:"boolean"},lang:{description:"Language of the quoted text",control:"text"}},defaultArgs={textContent:"",attribution:"",distanced:!1,lang:""},exampleArgs={textContent:"The Quick Brown Fox Jumps Over The Lazy Dog"},Blockquote=({textContent=defaultArgs.textContent,attribution=defaultArgs.attribution,distanced=defaultArgs.distanced,lang=defaultArgs.lang})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("blockquote",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("utrecht-blockquote",{"utrecht-blockquote--distanced":distanced}),lang:lang||void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"utrecht-blockquote__content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_paragraph_css_story_template__WEBPACK_IMPORTED_MODULE_1__.nv,{children:textContent}),attribution&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"utrecht-blockquote__attribution",children:attribution})]})});Blockquote.displayName="Blockquote"},"../../components/paragraph/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nv:()=>Paragraph});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultArgs_distanced=!1,defaultArgs_lead=!1,defaultArgs_innerHTML="",defaultArgs_small=!1,Paragraph=({children,distanced=defaultArgs_distanced,innerHTML=defaultArgs_innerHTML,lead=defaultArgs_lead,small=defaultArgs_small,...restProps})=>{const content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[children,(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(innerHTML)]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("utrecht-paragraph",{"utrecht-paragraph--distanced":distanced,"utrecht-paragraph--lead":lead,"utrecht-paragraph--small":small}),...restProps,children:lead?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b",{className:"utrecht-paragraph__b",children:content}):small?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small",{className:"utrecht-paragraph__small",children:content}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:content})})};Paragraph.displayName="Paragraph"}}]);