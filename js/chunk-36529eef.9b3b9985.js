(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36529eef"],{"1e78":function(e,t,n){},4819:function(e,t,n){"use strict";n("1e78")},7571:function(e,t,n){"use strict";var c=n("7a23"),o=n("1d19"),i=n("4d91"),a=n("4293"),l=n.n(a),r=n("a9d4"),u=n("9ff2"),s=n("4df5");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=Object(c["defineComponent"])({name:"ACheckableTag",props:{prefixCls:i["a"].string,checked:i["a"].looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,t){var n=t.slots,i=t.emit,a=Object(c["inject"])("configProvider",s["b"]),l=a.getPrefixCls,r=function(t){var n=e.checked;i("update:checked",!n),i("change",!n),i("click",t)};return function(){var t,i,a=e.checked,u=e.prefixCls,s=l("tag",u),b=Object(o["a"])(s,(t={},d(t,"".concat(s,"-checkable"),!0),d(t,"".concat(s,"-checkable-checked"),a),t));return Object(c["createVNode"])("span",{class:b,onClick:r},[null===(i=n.default)||void 0===i?void 0:i.call(n)])}}}),f=b;function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(c["isVNode"])(e)}var j=new RegExp("^(".concat(u["a"].join("|"),")(-inverse)?$")),O=new RegExp("^(".concat(u["b"].join("|"),")$")),g={prefixCls:i["a"].string,color:{type:String},closable:i["a"].looseBool.def(!1),closeIcon:i["a"].VNodeChild,visible:i["a"].looseBool,onClose:{type:Function},icon:i["a"].VNodeChild},h=Object(c["defineComponent"])({name:"ATag",emits:["update:visible","close"],setup:function(e,t){var n=t.slots,i=t.emit,a=t.attrs,u=Object(c["inject"])("configProvider",s["b"]),d=u.getPrefixCls,b=Object(c["ref"])(!0);Object(c["watchEffect"])((function(){void 0!==e.visible&&(b.value=e.visible)}));var f=function(t){t.stopPropagation(),i("update:visible",!1),i("close",t),t.defaultPrevented||void 0===e.visible&&(b.value=!1)},g=function(){var t=e.color;return!!t&&(j.test(t)||O.test(t))};return function(){var t,i,u,s,j=e.prefixCls,O=e.icon,h=void 0===O?null===(i=n.icon)||void 0===i?void 0:i.call(n):O,m=e.color,k=e.closeIcon,C=void 0===k?null===(u=n.closeIcon)||void 0===u?void 0:u.call(n):k,y=e.closable,N=void 0!==y&&y,w=g(),x=d("tag",j),V=function(){return N?C?Object(c["createVNode"])("div",{class:"".concat(x,"-close-icon"),onClick:f},v(C)?C:{default:function(){return[C]}}):Object(c["createVNode"])(l.a,{class:"".concat(x,"-close-icon"),onClick:f},null):null},B={backgroundColor:m&&!g()?m:void 0},L=Object(o["a"])(x,(t={},p(t,"".concat(x,"-").concat(m),w),p(t,"".concat(x,"-has-color"),m&&!w),p(t,"".concat(x,"-hidden"),!b.value),t)),P=h||null,F=null===(s=n.default)||void 0===s?void 0:s.call(n),I=P?Object(c["createVNode"])(c["Fragment"],null,[P,Object(c["createVNode"])("span",null,v(F)?F:{default:function(){return[F]}})]):F,S="onClick"in a,T=Object(c["createVNode"])("span",{class:L,style:B},[I,V()]);return S?Object(c["createVNode"])(r["a"],null,v(T)?T:{default:function(){return[T]}}):T}}});h.props=g,h.CheckableTag=f,h.install=function(e){return e.component(h.name,h),e.component(f.name,f),e};t["a"]=h},"9ff2":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var c=n("46b7"),o=Object(c["a"])("success","processing","error","default","warning"),i=Object(c["a"])("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},a54e:function(e,t,n){},aae7:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["withScopeId"])("data-v-ca58a640");Object(c["pushScopeId"])("data-v-ca58a640");var i={class:"main"},a={class:"content flex flex-row flex-wrap"},l={class:"title"},r={class:"demo-d"};Object(c["popScopeId"])();var u=o((function(e,t,n,u,s,d){var b=Object(c["resolveComponent"])("PageHeader"),f=Object(c["resolveComponent"])("a-tag"),p=Object(c["resolveComponent"])("EllipaisFun");return Object(c["openBlock"])(),Object(c["createBlock"])("div",i,[Object(c["createVNode"])(b,{title:"文本省略"}),Object(c["createVNode"])("div",a,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.ellipasisLists,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"demo",key:t},[Object(c["createVNode"])("div",l,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.title,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(f,{color:e.color},{default:o((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t),1)]})),_:2},1032,["color"])})),256))]),Object(c["createVNode"])("div",r,[Object(c["createVNode"])(p,e,null,16)])])})),128))])])})),s=(n("d3b7"),n("b97c3"),n("7571")),d="史蒂夫—乔布斯，是一名美国企业家、营销家和发明家，苹果公司的联合创始人之一，曾任董事长及首席执行官职位，NeXT创办人及首席执行官，也是皮克斯动画的创办人并曾任首席执行官，2006年为华特迪士尼公司的董事会成员。2017年9月苹果发布会举行的地方，以他命名为 Steve Jobs Theater 。",b=[{type:"length",text:d,isCharLimit:!0,maxLength:50,title:["长度限制","长度50"],color:"pink"},{type:"rows",text:d,isLineLimit:!0,limitLineNumber:3,title:["行数限制","行数3"],color:"red"},{type:"height",text:d,isHeightLimit:!0,limitHeightNumber:46,title:["高度限制","高度40"],color:"cyan"},{type:"length",text:d,isCharLimit:!0,maxLength:50,showAll:!1,title:["长度限制","无悬停全文"],color:"pink"}],f=Object(c["defineComponent"])({components:{PageHeader:Object(c["defineAsyncComponent"])((function(){return n.e("chunk-430ffd96").then(n.bind(null,"3b94"))})),Ellipais:Object(c["defineAsyncComponent"])((function(){return Promise.all([n.e("chunk-4f9fc8d3"),n.e("chunk-232325a2")]).then(n.bind(null,"1bf1"))})),EllipaisFun:Object(c["defineAsyncComponent"])((function(){return Promise.all([n.e("chunk-4f9fc8d3"),n.e("chunk-e5b3beaa")]).then(n.bind(null,"0b91"))})),aTag:s["a"]},props:{},setup:function(){return{ellipasisLists:b}}});n("4819");f.render=u,f.__scopeId="data-v-ca58a640";t["default"]=f},b97c3:function(e,t,n){"use strict";n("b2a3"),n("a54e")}}]);
//# sourceMappingURL=chunk-36529eef.9b3b9985.js.map