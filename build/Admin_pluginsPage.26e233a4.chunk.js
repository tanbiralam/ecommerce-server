"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[3677],{4186:(M,o,e)=>{e.r(o),e.d(o,{default:()=>B});var t=e(27279),n=e(68038),r=e(364),i=e(61020),m=e(49402),E=e(36364),a=e(51926),u=e(27997),P=e(73354),T=e(27875),C=e(74758),x=e(70774),L=e(38101),h=e(93153),g=e(50086),d=e(32370),I=e(86967),O=e(40464);const A=l=>{const s=(0,n.lm)(),{get:c}=(0,n.kY)();return(0,O.useQuery)(["plugins"],async()=>{const{data:f}=await c("/admin/plugins");return f},{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:s}=(0,a.G)();(0,n.go)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),f=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:p,data:y}=A(f);return p!=="success"&&p!=="error"?t.createElement(u.A,null,t.createElement(P.o,{"aria-busy":!0},t.createElement(n.dO,null))):t.createElement(u.A,null,t.createElement(P.o,null,t.createElement(T.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(C.D,null,t.createElement(x.i,{colCount:2,rowCount:y?.plugins?.length??0+1},t.createElement(L.h,null,t.createElement(h.Tr,null,t.createElement(g.Th,null,t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(g.Th,null,t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(I.p,null,y.plugins.map(({name:v,displayName:D,description:j})=>t.createElement(h.Tr,{key:v},t.createElement(g.Td,null,t.createElement(d.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${v}`,defaultMessage:D}))),t.createElement(g.Td,null,t.createElement(d.Z,{textColor:"neutral800"},l({id:`global.plugins.${v}.description`,defaultMessage:j}))))))))))},B=()=>{const{formatMessage:l}=(0,i.Z)(),s=(0,m.v9)(E._);return t.createElement(n.O4,{permissions:s.marketplace.main},t.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),t.createElement(Z,null))}},27997:(M,o,e)=>{e.d(o,{A:()=>E});var t=e(74081),n=e(72450),r=e(93415);const i=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:u})=>(0,t.jsxs)(i,{hasSideNav:Boolean(a),children:[a,(0,t.jsx)(m,{paddingBottom:10,children:u})]})}}]);