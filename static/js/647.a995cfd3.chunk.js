"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[647],{647:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&t[e];n+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return n},r="Form_form__e1yzW",s="Form_label__8nx+5",i="Form_input__FTtTw",c="Form_btn__0ebGo",o=t(434),l=t(188),u=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},h=function(e){var n=u(e),t=function(e){return e.filter.filter}(e);return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},f=t(184),p=function(){var e=(0,o.I0)(),n=(0,o.v9)(u);return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r={name:t.target.name.value,phone:t.target.number.value,id:a()};n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?alert("This contact is already in your phonebook"):e((0,l._5)(r)),t.target.name.value="",t.target.number.value=""},className:r,children:[(0,f.jsxs)("label",{className:s,children:["Name",(0,f.jsx)("input",{type:"text",name:"name",className:i,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{children:["Number",(0,f.jsx)("input",{type:"tel",name:"number",className:i,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",onClick:function(){return e((0,l.K2)())},className:c,children:"Add contact"})]})},_="ContactsList_span-name__shhjA",b="ContactsList_span-number__Z1O9l",x="ContactsList_delete-btn__H1Imt",j=function(){var e=(0,o.I0)(),n=(0,o.v9)(h);return n.length>0?(0,f.jsx)(f.Fragment,{children:n.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("span",{className:_,children:[n.name,":"]}),(0,f.jsx)("span",{className:b,children:n.number}),(0,f.jsx)("button",{type:"button",className:x,onClick:function(){return t=n.id,e((0,l._f)(t));var t},id:n.id,children:"Delete"})]},n.id)}))}):(0,f.jsx)("p",{children:"No contacts"})},v=t(791),g=t(895),C="Filter_label__vEd1E",N="Filter_input__N7T3z",y=function(){var e=(0,o.I0)();return(0,f.jsxs)("label",{className:C,children:["Find contacts by name",(0,f.jsx)("input",{className:N,id:"contacts-filter",type:"text",name:"filter",onChange:function(n){e((0,g.z)(n.target.value))}})]})},F=function(){var e=(0,o.I0)(),n=(0,o.v9)(m),t=(0,o.v9)(d),a=(0,o.v9)(u);return(0,v.useEffect)((function(){e((0,l.K2)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(p,{}),(0,f.jsx)(y,{}),n&&(0,f.jsx)("p",{children:"Loading ..."}),(0,f.jsx)("h2",{children:"Contacts"}),t&&(0,f.jsx)("p",{children:t}),a.length>0&&(0,f.jsx)(j,{})]})}}}]);
//# sourceMappingURL=647.a995cfd3.chunk.js.map