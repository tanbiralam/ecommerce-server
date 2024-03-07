"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[4121],{19298:(R,h,t)=>{t.r(h),t.d(h,{default:()=>me});var e=t(27279),s=t(68038),c=t(49402),m=t(36364),g=t(51926),L=t(27997),S=t(73354),D=t(27875),P=t(37472),l=t(32370),y=t(48102),j=t(74758),U=t(93415),_=t(70774),ee=t(38566),te=t(38101),K=t(93153),i=t(50086),V=t(73411),ne=t(10989),ae=t(86967),k=t(10701),E=t(74081),F=t(72450);const w=F.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=F.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${w} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${w}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:u,onLabel:f="On",offLabel:d="Off",selected:M,visibleLabels:a=!1,...v},b)=>(0,E.jsx)(se,{ref:b,role:"switch","aria-checked":M,"aria-label":o,onClick:u,visibleLabels:a,type:"button",...v,children:(0,E.jsxs)(k.k,{children:[(0,E.jsxs)(w,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),a&&(0,E.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?f:d})]})}));var z=t(4987),le=t(6191),$=t(36938),H=t(78665),re=t(26784),ie=t(52448),de=t(61020),B=t(40464),N=t(51447);const ce=()=>{const[o,u]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),M=(0,c.v9)(m._),{formatMessage:a}=(0,de.Z)(),{formatAPIError:v}=(0,s.So)(),b=(0,s.lm)();(0,s.go)();const{push:ue}=(0,N.k6)(),{pathname:Q}=(0,N.TH)(),{isLoading:he,allowedActions:{canCreate:O,canUpdate:Y,canDelete:G}}=(0,s.ss)(M.settings.webhooks),{get:ge,post:Ee,put:fe}=(0,s.kY)(),{notifyStatus:X}=(0,g.G)(),ve="webhooks",{isLoading:be,data:x,error:Z,refetch:J}=(0,B.useQuery)(ve,async()=>{const{data:{data:n}}=await ge("/admin/webhooks");return n});(0,e.useEffect)(()=>{if(Z){b({type:"warning",message:v(Z)});return}x&&X(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[x,Z,b,a,X,v]);const q=(0,B.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(n){b({type:"warning",message:v(n)}),u(!1)},onSuccess(){d([]),u(!1),J()}}),xe=(0,B.useMutation)(async({isEnabled:n,id:r})=>{const{id:T,...I}=x.find(Te=>Te.id===r)??{},Ce={...I,isEnabled:n};await fe(`/admin/webhooks/${r}`,Ce)},{onError(n){b({type:"warning",message:v(n)})},onSuccess(){J()}}),Me=()=>q.mutate(),pe=n=>d(n?x.map(r=>r.id):[]),ye=(n,r)=>d(n?T=>[...T,r]:T=>T.filter(I=>I!==r)),W=n=>ue(`${Q}/${n}`),A=he||be,C=x?.length??0,p=f.length;return e.createElement(L.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(S.o,{"aria-busy":A},e.createElement(D.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:O&&!A&&e.createElement(s.Qj,{startIcon:e.createElement($.Z,null),variant:"default",to:`${Q}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),p>0&&G&&e.createElement(P.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:p})),e.createElement(y.z,{onClick:()=>u(!0),startIcon:e.createElement(H.Z,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(j.D,null,A?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):C>0?e.createElement(_.i,{colCount:5,rowCount:C+1,footer:e.createElement(ee.c,{onClick:()=>O?W("create"):{},icon:e.createElement($.Z,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(K.Tr,null,e.createElement(i.Th,null,e.createElement(V.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:p>0&&p<C,value:p===C,onValueChange:pe})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ne.T,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,x.map(n=>e.createElement(K.Tr,{key:n.id,...(0,s.X7)({fn:()=>W(n.id),condition:Y})},e.createElement(i.Td,{...s.UW},e.createElement(V.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:f?.includes(n.id),onValueChange:r=>ye(r,n.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},n.url)),e.createElement(i.Td,null,e.createElement(k.k,null,e.createElement(oe,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:r=>{r.stopPropagation(),xe.mutate({isEnabled:!n.isEnabled,id:n.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(k.k,{gap:1},Y&&e.createElement(z.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.Z,null),noBorder:!0}),G&&e.createElement(z.h,{onClick:r=>{r.stopPropagation(),d([n.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(H.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(ie.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(y.z,{variant:"secondary",startIcon:e.createElement($.Z,null),onClick:()=>O?W("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:o,onToggleDialog:()=>u(n=>!n),onConfirm:Me,isConfirmButtonLoading:q.isLoading}))},me=()=>{const o=(0,c.v9)(m._);return e.createElement(s.O4,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},37472:(R,h,t)=>{t.d(h,{Z:()=>c});var e=t(74081),s=t(10701);const c=({startActions:m,endActions:g})=>!m&&!g?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:m}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:g})]})},38566:(R,h,t)=>{t.d(h,{c:()=>P});var e=t(74081),s=t(72450),c=t(93415),m=t(84366),g=t(10701),L=t(32370);const S=(0,s.ZP)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,D=(0,s.ZP)(c.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,P=({children:l,icon:y,...j})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(m.i,{}),(0,e.jsx)(D,{as:"button",background:"primary100",padding:5,...j,children:(0,e.jsxs)(g.k,{children:[(0,e.jsx)(S,{"aria-hidden":!0,background:"primary200",children:y}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(L.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
