(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({39:"SpotlightSection-stories",255:"Alert-stories",289:"FormToggle-stories",390:"Textarea-stories",449:"PageContent-stories",520:"FormFieldTextarea-stories",796:"web-component-stories-mdx",1212:"NumberData-stories",1271:"Heading4-stories",1464:"IBANData-stories",1853:"Heading-stories",2134:"web-component-library-vue-stories-mdx",2201:"LogoButton-stories",2295:"CodeBlock-stories",2324:"Code-stories",2756:"Page-stories",2829:"FormFieldDescription-stories",2903:"BadgeStatus-stories",3674:"Icon-stories",3755:"PageHeader-stories",3917:"CustomCheckbox-stories",4059:"FlexWrapFallback-stories",4066:"DataList-stories",4248:"EidasLogo-stories",4303:"BreadcrumbNav-stories",4643:"Surface-stories",4853:"Separator-stories",4900:"Mark-stories",4962:"Table-stories",5044:"FormFieldTextbox-stories",5322:"ColumnLayout-stories",5571:"web-component-library-react-stories-mdx",5706:"Iconset-stories",5847:"DigidLogo-stories",5897:"PageFooter-stories",5978:"FormFieldCheckbox-stories",6005:"BadgeData-stories",6130:"Article-stories",6278:"Emphasis-stories",6323:"Heading3-stories",6372:"LogoImage-stories",6463:"Button-stories",6730:"Textbox-stories",6845:"Document-stories",6869:"BadgeList-stories",6878:"Checkbox-stories",6883:"SideNav-stories",6886:"FormFieldErrorMessage-stories",7049:"Logo-stories",7124:"HTMLContent-stories",7171:"ButtonLink-stories",7302:"Backdrop-stories",7525:"URLData-stories",7589:"Link-stories",7818:"BadgeCounter-stories",7901:"MapMarker-stories",7990:"Heading2-stories",8071:"Paragraph-stories",8100:"Heading1-stories",8704:"ColorSample-stories",8765:"Heading6-stories",8912:"ButtonGroup-stories",8960:"Heading5-stories",9179:"web-component-library-angular-stories-mdx",9270:"DigidButton-stories",9443:"Pagination-stories",9479:"SkipLink-stories",9667:"EherkenningLogo-stories",9710:"Drawer-stories",9742:"LinkButton-stories",9851:"ContactCardTemplate-stories"}[chunkId]||chunkId)+"."+{39:"a8ceb4c5",73:"063564a0",93:"c935005f",115:"6e76740d",135:"f0472048",158:"2c699c87",185:"c1d28632",201:"0b43d160",255:"399ac027",289:"3d425eef",308:"bc2c83ef",330:"2c1e0942",390:"b100a6b2",428:"c3168710",443:"9c0935bc",444:"53408d29",449:"eb2e4fcc",518:"dd13a6b5",520:"1baa82e7",545:"6239ea6e",558:"2db1db0f",579:"9a462d83",586:"d8cef7b5",587:"fdb76302",758:"e4869d93",776:"82e9b5d6",787:"4cb3f0e6",796:"047cf128",825:"821d527b",831:"ba1c47ee",900:"ae16e80b",993:"3d3f987a",1009:"b4a1c151",1024:"357052c3",1037:"ca999b09",1041:"dfb9fbef",1081:"1a0f7277",1101:"e67f4ecf",1114:"16c56c13",1118:"3a16679a",1143:"6da1f0e4",1189:"efeea701",1190:"325c8ce0",1212:"3f7ffe4f",1251:"654bb179",1271:"e768911c",1359:"9935599f",1396:"c9480862",1406:"5a99231f",1421:"ce4213c9",1464:"c10a1393",1492:"846dba02",1571:"97819e00",1592:"d722dac2",1604:"071901bc",1675:"ff98bf92",1677:"7524101d",1706:"51ed558a",1714:"3c469de5",1756:"ae3385f6",1767:"1470279b",1798:"f8298574",1846:"1e1a112f",1853:"c5fc74a8",1858:"845b7d18",2002:"c35d26ef",2032:"9ce22b6d",2042:"2cdbfcb4",2044:"7a665fc2",2077:"09c7e45d",2078:"66d6b466",2134:"d50695d3",2201:"342b9135",2243:"b722b7b1",2295:"edfe995d",2324:"e8a4d182",2371:"fc888139",2389:"5c07f918",2402:"860db57c",2450:"b1e72123",2522:"cb8cd981",2538:"afe86f31",2587:"e182405d",2600:"266a623c",2756:"20f01591",2790:"41ae1318",2829:"921cd11a",2903:"3d5e4e6b",2917:"fb269c5e",2931:"ca4803a1",2947:"1a58db03",2962:"8f20d915",3022:"10b12b34",3150:"889d342f",3159:"921b6e71",3173:"91f1a45b",3200:"25b9a28b",3209:"7e4ef0f0",3212:"37ed0fd2",3219:"745b3da7",3296:"d7e5fd08",3297:"56bf360b",3325:"c29c36e7",3338:"369ade19",3403:"f8010e76",3411:"8d86c343",3435:"ae2295fc",3529:"0c451e19",3563:"aa59b499",3585:"402ed806",3601:"d88918da",3674:"65da7f3f",3755:"3bb2fa64",3763:"2614b18e",3917:"ae4f4e5a",3922:"ec0628f3",3954:"6dcba526",4059:"44dc3c69",4065:"d1c16502",4066:"5c17f439",4089:"c77a9888",4105:"fc09467e",4110:"05b46a4b",4118:"ab27d1e7",4122:"61c87c00",4166:"a37e9d84",4197:"5328afe6",4202:"2f102a62",4204:"b5e01bb6",4231:"65a4d63b",4243:"7dd82fbd",4248:"ea8fe902",4303:"7739093f",4321:"38334d45",4329:"a7375a3b",4332:"322e24ba",4373:"13ebc234",4374:"963e20db",4536:"40dbd438",4538:"075947a8",4559:"9b13def9",4587:"fe5b2c71",4643:"f79dfe1c",4833:"e2ff01fa",4848:"58ce2aa9",4853:"38779cec",4900:"2bc5471b",4962:"33fb524e",4991:"7f5d58cf",5003:"2c6a8bde",5004:"dc47c013",5044:"59b05767",5229:"f6c4ede5",5260:"6a448e22",5322:"0f0208ac",5337:"1039e62c",5346:"97f8614c",5355:"63de5686",5366:"529c2ee5",5421:"b2dcea4c",5465:"883b848b",5468:"e19d9f7f",5492:"d3af7935",5509:"04e6eea3",5527:"ba389b80",5567:"3f766143",5571:"bf14822c",5580:"4ba658ec",5592:"a4f3523b",5609:"e151152b",5668:"6838af80",5693:"3061feeb",5706:"31706906",5719:"f2a39fd3",5732:"07ea8982",5756:"b02e46b3",5788:"60316cbe",5847:"0630fb87",5864:"fe1dcc93",5868:"10b84169",5888:"5eb5673b",5897:"c690c0e7",5912:"508becaf",5929:"2acc912b",5978:"badd04ce",6005:"0b72eb54",6015:"29e1aa20",6025:"a1d93414",6086:"a8712a91",6092:"5df04b43",6118:"14b779c4",6130:"176f77a4",6133:"4b58c3f6",6138:"6a8a355b",6140:"ee298227",6228:"604f331b",6229:"304fc263",6253:"91694765",6254:"ac9c9222",6278:"69217f13",6316:"e8225cf6",6323:"7632d8d3",6372:"2b977580",6416:"9ba57520",6433:"2a113a1e",6447:"743c1497",6463:"28cec86d",6484:"3d957536",6561:"a96fe9ff",6608:"8517ec22",6702:"6d2c18a0",6704:"38551c85",6727:"f023c4c0",6730:"fded3e93",6795:"354f6188",6822:"42a780e3",6843:"07d8113c",6845:"e5f6eda2",6861:"3b616204",6869:"c18247b3",6878:"97017b41",6883:"0dd16fe1",6886:"877e5282",6888:"83b5d531",7006:"ac18651b",7024:"5337ce8c",7049:"c3de1d13",7124:"b05ec247",7128:"559b9a7c",7171:"3479e7b2",7201:"cefb76f8",7241:"b0146c1d",7263:"003c3e1a",7302:"b7eb5954",7312:"fc045a83",7316:"d347b9d0",7357:"76f9a1c6",7383:"774f1f97",7408:"6dda341d",7410:"1738f6e8",7515:"ebc3f644",7524:"ec66f50b",7525:"2aa9e678",7554:"6c4c2ec4",7589:"414d27e6",7615:"4fe8f18e",7635:"6c5e5e0a",7791:"58338de9",7815:"7f274ecd",7818:"14b69248",7825:"0b30eb73",7855:"5e63582e",7860:"bd904ac2",7864:"f49cf98e",7892:"55ccfc84",7901:"76e08d2d",7938:"299b6123",7990:"46b56ab1",8071:"87096827",8098:"e06fc2a4",8100:"4f162124",8141:"7b21abfb",8158:"91cd2b8c",8173:"fed63105",8182:"d51bea53",8188:"0f27c4b1",8226:"e67a855b",8297:"435ab88a",8359:"349b5579",8383:"a9ae9297",8388:"b4e04334",8460:"ec2a620f",8501:"d8efbd1c",8528:"3bf30553",8587:"852aa61d",8635:"2821122d",8644:"b0e94f9b",8652:"808e9ae5",8704:"6bae8616",8743:"b08fea93",8765:"8c28e04c",8800:"27a68a0a",8805:"0882f5e1",8833:"dcd1c8ff",8847:"ecb53974",8855:"946311ea",8870:"640f3df9",8873:"06c84954",8912:"87707498",8938:"caa91edb",8952:"42281d31",8960:"d6dc0bf3",8982:"191e73a0",8990:"a41f670f",8993:"8ca19cb4",9089:"00c0e8ef",9097:"35fd2f31",9142:"5db7d46f",9179:"8576de76",9227:"bc9a4242",9270:"912ef183",9272:"1f4982d2",9294:"e389931b",9308:"f8e95062",9319:"58c6ac5d",9378:"dbe9f141",9385:"7f6c4603",9390:"16aae324",9439:"deff194d",9443:"9e6c2ac2",9474:"9095702f",9479:"bc192c2c",9518:"8f329b40",9533:"d6502c16",9544:"88ecf7f4",9553:"c00f501f",9560:"ed8b45d2",9565:"ff7b7bea",9587:"9ef50a2a",9667:"a85e4d88",9710:"567afe0b",9742:"c9092e8a",9783:"5f564e6d",9791:"08a07de3",9803:"0fb6f6c8",9806:"5cc36d89",9851:"365b1f7d",9933:"e8b8e61d",9971:"6f641ce1",9973:"c772e662"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@utrecht/storybook-web-component:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@utrecht/storybook-web-component:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();