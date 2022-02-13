"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{7595:function(e,n,t){t.d(n,{pq:function(){return y},gF:function(){return p}});var r=t(4293),o=t(7294),i=t(2062),c=t(2349),a=t(5620);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}const s=["initialCode","transformCode"],p=e=>{let{initialCode:n="",transformCode:t}=e,i=l(e,s);const[c,a]=(0,o.useState)(n),{element:p,error:d}=(0,r.ud)(u({code:t?t(c):c},i));return(0,o.useEffect)((()=>{a(n)}),[n]),{element:p,error:d,code:c,onChange:a}},d={plain:{color:"#ffffff",backgroundColor:"#282c34"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#b2b2b2"}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:"#b2b2b2"}},{types:["boolean"],style:{color:"#ff8b50"}},{types:["tag"],style:{color:"#fc929e"}},{types:["string"],style:{color:"#8dc891"}},{types:["punctuation"],style:{color:"#88c6Be"}},{types:["selector","char","builtin","inserted"],style:{color:"#d8dee9"}},{types:["function"],style:{color:"#79b6f2"}},{types:["operator","entity","url","variable"],style:{color:"#d7deea"}},{types:["keyword"],style:{color:"#c5a5c5"}},{types:["class-name"],style:{color:"#fac863"}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"700"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["namespace"],style:{opacity:.7}}]},f=["children","language","theme","Prism","padding","noWrapper","noWrap","className","style"],m=e=>{let{children:n,language:t="jsx",theme:r=d,Prism:i=c.Z,padding:s=10,noWrapper:p,noWrap:m,className:g,style:y}=e,h=l(e,f);return o.createElement(a.ZP,{code:n||"",language:t,Prism:i,theme:r},(e=>{let{className:n,style:t,tokens:r,getLineProps:i,getTokenProps:c}=e;const a=r.map(((e,n)=>o.createElement("div",i({line:e,key:n}),e.map(((e,n)=>o.createElement("span",c({token:e,key:n})))))));return p?a:o.createElement("pre",u({className:g?n+" "+g:n,style:u({},t,{margin:0,padding:s,whiteSpace:m?"pre":"pre-wrap"},y)},h),a)}))},g=["defaultValue","value","language","theme","Prism","padding","onChange"],y=e=>{let{defaultValue:n,value:t,language:r="jsx",theme:c=d,Prism:a,padding:s=10,onChange:p}=e,f=l(e,g);const[y,h]=(0,o.useState)(n||""),b=void 0!==t,v=(0,o.useCallback)((e=>o.createElement(m,{language:r,theme:c,Prism:a,noWrapper:!0},e)),[r,c,a]),w=(0,o.useRef)(p);w.current=p;const x=(0,o.useCallback)((e=>{b||h(e),null==w.current||w.current(e)}),[b]),k=(0,o.useMemo)((()=>u({},c.plain,f.style)),[c.plain,f.style]);return o.createElement(i.Z,u({},f,{padding:s,value:b?t:y,highlight:v,onValueChange:x,style:k}))};(0,o.createContext)({})},4293:function(e,n,t){t.d(n,{RC:function(){return f},Uq:function(){return d},ud:function(){return m}});var r=t(7294),o=t(81);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const c=e=>(0,o.vs)(e,{transforms:["jsx","typescript","imports"],production:!0}).code.substring(13),a=/^(\s*)(<[^>]*>|function[\(\s]|\(\)[\s=]|class\s)(.*)/,u=["default","import"],l=(e,n)=>{const{import:t}=n,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(n,u),c=i({React:r,require:p(t)},o),a=Object.keys(c),l=a.map((e=>c[e]));return new Function(...a,e)(...l)},s=e=>{const{code:n,scope:t}=e;if(!n.trim())return null;const o={};l(c((e=>e.replace(a,"$1export default $2$3"))(n)),i({render:e=>{o.default=e}},t,{exports:o}));const u=o.default;return u?(0,r.isValidElement)(u)?u:"function"==typeof u?(0,r.createElement)(u):"string"==typeof u?u:null:null},p=function(e){return void 0===e&&(e={}),n=>{if(!e.hasOwnProperty(n))throw new Error("Module not found: '"+n+"'");return e[n]}},d=(e,n)=>{const t={};return l(c(e),i({},n,{exports:t})),t};class f extends r.Component{constructor(){super(...arguments),this.state={element:null,error:null,prevCode:null,prevScope:null}}static getDerivedStateFromProps(e,n){if(n.prevCode===e.code&&n.prevScope===e.scope)return null;try{return{element:s(e),error:null,prevCode:e.code,prevScope:e.scope}}catch(n){return{element:null,error:n,prevCode:e.code,prevScope:e.scope}}}static getDerivedStateFromError(e){return{error:e}}componentDidMount(){var e,n;null==(e=(n=this.props).onRendered)||e.call(n,this.state.error||void 0)}shouldComponentUpdate(e,n){return e.code!==this.props.code||e.scope!==this.props.scope||n.error!==this.state.error}componentDidUpdate(){var e,n;null==(e=(n=this.props).onRendered)||e.call(n,this.state.error||void 0)}render(){return this.state.error?null:this.state.element}}const m=e=>{let{code:n,scope:t,disableCache:o}=e;const i=(0,r.useRef)(!0),c=(0,r.useRef)(null),[a,u]=(0,r.useState)((()=>{const e=(0,r.createElement)(f,{code:n,scope:t,onRendered:n=>{n?u({element:o?null:c.current,error:n.toString()}):c.current=e}});return{element:e,error:null}}));return(0,r.useEffect)((()=>{if(i.current)return void(i.current=!1);const e=(0,r.createElement)(f,{code:n,scope:t,onRendered:n=>{n?u({element:o?null:c.current,error:n.toString()}):c.current=e}});u({element:e,error:null})}),[n,t,o]),a}},4639:function(e,n,t){t.d(n,{YE:function(){return q},W2:function(){return H},MB:function(){return A},ph:function(){return T},Mh:function(){return Q},v5:function(){return Y}});var r=t(5893),o=t(7294),i=t(7379),c=t(4293),a=t(7595),u=t(7606),l=t(4228),s=t(1202),p=t(5740),d=t(9713),f=t(6827),m=t(6694),g=t(9282),y=t(443),h=t(6258),b=t(5499),v=t(6329),w=t(6421);const x=[(0,s.m8)(),u.yy.tabSize.of(2),u.yy.allowMultipleSelections.of(!0),(0,p.nY)(),y.R_.fallback,(0,f.vQ)(),(0,m.ys)(),l.$f.of([...f.GA,...d.wQ,...s.f$,...g.Du,...m.B1,{key:"Tab",run:e=>{let{state:n,dispatch:t}=e;return n.selection.ranges.some((e=>!e.empty))?(0,d.at)({state:n,dispatch:t}):(t(n.update(n.replaceSelection("  "),{scrollIntoView:!0,userEvent:"input"})),!0)},shift:d.xi},{key:"Escape",run:e=>(e.hasFocus&&e.dom.focus(),!0)}])],k=[(0,m.Gn)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}",{label:"try",detail:"block",type:"keyword"}),(0,m.Gn)("import { ${names} } from '${module}'\n${}",{label:"import",detail:"named",type:"keyword"}),(0,m.Gn)("import ${name} from '${module}'\n${}",{label:"import",detail:"default",type:"keyword"}),(0,m.Gn)("export default function ${App}() {\n\t${}\n}",{label:"export",detail:"default",type:"keyword"})],C={theme:new u.F6,padding:new u.F6,readOnly:new u.F6,showLineNumbers:new u.F6,wrapLine:new u.F6,extensions:new u.F6,filename:new u.F6},O={theme:e=>{return void 0===(n=e)&&(n="dark"),"dark"===n?[b.vk,l.tk.theme({"&.cm-editor.cm-focused .cm-activeLineGutter":{backgroundColor:"inherit",color:"white"},"&.cm-editor .cm-tooltip-autocomplete > ul > li[aria-selected]":{backgroundColor:"#353a42",color:"white"},"&.cm-editor .cm-tooltip":{backgroundColor:"#2c313a",color:"#abb2bf"}})]:"light"===n?[l.tk.theme({"&.cm-editor.cm-focused .cm-activeLineGutter":{backgroundColor:"inherit",color:"black"},"&.cm-editor .cm-gutters":{backgroundColor:"inherit",border:"none"}})]:n;var n},padding:e=>{return void 0===(n=e)&&(n=10),l.tk.theme({"&.cm-editor":{height:"100%"},"&.cm-editor.cm-focused":{outline:"none"},"&.cm-editor .cm-scroller":{overflow:"auto",fontFamily:"source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace"},"&.cm-editor .cm-line":{padding:0},"&.cm-editor .cm-content":{padding:"string"==typeof n?n:n+"px"},"&.cm-editor .cm-completionIcon":{width:"1em",paddingRight:"1.2em"},"&.cm-editor:not(.cm-focused) .cm-activeLine":{backgroundColor:"inherit"}});var n},readOnly:e=>e?l.tk.editable.of(!1):[(0,l.ZO)(),(0,h.HQ)()],showLineNumbers:e=>e?(0,h.Eu)():[],wrapLine:e=>e?l.tk.lineWrapping:[],extensions:e=>e||[],filename:e=>null!=e&&e.endsWith(".css")?(0,v.iv)():new p.ri(w._v,w.Lz.data.of({autocomplete:(0,m.eC)(["LineComment","BlockComment","String"],(0,m.Mb)(k))}))},j=(e,n)=>C[e].of(O[e](n)),B=function(e,n,t,r){void 0===r&&(r=[]),(0,o.useEffect)((()=>{var r;null==(r=e.current)||r.dispatch({effects:C[n].reconfigure(O[n](t))})}),[n,t,...r])},S="__default_filename__",P=e=>{e.dispatch({effects:l.tk.scrollIntoView(e.state.selection.main,{xMargin:30,yMargin:30})})};function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const M=["defaultValue","value","onChange","theme","padding","readOnly","showLineNumbers","wrapLine","extensions","filename","style"],L=(0,o.forwardRef)(((e,n)=>{let{defaultValue:t,value:r,onChange:i,theme:c,padding:a,readOnly:s,showLineNumbers:p,wrapLine:d,extensions:f,filename:m,style:g}=e,y=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(e,M);const h=(0,o.useRef)(null),b=(0,o.useMemo)((()=>t),[m]),v=(e=>{let{parentRef:n,code:t,onChange:r,theme:i,padding:c,readOnly:a,showLineNumbers:s,wrapLine:p,extensions:d,filename:f=S}=e;const m=(0,o.useRef)(null),g=(0,o.useRef)(new Map),y=(0,o.useRef)(new Map),h=(0,o.useRef)(),b=(0,o.useRef)(r);return b.current=r,(0,o.useEffect)((()=>{if(n.current){if(h.current&&m.current&&(g.current.set(h.current,m.current.state),!m.current.hasFocus&&m.current.focus()),m.current&&f&&g.current.has(f)){const e=g.current.get(f);m.current.setState(e),P(m.current)}else{const e=u.yy.create({doc:t,extensions:[x,l.tk.updateListener.of((e=>{if(e.docChanged){const n=e.state.sliceDoc();y.current.set(f,n),null==b.current||b.current(n)}})),j("theme",i),j("padding",c),j("readOnly",a),j("showLineNumbers",s),j("wrapLine",p),j("extensions",d),j("filename",f)]});m.current?(m.current.setState(e),P(m.current)):m.current=new l.tk({state:e,parent:n.current})}y.current.has(f)||y.current.set(f,t),h.current=f}}),[f]),(0,o.useEffect)((()=>{m.current&&void 0!==t&&t!==y.current.get(f)&&m.current.dispatch({changes:{from:0,to:m.current.state.doc.length,insert:t}})}),[t,f]),B(m,"theme",i,[f]),B(m,"padding",c,[f]),B(m,"readOnly",a,[f]),B(m,"showLineNumbers",s,[f]),B(m,"wrapLine",p,[f]),B(m,"extensions",d,[f]),B(m,"filename",f),(0,o.useEffect)((()=>()=>{m.current&&(m.current.destroy(),m.current=null),g.current.clear(),y.current.clear()}),[]),m})({parentRef:h,code:void 0!==r?r:b,onChange:i,theme:c,padding:a,readOnly:s,showLineNumbers:p,wrapLine:d,extensions:f,filename:m});(0,o.useEffect)((()=>("function"==typeof n?n(v.current):n&&(n.current=v.current),()=>{"function"==typeof n?n(null):n&&(n.current=null)})),[]);const w=(0,o.useMemo)((()=>E({fontFamily:"source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",backgroundColor:"dark"===c?"#282c34":"light"===c?"white":void 0},g,{color:"dark"===c?"#abb2bf":"light"===c?"#282c34":void 0},g)),[g,c]);return o.createElement("div",E({ref:h,style:w},y))}));function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){I(e,n,t[n])}))}return e}function N(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function F(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function $(){var e=F(["\n  display: flex;\n  box-shadow: 0 0 8px 0 lightsteelblue;\n  height: 300px;\n  overflow: hidden;\n\n  @media (max-width: 640px) {\n    flex-direction: column-reverse;\n    height: 480px;\n  }\n"]);return $=function(){return e},e}function _(){var e=F(["\n  flex: 0 1 720px;\n  overflow: auto;\n"]);return _=function(){return e},e}function D(){var e=F(["\n  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 14px;\n  white-space: pre;\n  caret-color: #fff;\n  min-width: 100%;\n  min-height: 100%;\n  float: left;\n\n  & > textarea,\n  & > pre {\n    outline: none;\n    white-space: pre !important;\n  }\n"]);return D=function(){return e},e}function z(){var e=F(["\n  font-size: 14px;\n  flex: 0 1 720px;\n  overflow: hidden;\n"]);return z=function(){return e},e}function W(){var e=F(["\n  flex: 1 1 720px;\n  position: relative;\n  display: flex;\n  background: #fff;\n  overflow: hidden;\n"]);return W=function(){return e},e}function G(){var e=F(["\n  margin: auto;\n  white-space: pre-wrap;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n"]);return G=function(){return e},e}function V(){var e=F(["\n  background: #fcc;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  margin: 0;\n  padding: 10px;\n  color: #f00;\n  white-space: pre-wrap;\n"]);return V=function(){return e},e}var H=i.default.div.withConfig({componentId:"sc-c4a1c449-0"})($()),U=i.default.div.withConfig({componentId:"sc-c4a1c449-1"})(_()),Z=(0,i.default)(a.pq).withConfig({componentId:"sc-c4a1c449-2"})(D()),q=(0,i.default)(L).withConfig({componentId:"sc-c4a1c449-3"})(z()),T=i.default.div.withConfig({componentId:"sc-c4a1c449-4"})(W()),A=i.default.div.withConfig({componentId:"sc-c4a1c449-5"})(G()),Q=i.default.div.withConfig({componentId:"sc-c4a1c449-6"})(V()),Y=function(e){var n=e.code,t=e.transformCode,i=e.language,a=N(e,["code","transformCode","language"]),u=(0,o.useState)((n||"").trim()),l=u[0],s=u[1],p=(0,c.ud)(R({code:t?t(l):l},a)),d=p.element,f=p.error;return(0,r.jsxs)(H,{children:[(0,r.jsx)(U,{children:(0,r.jsx)(Z,{value:l,language:i,onChange:s})}),(0,r.jsxs)(T,{children:[(0,r.jsx)(A,{children:d}),f&&(0,r.jsx)(Q,{children:f})]})]})}},2660:function(e,n,t){t.d(n,{e:function(){return m},$:function(){return g}});var r=t(7294),o=t(7379),i=t(865),c=t(9971);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=u(['\n    <>\n      <h2>React Runner</h2>\n      <ul>\n        <li>Inline element</li>\n        <li>Function component</li>\n        <li>\n          Class component, <b>with class fields support</b>\n        </li>\n        <li>\n          Composing components with <b>render</b> or <b>export default</b>\n        </li>\n        <li>Server Side Rendering</li>\n        <li><b>import</b> statement</li>\n        <li><a href="#multi-files">Multi files</a></li>\n        <li>Typescript</li>\n      </ul>\n      <div>\n        <span>Hacker News </span>\n        <a href="#hacker-news">in react-runner</a>\n        <span> vs </span>\n        <a href="examples/hacker-news">in real world</a>\n      </div>\n    </>\n    ']);return l=function(){return e},e}function s(){var e=u(["\n    function Counter() {\n      const [count, setCount] = React.useState(0)\n\n      return (\n        <>\n          <div>{count}</div>\n          <button onClick={() => setCount(count => count + 1)}>+</button>\n          <button onClick={() => setCount(count => count - 1)}>-</button>\n        </>\n      )\n    }\n    "]);return s=function(){return e},e}function p(){var e=u(["\n    class Counter extends React.Component {\n      state = {\n        count: 0,\n      }\n\n      onIncrement = () => {\n        this.setState(({ count }) => ({\n          count: count + 1,\n        }))\n      }\n\n      onDecrement = () => {\n        this.setState(({ count }) => ({\n          count: count - 1,\n        }))\n      }\n\n      render() {\n        return (\n          <div>\n            <div>{this.state.count}</div>\n            <button onClick={this.onIncrement}>+</button>\n            <button onClick={this.onDecrement}>-</button>\n          </div>\n        )\n      }\n    }\n    "]);return p=function(){return e},e}function d(){var e=u(["\n    const Button = styled.button`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      ${props => props.primary && css`\n        background: steelblue;\n        color: white;\n      `}\n    `\n\n    export default () => (\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "],["\n    const Button = styled.button\\`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      \\${props => props.primary && css\\`\n        background: steelblue;\n        color: white;\n      \\`}\n    \\`\n\n    export default () => (\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "]);return d=function(){return e},e}function f(){var e=u(["\n    const Button = styled.button`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      ${props => props.primary && css`\n        background: steelblue;\n        color: white;\n      `}\n    `\n\n    render(\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "],["\n    const Button = styled.button\\`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      \\${props => props.primary && css\\`\n        background: steelblue;\n        color: white;\n      \\`}\n    \\`\n\n    render(\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "]);return f=function(){return e},e}var m=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},r,{styled:o.default,css:o.css,keyframes:o.keyframes,createGlobalStyle:o.createGlobalStyle,import:{react:r,"styled-components":o}}),g=[{key:"inline-element",title:"Inline element",code:(0,i.FD)(l())},{key:"function-component",title:"Function Component",code:(0,i.FD)(s())},{key:"class-component",title:"Class Component with fields support",code:(0,i.FD)(p())},{key:"export-default",title:"export default Component",code:(0,i.FD)(d())},{key:"render",title:"render(<Component />)",code:(0,i.FD)(f())},{key:"hacker-news",title:"Hacker News (Typescript)",code:c.Z}]},9971:function(e,n){n.Z="import { useState, useEffect } from 'react'\nimport styled from 'styled-components'\n\ntype Item = {\n  id: number\n  title: string\n  points?: number | null\n  user?: string | null\n  time: number\n  time_ago: string\n  comments_count: number\n  type: string\n  url?: string\n  domain?: string\n}\n\nconst getItems = (page: number): Promise<Item[]> =>\n  fetch(`https://api.hnpwa.com/v0/news/${page}.json`)\n    .then((response) => response.json())\n    .catch()\n\nconst Link = styled.a`\n  color: steelblue;\n  text-decoration: none;\n`\n\nconst Meta = styled.span`\n  color: gray;\n  font-size: small;\n\n  & + &::before {\n    content: '|';\n    margin: 8px;\n  }\n`\n\nconst Item = ({ item }: { item: Item }) => (\n  <li>\n    <Link href={item.url} target=\"_blank\" rel=\"noopener noreferrer\">\n      {item.title}\n    </Link>\n    <div>\n      <Meta>{item.points} points</Meta>\n      <Meta>\n        by {item.user} {item.time_ago}\n      </Meta>\n      <Meta>{item.comments_count} comments</Meta>\n    </div>\n  </li>\n)\n\nconst Ul = styled.ul`\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 8px;\n`\n\nconst List = ({ page }: { page: number }) => {\n  const [items, setItems] = useState<Item[] | null>(null)\n\n  useEffect(() => {\n    getItems(page).then(setItems)\n  }, [page])\n\n  if (!items) return <Meta>loading...</Meta>\n  return (\n    <Ul>\n      {items.map((item) => (\n        <Item key={item.id} item={item} />\n      ))}\n    </Ul>\n  )\n}\n\nconst Container = styled.div`\n  padding: 16px;\n  max-width: 640px;\n  margin: auto;\n  background: white;\n`\n\nconst Header = styled.header`\n  height: 48px;\n  position: sticky;\n  top: 0;\n  background: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`\n\nconst Button = styled.button`\n  background: none;\n  border: none;\n`\n\nexport default function App() {\n  const [page, setPage] = useState(1)\n\n  return (\n    <Container>\n      <Header>\n        <h2>Hacker News</h2>\n        <div>\n          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>\n            prev\n          </Button>\n          <Meta> {page} / 10 </Meta>\n          <Button disabled={page >= 10} onClick={() => setPage(page + 1)}>\n            next\n          </Button>\n        </div>\n      </Header>\n      <List page={page} />\n    </Container>\n  )\n}\n"}}]);