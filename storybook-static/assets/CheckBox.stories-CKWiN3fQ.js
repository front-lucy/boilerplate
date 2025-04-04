import{a as _,j as p,n as g}from"./emotion-styled.browser.esm-C1VEUX-q.js";import{c as m}from"./colors-Ba8S9bGL.js";import{t as h}from"./typography-tioUjm4z.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";const W=""+new URL("../icons/icon-checkbox-check.svg",import.meta.url).href,A=""+new URL("../icons/icon-checkbox-disabled.svg",import.meta.url).href,E=""+new URL("../icons/icon-checkbox-indeterminate.svg",import.meta.url).href,F=""+new URL("../icons/icon-checkbox-unCheck.svg",import.meta.url).href;function u({text:e,checked:r,indeterminate:t=!1,onClick:O,disabled:a=!1,size:V="p6"}){return _(H,{onClick:()=>!a&&O(),hasText:!!e,disabled:a,children:[p(N,{src:a?A:t?E:r?W:F,alt:"checkbox"}),e&&p(G,{size:V,disabled:a,checked:r,indeterminate:t,children:e})]})}const H=g.div`
  display: flex;
  align-items: center;
  justify-content: ${({hasText:e})=>e?"flex-start":"center"};
  gap: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,N=g.img`
  width: 16px;
  height: 16px;
  vertical-align: middle;
`,G=g.span`
  ${({size:e})=>{const r=h.paragraphs[e]??h.paragraphs.p6;return`
      font-size: ${r.fontSize};
      font-weight: ${r.fontWeight};
      line-height: ${r.lineHeight};
      letter-spacing: ${r.letterSpacing};
    `}};

  color: ${({disabled:e,checked:r,indeterminate:t})=>e?m.gray2:r||t?m.gray5:m.gray4};

  font-family: ${h.fontFamily};
  display: inline-block;
`;u.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{text:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'caption1' | 'caption2'",elements:[{name:"literal",value:"'p1'"},{name:"literal",value:"'p2'"},{name:"literal",value:"'p3'"},{name:"literal",value:"'p4'"},{name:"literal",value:"'p5'"},{name:"literal",value:"'p6'"},{name:"literal",value:"'caption1'"},{name:"literal",value:"'caption2'"}]},description:"",defaultValue:{value:"'p6'",computed:!1}}}};const Z={title:"Atom/CheckBox",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked!"}}},n={args:{text:"체크박스",checked:!0,onClick:()=>{}}},c={args:{text:"체크박스 해제",checked:!1,onClick:()=>{}}},s={args:{text:"비활성화",checked:!1,disabled:!0,onClick:()=>{}}},o={args:{text:"비활성 + 체크됨",checked:!0,disabled:!0,onClick:()=>{}}},i={args:{text:"일부 선택됨",checked:!0,indeterminate:!0,onClick:()=>{}}},l={args:{checked:!0,onClick:()=>{}}},d={render:e=>_("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[p(u,{...e,text:"P6 크기",size:"p6"}),p(u,{...e,text:"P5 크기",size:"p5"})]}),args:{checked:!0,onClick:()=>{}}};var k,f,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: '체크박스',
    checked: true,
    onClick: () => {}
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,y,v;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: '체크박스 해제',
    checked: false,
    onClick: () => {}
  }
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,I,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: '비활성화',
    checked: false,
    disabled: true,
    onClick: () => {}
  }
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var w,z,$;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: '비활성 + 체크됨',
    checked: true,
    disabled: true,
    onClick: () => {}
  }
}`,...($=(z=o.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var T,U,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: '일부 선택됨',
    checked: true,
    indeterminate: true,
    onClick: () => {}
  }
}`,...(q=(U=i.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var D,B,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: true,
    onClick: () => {}
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var j,P,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <CheckBox {...args} text="P6 크기" size="p6" />
      <CheckBox {...args} text="P5 크기" size="p5" />
    </div>,
  args: {
    checked: true,
    onClick: () => {}
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const ee=["Checked","Unchecked","DisabledUnchecked","DisabledChecked","Indeterminate","IconOnly","Sizes"];export{n as Checked,o as DisabledChecked,s as DisabledUnchecked,l as IconOnly,i as Indeterminate,d as Sizes,c as Unchecked,ee as __namedExportsOrder,Z as default};
