"use strict";(self.webpackChunkgreentree_docs=self.webpackChunkgreentree_docs||[]).push([[3403],{3536:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=t(4848),s=t(8453);const o={},a="No Audio in Livestream",r={id:"common-issues/audio-issues/no-livestream-audio",title:"No Audio in Livestream",description:"Problem",source:"@site/docs/common-issues/audio-issues/no-livestream-audio.md",sourceDirName:"common-issues/audio-issues",slug:"/common-issues/audio-issues/no-livestream-audio",permalink:"/docs/common-issues/audio-issues/no-livestream-audio",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"No Audio in While Playing Video",permalink:"/docs/common-issues/audio-issues/"},next:{title:"Projection Issues",permalink:"/docs/category/projection-issues"}},c={},h=[{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3}];function d(e){const i={admonition:"admonition",em:"em",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"no-audio-in-livestream",children:"No Audio in Livestream"}),"\n",(0,n.jsx)(i.h3,{id:"problem",children:"Problem"}),"\n",(0,n.jsx)(i.p,{children:"If the congregation / audience is getting audio, the levels are changing in ProPresenter, but the live stream isn't getting audio"}),"\n",(0,n.jsx)(i.p,{children:"Check to the audio levels of the ATEM. This can be seen in the multiview of the ATEM"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"ATEM Multiview",src:t(5284).A+"",width:"1000",height:"562"})}),"\n",(0,n.jsxs)(i.p,{children:["In the bottom left of the image, you'll see the multiview preview of audio levels. Check to make sure ",(0,n.jsx)(i.em,{children:"both"})," Mic 1 and PGM (Program) have active levels."]}),"\n",(0,n.jsxs)(i.admonition,{title:"More Info",type:"warning",children:[(0,n.jsx)(i.p,{children:"In the sample image shown above, their cameras have HDMI output, so each camera can also send an audio signal. That's why to the left of each each camera input, there are audio meters beside them."}),(0,n.jsx)(i.p,{children:"Our camera(s) do not have HDMI, so they aren't capturing audio. That's why we don't have audio levels like the image shows do."})]}),"\n",(0,n.jsx)(i.p,{children:"We receive audio as a mono mix from the sound board in the sound booth, which we bring in running XLR to 3.5mm TRS, and plug that into Mic 1."}),"\n",(0,n.jsx)(i.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsxs)(i.p,{children:["If the Mic 1 input doesn't have levels, ",(0,n.jsx)(i.strong,{children:"check the microphone cable"}),". It may simply be unplugged, or not plugged in all the way."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Closeup of microphone cable",src:t(5619).A+"",width:"4080",height:"3072"})}),"\n",(0,n.jsx)(i.p,{children:"If the the Microphone cable is plugged in, but there still isn't audio, check with the audio booth to confirm their output mix is being sent up, or not muted."}),"\n",(0,n.jsx)(i.p,{children:"If neither input has levels, and the audio booth confirms they're sending audio, make sure the Mic isn't muted."}),"\n",(0,n.jsx)(i.p,{children:"You can check this by looking at the top left of the ATEM Mini."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"ATEM Overhead",src:t(5194).A+"",width:"1920",height:"991"})}),"\n",(0,n.jsxs)(i.p,{children:["Make sure ",(0,n.jsx)(i.strong,{children:"Mic 1"})," is set to ",(0,n.jsx)(i.strong,{children:"on"}),". If it's set to ",(0,n.jsx)(i.strong,{children:"Off"}),", the mic is muted."]})]})}function l(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5194:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/atem-extreme-overhead-f1704c3275c7bd4d94368c48357658d3.webp"},5619:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/headphone-jack-closeup-0fccac207ca9c5eee1f8c43a2f9ce206.webp"},5284:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/multiview-audio-levels-61d16ccb05917b1a273bfc507f1477e9.webp"},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var n=t(6540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);