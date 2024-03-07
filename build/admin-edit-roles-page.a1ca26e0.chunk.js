(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2544],{4644:(H,L,o)=>{"use strict";o.d(L,{V:()=>P});var e=o(68038),E=o(40464);const P=(b={},O={})=>{const{id:A,...x}=b,{get:v}=(0,e.kY)();if(!A&&(O?.enabled===void 0||O?.enabled))throw new Error('"id" is a required argument');const{data:M,error:W,isError:a,isLoading:B,refetch:p}=(0,E.useQuery)(["roles",A,"permissions",x],async()=>{const{data:{data:S}}=await v(`/admin/roles/${A}/permissions`,{params:x});return S},O);return{permissions:M,error:W,isError:a,isLoading:B,refetch:p}}},51754:(H,L,o)=>{"use strict";o.d(L,{F:()=>b});var e=o(68038),E=o(61020),P=o(40464);const b=(O={},A={})=>{const{id:x="",...v}=O,{get:M}=(0,e.kY)(),{locale:W}=(0,E.Z)(),a=(0,e.Xe)(W,{sensitivity:"base"}),{data:B,error:p,isError:S,isLoading:F,refetch:g}=(0,P.useQuery)(["roles",x,v],async()=>{const{data:V}=await M(`/admin/roles/${x??""}`,{params:v});return V},A);let h=[];return x&&B?h=[B.data]:Array.isArray(B?.data)&&(h=B.data),{roles:h.sort((V,oe)=>a.compare(V.name,oe.name)),error:p,isError:S,isLoading:F,refetch:g}}},25545:(H,L,o)=>{"use strict";o.r(L),o.d(L,{CreatePage:()=>Re,default:()=>Se});var e=o(27279),E=o(73354),P=o(27875),b=o(10701),O=o(48102),A=o(74758),x=o(93415),v=o(32370),M=o(23298),W=o(74577),a=o(12881),B=o(39708),p=o(68038),S=o(76827),F=o(84260),g=o(71563),h=o(10124),V=o.n(h),oe=o(61020),de=o(49402),re=o(51447),C=o(72450),pe=o(4644),w=o(36364),G=o(442),_=o(90065),Ce=o(47853);const xe=Ce.Ry().shape({name:Ce.Z_().required(p.I0.required),description:Ce.Z_().required(p.I0.required)}),ae=C.ZP.div`
  border: 1px solid ${({theme:z})=>z.colors.primary200};
  background: ${({theme:z})=>z.colors.primary100};
  padding: ${({theme:z})=>`${z.spaces[2]} ${z.spaces[4]}`};
  color: ${({theme:z})=>z.colors.primary600};
  border-radius: ${({theme:z})=>z.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Re=()=>{const z=(0,re.$B)("/settings/roles/duplicate/:id"),Y=(0,p.lm)(),{lockApp:ne,unlockApp:X}=(0,p.o1)(),{formatMessage:j}=(0,oe.Z)(),[Q,ie]=(0,e.useState)(!1),{replace:ge}=(0,re.k6)(),J=(0,e.useRef)(),{trackUsage:ue}=(0,p.rS)(),{post:ke,put:Be}=(0,p.kY)(),{params:Ee}=z??{},{isLoading:Ze,data:Le}=(0,_.d)(Ee?.id,{cacheTime:0}),{permissions:he,isLoading:Me}=(0,pe.V)({id:Ee?.id},{cacheTime:0,enabled:!!Ee?.id}),Fe=Pe=>{ne(),ie(!0),Ee?.id?ue("willDuplicateRole"):ue("willCreateNewRole"),Promise.resolve(ke("/admin/roles",Pe)).then(async({data:ee})=>{const{permissionsToSend:le}=J.current.getPermissions();return Ee?.id?ue("didDuplicateRole"):ue("didCreateNewRole"),ee.data.id&&!V()(le)&&await Be(`/admin/roles/${ee.data.id}/permissions`,{permissions:le}),ee}).then(ee=>{ie(!1),Y({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),ge(`/settings/roles/${ee.data.id}`)}).catch(ee=>{console.error(ee),ie(!1),Y({type:"warning",message:{id:"notification.error"}})}).finally(()=>{X()})},He=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(E.o,null,e.createElement(p.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:He},onSubmit:Fe,validationSchema:xe,validateOnChange:!1},({handleSubmit:Pe,values:ee,errors:le,handleReset:ce,handleChange:me})=>e.createElement(p.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(P.T,{primaryAction:e.createElement(b.k,{gap:2},e.createElement(O.z,{variant:"secondary",onClick:()=>{ce(),J.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.z,{onClick:Pe,loading:Q,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.rU,{startIcon:e.createElement(S.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(A.D,null,e.createElement(b.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(x.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(b.k,{justifyContent:"space-between"},e.createElement(x.x,null,e.createElement(x.x,null,e.createElement(v.Z,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(x.x,null,e.createElement(v.Z,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ae,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(M.r,{gap:4},e.createElement(W.P,{col:6},e.createElement(a.o,{name:"name",error:le.name&&j({id:le.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:me,required:!0,value:ee.name})),e.createElement(W.P,{col:6},e.createElement(B.g,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:le.description&&j({id:le.description}),onChange:me},ee.description))))),!Ze&&!Me?e.createElement(x.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(G.Z,{isFormDisabled:!1,ref:J,permissions:he,layout:Le})):e.createElement(x.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.dO,null))))))))};function Se(){const z=(0,de.v9)(w._);return e.createElement(p.O4,{permissions:z.settings.roles.create},e.createElement(Re,null))}},442:(H,L,o)=>{"use strict";o.d(L,{Z:()=>ts});var e=o(27279),E=o(69878),P=o(94098),b=o(61908),O=o(68038),A=o(10131),x=o.n(A),v=o(10124),M=o.n(v),W=o(70627),a=o.n(W),B=o(61020),p=o(93415),S=o(8243),F=o.n(S),g=o(72450),h=o(10701),V=o(73411),oe=o(57853),de=o(78582),re=o(98934),C=o.n(re),pe=o(74919),w=o.n(pe),G=o(92807),_=o(48102),Ce=o(35318);const be=g.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xe=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,B.Z)();return e.createElement(be,{hasConditions:r,className:n},e.createElement(_.z,{variant:s,startIcon:e.createElement(Ce.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};xe.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},xe.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const ae=(0,g.ZP)(xe)``;var Re=o(5938),Se=o(6918),z=o(15244),Y=o(32370),ne=o(35250),X=o(89486),j=o(82298),Q=o(61815),ie=o(63799),ge=o.n(ie),J=o(51943),ue=o.n(J),ke=o(61181);const Be=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),Ee=t=>t.reduce((n,[r,s])=>(n.push({label:ue()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),Ze=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),Le=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,B.Z)(),m=u=>{l(i,Ze(t,u))};return e.createElement(h.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(h.k,{paddingLeft:6,style:{width:180}},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(Y.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.x,{style:{maxWidth:430,width:"100%"}},e.createElement(ke.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:Be(c),options:Ee(t),disabled:n})))};Le.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const he=Le,Me=(t,n)=>t.reduce((r,s)=>(r[s.id]=C()(n,s.id,!1),r),{}),Fe=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,c=Me(l,n);return r[i]=c,r},{}),Pe=(t,n,r)=>t.reduce((s,i)=>{const l=C()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Fe(r,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),ee=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,B.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:m}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(ge()(c,"category")),[c]),f=t.filter(({isDisplayed:y,hasSomeActionsSelected:k,hasAllActionsSelected:D})=>y&&(k||D)),R=(0,e.useMemo)(()=>Pe(f,d,u),[f,d,u]),[$,N]=(0,e.useState)(R),I=(y,k)=>{N((0,Q.ZP)(D=>{D[y]||(D[y]={}),D[y].default||(D[y].default={}),D[y].default=k}))},T=()=>{const y=Object.entries($).reduce((k,D)=>{const[Z,te]=D,U=Object.values(te).reduce((q,K)=>({...q,...K}),{});return k[Z]=U,k},{});m(y),i()};return e.createElement(Re.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Se.x,null,e.createElement(X.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((y,k,D)=>e.createElement(j.$,{isCurrent:k===D.length-1,key:y},ue()(l({id:y,defaultMessage:y})))))),e.createElement(z.f,null,f.length===0&&e.createElement(Y.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,f.map(({actionId:y,label:k,pathToConditionsObject:D},Z)=>{const te=D.join("..");return e.createElement(he,{key:y,arrayOfOptionsGroupedByCategory:u,label:k,isFormDisabled:r,isGrey:Z%2===0,name:te,onChange:I,value:C()($,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:T},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ee.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const le=ee,ce=`${120/16}rem`,me=`${200/16}rem`,Ae=`${53/16}rem`,Ne=g.ZP.div`
  width: ${ce};
`,rt=(0,g.ZP)(h.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ge=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:m,value:u})=>{const{formatMessage:f}=(0,B.Z)();return e.createElement(h.k,{alignItems:"center",paddingLeft:6,style:{width:me,flexShrink:0}},e.createElement(p.x,{paddingRight:2},e.createElement(V.C,{name:d,"aria-label":f({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:R=>l({target:{name:d,value:R}}),indeterminate:m,value:u})),e.createElement(rt,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:R})=>(R==="Enter"||R===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(Y.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ge.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ge.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const at=(0,e.memo)(Ge);var Nt=o(39738),Wt=o.n(Nt),Vt=o(3243),Te=o.n(Vt);const it=t=>Te()(t)?Wt()(Object.values(t).map(n=>Te()(n)?it(n):n)):[],je=it,ze=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Oe=t=>{const n=ze(t),r=je(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Kt=o(10411);const We=(0,g.ZP)(Kt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ve=t=>`
  ${Y.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${We} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),s],m=M()(l)?[...d,"properties","enabled"]:d,u=m.join(".."),f=C()(n,[...d,"conditions"],null),R=je(f).some(T=>T);if(M()(l)){const T=C()(n,m,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:T,hasConditions:R,hasSomeActionsSelected:T,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const $=C()(n,m,null),{hasAllActionsSelected:N,hasSomeActionsSelected:I}=Oe($);return{actionId:s,checkboxName:u,hasAllActionsSelected:N,hasConditions:R,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Ye=(t,n)=>`
  ${lt} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
   ${Ve(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>Ye(r,s)}
  }
  
`,lt=g.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ae};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ut=g.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Ye(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Ye(t,n)}
  }
`,ct=(0,g.ZP)(h.k)`
  width: ${ce};
  position: relative;
`,dt=(0,g.ZP)(p.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ut=g.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,g.ZP)(p.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,mt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,m]=(0,e.useState)(!1),{formatMessage:u}=(0,B.Z)(),{modifiedData:f,onChangeParentCheckbox:R,onChangeSimpleCheckbox:$}=(0,G.$_)(),N=()=>{m(U=>!U)},I=()=>{m(!1)},T=C()(f,c.split(".."),{}),y=(0,e.useMemo)(()=>Object.keys(T).reduce((U,q)=>(U[q]=w()(T[q],"conditions"),U),{}),[T]),{hasAllActionsSelected:k,hasSomeActionsSelected:D}=Oe(y),Z=(0,e.useMemo)(()=>Ht(t,f,c),[t,f,c]),te=Z.some(({hasConditions:U})=>U);return e.createElement(Ut,{isActive:n},e.createElement(lt,{isGrey:r},e.createElement(at,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:R,onClick:l,someChecked:D,value:k,isActive:n},e.createElement(dt,{paddingLeft:2},n?e.createElement(oe.Z,null):e.createElement(de.Z,null))),e.createElement(h.k,{style:{flex:1}},Z.map(({actionId:U,hasConditions:q,hasAllActionsSelected:K,hasSomeActionsSelected:ye,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ke})=>Ie?se?e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(V.C,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ke} ${i}`}),onValueChange:$e=>{R({target:{name:ve,value:$e}})},indeterminate:ye,value:K})):e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(V.C,{disabled:s,indeterminate:q,name:ve,onValueChange:$e=>{$({target:{name:ve,value:$e}})},value:K})):e.createElement(Ne,{key:U}))),d&&e.createElement(le,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:Z,isFormDisabled:s,onClosed:I,onToggle:N})),e.createElement(Gt,null,e.createElement(ae,{onClick:N,hasConditions:te})))};mt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const zt=mt,Yt=g.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),Xt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),wt=(0,g.ZP)(p.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=g.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Xe=t=>e.createElement(wt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:a().string};const Jt=(0,e.memo)(Xe),gt=(0,g.ZP)(h.k)`
  width: ${ce};
  position: relative;
`,qt=(0,g.ZP)(h.k)`
  height: ${Ae};
`,_t=(0,g.ZP)(p.x)`
  padding-left: ${31/16}rem;
`,en=(0,g.ZP)(p.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,tn=(0,g.ZP)(h.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${We} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ve(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ve(n)};
`,nn=g.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,B.Z)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:f}=(0,G.$_)(),[R,$]=(0,e.useState)(null),N=T=>{$(y=>y===T?null:T)},I=(0,e.useMemo)(()=>R?t.find(({value:T})=>T===R):null,[R,t]);return e.createElement(_t,null,e.createElement(nn,null),t.map(({label:T,value:y,required:k,children:D},Z)=>{const te=Z+1<t.length,U=Array.isArray(D),q=R===y;return e.createElement(en,{key:y,isVisible:te},e.createElement(qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(h.k,{style:{flex:1}},e.createElement(tn,{level:r,isActive:q,isCollapsable:U},e.createElement(rt,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>N(y),"aria-expanded":q,onKeyDown:({key:K})=>(K==="Enter"||K===" ")&&N(y),tabIndex:0,role:"button"},title:T},e.createElement(Y.Z,{ellipsis:!0},ue()(T)),k&&e.createElement(pt,null),e.createElement(We,{$isActive:q}))),e.createElement(h.k,{style:{flex:1}},i.map(({actionId:K,label:ye,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ne,{key:K});const se=[...s.split(".."),K,"properties",c,...l.split(".."),y],ve=C()(m,se,!1);if(!D)return e.createElement(gt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(V.C,{disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${ye}`}),onValueChange:De=>{f({target:{name:se.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(gt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(V.C,{key:ye,disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${ye}`}),onValueChange:De=>{u({target:{name:se.join(".."),value:De}})},value:Ke,indeterminate:$e}))})))),I&&q&&e.createElement(p.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:n,parentName:`${l}..${y}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};we.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const sn=(0,e.memo)(we),on=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),rn=(t,n,r,s,i)=>{const c=on(t).reduce((d,m)=>{const u=[...r.split(".."),m,"properties",s,i],f=C()(n,u,!1);return d[m]=f,d},{});return Oe(c)},ft=(0,g.ZP)(h.k)`
  width: ${ce};
  position: relative;
`,an=(0,g.ZP)(h.k)`
  height: ${Ae};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${We} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ve(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ve(n)};
`,Qe=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:m})=>{const{formatMessage:u}=(0,B.Z)(),[f,R]=(0,e.useState)(null),{modifiedData:$,onChangeCollectionTypeLeftActionRowCheckbox:N,onChangeParentCheckbox:I,onChangeSimpleCheckbox:T}=(0,G.$_)(),y=f===s,k=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),D=k.length>0,Z=(0,e.useCallback)(()=>{D&&R(K=>K===s?null:s)},[D,s]),te=({target:{value:K}})=>{N(l,d,s,K)},{hasAllActionsSelected:U,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>rn(c,$,l,d,s),[c,$,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(an,{alignItems:"center",isCollapsable:D,isActive:y,background:m?"neutral100":"neutral0"},e.createElement(h.k,null,e.createElement(at,{onChange:te,onClick:Z,isCollapsable:D,isFormDisabled:r,label:n,someChecked:q,value:U,isActive:y},i&&e.createElement(pt,null),e.createElement(We,{$isActive:y})),e.createElement(h.k,null,c.map(({label:K,isActionRelatedToCurrentProperty:ye,actionId:Ie})=>{if(!ye)return e.createElement(Ne,{key:K});const se=[...l.split(".."),Ie,"properties",d,s];if(!D){const De=C()($,se,!1);return e.createElement(ft,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(V.C,{disabled:r,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${K}`}),onValueChange:ns=>{T({target:{name:se.join(".."),value:ns}})},value:De}))}const ve=C()($,se,{}),{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:K,justifyContent:"center",alignItems:"center"},e.createElement(V.C,{disabled:r,name:se.join(".."),onValueChange:De=>{I({target:{name:se.join(".."),value:De}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${K}`}),value:Ke,indeterminate:$e}))})))),y&&e.createElement(sn,{childrenForm:k,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Qe.defaultProps={childrenForm:[],required:!1},Qe.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const ln=(0,e.memo)(Qe),yt=(0,g.ZP)(h.k)`
  width: ${ce};
  flex-shrink: 0;
`,cn=(0,g.ZP)(h.k)`
  width: ${me};
  height: ${Ae};
  flex-shrink: 0;
`,ht=({headers:t,label:n})=>{const{formatMessage:r}=(0,B.Z)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(h.k,null,e.createElement(cn,{alignItems:"center",paddingLeft:6},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(yt,{justifyContent:"center",key:i.label},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(yt,{key:i.label})))};ht.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const dn=ht,un=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),mn=g.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Ct=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>un(t,l),[t,l]);return e.createElement(mn,null,e.createElement(dn,{label:s,headers:c}),e.createElement(p.x,null,n.map(({children:d,label:m,value:u,required:f},R)=>e.createElement(ln,{childrenForm:d,key:u,label:m,isFormDisabled:r,name:u,required:f,propertyActions:c,pathToData:i,propertyName:l,isOdd:R%2===0}))))};Ct.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const pn=Ct,gn=g.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Et=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:m})=>{const u=(0,e.useCallback)(()=>{c(n)},[n,c]),f=(0,e.useMemo)(()=>Xt(t,n),[t,n]);return e.createElement(gn,{isActive:i},e.createElement(zt,{availableActions:f,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:d}),i&&m.map(({label:R,value:$,children:N})=>e.createElement(pn,{availableActions:f,childrenForm:N,isFormDisabled:l,label:R,pathToData:d,propertyName:$,key:$})))};Et.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const fn=Et,Je=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:m,properties:u},f)=>e.createElement(fn,{allActions:t,key:d,contentTypeName:d,label:m,isActive:i===d,isFormDisabled:n,index:f,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:u}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const yn=(0,e.memo)(Je),hn=t=>t.filter(({subjects:n})=>n&&n.length),Cn=t=>t.map(({actionId:n})=>n),En=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=C()(n,[i,s],{}),c={[i]:ze(l)};r[s]?r[s]={...r[s],...c}:r[s]=c}),r),{}),vn=(t,n)=>{const r=Cn(t),s=En(r,n);return Object.keys(s).reduce((l,c)=>(l[c]=Oe(s[c]),l),{})},bn=(0,g.ZP)(h.k)`
  width: ${ce};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,B.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>vn(c,i[r]),[i,c,r]);return e.createElement(p.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:me}},e.createElement(h.k,{gap:0},c.map(({label:m,actionId:u})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(V.C,{disabled:n,onValueChange:f=>{l(r,u,f)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:C()(d,[u,"hasAllActionsSelected"],!1),indeterminate:C()(d,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const xn=(0,e.memo)(qe),Rn=(0,g.ZP)(p.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=F()([...s],"label");return e.createElement(Rn,{background:"neutral0"},e.createElement(xn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(yn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const bt=(0,e.memo)(vt);var Pn=o(18542);const xt=({children:t,value:n})=>e.createElement(Pn.$l.Provider,{value:n},t);xt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const An=xt;var Tn=o(45322),Sn=o(24920),Mn=o(34642),Rt=o(22572),On=o(23298),$n=o(74577);const Dn=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=C()(n,i,!1),c=C()(n,[...r,s.action,"conditions"],{}),d=je(c).some(m=>m);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),Ln=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return je(n).some(s=>s)},jn=g.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Pt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:f}=(0,B.Z)(),R=C()(d,i,{}),$=(0,e.useMemo)(()=>Object.keys(R).reduce((Z,te)=>(Z[te]=ze(R[te]),Z),{}),[R]),{hasAllActionsSelected:N,hasSomeActionsSelected:I}=Oe($),T=()=>{c(Z=>!Z)},y=()=>{c(!1)},k=Dn(s,d,i),D=Ln(C()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.x,null,e.createElement(h.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.x,{paddingRight:4},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(p.x,{paddingLeft:4},e.createElement(Rt.X,{name:i.join(".."),disabled:n,onValueChange:Z=>{m({target:{name:i.join(".."),value:Z}})},indeterminate:I,value:N},f({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(h.k,{paddingTop:6,paddingBottom:6},e.createElement(On.r,{gap:2,style:{flex:1}},k.map(({checkboxName:Z,value:te,action:U,displayName:q,hasConditions:K})=>e.createElement($n.P,{col:3,key:U},e.createElement(In,{disabled:n,hasConditions:K},e.createElement(Rt.X,{name:Z,disabled:n,onValueChange:ye=>{u({target:{name:Z,value:ye}})},value:te},q))))),e.createElement(ae,{hasConditions:D,onClick:T}))),l&&e.createElement(le,{headerBreadCrumbs:[t,r],actions:k,isFormDisabled:n,onClosed:y,onToggle:T}))};Pt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Pt,_e=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:m}=(0,B.Z)(),u=()=>{c(r)},f=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Tn.U,{expanded:s,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ue()(f),description:`${m({id:"Settings.permissions.category"},{category:f})} ${n==="plugins"?"plugin":n}`}),e.createElement(Mn.v,null,e.createElement(p.x,{padding:6},t.map(({actions:R,subCategoryName:$,subCategoryId:N})=>e.createElement(kn,{key:$,actions:R,categoryName:f,isFormDisabled:i,subCategoryName:$,pathToData:[...d,N]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const Bn=_e,At=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(p.x,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:m},u)=>e.createElement(Bn,{key:c,childrenForm:m,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:u%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};At.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const Tt=At;var Zn=o(87830),Fn=o.n(Zn),Nn=o(43433),fe=o.n(Nn);const St=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),Mt=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),Ot=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Ot(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Wn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=C()(r,["properties",l.value],[]),d=Ot(l,c);s.properties[i]=d}return s},{properties:{}}),Vn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),$t=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(M()(d))return i;const m=Object.keys(d).reduce((u,f)=>{const{actionId:R,applyToProperties:$}=l,T=d[f].properties.map(({value:Z})=>Z).every(Z=>($||[]).indexOf(Z)===-1),y=St(s,R,f),k=Mt(r,C()(y,"conditions",[]));if(M()($)||T)return fe()(u,[f,R],{properties:{enabled:y!==void 0},conditions:k}),u;const D=Wn($,d[f],y);return fe()(u,[f,R],{...D,conditions:k}),u},{});return Fn()(i,m)},{}),Kn=(t,n,r)=>t.reduce((s,i)=>{const l=St(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:Mt(n,l?.conditions??[])},s},{}),Hn=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Kn(i.actions,n,r),s),{}),Dt=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Hn(l,n,r);return s[i]=c,s},{}),Lt=t=>t.split(" ").join("-"),jt=(t,n)=>Object.entries(ge()(t,n)).map(([r,s])=>({category:r,categoryId:Lt(r),childrenForm:Object.entries(ge()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Lt(i),actions:l}))})),Un=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},m={collectionTypes:$t(s,s.actions||[],r,n),singleTypes:$t(i,i.actions||[],r,n),plugins:Dt(d.plugins,r,n),settings:Dt(d.settings,r,n)};return{initialData:m,modifiedData:m,layouts:d}};var Gn=o(8175),et=o.n(Gn);const It=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(Te()(s)&&!x()(s,"conditions"))return{...n,[r]:It(s)};if(Te()(s)&&x()(s,"conditions")&&!je(w()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),tt=It,kt=(t,n,r=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!r?(s[i]=l,s):Te()(l)?{...s,[i]:kt(l,n,i==="fields")}:(s[i]=n,s)},{}),Ue=kt,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,n)=>(0,Q.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(C()(t,c)).forEach(d=>{const m=C()(t,[...c,d,i],void 0);if(m){let u=Ue(m,l);if(!l&&u.conditions){const f=Ue(u.conditions,!1);u={...u,conditions:f}}fe()(r,[...c,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=et()(t.modifiedData);const m=s.split(".."),u=C()(d,m,{});Object.keys(u).forEach(f=>{if(x()(u[f],`properties.${i}`)){const R=C()(u,[f,"properties",i,l]),$=[...m,f,"properties",i,l];if(!Te()(R))fe()(d,$,c);else{const N=Ue(R,c);fe()(d,$,N)}}}),c||(d=tt(d)),fe()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;fe()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);fe()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),fe()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=et()(t.modifiedData);const d=C()(c,l,{}),m=Ue(d,i);fe()(c,l,m),i||(c=tt(c)),fe()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:nt(r),properties:{}}},wn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...n,...s]},[]),Bt=t=>Object.values(t).reduce((n,r)=>{const s=wn(r);return[...n,...s]},[]),Zt=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return Te()(l)?[...r,...Zt(l,`${n}${i}.`)]:(l&&!Te()(l)&&r.push(`${n}${i}`),r)},[]),Qn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Zt(d),i},{action:t,subject:n,conditions:nt(r),properties:{}}),Jn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:nt(r)}),qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!je(c).some(u=>u))return s;if(!c?.properties?.enabled){const u=Qn(l,t,c);return[...s,u]}if(!c.properties.enabled)return s;const m=Jn(l,t,c);return s.push(m),s},[]),Ft=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const n=Bt(t.plugins),r=Bt(t.settings),s=Ft(t.collectionTypes),i=Ft(t.singleTypes);return[...n,...r,...s,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Yn,zn,()=>Un(t,r)),{formatMessage:m}=(0,B.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const I=(0,O.e5)(i.collectionTypes,c.collectionTypes),T=(0,O.e5)(i.singleTypes,c.singleTypes),y={...I,...T};let k;return M()(y)?k=!1:k=Object.values(y).some(D=>Object.values(D).some(Z=>x()(Z,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:k}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(I,T,y,k)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:T,rowName:y,value:k})},f=(I,T,y)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:T,value:y})},R=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},$=(0,e.useCallback)(({target:{name:I,value:T}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:T})},[]),N=(0,e.useCallback)(({target:{name:I,value:T}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:T})},[]);return e.createElement(An,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:R,onChangeSimpleCheckbox:$,onChangeParentCheckbox:N,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:f}},e.createElement(E.v,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(P.m,null,es.map(I=>e.createElement(P.O,{key:I.id},m({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(b.n,{style:{position:"relative"}},e.createElement(b.x,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(b.x,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(b.x,null,e.createElement(Tt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(b.x,null,e.createElement(Tt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(st)},63727:(H,L,o)=>{"use strict";o.r(L),o.d(L,{default:()=>Y});var e=o(27279),E=o(68038),P=o(49402),b=o(51447),O=o(36364),A=o(73354),x=o(27875),v=o(10701),M=o(48102),W=o(74758),a=o(93415),B=o(76827),p=o(71563),S=o(61020),F=o(4644),g=o(51754),h=o(90065),V=o(442),oe=o(32370),de=o(23298),re=o(74577),C=o(12881),pe=o(39708),w=o(70627),G=o.n(w);const _=({disabled:ne,role:X,values:j,errors:Q,onChange:ie,onBlur:ge})=>{const{formatMessage:J}=(0,S.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(oe.Z,{fontWeight:"bold"},X?X.name:J({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(oe.Z,{textColor:"neutral500",variant:"pi"},X?X.description:J({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(M.z,{disabled:!0,variant:"secondary"},J({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:X.usersCount}))),e.createElement(de.r,{gap:4},e.createElement(re.P,{col:6},e.createElement(C.o,{disabled:ne,name:"name",error:Q.name&&J({id:Q.name}),label:J({id:"global.name",defaultMessage:"Name"}),onChange:ie,onBlur:ge,required:!0,value:j.name||""})),e.createElement(re.P,{col:6},e.createElement(pe.g,{disabled:ne,label:J({id:"global.description",defaultMessage:"Description"}),id:"description",error:Q.name&&J({id:Q.name}),onChange:ie,onBlur:ge},j.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const Ce=_;var be=o(47853);const ae=be.Ry().shape({name:be.Z_().required(E.I0.required)}),Se=()=>{const ne=(0,E.lm)(),{formatMessage:X}=(0,S.Z)(),{params:{id:j}}=(0,b.$B)("/settings/roles/:id"),{put:Q}=(0,E.kY)(),[ie,ge]=(0,e.useState)(!1),J=(0,e.useRef)(),{lockApp:ue,unlockApp:ke}=(0,E.o1)(),{trackUsage:Be}=(0,E.rS)(),{formatAPIError:Ee}=(0,E.So)(),{isLoading:Ze,data:Le}=(0,h.d)(j,{cacheTime:0}),{roles:[he={}],isLoading:Me,refetch:Fe}=(0,g.F)({id:j},{cacheTime:0}),{permissions:He,isLoading:Pe}=(0,F.V)({id:j},{cacheTime:0}),ee=async ce=>{try{ue(),ge(!0);const{permissionsToSend:me,didUpdateConditions:Ae}=J.current.getPermissions();await Q(`/admin/roles/${j}`,ce),he.code!=="strapi-super-admin"&&(await Q(`/admin/roles/${j}/permissions`,{permissions:me}),Ae&&Be("didUpdateConditions")),J.current.setFormAfterSubmit(),await Fe(),ne({type:"success",message:{id:"notification.success.saved"}})}catch(me){ne({type:"warning",message:Ee(me)})}finally{ge(!1),ke()}},le=!Me&&he.code==="strapi-super-admin";return e.createElement(A.o,null,e.createElement(E.SL,{name:"Roles"}),e.createElement(p.J9,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:ee,validationSchema:ae,validateOnChange:!1},({handleSubmit:ce,values:me,errors:Ae,handleChange:ot,handleBlur:Ne})=>e.createElement("form",{onSubmit:ce},e.createElement(x.T,{primaryAction:e.createElement(v.k,{gap:2},e.createElement(M.z,{disabled:he.code==="strapi-super-admin",onClick:ce,loading:ie,size:"L"},X({id:"global.save",defaultMessage:"Save"}))),title:X({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:X({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(E.rU,{startIcon:e.createElement(B.Z,null),to:"/settings/roles"},X({id:"global.back",defaultMessage:"Back"}))}),e.createElement(W.D,null,e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(Ce,{isLoading:Me||Pe,disabled:le,errors:Ae,values:me,onChange:ot,onBlur:Ne,role:he}),!Ze&&!Me&&!Pe?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(V.Z,{isFormDisabled:le,permissions:He,ref:J,layout:Le})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.dO,null)))))))},Y=()=>{const ne=(0,P.v9)(O._),{isLoading:X,allowedActions:{canRead:j,canUpdate:Q}}=(0,E.ss)({read:ne.settings.roles.read,update:ne.settings.roles.update});return X?e.createElement(E.dO,null):!j&&!Q?e.createElement(b.l_,{to:"/"}):e.createElement(Se,null)}},90065:(H,L,o)=>{"use strict";o.d(L,{d:()=>P});var e=o(68038),E=o(40464);const P=(b,O={})=>{const{get:A}=(0,e.kY)(),{data:x,error:v,isError:M,isLoading:W}=(0,E.useQuery)(["permissions",b],async()=>{const{data:{data:a}}=await A("/admin/permissions",{params:{role:b}});return a},O);return{data:x,error:v,isError:M,isLoading:W}}},29520:H=>{function L(o,e,E,P){for(var b=-1,O=o==null?0:o.length;++b<O;){var A=o[b];e(P,A,E(A),o)}return P}H.exports=L},98694:(H,L,o)=>{var e=o(1107);function E(P,b,O,A){return e(P,function(x,v,M){b(A,x,O(x),M)}),A}H.exports=E},37177:(H,L,o)=>{var e=o(29520),E=o(98694),P=o(90040),b=o(26126);function O(A,x){return function(v,M){var W=b(v)?e:E,a=x?x():{};return W(v,A,P(M,2),a)}}H.exports=O},39738:(H,L,o)=>{var e=o(93367),E=1/0;function P(b){var O=b==null?0:b.length;return O?e(b,E):[]}H.exports=P},63799:(H,L,o)=>{var e=o(71041),E=o(37177),P=Object.prototype,b=P.hasOwnProperty,O=E(function(A,x,v){b.call(A,v)?A[v].push(x):e(A,v,[x])});H.exports=O},45322:(H,L,o)=>{"use strict";o.d(L,{U:()=>B,y:()=>W});var e=o(74081),E=o(27279),P=o(72450),b=o(39267),O=o(74513),A=o(32370),x=o(10701),v=o(93415);const M=({theme:p,expanded:S,variant:F,disabled:g,error:h})=>h?`1px solid ${p.colors.danger600} !important`:g?`1px solid ${p.colors.neutral150}`:S?`1px solid ${p.colors.primary600}`:F==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,W=(0,P.ZP)(A.Z)``,a=(0,P.ZP)(v.x)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${W} {
      color: ${({theme:p,expanded:S})=>S?void 0:p.colors.primary700};
    }

    ${A.Z} {
      color: ${({theme:p,expanded:S})=>S?void 0:p.colors.primary600};
    }

    & > ${x.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,B=({children:p,disabled:S=!1,error:F,expanded:g=!1,hasErrorMessage:h=!0,id:V,onToggle:oe,toggle:de,size:re="M",variant:C="primary",shadow:pe})=>{const w=(0,O.M)(V),G=E.useMemo(()=>({expanded:g,onToggle:oe,toggle:de,id:w,size:re,variant:C,disabled:S}),[S,g,w,oe,re,de,C]);return(0,e.jsxs)(b.S.Provider,{value:G,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:C,error:F,shadow:pe,children:p}),F&&h&&(0,e.jsx)(v.x,{paddingTop:1,children:(0,e.jsx)(A.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},34642:(H,L,o)=>{"use strict";o.d(L,{v:()=>b});var e=o(74081),E=o(39267),P=o(93415);const b=({children:O,...A})=>{const{expanded:x,id:v}=(0,E.A)();if(!x)return null;const M=`accordion-content-${v}`,W=`accordion-label-${v}`,a=`accordion-desc-${v}`;return(0,e.jsx)(P.x,{role:"region",id:M,"aria-labelledby":W,"aria-describedby":a,...A,children:O})}},39267:(H,L,o)=>{"use strict";o.d(L,{A:()=>P,S:()=>E});var e=o(27279);const E=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),P=()=>(0,e.useContext)(E)},24920:(H,L,o)=>{"use strict";o.d(L,{B:()=>p});var e=o(74081),E=o(10411),P=o(72450),b=o(45322),O=o(39267);const A=({expanded:S,disabled:F,variant:g})=>{let h="neutral100";return S?h="primary100":F?h="neutral150":g==="primary"&&(h="neutral0"),h};var x=o(1782),v=o(50703),M=o(10701),W=o(32370);const a=(0,P.ZP)(x.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:F})=>F?S.colors.primary600:S.colors.neutral500};
    }
  }
`,B=(0,P.ZP)(M.k)`
  min-height: ${({theme:S,size:F})=>S.sizes.accordions[F]};
  border-radius: ${({theme:S,expanded:F})=>F?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,p=({title:S,description:F,as:g="span",togglePosition:h="right",action:V,...oe})=>{const{onToggle:de,toggle:re,expanded:C,id:pe,size:w,variant:G,disabled:_}=(0,O.A)(),Ce=`accordion-content-${pe}`,be=`accordion-label-${pe}`,xe=`accordion-desc-${pe}`,ae=w==="M"?6:4,Re=w==="M"?ae:ae-2,Se=A({expanded:C,disabled:_,variant:G}),Y={as:g,fontWeight:w==="S"?"bold":void 0,id:be,textColor:C?"primary600":"neutral700",ellipsis:!0,variant:w==="M"?"delta":void 0},ne=C?"primary600":"neutral600",X=C?"primary200":"neutral200",j=w==="M"?`${32/16}rem`:`${24/16}rem`,Q=()=>{_||(re&&!de?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),re()):de&&de())},ie=(0,e.jsx)(M.k,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:C?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:X,cursor:_?"not-allowed":"pointer",onClick:Q,shrink:0,children:(0,e.jsx)(v.J,{as:E.Z,width:w==="M"?`${11/16}rem`:`${8/16}rem`,color:C?"primary600":"neutral600"})});return(0,e.jsx)(B,{paddingBottom:Re,paddingLeft:ae,paddingRight:ae,paddingTop:Re,background:Se,expanded:C,size:w,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(M.k,{gap:3,flex:1,maxWidth:"100%",children:[h==="left"&&ie,(0,e.jsx)(a,{onClick:Q,"aria-disabled":_,"aria-expanded":C,"aria-controls":Ce,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:C,type:"button",flex:1,minWidth:0,...oe,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.y,{...Y,children:S}),F&&(0,e.jsx)(W.Z,{as:"p",id:xe,textColor:ne,children:F})]})}),h==="right"&&(0,e.jsxs)(M.k,{gap:3,children:[ie,V]}),h==="left"&&V]})})}},61181:(H,L,o)=>{"use strict";o.d(L,{Q:()=>b});var e=o(74081),E=o(72450),P=o(97232);const b=({options:A,...x})=>(0,e.jsx)(P.NU,{...x,children:A.map(v=>"children"in v?(0,e.jsx)(P.Ab,{label:v.label,values:v.children.map(M=>M.value.toString()),children:v.children.map(M=>(0,e.jsx)(O,{value:M.value,children:M.label},M.value))},v.label):(0,e.jsx)(P.ML,{value:v.value,children:v.label},v.value))}),O=(0,E.ZP)(P.ML)`
  padding-left: ${({theme:A})=>A.spaces[7]};
`}}]);
