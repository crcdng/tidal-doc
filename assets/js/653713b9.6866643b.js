"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={title:"Patterns",id:"patterns"},l=void 0,i={unversionedId:"reference/patterns",id:"reference/patterns",title:"Patterns",description:'You make music with Tidal by creating patterns. Patterns are always declared using a specific name, d1 ... d9, p "dada", p 123123, followed by the content of the pattern. These patterns are connections to the SuperDirt synthesizer that you can use to play audio samples, synthesizers, and so on. The following example is using four different patterns, separated by a blank line:',source:"@site/docs/reference/patterns.md",sourceDirName:"reference",slug:"/reference/patterns",permalink:"/docs/reference/patterns",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/patterns.md",tags:[],version:"current",lastUpdatedBy:"Alex McLean",lastUpdatedAt:1678645167,formattedLastUpdatedAt:"Mar 12, 2023",frontMatter:{title:"Patterns",id:"patterns"},sidebar:"reference",previous:{title:"Cycles",permalink:"/docs/reference/cycles"},next:{title:"Pattern Structure",permalink:"/docs/reference/pattern_structure"}},s={},p=[{value:"Classic pattern names",id:"classic-pattern-names",level:2},{value:"Patterns by number",id:"patterns-by-number",level:2},{value:"Patterns by name",id:"patterns-by-name",level:2},{value:"Doing things once",id:"doing-things-once",level:2},{value:"Stop patterns",id:"stop-patterns",level:2},{value:"Stop a single pattern",id:"stop-a-single-pattern",level:3},{value:"Stop everything",id:"stop-everything",level:3},{value:"Panic",id:"panic",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You make music with ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," by creating patterns. Patterns are always declared using a specific name, ",(0,r.kt)("inlineCode",{parentName:"p"},"d1 ... d9"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'p "dada"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p 123123"),", followed by the content of the pattern. These patterns are ",(0,r.kt)("inlineCode",{parentName:"p"},"connections")," to the ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt")," synthesizer that you can use to play audio samples, synthesizers, and so on. The following example is using four different patterns, separated by a blank line: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'-- a bass drum\nd1 $\xa0s "bd ~ bd ~"\n\n-- high-hat pattern\nd2 $\xa0s "[~ hh]*2"\n\n-- 1.. 1.. 1.. 1..\nd3 $ s "numbers:1"\n\n-- clap\nd4 $\xa0s "cp cp cp"\n')),(0,r.kt)("h2",{id:"classic-pattern-names"},"Classic pattern names"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"d1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"d16")," are considered, historically, to be the classic pattern names. Each pattern will be associated to an ",(0,r.kt)("inlineCode",{parentName:"p"},"orbit")," (a track for effects and audio output)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"d1 ...\nd2 ...\nd3 ...\nd4 ...\netc...\n")),(0,r.kt)("h2",{id:"patterns-by-number"},"Patterns by number"),(0,r.kt)("p",null,"As an alternative, you can type ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," (for ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern"),") followed by any number to get a new pattern : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p 1234 $\xa0s "bd bd"\n\np 4321 $ s "hh hh"\n')),(0,r.kt)("h2",{id:"patterns-by-name"},"Patterns by name"),(0,r.kt)("p",null,'If you don\'t like numbers for some reason, you can also give "names" to your patterns:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "romeo" $ s "bd bd"\n\np "juliet" $ s "hh*4"\n')),(0,r.kt)("h2",{id:"doing-things-once"},"Doing things once"),(0,r.kt)("p",null,"Sometimes, you don't really want a pattern but something that will only play ",(0,r.kt)("inlineCode",{parentName:"p"},"once"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"once")," function does that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'once $\xa0s "trump"\n')),(0,r.kt)("h2",{id:"stop-patterns"},"Stop patterns"),(0,r.kt)("p",null,"There are some very convenient commands you can use to stop patterns."),(0,r.kt)("h3",{id:"stop-a-single-pattern"},"Stop a single pattern"),(0,r.kt)("p",null,"To stop a specific pattern, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"silence")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "loudpattern" $ silence\n')),(0,r.kt)("p",null,"This function will stop your pattern next cycle."),(0,r.kt)("h3",{id:"stop-everything"},"Stop everything"),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"hush")," will stop all the patterns currently running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hush\n")),(0,r.kt)("h3",{id:"panic"},"Panic"),(0,r.kt)("p",null,"Sometimes, things can go a little bit crazy. For instance, you can end up with numerous synthesizers stacking on the top of each other, leading a gradual loss of control. If you are panicking or if you are afraid, just enter ",(0,r.kt)("inlineCode",{parentName:"p"},"panic"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"panic\n")),(0,r.kt)("p",null,"It will behave just like ",(0,r.kt)("inlineCode",{parentName:"p"},"hush"),", but with a twist: it will also kill all the synthesizers/audio samples currently running on the ",(0,r.kt)("strong",{parentName:"p"},"SuperDirt")," side. You should be back to total silence in no time."))}u.isMDXComponent=!0}}]);