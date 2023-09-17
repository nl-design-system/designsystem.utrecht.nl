/*! For license information please see web-component-FormFieldDescription-stories.32b7c4cd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[10525],{"./stories/web-component/FormFieldDescription.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Invalid:()=>Invalid,Valid:()=>Valid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utrecht_components_form_field_description_README_md_raw__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-field-description/README.md?raw"),_utrecht_components_form_field_description_tokens_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/form-field-description/tokens.json"),_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),_utrecht_web_component_library_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../web-component-library-react/dist/index.esm.js"),_components_util__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FormFieldDescriptionStory=({children,id,status})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_utrecht_web_component_library_react__WEBPACK_IMPORTED_MODULE_6__.BYY,{id,status,children});FormFieldDescriptionStory.displayName="FormFieldDescriptionStory";const meta={title:"Web Component/Form field description",id:"web-component-form-field-description",component:FormFieldDescriptionStory,argTypes:{id:{description:"Unique identifier to associate it with a form input",control:"text"},children:{description:"Set the content of the description",control:"text"},status:{control:{type:"select"},description:"Status",options:["","invalid","valid"]}},args:{children:[]},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-form-field-description",tokens:_utrecht_design_tokens_dist_index_json__WEBPACK_IMPORTED_MODULE_2__,tokensDefinition:_utrecht_components_form_field_description_tokens_json__WEBPACK_IMPORTED_MODULE_1__,docs:{description:{component:_utrecht_components_form_field_description_README_md_raw__WEBPACK_IMPORTED_MODULE_0__}}}},__WEBPACK_DEFAULT_EXPORT__=meta,Default={args:{id:"8e42ecf4-902c-4472-b9fb-74e594294fb6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-paragraph",{children:"Your password must contain at least 16 characters."})}},Invalid={args:{id:"381e25ec-9af5-4c56-8245-2c45503c29f9",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-paragraph",{children:"This is a required field and must not be left empty."}),status:"invalid"},name:"Invalid"},Valid={args:{id:"6fda501a-1512-4310-800d-7e4b5d305823",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("utrecht-paragraph",{children:"This is very safe password!"}),status:"valid"},name:"Valid"},DesignTokens=(0,_components_util__WEBPACK_IMPORTED_MODULE_4__.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: '8e42ecf4-902c-4472-b9fb-74e594294fb6',\n    children: <utrecht-paragraph>Your password must contain at least 16 characters.</utrecht-paragraph>\n  }\n}",...Default.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: '381e25ec-9af5-4c56-8245-2c45503c29f9',\n    children: <utrecht-paragraph>This is a required field and must not be left empty.</utrecht-paragraph>,\n    status: 'invalid'\n  },\n  name: 'Invalid'\n}",...Invalid.parameters?.docs?.source}}},Valid.parameters={...Valid.parameters,docs:{...Valid.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: '6fda501a-1512-4310-800d-7e4b5d305823',\n    children: <utrecht-paragraph>This is very safe password!</utrecht-paragraph>,\n    status: 'valid'\n  },\n  name: 'Valid'\n}",...Valid.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Invalid","Valid","DesignTokens"]},"../../components/form-field-description/README.md?raw":module=>{module.exports='\x3c!-- @license CC0-1.0 --\x3e\n\n# Form field description\n\nGebruik dit component voor extra beschrijvingen en instructies bij formuliervelden. Gebruik variaties van dit component voor meldingen dat er iets mis is met de invoer (`invalid`), dat er iets fout ging met het behandelen van de invoer (`error`), feedback over de status van de invoer, of feedback dat de invoer OK is.\n\nDit component is meestal een onderdeel van het _form field_ component.\n\n## Feedback van een formulier\n\nFormulieren geven meerdere soorten feedback, die kun je allemaal weergeven met de _form field description_ component:\n\n- Informatie over de status van de invoer.\n- Resultaat van validatie: niet valide.\n- Resultaat van validatie: invoer voldoet aan de eisen.\n- Foutmelding bij een actie uitvoeren.\n- Resultaat van _submit_: verzenden gelukt.\n- Resultaat van _submit_: verzenden niet gelukt, want invoer voldoet niet aan de eisen.\n- Resultaat van _submit_: verzenden niet gelukt, want er is een fout bij de server.\n- Resultaat van een berekening.\n\nFeedback van een formulier moet duidelijk zijn voor gebruikers die hulpmiddelen gebruiken, zoals een _screen reader_. Kies bij alle feedback welke soort _live region_ gebruikt moet worden: _polite_ of _assertive_, beleefd of dringend.\n\nLet op: in de meeste sitaties moet je geen `role="status"` en `role="alert"` gebruiken in server-side templates. Het is niet handig als meerdere teksten direct worden voorgelezen door een _screen reader_ zodra de pagina geladen is.\n\n### Beleefd / _polite_\n\nGebruik _polite_ voor feedback over acties van de gebruiker. Dat kan in HTML met het attribuut `role="status"`, dat hoeft niet met `aria-live="polite"`. Zie ook: [Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22). Bijvoorbeeld:\n\n- informatie over hoeveel meer tekens nog gebruikt mogen worden voordat de limiet is bereikt.\n- informatie over hoeveel zoekresultaten een combobox heeft.\n\n### Dringend / _assertive_\n\nGebruik `role="alert"` voor fouten die optreden door een actie van de gebruiker, bijvoorbeeld:\n\n- Wanneer een formulierveld niet juist is ingevuld.\n- Wanneer een formulier niet verzonden kan worden, omdat geen verbinding met de server gemaakt kan worden.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `description` komt van `aria-describedby`.\n- `invalid` komt van `:invalid` in CSS en `aria-invalid` in WAI-ARIA.\n- `valid` from `:valid` in CSS.\n\n## HTML\n\nGebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ een koppeling kunt maken.\n\nGebruik in HTML in plaats van `aria-live="polite"` het attribuut `role="status"`.\n\nGebruik in HTML in plaats van `aria-live="assertive"` het attribuut `role="alert"`.\n\n## Relevante WCAG eisen\n\n- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)\n- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)\n'},"../../components/form-field-description/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"form-field-description":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}},"type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}},"type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}},"type":"fontSizes"},"font-style":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"italic","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.figma.supports-token":false},"type":"sizing"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true},"nl.nldesignsystem.figma.supports-token":false},"type":"sizing"},"invalid":{"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"valid":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}')}}]);