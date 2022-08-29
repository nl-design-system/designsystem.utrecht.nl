"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[637],{170:(e,a,t)=>{t.d(a,{Cd:()=>f,GS:()=>p,SC:()=>j,XJ:()=>o,Z0:()=>N,aC:()=>h,by:()=>m,iA:()=>g,k8:()=>u,nL:()=>d,nv:()=>b,pj:()=>v,xs:()=>y});var r=t(5619),n=t(6277),i=t(1104);function s(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("article",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-article",i)},{children:t}))})).displayName="Article",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-backdrop",i)},{children:t}))})).displayName="Backdrop";var l=(0,i.forwardRef)((function(e,a){var t=e.appearance,i=e.busy,l=e.disabled,c=e.children,d=e.className,o=e.type,h=s(e,["appearance","busy","disabled","children","className","type"]);return(0,r.jsx)("button",Object.assign({},h,{ref:a,className:(0,n.Z)("utrecht-button",i&&"utrecht-button--busy",l&&"utrecht-button--disabled","submit"===o&&"utrecht-button--submit","primary-action-button"===t&&"utrecht-button--primary-action","secondary-action-button"===t&&"utrecht-button--secondary-action","subtle-button"===t&&"utrecht-button--subtle",d),"aria-busy":i||void 0,disabled:l,type:o||"button"},{children:c}))}));l.displayName="Button";var c=function(e){var a;" "===e.key&&"function"==typeof(null===(a=e.target)||void 0===a?void 0:a.click)&&(e.preventDefault(),e.target.click())};(0,i.forwardRef)((function(e,a){var t=e.appearance,i=e.children,l=e.className,d=e.external,o=e.role,h=s(e,["appearance","children","className","external","role"]),u=h;return"button"===o&&(u=Object.assign(Object.assign({},h),{onKeyDown:c})),(0,r.jsx)("a",Object.assign({},u,{ref:a,role:o,className:(0,n.Z)("utrecht-button-link","utrecht-button-link--html-a",{"utrecht-button-link--external":d,"utrecht-button-link--primary-action":"primary-action-button"===t,"utrecht-button-link--secondary-action":"secondary-action-button"===t,"utrecht-button-link--subtle":"subtle-button"===t},l),rel:d?"external noopener noreferrer":void 0},{children:i}))})).displayName="ButtonLink",(0,i.forwardRef)((function(e,a){var t=e.disabled,i=e.invalid,l=e.required,c=e.className,d=s(e,["disabled","invalid","required","className"]);return(0,r.jsx)("input",Object.assign({},d,{ref:a,type:"checkbox",className:(0,n.Z)("utrecht-checkbox","utrecht-checkbox--html-input",t&&"utrecht-checkbox--disabled",i&&"utrecht-checkbox--invalid",l&&"utrecht-checkbox--required",c),"aria-invalid":i||void 0,disabled:t,required:l}))})).displayName="Checkbox",(0,i.forwardRef)((function(e,a){var t=e.disabled,i=e.required,l=e.className,c=e.invalid,d=s(e,["disabled","required","className","invalid"]);return(0,r.jsx)("input",Object.assign({type:"radio","aria-invalid":c||void 0,disabled:t,required:i,ref:a,className:(0,n.Z)("utrecht-custom-radio-button",t&&"utrecht-custom-radio-button--disabled",c&&"utrecht-custom-radio-button--invalid",l)},d))})).displayName="CustomRadioButton",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-document",i)},{children:t}))})).displayName="Document",(0,i.forwardRef)((function(e,a){var t=e.appearance,i=e.children,l=e.className,c=s(e,["appearance","children","className"]);return(0,r.jsx)("dl",Object.assign({},c,{className:(0,n.Z)("utrecht-data-list","utrecht-data-list--html-dl","rows"===t&&"utrecht-data-list--rows",l),ref:a},{children:i}))})).displayName="DataList",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{className:(0,n.Z)("utrecht-data-list__item",i),ref:a},{children:t}))})).displayName="DataListItem",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("dt",Object.assign({},l,{className:(0,n.Z)("utrecht-data-list__item-key",i),ref:a},{children:t}))})).displayName="DataListKey",(0,i.forwardRef)((function(e,a){var t=e.value,i=e.children,s=e.className,l=e.emptyDescription,c=e.multiline,d=e.notranslate,o=""===t||null===t;return(0,r.jsx)("dd",Object.assign({className:(0,n.Z)("utrecht-data-list__item-value","utrecht-data-list__item-value--html-dd",s,c&&"utrecht-data-list__item-value--multiline"),translate:"boolean"==typeof d?d?"no":"yes":void 0,ref:a},{children:o?(0,r.jsx)("span",Object.assign({"aria-label":l},{children:"-"})):i}))})).displayName="DataListValue",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("dd",Object.assign({},l,{className:(0,n.Z)("utrecht-data-list__actions","utrecht-data-list__actions--html-dd",i),ref:a},{children:t}))})).displayName="DataListActions",(0,i.forwardRef)((function(e,a){var t=e.className,i=e.children,l=s(e,["className","children"]);return(0,r.jsx)("fieldset",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-form-fieldset","utrecht-form-fieldset--reset-fieldset",t)},{children:i}))})).displayName="Fieldset",(0,i.forwardRef)((function(e,a){var t=e.className,i=e.children,l=s(e,["className","children"]);return(0,r.jsx)("legend",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-form-fieldset__legend","utrecht-form-fieldset__legend--reset-legend",t)},{children:i}))})).displayName="FieldsetLegend",(0,i.forwardRef)((function(e,a){var t=e.className,i=e.children,l=s(e,["className","children"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-form-field","utrecht-form-field--distanced",t)},{children:i}))})).displayName="FormField",(0,i.forwardRef)((function(e,a){var t=e.invalid,i=e.valid,l=e.warning,c=e.className,d=e.children,o=s(e,["invalid","valid","warning","className","children"]);return(0,r.jsx)("div",Object.assign({},o,{ref:a,className:(0,n.Z)("utrecht-form-field-description",t&&"utrecht-form-field-description--invalid",i&&"utrecht-form-field-description--valid",l&&"utrecht-form-field-description--warning",c)},{children:d}))})).displayName="FormFieldDescription",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=e.type,c=e.disabled,d=e.checked,o=s(e,["children","className","type","disabled","checked"]);return(0,r.jsx)("label",Object.assign({},o,{ref:a,className:(0,n.Z)("utrecht-form-label",l&&"utrecht-form-label--".concat(l),c&&"utrecht-form-label--disabled",d&&"utrecht-form-label--checked",i)},{children:t}))})).displayName="FormLabel",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-html",i)},{children:t}))})).displayName="HTMLContent";var d=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("h1",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-heading-1",i)},{children:t}))}));d.displayName="Heading1";var o=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("h2",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-heading-2",i)},{children:t}))}));o.displayName="Heading2";var h=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("h3",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-heading-3",i)},{children:t}))}));h.displayName="Heading3";var u=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("h4",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-heading-4",i)},{children:t}))}));u.displayName="Heading4";var m=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("h5",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-heading-5",i)},{children:t}))}));m.displayName="Heading5";var f=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("h6",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-heading-6",i)},{children:t}))}));f.displayName="Heading6",(0,i.forwardRef)((function(e,a){var t=e.boxContent,i=e.children,l=e.className,c=e.external,d=s(e,["boxContent","children","className","external"]);return(0,r.jsx)("a",Object.assign({},d,{ref:a,className:(0,n.Z)("utrecht-link",{"utrecht-link--box-content":t,"utrecht-link--external":c},l),rel:c?"external noopener noreferrer":void 0},{children:i}))})).displayName="Link",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.inline,l=e.className,c=s(e,["children","inline","className"]);return(0,r.jsx)("button",Object.assign({},c,{ref:a,className:(0,n.Z)("utrecht-link-button","utrecht-link-button--html-button",{"utrecht-link-button--inline":i},l)},{children:t}))})).displayName="LinkButton",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=e.value,c=s(e,["children","className","value"]);return(0,r.jsx)("data",Object.assign({value:"string"==typeof l||"number"==typeof l?String(l):void 0},c,{ref:a,className:(0,n.Z)("utrecht-value-number",i)},{children:t}))})).displayName="NumberValue";var p=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("ol",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-ordered-list",i)},{children:t}))}));p.displayName="OrderedList",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("li",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-ordered-list__item",i)},{children:t}))})).displayName="OrderedListItem",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-page",i)},{children:t}))})).displayName="Page",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-page-content",i)},{children:t}))})).displayName="PageContent",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("main",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-page-content__main",i)},{children:t}))})).displayName="PageContentMain",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("footer",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-page-footer",i)},{children:t}))})).displayName="PageFooter",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("header",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-page-header",i)},{children:t}))})).displayName="PageHeader";var b=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=e.lead,c=s(e,["children","className","lead"]);return(0,r.jsx)("p",Object.assign({},c,{ref:a,className:(0,n.Z)("utrecht-paragraph",l&&"utrecht-paragraph--lead",i)},{children:t}))}));b.displayName="Paragraph",(0,i.forwardRef)((function(e,a){var t=e.invalid,i=e.className,l=s(e,["invalid","className"]);return(0,r.jsx)("input",Object.assign({},l,{ref:a,type:"radio",className:(0,n.Z)("utrecht-radio-button","utrecht-radio-button--html-input",t&&"utrecht-radio-button--invalid",i)}))})).displayName="RadioButton",(0,i.forwardRef)((function(e,a){var t=e.invalid,i=e.required,l=e.className,c=e.noscript,d=e.children,o=s(e,["invalid","required","className","noscript","children"]);return(0,r.jsx)("select",Object.assign({},o,{ref:a,"aria-invalid":t||void 0,required:!!c&&i,"aria-required":c?void 0:i,className:(0,n.Z)("utrecht-select","utrecht-select--html-select",t&&"utrecht-select--invalid",i&&"utrecht-select--required",l)},{children:d}))})).displayName="Select",(0,i.forwardRef)((function(e,a){var t=e.disabled,i=e.invalid,l=e.value,c=e.children,d=e.className,o=s(e,["disabled","invalid","value","children","className"]);return(0,r.jsx)("option",Object.assign({},o,{ref:a,disabled:t,value:l,className:(0,n.Z)("utrecht-select__option",t&&"utrecht-select__option--disabled",i&&"utrecht-select__option--invalid",d)},{children:c}))})).displayName="SelectOption";var N=(0,i.forwardRef)((function(e,a){var t=e.className;e.children;var i=s(e,["className","children"]);return(0,r.jsx)("hr",Object.assign({},i,{ref:a,className:(0,n.Z)("utrecht-separator",t)}))}));N.displayName="Separator",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("div",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-surface",i)},{children:t}))})).displayName="Surface";var g=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("table",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table",i)},{children:t}))}));g.displayName="Table",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("tbody",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__body",i)},{children:t}))})).displayName="TableBody",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("caption",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__caption",i)},{children:t}))})).displayName="TableCaption";var v=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("td",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__cell",i)},{children:t}))}));v.displayName="TableCell",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("tfoot",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__footer",i)},{children:t}))})).displayName="TableFooter",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("thead",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__header",i)},{children:t}))})).displayName="TableHeader";var y=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("th",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__header-cell",i)},{children:t}))}));y.displayName="TableHeaderCell";var j=(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("tr",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-table__row",i)},{children:t}))}));j.displayName="TableRow",(0,i.forwardRef)((function(e,a){var t=e.disabled,i=e.invalid,l=e.readOnly,c=e.required,d=e.className,o=s(e,["disabled","invalid","readOnly","required","className"]);return(0,r.jsx)("textarea",Object.assign({},o,{ref:a,className:(0,n.Z)("utrecht-textarea","utrecht-textarea--html-textarea",t&&"utrecht-textarea--disabled",i&&"utrecht-textarea--invalid",l&&"utrecht-textarea--readonly",c&&"utrecht-textarea--required",d),disabled:t,readOnly:l,required:c,"aria-invalid":i||void 0}))})).displayName="Textarea",(0,i.forwardRef)((function(e,a){var t=e.disabled,i=e.invalid,l=e.readOnly,c=e.required,d=e.className,o=e.type,h=void 0===o?"text":o,u=e.maxLength,m=e.inputMode,f=s(e,["disabled","invalid","readOnly","required","className","type","maxLength","inputMode"]);return(0,r.jsx)("input",Object.assign({},f,{ref:a,type:h,className:(0,n.Z)("utrecht-textbox","utrecht-textbox--html-input",t&&"utrecht-textbox--disabled",i&&"utrecht-textbox--invalid",l&&"utrecht-textbox--readonly",c&&"utrecht-textbox--required",d),maxLength:u,disabled:t,readOnly:l,required:c,"aria-invalid":i||void 0,inputMode:m||("number"===h?"numeric":void 0)}))})).displayName="Textbox",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("bdi",Object.assign({translate:"no"},l,{ref:a,className:(0,n.Z)("utrecht-url",i)},{children:t}))})).displayName="URLValue",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("ul",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-unordered-list",i)},{children:t}))})).displayName="UnorderedList",(0,i.forwardRef)((function(e,a){var t=e.children,i=e.className,l=s(e,["children","className"]);return(0,r.jsx)("li",Object.assign({},l,{ref:a,className:(0,n.Z)("utrecht-unordered-list__item",i)},{children:t}))})).displayName="UnorderedListItem"},7781:(e,a,t)=>{t.d(a,{U:()=>h});var r=t(7896),n=t(876),i=t(170),s=t(2784);const l=(e,a)=>{const t=new URL(a,new URL(e,"resolve://pathname/"));if("resolve:"===t.protocol){const{pathname:t,search:r,hash:n}=new URL(a,new URL(e,"http://example.com/"));return t+r+n}return t.toString()},c={1:{},2:{h1:i.XJ,h2:i.aC,h3:i.k8,h4:i.by,h5:i.Cd},3:{h1:i.aC,h2:i.k8,h3:i.by,h4:i.Cd,h5:i.Cd},4:{h1:i.k8,h2:i.by,h3:i.Cd,h4:i.Cd,h5:i.Cd},5:{h1:i.by,h2:i.Cd,h3:i.Cd,h4:i.Cd,h5:i.Cd},6:{h1:i.Cd,h2:i.Cd,h3:i.Cd,h4:i.Cd,h5:i.Cd}},d=e=>({img:a=>{let{src:t,...n}=a;return s.createElement("img",(0,r.Z)({},n,{src:l(e,t),className:"utrecht-img utrecht-img--fit"}))}}),o=(e,a)=>{if(e){const e={...c[a-1]};return e.h1=()=>null,e}return c[a]},h=e=>{let{children:a,omitH1:t=!1,headingLevel:r=1,baseUrl:i=""}=e;return s.createElement(n.Zo,{components:{...o(t,r),...d(i)}},a)}},388:(e,a,t)=>{t.d(a,{U:()=>o});var r=t(7614),n=t(2009),i=t(1112),s=t(8873),l=t(2784);const c="story-tabs__tab_Ets0",d="story-tabs__link_j5UT",o=e=>{let{tabs:a}=e;return l.createElement(i.Z,null,a.map((e=>{let{id:a,label:t,story:i}=e;const{siteConfig:o}=(0,r.Z)(),h=o.customFields.storybookUrl,u=h+"?path=/docs/"+i,m=h+"iframe.html?id="+i+"&viewMode=docs#singleStory=true&shortcuts=false";return l.createElement(n.Z,{value:a,label:t,key:a},l.createElement("div",{className:c},l.createElement(s.Z,{src:m,style:{width:"1px",minWidth:"100%"},heightCalculationMethod:"lowestElement"}),l.createElement("a",{className:d,href:u,target:"_blank",rel:"noreferrer"},"Storybook: ",i)))})))}},6155:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var r=t(7896),n=(t(2784),t(876)),i=t(7781),s=t(388);const l={toc:[{value:"Terminologie",id:"terminologie",level:2}]};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gebruik-en-toegankelijkheid-van-headings-koppen"},"Gebruik en toegankelijkheid van headings (koppen)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gebruik altijd maar \xe9\xe9n H1 heading op een pagina met digitale content."),(0,n.kt)("li",{parentName:"ul"},"Gebruik alleen een heading als er content onder staat."),(0,n.kt)("li",{parentName:"ul"},"Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina."),(0,n.kt)("li",{parentName:"ul"},"Gebruik headings niet voor de opmaak maar alleen voor tekstuele hi\xebrarchie van de content."),(0,n.kt)("li",{parentName:"ul"},"Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is."),(0,n.kt)("li",{parentName:"ul"},"Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan ",(0,n.kt)("inlineCode",{parentName:"li"},"<h2>")," koppen nodig en heel soms een ",(0,n.kt)("inlineCode",{parentName:"li"},"<h3>"),". Alleen voor uitzonderlijk lange of complexe pagina's zouden ",(0,n.kt)("inlineCode",{parentName:"li"},"<h5>")," en ",(0,n.kt)("inlineCode",{parentName:"li"},"<h6>")," nodig zijn.")),(0,n.kt)("h2",{id:"terminologie"},"Terminologie"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"heading"),": ",(0,n.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements"},"de HTML specificatie van ",(0,n.kt)("inlineCode",{parentName:"a"},"h1"),"/",(0,n.kt)("inlineCode",{parentName:"a"},"h2"),"/",(0,n.kt)("inlineCode",{parentName:"a"},"h3"),"/",(0,n.kt)("inlineCode",{parentName:"a"},"h4"),"/",(0,n.kt)("inlineCode",{parentName:"a"},"h5"),"/",(0,n.kt)("inlineCode",{parentName:"a"},"h6")),'. "h1" is nogal kortaf, daarom beschrijven we de token als "heading-1".')),(0,n.kt)("p",null,'In HTML wordt de term "heading" gebruikt, niet "header" (dat is ook iets anders). Let dus op om niet per ongeluk "header" te schrijven in plaats van "heading".'))}c.isMDXComponent=!0;const d={title:"Heading",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Heading",sidebar_position:1,pagination_label:"Heading",description:"Utrecht Heading component.",keywords:["h1","h2","h3","h4","h5","h6","heading","utrecht-heading"]},o=void 0,h={unversionedId:"componenten/typografie/heading",id:"componenten/typografie/heading",title:"Heading",description:"Utrecht Heading component.",source:"@site/docs/componenten/typografie/heading.mdx",sourceDirName:"componenten/typografie",slug:"/componenten/typografie/heading",permalink:"/utrecht/docs/componenten/typografie/heading",draft:!1,editUrl:"https://github.com/nl-design-system/utrecht/tree/main/documentation/docs/componenten/typografie/heading.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Heading",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Heading",sidebar_position:1,pagination_label:"Heading",description:"Utrecht Heading component.",keywords:["h1","h2","h3","h4","h5","h6","heading","utrecht-heading"]},sidebar:"components",previous:{title:"Overzicht van alle Iconen",permalink:"/utrecht/docs/componenten/icons/Iconen overzicht"},next:{title:"Link",permalink:"/utrecht/docs/componenten/typografie/link"}},u={},m=[{value:"UX Richtlijnen",id:"ux-richtlijnen",level:2},{value:"Heading 1 Component",id:"heading-1-component",level:2},{value:"Heading 2 Component",id:"heading-2-component",level:2},{value:"Heading 3 Component",id:"heading-3-component",level:2},{value:"Heading 4 Component",id:"heading-4-component",level:2},{value:"Heading 5 Component",id:"heading-5-component",level:2},{value:"Heading 6 Component",id:"heading-6-component",level:2}],f={toc:m};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ux-richtlijnen"},"UX Richtlijnen"),(0,n.kt)(i.U,{headingLevel:3,mdxType:"Markdown"},(0,n.kt)(c,{mdxType:"Readme"})),(0,n.kt)("h2",{id:"heading-1-component"},"Heading 1 Component"),(0,n.kt)(s.U,{tabs:[{id:"html",label:"HTML",story:"html-heading-1--default-story"},{id:"css",label:"CSS",story:"css-heading-1--default-story"},{id:"web-component",label:"Web Component",story:"web-component-heading-1--default-story"}],mdxType:"StoryTabs"}),(0,n.kt)("h2",{id:"heading-2-component"},"Heading 2 Component"),(0,n.kt)(s.U,{tabs:[{id:"html",label:"HTML",story:"html-heading-2--default-story"},{id:"css",label:"CSS",story:"css-heading-2--default-story"},{id:"web-component",label:"Web Component",story:"web-component-heading-2--default-story"}],mdxType:"StoryTabs"}),(0,n.kt)("h2",{id:"heading-3-component"},"Heading 3 Component"),(0,n.kt)(s.U,{tabs:[{id:"html",label:"HTML",story:"html-heading-3--default-story"},{id:"css",label:"CSS",story:"css-heading-3--default-story"},{id:"web-component",label:"Web Component",story:"web-component-heading-3--default-story"}],mdxType:"StoryTabs"}),(0,n.kt)("h2",{id:"heading-4-component"},"Heading 4 Component"),(0,n.kt)(s.U,{tabs:[{id:"html",label:"HTML",story:"html-heading-4--default-story"},{id:"css",label:"CSS",story:"css-heading-4--default-story"},{id:"web-component",label:"Web Component",story:"web-component-heading-4--default-story"}],mdxType:"StoryTabs"}),(0,n.kt)("h2",{id:"heading-5-component"},"Heading 5 Component"),(0,n.kt)(s.U,{tabs:[{id:"html",label:"HTML",story:"html-heading-5--default-story"},{id:"css",label:"CSS",story:"css-heading-5--default-story"},{id:"web-component",label:"Web Component",story:"web-component-heading-5--default-story"}],mdxType:"StoryTabs"}),(0,n.kt)("h2",{id:"heading-6-component"},"Heading 6 Component"),(0,n.kt)(s.U,{tabs:[{id:"html",label:"HTML",story:"html-heading-6--default-story"},{id:"css",label:"CSS",story:"css-heading-6--default-story"},{id:"web-component",label:"Web Component",story:"web-component-heading-6--default-story"}],mdxType:"StoryTabs"}))}p.isMDXComponent=!0}}]);