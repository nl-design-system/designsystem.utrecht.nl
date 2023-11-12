(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({39:"SpotlightSection-stories",255:"Alert-stories",289:"FormToggle-stories",390:"Textarea-stories",449:"PageContent-stories",520:"FormFieldTextarea-stories",796:"web-component-stories-mdx",1212:"NumberData-stories",1271:"Heading4-stories",1464:"IBANData-stories",1853:"Heading-stories",2134:"web-component-library-vue-stories-mdx",2201:"LogoButton-stories",2295:"CodeBlock-stories",2324:"Code-stories",2756:"Page-stories",2829:"FormFieldDescription-stories",2903:"BadgeStatus-stories",3674:"Icon-stories",3755:"PageHeader-stories",3917:"CustomCheckbox-stories",4059:"FlexWrapFallback-stories",4066:"DataList-stories",4248:"EidasLogo-stories",4303:"BreadcrumbNav-stories",4643:"Surface-stories",4853:"Separator-stories",4900:"Mark-stories",4962:"Table-stories",5044:"FormFieldTextbox-stories",5322:"ColumnLayout-stories",5571:"web-component-library-react-stories-mdx",5706:"Iconset-stories",5847:"DigidLogo-stories",5897:"PageFooter-stories",5978:"FormFieldCheckbox-stories",6005:"BadgeData-stories",6130:"Article-stories",6278:"Emphasis-stories",6323:"Heading3-stories",6372:"LogoImage-stories",6463:"Button-stories",6730:"Textbox-stories",6845:"Document-stories",6869:"BadgeList-stories",6878:"Checkbox-stories",6883:"SideNav-stories",6886:"FormFieldErrorMessage-stories",7049:"Logo-stories",7124:"HTMLContent-stories",7171:"ButtonLink-stories",7302:"Backdrop-stories",7525:"URLData-stories",7589:"Link-stories",7818:"BadgeCounter-stories",7901:"MapMarker-stories",7990:"Heading2-stories",8071:"Paragraph-stories",8100:"Heading1-stories",8704:"ColorSample-stories",8765:"Heading6-stories",8912:"ButtonGroup-stories",8960:"Heading5-stories",9179:"web-component-library-angular-stories-mdx",9270:"DigidButton-stories",9443:"Pagination-stories",9479:"SkipLink-stories",9667:"EherkenningLogo-stories",9710:"Drawer-stories",9742:"LinkButton-stories",9851:"ContactCardTemplate-stories"}[chunkId]||chunkId)+"."+{35:"b048996b",39:"a8ceb4c5",73:"063564a0",97:"cb1f047b",164:"d6fafa83",210:"ff325fd9",255:"399ac027",289:"3d425eef",317:"dbe56413",326:"9ee74dc7",380:"2aa177c9",390:"b3b94aef",396:"09caa955",410:"653d4238",417:"01660460",431:"b246a758",449:"eb2e4fcc",453:"13a87f63",461:"03fbba0d",520:"1baa82e7",608:"44866bd7",609:"f8f34cd2",616:"75f1585b",645:"9714c345",717:"50b066d6",746:"db024733",776:"926650fc",795:"730eb7fc",796:"663b0ef5",804:"b5ac2542",816:"63f8e7d8",861:"e807fb4c",967:"ab5c297b",997:"88bc0ae4",1002:"78f6eb53",1127:"f0de1f79",1183:"3b1a5b8c",1212:"3f7ffe4f",1223:"09e54767",1233:"f3d7c784",1271:"e768911c",1290:"e50f5fe1",1336:"68c1baaa",1397:"81efd11e",1464:"c10a1393",1477:"43ce13bd",1542:"095f617a",1660:"b6e7cbb2",1793:"0f17e003",1795:"1479c0bf",1805:"923b9e46",1830:"1bfb62e9",1853:"c5fc74a8",1865:"5cc620de",1870:"dde3c520",1884:"c4b7ea61",1897:"cd62dac5",1968:"6c8e8d93",1994:"663eb2a5",2058:"19b51437",2134:"a75adca7",2138:"e7b502e4",2184:"ffed9afe",2201:"342b9135",2295:"edfe995d",2324:"e8a4d182",2399:"a2a19f70",2424:"e2ab5895",2496:"57febbb8",2520:"399dbaab",2549:"89fc8db9",2592:"c42730ab",2756:"20f01591",2829:"921cd11a",2834:"8d475989",2845:"c2bfbbfa",2868:"56cab3a4",2888:"a487000c",2903:"3d5e4e6b",2904:"9ffb7d11",2906:"83758292",2925:"a005c038",3001:"4e33da9d",3030:"70ad72e6",3034:"45657787",3083:"48676409",3148:"4260a071",3188:"113757f7",3345:"9235dde0",3376:"f8bd4ab0",3456:"2a6ddc0d",3469:"7b480646",3493:"6464159b",3537:"06bfa96c",3545:"b8eb0ef8",3592:"d600e8a7",3593:"04166fa5",3634:"a5810e95",3655:"df6fb7ec",3674:"65da7f3f",3721:"a57e1310",3728:"095d3baf",3732:"5f54587e",3755:"3bb2fa64",3765:"678ae460",3771:"36da70b9",3775:"00409dc6",3793:"c2bf0e15",3822:"d88af211",3844:"1af5e195",3895:"c5fc47a7",3901:"39b921b2",3917:"ae4f4e5a",3918:"6e43f6f0",3927:"412ffa1c",3954:"260704fd",4022:"eab15e50",4059:"44dc3c69",4066:"4733123a",4141:"652edfe5",4160:"32cfe848",4223:"3fb266f2",4248:"ea8fe902",4284:"a0c93a58",4299:"81fa0c3d",4303:"7739093f",4307:"49fa6182",4329:"35dafb80",4342:"d1f6154f",4351:"c9107354",4384:"2e121b75",4394:"4b17add3",4402:"7452eb9d",4404:"8d9b2dc7",4445:"0240feaa",4501:"89d59339",4587:"fe5b2c71",4630:"56beabf1",4643:"f79dfe1c",4750:"4dcab35b",4756:"1b79363d",4758:"823b1b99",4828:"9bd72207",4844:"b735f07c",4853:"38779cec",4881:"7b89b732",4900:"2bc5471b",4951:"6aae1fb4",4952:"8def1978",4962:"33fb524e",4978:"d1adc5f5",5019:"cdc104da",5044:"59b05767",5048:"3ccc2b00",5050:"783b9a6d",5071:"a559e775",5076:"0ee41196",5084:"30df7c19",5087:"6a69401f",5117:"29c88361",5133:"95da7567",5157:"13470344",5170:"fd417e74",5269:"b64bbd2c",5322:"0f0208ac",5324:"3e8f591e",5364:"3d33ca81",5373:"0370dc5e",5420:"47c3c6af",5433:"f6ec6901",5439:"a6efff8d",5512:"4c530b67",5546:"46d829cc",5569:"f6362560",5571:"b506f2ea",5660:"0b94f331",5706:"31706906",5780:"b892cf8d",5788:"71f4e2a1",5792:"6ffd4333",5803:"80200343",5821:"54d13169",5836:"d2fd12b6",5841:"689ef70f",5845:"81aa21f0",5847:"0630fb87",5897:"c690c0e7",5920:"1098f656",5978:"badd04ce",5982:"58236caf",6005:"0b72eb54",6058:"bf92806d",6063:"2509bf77",6066:"c448df20",6092:"5df04b43",6093:"72a9bb75",6100:"8d07f396",6130:"176f77a4",6176:"e5397324",6196:"f22b3fb6",6278:"69217f13",6287:"0789a7de",6293:"141bedee",6323:"7632d8d3",6342:"6fadb4f2",6366:"47ce3835",6372:"2b977580",6424:"b532ad61",6450:"6801a442",6463:"66ca7a4b",6466:"8f550801",6488:"e0b06900",6500:"73dbc3b5",6505:"eaf87df8",6511:"227da927",6517:"99971a0f",6526:"a61596d0",6540:"9e39afe0",6562:"e7c765c3",6576:"3e70ea42",6730:"7b2b3850",6797:"077950d5",6845:"e5f6eda2",6869:"c18247b3",6878:"97017b41",6883:"0dd16fe1",6886:"877e5282",6903:"645db6b4",6919:"c656bfc4",6962:"6fdc475a",6998:"13788475",7e3:"b79f70a1",7002:"2349a1f2",7040:"a0cec7f8",7049:"c3de1d13",7098:"1275e9dd",7122:"24ef6976",7124:"b05ec247",7125:"9ddd8602",7167:"2453a11d",7171:"3479e7b2",7178:"4724e4f5",7269:"3a620c60",7302:"b7eb5954",7374:"b403979f",7410:"1738f6e8",7457:"39f89425",7525:"2aa9e678",7526:"680663b2",7573:"7fb5fee5",7576:"8f6b839a",7589:"414d27e6",7615:"8dc71404",7668:"2660948b",7675:"8dfe8395",7680:"d4a607ce",7735:"edbb8c7d",7742:"93e72787",7751:"a8b692b0",7763:"b437afcf",7766:"eb97aeb3",7768:"17ab8365",7797:"51a5a279",7818:"14b69248",7831:"57aa38a9",7871:"06ce5667",7901:"76e08d2d",7939:"0e83a24e",7956:"dd883b4a",7987:"b64cde73",7990:"46b56ab1",8e3:"8bf2c300",8010:"9f122b8f",8071:"87096827",8088:"626b36ad",8100:"4f162124",8106:"e8a53604",8188:"8157947f",8277:"0587838a",8281:"df0205db",8332:"4d25df96",8392:"01fa3561",8393:"9f43c426",8565:"a70a3608",8577:"89228e3b",8626:"1c901dde",8702:"f42be2fc",8704:"6bae8616",8765:"8c28e04c",8805:"e0143551",8807:"5be26bae",8830:"449fdf20",8852:"a288dd95",8854:"74772385",8856:"b3cac9bb",8895:"3e067066",8900:"374a4d4d",8912:"722bb995",8924:"d6f318c7",8960:"d6dc0bf3",8970:"04ca7408",9001:"f310ebd6",9024:"f179c25f",9074:"668eba71",9119:"a11856f0",9127:"7f782174",9177:"b0f0bb9d",9179:"9ed2fada",9194:"de05d024",9234:"2a886dd1",9270:"912ef183",9276:"9bab5693",9347:"6dc70130",9370:"70dd1352",9377:"4a2f2f8a",9443:"9e6c2ac2",9479:"bc192c2c",9500:"f18cef81",9527:"414bc934",9545:"c4b4669d",9630:"3aeb6f6b",9667:"a85e4d88",9706:"5430fe52",9710:"567afe0b",9742:"381f3cbc",9838:"3c15b4f1",9851:"365b1f7d",9901:"7a34b93f",9970:"1daf700f",9999:"fa93e977"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@utrecht/storybook-web-component:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@utrecht/storybook-web-component:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_utrecht_storybook_web_component=self.webpackChunk_utrecht_storybook_web_component||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();