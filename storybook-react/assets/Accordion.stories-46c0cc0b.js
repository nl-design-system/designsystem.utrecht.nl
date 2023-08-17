import{j as g}from"./jsx-runtime-91a467a5.js";import{A as b}from"./index-7370ff9b.js";import{t as k,d as y}from"./util-590dce94.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./extends-98964cd2.js";import"./index-1fc0ca9a.js";const v=`<!-- @license CC0-1.0 -->

# Accordion

Je kunt een accordion gebruiken lange pagina's korter te maken zodat de gebruiker niet lang moet scrollen om de relevante informatie te vinden.

De inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de sections die de zoekterm bevatten automatisch _expanded_ maken.

## Tekst

Het is belangrijk duidelijke koppen te hebben, omdat de gebruiker niet de verborgen inhoud kan "scannen" om relevante informatie te vinden.

## HTML

Gebruik een \`<button>\` element waarmee je de inhoud van de section kunt weergeven en verbergen. Gebruik altijd het \`aria-expanded\` attribuut zodat duidelijk wat het effect is van de button activeren. Gebruik \`aria-expanded="true"\` wanneer de inhoud beschikbaar is, gebruik \`aria-expanded="false"\` wanneer de inhoud verborgen is.

Plaats de button in de heading, zodat gebruikers die via een overzicht van headings door de pagina navigeren de informatie makkelijk kunnen vinden.

Plaats de inhoud van de _expandable region_ in een \`<section>\` element, zodat gebruikers die via een overzicht van _landmarks_ door de pagina navigeren de informatie makkelijk kunnen vinden (het \`section\` element maakt een \`region\` landmark). Gebruik \`aria-labelledby\` om de \`section\` te koppelen aan de heading, omdat het is belangrijk dat de landmark een duidelijk label heeft. Zonder label is de _landmark navigation_ onduidelijk omdat er meerdere regions zijn zonder naam, waarvan niet duidelijk is wat de inhoud is.

Zelfs de inhoud van een verborgen _expandable region_ moet in de HTML-code staan, wanneer je _server-side rendering_ gebruikt zodat zoekmachines dan toch toegang hebben tot de volledige inhoud. De inhoud van een verborgen _expandable region_ kan met CSS onzichtbaar gemaakt worden.

Wanneer je accordion heel veel onderdelen heeft, dan kunnen gebruikers van _landmark navigation_ moeilijker andere landmarks in de pagina vinden. Om bij de \`contentinfo\` landmark te komen (de page footer), moet de gebruiker eerst alle accordion onderdelen overslaan. Gebruik voor een accordion met heel veel onderdelen een \`<div>\` of \`<section role="presentation">\` element in plaats van het \`<section>\` element zodat het geen landmark wordt. Gebruikers kunnen de informatie dan nog wel vinden via _heading navigation_.

### Zo moet het niet

Verwijder het \`aria-expanded\` attribuut niet, want \`aria-expanded="false"\` is niet hetzelfde als geen \`aria-expanded\` attribuut hebben. "_Boolean attributes_" van ARIA werken niet hetzelfde als _boolean attributes_ van HTML. ([Boolean attributes in HTML and ARIA: what's the difference? — Hidde de Vries](https://hidde.blog/boolean-attributes-in-html-and-aria-whats-the-difference/)).

Plaats niet de heading in de button in plaats van andersom, omdat de heading dan niet toegankelijk is voor hulpmiddelen die een overzicht maken van alle headings op een pagina.

Wacht niet met het plaatsen van de inhoud van de _expandable region_ tot de gebruiker de button activeert, want zoekmachines gebruiken alleen de initiële inhoud van de pagina zonder op buttons te gebruiken.

## Visueel ontwerp

De icoon plaatsen vóór de heading is meest duidelijk. Als het icoon voor _expanded_ of _not expanded_ uitgelijnd is aan het eind van de regel, dan is het minder duidelijk dat de heading een button is die voor inklappen en uitklappen zorgt. Sommige gebruikers met een beperkt gezichtsveld kunnen het icoon bijvoorbeeld niet zien wanneer ze naar naar de heading kijken, als er grote afstand zit tussen de heading en het icoon.

## Relevante WCAG eisen

De WCAG eisen voor de button component en de heading component gelden ook voor de accordion header.

Let extra op voor deze onderdelen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordion sections is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik \`aria-controls\` voor de button, en gebruik een \`region\` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element \`<section>\`)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.
- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.
- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: \`Down Arrow\`, \`Up Arrow\`, \`Home\` en \`End\`. \`Space\` moet de button activeren, niet de pagina scrollen (gebruik \`keypressEvt.preventDefault()\`).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.

## Relevante info

- [Accordion (Sections With Show/Hide Functionality) - W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`,x={accordion:{button:{"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},icon:{"arrow-down":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<url>",inherits:!0}}},"arrow-up":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<url>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},panel:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},w={utrecht:x},f=({expanded:i,label:m,body:h})=>g(b,{sections:[{expanded:i,label:m,body:h}]}),A={title:"React Component/Accordion",id:"react-accordion",args:{label:"",body:"",expandedAccordion:!1},argTypes:{label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},body:{name:"body",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},expandedAccordion:{name:"expandedAccordion",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"API"}}},parameters:{tokensPrefix:"utrecht-accordion",tokens:k,tokensDefinition:w,docs:{description:{component:v}}},render:f},e={args:{label:"Lorem ipsum",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!0}},n={args:{label:'ما هو "لوريم إيبسوم" ؟',body:' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'},decorators:[i=>g("div",{lang:"ar",dir:"rtl",children:i()})],name:"Right-to-left"},t=y(A);var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Lorem ipsum',
    body: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.\`,
    expandedAccordion: true
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,d,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'ما هو "لوريم إيبسوم" ؟',
    body: ' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'
  },
  decorators: [Story => <div lang="ar" dir="rtl">
        {Story()}
      </div>],
  name: 'Right-to-left'
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"designTokenStory(meta)",...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const L=["Default","RTL","DesignTokens"];export{e as Default,t as DesignTokens,n as RTL,L as __namedExportsOrder,A as default};
//# sourceMappingURL=Accordion.stories-46c0cc0b.js.map
