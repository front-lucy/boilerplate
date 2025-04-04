import{j as x,n as ne}from"./emotion-styled.browser.esm-C1VEUX-q.js";import{c as e}from"./colors-Ba8S9bGL.js";import{r as ie}from"./index-D4lIrffr.js";import"./jsx-runtime-D_zvdyIk.js";const de={xLarge:{padding:"11px 16px 12px 16px",fontSize:18},large:{padding:"9px 16px 10px 16px",fontSize:18},medium:{padding:"9px 16px",fontSize:16},small:{padding:"8px 16px",fontSize:14},xSmall:{padding:"6px 16px",fontSize:14},tiny:{padding:"3px 8px",fontSize:12}},le={Primary:{default:{bg:e.primary,color:e.white},hover:{bg:e.primary60,color:e.white},pressed:{bg:e.primary_black10,color:e.white},disabled:{bg:e.gray2,color:e.gray3}},Secondary:{default:{bg:"transparent",color:e.primary,border:`1px solid ${e.primary}`},hover:{bg:e.primary50,color:e.primary80},pressed:{bg:"transparent",color:e.primary,border:`1px solid ${e.primary_black10}`},disabled:{color:e.gray2,border:`1px solid ${e.gray3}`}},Solid:{default:{bg:e.gray2,color:e.gray6},hover:{bg:e.gray2,color:e.gray5},pressed:{bg:e.gray3,color:e.gray6},disabled:{bg:e.gray2,color:e.gray3}},Line:{default:{bg:"transparent",color:e.gray5,border:`1px solid ${e.gray3}`},hover:{bg:"transparent",color:e.gray6,border:`1px solid ${e.gray2}`},pressed:{bg:"transparent",color:e.gray5,border:`1px solid ${e.gray6}`},disabled:{color:e.gray3,border:`1px solid ${e.gray3}`}},Text:{default:{bg:"transparent",color:e.gray5},hover:{bg:e.gray2,color:e.gray5},pressed:{bg:e.gray3,color:e.gray5},disabled:{bg:"transparent",color:e.gray3}}};function T({text:s,onClick:b,disabled:o=!1,fullWidth:S,size:f="xSmall",color:h="Primary",customWidth:v,customHeight:z,noPadding:a}){const[t,r]=ie.useState(!1);return x(ce,{variant:h,size:f,disabled:o,fullWidth:S,customWidth:v,customHeight:z,noPadding:a,isPressed:t,onMouseDown:()=>r(!0),onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),onClick:()=>{o||b()},children:x("span",{children:s})})}const ce=ne.button(({variant:s,size:b,disabled:o,fullWidth:S,customWidth:f,customHeight:h,noPadding:v,isPressed:z})=>{var P,C,L,w,k,W;const a=le[s],t=de[b],r=o?a.disabled:z?a.pressed:a.default;return{display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:3,fontWeight:400,whiteSpace:"nowrap",gap:4,cursor:o?"not-allowed":"pointer",backgroundColor:r==null?void 0:r.bg,color:r==null?void 0:r.color,border:(r==null?void 0:r.border)??"unset",fontSize:t.fontSize,padding:v?0:t.padding,width:S?"100%":f??"auto",height:h??"auto",transition:"all 0.2s ease","&:hover":o?void 0:{backgroundColor:(P=a.hover)==null?void 0:P.bg,color:(C=a.hover)==null?void 0:C.color,border:(L=a.hover)==null?void 0:L.border},"&:active":o?void 0:{backgroundColor:(w=a.pressed)==null?void 0:w.bg,color:(k=a.pressed)==null?void 0:k.color,border:(W=a.pressed)==null?void 0:W.border}}});T.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xLarge' | 'large' | 'medium' | 'small' | 'xSmall' | 'tiny'",elements:[{name:"literal",value:"'xLarge'"},{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"},{name:"literal",value:"'xSmall'"},{name:"literal",value:"'tiny'"}]},description:"",defaultValue:{value:"'xSmall'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'Primary' | 'Secondary' | 'Solid' | 'Line' | 'Text'",elements:[{name:"literal",value:"'Primary'"},{name:"literal",value:"'Secondary'"},{name:"literal",value:"'Solid'"},{name:"literal",value:"'Line'"},{name:"literal",value:"'Text'"}]},description:"",defaultValue:{value:"'Primary'",computed:!1}},customWidth:{required:!1,tsType:{name:"number"},description:""},customHeight:{required:!1,tsType:{name:"number"},description:""},noPadding:{required:!1,tsType:{name:"boolean"},description:""}}};const ye={title:"Atom/Button",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked!"}}},n={args:{text:"Primary",color:"Primary",size:"medium"}},i={args:{text:"Secondary",color:"Secondary",size:"medium"}},d={args:{text:"Solid",color:"Solid",size:"medium"}},l={args:{text:"Line",color:"Line",size:"medium"}},c={args:{text:"Text",color:"Text",size:"medium"}},m={args:{text:"Disabled",color:"Primary",disabled:!0}},p={args:{text:"Full Width",color:"Primary",fullWidth:!0}},u={args:{text:"Custom Size",color:"Primary",customWidth:300,customHeight:48}},g={args:{text:"No Padding",color:"Line",noPadding:!0}},y={render:s=>x("div",{children:x(T,{...s})}),args:{text:"Centered Secondary",color:"Secondary",size:"large"}};var q,N,$;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'Primary',
    color: 'Primary',
    size: 'medium'
  }
}`,...($=(N=n.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var _,B,D;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'Secondary',
    color: 'Secondary',
    size: 'medium'
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var R,F,M;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: 'Solid',
    color: 'Solid',
    size: 'medium'
  }
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var j,H,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'Line',
    color: 'Line',
    size: 'medium'
  }
}`,...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var V,E,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: 'Text',
    color: 'Text',
    size: 'medium'
  }
}`,...(A=(E=c.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var O,U,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    color: 'Primary',
    disabled: true
  }
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    text: 'Full Width',
    color: 'Primary',
    fullWidth: true
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    text: 'Custom Size',
    color: 'Primary',
    customWidth: 300,
    customHeight: 48
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    text: 'No Padding',
    color: 'Line',
    noPadding: true
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,te;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <div>
      <Button {...args} />
    </div>,
  args: {
    text: 'Centered Secondary',
    color: 'Secondary',
    size: 'large'
  }
}`,...(te=(se=y.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const xe=["Primary","Secondary","Solid","Line","Text","Disabled","FullWidth","CustomSize","NoPadding","CenteredSecondary"];export{y as CenteredSecondary,u as CustomSize,m as Disabled,p as FullWidth,l as Line,g as NoPadding,n as Primary,i as Secondary,d as Solid,c as Text,xe as __namedExportsOrder,ye as default};
