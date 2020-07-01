(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,t,n){e.exports=n(259)},259:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(50),i=n.n(r),c=n(7),s=n(6),u=n(108),p=n(9),l=n(10),m=n(12),d=n(11),f=n(17),h=n.n(f),O=n(40),b=n(109),v=n.n(b).a.create({baseURL:"https://vivianzhang-todo-app-api.herokuapp.com"}),y=function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.delete("/todos/".concat(e));case 2:console.log("deleting id: ".concat(e)),n({type:"TODO_DELETE",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return{type:"TODO_GET",payload:e}},E=function(){return{type:"DESELECT_ACTIVE_TODO"}},D=n(104),j=n(105),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onCheck=function(t){var n=t.itemId;t.input.value&&e.props.deleteToDo(n)},e.renderCheckMark=function(t){return e.onCheck(t),a.a.createElement("input",Object.assign({},t.input,{type:"checkbox",value:"false",className:"checkmark"}))},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"checkmark-container"},a.a.createElement(D.a,{name:this.props.name,component:this.renderCheckMark,item:this.props.item,itemId:this.props.itemId}),a.a.createElement("div",{className:"styled-checkmark"}))}}]),n}(a.a.Component);g=Object(c.b)(null,{deleteToDo:y})(g);var k=Object(j.a)({form:"items",enableReinitialize:!0})(g),C=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onEditClick=function(t){e.props.getToDo(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.itemProps,n=t.id,o=t.input;return a.a.createElement("form",{id:n},a.a.createElement("div",{className:"item",onClick:function(e){return e.stopPropagation()}},a.a.createElement(k,{name:o,item:o,itemId:n}),a.a.createElement("div",{className:"item-name",onClick:function(){return e.onEditClick(e.props.itemProps)}},o)))}}]),n}(a.a.Component),w=Object(c.b)((function(e){return{activeToDo:e.activeToDo}}),{deleteToDo:y,getToDo:T})(C),S=n(52),_=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderInput=function(e){return console.log(e),a.a.createElement("div",{style:{display:"block",width:"100%"}},a.a.createElement("input",Object.assign({},e.input,{autoComplete:"off",autoFocus:!0,placeholder:"+ Add"})),e.meta.error)},e.formOnChangeSubmit=function(t){e.props.formOnChangeSubmit(t)},e.formOnSubmit=function(t,n){e.props.formOnSubmit(t,n)},e.onKeyPress=function(t){e.props.arrowsKeyPress(t)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize(this.props.initialValues)}},{key:"render",value:function(){var e=this;return a.a.createElement("form",{style:{display:"block",width:"84%"},onBlur:function(){return setTimeout(e.props.handleSubmit(e.formOnSubmit))},onSubmit:this.props.handleSubmit(this.formOnSubmit),onKeyDown:this.onKeyPress,onChange:function(){return setTimeout(e.props.handleSubmit(e.formOnChangeSubmit))}},a.a.createElement("div",{onClick:function(e){return e.stopPropagation()},style:{display:"block",width:"100%"}},a.a.createElement(D.a,{name:"input",component:this.renderInput})))}}]),n}(a.a.Component);_=Object(j.a)({form:"create-todo",enableReinitialize:!0,validate:function(e){var t={};return e.input||(t.input=" "),t}})(_);var P=Object(c.b)((function(e){return{initialValues:{input:e.activeToDo.input},activeToDo:e.activeToDo,todos:Object.values(e.todos)}}),{deselectActiveToDo:E,getToDo:T})(_),x=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).formOnChangeSubmit=function(e){o.props.editToDo(o.props.activeToDo.id,e)},o.getNextItem=function(e){o.props.todos.forEach((function(t){if(t.id===o.props.activeToDo.id){var n=-1;if("enter"===e||40===e||9===e?n=o.props.todos.indexOf(t)+1:38===e&&(n=o.props.todos.indexOf(t)-1),n===o.props.todos.length)o.props.deselectActiveToDo();else{if(-1===n)return null;o.props.getToDo(o.props.todos[n])}}}))},o.formOnSubmit=function(){o.getNextItem("enter")},o.arrowsKeyPress=function(e){38===e.keyCode?o.getNextItem(38):40===e.keyCode?o.getNextItem(40):e.keyCode},o.handleKeyDown=o.arrowsKeyPress.bind(Object(S.a)(o)),o}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.itemProps,t=e.id,n=e.input;return a.a.createElement("div",{className:"item active"},a.a.createElement(k,{name:n,item:n,itemId:t}),a.a.createElement(P,{formOnChangeSubmit:this.formOnChangeSubmit,formOnSubmit:this.formOnSubmit,arrowsKeyPress:this.arrowsKeyPress}))}}]),n}(a.a.Component),I=Object(c.b)((function(e){return{activeToDo:e.activeToDo,todos:Object.values(e.todos)}}),{editToDo:function(e,t){return function(){var n=Object(O.a)(h.a.mark((function n(o){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.patch("/todos/".concat(e),t);case 2:a=n.sent,o({type:"TODOS_EDIT",payload:a.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},deselectActiveToDo:E,getToDo:T})(x),N=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getToDos()}},{key:"render",value:function(){var e=this;return this.props.todos?this.props.todos.map((function(t){return t.id===e.props.activeToDo.id?a.a.createElement(I,{itemProps:t,key:t.id}):a.a.createElement(w,{itemProps:t,key:t.id})})):a.a.createElement("div",null,"loading...")}}]),n}(a.a.Component),A=Object(c.b)((function(e){return{todos:Object.values(e.todos),activeToDo:e.activeToDo}}),{getToDos:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/todos");case 2:n=e.sent,t({type:"TODOS_GET",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),K=n(25),L=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).formOnChangeSubmit=function(){return null},e.onFormSubmit=function(t,n){e.props.createToDo(t).then((function(){return n(Object(K.a)("create-todo"))}))},e.arrowsKeyPress=function(t){if(38===t.keyCode){var n=e.props.todos.length-1;e.props.getToDo(e.props.todos[n])}},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.activeToDo.id?a.a.createElement("div",{className:"item"},a.a.createElement("input",{placeholder:"+ Add"})):a.a.createElement("div",{style:{display:"block"},className:"item active"},a.a.createElement(P,{formOnSubmit:this.onFormSubmit,formOnChangeSubmit:this.formOnChangeSubmit,arrowsKeyPress:this.arrowsKeyPress}))}}]),n}(a.a.Component),R=Object(c.b)((function(e){return{activeToDo:e.activeToDo,todos:Object.values(e.todos)}}),{createToDo:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){var o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/todos",e);case 2:o=t.sent,n({type:"TODO_CREATE",payload:o.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getToDo:T})(L),z=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{onClick:function(){return e.props.deselectActiveToDo()},style:{minHeight:"100vh"},className:"wrapper"},a.a.createElement("h1",null,"To Do"),a.a.createElement("div",{className:"items-container"},a.a.createElement(A,null),a.a.createElement(R,null)),a.a.createElement("div",{class:"links"},a.a.createElement("a",{class:"github",href:"https://vivianzhang.com",target:"_blank"},"Portfolio"),a.a.createElement("a",{class:"github",href:"https://github.com/taiwei426/todo-app-client",target:"_blank"},"GitHub")))}}]),n}(a.a.Component),G=Object(c.b)(null,{deselectActiveToDo:E})(z),M=n(39),V=n(55),F=n(73),H=n.n(F),J=n(106),U=Object(s.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_CREATE":return Object(V.a)({},e,Object(M.a)({},t.payload.id,t.payload));case"TODOS_GET":return Object(V.a)({},e,{},H.a.mapKeys(t.payload,"id"));case"TODO_DELETE":return H.a.omit(e,t.payload);case"TODOS_EDIT":return Object(V.a)({},e,Object(M.a)({},t.payload.id,t.payload));default:return e}},activeToDo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_GET":return{id:t.payload.id,input:t.payload.input};case"DESELECT_ACTIVE_TODO":return{};default:return e}},form:J.a}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,q=Object(s.e)(U,X(Object(s.a)(u.a)));i.a.render(a.a.createElement(c.a,{store:q},a.a.createElement(G,null)),document.querySelector("#root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.bf7049f9.chunk.js.map