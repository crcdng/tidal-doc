(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var l=n(3),i=n(7),a=(n(0),n(217)),r={title:"Windows (manual)",permalink:"wiki/Windows_installation/",layout:"wiki"},o={unversionedId:"getting-started/Windows_installation",id:"getting-started/Windows_installation",isDocsHomePage:!1,title:"Windows (manual)",description:"Easy install",source:"@site/docs/getting-started/Windows_installation.md",slug:"/getting-started/Windows_installation",permalink:"/docs/getting-started/Windows_installation",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/Windows_installation.md",version:"current",lastUpdatedBy:"Pierre Krafft",lastUpdatedAt:1663228171},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Required Prerequisites",id:"required-prerequisites",children:[]},{value:"Optional Prerequisites",id:"optional-prerequisites",children:[]}]},{value:"Install TidalCycles",id:"install-tidalcycles",children:[]},{value:"Install SuperDirt",id:"install-superdirt",children:[]},{value:"Install Atom Extension",id:"install-atom-extension",children:[]},{value:"Test Your Installation",id:"test-your-installation",children:[]},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("translate",null,Object(a.b)("h1",{id:"easy-install"},"Easy install"),Object(a.b)("p",null,"For an easy, automated install experience, see the ",Object(a.b)("a",{parentName:"p",href:"/wiki/Windows_choco_install",title:"wikilink"},"Windows choco\ninstall"),"."),Object(a.b)("h1",{id:"manual-install"},"Manual install"),Object(a.b)("p",null,"If you prefer to install the different parts of a Tidal environment by\nhand, perhaps because you already have SuperCollider or Haskell\ninstalled, then follow the below instructions."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("h3",{id:"required-prerequisites"},"Required Prerequisites"),Object(a.b)("p",null,"Before installing Tidal, make sure the following are installed first:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Haskell Platform - Please note! There's a bug in the windows haskell\ninstaller, please install ",Object(a.b)("a",{parentName:"li",href:"https://downloads.haskell.org/platform/8.6.5/HaskellPlatform-8.6.5-core-x86_64-setup.exe"},"this\nversion"),"\n(Haskell 8.6.5 'full' install) and it should work"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://atom.io/"},"Atom Editor")," (if you don't like the atom editor\nfor some reason, please check out the ",Object(a.b)("a",{parentName:"li",href:"/wiki/List_of_tidal_editors",title:"wikilink"},"list of\nalternatives"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://supercollider.github.io/downloads"},"SuperCollider")," (pick the\nlatest version)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),Object(a.b)("h3",{id:"optional-prerequisites"},"Optional Prerequisites"),Object(a.b)("p",null,"The following is optional, but recommended:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," - you\nmay need the SuperCollider sc3-plugins if you want to use any of the\nsynths included in SuperDirt. Most of the examples in the\ndocumentation will still work, so you could skip this step and\nreturn to it later.")),Object(a.b)("h2",{id:"install-tidalcycles"},"Install TidalCycles"),Object(a.b)("p",null,"Open a Command Prompt (or PowerShell), then type and run these two\ncommands:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cabal\xa0v1-update"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cabal\xa0v1-install\xa0tidal")),Object(a.b)("p",null,"If you've never installed TidalCycles before, then the\n",Object(a.b)("inlineCode",{parentName:"p"},"cabal v1-install tidal")," step may take some time."),Object(a.b)("p",null,"If you see an error with the network library, then you need to fix\nsomething with your Haskell install. You can ",Object(a.b)("a",{parentName:"p",href:"https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3"},"find instructions\nhere"),"."),Object(a.b)("h2",{id:"install-superdirt"},"Install SuperDirt"),Object(a.b)("p",null,"Start SuperCollider, and in the editor window paste in the following\nline of code:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),Object(a.b)("p",null,"Run the code by clicking on it, to make sure the cursor is on this line,\nthen hold down Shift and press Enter."),Object(a.b)("p",null,"It'll take a while to install. You'll see something like the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-plaintext"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:28--\x3e\n*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.\n")),Object(a.b)("h2",{id:"install-atom-extension"},"Install Atom Extension"),Object(a.b)("p",null,"Start Atom, and install the TidalCycles plugin. You can find it via the\nmenus under edit ",">"," settings ",">"," install, then typing \u201ctidalcycles\u201d into\nthe search box. Once that\u2019s installed, restart atom."),Object(a.b)("h2",{id:"test-your-installation"},"Test Your Installation"),Object(a.b)("p",null,"Now you are ready to ",Object(a.b)("a",{parentName:"p",href:"/wiki/Start_tidalcycles_and_superdirt_for_the_first_time",title:"wikilink"},"Start TidalCycles and SuperDirt for the first\ntime"),".")),Object(a.b)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),Object(a.b)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}u.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var l=n(0),i=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=l,h=d["".concat(r,".").concat(b)]||d[b]||p[b]||a;return n?i.a.createElement(h,o(o({ref:t},c),{},{components:n})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);