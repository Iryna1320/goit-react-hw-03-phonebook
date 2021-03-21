(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={formContact:"ContactForm_formContact__1JsXq",formLabel:"ContactForm_formLabel___0cp5",formInput:"ContactForm_formInput__12ivW",button:"ContactForm_button__3WtqI"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=n(12),i=n(3),l=n(4),u=n(6),m=n(5),b=n(23),f=n(11),h=n(2),p=n.n(h),j=n(0),d=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(b.a)(),t.numberInputId=Object(b.a)(),t.inputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.onAddContact=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.onAddContact,c=this.inputChange,o=this.nameInputId,r=this.numberInputId;return Object(j.jsxs)("form",{className:p.a.formContact,onSubmit:a,children:[Object(j.jsxs)("label",{htmlFor:o,className:p.a.formLabel,children:["Name",Object(j.jsx)("input",{type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",name:"name",value:e,className:p.a.formInput,onChange:c,id:o})]}),Object(j.jsxs)("label",{htmlFor:r,className:p.a.formLabel,children:["Number",Object(j.jsx)("input",{type:"telephone",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",name:"number",className:p.a.formInput,value:n,onChange:c,id:r})]}),Object(j.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(a.Component),C=n(7),O=n.n(C),v=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("lable",{className:O.a.filter,children:[Object(j.jsx)("p",{className:O.a.filterTitle,children:"Find contacts by name"}),Object(j.jsx)("input",{className:O.a.filterInput,type:"text",value:e,onChange:n})]})},_=n(9),x=n.n(_),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:x.a.contactItem,children:[a,": ",c,Object(j.jsx)("button",{className:x.a.buttonDel,onClick:function(){return n(e)},children:"Deleted"})]},e)}))})},I=(n(19),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.getName=function(e){return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(b.a)(),name:n,number:a};if(!t.getName(n))return""===c.name&&""===c.number?alert("\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u043e\u043b\u044f"):void t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}));alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContactName=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.addContact,n=this.deleteContact,a=this.changeFilter,c=this.getVisibleContactName();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App_title",children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:e}),Object(j.jsx)("h2",{className:"App_title",children:"Contacts"}),Object(j.jsx)(v,{value:t,onChange:a}),Object(j.jsx)(g,{contacts:c,onDeleteContact:n})]})}}]),n}(a.Component));n(20),n(21);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={filter:"Filter_filter__2e_Jf",filterInput:"Filter_filterInput__2SyCy",filterTitle:"Filter_filterTitle__8ztc2"}},9:function(t,e,n){t.exports={contactItem:"ContactList_contactItem__3X-x9",buttonDel:"ContactList_buttonDel__1tNMI"}}},[[22,1,2]]]);
//# sourceMappingURL=main.674ed0fa.chunk.js.map