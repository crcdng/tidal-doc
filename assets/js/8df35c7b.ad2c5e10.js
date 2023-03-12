"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[467],{3905:(M,N,t)=>{t.d(N,{Zo:()=>y,kt:()=>g});var j=t(7294);function e(M,N,t){return N in M?Object.defineProperty(M,N,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[N]=t,M}function T(M,N){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);N&&(j=j.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),t.push.apply(t,j)}return t}function D(M){for(var N=1;N<arguments.length;N++){var t=null!=arguments[N]?arguments[N]:{};N%2?T(Object(t),!0).forEach((function(N){e(M,N,t[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(t,N))}))}return M}function i(M,N){if(null==M)return{};var t,j,e=function(M,N){if(null==M)return{};var t,j,e={},T=Object.keys(M);for(j=0;j<T.length;j++)t=T[j],N.indexOf(t)>=0||(e[t]=M[t]);return e}(M,N);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(M);for(j=0;j<T.length;j++)t=T[j],N.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(e[t]=M[t])}return e}var z=j.createContext({}),I=function(M){var N=j.useContext(z),t=N;return M&&(t="function"==typeof M?M(N):D(D({},N),M)),t},y=function(M){var N=I(M.components);return j.createElement(z.Provider,{value:N},M.children)},u="mdxType",L={inlineCode:"code",wrapper:function(M){var N=M.children;return j.createElement(j.Fragment,{},N)}},a=j.forwardRef((function(M,N){var t=M.components,e=M.mdxType,T=M.originalType,z=M.parentName,y=i(M,["components","mdxType","originalType","parentName"]),u=I(t),a=e,g=u["".concat(z,".").concat(a)]||u[a]||L[a]||T;return t?j.createElement(g,D(D({ref:N},y),{},{components:t})):j.createElement(g,D({ref:N},y))}));function g(M,N){var t=arguments,e=N&&N.mdxType;if("string"==typeof M||e){var T=t.length,D=new Array(T);D[0]=a;var i={};for(var z in N)hasOwnProperty.call(N,z)&&(i[z]=N[z]);i.originalType=M,i[u]="string"==typeof M?M:e,D[1]=i;for(var I=2;I<T;I++)D[I]=t[I];return j.createElement.apply(null,D)}return j.createElement.apply(null,t)}a.displayName="MDXCreateElement"},6053:(M,N,t)=>{t.r(N),t.d(N,{assets:()=>z,contentTitle:()=>D,default:()=>u,frontMatter:()=>T,metadata:()=>i,toc:()=>I});var j=t(3117),e=(t(7294),t(3905));const T={title:"Atom",permalink:"wiki/Atom/",layout:"wiki",id:"Atom"},D=void 0,i={unversionedId:"getting-started/editor/Atom",id:"getting-started/editor/Atom",title:"Atom",description:"----",source:"@site/docs/getting-started/editor/Atom.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/Atom",permalink:"/docs/getting-started/editor/Atom",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Atom.md",tags:[],version:"current",lastUpdatedBy:"Alex McLean",lastUpdatedAt:1678645167,formattedLastUpdatedAt:"Mar 12, 2023",frontMatter:{title:"Atom",permalink:"wiki/Atom/",layout:"wiki",id:"Atom"},sidebar:"docs",previous:{title:"TroubleShoot on Windows",permalink:"/docs/troubleshoot/troubleshoot_windows"},next:{title:"Pulsar",permalink:"/docs/getting-started/editor/Pulsar"}},z={},I=[],y={toc:I};function u(M){let{components:N,...T}=M;return(0,e.kt)("wrapper",(0,j.Z)({},y,T,{components:N,mdxType:"MDXLayout"}),(0,e.kt)("hr",null),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"atom logo",src:t(4864).Z,width:"256",height:"256"})),(0,e.kt)("hr",null),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"UPDATE - Jan 1, 2023:")," The Atom Editor has sunset, see the official ",(0,e.kt)("a",{parentName:"p",href:"https://github.blog/2022-06-08-sunsetting-atom/"},"Sunsetting Atom"),"\npage. Tidal has adopted ",(0,e.kt)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar"),". Tidalcycles is integrated with the Pulsar Package Manager, which supports installation and updating the tidal plugin from within Pulsar. (There is no longer a need for manual plugin install.) "),(0,e.kt)("p",null,"See the documentation on ",(0,e.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/getting-started/editor/Pulsar/"},"how to use Tidal with Pulsar"),"."),(0,e.kt)("p",null,(0,e.kt)("em",{parentName:"p"},"Note:")," Tidal users who have a working Atom editor configured with the Tidalcycles package can continue to use it. ",(0,e.kt)("em",{parentName:"p"},"However, the Atom package manager is no longer available to install or update the Tidal package and no further updates to Atom will be available.")," Tidal users are encouraged to migrate to Pulsar."),(0,e.kt)("hr",null),(0,e.kt)("p",null,"If you still have a requirement to use Atom:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("a",{parentName:"li",href:"https://github.com/atom/atom"},"Atom GitHub")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("a",{parentName:"li",href:"https://github.com/atom/atom/releases/tag/v1.63.1"},"Atom Final Release - download")),(0,e.kt)("li",{parentName:"ul"},"For the Tidalcycles package:",(0,e.kt)("ul",{parentName:"li"},(0,e.kt)("li",{parentName:"ul"},"do a manual install"),(0,e.kt)("li",{parentName:"ul"},"use the instructions on the ",(0,e.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/getting-started/editor/Pulsar/"},"Pulsar page")),(0,e.kt)("li",{parentName:"ul"},"substitute ",(0,e.kt)("inlineCode",{parentName:"li"},"~/.atom/")," for ",(0,e.kt)("inlineCode",{parentName:"li"},"~/.pulsar")," so that the package installs to Atom and not Pulsar")))))}u.isMDXComponent=!0},4864:(M,N,t)=>{t.d(N,{Z:()=>j});const j="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1NiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIzLjk2MTExNCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZGZkZmQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjYmNiY2IiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjMuOTYxMTE0JSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2IyZTE5OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA0YTE3MSIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTI4IiBjeT0iMTI4IiBmaWxsPSJ1cmwoI2EpIiByPSIxMjcuODU3Nzc4Ii8+PGNpcmNsZSBjeD0iMTI3Ljg1Nzc3OCIgY3k9IjEyOC4xNDIyMjIiIGZpbGw9InVybCgjYikiIHI9IjExNi45MDY2NjciLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS41MTExMTEgNTIuNjIyMjIyKSI+PHBhdGggZD0ibTU0Ljk0MTg0NTEgNTcuNDc0NTE2M2MtMS4zNzU1NzMzIDIuMTIwMjQ4OS0yLjcwNDc4MjIgNC4yNDk2LTMuOTg3NjI2NiA2LjM4MjA4LTEuNDAzMTY0NS0zLjg2MjQ3MTEtMi42MzUwOTM0LTcuNjY2MzQ2Ny0zLjY4NDQwODktMTEuMzc3MjA4OSAzLjczMDIwNDQtLjUzNDQ3MTEgNy42OTUwNzU1LS45NTYzMDIyIDExLjg3NDEzMzMtMS4yNDgxNDIyLTEuNDE5MDkzMyAyLjAzNDM0NjYtMi44MjE0MDQ0IDQuMTE1NjI2Ni00LjIwMjA5NzggNi4yNDMyNzExem0xMDMuMTM3ODQ4OSA3LjQ3NDkxNTVjLTQuMTMyMTI0LTMuOTY2NTc3Ny0xMC4wMzk0NjctNy42MDEyMDg5LTE3LjU1NzkwMi0xMC44MDMyLTE0LjkyNTY1NC02LjM1NjQ4LTM0LjkxODExNi0xMC40NzQ2NjY2LTU2LjI5NDk2OTEtMTEuNTk1OTQ2Ni0yLjU3NzkyLS4xMzUxMTExLTUuMDk0Njg0NC0uMjI3NTU1Ni03LjUyODY3NTUtLjI3Njc2NDUgMTYuMzIwODUzMy0xOS40ODA3NDY2IDMyLjA4MzA1NzYtMjkuODQ1OTAyMiA0MS4yNjI2NDg2LTMwLjE5NDYzMTEgMS45NDM4OTQtLjA3NDI0IDMuNTc1NzUxLjMxMDMyODkgNC44NTQzMjkgMS4xNDExOTExIDQuMjk2MjQ5IDIuNzkyMTA2NyA1LjQ4ODA3MSAxMS40NTIzMDIyIDMuMTg4NjIyIDIzLjE2NjAwODktLjQ1MzY4OSAyLjMxMjI0ODkgMS4wNTI0NDUgNC41NTQ4MDg5IDMuMzY0Njk0IDUuMDA4NzgyMiAyLjMxMjUzMy40NTIyNjY3IDQuNTU0NTI0LTEuMDUyNDQ0NCA1LjAwODc4Mi0zLjM2NDk3NzcgMy45NTI5MjQtMjAuMTM2OTYtMS41NzY2NzYtMjguNDk3MDY2NzEtNi45MTE0MzEtMzEuOTY0NzI4OTMtMi43ODQ0MjctMS44MDk5Mi02LjA5MzM2OS0yLjY1NTI4ODg5LTkuODI4OTc4LTIuNTEzMzUxMTEtMTQuMTIwMTA3LjUzNjQ2MjIyLTMzLjkwNDY0IDE1LjU5MjM5MTE0LTUxLjk1NzE5MTEgMzguODAzMzQyMjQtNy4xNDcyMzU1LjI0NjYxMzMtMTQuMDM3NjE3OC44NjM1NzMzLTIwLjQ4MzEyODkgMS44MjYxMzMzLS43MDc0MTMzLTMuMjg1MDQ4OS0xLjI1NDExNTUtNi40NjkxMi0xLjYyNDQ2MjItOS41MjEyMDg5LTEuNjE5MDU3OC0xMy4zNDM4NTc4LjM2NjY0ODktMjIuODE1ODU3OCA1LjMxMTQzMTEtMjUuMzM3NzQyMi43OTQ0NTMzLS40MDUwNDg4OSAxLjY2MjU3NzgtLjYzODI5MzMzIDIuNjU0MTUxMS0uNzEyNTMzMzMgNC40MTgyNzU2LS4zMzI1MTU1NiAxMC42NTI0NDQ1IDIuNjM2NTE1NTMgMTcuNTQyNTQyMiA4LjM1ODY4NDQzIDEuODEyMTk1NiAxLjUwNTI4IDQuNTAyNDcxMiAxLjI1NjM5MTEgNi4wMDgzMi0uNTU2NjU3OCAxLjUwNTI4LTEuODEyNzY0NCAxLjI1NjEwNjctNC41MDI3NTU1LS41NTY2NTc3LTYuMDA4MDM1NS04Ljg0OTYzNTYtNy4zNDk0NzU1OC0xNi44MDA0MjY3LTEwLjgxNjg1MzM2LTIzLjYzMjc4MjMtMTAuMzAzNDMxMTMtMi4xMTI1Njg4LjE1ODQzNTU1LTQuMDk0ODYyMi43MDM3MTU1NS01Ljg5MjI2NjYgMS42MjAxOTU1NS00LjU5MzIwODkgMi4zNDI0LTcuNzMyMDUzNCA2LjgyNzgwNDQ1LTkuMzI5NDkzNCAxMy4zMzE2MjY2OC0xLjM2ODE3NzcgNS41Njk0MjIyLTEuNTYyMTY4OCAxMi41MTI0MjY3LS41NzYyODQ0IDIwLjYzNTU5MTEuMzg5Njg4OSAzLjIxMjUxNTYuOTU5NzE1NiA2LjU1NTg3NTYgMS42OTQ0MzU2IDkuOTk4MjIyMi01LjAzOTUwMjMgMS4wNjIxMTU2LTkuNzEwMDggMi4zNTYwNTM0LTEzLjg5NjUzMzQgMy44Njg0NDQ1LTE4LjMxNTk0NjY0IDYuNjE2NDYyMi0yMi41NDQ0OTc3NSAxNS4zMzc1Mjg5LTIyLjg2NjQ4ODg3IDIxLjQ4ODY0LS4zMDc3Njg4OSA1Ljg3NTc2ODkgMi42OTk5NDY2NyAxNC42MjA0NDQ0IDE4Ljc3NTYwODg3IDIyLjkxMDU3NzcgMi4wOTQzNjQ1IDEuMDgwMzIgNC42Njc3MzM0LjI1NzQyMjMgNS43NDc3Njg5LTEuODM2NjU3NyAxLjA4MDAzNTYtMi4wOTQzNjQ1LjI1NzcwNjctNC42Njc3MzM0LTEuODM2NjU3OC01Ljc0NzQ4NDUtOS4yNDc1NzMzLTQuNzY5MjgtMTQuNDEwNTI0NDEtMTAuMTkyNDk3OC0xNC4xNjUwNDg4Ni0xNC44ODAxNDIyLjM0NTg4NDQ1LTYuNjA0OCAxMS40MTY0NjIyNi0xMy41OTUzMDY3IDMwLjI3Mzk5MTE2LTE3LjUzNDI5MzMgMS43NDY3NzMzIDYuMzA4NjkzMyAzLjk5MDQ3MTEgMTIuODYwODcxMSA2LjY4MDc0NjYgMTkuNTA0NjQtNi43Nzc3NDIyIDEyLjcyMjkxNTUtMTEuNzIzMDkzMyAyNS4yNjIwOC0xNC4yODczNiAzNi40MTU5OTk4LTEuODMyNjc1NSA3Ljk3MDEzNC0yLjM2ODI4NDQgMTQuODg5ODE0LTEuNTkyMDM1NSAyMC41NjcwNC45MDY1MjQ0IDYuNjMwNjg1IDMuNTU4Njg0NCAxMS40MTc2IDcuODgxOTU1NSAxNC4yMjc5MTEgMi4yMDQ0NDQ1IDEuNDMyNzQ3IDUuMTc1NDY2NyAyLjU1MzQ1OCA5LjA3ODA0NDUgMi41NTM0NTggNS42NTg3Mzc3LS4wMDAyODQgMTMuMjc1MDIyMi0yLjM1NzQ3NSAyMy4zNDM1MDIyLTkuNTM4ODQ0IDEuOTE4MjkzMy0xLjM2ODE3OCAyLjM2NDU4NjctNC4wMzI1NjkuOTk2MTI0NC01Ljk1MTE0Ny0xLjM2Nzg5MzMtMS45MTgyOTMtNC4wMzI1Njg5LTIuMzY0MzAyLTUuOTUxMTQ2Ni0uOTk2MTI0LTkuOTI0ODM1NiA3LjA3ODk2OC0xOC40NTQxODY3IDkuNjEyOC0yMi44MTYxNDIzIDYuNzc4MDI2LTQuNjUxODA0NC0zLjAyMzY0NC01LjYzMjg1MzMtMTIuNjQxODQ5LTIuNjI0LTI1LjcyODU2OSAxLjk5NTA5MzQtOC42Nzc1NDYgNS41NTUyLTE4LjI5NjAzNTMgMTAuMzgzMDc1Ni0yOC4yMDkyMDg2IDEuMDQ4MTc3OCAyLjI0Mzk4MjIgMi4xNDIxNTExIDQuNDg5Mzg2NyAzLjI4MzA1NzggNi43MzA1MjQ0IDkuNzE2OTA2NiAxOS4wODczNjAyIDIxLjYxMjA4ODkgMzUuNjk0MDgwMiAzMy40OTQ0NzExIDQ2Ljc2MTUyOTIgNS45ODM4NTc4IDUuNTczMTIgMTEuNzA3MTY0NCA5LjQ5NzMxNSAxNy4wMTA5MTUzIDExLjY2MzY0NCAzLjIxNzYzNiAxLjMxMzg0OSA2LjIzOTI4OSAxLjk3MDkxNiA5LjA0NDQ4IDEuOTcwOTE2IDIuNTk2NDA5LS4wMDAyODUgNS4wMDgyMTQtLjU2MzIgNy4yMTYzNTYtMS42ODkzMTYgNC40MzAyMjItMi4yNTkzNDIgNy41MTEwNC02LjUyMDg4OSA5LjE1NzEyLTEyLjY2NjAyNiAxLjQwOTQyMi01LjI2MjUwNyAxLjcyNjAwOS0xMS44MjcyLjk0MTUxMS0xOS41MTIwMzYtMS41NDI4MjctMTUuMTA5OTczLTcuMjUyNDgtMzMuNTM4NTYwMS0xNi4wNzcwODUtNTEuODkxMjAwMS0xLjAyMDg3MS0yLjEyMzk0NjYtMy41NzA2MzEtMy4wMTcxMDIyLTUuNjk0MjkzLTEuOTk2NTE1NS0yLjEyMzY2MiAxLjAyMTE1NTUtMy4wMTczODcgMy41NzA2MzExLTEuOTk2MjMxIDUuNjk0MjkzMyA4LjQwNzMyNCAxNy40ODQ4IDEzLjgzMzY3MSAzNC45MDgxNjAzIDE1LjI3ODM2NCA0OS4wNjAxMjQzIDEuMjcwNjE0IDEyLjQ0NjE1MS0uNzgwMjMxIDIxLjMwOTQ0LTUuNDg2MDggMjMuNzA5Mjk4LTQuOTQxNjUzIDIuNTE5ODkzLTEzLjc1NTczMy0xLjQzODE1MS0yMy41NzkwMjE4LTEwLjU4NzU5MS0xMS4xNzA0MTc3LTEwLjQwNDEyNS0yMi40MzA0MzU1LTI2LjE2ODMyLTMxLjcwNjE2ODgtNDQuMzg4NDA5MS0yLjEyMDUzMzQtNC4xNjU2ODg4LTQuMDc0MDk3OC04LjMzOTkxMTEtNS44NTE1OTEyLTEyLjQ4Mjg0NDQgMi4yMDYxNTEyLTMuOTQ0Njc1NiA0LjU5MTc4NjctNy45MDI3MiA3LjE0MzUzNzgtMTEuODM1NDQ4OSAyLjYwMTgxMzQtNC4wMDk4MTMzIDUuMjM1NzY4OS03Ljc4ODY1NzggNy44NzY4MzU2LTExLjMzMzQwNDQuNzAwNTg2Ni0uMDA5NjcxMSAxLjQwNDg3MTEtLjAxNjc4MjMgMi4xMTUxMjg5LS4wMTkwNTc4IDMuNjY0MjEzMy0uMDExNjYyMiA3LjU5MTUzNzcuMDkwNDUzMyAxMS42ODc4MjIyLjMwNTIwODkgMjAuNDA0MzM3MyAxLjA3MDM2NDQgMzkuMzY4MjQ5MyA0Ljk1MDQ3MTEgNTMuMzk4NDcxMyAxMC45MjUyMjY2IDEyLjM0MDYyMiA1LjI1NTY4IDE5LjUzNDc5MSAxMS43MDQwMzU2IDE5LjI0NDY1OCAxNy4yNDk1NjQ1LS4yNDY2MTQgNC43MDg0MDg5LTUuOTY3NjQ1IDkuNTc1MjUzMy0xNS42OTU5MjkgMTMuMzUyMzkxMS0yLjE5Njc2NS44NTMwNDg5LTMuMjg2MTg3IDMuMzI1MTU1Ni0yLjQzMzQyMyA1LjUyMTYzNTYuNjU1OTI5IDEuNjg5MzE1NSAyLjI2OTI5OCAyLjcyMzU1NTkgMy45Nzg4MDkgMi43MjM1NTU5LjUxMzEzOCAwIDEuMDM1NjYzLS4wOTMyOTggMS41NDI4MjctLjI5MDQxOCAxNi45MDQ1MzMtNi41NjM1NTU3IDIwLjgyMDc2NC0xNC45NjY4OTc5IDIxLjEyOTM4Ny0yMC44NjExNTU3LjI2OTY1My01LjE1MTI4ODktMi4wNDAwMzYtMTAuMTExNDMxMS02Ljg2NTA2Ny0xNC43NDMzMjQ1eiIgZmlsbD0iI2YyZjhmNiIvPjxwYXRoIGQ9Im03My42ODI5NzYyIDc2LjUxMDQ3OTNjMCA1LjE1MzI4IDQuMTczOTM3OCA5LjMzMDkxNTUgOS4zMjI2NjY2IDkuMzMwOTE1NSA1LjE0OTAxMzQgMCA5LjMyMjk1MTItNC4xNzc2MzU1IDkuMzIyOTUxMi05LjMzMDkxNTVzLTQuMTczOTM3OC05LjMzMDkxNTYtOS4zMjI5NTEyLTkuMzMwOTE1NmMtNS4xNDg3Mjg4IDAtOS4zMjI2NjY2IDQuMTc3NjM1Ni05LjMyMjY2NjYgOS4zMzA5MTU2IiBmaWxsPSIjZjFmOGYzIi8+PC9nPjwvc3ZnPg=="}}]);