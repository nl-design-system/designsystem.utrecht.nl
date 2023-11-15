import{r as d,R as o}from"./index-76fb7be0.js";import{t as re,d as te}from"./util-950d32d4.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./index-8d47fad6.js";var v=function(){return v=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},v.apply(this,arguments)};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function j(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function q(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=q(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function l(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=q(e))&&(r&&(r+=" "),r+=t);return r}var ne=function(e){var t=e.className,n=e.children,r=e.current,a=r===void 0?!1:r,s=e.appearance,c=s===void 0?"not-checked":s,p=b(e,["className","children","current","appearance"]);return o.createElement("li",v({},p,{className:l("denhaag-process-steps__step","denhaag-process-steps__step--".concat(c),t),"aria-current":a?"step":void 0}),n)},F=function(e){var t=e.className,n=e.nested,r=n===void 0?!1:n,a=e.children,s=b(e,["className","nested","children"]);return o.createElement("ol",v({},s,{className:l("denhaag-process-steps",r&&"denhaag-process-steps--nested",t)}),a)},ae=function(e){var t=e.children,n=e.className,r=b(e,["children","className"]);return o.createElement("div",v({className:l("denhaag-process-steps__step-header",n)},r),t)},N=function(e){var t=e.children,n=e.appearance,r=n===void 0?"not-checked":n,a=b(e,["children","appearance"]);return o.createElement("p",v({},a,{className:l("denhaag-process-steps__step-heading","denhaag-process-steps__step-heading--".concat(r))}),t)},se=function(e){var t=e.children,n=e.appearance,r=n===void 0?"not-checked":n;return o.createElement("li",{className:l("denhaag-process-steps__sub-step","denhaag-process-steps__sub-step--".concat(r))},t)},oe=function(e){var t=e.children;return o.createElement("p",{className:"denhaag-process-steps__sub-step-heading"},t)},w=function(){return w=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},w.apply(this,arguments)};function ce(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function J(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=J(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function de(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=J(e))&&(r&&(r+=" "),r+=t);return r}var ie=function(e){var t,n=e.className,r=e.component,a=r===void 0?"svg":r,s=e.focusable,c=s===void 0?"false":s,p=e.shapeRendering,h=p===void 0?"auto":p,m=e.useDefaultClass,k=m===void 0?!0:m,g=ce(e,["className","component","focusable","shapeRendering","useDefaultClass"]),i=de({"denhaag-icon":k},n),f=a;return o.createElement(f,w({className:i,focusable:c,"aria-hidden":(t=g["aria-hidden"])!==null&&t!==void 0?t:!0,shapeRendering:h},g),g.children)};function le(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var pe=".denhaag-icon{fill:currentcolor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}";le(pe);var A;function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function ge(e){return d.createElement("svg",z({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),A||(A=d.createElement("path",{d:"M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",fill:"currentColor"})))}var he=d.memo(ge),P;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function me(e){return d.createElement("svg",E({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),P||(P=d.createElement("path",{d:"M11.293 7.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6z",fill:"currentColor"})))}var ue=d.memo(me),M;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function ve(e){return d.createElement("svg",$({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),M||(M=d.createElement("path",{d:"M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z",fill:"currentColor"})))}var ke=d.memo(ve),T;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function fe(e){return d.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},e),T||(T=d.createElement("path",{d:"M20.664 5.253a1 1 0 01.083 1.411l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 011.494-1.328l4.586 5.159 9.92-11.16a1 1 0 011.411-.082z",stroke:"currentColor",strokeWidth:1.75})))}var be=d.memo(fe),D;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function ye(e){return d.createElement("svg",C({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),D||(D=d.createElement("g",{stroke:"currentColor",fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0v0zM12 17h.01M12 9v4"}))))}var xe=d.memo(ye),y=function(e,t){return o.createElement(ie,w({component:e},t))},_e=function(e){return y(he,e)},we=function(e){return y(ue,e)},Se=function(e){return y(ke,e)},B=function(e){return y(be,e)},ze=function(e){return y(xe,e)};function Ee(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var $e=".denhaag-step-marker{align-items:center;background-color:var(--denhaag-step-marker-background-color);block-size:var(--denhaag-step-marker-size);border-color:var(--denhaag-step-marker-border-color,transparent);border-radius:var(--denhaag-step-marker-border-radius,50%);border-style:solid;border-width:var(--denhaag-step-marker-border-width);box-sizing:border-box;color:var(--denhaag-step-marker-color);display:flex;flex-grow:0;font-family:var(--denhaag-step-marker-font-family);font-size:var(--denhaag-step-marker-font-size);font-weight:var(--denhaag-step-marker-font-weight);inline-size:var(--denhaag-step-marker-size);justify-content:center;margin-block-end:var(--denhaag-step-marker-margin);margin-block-start:var(--denhaag-step-marker-margin);min-block-size:var(--denhaag-step-marker-min-size,var(--denhaag-step-marker-size));min-inline-size:var(--denhaag-step-marker-min-size,var(--denhaag-step-marker-size));padding-inline-end:0;position:relative;z-index:1}.denhaag-step-marker .denhaag-icon{block-size:var(--denhaag-step-marker-icon-size);inline-size:var(--denhaag-step-marker-icon-size)}.denhaag-step-marker--nested{block-size:var(--denhaag-step-marker-nested-size);border-width:var(--denhaag-step-marker-nested-border-width,var(--denhaag-step-marker-border-width));inline-size:var(--denhaag-step-marker-nested-size);margin-inline-start:calc((var(--denhaag-step-marker-size) - var(--denhaag-step-marker-nested-size))/2);min-block-size:var(--denhaag-step-marker-nested-min-size,var(--denhaag-step-marker-nested-size));min-inline-size:var(--denhaag-step-marker-nested-min-size,var(--denhaag-step-marker-nested-size))}.denhaag-step-marker--nested .denhaag-icon{block-size:var(--denhaag-step-marker-nested-icon-size);inline-size:var(--denhaag-step-marker-nested-icon-size)}.denhaag-step-marker--not-checked{background-color:var(--denhaag-step-marker-not-checked-background-color);border-color:var(--denhaag-step-marker-not-checked-border-color);color:var(--denhaag-step-marker-not-checked-color)}.denhaag-step-marker--not-checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-not-checked-nested-background-color,var(--denhaag-step-marker-not-checked-background-color));border-color:var(--denhaag-step-marker-not-checked-nested-border-color,var(--denhaag-step-marker-not-checked-border-color));color:var(--denhaag-step-marker-not-checked-nested-color,var(--denhaag-step-marker-not-checked-color))}.denhaag-step-marker--checked{background-color:var(--denhaag-step-marker-checked-background-color);border-color:var(--denhaag-step-marker-checked-border-color);color:var(--denhaag-step-marker-checked-color)}.denhaag-step-marker--checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-checked-nested-background-color,var(--denhaag-step-marker-checked-background-color));border-color:var(--denhaag-step-marker-checked-nested-border-color,var(--denhaag-step-marker-checked-border-color));color:var(--denhaag-step-marker-checked-nested-color,var(--denhaag-step-marker-checked-color))}.denhaag-step-marker--current{background-color:var(--denhaag-step-marker-current-background-color);border-color:var(--denhaag-step-marker-current-border-color);color:var(--denhaag-step-marker-current-color)}.denhaag-step-marker--current.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-current-nested-background-color,var(--denhaag-step-marker-current-background-color));border-color:var(--denhaag-step-marker-current-nested-border-color,var(--denhaag-step-marker-current-border-color));color:var(--denhaag-step-marker-current-nested-color,var(--denhaag-step-marker-current-color))}.denhaag-step-marker--disabled{background-color:var(--denhaag-step-marker-disabled-background-color);border-color:var(--denhaag-step-marker-disabled-border-color);color:var(--denhaag-step-marker-disabled-color)}.denhaag-step-marker--disabled.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-disabled-nested-background-color,var(--denhaag-step-marker-disabled-background-color));border-color:var(--denhaag-step-marker-disabled-nested-border-color,var(--denhaag-step-marker-disabled-border-color));color:var(--denhaag-step-marker-disabled-nested-color,var(--denhaag-step-marker-disabled-color))}.denhaag-step-marker--warning{background-color:var(--denhaag-step-marker-warning-background-color);border-color:var(--denhaag-step-marker-warning-border-color);color:var(--denhaag-step-marker-warning-color)}.denhaag-step-marker--warning.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-warning-nested-background-color,var(--denhaag-step-marker-warning-background-color));border-color:var(--denhaag-step-marker-warning-nested-border-color,var(--denhaag-step-marker-warning-border-color));color:var(--denhaag-step-marker-warning-nested-color,var(--denhaag-step-marker-warning-color))}.denhaag-step-marker--error{background-color:var(--denhaag-step-marker-error-background-color);border-color:var(--denhaag-step-marker-error-border-color);color:var(--denhaag-step-marker-error-color)}.denhaag-step-marker--error.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-error-nested-background-color,var(--denhaag-step-marker-error-background-color));border-color:var(--denhaag-step-marker-error-nested-border-color,var(--denhaag-step-marker-error-border-color));color:var(--denhaag-step-marker-error-nested-color,var(--denhaag-step-marker-error-color))}.denhaag-step-marker--default{background-color:var(--denhaag-step-marker-default-background-color);border-color:var(--denhaag-step-marker-default-border-color);color:var(--denhaag-step-marker-default-color)}.denhaag-step-marker--default.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-default-nested-background-color,var(--denhaag-step-marker-default-background-color));border-color:var(--denhaag-step-marker-default-nested-border-color,var(--denhaag-step-marker-default-border-color));color:var(--denhaag-step-marker-default-nested-color,var(--denhaag-step-marker-default-color))}.denhaag-step-marker__connector{height:100%;left:calc(var(--denhaag-step-marker-size)/2);outline:var(--denhaag-step-marker-connector-width,1px) var(--denhaag-step-marker-connector-style,dashed) var(--denhaag-step-marker-connector-color);position:absolute;top:0}.denhaag-step-marker__connector--main-to-main{padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-size));top:calc(var(--denhaag-step-marker-size)*-1/2)}.denhaag-step-marker__connector--main-to-nested{padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-nested-size));top:calc(var(--denhaag-step-marker-size)*-1/2)}.denhaag-step-marker__connector--nested-to-nested{padding-block-end:var(--denhaag-process-steps-sub-step-distance);top:var(--denhaag-step-marker-nested-size)}.denhaag-step-marker__connector--nested-to-main{padding-block-end:var(--denhaag-process-steps-step-distance);top:var(--denhaag-step-marker-nested-size)}.denhaag-step-marker__connector--not-checked{outline-color:var(--denhaag-step-marker-connector-not-checked-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-not-checked-outline-style,dashed);outline-width:var(--denhaag-step-marker-connector-not-checked-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--checked,.denhaag-step-marker__connector--current{outline-color:var(--denhaag-step-marker-connector-checked-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-checked-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-checked-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--warning{outline-color:var(--denhaag-step-marker-connector-warning-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-warning-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-warning-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--error{outline-color:var(--denhaag-step-marker-connector-error-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-error-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-error-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--default{outline-color:var(--denhaag-step-marker-connector-default-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-default-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-default-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}";Ee($e);var S=function(){return S=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},S.apply(this,arguments)};function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Y(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Y(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Z(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Y(e))&&(r&&(r+=" "),r+=t);return r}var L=function(e){var t=e.className,n=e.appearance,r=n===void 0?"not-checked":n,a=e.from,s=e.to,c=X(e,["className","appearance","from","to"]);return o.createElement("div",S({},c,{className:Z("denhaag-step-marker__connector","denhaag-step-marker__connector--".concat(r),"denhaag-step-marker__connector--".concat(a,"-to-").concat(s),t)}))},I=function(e){var t=e.children,n=e.appearance,r=n===void 0?"not-checked":n,a=e.nested,s=X(e,["children","appearance","nested"]);return o.createElement("div",S({},s,{className:Z("denhaag-step-marker","denhaag-step-marker--".concat(r),a&&"denhaag-step-marker--nested")}),t)};function Oe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Ce=".denhaag-process-steps__step{padding-block-end:0;padding-block-start:0;position:relative}.denhaag-process-steps__step+.denhaag-process-steps__step{margin-block-start:var(--denhaag-process-steps-step-distance)}.denhaag-process-steps{--denhaag-process-steps-step-distance:40px;--denhaag-process-steps-sub-step-distance:24px;font-family:var(--denhaag-process-steps-font-family);font-size:var(--denhaag-process-steps-font-size);line-height:var(--denhaag-process-steps-line-height);list-style:none;margin-block-end:0;margin-block-start:0;padding-inline-start:0;position:relative}.denhaag-process-steps__step-header{align-items:var(--denhaag-process-steps-step-header-align-items);display:flex;gap:16px}.denhaag-process-steps__step-header-toggle{--utrecht-button-subtle-font-size:inherit;--utrecht-button-subtle-background-color:transparent;--utrecht-button-subtle-color:auto;--utrecht-button-padding-block-end:0;--utrecht-button-padding-block-start:0;--utrecht-button-padding-inline-end:0;--utrecht-button-padding-inline-start:0;--utrecht-button-icon-gap:4px;align-items:center;appearance:none;background-color:inherit;border:0;display:flex;gap:0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0}.denhaag-process-steps__step-heading{align-items:center;color:var(--denhaag-process-steps-step-heading-color);display:flex;font-family:var(--denhaag-process-steps-step-heading-font-family);font-size:var(--denhaag-process-steps-step-heading-font-size);font-weight:var(--denhaag-process-steps-step-heading-font-weight);line-height:var(--denhaag-process-steps-step-heading-line-height);margin-block-end:0;margin-block-start:0;text-align:start}.denhaag-process-steps__step-heading--not-checked{color:var(--denhaag-process-steps-step-heading-not-checked-color)}.denhaag-process-steps__step-heading--checked{color:var(--denhaag-process-steps-step-heading-checked-color);font-size:var(--denhaag-process-steps-step-heading-checked-font-size,var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-checked-font-weight,var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--current{color:var(--denhaag-process-steps-step-heading-current-color);font-size:var(--denhaag-process-steps-step-heading-current-font-size,var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-current-font-weight,var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--warning{color:var(--denhaag-process-steps-step-heading-warning-color)}.denhaag-process-steps__step-heading--error{color:var(--denhaag-process-steps-step-heading-error-color)}.denhaag-process-steps__step-details{display:block}.denhaag-process-steps__step-details--hidden{display:none}.denhaag-process-steps__step-body{position:relative}.denhaag-process-steps__step-meta{color:var(--denhaag-process-steps-step-meta-color);font-size:var(--denhaag-process-steps-step-meta-font-size);margin-inline-start:calc(var(--denhaag-step-marker-size) + 16px);position:relative}.denhaag-process-steps__step-meta--date{color:var(--denhaag-process-steps-step-meta-date-color,var(--denhaag-process-steps-step-meta-color));font-size:var(--denhaag-process-steps-step-meta-date-font-size,var(--denhaag-process-steps-step-meta-font-size))}.denhaag-process-steps__sub-step{align-items:baseline;display:flex;flex-direction:row;gap:23px;margin-block-start:var(--denhaag-process-steps-sub-step-distance);position:relative}.denhaag-process-steps__sub-step-heading{margin-block-end:0;margin-block-start:0}";Oe(Ce);var je=function(e){var t=e.children;return o.createElement("div",{className:l("denhaag-process-steps__step-body")},t)},R=function(e){var t=e.date,n=e.children;return o.createElement("div",{className:l("denhaag-process-steps__step-meta",t&&"denhaag-process-steps__step-meta--date")},n)},Ne=function(e){var t=e.id,n=e.className,r=e.collapsed,a=r===void 0?!1:r,s=e.children;return o.createElement("div",{id:t,className:l("denhaag-process-steps__step-details",a&&"denhaag-process-steps__step-details--hidden",n)},s)},Ae=function(e){var t=e.children,n=e.className,r=e.ariaControls,a=e.expanded,s=e.onClick,c=b(e,["children","className","ariaControls","expanded","onClick"]);return o.createElement("button",v({"aria-controls":r,className:l("utrecht-button","utrecht-button--subtle","denhaag-process-steps__step-header-toggle",n),onClick:s},c),t,a?o.createElement(we,{className:l("denhaag-process-steps__step-header-toggle-icon")}):o.createElement(_e,{className:l("denhaag-process-steps__step-header-toggle-icon")}))},H=function(e){var t=e.stepStatus,n=t===void 0?"not-checked":t,r=e.nextStepStatus,a=r===void 0?"not-checked":r;return n==="checked"&&a==="error"||n==="checked"&&a==="warning"||n==="current"&&a==="error"||n==="current"&&a==="warning"?"checked":a==="not-checked"?"not-checked":n},Pe=function(e){var t;return!!(!((t=e.steps)===null||t===void 0)&&t.length)},Me=function(e){var t,n,r,a,s=e.step,c=e.nextStep,p=e.expanded,h=p===void 0?!0:p,m=e.toggleExpanded,k=h&&((n=(t=s.steps)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.status)||(c==null?void 0:c.status);return o.createElement(ne,{appearance:s.status,current:s.status==="current"},o.createElement(ae,null,o.createElement(I,{appearance:s.status},s.status==="checked"?o.createElement(B,null):s.status==="warning"?o.createElement(ze,null):s.status==="error"?o.createElement(Se,null):s.marker),m&&Pe(s)?o.createElement(Ae,{ariaControls:"".concat(s.id,"--details"),expanded:h,onClick:m},o.createElement(N,{appearance:s.status},s.title)):o.createElement(N,{appearance:s.status},s.title)),o.createElement(je,null,c&&o.createElement(L,{from:"main",to:h?"nested":"main",appearance:H({stepStatus:s.status,nextStepStatus:k})}),s.meta&&o.createElement(R,null,s.meta),s.date&&o.createElement(R,{date:!0},s.date)),((r=s.steps)===null||r===void 0?void 0:r.length)&&o.createElement(Ne,{id:"".concat(s.id,"--details"),collapsed:!h},o.createElement(F,null,(a=s.steps)===null||a===void 0?void 0:a.map(function(g,i,f){var u=f[i+1],ee=(u==null?void 0:u.status)||(c==null?void 0:c.status);return o.createElement(se,{key:i},o.createElement(I,{appearance:g.status,nested:!0},g.status==="checked"&&o.createElement(B,null)),o.createElement(oe,null,g.title),(u||c)&&o.createElement(L,{from:"nested",to:u?"nested":"main",appearance:H({stepStatus:g.status,nextStepStatus:ee})}))}))))},Te=function(e,t,n){t.includes(e)?n(t.filter(function(r){return r!==e})):n(j(j([],t,!0),[e],!1))},De=function(e){var t=e.steps,n=t===void 0?[]:t,r=e.expandedSteps,a=r===void 0?[]:r,s=e.disabledSteps,c=s===void 0?[]:s,p=e.collapsible,h=p===void 0?!1:p,m=d.useState(a),k=m[0],g=m[1];return o.createElement(F,null,n.map(function(i,f){var u=h&&i.collapsible!==!1;return o.createElement(Me,{key:i.id,step:i,expanded:u?k.includes(i.id):!0,disabled:c.includes(i.id),nextStep:n[f+1],toggleExpanded:u&&function(){Te(i.id,k,g)}})}))},Be=De;const Le=`<!-- @license CC0-1.0 -->

# Process Steps

Deze component is gebaseerd op de white-label component die bij Gemeente Den Haag is ontwikkeld. Als je een verandering wilt doorvoeren in bijvoorbeeld de CSS, dan kun je terecht in de [Git repository van Den Haag](https://github.com/nl-design-system/denhaag) met hun NL Design System componenten.

Gemeente Utrecht heeft de design tokens aangepast op de eigen huisstijl.

## BEM anatomie

BEM block: \`.denhaag-process-steps\`

BEM elementen:

- _Step list_: \`.denhaag-process-steps\` (root of component)
- _Step_ (1 of meerdere): \`.denhaag-process-steps__step\`
- _Step header_: \`.denhaag-process-steps__header\`
- _Step marker_: \`.denhaag-process-steps__marker\`
- _Sub step list_: \`.denhaag-process-steps__sub-step-list\`
- _Sub step_ (1 of meerdere): \`.denhaag-process-steps__sub-step\`
- _Sub step marker_: \`.denhaag-process-steps__sub-step-marker\`
`,Ie={"process-steps":{"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"step-heading":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},current:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"not-checked":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"step-marker":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},current:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"sub-step-marker":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},current:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"not-checked":{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"step-line":{"stroke-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},checked:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},warning:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},"step-metadata":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"step-description":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"sub-step":{},"sub-step-heading":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}},Re={denhaag:Ie};const He={title:"React Component/Process steps",id:"react-process-steps",component:Be,args:{expandedSteps:["deelname","onderzoek"],steps:[{id:"deelname",marker:1,status:"checked",steps:[{id:"1",status:"checked",title:"Aanmelding ontvangen"}],title:"Deelname aan geluidsonderzoek"},{id:"onderzoek",marker:2,status:"current",steps:[{id:"2",status:"checked",title:"Afspraak meten geluidsoverlast gemaakt"},{id:"3",status:"checked",title:"Geluidsoverlast gemeten"},{id:"4",status:"checked",title:"Onderzoek resultaten verwerkt"}],title:"Onderzoek naar geluidsoverlast"},{id:"uitvoeren",marker:3,title:"Uitvoeren van maatregelen"},{id:"klaar",marker:4,title:"Maatregelen zijn uitgevoerd"}]},parameters:{tokensPrefix:"denhaag-process-steps",tokens:re,tokensDefinition:Re,docs:{description:{component:Le}}}},x={},_=te(He);var U,G,W;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(W=(G=x.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var K,Q,V;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:"designTokenStory(meta)",...(V=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Ve=["Default","DesignTokens"];export{x as Default,_ as DesignTokens,Ve as __namedExportsOrder,He as default};
//# sourceMappingURL=ProcessSteps.stories-74187af9.js.map
