(this.webpackJsonpNotesMakerrr=this.webpackJsonpNotesMakerrr||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),c=s(12),a=s.n(c),l=(s(33),s(34),s(18)),o=s(9),r=s(13),d=s(22),g=s(41),m=s(46),b=s(42),j=s(25),p=s(48),u=s(43),h=s(6),x=s.n(h),f=s(1),O=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("count"))||0),s=Object(o.a)(t,2),i=s[0],c=s[1],a=Object(n.useState)({title:"",description:"",img:"",c:1}),l=Object(o.a)(a,2),h=l[0],O=l[1],y=Object(n.useState)(3),k=Object(o.a)(y,2),v=k[0],w=k[1],S=function(e){var t=e.target,s=t.name,n=t.value,c=t.src;O((function(e){var t;return Object(d.a)(Object(d.a)({},e),{},(t={},Object(r.a)(t,s,n),Object(r.a)(t,"src",c),Object(r.a)(t,"c",i),t))}));var a,l=document.getElementById("autoheight");(a=l).scrollHeight>a.clientHeight&&w(v+1),function(e){var t=e.value.split("");return console.log(13*t.length/e.clientWidth+"left"),console.log(t.length+"lines"),console.log(v+"right"),console.log(13*t.length/e.clientWidth<v-2&&v>3),v>3&&10*t.length/e.clientWidth<v-3}(l)&&w(v-1)};Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("current"));O({title:e.premade.title||t.title||"",description:e.premade.description||t.description||"",img:e.premade.img||t.img||"".concat(i,".png"),c:e.premade.c||""})}),[e.premade]),Object(n.useEffect)((function(){localStorage.setItem("current",JSON.stringify(h))}),[h]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(g.a,{id:"m2",className:"backdrop",style:{display:"none",marginBottom:"0px",paddingLeft:"10px",paddingTop:"5px",paddingBottom:"0px",paddingRight:"2px",width:"90%",zIndex:"100",opacity:"100%",position:"fixed",bottom:"0",left:"0%",right:"2%",borderRadius:"45px"},children:[Object(f.jsx)(m.a,{id:"addTask",style:{padding:"2px"},children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(j.a,{xs:3,style:{paddingLeft:"15px",paddingRight:"1px"},children:Object(f.jsx)(m.a.Control,{id:"titlef",as:"textarea",placeholder:"Title Here",name:"title",value:h.title,onChange:S,rows:v,style:{margin:"0px",borderRadius:"25px",height:"auto",minHeight:"70px",maxHeight:"200px"}})}),Object(f.jsx)(j.a,{xs:4,style:{paddingLeft:"1px",paddingRight:"1px"},children:Object(f.jsx)(m.a.Control,{as:"textarea",id:"autoheight",placeholder:"Description Here",name:"description",htmlFor:"addTask",value:h.description,onChange:S,rows:v,style:{margin:"0px",borderRadius:"25px",maxHeight:"200px"}})}),Object(f.jsx)(j.a,{xs:2,style:{paddingLeft:"1px",paddingRight:"1px"},children:Object(f.jsx)(m.a.Control,{id:"imgf",as:"textarea",placeholder:"Image URL",name:"img",value:h.img,onChange:S,onFocus:function(){O({title:h.title,description:h.description,img:"",c:h.c})},rows:v,style:{margin:"0px",borderRadius:"25px",maxHeight:"200px"}})}),Object(f.jsxs)(j.a,{xs:2,children:[Object(f.jsx)(p.a,{onClick:function(){c((i+1)%10),console.log("counter"+i),e.passNote(h),localStorage.setItem("count",JSON.stringify(i)),O({title:"",description:"",img:"",c:i}),x()(".n1 #m1").fadeIn(),x()(".n1 #m2").toggle()},style:{borderRadius:"35px"},children:"Save"}),Object(f.jsx)(p.a,{onClick:function(){O({title:"",description:"",img:"",c:h.c})},onDoubleClick:function(){x()(".n1 #m2").toggle(),x()(".n1 #m1").toggle(),O({title:"",description:"",img:"",c:h.c})},style:{borderRadius:"35px"},variant:"secondary",children:"Reset"}),""]})]})}),Object(f.jsx)("br",{})]}),Object(f.jsx)(u.a,{onClick:function(){x()(".n1 #m2").fadeIn(),x()(".n1 #m1").toggle()},className:"jumbotron3",id:"m1",style:{borderRadius:"40px",padding:"5px",width:"40%",color:"#4183BB",marginBottom:"5px",left:"30%",zIndex:"100",opacity:"90%",position:"fixed",bottom:"0"},children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)("h3",{class:"display-4",style:{textAlign:"center"},children:"Take Notes"}),Object(f.jsx)("p",{class:"lead"})]})})]})},y=s(45),k=function(e){Object(n.useEffect)((function(){1==JSON.parse(localStorage.getItem("3or4"))&&t()}),[]);var t=function(){document.getElementById("addednotes").classList.contains("card-columns2")?(document.getElementById("addednotes").classList.remove("card-columns2"),document.getElementsByClassName("card-columns")[1].classList.remove("card-columns2"),localStorage.setItem("3or4","false")):(document.getElementById("addednotes").classList.add("card-columns2"),document.getElementsByClassName("card-columns")[1].classList.add("card-columns2"),localStorage.setItem("3or4","true"))};Object(n.useEffect)((function(){1==JSON.parse(localStorage.getItem("isDark"))&&s()}),[]);var s=function(){document.getElementById("goto").classList.toggle("dark"),document.getElementsByClassName("Main")[0].classList.toggle("halfblack"),document.getElementsByClassName("notes")[0].classList.toggle("dark"),document.getElementsByTagName("body")[0].classList.toggle("dark"),document.getElementsByClassName("n1")[0].classList.toggle("halfblack"),document.getElementsByClassName("jumbotron")[0].classList.toggle("halfblack"),document.getElementsByClassName("jumbotron")[1].classList.toggle("halfblack"),document.getElementsByClassName("jumbotron3")[0].classList.toggle("halfblack"),document.getElementById("m1").classList.toggle("border"),document.getElementById("m1").classList.toggle("border-primary");for(var e=0;e<4;e++)document.getElementsByClassName("slide")[e].classList.toggle("bg-secondary"),document.getElementsByClassName("slide")[e].classList.toggle("bg-light"),document.getElementsByClassName("slide")[e].classList.toggle("text-secondary");document.getElementById("searchf").classList.toggle("inputbackgdark"),document.getElementById("titlef").classList.toggle("inputbackgdark"),document.getElementById("autoheight").classList.toggle("inputbackgdark"),document.getElementById("imgf").classList.toggle("inputbackgdark"),document.getElementById("m2").classList.toggle("backdrop"),document.getElementById("m2").classList.toggle("backdropdark");var t=[];t=document.getElementsByClassName("halfb");for(var s=0;s<t.length;s++)t[s].classList.toggle("halfblack");!0===document.getElementById("goto").classList.contains("dark")?localStorage.setItem("isDark","true"):localStorage.setItem("isDark","false")};Object(n.useEffect)((function(){console.log("inside useffect ");var e=document.getElementById("goto").classList.contains("dark"),t=[];t=document.getElementsByClassName("halfb");var s=0;if(!0===e)for(console.log(t.length);s<t.length;s++)t[s].classList.add("halfblack");else for(;s<t.length;s++)t[s].classList.remove("halfblack")}));return Object(f.jsx)("div",{children:Object(f.jsxs)(y.a,{style:{position:"absolute"},children:[Object(f.jsx)(p.a,{className:"slide bg-light text-secondary border-secondary shadow-sm",style:{fontSize:"20px",position:"fixed",top:"100px",zIndex:"102",borderRadius:"20px",outline:"none",opacity:"95%"},onClick:function(){x()(".Slider").width()>0?(x()(".Slider").animate({width:"0px"},500),x()(".slidebtn1").animate({top:"147px"},500),x()(".slidebtn2").animate({top:"180px"},500),x()(".slidebtn3").animate({top:"213px"},500)):(x()(".Slider").animate({width:65},500),x()(".slidebtn1").animate({top:"100px"},500),x()(".slidebtn2").animate({top:"100px"},500),x()(".slidebtn3").animate({top:"100px"},500))},children:"About Us"}),Object(f.jsx)(p.a,{className:"slide slidebtn1 bg-light text-secondary border-secondary shadow-sm",style:{fontSize:"12px",position:"fixed",top:"147px",left:"40px",zIndex:"1",padding:"5px 10px",borderRadius:"20px",outline:"none",overflowX:"hidden",opacity:"75%"},onClick:s,children:" Dark"}),Object(f.jsx)(p.a,{className:"slide slidebtn2 bg-light text-secondary border-secondary shadow-sm",style:{fontSize:"12px",position:"fixed",overflowX:"hidden",top:"180px",left:"37px",zIndex:"1",padding:"5px 10px",borderRadius:"20px",outline:"none",opacity:"75%"},onClick:t,children:"3/four"}),Object(f.jsx)(p.a,{className:"slide slidebtn3 bg-light text-secondary border-secondary shadow-sm",style:{fontSize:"12px",position:"fixed",overflowX:"hidden",top:"213px",left:"27px",zIndex:"1",padding:"5px 10px",borderRadius:"20px",outline:"none",opacity:"75%"},onClick:function(){var t=JSON.parse(localStorage.getItem("del"));if(null!=t){var s=t.pop();localStorage.setItem("del",JSON.stringify(t)),e.setdeletednote(s)}},children:"Get it back"})]})})},v=s(44),w=s(47),S=function(e){return Object(f.jsx)("span",{children:Object(f.jsx)(g.a,{fluid:!0,children:Object(f.jsx)(v.a,{className:"m-5 d-block ",children:Object(f.jsxs)(w.a,{className:"m-2 border-0 shadow halfb",style:{borderRadius:45,padding:"4rem"},children:[Object(f.jsx)(b.a,{children:Object(f.jsx)(j.a,{children:Object(f.jsx)(w.a.Img,{src:e.note.img,alt:"",style:{objectFit:"cover",borderRadius:45}})})}),Object(f.jsx)(b.a,{children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(w.a.Body,{children:[Object(f.jsx)(w.a.Title,{as:"h1",style:{color:"rgb(45, 102, 173)"},children:e.note.title}),Object(f.jsx)(w.a.Text,{as:"h4",dangerouslySetInnerHTML:{__html:e.note.description}})]})})})]},e.note.id)})})})},N=function(e){return Object(f.jsx)("div",{className:"card-columns",children:e.notes.map((function(e){return Object(f.jsx)(S,{note:e},e.id)}))})},I=[],L=function(e){var t=Object(n.useState)(e.notek.img),s=Object(o.a)(t,2),i=s[0],c=s[1],a=Object(n.useState)(e.notek.img),l=Object(o.a)(a,2),r=l[0],d=l[1];return Object(n.useEffect)((function(){d((function(t){var s=e.img;return 0===s.length?"".concat(e.count,".png"):(s.includes("/www.")||s.includes(".png")||(s="www.".concat(s)),s.includes("http:")||s.includes(".png")||(s="https://".concat(s)),s)})),c((function(t){var s=e.img;if(0===s.length)return"".concat(e.count,".png");var n=s;n.includes("youtu.be")&&(n="youtube.com");var i=0;if(n.includes(".com")&&(n=n.split(".com")[0],n="".concat(n,".com")),"png"!==s.slice(s.length-3,s.length)){if((n="http://logo.clearbit.com/".concat(n,"?size=101")).includes("/"))for(var c in n)if("/"==n[c]&&4==++i)var a=c;return n=n.slice(0,a)}return s})),e.notek.img=i,"Open"!=e.notek.title&&localStorage.setItem(e.id,JSON.stringify(e.notek))})),Object(f.jsx)("div",{className:"m-5 ",style:{},children:Object(f.jsxs)(w.a,{className:"m-2 border-0 shadow ".concat(e.new," halfb"),id:"",style:{borderRadius:45,padding:"4rem",width:"100%"},children:[Object(f.jsx)(b.a,{children:Object(f.jsx)(j.a,{xs:12,children:Object(f.jsx)(w.a.Img,{src:i,alt:"",style:{objectFit:"cover",borderRadius:45}})})}),Object(f.jsx)(b.a,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsxs)(w.a.Body,{onDoubleClick:function(){e.editingnotes(e.notek)},children:[Object(f.jsx)(w.a.Title,{as:"h1",style:{color:"#4183BB"},dangerouslySetInnerHTML:{__html:e.notek.title}}),Object(f.jsx)(w.a.Text,{as:"h4",dangerouslySetInnerHTML:{__html:e.notek.description}})]}),Object(f.jsx)(p.a,{id:"link",variant:"link",className:"border border-secondary",style:{borderRadius:"25px"},children:Object(f.jsx)("a",{as:"h4",rel:"noreferrer",target:"_blank",href:r,children:Object(f.jsx)("span",{className:"glyphicon glyphicon-open"})})}),Object(f.jsx)(p.a,{className:"btn float-right",style:{borderRadius:"50px",outline:"none"},onClick:function(t){var s=JSON.parse(localStorage.getItem("del"));null!=(I=null!=s?s:[])&&21===I.length&&I.shift(),localStorage.removeItem(e.id);var n=Object.keys(localStorage).length-4;localStorage.removeItem(n),0!==e.id&&(console.log("id ".concat(e.id)),e.deleteItem(e.id),I.push(e.notek),localStorage.setItem("del",JSON.stringify(I)))},children:Object(f.jsx)("span",{className:"glyphicon glyphicon-trash"})})]})})]},e.notek.id)})},C=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.a,{className:"text-light text-right bg-secondary border-0 w-100 m-1 p-3",onClick:function(){x()(".Slider").animate({width:"0%"},500)},style:{fontSize:"15px"},children:"\xd7"}),Object(f.jsx)(p.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(f.jsx)("a",{href:"https://www.facebook.com/lakshay_the_gupta",rel:"noreferrer",target:"_blank",children:Object(f.jsx)("img",{src:"facebook.svg",width:"40px"})})}),Object(f.jsx)(p.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(f.jsx)("a",{href:"https://www.instagram.com/lakshay_the_gupta",rel:"noreferrer",target:"_blank",children:Object(f.jsx)("img",{src:"instagram.svg",width:"40px"})})}),Object(f.jsx)(p.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(f.jsx)("a",{href:"https://www.twitter.com/Lakshaythegupta",rel:"noreferrer",target:"_blank",children:Object(f.jsx)("img",{src:"twitter.svg",width:"40px"})})}),Object(f.jsx)(p.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(f.jsx)("a",{href:"https://www.pinterest.com/lakshay_the_gupta",rel:"noreferrer",target:"_blank",children:Object(f.jsx)("img",{src:"pinterest.svg",width:"40px"})})}),Object(f.jsx)(p.a,{className:"text-light text-left bg-secondary border-0 w-100 m-1 p-3",style:{fontSize:"20px"},children:Object(f.jsx)("a",{href:"https://www.youtube.com/channel/UC44y1jGEn6kAr9Tv_W_GQfQ",rel:"noreferrer",target:"_blank",children:Object(f.jsx)("img",{src:"youtube.svg",width:"40px"})})})]})},B=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{class:"page5",children:Object(f.jsx)("div",{class:"container",children:Object(f.jsx)("div",{class:"card",children:Object(f.jsxs)("div",{class:"card-body",children:[Object(f.jsx)("div",{class:"circle1"}),Object(f.jsx)("div",{class:"circle"}),Object(f.jsxs)("header",{class:"myhed text-center",children:[Object(f.jsx)("i",{class:"far fa-user"}),Object(f.jsx)("p",{children:"LOGIN"})]}),Object(f.jsxs)("form",{class:"main-form text-center",children:[Object(f.jsx)("div",{class:"form group my-0",children:Object(f.jsxs)("label",{class:"my-0",children:[Object(f.jsx)("i",{class:"fas fa-user"}),Object(f.jsx)("input",{type:"text",class:"myInput",placeholder:"Enter Your Username"})]})}),Object(f.jsx)("div",{class:"form group my-0",children:Object(f.jsxs)("label",{class:"my-0",children:[Object(f.jsx)("i",{class:"fas fa-lock"}),Object(f.jsx)("input",{type:"password",class:"myInput",placeholder:"Enter Password"})]})}),Object(f.jsx)("div",{class:"form group my-0"}),Object(f.jsxs)("label",{class:"check_1",children:[Object(f.jsx)("input",{type:"checkbox"}),"Remember Me"]}),Object(f.jsx)("div",{class:"form group",children:Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"button",class:"form-control button",value:"LOG IN",onClick:function(){x()(".Slider2").animate({width:"0%"},500)}})})})]})]})})})})})},E=s(24),R=function(e){var t=Object(n.useState)([{id:0,img:"Open.png",title:"Open",description:"Visit the Website or Page"}]),s=Object(o.a)(t,2),i=s[0],c=s[1],a=function(e){console.log(i),c((function(t){return t.filter((function(t,s){return s!==e}))}))},r=Object(n.useState)(""),d=Object(o.a)(r,2),b=d[0],j=d[1];Object(n.useEffect)((function(){c((function(e){for(var t=[],s=Object.keys(localStorage),n=s.length;n--;)"object"==typeof JSON.parse(localStorage.getItem(s[n]))&&"del"!==s[n]&&"isDark"!==s[n]&&"3or4"!==s[n]&&"current"!==s[n]&&t.push(JSON.parse(localStorage.getItem(s[n])));var i=localStorage.getItem("count"),c=localStorage.getItem("isDark"),a=localStorage.getItem("3or4"),o=localStorage.getItem("del"),r=localStorage.getItem("current");return 0!==t.length&&localStorage.clear(),console.log(t),localStorage.setItem("count",i),localStorage.setItem("isDark",c),localStorage.setItem("3or4",a),localStorage.setItem("del",o),localStorage.setItem("current",r),[].concat(Object(l.a)(e),t)}))}),[]);var h=function(){x()(".notes").slideToggle("slow"),x()("#no").toggle(),x()("#no1").toggle(),x()("#no3").toggle()},y=Object(n.useState)({}),w=Object(o.a)(y,2),S=w[0],I=w[1],R=function(e){I(e)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{id:"searchj",style:{width:"30%",padding:"4px",margin:"auto",marginBottom:"20px",borderRadius:"30px",position:"relative",zIndex:"101"},children:Object(f.jsxs)(m.a,{inline:!0,className:"w-50 mx-auto",children:[Object(f.jsx)(E.a,{id:"searchf",type:"text",placeholder:"search..",href:"#",className:"w-100 ",style:{borderRadius:"25px"},onChange:function(e){return j(e.target.value)}}),Object(f.jsx)(p.a,{type:"submit",className:"invisible"})]})}),Object(f.jsx)("div",{className:" h-200 ",style:{width:"0",overflowX:"hidden"},children:Object(f.jsx)(k,{setdeletednote:function(e){c((function(t){return[].concat(Object(l.a)(t),[e])}))}})}),Object(f.jsxs)("div",{className:"Main",children:[Object(f.jsx)("div",{className:"Slider h-200 bg-secondary",style:{position:"fixed",width:"0",overflowX:"hidden",zIndex:"101",bottom:"5px",height:"70%",borderRadius:"35px",margin:"5px"},children:Object(f.jsx)(C,{})}),Object(f.jsx)("div",{className:"Slider2 h-200",style:{position:"fixed",width:"0",overflowX:"hidden",zIndex:"101",bottom:"95px",right:"5px",height:"67%",borderRadius:"35px",margin:"5px"},children:Object(f.jsx)(B,{})}),Object(f.jsx)(g.a,{fluid:!0,id:"goto",children:Object(f.jsx)(v.a,{className:"m-5 d-block card-columns ",id:"addednotes",children:i.filter((function(e){return""===b||e.description.toLowerCase().includes(b.toLowerCase())||e.title.toLowerCase().includes(b.toLowerCase())||e.img.toLowerCase().includes(b.toLowerCase())?e:void 0})).map((function(e,t){return t<i.length-1?Object(f.jsx)(L,{style:{position:"relative"},editingnotes:R,notek:e,img:e.img,id:t,count:e.c,new:"",deleteItem:a},t):Object(f.jsx)(L,{style:{position:"relative"},editingnotes:R,notek:e,img:e.img,id:t,count:e.c,new:"shadowblue",deleteItem:a},t)}))})}),Object(f.jsxs)("div",{className:"n1",style:{},children:[Object(f.jsx)(u.a,{onClick:h,id:"no",style:{borderRadius:"40px",padding:"0px",width:"30%",color:"#2D66AD",margin:"10px",position:"relative",left:"35%",display:"none"},children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)("h3",{style:{textAlign:"center"},children:"Hide Tutorial Notes"}),Object(f.jsx)("p",{class:"lead"})]})}),Object(f.jsx)(O,{passNote:function(e){c((function(t){return[].concat(Object(l.a)(t),[e])}))},premade:S}),Object(f.jsx)(u.a,{onClick:h,id:"no1",style:{borderRadius:"40px",padding:"0px",width:"30%",color:"#2D66AD",position:"relative",left:"35%",display:"none"},children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)("h3",{style:{textAlign:"center"},children:"Show Tutorial Notes"}),Object(f.jsx)("p",{class:"lead"})]})}),Object(f.jsx)(u.a,{id:"no3",style:{borderRadius:"40px",padding:"0px",width:"30%",color:"#2D66AD",position:"relative",left:"35%",visibility:"hidden",display:"none"},children:Object(f.jsxs)(g.a,{children:[Object(f.jsx)("h3",{style:{textAlign:"center"},children:"Open Tutorial Notes"}),Object(f.jsx)("p",{class:"lead"})]})})]}),Object(f.jsx)("div",{onClick:function(){x()("#no").slideToggle()},children:Object(f.jsx)("div",{className:"notes",style:{position:"relative"},children:Object(f.jsx)(N,{notes:e.notes,sendData:b})})})]})]})},_=[{id:2,img:"https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp",title:"How ",description:"Are you today?   Best of Luck!  \t"},{id:1,img:"",title:":)",description:"Hello"},{id:3,img:"Reset.png",title:"Dbl Reset",description:"Double Click on Reset to clear the input as well as hide the input fields"},{id:4,img:"Reset.png",title:"Reset",description:"Click on Reset to clear the input"},{id:5,img:"TakeNotes.png",title:"Take Notes",description:"Click on Take Notes to input your note"},{id:6,img:"All Notes.png",title:"All Notes",description:"Takes you to the notes"},{id:7,img:"About Us.png",title:"About Us",description:"Get to know us on social platforms"},{id:8,img:"https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp",title:"How to Hide Tutorial Notes??",description:"1.Click on any tutorial note  </br> 2.A Hide Tutorial Button will appear </br>  3.Click the button to hide/show"},{id:9,img:"Open.png",title:"Open",description:"Visit the Website or Page"}];var T=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(R,{id:"main",notes:_})})},z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),z()}},[[39,1,2]]]);
//# sourceMappingURL=main.7167a0e4.chunk.js.map