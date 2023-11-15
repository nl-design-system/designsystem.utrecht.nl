/*! For license information please see release-strategy-stories-mdx.59b18ab2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[4923],{"./stories/release-strategy.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>release_strategy_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.15_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),Markdown=__webpack_require__("../../documentation/components/Markdown.jsx");const release_strategyraw_namespaceObject="---\ntitle: Release strategie\nhide_title: true\nhide_table_of_contents: false\nsidebar_label: Release strategie\nsidebar_position: 1\npagination_label: Release strategie\ndescription: Wat betekenen de verschillende statussen van de componenten?\nkeywords:\n  - Release strategie\n  - versionering\n  - Productie\n  - Beta\n---\n\n\x3c!-- @license CC0-1.0 --\x3e\n\n# Release strategie\n\nWe gebruiken voor het Design System een status per component of groep tokens. Hieronder worden de statussen uitgelegd, met wat je kan verwachten als een document een bepaalde status heeft.\n\n## Naamgeving en versionering\n\n| Description                                             | npm version     | release type  |\n| ------------------------------------------------------- | --------------- | ------------- |\n| Productie: Bugfix of verbetering met 'breaking changes' | `>=2.0.0`       | major version |\n| Productie: Verbetering zonder 'breaking changes'        | `^1.1.0`        | minor version |\n| Productie: Bugfix zonder 'breaking changes'             | `~1.0.1`        | patch version |\n| Productie: Eerste stabiele release                      | `1.0.0`         | release       |\n| Beta                                                    | `1.0.0-beta.0`  | pre-release   |\n| Alpha                                                   | `1.0.0-alpha.0` | pre-release   |\n| Work in Progress                                        | `1.0.0-alpha.0` | pre-release   |\n\n### Componenten en tokens met Productie-status\n\nGeteste, stabiele componenten en tokens. Als er iets veranderd met deze componenten zijn dat vooral patches en minor releases. Verandering worden gecommuniceerd via het versienummer en de changelog.\n\n### Componenten en tokens met Beta-status\n\nDeze componenten en tokens worden gebruikt in specifieke situaties. Componenten en tokens kunnen nog veranderen op basis van feedback. Breaking changes kunnen gebeuren.\n\n### Componenten en tokens met Alpha-status\n\nComponenten en tokens worden gebruikt in prototypes en projecten die nog in ontwikkeling zijn. Componenten en tokens kunnen nog veranderen op basis van feedback en expert reviews. Breaking Changes zullen onaangekondigd gebeuren.\n\n### Componenten en tokens met Work in progress-status\n\nGebruik deze componenten en tokens niet op een productie-omgeving. Alleen voor intern of experimenteel gebruik.\n\n## Proces\n\nWe volgen het onderstaande proces als we kijken wanneer een component naar de volgende fase kan.\n\n### Work in progress\n\n- Component/ontwerp maken in Figma.\n- Component maken in GitHub/Storybook.\n- Definition of Done nalopen.\n- Stempel Team UX zetten.\n\nAls aan alle stappen is voldaan krijgt het component de Alpha status.\n\n### Alpha\n\n- Kwaliteit van ontwerp wordt nagekeken door expert (Zal vaak de Huisstijl zijn).\n- Kwaliteit van code wordt nagekeken door expert (Frameless).\n- Informeren Architectuur, IPM'ers, Internetadviseurs, Redacteuren en webmasters.\n\nAls aan alle stappen is voldaan krijgt het component de Beta status.\n\n### Beta\n\n- Componenten worden gebruikt in de testomgeving van een applicatie.\n- Componenten zijn getoetst op toegankelijkheid (WCAG).\n\nAls aan alle stappen is voldaan krijgt het component de Productie status.\n\n### Productie\n\n- Componenten worden gebruikt in de productieomgeving van een applicatie.\n\n## Commit syntax\n\nOm overzicht te houden in onze commits en uiteindelijk automatische release notes te kunnen maken gebruiken we de volgende commit syntax:\n\n```text\n<type>(<scope>): <onderwerp>\n<LEGE REGEL>\n<body>\n<LEGE REGEL>\n<footer>\n```\n\n**Type**. **body** en **onderwerp** zijn verplicht. **Scope** en **footer** zijn optioneel.\n\n- Type: beschrijft het soort verandering waar het om gaat.\n- Scope: beschrijft op welke onderdelen van het design systeem de verandering invloed heeft.\n- Onderwerp: Een korte beschrijving van de verandering in maximaal vijf woorden. De uitgebreidere beschrijving komt in body.\n- Body: Uitgebreidere toelichting over de verandering.\n- Footer: Referenties naar issues die hiermee opgelost zijn.\n\n### Voorbeelden van commit syntax\n\nVoorbeeld 1:\n\n```text\nstyle(kleuren): blue-30 verwijderd\n\n--utrecht-blue-30 is vervangen door --utrecht-blue-35.\n\nPR close #44450\n```\n\nVoorbeeld 2:\n\n```text\nfix(release): need to depend on latest rxjs and zone.js\n\nThe version in our package.json gets copied to the one we publish, and users need the latest of these.\n```\n\n### Verschillende types commits\n\n- **docs:** Veranderingen in de documentatie.\n- **style:** Veranderingen die het uiterlijk van iets veranderen.\n- **feat:** Functionaliteit aangepast of toegevoegd.\n- **fix:** Een bugfix.\n- **perf:** Een verandering die de performance verbetert.\n- **refactor:** Een verandering in code die geen bugfix en die ook geen feature toevoegt.\n- **test:** Aanpassen van tests.\n- **build:** Verandering in het build-system of in externe afhankelijkheden. Voorbeeldscopes: gulp, broccoli, npm.\n- **ci:** Veranderingen in onze CI configuratiebestanden en scripts. Voorbeeldscopes: Travis, Circle, BrowserStack, SauceLabs.\n\n## Bron\n\n- <https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type>\n- <https://www.conventionalcommits.org/en/v1.0.0/>\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utrecht/Release Strategie"}),"\n",(0,jsx_runtime.jsx)(Markdown.U,{children:release_strategyraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Release Strategie",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const release_strategy_stories=componentMeta},"../../documentation/components/Markdown.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Markdown});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Markdown=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,{children:children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm,"")});Markdown.displayName="Markdown"}}]);