import{j as i,n as x}from"./emotion-styled.browser.esm-C1VEUX-q.js";import{c as o}from"./colors-Ba8S9bGL.js";import{t as r}from"./typography-tioUjm4z.js";import{r as y}from"./index-D4lIrffr.js";import"./jsx-runtime-D_zvdyIk.js";function p({text:e,checked:t,onClick:c}){return i($,{checked:t,onClick:c,children:i(S,{checked:t,children:e})})}const $=x.div`
  padding: 7px 9px;
  background-color: ${({checked:e})=>e?o.primary10:"#F3F3F3"};
  border: ${({checked:e})=>e?`1px solid ${o.primary30}`:"1px solid transparent"};
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;
`,S=x.span`
  font-size: ${r.paragraphs.p7.fontSize};
  font-weight: ${r.paragraphs.p7.fontWeight};
  line-height: ${r.paragraphs.p7.lineHeight};
  letter-spacing: ${r.paragraphs.p7.letterSpacing};
  color: ${({checked:e})=>e?o.primary:o.gray4};
  font-family: ${r.fontFamily};
  white-space: nowrap;
`;p.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{text:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const U={title:"Atom/Chip",component:p,tags:["autodocs"]},a={render:()=>{const[e,t]=y.useState(!1);return i(p,{text:"Default Chip",checked:e,onClick:()=>t(c=>!c)})}},n={args:{text:"Checked Chip",checked:!0,onClick:()=>{}}},s={args:{text:"Unchecked Chip",checked:!1,onClick:()=>{}}};var d,h,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Chip text="Default Chip" checked={checked} onClick={() => setChecked(prev => !prev)} />;
  }
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var m,u,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Checked Chip',
    checked: true,
    onClick: () => {}
  }
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,C,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Unchecked Chip',
    checked: false,
    onClick: () => {}
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const _=["Default","Checked","Unchecked"];export{n as Checked,a as Default,s as Unchecked,_ as __namedExportsOrder,U as default};
