(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{241:function(e,a,t){"use strict";t.d(a,"a",(function(){return W}));t(116);var n=t(0),l=t.n(n),r=t(5),c=t(810),m=t(174),s=t(19),u=t.n(s),i=t(23),o=t.n(i),E=t(6),b=t(21),p=t(65),d=t(46),f=t(37),w=t(72),y=t.n(w);function B(){var e=Object(n.useState)([]),a=u()(e,2),t=a[0];a[1];Object(n.useEffect)((function(){r()}));var r=function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.awrap(fetch("https://api.nomics.com/v1/currencies?key=165e0fa2a0350b7332f2a822910f2376164ee41a&ids=BTC,ETH,XRP").then((function(e){return e.json()})).then((function(e){return console.log("item",e)})));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),null,null,[[0,6]],Promise)},c=[{name:"WBNB-BUSD",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-Cake",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-BUSD",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-CAKE",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-BTCB",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"}];return l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(b.a,{style:h.text},"Yeild Farming")),l.a.createElement(E.a,null,c.map((function(e,a){return l.a.createElement(f.b,{key:a,bottomDivider:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{name:"btc",size:48})),l.a.createElement(f.b.Content,null,l.a.createElement(f.b.Title,null,e.name),l.a.createElement(f.b.Subtitle,null,e.subtitle)),l.a.createElement(E.a,null,l.a.createElement(b.a,{style:h.amount},"$123.12")))}))),l.a.createElement(E.a,null,l.a.createElement(b.a,{style:h.text},"Tokens")),l.a.createElement(E.a,null,c.map((function(e,a){return l.a.createElement(f.b,{key:a,bottomDivider:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{name:"eth",size:48})),l.a.createElement(f.b.Content,null,l.a.createElement(f.b.Title,null,e.name),l.a.createElement(f.b.Subtitle,null,e.subtitle)))}))),l.a.createElement(E.a,null,l.a.createElement(b.a,{style:h.text},"Liquidity Pools")),l.a.createElement(E.a,null,c.map((function(e,a){return l.a.createElement(f.b,{key:a,bottomDivider:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{name:"ark",size:48})),l.a.createElement(f.b.Content,null,l.a.createElement(f.b.Title,null,e.name),l.a.createElement(f.b.Subtitle,null,e.subtitle)))}))),l.a.createElement(E.a,null,t.map((function(e,a){return l.a.createElement(f.b,{key:a,bottomDivider:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{name:"btc",size:48})),l.a.createElement(f.b.Content,null,l.a.createElement(f.b.Title,null,e.id)),l.a.createElement(E.a,null,l.a.createElement(b.a,{style:h.amount},"$123.12")))})))))}var h=r.a.create({text:{padding:12},amount:{color:"red"}}),v=t(117);function g(){var e=Object(n.useState)(!1),a=u()(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),m=u()(c,2),s=m[0],i=m[1],o=Object(n.useState)([{label:"Apple",value:"apple"},{label:"Banana",value:"banana"}]),p=u()(o,2),d=p[0],w=p[1];return l.a.createElement(E.a,null,l.a.createElement(b.a,{style:j.heading},"Select Liquidity Pair"),l.a.createElement(E.a,{style:{flexDirection:"row"}},l.a.createElement(v.a,{containerStyle:{width:"40%"},open:t,value:s,items:d,setOpen:r,setValue:i,setItems:w}),l.a.createElement(v.a,{containerStyle:{width:"40%"},open:t,value:s,items:d,setOpen:r,setValue:i,setItems:w}),l.a.createElement(f.a,{style:j.icon,name:"filter-list"})),l.a.createElement(E.a,null,[{name:"WBNB-BUSD",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-Cake",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-BUSD",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-CAKE",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-BTCB",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"}].map((function(e,a){return l.a.createElement(f.b,{key:a,bottomDivider:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{name:"atm",size:48})),l.a.createElement(f.b.Content,null,l.a.createElement(f.b.Title,null,e.name),l.a.createElement(f.b.Subtitle,null,e.subtitle)),l.a.createElement(E.a,null,l.a.createElement(b.a,null,"$123.12")))}))))}var j=r.a.create({heading:{padding:10},icon:{padding:15}});function S(){var e=Object(n.useState)(!1),a=u()(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),m=u()(c,2),s=m[0],i=m[1],o=Object(n.useState)([{label:"Apple",value:"apple"},{label:"Banana",value:"banana"}]),d=u()(o,2),w=d[0],B=d[1];return l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement(E.a,null,l.a.createElement(b.a,{style:z.heading},"Select single token")),l.a.createElement(E.a,{style:z.dropdownContainer},l.a.createElement(v.a,{containerStyle:{width:"40%"},open:t,value:s,items:w,setOpen:r,setValue:i,setItems:B}),l.a.createElement(f.a,{style:z.icon,name:"filter-list"})),l.a.createElement(E.a,null,[{name:"WBNB-BUSD",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-Cake",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-BUSD",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-CAKE",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"},{name:"WBNB-BTCB",avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",subtitle:"139.8% APY"}].map((function(e,a){return l.a.createElement(f.b,{key:a,bottomDivider:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{name:"appc",size:48})),l.a.createElement(f.b.Content,null,l.a.createElement(f.b.Title,null,e.name),l.a.createElement(f.b.Subtitle,null,e.subtitle)),l.a.createElement(E.a,null,l.a.createElement(b.a,{style:z.amount},"$123.12")))})))))}var z=r.a.create({heading:{padding:10},icon:{justifyContent:"flex-start"},dropdownContainer:{flexDirection:"row",justifyContent:"space-between",padding:10},amount:{color:"dodgerblue"}}),P=Object(c.a)();function A(){return l.a.createElement(P.Navigator,{initialRouteName:"Holdings"},l.a.createElement(P.Screen,{name:"Holdings",component:B}),l.a.createElement(P.Screen,{name:"Pools",component:g}),l.a.createElement(P.Screen,{name:"Tokens",component:S}))}function C(){return l.a.createElement(A,null)}var k=t(808),N=t(809),Y=Object(k.a)();function O(){return l.a.createElement(N.a,null,l.a.createElement(Y.Navigator,null,l.a.createElement(Y.Screen,{name:"Home",component:C}),l.a.createElement(Y.Screen,{name:"Holdings",component:B}),l.a.createElement(Y.Screen,{name:"Pools",component:g}),l.a.createElement(Y.Screen,{name:"Tokens",component:S})))}Object(c.a)(),Object(k.a)();function W(){return n.createElement(m.b,{style:_.container},n.createElement(O,null))}var _=r.a.create({container:{padding:1}})},249:function(e,a,t){e.exports=t(784)}},[[249,1,2]]]);
//# sourceMappingURL=app.ecadbe16.chunk.js.map