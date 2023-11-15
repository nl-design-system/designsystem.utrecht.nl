/*! For license information please see web-component-library-angular-stories-mdx.8576de76.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[]).push([[9179],{"./src/web-component-library-angular.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>web_component_library_angular_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.15_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),Markdown=__webpack_require__("../../documentation/components/Markdown.jsx");const READMEraw_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Web Components in Angular\n\nThe `@utrecht/web-component-library-stencil` package contains the actual implementation of every web component, while the `@utrecht/web-component-library-angular` only contains wrapper Angular components to help validate all the templates, and some supporting code to support Angular form bindings. The implementation of each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.\n\nInstall both packages to use Angular components in your project:\n\n```shell\nnpm install --save-dev --save-exact \\\n  @utrecht/web-component-library-angular \\\n  @utrecht/web-component-library-stencil\n```\n\nInclude `UtrechtWebComponentsModule` in the root `NgModule` of your project:\n\n```ts\nimport { NgModule } from "@angular/core";\nimport { BrowserModule } from "@angular/platform-browser";\nimport { UtrechtWebComponentsModule } from "@utrecht/web-component-library-angular";\n\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, UtrechtWebComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n```\n\nThe components are rendered using custom elements, but since we provide a corresponding Angular component for every custom element, you don\'t need to configure [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) to make use of any of the components.\n\nTo make the custom elements work, you also need to call `defineCustomElements()` once in your page, immediately when it is loaded. Add this to `main.ts`:\n\n```ts\nimport { defineCustomElements } from "@utrecht/web-component-library-stencil/loader";\n\ndefineCustomElements();\n```\n\nAfter this you can use web components in your templates:\n\n```html\n<utrecht-heading level="1">Home</utrecht-heading>\n\n<utrecht-paragraph>Hello world!</utrecht-paragraph>\n```\n\nTo use the Utrecht theme for the components, use the `utrecht-theme` class name and include the design tokens CSS in your `angular.json`:\n\n```json\n{\n  "projects": {\n    "my-app": {\n      "architect": {\n        "build": {\n          "options": {\n            "styles": ["node_modules/@utrecht/design-tokens/dist/index.css", "src/styles.css"]\n          }\n        }\n      }\n    }\n  }\n}\n```\n';var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Component/Angular"}),"\n",(0,jsx_runtime.jsx)(Markdown.U,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/Angular",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const web_component_library_angular_stories=componentMeta},"../../documentation/components/Markdown.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Markdown});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Markdown=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,{children:children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm,"")});Markdown.displayName="Markdown"}}]);