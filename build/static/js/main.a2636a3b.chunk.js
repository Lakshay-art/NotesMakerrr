(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s.n(c),n=s(12),a=s.n(n),l=(s(33),s(34),s(22)),o=s(9),r=s(13),d=s(21),j=s(41),g=s(46),b=s(42),h=s(25),m=s(48),x=s(43),u=s(6),p=s.n(u),O=s(1),f=function(e){var t=Object(c.useState)(JSON.parse(localStorage.getItem("count"))||0),s=Object(o.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)({title:"",description:"",img:"",c:1}),l=Object(o.a)(a,2),u=l[0],f=l[1],y=Object(c.useState)(3),v=Object(o.a)(y,2),k=v[0],w=v[1],N=function(e){var t=e.target,s=t.name,c=t.value,n=t.src;f((function(e){var t;return Object(d.a)(Object(d.a)({},e),{},(t={},Object(r.a)(t,s,c),Object(r.a)(t,"src",n),Object(r.a)(t,"c",i),t))}));var a,l=document.getElementById("autoheight");(a=l).scrollHeight>a.clientHeight&&w(k+1),function(e){var t=e.value.split("");return console.log(13*t.length/e.clientWidth+"left"),console.log(t.length+"lines"),console.log(k+"right"),console.log(13*t.length/e.clientWidth<k-2&&k>3),k>3&&10*t.length/e.clientWidth<k-3}(l)&&w(k-1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(j.a,{id:"m2",style:{display:"none",marginBottom:"0px",paddingLeft:"10px",paddingTop:"5px",paddingBottom:"0px",paddingRight:"2px",width:"90%",zIndex:"100",opacity:"100%",position:"fixed",bottom:"0",left:"0%",right:"2%",backdropFilter:"blur(4px) brightness(0.9)",borderRadius:"45px"},children:[Object(O.jsx)(g.a,{id:"addTask",style:{padding:"2px"},children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(h.a,{xs:3,style:{paddingLeft:"15px",paddingRight:"1px"},children:Object(O.jsx)(g.a.Control,{as:"textarea",placeholder:"Title Here",name:"title",value:u.title,onChange:N,rows:k,style:{margin:"0px",borderRadius:"25px",height:"auto",minHeight:"70px",maxHeight:"200px"}})}),Object(O.jsx)(h.a,{xs:4,style:{paddingLeft:"1px",paddingRight:"1px"},children:Object(O.jsx)(g.a.Control,{as:"textarea",id:"autoheight",placeholder:"Description Here",name:"description",htmlFor:"addTask",value:u.description,onChange:N,rows:k,style:{margin:"0px",borderRadius:"25px",maxHeight:"200px"}})}),Object(O.jsx)(h.a,{xs:2,style:{paddingLeft:"1px",paddingRight:"1px"},children:Object(O.jsx)(g.a.Control,{as:"textarea",placeholder:"Image URL",name:"img",value:u.img,onChange:N,onFocus:function(){f({title:u.title,description:u.description,img:"",c:u.c})},rows:k,style:{margin:"0px",borderRadius:"25px",maxHeight:"200px"}})}),Object(O.jsxs)(h.a,{xs:2,children:[Object(O.jsx)(m.a,{onClick:function(){n((i+1)%10),console.log("counter"+i),e.passNote(u),localStorage.setItem("count",JSON.stringify(i)),f({title:"",description:"",img:"",c:i}),p()(".n1 #m1").fadeIn(),p()(".n1 #m2").toggle()},style:{borderRadius:"35px"},children:"Save"}),Object(O.jsx)(m.a,{onClick:function(){f({title:"",description:"",img:"3.png",c:u.c})},onDoubleClick:function(){p()(".n1 #m2").toggle(),p()(".n1 #m1").toggle(),f({title:"",description:"",img:"2.png",c:u.c})},style:{borderRadius:"35px"},variant:"secondary",children:"Reset"}),""]})]})}),Object(O.jsx)("br",{})]}),Object(O.jsx)(x.a,{onClick:function(){p()(".n1 #m2").fadeIn(),p()(".n1 #m1").toggle()},className:"jumbotron3",id:"m1",style:{borderRadius:"40px",padding:"5px",width:"40%",color:"#4183BB",marginBottom:"5px",left:"30%",zIndex:"100",opacity:"90%",position:"fixed",bottom:"0"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)("h3",{class:"display-4",style:{textAlign:"center"},children:"Take Notes"}),Object(O.jsx)("p",{class:"lead"})]})})]})},y=s(45),v=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{children:Object(O.jsx)(m.a,{className:"bg-light text-secondary border-secondary shadow-sm",style:{fontSize:"20px",position:"fixed",top:"100px",zIndex:"1",borderRadius:"20px",outline:"none"},onClick:function(){if(p()(".Slider").width()>0)p()(".Slider").animate({width:"0px"},500);else{var e=p()(window).width();e<=544?10:6,p()(".Slider").animate({width:65},500)}},children:"About Us"})})})},k=s(44),w=s(47),N=function(e){return Object(O.jsx)("span",{children:Object(O.jsx)(j.a,{fluid:!0,children:Object(O.jsx)(k.a,{className:"m-5 d-block ",children:Object(O.jsxs)(w.a,{className:"m-2 border-0 shadow halfb",style:{borderRadius:45,padding:"4rem"},children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(w.a.Img,{src:e.note.img,alt:"",style:{objectFit:"cover",borderRadius:45}})})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(h.a,{children:Object(O.jsxs)(w.a.Body,{children:[Object(O.jsx)(w.a.Title,{as:"h1",style:{color:"rgb(45, 102, 173)"},children:e.note.title}),Object(O.jsx)(w.a.Text,{as:"h4",dangerouslySetInnerHTML:{__html:e.note.description}})]})})})]},e.note.id)})})})},S=function(e){return Object(O.jsx)("div",{className:"card-columns",children:e.notes.map((function(e){return Object(O.jsx)(N,{note:e},e.id)}))})},I=function(e){var t=Object(c.useState)(e.notek.img),s=Object(o.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)(e.notek.img),l=Object(o.a)(a,2),r=l[0],d=l[1];return Object(c.useEffect)((function(){d((function(t){var s=e.img;return 0===s.length?"".concat(e.count,".png"):(s.includes("/www.")||s.includes(".png")||(s="www.".concat(s)),s.includes("http:")||s.includes(".png")||(s="https://".concat(s)),s)})),n((function(t){var s=e.img;if(0===s.length)return"".concat(e.count,".png");var c=s;c.includes("youtu.be")&&(c="youtube.com");var i=0;if(c.includes(".com")&&(c=c.split(".com")[0],c="".concat(c,".com")),"png"!==s.slice(s.length-3,s.length)){if((c="http://logo.clearbit.com/".concat(c,"?size=101")).includes("/"))for(var n in c)if("/"==c[n]&&4==++i)var a=n;return c=c.slice(0,a)}return s})),e.notek.img=i,"Open"!=e.notek.title&&localStorage.setItem(e.id,JSON.stringify(e.notek))})),Object(O.jsx)("div",{className:"m-5 ",style:{},children:Object(O.jsxs)(w.a,{className:"m-2 border-0 shadow halfb ",id:"",style:{borderRadius:45,padding:"4rem",width:"100%"},children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(h.a,{xs:12,children:Object(O.jsx)(w.a.Img,{src:i,alt:"",style:{objectFit:"cover",borderRadius:45}})})}),Object(O.jsx)(b.a,{children:Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(w.a.Body,{children:[Object(O.jsx)(w.a.Title,{as:"h1",style:{color:"#4183BB"},dangerouslySetInnerHTML:{__html:e.notek.title}}),Object(O.jsx)(w.a.Text,{as:"h4",dangerouslySetInnerHTML:{__html:e.notek.description}})]}),Object(O.jsx)(m.a,{id:"link",variant:"link",className:"border border-secondary",style:{borderRadius:"25px"},children:Object(O.jsx)("a",{as:"h4",rel:"noreferrer",target:"_blank",href:r,children:Object(O.jsx)("span",{className:"glyphicon glyphicon-open"})})}),Object(O.jsx)(m.a,{className:"btn float-right",style:{borderRadius:"50px",outline:"none"},onClick:function(t){localStorage.removeItem(e.id);var s=Object.keys(localStorage).length-1;localStorage.removeItem(s),0!==e.id&&e.deleteItem(e.id)},children:Object(O.jsx)("span",{className:"glyphicon glyphicon-trash"})})]})})]},e.notek.id)})},C=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{className:"text-light text-right bg-secondary border-0 w-100 m-1 p-3",onClick:function(){p()(".Slider").animate({width:"0%"},500)},style:{fontSize:"15px"},children:"\xd7"}),Object(O.jsx)(m.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(O.jsx)("a",{href:"https://www.facebook.com/lakshay_the_gupta",rel:"noreferrer",target:"_blank",children:Object(O.jsx)("img",{src:"facebook.svg",width:"40px"})})}),Object(O.jsx)(m.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(O.jsx)("a",{href:"https://www.instagram.com/lakshay_the_gupta",rel:"noreferrer",target:"_blank",children:Object(O.jsx)("img",{src:"instagram.svg",width:"40px"})})}),Object(O.jsx)(m.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(O.jsx)("a",{href:"https://www.twitter.com/Lakshaythegupta",rel:"noreferrer",target:"_blank",children:Object(O.jsx)("img",{src:"twitter.svg",width:"40px"})})}),Object(O.jsx)(m.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(O.jsx)("a",{href:"https://www.pinterest.com/lakshay_the_gupta",rel:"noreferrer",target:"_blank",children:Object(O.jsx)("img",{src:"pinterest.svg",width:"40px"})})}),Object(O.jsx)(m.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UC44y1jGEn6kAr9Tv_W_GQfQ",rel:"noreferrer",target:"_blank",children:Object(O.jsx)("img",{src:"youtube.svg",width:"40px"})})})]})},L=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{class:"page5",children:Object(O.jsx)("div",{class:"container",children:Object(O.jsx)("div",{class:"card",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("div",{class:"circle1"}),Object(O.jsx)("div",{class:"circle"}),Object(O.jsxs)("header",{class:"myhed text-center",children:[Object(O.jsx)("i",{class:"far fa-user"}),Object(O.jsx)("p",{children:"LOGIN"})]}),Object(O.jsxs)("form",{class:"main-form text-center",children:[Object(O.jsx)("div",{class:"form group my-0",children:Object(O.jsxs)("label",{class:"my-0",children:[Object(O.jsx)("i",{class:"fas fa-user"}),Object(O.jsx)("input",{type:"text",class:"myInput",placeholder:"Enter Your Username"})]})}),Object(O.jsx)("div",{class:"form group my-0",children:Object(O.jsxs)("label",{class:"my-0",children:[Object(O.jsx)("i",{class:"fas fa-lock"}),Object(O.jsx)("input",{type:"password",class:"myInput",placeholder:"Enter Password"})]})}),Object(O.jsx)("div",{class:"form group my-0"}),Object(O.jsxs)("label",{class:"check_1",children:[Object(O.jsx)("input",{type:"checkbox"}),"Remember Me"]}),Object(O.jsx)("div",{class:"form group",children:Object(O.jsx)("label",{children:Object(O.jsx)("input",{type:"button",class:"form-control button",value:"LOG IN",onClick:function(){p()(".Slider2").animate({width:"0%"},500)}})})})]})]})})})})})},R=s(24),B=function(e){var t=Object(c.useState)([{id:0,img:"Open.png",title:"Open",description:"Visit the Website or Page"}]),s=Object(o.a)(t,2),i=s[0],n=s[1],a=function(e){n((function(t){return t.filter((function(t,s){return s!==e}))}))},r=Object(c.useState)(""),d=Object(o.a)(r,2),b=d[0],h=d[1];Object(c.useEffect)((function(){n((function(e){for(var t=[],s=Object.keys(localStorage),c=s.length;c--;)"object"==typeof JSON.parse(localStorage.getItem(s[c]))&&t.push(JSON.parse(localStorage.getItem(s[c])));var i=localStorage.getItem("count"),n=localStorage.getItem("isDark"),a=localStorage.getItem("3or4");return 0!==t.length&&localStorage.clear(),console.log(t),localStorage.setItem("count",i),localStorage.setItem("isDark",n),localStorage.setItem("3or4",a),[].concat(Object(l.a)(e),t)}))}),[]);var u=function(){p()(".notes").slideToggle("slow"),p()("#no").toggle(),p()("#no1").toggle(),p()("#no3").toggle()};Object(c.useEffect)((function(){1==JSON.parse(localStorage.getItem("3or4"))&&y()}),[]);var y=function(){document.getElementById("addednotes").classList.contains("card-columns2")?(document.getElementById("addednotes").classList.remove("card-columns2"),document.getElementsByClassName("card-columns")[1].classList.remove("card-columns2"),localStorage.setItem("3or4","false")):(document.getElementById("addednotes").classList.add("card-columns2"),document.getElementsByClassName("card-columns")[1].classList.add("card-columns2"),localStorage.setItem("3or4","true"))};Object(c.useEffect)((function(){1==JSON.parse(localStorage.getItem("isDark"))&&w()}),[]);var w=function(){document.getElementById("goto").classList.toggle("dark"),document.getElementsByClassName("Main")[0].classList.toggle("halfblack"),document.getElementsByClassName("notes")[0].classList.toggle("dark"),document.getElementsByTagName("body")[0].classList.toggle("dark"),document.getElementsByClassName("n1")[0].classList.toggle("halfblack"),document.getElementsByClassName("jumbotron")[0].classList.toggle("halfblack"),document.getElementsByClassName("jumbotron")[1].classList.toggle("halfblack"),document.getElementsByClassName("jumbotron3")[0].classList.toggle("halfblack"),document.getElementById("m1").classList.toggle("border"),document.getElementById("m1").classList.toggle("border-primary"),document.getElementsByTagName("Button")[6].classList.toggle("dark");var e=[];e=document.getElementsByClassName("halfb");for(var t=0;t<e.length;t++)e[t].classList.toggle("halfblack");!0===document.getElementById("goto").classList.contains("dark")?localStorage.setItem("isDark","true"):localStorage.setItem("isDark","false")};return Object(c.useEffect)((function(){console.log("inside useffect ");var e=document.getElementById("goto").classList.contains("dark"),t=[];t=document.getElementsByClassName("halfb");var s=0;if(!0===e)for(console.log(t.length);s<t.length;s++)t[s].classList.add("halfblack");else for(;s<t.length;s++)t[s].classList.remove("halfblack")})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{class:"flex",children:[Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{className:"bg-light text-primary border-primary shadow-sm",style:{borderRadius:"25px",outline:"none"},onClick:y,children:"threeorfour"})}),Object(O.jsx)("div",{children:Object(O.jsx)(x.a,{style:{width:"100%",padding:"4px",margin:"0px",borderRadius:"30px",position:"relative",zIndex:"101"},children:Object(O.jsxs)(g.a,{inline:!0,className:"w-50 mx-auto",children:[Object(O.jsx)(R.a,{type:"text",placeholder:"search..",href:"#",className:"w-100",style:{borderRadius:"25px"},onChange:function(e){return h(e.target.value)}}),Object(O.jsx)(m.a,{type:"submit",className:"invisible"})]})})}),Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{className:"bg-light text-primary border-primary shadow-sm",style:{borderRadius:"25px",outline:"none"},onClick:w,children:"Dark"})})]}),Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:"Main",children:[Object(O.jsx)("div",{className:"Slider h-200 bg-secondary",style:{position:"fixed",width:"0",overflowX:"hidden",zIndex:"101",bottom:"5px",height:"70%",borderRadius:"35px",margin:"5px"},children:Object(O.jsx)(C,{})}),Object(O.jsx)("div",{className:"Slider2 h-200",style:{position:"fixed",width:"0",overflowX:"hidden",zIndex:"101",bottom:"95px",right:"5px",height:"67%",borderRadius:"35px",margin:"5px"},children:Object(O.jsx)(L,{})}),Object(O.jsx)(j.a,{fluid:!0,id:"goto",children:Object(O.jsx)(k.a,{className:"m-5 d-block card-columns ",id:"addednotes",children:i.filter((function(e){return""===b||e.description.toLowerCase().includes(b.toLowerCase())||e.title.toLowerCase().includes(b.toLowerCase())||e.img.toLowerCase().includes(b.toLowerCase())?e:void 0})).map((function(e,t){return Object(O.jsx)(I,{style:{position:"relative"},notek:e,img:e.img,id:t,count:e.c,deleteItem:a},t)}))})}),Object(O.jsxs)("div",{className:"n1",style:{},children:[Object(O.jsx)(x.a,{onClick:u,id:"no",style:{borderRadius:"40px",padding:"0px",width:"30%",color:"#2D66AD",margin:"10px",position:"relative",left:"35%",display:"none"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)("h3",{style:{textAlign:"center"},children:"Hide Tutorial Notes"}),Object(O.jsx)("p",{class:"lead"})]})}),Object(O.jsx)(f,{passNote:function(e){n((function(t){return[].concat(Object(l.a)(t),[e])}))}}),Object(O.jsx)(x.a,{onClick:u,id:"no1",style:{borderRadius:"40px",padding:"0px",width:"30%",color:"#2D66AD",position:"relative",left:"35%",display:"none"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)("h3",{style:{textAlign:"center"},children:"Show Tutorial Notes"}),Object(O.jsx)("p",{class:"lead"})]})}),Object(O.jsx)(x.a,{id:"no3",style:{borderRadius:"40px",padding:"0px",width:"30%",color:"#2D66AD",position:"relative",left:"35%",visibility:"hidden",display:"none"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)("h3",{style:{textAlign:"center"},children:"Open Tutorial Notes"}),Object(O.jsx)("p",{class:"lead"})]})})]}),Object(O.jsx)("div",{onClick:function(){p()("#no").slideToggle()},children:Object(O.jsx)("div",{className:"notes",style:{position:"relative"},children:Object(O.jsx)(S,{notes:e.notes,sendData:b})})})]})]})},_=[{id:2,img:"https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp",title:"How ",description:"Are you today?   Best of Luck!  \t"},{id:1,img:"",title:":)",description:"Hello"},{id:3,img:"Reset.png",title:"Dbl Reset",description:"Double Click on Reset to clear the input as well as hide the input fields"},{id:4,img:"Reset.png",title:"Reset",description:"Click on Reset to clear the input"},{id:5,img:"TakeNotes.png",title:"Take Notes",description:"Click on Take Notes to input your note"},{id:6,img:"All Notes.png",title:"All Notes",description:"Takes you to the notes"},{id:7,img:"About Us.png",title:"About Us",description:"Get to know us on social platforms"},{id:8,img:"https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp",title:"How to Hide Tutorial Notes??",description:"1.Click on any tutorial note  </br> 2.A Hide Tutorial Button will appear </br>  3.Click the button to hide/show"},{id:9,img:"Open.png",title:"Open",description:"Visit the Website or Page"}];var E=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(B,{id:"main",notes:_})})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),T()}},[[39,1,2]]]);
//# sourceMappingURL=main.a2636a3b.chunk.js.map