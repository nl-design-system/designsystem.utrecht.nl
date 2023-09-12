/*! For license information please see search-bar-css-stories-default-stories-mdx.e0e90911.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[97207],{"../../components/search-bar/css/stories/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>default_stories,defaultStory:()=>defaultStory,dropdownIsOpen:()=>dropdownIsOpen,isActive:()=>isActive,isSelected:()=>isSelected});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const SearchBarDropdown=({isSelected,isActive})=>(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("utrecht-search-bar__dropdown"),children:[(0,jsx_runtime.jsxs)("section",{className:(0,clsx_m.Z)("utrecht-search-bar__section"),children:[(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)("utrecht-search-bar__section-title"),children:"Section #1"}),(0,jsx_runtime.jsxs)("ul",{className:(0,clsx_m.Z)("utrecht-unordered-list"),role:"listbox",children:[(0,jsx_runtime.jsx)("li",{role:"option",className:(0,clsx_m.Z)("utrecht-search-bar__list-item","utrecht-unordered-list__item"),id:"item-1-section-1","aria-selected":!1,children:"Option #1"}),(0,jsx_runtime.jsx)("li",{role:"option",className:(0,clsx_m.Z)("utrecht-search-bar__list-item","utrecht-unordered-list__item"),id:"item-2-section-1","aria-selected":!1,children:"Option #2"}),(0,jsx_runtime.jsx)("li",{role:"option",className:(0,clsx_m.Z)("utrecht-search-bar__list-item","utrecht-unordered-list__item"),id:"item-3-section-1","aria-selected":!1,children:"Option #3"})]})]}),(0,jsx_runtime.jsxs)("section",{className:(0,clsx_m.Z)("utrecht-search-bar__section"),children:[(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)("utrecht-search-bar__section-title"),children:"Section #2"}),(0,jsx_runtime.jsxs)("ul",{className:(0,clsx_m.Z)("utrecht-unordered-list"),role:"listbox",children:[(0,jsx_runtime.jsx)("li",{role:"option",className:(0,clsx_m.Z)("utrecht-search-bar__list-item","utrecht-unordered-list__item",{"utrecht-search-bar__list-item--is-active":isActive,"utrecht-search-bar__list-item--is-selected":isSelected}),id:"item-1-section-2","aria-selected":isSelected,children:"Option #1"}),(0,jsx_runtime.jsx)("li",{role:"option",className:(0,clsx_m.Z)("utrecht-search-bar__list-item","utrecht-unordered-list__item"),id:"item-2-section-2","aria-selected":!1,children:"Option #2"}),(0,jsx_runtime.jsx)("li",{role:"option",className:(0,clsx_m.Z)("utrecht-search-bar__list-item","utrecht-unordered-list__item"),id:"item-3-section-2","aria-selected":!1,children:"Option #3"})]})]})]});SearchBarDropdown.displayName="SearchBarDropdown";const argTypes={buttonLabel:{description:"Label for the searchbar button",type:"text"},formLabel:{description:"Label for the searchbar",type:"text"},inputLabel:{description:"Label for the search input",type:"text"},value:{description:"Current search term",type:"text"},isOpen:{type:"boolean"},isActive:{type:"boolean"},isSelected:{type:"boolean"}},defaultArgs={buttonLabel:"",formLabel:"",inputLabel:"",value:"",isOpen:!1,isActive:!1,isSelected:!1},exampleArgs={buttonLabel:"Zoeken",formLabel:"zoeken in Utrecht.nl",inputLabel:"zoektermen",value:"",isOpen:!1,isActive:!1,isSelected:!1},SearchBar=({buttonLabel=defaultArgs.buttonLabel,formLabel=defaultArgs.formLabel,inputLabel=defaultArgs.inputLabel,value=defaultArgs.value,isOpen=defaultArgs.isOpen,isActive=defaultArgs.isActive,isSelected=defaultArgs.isSelected})=>(0,jsx_runtime.jsxs)("form",{role:"search","aria-label":formLabel,"aria-haspopup":"listbox","aria-expanded":isOpen,"aria-owns":isOpen?"utrecht-search-bar-1-menu":void 0,children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("utrecht-search-bar"),children:[(0,jsx_runtime.jsx)("input",{type:"search",className:(0,clsx_m.Z)("utrecht-search-bar__input","utrecht-textbox","utrecht-textbox--html-input"),name:"q",autoComplete:"off",spellCheck:"false","aria-controls":isOpen?"utrecht-search-bar-1-menu":void 0,"aria-activedescendant":isOpen?"item-1-section-2":void 0,value,"aria-label":inputLabel,placeholder:"Waar bent u naar op zoek?","aria-autocomplete":"list"}),(0,jsx_runtime.jsx)("button",{type:"submit",value:"Zoeken",className:(0,clsx_m.Z)("utrecht-search-bar__button","utrecht-button","utrecht-button--primary-action"),children:buttonLabel})]}),isOpen&&(0,jsx_runtime.jsx)(SearchBarDropdown,{isActive,isSelected})]});SearchBar.displayName="SearchBar";__webpack_require__("../../components/textbox/css/index.scss"),__webpack_require__("../../components/button/css/index.scss");var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),search_bar_css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/search-bar/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(search_bar_css.Z,options);search_bar_css.Z&&search_bar_css.Z.locals&&search_bar_css.Z.locals;function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-search-bar",title:"CSS Component/Search Bar",component:SearchBar,argTypes,args:defaultArgs,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"search-bar",children:"Search Bar"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{...exampleArgs,isOpen:!1},children:SearchBar.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"search-bar-dropdown-is-open",children:"Search Bar dropdown is open"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Dropdown is open",args:{...exampleArgs,isOpen:!0},children:SearchBar.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"is-selected",children:"is Selected"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Is selected",args:{...exampleArgs,isOpen:!0,isSelected:!0},children:SearchBar.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"is-active",children:"is Active"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Is Active",args:{...exampleArgs,isOpen:!0,isActive:!0},children:SearchBar.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"Default"})]})}const defaultStory=SearchBar.bind({});defaultStory.storyName="Default",defaultStory.args={...exampleArgs,isOpen:!1},defaultStory.parameters={storySource:{source:"SearchBar.bind({})"}};const dropdownIsOpen=SearchBar.bind({});dropdownIsOpen.storyName="Dropdown is open",dropdownIsOpen.args={...exampleArgs,isOpen:!0},dropdownIsOpen.parameters={storySource:{source:"SearchBar.bind({})"}};const isSelected=SearchBar.bind({});isSelected.storyName="Is selected",isSelected.args={...exampleArgs,isOpen:!0,isSelected:!0},isSelected.parameters={storySource:{source:"SearchBar.bind({})"}};const isActive=SearchBar.bind({});isActive.storyName="Is Active",isActive.args={...exampleArgs,isOpen:!0,isActive:!0},isActive.parameters={storySource:{source:"SearchBar.bind({})"}};const componentMeta={title:"CSS Component/Search Bar",id:"css-search-bar",parameters:{status:{type:"WORK IN PROGRESS"}},component:SearchBar,args:defaultArgs,argTypes,tags:["stories-mdx"],includeStories:["defaultStory","dropdownIsOpen","isSelected","isActive"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const default_stories=componentMeta},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.2_sass@1.66.1_webpack@5.88.2/node_modules/sass-loader/dist/cjs.js!../../components/search-bar/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-search-bar{--utrecht-button-border-color: var(--utrecht-search-bar-button-border-color);--utrecht-button-hover-scale: var(--utrecht-search-bar-hover-transform);--utrecht-button-font-size: var(--utrecht-search-bar-button-font-size);--utrecht-button-font-weight: var(--utrecht-search-bar-button-font-weight);--utrecht-button-primary-action-background-color: var(--utrecht-search-bar-button-background-color);--utrecht-button-primary-action-color: var(--utrecht-search-bar-button-color);--utrecht-button-primary-action-hover-background-color: var(--utrecht-search-bar-button-hover-background-color);--utrecht-textbox-border-color: var(--utrecht-search-bar-input-border-color);--utrecht-textbox-padding-inline-start: var(--utrecht-search-bar-input-padding-inline-start);--utrecht-textbox-border-bottom-width: var(--utrecht-search-bar-input-border-bottom-width);--utrecht-textbox-max-inline-size: var(--utrecht-search-bar-input-max-inline-size);display:flex}.utrecht-search-bar__input{background-image:var(--utrecht-search-bar-input-background-image, none);background-position-x:var(--utrecht-search-bar-input-background-position-x);background-position-y:var(--utrecht-search-bar-input-background-position-y);background-repeat:no-repeat;background-size:var(--utrecht-search-bar-input-background-size)}.utrecht-search-bar__dropdown{border-color:var(--utrecht-search-bar-dropdown-border-color);border-style:solid;border-width:var(--utrecht-search-bar-dropdown-border-width);inline-size:var(--utrecht-search-bar-dropdown-inline-size, var(--utrecht-form-input-max-inline-size));max-block-size:var(--utrecht-search-bar-dropdown-max-block-size);overflow:auto;padding-block-end:var(--utrecht-search-bar-dropdown-padding-block-end);padding-block-start:var(--utrecht-search-bar-dropdown-padding-block-start);padding-inline-end:var(--utrecht-search-bar-dropdown-padding-inline-end);padding-inline-start:var(--utrecht-search-bar-dropdown-padding-inline-start);position:absolute;z-index:var(--utrecht-search-bar-dropdown-z-index)}.utrecht-search-bar__section-title{color:var(--utrecht-search-bar-section-title-color);font-size:var(--utrecht-search-bar-section-title-font-size);font-weight:var(--utrecht-search-bar-section-title-font-weight);line-height:var(--utrecht-search-bar-section-title-line-height);margin-inline-start:var(--utrecht-search-bar-section-title-margin-inline-start)}.utrecht-search-bar__list-item{padding-block-end:var(--utrecht-search-bar-list-item-padding-block-end);padding-block-start:var(--utrecht-search-bar-list-item-padding-block-start);padding-inline-end:var(--utrecht-search-bar-list-item-padding-inline-end);padding-inline-start:var(--utrecht-search-bar-list-item-padding-inline-start)}.utrecht-search-bar__list-item--is-active{background-color:var(--utrecht-search-bar-list-item-is-active-background-color);color:var(--utrecht-search-bar-list-item-is-active-color);font-weight:var(--utrecht-search-bar-list-item-is-active-font-weight)}.utrecht-search-bar__list-item--is-selected{background-color:var(--utrecht-search-bar-list-item-is-selected-background-color);color:var(--utrecht-search-bar-list-item-is-selected-color)}","",{version:3,sources:["webpack://./../../components/search-bar/css/index.scss","webpack://./../../components/search-bar/css/_mixin.scss"],names:[],mappings:"AAOA,oBCCE,4EAAA,CACA,uEAAA,CACA,sEAAA,CACA,0EAAA,CACA,mGAAA,CACA,6EAAA,CACA,+GAAA,CACA,4EAAA,CACA,4FAAA,CACA,0FAAA,CACA,kFAAA,CAEA,YAAA,CDTF,2BCaE,uEAAA,CACA,2EAAA,CACA,2EAAA,CACA,2BAAA,CACA,+DAAA,CDbF,8BCiBE,4DAAA,CACA,kBAAA,CACA,4DAAA,CACA,qGAAA,CACA,gEAAA,CACA,aAAA,CACA,sEAAA,CACA,0EAAA,CACA,wEAAA,CACA,4EAAA,CACA,iBAAA,CACA,kDAAA,CDxBF,mCCgCE,mDAAA,CACA,2DAAA,CACA,+DAAA,CACA,+DAAA,CACA,+EAAA,CDhCF,+BCoCE,uEAAA,CACA,2EAAA,CACA,yEAAA,CACA,6EAAA,CDnCF,0CCuCE,+EAAA,CACA,yDAAA,CACA,qEAAA,CDrCF,4CCyCE,iFAAA,CACA,2DAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n */\n\n@import "./mixin";\n\n.utrecht-search-bar {\n  @include utrecht-search-bar;\n}\n\n.utrecht-search-bar__input {\n  @include utrecht-search-bar__input;\n}\n\n.utrecht-search-bar__dropdown {\n  @include utrecht-search-bar__dropdown;\n}\n\n.utrecht-search-bar__section-title {\n  @include utrecht-search-bar__section-title;\n}\n\n.utrecht-search-bar__list-item {\n  @include utrecht-search-bar__list-item;\n}\n\n.utrecht-search-bar__list-item--is-active {\n  @include utrecht-search-bar__list-item--is-active;\n}\n\n.utrecht-search-bar__list-item--is-selected {\n  @include utrecht-search-bar__list-item--is-selected;\n}\n','/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n */\n\n@import "../../common/focus/mixin";\n\n@mixin utrecht-search-bar {\n  --utrecht-button-border-color: var(--utrecht-search-bar-button-border-color);\n  --utrecht-button-hover-scale: var(--utrecht-search-bar-hover-transform);\n  --utrecht-button-font-size: var(--utrecht-search-bar-button-font-size);\n  --utrecht-button-font-weight: var(--utrecht-search-bar-button-font-weight);\n  --utrecht-button-primary-action-background-color: var(--utrecht-search-bar-button-background-color);\n  --utrecht-button-primary-action-color: var(--utrecht-search-bar-button-color);\n  --utrecht-button-primary-action-hover-background-color: var(--utrecht-search-bar-button-hover-background-color);\n  --utrecht-textbox-border-color: var(--utrecht-search-bar-input-border-color);\n  --utrecht-textbox-padding-inline-start: var(--utrecht-search-bar-input-padding-inline-start);\n  --utrecht-textbox-border-bottom-width: var(--utrecht-search-bar-input-border-bottom-width);\n  --utrecht-textbox-max-inline-size: var(--utrecht-search-bar-input-max-inline-size);\n\n  display: flex;\n}\n\n@mixin utrecht-search-bar__input {\n  background-image: var(--utrecht-search-bar-input-background-image, none);\n  background-position-x: var(--utrecht-search-bar-input-background-position-x);\n  background-position-y: var(--utrecht-search-bar-input-background-position-y);\n  background-repeat: no-repeat;\n  background-size: var(--utrecht-search-bar-input-background-size);\n}\n\n@mixin utrecht-search-bar__dropdown {\n  border-color: var(--utrecht-search-bar-dropdown-border-color);\n  border-style: solid;\n  border-width: var(--utrecht-search-bar-dropdown-border-width);\n  inline-size: var(--utrecht-search-bar-dropdown-inline-size, var(--utrecht-form-input-max-inline-size));\n  max-block-size: var(--utrecht-search-bar-dropdown-max-block-size);\n  overflow: auto;\n  padding-block-end: var(--utrecht-search-bar-dropdown-padding-block-end);\n  padding-block-start: var(--utrecht-search-bar-dropdown-padding-block-start);\n  padding-inline-end: var(--utrecht-search-bar-dropdown-padding-inline-end);\n  padding-inline-start: var(--utrecht-search-bar-dropdown-padding-inline-start);\n  position: absolute;\n  z-index: var(--utrecht-search-bar-dropdown-z-index);\n}\n\n@mixin utrecht-search-bar__section {\n  margin-block-end: var(--utrecht-search-bar-section-margin-block-end);\n}\n\n@mixin utrecht-search-bar__section-title {\n  color: var(--utrecht-search-bar-section-title-color);\n  font-size: var(--utrecht-search-bar-section-title-font-size);\n  font-weight: var(--utrecht-search-bar-section-title-font-weight);\n  line-height: var(--utrecht-search-bar-section-title-line-height);\n  margin-inline-start: var(--utrecht-search-bar-section-title-margin-inline-start);\n}\n\n@mixin utrecht-search-bar__list-item {\n  padding-block-end: var(--utrecht-search-bar-list-item-padding-block-end);\n  padding-block-start: var(--utrecht-search-bar-list-item-padding-block-start);\n  padding-inline-end: var(--utrecht-search-bar-list-item-padding-inline-end);\n  padding-inline-start: var(--utrecht-search-bar-list-item-padding-inline-start);\n}\n\n@mixin utrecht-search-bar__list-item--is-active {\n  background-color: var(--utrecht-search-bar-list-item-is-active-background-color);\n  color: var(--utrecht-search-bar-list-item-is-active-color);\n  font-weight: var(--utrecht-search-bar-list-item-is-active-font-weight);\n}\n\n@mixin utrecht-search-bar__list-item--is-selected {\n  background-color: var(--utrecht-search-bar-list-item-is-selected-background-color);\n  color: var(--utrecht-search-bar-list-item-is-selected-color);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);