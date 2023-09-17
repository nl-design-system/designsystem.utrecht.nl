/*! For license information please see web-component-Table-stories.9ba904a0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[27769],{"./stories/web-component/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_table_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/table/README.md?raw"),_utrecht_components_table_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/table/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_utrecht_web_component_library_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../web-component-library-react/dist/index.esm.js"),_components_util__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const meta={title:"Web Component/Table",id:"web-component-table",component:_utrecht_web_component_library_react__WEBPACK_IMPORTED_MODULE_6__.kQh,argTypes:{children:{description:"Content of the table"}},args:{children:[]},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-table",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_table_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_table_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{},render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("utrecht-table",{"aria-labelledby":"53818ecc-f9a6-4a9d-9e63-12a5ebb89e31",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-caption",{id:"53818ecc-f9a6-4a9d-9e63-12a5ebb89e31",children:"Table"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-header",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("utrecht-table-row",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-header-cell",{scope:"col",children:"Column header cell 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-header-cell",{scope:"col",children:"Column header cell 2"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-footer",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("utrecht-table-row",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-cell",{children:"Footer cell 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-cell",{children:"Footer cell 2"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-body",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("utrecht-table-row",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-header-cell",{scope:"row",children:"Row header cell"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-table-cell",{children:"Cell"})]})})]}),parameters:{docs:{description:{story:'\nThis Table web component is experimental, please share your experiences with our team.\n\nThe web component version of the Table component has not yet been tested for accessibility with various assistive tools. Using the CSS component of Table is recommended for now.\n\nAccessibility has been tested in the following manner:\n\n- Accessibility panel in Chrome Developer tools shows the same role structure as the native HTML table equivalent.\n\nFor accessibility of `<table-header-cell>` you MUST set the `scope="col"` or `scope="row"` attribute.\n'}}}},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_4__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: () => <utrecht-table aria-labelledby="53818ecc-f9a6-4a9d-9e63-12a5ebb89e31">\n      <utrecht-table-caption id="53818ecc-f9a6-4a9d-9e63-12a5ebb89e31">Table</utrecht-table-caption>\n      <utrecht-table-header>\n        <utrecht-table-row>\n          <utrecht-table-header-cell scope="col">Column header cell 1</utrecht-table-header-cell>\n          <utrecht-table-header-cell scope="col">Column header cell 2</utrecht-table-header-cell>\n        </utrecht-table-row>\n      </utrecht-table-header>\n      <utrecht-table-footer>\n        <utrecht-table-row>\n          <utrecht-table-cell>Footer cell 1</utrecht-table-cell>\n          <utrecht-table-cell>Footer cell 2</utrecht-table-cell>\n        </utrecht-table-row>\n      </utrecht-table-footer>\n      <utrecht-table-body>\n        <utrecht-table-row>\n          <utrecht-table-header-cell scope="row">Row header cell</utrecht-table-header-cell>\n          <utrecht-table-cell>Cell</utrecht-table-cell>\n        </utrecht-table-row>\n      </utrecht-table-body>\n    </utrecht-table>,\n  parameters: {\n    docs: {\n      description: {\n        story: `\nThis Table web component is experimental, please share your experiences with our team.\n\nThe web component version of the Table component has not yet been tested for accessibility with various assistive tools. Using the CSS component of Table is recommended for now.\n\nAccessibility has been tested in the following manner:\n\n- Accessibility panel in Chrome Developer tools shows the same role structure as the native HTML table equivalent.\n\nFor accessibility of \\`<table-header-cell>\\` you MUST set the \\`scope="col"\\` or \\`scope="row"\\` attribute.\n`\n      }\n    }\n  }\n}',...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]},"../../components/table/README.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\n# Table\n\nDe _table_ component wordt nog aangewerkt. We doen met de NL Design System community onderzoek welke tabel varianten in omloop zijn, hoe we elke variant toegankelijk kunnen maken en wat het visueel ontwerp moet worden.\n\nDe tabellen in Storybook hier zijn allemaal **WORK IN PROGRESS**, tenzij anders aangegeven.\n"},"../../components/table/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"table":{"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"caption":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-align":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"left | right | start | end","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"header":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}},"border-block-end-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-block-end-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"header-cell":{"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | uppercase","inherits":true}}}},"cell":{"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"icon":{"size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}},"row":{"border-block-end-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-block-end-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"alternate-odd":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"alternate-even":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}}')}}]);