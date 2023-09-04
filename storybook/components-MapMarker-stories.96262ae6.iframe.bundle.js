/*! For license information please see components-MapMarker-stories.96262ae6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[87474],{"./stories/components/MapMarker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MapMarker_stories});var READMEraw=__webpack_require__("../../components/map-marker/README.md?raw"),tokens=__webpack_require__("../../components/map-marker/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),icon_dist=__webpack_require__("../../components/icon/dist/index.json"),jsx_runtime=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const MapMarker=({children})=>(0,jsx_runtime.jsx)("div",{className:"utrecht-map-marker",children});MapMarker.displayName="MapMarker";try{MapMarker.displayName="MapMarker",MapMarker.__docgenInfo={description:"",displayName:"MapMarker",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/MapMarker.tsx#MapMarker"]={docgenInfo:MapMarker.__docgenInfo,name:"MapMarker",path:"stories/components/MapMarker.tsx#MapMarker"})}catch(__react_docgen_typescript_loader_error){}var util=__webpack_require__("./stories/components/util.tsx");const MapMarkerStory=({children,icon})=>{const Icon=icon;return(0,jsx_runtime.jsxs)(MapMarker,{children:[icon?(0,jsx_runtime.jsx)(Icon,{}):null,children]})};MapMarkerStory.displayName="MapMarkerStory";const meta={title:"CSS Component/Map marker",id:"css-map-marker",component:MapMarkerStory,argTypes:{icon:{description:"Icon",control:{type:"select"},options:["",...icon_dist.map((({id})=>id))]}},args:{icon:""},parameters:{tokensPrefix:"utrecht-map-marker",status:{type:"WORK IN PROGRESS"},tokens:dist,tokensDefinition:tokens,docs:{description:{component:READMEraw}}}},MapMarker_stories=meta,Default={args:{icon:"utrecht-icon-loupe"},parameters:{docs:{description:{story:"Styling via `utrecht-map-marker` class name."}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'utrecht-icon-loupe'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Styling via `utrecht-map-marker` class name.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]}}]);