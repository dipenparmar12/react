(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{46:function(e,t,n){e.exports=n(58)},51:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),o=n.n(r),i=(n(51),n(52),n(38)),c=n(23),u=n(31),s=n(40),m=n(79),h=n(84),d=n(82),b=n(80),p=n(78),v=n(81),g=n(4),E=n(5),f=n(8),O=n(7),j=n(6);function k(e){return l.a.createElement("h1",null,"React.js")}function C(){return l.a.createElement("h3",null,"Please sign Up")}function y(e){var t=e.myValue?e.myValue:"Dipen";return l.a.createElement("h2",null,"Welcome (",t,"), You are logged in")}function S(e){return l.a.createElement("button",{onClick:e.onClick},"Login")}function w(e){return l.a.createElement("button",{onClick:e.onClick},"LogOut")}var x=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handle__LoginClick=a.handle__LoginClick.bind(Object(f.a)(a)),a.handle__LogoutClick=a.handle__LogoutClick.bind(Object(f.a)(a)),a.state={isLoggedIn:!1},a}return Object(E.a)(n,[{key:"handle__LoginClick",value:function(){console.log("Login CLicked"),this.setState({isLoggedIn:!0,username:"I Am"})}},{key:"handle__LogoutClick",value:function(){console.log("Log out Clicked...."),this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this.state.isLoggedIn?l.a.createElement(w,{onClick:this.handle__LogoutClick}):l.a.createElement(S,{onClick:this.handle__LoginClick});return l.a.createElement("div",null,l.a.createElement(k,null),e,this.state.isLoggedIn?l.a.createElement(y,null):l.a.createElement(C,null),l.a.createElement("p",null,"User logged in: ",this.state.isLoggedIn?"True":"False"))}}]),n}(a.Component),I=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={isToggleOn:!1},a.handaleToggle=a.handaleToggle.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handaleToggle",value:function(e){console.log("Toggled to:",e.target),this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){return l.a.createElement("button",{onClick:this.handaleToggle,id:"1"},this.state.isToggleOn?"On":"Off")}}]),n}(a.Component);function L(e){return console.log(e),e.warnings?null:l.a.createElement("div",null,l.a.createElement("h3",null,"ErrorFound"),l.a.createElement("p",null,"Some Errors found in you input, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem quam exercitationem odio...."))}var N=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Conditional_Rendering"),l.a.createElement("p",null,"Refresh Browser serval times"),l.a.createElement(L,{warnings:Math.floor(2*Math.random())}))}}]),n}(a.Component),T=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"1. List Numbers"),l.a.createElement(D,null),l.a.createElement(D,{numbers:[10,20,30]}),l.a.createElement("hr",null),l.a.createElement("h4",null,"2. List Numbers"))}}]),n}(a.Component);function D(e){var t=(e.numbers?e.numbers:[1,2,3,4,5]).map((function(e){return l.a.createElement("span",{key:e.toString()}," ",e,",")}));return l.a.createElement("ul",null,t)}var q=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),a=t.call(this,e),console.log("constructor"),a.state={counter:0},a.handleDescriment=a.handleDescriment.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handleIncrement",value:function(e){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"handleDescriment",value:function(e){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",null,this.state.counter)," ",l.a.createElement("br",null),l.a.createElement("button",{onClick:function(t){e.handleIncrement()}},"Inc"),l.a.createElement("button",{onClick:this.handleDescriment},"Decr"))}},{key:"componentWillMount",value:function(){console.log("WillMount")}},{key:"componentDidMount",value:function(){console.log("DidMount")}},{key:"componentWillUpdate",value:function(){console.log("WillUpdate")}},{key:"componentDidUpdate",value:function(){console.log("DidUpdate")}}]),n}(l.a.Component);function _(e){return l.a.createElement("span",null," My name is ",e.name)}var P=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={inputName:null},a.handleNameChange=a.handleNameChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handleNameChange",value:function(e){this.setState({inputName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("form submited: "+this.state.inputName),alert("Welcome to amazing world for enjoyment, "+this.state.inputName)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Your Name:",l.a.createElement("input",{type:"text",onChange:this.handleNameChange})),l.a.createElement("input",{type:"submit",value:"Enter"})),l.a.createElement("hr",null),l.a.createElement(_,{name:this.state.inputName}))}}]),n}(a.Component),M=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={selectInput:"chess"},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handleChange",value:function(e){console.log(e.target.value),this.setState({selectInput:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Your favorite hobby is: "+this.state.selectInput),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Pick your favorite hobby:",l.a.createElement("select",{value:[this.state.selectInput,"Shoping","PhotoGraphy"],onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"Drawing"},"Drawing"),l.a.createElement("option",{value:"Hiking"},"Hiking"),l.a.createElement("option",{value:"Dance"},"Dance"),l.a.createElement("option",{value:"PhotoGraphy"},"PhotoGraphy"),l.a.createElement("option",{value:"YouTuber"},"YouTuber"),l.a.createElement("option",{value:"Shoping"},"Shoping"),l.a.createElement("option",{value:"Camping"},"Camping"),l.a.createElement("option",{value:"Cooking"},"Cooking"),l.a.createElement("option",{value:"Juggling"},"Juggling"),l.a.createElement("option",{value:"swimming"},"swimming"),l.a.createElement("option",{value:"scubaDiving"},"scubaDiving"),l.a.createElement("option",{value:"Tracking"},"Tracking"),l.a.createElement("option",{value:"VideoGames"},"VideoGames"))),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(a.Component),B=n(37),W=(a.Component,{c:"Celsius",f:"Fahrenheit"});function F(e){return 5*(e-32)/9}function V(e){return 9*e/5+32}function G(e,t){var n=parseFloat(e);if(!isNaN(n)){var a=t(n);return(Math.round(1e3*a)/1e3).toString()}}var U=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.temperature,t=this.props.scale;return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Enter temperature in ",W[t],":"),l.a.createElement("input",{value:e,onChange:this.handleChange,type:"number"})),l.a.createElement("br",null))}}]),n}(a.Component),Y=(a.Component,a.Component,function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return l.a.createElement("button",{className:"square",onClick:this.props.squareBtn},this.props.squareBtnValue)}}]),n}(a.Component)),J=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"rendorSquare",value:function(e){var t=this;return l.a.createElement(Y,{squareBtnValue:this.props.squareBtnValue[e],squareBtn:function(n){t.props.boardProps_onClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"border-row"},this.rendorSquare(0),this.rendorSquare(1),this.rendorSquare(2)),l.a.createElement("div",{className:"border-row"},this.rendorSquare(3),this.rendorSquare(4),this.rendorSquare(5)),l.a.createElement("div",{className:"border-row"},this.rendorSquare(6),this.rendorSquare(7),this.rendorSquare(8)),l.a.createElement("h1",null,this.props.status),l.a.createElement("div",null,this.props.moves))}}]),n}(a.Component);a.Component;function A(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(u.a)(t[n],3),l=a[0],r=a[1],o=a[2];if(e[l]&&e[l]===e[r]&&e[l]===e[o])return e[l]}return null}function R(e){return l.a.createElement("div",{className:"todo-item"},l.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),l.a.createElement("p",null,e.item.text))}function H(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",name:"newItemText",id:"newItemText",onKeyDown:function(t){return e.handleEnterPress(t)}}))}var z=function(e){Object(O.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={items:[]},a.handleEnterPress=a.handleEnterPress.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handleEnterPress",value:function(e){if(13===e.keyCode){var t=this.state.items;t.push({text:e.target.value,completed:!1}),this.setState({items:t}),e.target.value=null}}},{key:"render",value:function(){var e=this.state.items.map((function(e,t){return e?l.a.createElement(R,{item:e,key:t}):null}));return l.a.createElement("div",{className:"todo-list"},l.a.createElement("h2",null,"My TodoApp"),l.a.createElement(H,{handleEnterPress:this.handleEnterPress}),e)}}]),n}(a.Component);function K(e){var t=e.children,n=e.value,a=e.index,r=Object(s.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"scrollable-auto-tabpanel-".concat(a),"aria-labelledby":"scrollable-auto-tab-".concat(a)},r),n===a&&l.a.createElement(v.a,{p:3},l.a.createElement(p.a,null,t)))}function $(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var Q=Object(m.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function X(){var e=Q(),t=l.a.useState(0),n=Object(u.a)(t,2),a=n[0],r=n[1];return l.a.createElement("div",{className:e.root},l.a.createElement(h.a,{position:"static",color:"default"},l.a.createElement(d.a,{value:a,onChange:function(e,t){r(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},l.a.createElement(b.a,Object.assign({label:"Item One"},$(0))),l.a.createElement(b.a,Object.assign({label:"Item Two"},$(1))),l.a.createElement(b.a,Object.assign({label:"Item Three"},$(2))),l.a.createElement(b.a,Object.assign({label:"Item Four"},$(3))),l.a.createElement(b.a,Object.assign({label:"Item Five"},$(4))),l.a.createElement(b.a,Object.assign({label:"Item Six"},$(5))),l.a.createElement(b.a,Object.assign({label:"LoginControll"},$(6))))),l.a.createElement(K,{value:a,index:0},l.a.createElement(M,null)),l.a.createElement(K,{value:a,index:1},l.a.createElement(P,null)),l.a.createElement(K,{value:a,index:2},l.a.createElement(q,null)),l.a.createElement(K,{value:a,index:3},l.a.createElement(T,null)),l.a.createElement(K,{value:a,index:4},l.a.createElement(N,null)),l.a.createElement(K,{value:a,index:5},l.a.createElement(I,null)),l.a.createElement(K,{value:a,index:6},l.a.createElement(x,null)))}var Z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(c.a,{exact:!0,path:"/todo",component:z}),l.a.createElement(c.a,{exact:!0,path:"/practice",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.6121a809.chunk.js.map