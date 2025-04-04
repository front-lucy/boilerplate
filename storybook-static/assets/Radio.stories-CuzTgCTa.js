import{a as R,j as s,n as d}from"./emotion-styled.browser.esm-C1VEUX-q.js";import{c as a}from"./colors-Ba8S9bGL.js";import{t as u}from"./typography-tioUjm4z.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";function m({text:e,checked:r,onClick:t,disabled:n=!1,size:q="p6"}){return R(j,{onClick:()=>!n&&t(),disabled:n,children:[s(U,{checked:r,disabled:n,children:r&&s(_,{disabled:n})}),s(A,{size:q,disabled:n,checked:r,children:e})]})}const j=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,U=d.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${a.white};
  border: 2px solid
    ${({checked:e,disabled:r})=>r?a.gray2:e?a.primary:a.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
`,_=d.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({disabled:e})=>e?a.gray2:a.primary};
`,A=d.span`
  ${({size:e})=>{const r=u.paragraphs[e]||u.paragraphs.p6;return`
        font-size: ${r.fontSize};
        font-weight: ${r.fontWeight};
        line-height: ${r.lineHeight};
        letter-spacing: ${r.letterSpacing};
      `}};

  color: ${({disabled:e,checked:r})=>e?a.gray2:r?a.gray4:a.gray5};

  font-family: ${u.fontFamily};
`;m.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{text:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'caption1' | 'caption2'",elements:[{name:"literal",value:"'p1'"},{name:"literal",value:"'p2'"},{name:"literal",value:"'p3'"},{name:"literal",value:"'p4'"},{name:"literal",value:"'p5'"},{name:"literal",value:"'p6'"},{name:"literal",value:"'caption1'"},{name:"literal",value:"'caption2'"}]},description:"",defaultValue:{value:"'p6'",computed:!1}}}};const H={title:"Atom/Radio",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked!"}}},o={args:{text:"선택됨",checked:!0,onClick:()=>{}}},i={args:{text:"선택 안됨",checked:!1,onClick:()=>{}}},c={args:{text:"비활성 상태",checked:!1,disabled:!0,onClick:()=>{}}},l={args:{text:"비활성 선택됨",checked:!0,disabled:!0,onClick:()=>{}}},p={render:e=>s("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["p1","p2","p3","p4","p5","p6","caption1","caption2"].map(t=>s(m,{...e,size:t,text:`Size: ${t}`},t))}),args:{checked:!0,onClick:()=>{}}};var g,h,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: '선택됨',
    checked: true,
    onClick: () => {}
  }
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,y,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: '선택 안됨',
    checked: false,
    onClick: () => {}
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,C,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: '비활성 상태',
    checked: false,
    disabled: true,
    onClick: () => {}
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var b,$,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: '비활성 선택됨',
    checked: true,
    disabled: true,
    onClick: () => {}
  }
}`,...(S=($=l.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var w,D,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const sizes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'caption1', 'caption2'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        {sizes.map(size => <Radio key={size} {...args} size={size} text={\`Size: \${size}\`} />)}
      </div>;
  },
  args: {
    checked: true,
    onClick: () => {}
  }
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const L=["Checked","Unchecked","DisabledUnchecked","DisabledChecked","AllSizes"];export{p as AllSizes,o as Checked,l as DisabledChecked,c as DisabledUnchecked,i as Unchecked,L as __namedExportsOrder,H as default};
