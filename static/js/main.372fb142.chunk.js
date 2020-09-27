(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{11:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return u}));var r="ADD_TODO",o="DELETE_TODO",c="MARK_TODO_COMPLETE",i="FILTER_TODO",a="RESTRICTED_WORD_OPEN_ALERT",u="RESTRICTED_WORD_CLOSE_ALERT"},14:function(t,e,n){"use strict";var r=n(52);n.o(r,"ConnectedAddTodo")&&n.d(e,"ConnectedAddTodo",(function(){return r.ConnectedAddTodo})),n.o(r,"TaskBox")&&n.d(e,"TaskBox",(function(){return r.TaskBox})),n.o(r,"addTodo")&&n.d(e,"addTodo",(function(){return r.addTodo})),n.o(r,"deleteTodo")&&n.d(e,"deleteTodo",(function(){return r.deleteTodo})),n.o(r,"markTodoComplete")&&n.d(e,"markTodoComplete",(function(){return r.markTodoComplete})),n.o(r,"restrictedWordCloseAlert")&&n.d(e,"restrictedWordCloseAlert",(function(){return r.restrictedWordCloseAlert})),n.o(r,"restrictedWordOpenAlert")&&n.d(e,"restrictedWordOpenAlert",(function(){return r.restrictedWordOpenAlert})),n.o(r,"setFilter")&&n.d(e,"setFilter",(function(){return r.setFilter})),n.o(r,"store")&&n.d(e,"store",(function(){return r.store}));var o=n(53);n.d(e,"addTodo",(function(){return o.a})),n.d(e,"deleteTodo",(function(){return o.b})),n.d(e,"markTodoComplete",(function(){return o.c})),n.d(e,"restrictedWordCloseAlert",(function(){return o.d})),n.d(e,"restrictedWordOpenAlert",(function(){return o.e})),n.d(e,"setFilter",(function(){return o.f}))},16:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.ALL="ALL",t.ACTIVE="ACTIVE",t.COMPLETED="COMPLETED"}(r||(r={}))},18:function(t,e,n){"use strict";n.d(e,"b",(function(){return T})),n.d(e,"d",(function(){return g})),n.d(e,"a",(function(){return W})),n.d(e,"c",(function(){return _}));var r=n(0),o=n(129),c=n(16),i=n(37),a=n(29),u=n(125);function d(){var t=Object(i.a)(["\n    margin: 10px;\n\n    .addTasksField{\n        width: 50%;\n    }\n\n    .alertBar{\n        margin: 5px;\n    }\n"]);return d=function(){return t},t}function l(){var t=Object(i.a)(["\n    padding: 8px;\n"]);return l=function(){return t},t}function s(){var t=Object(i.a)(["\n    border: 1px solid #ccc;\n    padding: 8px 16px;\n    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n    border-radius: 40px;\n    margin-bottom: 8px;\n    background-color: #fff;\n"]);return s=function(){return t},t}function f(){var t=Object(i.a)(["\n    border: 1px solid #ccc;\n    margin: 16px;\n    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n    border-radius: 16px;\n    background-color: #e2e2e2;\n"]);return f=function(){return t},t}var m=Object(a.a)(u.a)((function(t){return"\n    color: ".concat("true"===t.isactive?"blue":"black",";\n    margin: 4px;\n")})),p=Object(a.a)(o.a)(f()),b=Object(a.a)(o.a)(s()),O=Object(a.a)(o.a)(l()),x=Object(a.a)(o.a)(d()),T=function(t){return r.createElement(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.createElement(o.a,{container:!0,item:!0,xs:2,direction:"row",justify:"center",alignItems:"center"},r.createElement("span",null,"ALL(".concat(t.todoList.length,")"))),r.createElement(o.a,{container:!0,item:!0,xs:10,direction:"row",justify:"center",alignItems:"center"},Object.keys(c.a).map((function(e){return r.createElement(m,{id:"".concat(e,"_filter"),key:e,isactive:(t.filterType===e).toString(),onClick:function(){return t.onClick(c.a[e])}},e)}))))},E=n(130),j=n(69),y=n.n(j),v=n(70),C=n.n(v),A=function(t){return r.createElement(b,{container:!0,direction:"row"},r.createElement(o.a,{container:!0,item:!0,xs:8,justify:"flex-start",alignItems:"center"},t.text),r.createElement(o.a,{container:!0,direction:"row",item:!0,xs:4,justify:"flex-end",alignItems:"center"},!t.completed&&r.createElement(E.a,{id:"tickIcon_".concat(t.text),color:"primary",onClick:t.onCompleteClick},r.createElement(y.a,null)),r.createElement(E.a,{id:"deleteIcon_".concat(t.text),color:"secondary",onClick:t.onDelete},r.createElement(C.a,null))))},g=function(t){return r.createElement(O,{container:!0},0===t.todos.length?r.createElement(o.a,{container:!0,justify:"center",alignItems:"center"},"No data found."):t.todos.map((function(e){return r.createElement(A,{key:e.id,text:e.text,completed:e.completed,onCompleteClick:function(){return t.onCompleteClick(e.id)},onDelete:function(){return t.onDelete(e.id)}})})))},k=n(74),L=n(132),h=n(133),w=n(72),I=n.n(w),W=function(t){var e=r.useState(""),n=Object(k.a)(e,2),c=n[0],i=n[1],a=function(){c&&t.onAdd(c),i("")};return r.createElement(x,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.createElement(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.createElement(L.a,{id:"newTask",className:"addTasksField",label:"Add new task",variant:"outlined",value:c,onChange:function(e){t.restrictedWordAlertOpen&&t.onAlertClose(),i(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&a()},autoComplete:"off"}),r.createElement(E.a,{id:"sendIcon",color:"primary",onClick:a},r.createElement(I.a,null))),t.restrictedWordAlertOpen&&r.createElement(h.a,{severity:"error",className:"alertBar"},"This task already exists - try adding a new one!"))},D=n(32),_=function(){return r.createElement(p,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.createElement(D.c,null),r.createElement(D.b,null))}},32:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return d}));var r=n(19),o=n(14),c=n(18),i=Object(r.b)((function(t){return{todoList:t.domain.todoList,filterType:t.domain.filterType}}),(function(t){return{onClick:function(e){return t(Object(o.setFilter)(e))}}}))(c.b),a=n(40),u=Object(r.b)((function(t){return{todos:Object(a.a)(t)}}),(function(t){return{onCompleteClick:function(e){return t(Object(o.markTodoComplete)(e))},onDelete:function(e){return t(Object(o.deleteTodo)(e))}}}))(c.d),d=Object(r.b)((function(t){return{restrictedWordAlertOpen:t.domain.restrictedWordAlertOpen}}),(function(t){return{onAdd:function(e){return t(Object(o.addTodo)(e))},onAlertClose:function(){return t(Object(o.restrictedWordCloseAlert)())}}}))(c.a)},33:function(t,e,n){"use strict";var r=n(14);n.o(r,"ConnectedAddTodo")&&n.d(e,"ConnectedAddTodo",(function(){return r.ConnectedAddTodo})),n.o(r,"TaskBox")&&n.d(e,"TaskBox",(function(){return r.TaskBox})),n.o(r,"store")&&n.d(e,"store",(function(){return r.store}));var o=n(18);n.d(e,"TaskBox",(function(){return o.c}));n(11);var c=n(32);n.d(e,"ConnectedAddTodo",(function(){return c.a}));n(16);var i=n(55);n.o(i,"store")&&n.d(e,"store",(function(){return i.store}));n(39),n(40);var a=n(63);n.d(e,"store",(function(){return a.a}));n(41)},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(10),o=function(t,e){var n=t.todoList.map((function(t){return t.id===e.payload.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}));return Object(r.a)(Object(r.a)({},t),{},{todoList:n})},c=function(t,e){var n=t.todoList.filter((function(t){return t.id!==e.payload.id}));return Object(r.a)(Object(r.a)({},t),{},{todoList:n})},i=function(t,e){var n=t.todoList.concat(e.payload);return Object(r.a)(Object(r.a)({},t),{},{todoList:n})},a=n(11),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.a:return i(t,e);case a.b:return c(t,e);case a.d:return o(t,e);case a.c:return Object(r.a)(Object(r.a)({},t),{},{filterType:e.payload.filter});case a.f:return Object(r.a)(Object(r.a)({},t),{},{restrictedWordAlertOpen:!0});case a.e:return Object(r.a)(Object(r.a)({},t),{},{restrictedWordAlertOpen:!1});default:return t}}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(16),o=function(t){switch(t.domain.filterType){case r.a.ALL:return t.domain.todoList;case r.a.ACTIVE:return t.domain.todoList.filter((function(t){return!t.completed}));case r.a.COMPLETED:return t.domain.todoList.filter((function(t){return t.completed}));default:return t.domain.todoList}}},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(14),o=function(t){return function(e){return function(n){if(!t.getState().domain.todoList.find((function(t){return t.text===n.payload.text})))return e(n);e(Object(r.restrictedWordOpenAlert)())}}}},52:function(t,e){},53:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return l}));var r=n(11),o=1,c=function(t){return{type:r.a,payload:{id:o++,text:t,completed:!1}}},i=function(t){return{type:r.b,payload:{id:t}}},a=function(t){return{type:r.d,payload:{id:t}}},u=function(t){return{type:r.c,payload:{filter:t}}},d=function(){return{type:r.f,payload:{}}},l=function(){return{type:r.e,payload:{}}}},55:function(t,e,n){"use strict";var r=n(56);n.o(r,"store")&&n.d(e,"store",(function(){return r.store}));var o=n(57);n.o(o,"store")&&n.d(e,"store",(function(){return o.store}));var c=n(58);n.o(c,"store")&&n.d(e,"store",(function(){return c.store}));var i=n(59);n.o(i,"store")&&n.d(e,"store",(function(){return i.store}));var a=n(60);n.o(a,"store")&&n.d(e,"store",(function(){return a.store}));var u=n(61);n.o(u,"store")&&n.d(e,"store",(function(){return u.store}));var d=n(62);n.o(d,"store")&&n.d(e,"store",(function(){return d.store}))},56:function(t,e){},57:function(t,e){},58:function(t,e){},59:function(t,e){},60:function(t,e){},61:function(t,e){},62:function(t,e){},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(75),o=n(15),c=n(16),i=n(41),a=n(39),u={domain:{todoList:[{id:0,text:"Bhopal",completed:!1}],filterType:c.a.ALL,restrictedWordAlertOpen:!1}},d=Object(r.a)({reducer:Object(o.c)({domain:a.a}),preloadedState:u,middleware:function(t){return t().concat(i.a)}})},84:function(t,e,n){t.exports=n(97)},89:function(t,e,n){},90:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(7),i=n.n(c),a=(n(89),n(90),n(33)),u=n(129),d=function(){return r.createElement(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.createElement(u.a,{container:!0,justify:"center",alignItems:"center"},r.createElement("h1",null,"Todos")),r.createElement(u.a,{container:!0},r.createElement(a.ConnectedAddTodo,null)),r.createElement(u.a,{container:!0},r.createElement(a.TaskBox,null)))},l=n(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:a.store},o.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.372fb142.chunk.js.map