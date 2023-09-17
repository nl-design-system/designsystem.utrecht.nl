/*! For license information please see web-component-FormFieldTextarea-stories.b1af8210.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[65086],{"./stories/web-component/FormFieldTextarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,Invalid:()=>Invalid,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_utrecht_web_component_library_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../web-component-library-react/dist/index.esm.js"),_components_util__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FormFieldTextareaStory=({disabled,invalid,label,placeholder,readOnly,required,value})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_utrecht_web_component_library_react__WEBPACK_IMPORTED_MODULE_4__.Dyu,{disabled:disabled||null,invalid:invalid||null,placeholder:placeholder||null,readOnly:readOnly||null,required:required||null,value,children:label});FormFieldTextareaStory.displayName="FormFieldTextareaStory";const meta={title:"Web Component/Form field with textarea",id:"web-component-form-field-textarea",component:FormFieldTextareaStory,argTypes:{disabled:{description:"Disabled",control:"boolean"},invalid:{description:"Invalid",control:"boolean"},label:{description:"Set the content of the label",control:"text"},placeholder:{description:"Placeholder",control:"text"},readOnly:{description:"Read-only",control:"boolean"},required:{description:"Required",control:"boolean"},value:{description:"Value",control:"text"}},args:{disabled:!1,invalid:!1,label:"",placeholder:"",readOnly:!1,required:!1,value:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-form-field-textarea",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_0__,tokensDefinition:{},docs:{description:{component:""}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{label:"Message",value:"The Quick Brown Fox Jumps Over The Lazy Dog"}},Disabled={args:{disabled:!0,label:"Message",value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Disabled"},Invalid={args:{invalid:!0,label:"Message",value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Invalid"},Required={args:{label:"Message",required:!0,value:"The Quick Brown Fox Jumps Over The Lazy Dog"},name:"Required"},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_2__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Message',\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    label: 'Message',\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Disabled'\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    invalid: true,\n    label: 'Message',\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Invalid'\n}",...Invalid.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Message',\n    required: true,\n    value: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  name: 'Required'\n}",...Required.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Invalid","Required","DesignTokens"]}}]);