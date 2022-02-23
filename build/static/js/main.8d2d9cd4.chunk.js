(this["webpackJsonpSyeda-todo-list"]=this["webpackJsonpSyeda-todo-list"]||[]).push([[0],{273:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(20),r=n.n(c),s=n(23),o=n(42),i=n(118),d=n(24),O={FETCH_TODOS_START:"FETCH_TODOS_START",FETCH_TODOS_SUCCEEDED:"FETCH_TODOS_SUCCEEDED",FETCH_TODOS_FAILED:"FETCH_TODOS_FAILED",ADD_TODO_START:"ADD_TODO_START",ADD_TODO_SUCCEEDED:"ADD_TODO_SUCCEEDED",ADD_TODO_FAILED:"ADD_TODO_FAILED",EDIT_TODO_START:"EDIT_TODO_START",EDIT_TODO_SUCCEEDED:"EDIT_TODO_SUCCEEDED",EDIT_TODO_FAILED:"EDIT_TODO_FAILED",REMOVE_TODO_START:"REMOVE_TODO_START",REMOVE_TODO_SUCCEEDED:"REMOVE_TODO_SUCCEEDED",REMOVE_TODO_FAILED:"REMOVE_TODO_FAILED",COMPLETE_TODO_START:"COMPLETE_TODO_START",COMPLETE_TODO_SUCCEEDED:"COMPLETE_TODO_SUCCEEDED",COMPLETE_TODO_FAILED:"COMPLETE_TODO_FAILED"},l={todos:[],loaded:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.FETCH_TODOS_SUCCEEDED:return{loaded:!0,todos:t.todos};case O.REMOVE_TODO:return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});case O.EDIT_TODOS:return Object(d.a)(Object(d.a)({},e),{},{todos:e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),t.updates):e}))});default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.FETCH_TODOS_FAILED:case O.ADD_TODO_FAILED:case O.COMPLETE_TODO_FAILED:case O.EDIT_TODO_FAILED:case O.REMOVE_TODO_FAILED:return{message:O.message};default:return e}},j=n(22),T=n.n(j),D=n(13),h=function(){return fetch("https://practiceapi.devmountain.com/api/tasks")},E=function(e){var t=e.title,n=new Headers;return n.append("Content-Type","application/json"),fetch("https://practiceapi.devmountain.com/api/tasks",{method:"post",headers:n,body:JSON.stringify({title:t})})},b=function(e,t){var n=new Headers;return n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Origin","*"),fetch("https://practiceapi.devmountain.com/api/tasks/".concat(e),{method:"PATCH",headers:n,body:JSON.stringify(t)})},m=function(e){return fetch("https://practiceapi.devmountain.com/api/tasks/".concat(e),{method:"delete"})},_=function(e){return fetch("https://practiceapi.devmountain.com/api/tasks/".concat(e),{method:"put"})},x=T.a.mark(g),f=T.a.mark(y),C=T.a.mark(A),v=T.a.mark(R),S=T.a.mark(I);function g(e){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(D.a)(h);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,Object(D.b)({type:O.FETCH_TODOS_SUCCEEDED,todos:n});case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Object(D.b)({type:O.FETCH_TODOS_FAILED,message:e.t0.message});case 15:case"end":return e.stop()}}),x,null,[[0,11]])}function y(e){var t,n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E(e.todo);case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(D.b)({type:O.ADD_TODO_SUCCEEDED});case 9:return a.next=11,Object(D.b)({type:O.FETCH_TODOS_SUCCEEDED,todos:n});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(D.b)({type:O.ADD_TODO_FAILED,message:a.t0.message});case 17:case"end":return a.stop()}}),f,null,[[0,13]])}function A(e){var t,n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b(e.id,e.updates);case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(D.b)({type:O.EDIT_TODO_SUCCEEDED});case 9:return a.next=11,Object(D.b)({type:O.FETCH_TODOS_SUCCEEDED,todos:n});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(D.b)({type:O.EDIT_TODO_FAILED,message:a.t0.message});case 17:case"end":return a.stop()}}),C,null,[[0,13]])}function R(e){var t,n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m(e.id);case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(D.b)({type:O.REMOVE_TODO_SUCCEEDED});case 9:return a.next=11,Object(D.b)({type:O.FETCH_TODOS_SUCCEEDED,todos:n});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(D.b)({type:O.REMOVE_TODO_FAILED,message:a.t0.message});case 17:case"end":return a.stop()}}),v,null,[[0,13]])}function I(e){var t,n;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_(e.id);case 3:return t=a.sent,a.next=6,t.json();case 6:return n=a.sent,a.next=9,Object(D.b)({type:O.COMPLETE_TODO_SUCCEEDED});case 9:return a.next=11,Object(D.b)({type:O.FETCH_TODOS_SUCCEEDED,todos:n});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(D.b)({type:O.COMPLETE_TODO_FAILED,message:a.t0.message});case 17:case"end":return a.stop()}}),S,null,[[0,13]])}var w=T.a.mark(k);function k(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)(O.FETCH_TODOS_START,g);case 2:return e.next=4,Object(D.c)(O.ADD_TODO_START,y);case 4:return e.next=6,Object(D.c)(O.EDIT_TODO_START,A);case 6:return e.next=8,Object(D.c)(O.REMOVE_TODO_START,R);case 8:return e.next=10,Object(D.c)(O.COMPLETE_TODO_START,I);case 10:case"end":return e.stop()}}),w)}var F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,L=Object(i.a)(),M=n(287),N=n(288),U=n(284),H=n(285),B=n(117),P=n.n(B),V=n(281),z=n.n(V),G=n(25),J=n(218),W=n.n(J),X=n(274),q=n.n(X),K=n(275),Q=n.n(K),Y=n(276),Z=n.n(Y),$=n(277),ee=n.n($),te=n(279),ne=n.n(te),ae=n(115),ce=n.n(ae),re=n(280),se=n.n(re),oe=function(){return{type:O.FETCH_TODOS_START}},ie=function(e){return{type:O.REMOVE_TODO_START,id:e}},de=function(e){return{type:O.COMPLETE_TODO_START,id:e}},Oe=n(278),le=n(286),ue=n(4),pe=Object(s.b)(null,(function(e){return{removeTodo:function(t){return e(ie(t))},completeTodo:function(t){return e(de(t))}}}))(Object(G.withStyles)((function(e){return{listItemCompleted:{textDecoration:"line-through"}}}))(Object(le.a)((function(e){var t=e.todo,n=e.classes,a=e.removeTodo,c=e.completeTodo,r=e.history;return Object(ue.jsxs)(q.a,{dense:!0,button:!0,onClick:function(){r.push("/edit/".concat(t.id))},className:n.ListItem,children:[Object(ue.jsx)(Q.a,{className:t.completed?n.listItemCompleted:null,primary:" ".concat(t.title)}),Object(ue.jsxs)(Z.a,{children:[Object(ue.jsx)(ee.a,{variant:"raised",color:"default",size:"small",disabled:t.completed,tabIndex:-1,onClick:function(){return c(t.id)},children:"Completed"}),Object(ue.jsx)(Oe.a,{to:{pathname:"/edit/".concat(t.id)},style:{margin:"0px 15px"},children:Object(ue.jsx)(ce.a,{})}),Object(ue.jsx)(ne.a,{onClick:function(){return a(t.id)},children:Object(ue.jsx)(se.a,{})})]})]},t.id)})))),je=Object(s.b)((function(e){return{todos:e.todos.todos}}),null)(Object(G.withStyles)((function(e){return{listRoot:{flexGrow:1,width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}))((function(e){var t=e.classes,n=e.todos;return Object(ue.jsx)(z.a,{container:!0,justify:"center",children:Object(ue.jsx)(W.a,{className:t.listRoot,children:n.map((function(e){return Object(ue.jsx)(pe,{todo:e},e.id)}))})})}))),Te=n(38),De=n(53),he=n(54),Ee=n(56),be=n(55),me=n(220),_e=n.n(me),xe=n(199),fe=n.n(xe),Ce=n(282),ve=n.n(Ce),Se=function(e){Object(Ee.a)(n,e);var t=Object(be.a)(n);function n(){var e;Object(De.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",description:"",completed:!1},e.handleOnChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(Te.a)({},a,c))},e.handleSubmitTodo=function(){""===e.state.title||e.state.title.length<3?console.log("Title is required for the todo"):(e.props.addTodo(e.state),e.setState({title:""}))},e}return Object(he.a)(n,[{key:"render",value:function(){return Object(ue.jsx)(z.a,{container:!0,justify:"center",children:Object(ue.jsx)(z.a,{item:!0,xs:12,className:this.props.classes.addNewRoot,children:Object(ue.jsx)(_e.a,{className:this.props.classes.paper,children:Object(ue.jsxs)(z.a,{container:!0,alignItems:"center",spacing:16,children:[Object(ue.jsx)(z.a,{item:!0,xs:12,children:Object(ue.jsx)(fe.a,{variant:"display1",children:"TO-DO"})}),Object(ue.jsx)(z.a,{item:!0,xs:6,children:Object(ue.jsx)(ve.a,{name:"title",value:this.state.title,margin:"normal",onChange:this.handleOnChange})}),Object(ue.jsx)(z.a,{item:!0,xs:6,children:Object(ue.jsx)(ee.a,{color:"primary",variant:"raised",onClick:this.handleSubmitTodo,children:"Add Todo"})})]})})})})}}]),n}(a.Component),ge=Object(s.b)(null,(function(e){return{addTodo:function(t){return e(function(e){return{type:O.ADD_TODO_START,todo:e}}(t))}}}))(Object(G.withStyles)((function(e){return{addNewRoot:{flexGrow:1,width:"100%",maxWidth:360,margin:2*e.spacing.unit},paper:{padding:2*e.spacing.unit}}}))(Se)),ye=Object(s.b)(null,(function(e){return{fetchTodos:function(){return e(oe())}}}))(Object(G.withStyles)((function(e){return{root:{flexGrow:1,backgroundColor:"#eee",height:"100vh"},control:{padding:2*e.spacing.unit},paper:{height:"100px",width:"200px",padding:3*e.spacing.unit}}}))((function(e){var t=e.classes;return Object(ue.jsx)(z.a,{container:!0,className:t.root,spacing:16,children:Object(ue.jsxs)(z.a,{item:!0,className:t.control,xs:12,children:[Object(ue.jsx)(ge,{}),Object(ue.jsx)(je,{})]})})}))),Ae=n(283),Re=n.n(Ae),Ie=function(e){Object(Ee.a)(n,e);var t=Object(be.a)(n);function n(){var e;Object(De.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",description:"",error:""},e.handleBack=function(){e.props.history.push("/")},e.handleOnChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(Te.a)({},a,c)),e.props.todo[a]=c},e.handleOnCompleted=function(){e.props.completeTodo(e.props.todo.id)},e.handleCancel=function(){var t=e.props,n=t.todo,a=t.initialTodo;e.setState(Object(d.a)({},e.props.initialTodo)),n.title=a.title,n.description=a.description},e.handleSave=function(){var t=e.props.todo,n=t.title,a=t.description,c=t.completed,r=t.id,s={title:n,description:a,completed:c};if(""===s.title||s.title.length<1)return e.setState({error:"Title cannot be empty!"});e.props.editTodo(r,s),e.props.history.push("/")},e.handleRemove=function(){e.props.removeTodo(e.props.todo.id),e.props.history.push("/")},e}return Object(he.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todo,a=t.classes;return t.loaded?Object(ue.jsx)(z.a,{container:!0,justify:"center",children:Object(ue.jsx)(z.a,{item:!0,xs:12,className:a.detailsRoot,children:Object(ue.jsx)(_e.a,{children:Object(ue.jsxs)(z.a,{container:!0,className:a.detailsRoot,alignItems:"center",children:[Object(ue.jsx)(z.a,{item:!0,xs:12,children:Object(ue.jsxs)(ee.a,{variant:"flat",color:"default",className:a.detailsBackButton,size:"medium",onClick:this.handleBack,children:[Object(ue.jsx)(Re.a,{}),Object(ue.jsx)(fe.a,{variant:"button",className:a.detailsButtonText,children:"Back to List"})]})}),Object(ue.jsx)(z.a,{item:!0,xs:6,children:Object(ue.jsx)(ve.a,{label:"Title",name:"title",value:n.title,onChange:this.handleOnChange,className:a.detailsInput})}),Object(ue.jsx)(z.a,{item:!0,xs:6,children:Object(ue.jsx)(ee.a,{variant:"raised",color:"default",size:"medium",disabled:n.completed,onClick:function(){return e.handleOnCompleted(n.id)},children:"Completed"})}),Object(ue.jsx)(z.a,{item:!0,xs:12,children:Object(ue.jsx)(ve.a,{label:"Description",multiline:!0,name:"description",value:n.description,onChange:this.handleOnChange,className:a.detailsDescription})}),Object(ue.jsx)(z.a,{item:!0,xs:12,children:Object(ue.jsxs)(z.a,{container:!0,justify:"space-evenly",spacing:8,children:[Object(ue.jsx)(z.a,{item:!0,xs:4,children:Object(ue.jsx)(ee.a,{variant:"raised",color:"primary",onClick:this.handleSave,className:a.detailsButtons,children:"Save"})}),Object(ue.jsx)(z.a,{item:!0,xs:4,children:Object(ue.jsx)(ee.a,{variant:"raised",color:"default",onClick:this.handleCancel,className:a.detailsButtons,children:"Cancel"})}),Object(ue.jsx)(z.a,{item:!0,xs:4,children:Object(ue.jsx)(ee.a,{variant:"raised",color:"secondary",onClick:this.handleRemove,className:a.detailsButtons,children:"Remove"})})]})})]})})})}):Object(ue.jsx)("p",{children:"loading..."})}}]),n}(a.Component),we=Object(s.b)((function(e,t){if(e.todos.loaded){var n=e.todos.todos.find((function(e){return e.id===parseInt(t.match.params.id,10)}));return{todo:n,initialTodo:{title:n.title,description:n.description,completed:n.completed},loaded:e.todos.loaded}}return{todo:{},initialTodo:{},loaded:e.todos.loaded}}),(function(e){return{fetchTodos:function(){return e(oe())},editTodo:function(t,n){return e(function(e,t){return{type:O.EDIT_TODO_START,id:e,updates:t}}(t,n))},completeTodo:function(t){return e(de(t))},removeTodo:function(t){return e(ie(t))}}}))(Object(G.withStyles)((function(e){return{detailsRoot:{flexGrow:1,width:"100%",maxWidth:360,padding:2*e.spacing.unit},detailsInput:{marginRight:e.spacing.unit},detailsDescription:{width:"100%",marginBottom:2*e.spacing.unit},detailsButtons:{width:"100%"},detailsBackButton:{marginBottom:e.spacing.unit},detailsButtonText:{fontSize:"0.8em"}}}))(Ie)),ke=P()(),Fe=function(){return Object(ue.jsx)(M.a,{history:ke,children:Object(ue.jsxs)(N.a,{children:[Object(ue.jsx)(U.a,{exact:!0,path:"/",component:ye}),Object(ue.jsx)(U.a,{path:"/edit/:id",component:we}),Object(ue.jsx)(H.a,{path:"*",to:"/"})]})})},Le=function(){var e=Object(o.d)(Object(o.b)({todos:u,error:p}),F(Object(o.a)(L)));return L.run(k),e}(),Me=function(){return Object(ue.jsx)(s.a,{store:Le,children:Object(ue.jsx)(Fe,{})})};r.a.render(Object(ue.jsx)(Me,{}),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.8d2d9cd4.chunk.js.map