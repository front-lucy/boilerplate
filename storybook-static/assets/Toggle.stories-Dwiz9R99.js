import{a as j,j as i,n as l}from"./emotion-styled.browser.esm-C1VEUX-q.js";import{c as a}from"./colors-Ba8S9bGL.js";import{r as A}from"./index-D4lIrffr.js";import"./jsx-runtime-D_zvdyIk.js";function u({checked:e,onClick:r,disabled:s=!1}){return j(_,{checked:e,disabled:s,onClick:()=>{s||r()},children:[i(p,{grow:e}),i($,{checked:e,disabled:s}),i(p,{grow:!e})]})}const _=l.div`
  width: 55px;
  height: 28px;
  border-radius: 25px;
  padding: 3px;
  background-color: ${({checked:e,disabled:r})=>r?a.gray2:e?a.primary:a.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.3s ease;
`,$=l.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({disabled:e})=>e?a.gray1:a.white}; // #FAFAFA or #FFFFFF
  transition: all 0.3s ease;
`,p=l.div`
  flex-grow: ${({grow:e})=>e?1:0};
  transition: flex-grow 0.3s ease;
`;u.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const K={title:"Atom/Toggle",component:u,tags:["autodocs"]},o={render:()=>{const[e,r]=A.useState(!1);return i(u,{checked:e,onClick:()=>r(s=>!s)})}},c={args:{checked:!0,onClick:()=>{}}},n={args:{checked:!1,onClick:()=>{}}},t={args:{checked:!1,disabled:!0,onClick:()=>{}}},d={args:{checked:!0,disabled:!0,onClick:()=>{}}};var g,m,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Toggle checked={checked} onClick={() => setChecked(prev => !prev)} />;
  }
}`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var h,f,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    onClick: () => {}
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,x,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    onClick: () => {}
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,F,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    onClick: () => {}
  }
}`,...(S=(F=t.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var v,T,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    onClick: () => {}
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const N=["Default","Checked","Unchecked","Disabled","CheckedDisabled"];export{c as Checked,d as CheckedDisabled,o as Default,t as Disabled,n as Unchecked,N as __namedExportsOrder,K as default};
