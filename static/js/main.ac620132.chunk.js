(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{104:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),i=a.n(r),s=(a(104),a(12)),o=a(91),l=a(186),j=a(165),u=a(2),d=c.a.createContext();function m(e){var t=e.children,a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=c[0],i=c[1],m=Object(o.a)({palette:{mode:"light",background:{default:"#fff"},primary:{light:"#fff",main:"#eee",dark:"#ddd"},textColor:{main:"#000"},loader:{main:"#000"}}}),b=Object(o.a)({palette:{mode:"dark",background:{default:"#2B3743"},primary:{light:"#2B3743",main:"#212E37",dark:"#1c262e"},textColor:{main:"#fff"},loader:{main:"#fff"}}});return Object(u.jsx)(l.a,{theme:r?b:m,children:Object(u.jsxs)(d.Provider,{value:function(){i((function(e){return!e}))},children:[Object(u.jsx)(j.a,{}),t]})})}var b=a(177),x=a(171),h=a(176),p=a(178),O=a(179),f=a(86),g=a.n(f),v=Object(x.a)((function(e){return{headerContainer:{background:e.palette.primary.light,padding:"20px 5%",borderRadius:0},title:{fontSize:"1.4rem"},icon:{color:e.palette.textColor.main,fontSize:"1.2rem",cursor:"pointer"},buttonText:{color:e.palette.textColor.main,fontSize:"1rem",textTransform:"capitalize",marginLeft:5}}}));var y=function(){var e=v(),t=Object(n.useContext)(d);return Object(u.jsx)(b.a,{className:"header-container ".concat(e.headerContainer),children:Object(u.jsxs)(h.a,{container:!0,alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",children:[Object(u.jsx)(h.a,{item:!0,xs:8,children:Object(u.jsx)("h1",{className:"title ".concat(e.title),children:"Where in the world?"})}),Object(u.jsx)(h.a,{item:!0,xs:4,textAlign:"right",children:Object(u.jsxs)(p.a,{style:{borderRadius:10,width:"max-content"},onClick:t,children:[Object(u.jsx)(g.a,{className:"icon ".concat(e.icon)}),Object(u.jsx)(O.a,{className:"button-text ".concat(e.buttonText),children:"Dark Mode"})]})})]})})},C=a(19),N=a(87),k=a.n(N),w=Object(x.a)((function(e){return{searchBarContainer:{background:e.palette.primary.light,margin:"10px 0",padding:"0 20px",borderRadius:7}}}));var S=function(e){var t=e.setInput,a=w();return Object(u.jsxs)(b.a,{elevation:0,className:a.searchBarContainer,sx:{p:"2px 4px",display:"flex",alignItems:"center"},children:[Object(u.jsx)(k.a,{}),Object(u.jsx)(C.c,{sx:{ml:1,flex:1,margin:2},placeholder:"Search for a country...",inputProps:{"aria-label":"search for a country"},onChange:function(e){return t(e.target.value)}})]})},A=a(174),I=a(173),R=a(180),z=a(170),L=a(88),T=a.n(L),B=Object(x.a)((function(e){return{filterContainer:{background:e.palette.primary.light,margin:"10px 0",borderRadius:7},inputLabel:{color:"".concat(e.palette.textColor.main," !important"),fontSize:"1rem",opacity:.5}}}));function E(){var e=B(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(u.jsx)(b.a,{elevation:0,className:"filter-container ".concat(e.filterContainer),children:Object(u.jsxs)(R.a,{fullWidth:!0,children:[Object(u.jsx)(A.a,{className:e.inputLabel,children:"Filter by Region"}),Object(u.jsxs)(z.a,{value:c,label:"Region",IconComponent:T.a,onChange:function(e){r(e.target.value)},children:[Object(u.jsx)(I.a,{value:"",children:Object(u.jsx)("em",{children:"None"})}),Object(u.jsx)(I.a,{value:"Africa",children:"Africa"}),Object(u.jsx)(I.a,{value:"America",children:"America"}),Object(u.jsx)(I.a,{value:"Asia",children:"Asia"}),Object(u.jsx)(I.a,{value:"Europe",children:"Europe"}),Object(u.jsx)(I.a,{value:"Oceania",children:"Oceania"})]})]})})}var W=a(74),P=a.n(W),F=a(89),J=a(185),M=a(181),D=a(182),H=a(183),q=a(184),G=Object(x.a)((function(e){return{card:{background:e.palette.background.default,height:350},cardActionArea:{height:"100%"},cardImage:{position:"absolute",top:0,left:0,height:150},countryTitle:{fontSize:"1.2rem",margin:"20px 10px"},details:{fontSize:"1rem",margin:"5px 10px"},value:{marginLeft:5}}}));function K(e){var t=e.country,a=G();return Object(u.jsx)(M.a,{elevation:0,className:a.card,children:Object(u.jsxs)(D.a,{className:a.cardActionArea,children:[Object(u.jsx)(H.a,{className:a.cardImage,component:"img",image:t.flags.svg,alt:t.name.common}),Object(u.jsxs)(q.a,{style:{marginTop:110},children:[Object(u.jsx)("h1",{className:a.countryTitle,children:t.name.common}),Object(u.jsxs)("div",{className:a.details,children:[Object(u.jsx)("strong",{className:a.key,children:"Population:"}),Object(u.jsx)("span",{className:a.value,children:t.population})]}),Object(u.jsxs)("div",{className:a.details,children:[Object(u.jsx)("strong",{className:a.key,children:"Region:"}),Object(u.jsx)("span",{className:a.value,children:t.region})]}),Object(u.jsxs)("div",{className:a.details,children:[Object(u.jsx)("strong",{className:a.key,children:"Capital:"}),Object(u.jsx)("span",{className:a.value,children:t.capital?t.capital[0]:Object(u.jsx)("em",{children:"none"})})]})]})]})})}var Q=Object(x.a)((function(e){return{countriesContainer:{margin:"20px 0",flexWrap:"wrap"},loader:{color:e.palette.loader.main,margin:"100px auto",opacity:.75}}}));var U=function(e){var t=e.input,a=Q(),c=Object(n.useState)([]),r=Object(s.a)(c,2),i=r[0],o=r[1];function l(){return(l=Object(F.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all").catch((function(e){console.log(e)}));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){return l.apply(this,arguments)})().then(o)}),[]),Object(u.jsx)(h.a,{container:!0,alignItems:"center",justifyContent:"space-between",className:"countries-container ".concat(a.countriesContainer),children:Object(u.jsx)(u.Fragment,{children:i.length?i.map((function(e){return e.name.common.toLowerCase().includes(t.toLowerCase())?Object(u.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,className:"card-container",children:Object(u.jsx)(K,{country:e})},e.name.common):Object(u.jsx)("div",{style:{display:"none"}},e.name.common)})):Object(u.jsx)(J.a,{className:a.loader})})})},V=Object(x.a)((function(e){return{homeContainer:{background:e.palette.primary.main,padding:"50px 5%",borderRadius:0,minHeight:"100vh"}}}));var X=function(){var e=V(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(u.jsxs)(b.a,{elevation:0,className:"home-container ".concat(e.homeContainer),children:[Object(u.jsxs)(h.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(h.a,{item:!0,xs:12,sm:7,md:5,children:Object(u.jsx)(S,{setInput:r})}),Object(u.jsx)(h.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(u.jsx)(E,{})})]}),Object(u.jsx)(U,{input:c})]})};var Y=function(){return Object(u.jsx)(m,{children:Object(u.jsxs)(b.a,{elevation:0,style:{width:"100%",height:"100%",borderRadius:0},children:[Object(u.jsx)(y,{}),Object(u.jsx)(X,{})]})})},Z=a(92);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Z.a,{basename:"/",children:Object(u.jsx)(Y,{})})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.ac620132.chunk.js.map