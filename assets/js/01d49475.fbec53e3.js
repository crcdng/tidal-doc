(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return n?l.a.createElement(h,s(s({ref:t},c),{},{components:n})):l.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(217)),r={title:"MacOS",permalink:"wiki/MacOS_automated_installation/",layout:"wiki"},s={unversionedId:"getting-started/macos_install",id:"getting-started/macos_install",isDocsHomePage:!1,title:"MacOS",description:"------",source:"@site/docs/getting-started/macos_install.md",slug:"/getting-started/macos_install",permalink:"/docs/getting-started/macos_install",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/macos_install.md",version:"current",lastUpdatedBy:"Pierre Krafft",lastUpdatedAt:1663228171,sidebar:"docs",previous:{title:"Linux",permalink:"/docs/getting-started/linux_install"},next:{title:"Windows",permalink:"/docs/getting-started/windows_install"}},o=[{value:"Automatic installation (script)",id:"automatic-installation-script",children:[{value:"What is the script doing with my computer?",id:"what-is-the-script-doing-with-my-computer",children:[]}]},{value:"Manual installation",id:"manual-installation",children:[{value:"Installation process",id:"installation-process",children:[]}]},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"automatic-installation-script"},"Automatic installation (script)"),Object(i.b)("p",null,"You can run the installation script by opening a terminal window, pasting in the following and pressing enter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/tidalcycles/tidal-bootstrap/master/tidal-bootstrap.command -sSf | sh\n")),Object(i.b)("p",null,"It will probably ask for your password. As you type, characters won't be echoed to the screen. A lot of confusing info will scroll past. Just let it run until the end. Tidal should thereafter be installed on your computer."),Object(i.b)("h3",{id:"what-is-the-script-doing-with-my-computer"},"What is the script doing with my computer?"),Object(i.b)("p",null,"The script installs the tools mentioned in TidalCycles ",Object(i.b)("a",{parentName:"p",href:"../getting-started/Linux_installation"},"manual installation guide"),". In particular, the script\nchecks if the following programs are installed on the system, and\ninstalls them if they are missing."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://supercollider.github.io/"},"SuperCollider")," (and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://atom.io/"},"Atom")," (and the ",Object(i.b)("a",{parentName:"li",href:"https://atom.io/packages/tidalcycles"},"Tidal Cycles Plugin"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.haskell.org/"},"Haskell")," Language (",Object(i.b)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Ghcup"),")"),Object(i.b)("li",{parentName:"ul"},"The Tidal Pattern engine (Tidal Cycles itself)")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"manual-installation"},"Manual installation"),Object(i.b)("p",null,"Before installing Tidal, make sure to install ",Object(i.b)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell")," (via ",Object(i.b)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Ghcup"),"), ",Object(i.b)("a",{parentName:"p",href:"https://supercollider.github.io/downloadss"},"SuperCollider")," with  ",Object(i.b)("a",{parentName:"p",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins"),",   ",Object(i.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". You also need to choose and install a text editor for interacting with Tidal Cycles (see the sidebar)."),Object(i.b)("h3",{id:"installation-process"},"Installation process"),Object(i.b)("h4",{id:"ghcup"},"Ghcup"),Object(i.b)("p",null,"In a terminal window, we will add the path to our GHC installation to a\nfile that is executed by our terminal every time it loads. For macOS 10.14 or before, the terminal uses bash, so the file we need\nto modify is .bashrc:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'. "$HOME/.ghcup/env"\necho \'. $HOME/.ghcup/env\' >> "$HOME/.bashrc"\n')),Object(i.b)("p",null,"For macOS10.15 Catalina, the terminal uses zsh, so the file we need to\nmodify is .zshrc:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'. "$HOME/.ghcup/env"\necho \'. $HOME/.ghcup/env\' >> "$HOME/.zshrc"\n')),Object(i.b)("p",null,"After this, we will use cabal to first update it package directory, and\nthen to install the TidalCycles library. We will also run these two\ncommands every time we want to update our TidalCycles library to the\nlatest version."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cabal update\ncabal install tidal --lib\n")),Object(i.b)("p",null,"If you've never installed TidalCycles before, then the\n",Object(i.b)("inlineCode",{parentName:"p"},"cabal install tidal --lib")," step may take some time. At the end of the\ncommand output, it should say ",Object(i.b)("inlineCode",{parentName:"p"},"Installed tidal-x.x.x")," (where x.x.x is\nthe latest version number) without any errors."),Object(i.b)("h4",{id:"superdirt"},"SuperDirt"),Object(i.b)("p",null,"Start your freshly installed version of SuperCollider. Paste the following line of code in the text editor you see and press Cmd+Return to evaluate :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),Object(i.b)("p",null,"Run the code by clicking on it, to make sure the cursor is on this line,\nthen hold down Shift and press Enter."),Object(i.b)("p",null,"It'll take a while to install. You'll see something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:31--\x3e\n*** Welcome to SuperCollider 3.11.2. *** For help press Ctrl-D.\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),Object(i.b)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}p.isMDXComponent=!0}}]);