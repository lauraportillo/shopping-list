(this["webpackJsonpcustom-hooks"]=this["webpackJsonpcustom-hooks"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(7),s=n.n(a),r=n(3),l=n(8),o=n(10),j=(n(15),n(1));var m=function(){return Object(j.jsxs)("header",{className:"containerHeader",children:[Object(j.jsx)("h1",{className:"containerHeader__title",children:"shopping"}),Object(j.jsx)("h2",{className:"containerHeader__subtitle",children:"and eat healthy!"})]})},d=n.p+"static/media/watermelon_320.aa608468.png";n(17);var u=function(){return Object(j.jsxs)("div",{className:"containerMessage",children:[Object(j.jsxs)("p",{className:"containerMessage__title",children:[Object(j.jsx)("span",{className:"containerMessage__bold",children:"no item"})," in the list"]}),Object(j.jsxs)("p",{className:"containerMessage__subtitle",children:["write down your ",Object(j.jsx)("span",{className:"containerMessage__bold",children:"shopping"})]}),Object(j.jsx)("img",{src:d,alt:"fruit",className:"containerMessage__img"})]})},b=n(2);n(18);var h=function(e){var t=e.handleAddItem,n=e.inputValue,c=e.setInputValue;return Object(j.jsxs)("div",{className:"containerInputItem",children:[Object(j.jsx)("input",{className:"containerInputItem__input",type:"text",placeholder:"Add an item...",value:n,maxLength:"15",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("div",{className:"containerInputItem__icon",title:"add item",children:Object(j.jsx)(b.c,{size:20,onClick:t})})]})};n(19);var f=function(e){var t=e.item,n=e.index,c=e.toggleComplete,i=e.handleDeleteItem,a=e.handleIncrease,s=e.handleDecrement;return Object(j.jsxs)("div",{className:"containerItem",children:[Object(j.jsx)("div",{onClick:function(){return c(n)},className:"containerItemLeft",children:t.isSelected?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"containerItemLeft__icon",children:Object(j.jsx)(b.f,{color:"#54585a",size:20})}),Object(j.jsx)("p",{className:"containerItemLeft__name",children:t.itemName})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"containerItemLeft__icon",children:Object(j.jsx)(b.e,{color:"#54585a",size:20})}),Object(j.jsx)("p",{className:"containerItemLeft__name",children:t.itemName})]})}),Object(j.jsxs)("div",{className:"containerItemRight",children:[Object(j.jsxs)("div",{className:"containerItemRight__counter",children:[Object(j.jsx)("button",{onClick:function(){return s(n)},className:"containerItemRight__counter--btnL",children:"-"}),Object(j.jsxs)("span",{children:[" ",t.quantity," "]}),Object(j.jsx)("button",{onClick:function(){return a(n)},className:"containerItemRight__counter--btnR",children:"+"})]}),Object(j.jsx)("button",{className:"containerItemRight__deleteBtn",onClick:function(){return i(n)},title:"delete item",children:Object(j.jsx)(b.g,{color:"#54585a",size:20,stroke:1.5})})]})]})};n(20);var O=function(e){var t=e.items,n=e.toggleComplete,c=e.handleDeleteItem,i=e.handleIncrease,a=e.handleDecrement;return Object(j.jsxs)("div",{className:"containerListItem",children:[Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)(f,{item:e,index:t,toggleComplete:n,handleDeleteItem:c,handleIncrease:i,handleDecrement:a})},t)}))}),Object(j.jsxs)("div",{className:"containerListItem__total",children:["Total different items: ",t.length]})]})},x=function(){var e=new Date,t=("0"+e.getDate()).slice(-2)+"/"+("0"+(e.getMonth()+1)).slice(-2)+"/"+e.getFullYear(),n=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2);return Object(j.jsxs)("div",{children:[t," ",n,"h"]})};n(21);var p=function(e){var t=e.item;return Object(j.jsxs)("div",{className:"containerItemPrinted",children:[Object(j.jsxs)("p",{className:"containerItemPrinted__quantity",children:[" ",t.quantity," "]}),Object(j.jsxs)("p",{className:"containerItemPrinted__name",children:[" ",t.itemName," "]})]})};n(22);var _=function(e){var t=e.referent,n=e.items;return Object(j.jsxs)("div",{ref:t,className:"containerListItemPrinted",children:[Object(j.jsx)(x,{}),Object(j.jsx)("ul",{children:n.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)(p,{item:e,index:t})},t)}))})]})},N=(n(23),function(e){return Object(j.jsx)("footer",{children:Object(j.jsxs)("ul",{className:"footer",children:[Object(j.jsx)("li",{className:"footer__item",children:Object(j.jsx)("a",{className:"footer__item--icon",href:"https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/",target:"_blank",rel:"noopener noreferrer",title:"linkedin",children:Object(j.jsx)("i",{className:"fa fa-linkedin icon",alt:"linkedin icon"})})}),Object(j.jsx)("li",{className:"footer__item",children:Object(j.jsx)("a",{className:"footer__item--icon",href:"https://github.com/lauraportillo",target:"_blank",rel:"noopener noreferrer",title:"github",children:Object(j.jsx)("i",{className:"fa fa-github-alt icon",alt:"github icon"})})}),Object(j.jsx)("li",{className:"footer__item",children:Object(j.jsx)("a",{className:"footer__item--icon",href:"https://twitter.com/LauraPo02860847",target:"_blank",rel:"noopener noreferrer",title:"twitter",children:Object(j.jsx)("i",{className:"fa fa-twitter icon",alt:"twitter icon"})})}),Object(j.jsx)("li",{className:"footer__item",children:Object(j.jsx)("a",{className:"footer__item--icon icon",href:"mailto:lauraportillo.ark@gmail.com",target:"_blank",rel:"noopener noreferrer",title:"email",children:Object(j.jsx)("i",{className:"fa fa-envelope icon",alt:"envelope icon"})})})]})})}),g=(n(24),function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"resetBtn",onClick:function(){e.handleReset()},title:"delete list",children:Object(j.jsx)(b.g,{color:"#df4a64",size:20,stroke:1.5})})})});n(25);var v=function(e){var t=e.handlePrint;return Object(j.jsx)("button",{className:"printBtn",onClick:t,title:"print list",children:Object(j.jsx)(b.d,{color:"#df4a64",size:20,stroke:1.5})})};n(9);var I=function(e){var t=e.handleSortUp;return Object(j.jsx)("button",{className:"sortBtn",onClick:function(){return t()},title:"sort list from A",children:Object(j.jsx)(b.b,{color:"#df4a64",size:20,stroke:1.5})})};var k=function(e){var t=e.handleSortDown;return Object(j.jsx)("button",{className:"sortBtn",onClick:function(){return t()},title:"sort list from Z",children:Object(j.jsx)(b.a,{color:"#df4a64",size:20,stroke:1.5})})},C=(n(26),n(27),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),d=s[0],b=s[1],f=Object(c.useRef)(),x=Object(o.useReactToPrint)({content:function(){return f.current}});Object(c.useEffect)((function(){var e=localStorage.getItem("my-shopping-list");e&&i(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("my-shopping-list",JSON.stringify(n))}));var p=function(e){var t=Object(r.a)(n);t[e].quantity++,i(t)},C=function(e){var t=Object(r.a)(n);t[e].quantity>1&&t[e].quantity--,i(t)},y=function(e){var t=Object(r.a)(n);t.splice(e,1),i(t)},w=function(e){var t=Object(r.a)(n);t[e].isSelected=!t[e].isSelected,i(t)},S=function(){var e=Object(r.a)(n).sort((function(e,t){return e.itemName.localeCompare(t.itemName)}));i(e)},D=function(){var e=Object(r.a)(n).sort((function(e,t){return t.itemName.localeCompare(e.itemName)}));i(e)},L=function(){i([])};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{}),Object(j.jsxs)("main",{className:"containerMain",children:[Object(j.jsx)(h,{handleAddItem:function(){var e={itemName:d,quantity:1,isSelected:!1};if(""===e.itemName);else{var t=[].concat(Object(r.a)(n),[e]);i(t),b("")}},inputValue:d,setInputValue:b}),0===n.length?Object(j.jsx)(u,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{items:n,toggleComplete:w,handleDeleteItem:y,handleIncrease:p,handleDecrement:C}),Object(j.jsxs)("section",{className:"containerMain__btns",children:[Object(j.jsx)(g,{handleReset:L}),Object(j.jsx)(v,{handlePrint:x}),Object(j.jsx)(I,{handleSortUp:S}),Object(j.jsx)(k,{handleSortDown:D})]})]}),Object(j.jsx)("div",{style:{display:"none"},children:Object(j.jsx)(_,{items:n,referent:f})})]}),Object(j.jsx)(N,{})]})});s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.7bb6d593.chunk.js.map