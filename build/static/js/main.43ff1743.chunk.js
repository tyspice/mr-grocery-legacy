(this["webpackJsonpmr-grocery-front-end"]=this["webpackJsonpmr-grocery-front-end"]||[]).push([[0],{31:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(18),i=a.n(o),u=a(23),s=a(7),m=a(8),f=a(9),h=a(11),d=a(10),y=a(24),p=function(e){return r.a.createElement(y.a,null,r.a.createElement("h1",null,"Mr Grocery"),r.a.createElement("p",null,"Welcome to Mr Grocery"))},E=a(43),b=(a(37),a(44)),v=a(49),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(f.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(){this.props.fetchData()}},{key:"render",value:function(){return r.a.createElement(E.a,{fluid:!0},r.a.createElement(b.a,{"aria-label":"Basic example"},r.a.createElement(v.a,{variant:"secondary",onClick:this.handleClick},"Fetch Them Groceries")))}}]),a}(r.a.Component),O=a(48),k=a(45),g=a(47),x=a(46),C=function(e){return r.a.createElement(x.a,{horizontal:!0},r.a.createElement(x.a.Item,{key:Object(O.a)(),style:{flexBasis:"33%"}},e.item),r.a.createElement(x.a.Item,{key:Object(O.a)(),style:{flexBasis:"33%"}},e.inventoryStatus),r.a.createElement(x.a.Item,{key:Object(O.a)(),style:{flexBasis:"34%"},variant:"info"},"Notes: ".concat(e.notes)))},S=function(e){var t=e.data;return r.a.createElement(k.a,{defaultActiveKey:"0"},r.a.createElement(g.a,null,r.a.createElement(k.a.Toggle,{as:g.a.Header,eventKey:toString(e.index)},e.category),r.a.createElement(k.a.Collapse,{eventKey:toString(e.index)},r.a.createElement(E.a,null,t.map((function(e){return r.a.createElement(C,{key:Object(O.a)(),item:e.item,inventoryStatus:e.inventoryStatus,notes:e.notes})}))))))},D=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,t=Object.keys(e);return r.a.createElement(E.a,null,t.map((function(t){return r.a.createElement(S,{key:Object(O.a)(),category:t,data:e[t]})})))}}]),a}(r.a.Component),B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{}},n.fetchData=n.fetchData.bind(Object(f.a)(n)),n}return Object(m.a)(a,[{key:"fetchData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://mr-grocery-v2.herokuapp.com//api/v2/data",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,a=JSON.parse(a),console.log(a),this.setState({data:a});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(E.a,null,r.a.createElement(j,{fetchData:this.fetchData}),r.a.createElement(D,{data:this.state.data})))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.43ff1743.chunk.js.map