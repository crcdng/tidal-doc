"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1203],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(i),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},397:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(3117),r=(i(7294),i(3905));const a={title:"Vim and Neovim",permalink:"wiki/Vim/",layout:"wiki"},o=void 0,l={unversionedId:"getting-started/editor/Vim",id:"getting-started/editor/Vim",title:"Vim and Neovim",description:"----",source:"@site/docs/getting-started/editor/Vim.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/Vim",permalink:"/docs/getting-started/editor/Vim",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Vim.md",tags:[],version:"current",lastUpdatedBy:"Alex McLean",lastUpdatedAt:1678645167,formattedLastUpdatedAt:"Mar 12, 2023",frontMatter:{title:"Vim and Neovim",permalink:"wiki/Vim/",layout:"wiki"},sidebar:"docs",previous:{title:"Pulsar",permalink:"/docs/getting-started/editor/Pulsar"},next:{title:"Emacs",permalink:"/docs/getting-started/editor/Emacs"}},s={},d=[{value:"Vim-Tidal",id:"vim-tidal",level:2},{value:"Vim: Tips and tricks",id:"vim-tips-and-tricks",level:2},{value:"Undotree",id:"undotree",level:3},{value:"Hacky custom completion",id:"hacky-custom-completion",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vimicon",src:i(1911).Z,width:"256",height:"256"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.vim.org"},"Vim")," is the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vim_(text_editor)"},"classic and ubiquitous")," text editor. This editor is famous for its minimalistic approach, flexibility, and for its unique approach to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vi#Interface"},"modal editing"),". Vim and ",(0,r.kt)("a",{parentName:"p",href:"https://neovim.io/"},"Neovim")," are free, cross-platform and open-source. They can be extended through the help of plugins, and are generally more configurable than other text editors. Vim has a very long history and has the reputation of being very stable and fast."),(0,r.kt)("p",null,"Vim is generally used by experienced users: developers, system administrators, tech enthusiasts. It has a steep learning curve, but fluency allows the user, after a while, to edit text at the speed of light and with great precision."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"vim-tidal"},"Vim-Tidal"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/d42afb94633db9b527910d87e2b3320f28c2221c1711043854976e3f8628104b/687474703a2f2f692e696d6775722e636f6d2f66724f4c4646492e676966",alt:"vimtidal"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/vim-tidal"},"Vim-Tidal")," is the recommended plugin to interact with Tidal Cycles. It will work for both ",(0,r.kt)("a",{parentName:"p",href:"https://www.vim.org/"},"Vim")," and ",(0,r.kt)("a",{parentName:"p",href:"https://neovim.io/"},"Neovim"),", and will adapt to your setup. You can use Neovim's native ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," functionality, as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux")," or other multiplexers. Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/vim-tidal#readme"},"README")," file for more information about the installation process."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"vim-tips-and-tricks"},"Vim: Tips and tricks"),(0,r.kt)("h3",{id:"undotree"},"Undotree"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"undotree",src:i(4888).Z,width:"1457",height:"805"})),(0,r.kt)("p",null,"As suggested by ",(0,r.kt)("inlineCode",{parentName:"p"},"@guiot")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org"},"Tidal Club")," Forum. You can keep track of your improvisations using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbbill/undotree"},"undotree")," plugin for Vim/Neovim. Using the undotree wisely is a great way to backtrack in time or to keep a ",(0,r.kt)("inlineCode",{parentName:"p"},"plaintext")," trace of your improvisations. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"undotree")," will record every little tiny changes in your text file. Activate the ",(0,r.kt)("inlineCode",{parentName:"p"},"undotree")," for a file by entering the ",(0,r.kt)("inlineCode",{parentName:"p"},":UndotreeToggle")," command."),(0,r.kt)("h3",{id:"hacky-custom-completion"},"Hacky custom completion"),(0,r.kt)("p",null,"You can create custom code completions by placing the following lines in your ",(0,r.kt)("inlineCode",{parentName:"p"},".vimrc")," file. This function will working only if a ",(0,r.kt)("inlineCode",{parentName:"p"},".tidal")," file is currently being edited with ",(0,r.kt)("inlineCode",{parentName:"p"},"vim-tidal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'autocmd FileType tidal call s:tidal_abbr()\nfunction! s:tidal_abbr()\n    inoreabbr billybd "[t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~]"\n    inoreabbr billysn "[~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~]"\n    inoreabbr billych "[t ~ t ~] [t ~ t ~] [t ~ t ~] [t ~ t ~]"\n    inoreabbr bluemondaybd "[t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~]"\n    inoreabbr bluemondaysn "[~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~]"\n    inoreabbr bluemondaycp "[~ ~ ~ ~] [t ~ ~ ~] [~ ~ ~ ~] [t ~ ~ ~]"\n    inoreabbr bluemondayoh "[~ ~ t ~] [~ ~ t ~] [~ ~ t ~] [~ ~ t ~]"\n    ... etc ...\nendfunction\n')),(0,r.kt)("p",null,"Simply write ",(0,r.kt)("inlineCode",{parentName:"p"},"billybd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"billysn")," to see the text being replaced by your pattern. Try to give these snippets very distinctive names so that they don't enter in conflict with language or library keywords."))}c.isMDXComponent=!0},4888:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/undotree-e18be9d421420d37356f650ba5e39ca3.png"},1911:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/vimicon-a8a4f20a07ca905559cf1ee229d7a038.png"}}]);