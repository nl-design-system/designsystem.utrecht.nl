import{r as s,e,h as u}from"./index.esm-3078d4b4.js";import{c as i}from"./clsx.m-9f200cc0-1229b3e0.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./getPrototypeOf-624f05c9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./iframe-27d76828.js";import"../sb-preview/runtime.js";const h=`.utrecht-checkbox{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;cursor:var(--utrecht-action-activate-cursor, revert);-webkit-user-select:none;user-select:none}.utrecht-checkbox--disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:disabled{cursor:var(--utrecht-action-disabled-cursor, revert)}.utrecht-checkbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}:host{display:block}:host([hidden]){display:none !important}`,n=class{constructor(r){s(this,r),this.utrechtBlur=e(this,"utrechtBlur",7),this.utrechtChange=e(this,"utrechtChange",7),this.utrechtFocus=e(this,"utrechtFocus",7),this.utrechtInput=e(this,"utrechtInput",7),this.disabled=!1,this.readOnly=!1,this.checked=!1,this.value=""}render(){const{checked:r,disabled:o,value:c}=this;return u("input",{class:i("utrecht-checkbox"),type:"checkbox",checked:r,disabled:o,value:c,onBlur:t=>this.utrechtBlur.emit(t),onChange:t=>this.utrechtChange.emit(t),onFocus:t=>this.utrechtFocus.emit(t),onInput:t=>{this.checked=t.target.checked,this.utrechtInput.emit(t)}})}};n.style=h;export{n as utrecht_checkbox};
//# sourceMappingURL=utrecht-checkbox.entry-0a2e4570.js.map
