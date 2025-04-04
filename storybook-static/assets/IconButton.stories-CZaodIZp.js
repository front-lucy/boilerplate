import{j as s,n as I}from"./emotion-styled.browser.esm-C1VEUX-q.js";import{I as T}from"./Icon-DlYnkd-R.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";function f({icon:e,onClick:b,size:y=16,disabled:a=!1,alt:v="icon"}){return s(q,{onClick:b,disabled:a,children:s(T,{src:e,alt:v,size:y,disabled:a})})}const q=I.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.4:1};
`;f.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'icon'",computed:!1}}}};const D={title:"Atom/IconButton",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},icon:{control:"text",description:"아이콘 이미지 경로 (img src)"},size:{control:"number",defaultValue:16},disabled:{control:"boolean"}}},n={args:{icon:"/icons/icon-calendar-20.svg"}},r={args:{icon:"/icons/icon-calendar-20.svg",size:24}},o={args:{icon:"/icons/icon-calendar-20.svg",disabled:!0}};var t,c,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: '/icons/icon-calendar-20.svg'
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: '/icons/icon-calendar-20.svg',
    size: 24
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: '/icons/icon-calendar-20.svg',
    disabled: true
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const S=["Default","Large","Disabled"];export{n as Default,o as Disabled,r as Large,S as __namedExportsOrder,D as default};
