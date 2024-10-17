import{a as e3,b as l3,c as t3,d as n3,e as s3,f as z2,g as R2,h as a3,i as i3,j as o3,k as r3,l as O2,m as V2,n as f3,o as Q,p as m3,q as p3}from"./chunk-7J6I6YBL.js";import{$ as I2,$a as d2,Db as g,Fb as c1,Ga as U1,Hb as N2,Ib as y2,Ka as L,La as w,Oa as q1,Ob as Z1,Qb as c3,S as x2,T as P2,Va as $,Wa as j1,X as R1,Xa as W1,Y as F2,Ya as G1,Za as H2,_ as h,_a as E,a as d,aa as B2,b as S,ba as O1,bb as J2,c as Y4,cb as Z2,d as K4,db as o,e as Q4,eb as r,fb as k,ga as m2,gb as $1,ha as W,hb as X1,ia as G,ib as b2,jb as Y1,mb as O,na as p2,nb as y,ob as K1,pb as Q1,qa as V1,ub as B,vb as f,wb as x,xb as t2,yb as J1}from"./chunk-D55NI4RC.js";var q4=Y4(B1=>{"use strict";Object.defineProperty(B1,"__esModule",{value:!0});var g2=class c{constructor(e,l){var t,n;this.bornTime=Date.now(),this.hideEventHandler=this.handleHideEvent.bind(this),c.appendCSS(),this.viewID=c.generateViewID();let s=c.getHtml(this.viewID);document.body.appendChild(s),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.setMessage(this.message=e),this.setPosition(this.position=l?.position||c.DEFAULT_POSITION),this.setTheme(l?.theme),this.setIconSrc(l?.iconSrc),this.setStyle(l?.style),this.setActionText(l?.actionText),this.setActionCallback(l?.onAction),this.waitForEvent=(t=l?.waitForEvent)!==null&&t!==void 0?t:!0,this.timeout=(n=l?.timeout)!==null&&n!==void 0?n:c.DEFAULT_HIDING_TIMEOUT,this.isWaitingForHide=!1,this.afterHide=l?.afterHide,this.addHideEventListener(),this.waitForEvent||this.startHidingTimer(this.timeout),this.show()}static appendCSS(){if(document.getElementById("snackbar-style")===null){let e=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.id="snackbar-style",e.appendChild(l),l.appendChild(document.createTextNode(g8))}}static generateViewID(){let e=Math.floor(Math.random()*1e9)+1e8;return document.getElementById(e.toString())===null?e:c.generateViewID()}static getHtml(e){let l=`
            <div class="snackbar" id="${e}">
                <div class="container">
                    <span class='icon'></span>
                    <p class="message"></p>
                    <input type="button" class="actionButton" id="${e}_actionButton" value="">
                </div>
            </div>
        `,t=document.createElement("div");return t.innerHTML=l.trim(),t.firstChild||t}setMessage(e){this.message=e;let l=this.view.getElementsByClassName("message")[0];l.innerHTML=this.message}setPosition(e){this.position=e,this.view.classList.remove("bottom-left"),this.view.classList.remove("bottom-center"),this.view.classList.remove("bottom-right"),this.view.classList.remove("top-left"),this.view.classList.remove("top-center"),this.view.classList.remove("top-right"),this.view.classList.add(e),c.adjustListPositions(this)}setIconSrc(e){if(e===void 0)return;this.iconSrc=e;let l=this.view.getElementsByClassName("icon")[0];l.style.setProperty("display","block"),l.style.setProperty("background-image","url("+this.iconSrc+")")}setTheme(e){e!==void 0&&(this.theme==e,this.view.classList.remove("light"),this.view.classList.remove("dark"),this.view.classList.add(e))}setStyle(e){if(e!==void 0){this.style=e;for(let[l,t]of Object.entries(this.style)){let s=document.getElementById(this.viewID.toString()).getElementsByClassName(l)[0];if(s!==void 0)for(let a of t)s.style.setProperty(a[0],a[1])}}}setActionText(e){if(e===void 0)return;this.actionText=e;let l=this.view.getElementsByClassName("actionButton")[0];l.style.setProperty("display","block"),l.value=this.actionText}setActionCallback(e){this.onAction=e,this.view.getElementsByClassName("actionButton")[0].addEventListener("click",()=>{this.onAction!==void 0&&this.onAction(),this.hide()})}show(){setTimeout(()=>{c.List.push(this),c.adjustListPositions(this)},10)}addHideEventListener(){let e=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(function(l){window.addEventListener(l,e.hideEventHandler)})}removeHideEventListener(){let e=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(l=>{window.removeEventListener(l,e.hideEventHandler)})}handleHideEvent(){let e=this.timeout;Date.now()-this.bornTime>this.timeout&&(e=this.timeout/2),this.startHidingTimer(e),this.removeHideEventListener()}startHidingTimer(e){e>0&&!this.isWaitingForHide&&(this.isWaitingForHide=!0,setTimeout(()=>{this.hide()},e))}hide(){let e=this;c.List.filter(n=>n.position===this.position).length>1?(this.view.style.opacity="0",this.position.indexOf("bottom")>=0?this.view.style.marginBottom="-"+(this.getHeight()+5)+"px":this.view.style.marginTop="-"+(this.getHeight()+5)+"px"):this.position.indexOf("bottom")>=0?this.view.style.bottom="-"+(this.getHeight()+15)+"px":this.view.style.top="-"+(this.getHeight()+15)+"px";let t=c.List.indexOf(this);t>-1&&c.List.splice(t,1),c.adjustListPositions(this),setTimeout(function(){e.view.remove(),e.afterHide!==void 0&&e.afterHide()},500)}static adjustListPositions(e){let l=c.List.filter(t=>t.position===e.position);l.forEach(function(t,n){let s=20+(l.length-n-1)*(t.getHeight()+5)+"px";e.position.indexOf("bottom")>=0?(t.view.style.bottom=s,t.view.style.top="unset"):(t.view.style.top=s,t.view.style.bottom="unset")})}getHeight(){return+getComputedStyle(this.view).height.replace("px","")}};B1.default=g2;g2.List=[];g2.DEFAULT_HIDING_TIMEOUT=4e3;g2.DEFAULT_POSITION="bottom-left";var g8=`
.snackbar {
    z-index: 999999995;
    position: fixed;
    transition: top 400ms ease 0s, bottom 400ms ease 0s, margin-top 300ms ease 0s, margin-bottom 300ms ease 0s, opacity 150ms ease 150ms;
  }
  .snackbar > .container {
    box-sizing: border-box;
    max-width: 450px;
    min-height: 46px;
    padding: 9px 20px 10px 20px;
    border-radius: 3px;
    background-color: rgb(58, 58, 58);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    color: rgb(250, 250, 250);
    align-items: center;
    gap: 10px;
    transition: all 150ms ease-in-out;
  }
  .snackbar > .container * {
    box-sizing: border-box;
  }
  .snackbar > .container > .icon {
    width: 20px;
    height: 20px;
    margin-left: -3px;
    margin-right: -2px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    display: none;
  }
  .snackbar > .container > .message {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
  }
  .snackbar > .container > .actionButton {
    padding: 5px 3px;
    background-color: transparent;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: #F7FF00;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;
  }
  
  .snackbar.bottom-left {
    left: 24px;
    bottom: -60px;
  }
  
  .snackbar.bottom-center {
    left: 50%;
    bottom: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.bottom-right {
    right: 24px;
    bottom: -60px;
  }
  
  .snackbar.top-left {
    left: 24px;
    top: -60px;
  }
  
  .snackbar.top-center {
    left: 50%;
    top: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.top-right {
    right: 24px;
    top: -60px;
  }
  
  .snackbar.light > .container {
    background-color: #fbfbfb;
    color: #555;
  }
  .snackbar.light > .container > .actionButton {
    color: #D60;
  }
  
  @media only screen and (max-width: 500px) {
    .snackbar {
      max-width: calc(100% - 48px);
    }
    .snackbar.top-center,
  .snackbar.bottom-center {
      width: calc(100% - 24px);
      max-width: unset;
      left: 12px;
      transform: translate(0, 0);
      display: flex;
      justify-content: center;
    }
  }
`});var e1=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-home"]],standalone:!0,features:[g],decls:2,vars:0,consts:[[1,"text-center"]],template:function(n,s){n&1&&(o(0,"h1",0),f(1,"This is Home Component"),r())}});let c=e;return c})();var z3=(()=>{let e=class e{constructor(t,n){this.router=t,this.location=n,this.pageHasChanges=!0}goToHomeComp(){console.log("Do Something......"),this.router.navigate(["/home"])}previous(){this.location.back()}next(){this.location.forward()}};e.\u0275fac=function(n){return new(n||e)(w(f3),w(l3))},e.\u0275cmp=h({type:e,selectors:[["app-aboutus"]],standalone:!0,features:[g],decls:12,vars:0,consts:[[1,"text-center"],["href","home"],["routerLink","/home",1,"btn","btn-primary","mx-3"],[1,"btn","btn-secondary",3,"click"],[1,"btn","btn-primary","mx-2",3,"click"],[1,"btn","btn-success",3,"click"]],template:function(n,s){n&1&&(o(0,"h1",0),f(1,"This is About-us Component"),r(),o(2,"a",1),f(3,"Home Component"),r(),o(4,"button",2),f(5,"Go To Home"),r(),o(6,"button",3),O("click",function(){return s.goToHomeComp()}),f(7,"Do Something & Go To Home"),r(),o(8,"button",4),O("click",function(){return s.previous()}),f(9,"previous"),r(),o(10,"button",5),O("click",function(){return s.next()}),f(11,"next"),r())},dependencies:[Q]});let c=e;return c})();var Z4=()=>[import("./chunk-5FOX2PT4.js").then(c=>c.LargeComponent)];function c0(c,e){c&1&&k(0,"app-large")}function e0(c,e){c&1&&(o(0,"p"),f(1,"Placeholder content"),r())}var L3=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-careers"]],standalone:!0,features:[g],decls:15,vars:0,consts:[[500],[1,"text-center"],[1,"row"],[1,"col-sm-3"],["routerLink","permanent",1,"nav-link"],["routerLink","contract",1,"nav-link"],[1,"col-sm-9"]],template:function(n,s){n&1&&(o(0,"h2",1),f(1,"This is Careers Component"),r(),k(2,"hr"),o(3,"div",2)(4,"div",3)(5,"a",4),f(6,"Permanent Jobs"),r(),o(7,"a",5),f(8,"Contract Jobs"),r()(),o(9,"div",6),$(10,c0,1,0)(11,e0,2,0),W1(12,10,Z4,null,11,null,null,0,j1),G1(),k(14,"router-outlet"),r()())},dependencies:[V2,Q]});let c=e;return c})();var u3=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-notfound"]],standalone:!0,features:[g],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),f(1,"notfound works!"),r())}});let c=e;return c})();var l1={};K4(l1,{default:()=>t1});var t1=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];var M3=()=>{},y1={},V3={},U3=null,q3={mark:M3,measure:M3};try{typeof window<"u"&&(y1=window),typeof document<"u"&&(V3=document),typeof MutationObserver<"u"&&(U3=MutationObserver),typeof performance<"u"&&(q3=performance)}catch{}var{userAgent:C3=""}=y1.navigator||{},c2=y1,b=V3,h3=U3,U2=q3,_8=!!c2.document,K=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",j3=~C3.indexOf("MSIE")||~C3.indexOf("Trident/"),N="classic",W3="duotone",T="sharp",P="sharp-duotone",t0=[N,W3,T,P],n0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},g3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},s0=["kit"],a0=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,i0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,o0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},r0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},f0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},m0={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},p0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},d0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},G3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},z0=["solid","regular","light","thin","duotone","brands"],$3=[1,2,3,4,5,6,7,8,9,10],L0=$3.concat([11,12,13,14,15,16,17,18,19,20]),v2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},u0=[...Object.keys(m0),...z0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",v2.GROUP,v2.SWAP_OPACITY,v2.PRIMARY,v2.SECONDARY].concat($3.map(c=>"".concat(c,"x"))).concat(L0.map(c=>"w-".concat(c))),M0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},C0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},h0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},x3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},X="___FONT_AWESOME___",r1=16,X3="fa",Y3="svg-inline--fa",i2="data-fa-i2svg",f1="data-fa-pseudo-element",g0="data-fa-pseudo-element-pending",v1="data-prefix",S1="data-icon",b3="fontawesome-i2svg",x0="async",b0=["HTML","HEAD","STYLE","SCRIPT"],K3=(()=>{try{return!0}catch{return!1}})(),Q3=[N,T,P];function _2(c){return new Proxy(c,{get(e,l){return l in e?e[l]:e[N]}})}var J3=d({},G3);J3[N]=d(d(d({},G3[N]),g3.kit),g3["kit-duotone"]);var s2=_2(J3),m1=d({},d0);m1[N]=d(d(d({},m1[N]),x3.kit),x3["kit-duotone"]);var E2=_2(m1),p1=d({},p0);p1[N]=d(d({},p1[N]),h0.kit);var a2=_2(p1),d1=d({},f0);d1[N]=d(d({},d1[N]),C0.kit);var N0=_2(d1),y0=a0,Z3="fa-layers-text",v0=i0,S0=d({},n0),D8=_2(S0),w0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],n1=v2,M2=new Set;Object.keys(E2[N]).map(M2.add.bind(M2));Object.keys(E2[T]).map(M2.add.bind(M2));Object.keys(E2[P]).map(M2.add.bind(M2));var k0=[...s0,...u0],w2=c2.FontAwesomeConfig||{};function E0(c){var e=b.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function A0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[l,t]=e,n=A0(E0(l));n!=null&&(w2[t]=n)});var c4={styleDefault:"solid",familyDefault:"classic",cssPrefix:X3,replacementClass:Y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};w2.familyPrefix&&(w2.cssPrefix=w2.familyPrefix);var C2=d(d({},c4),w2);C2.autoReplaceSvg||(C2.observeMutations=!1);var z={};Object.keys(c4).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(e){C2[c]=e,k2.forEach(l=>l(z))},get:function(){return C2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){C2.cssPrefix=c,k2.forEach(e=>e(z))},get:function(){return C2.cssPrefix}});c2.FontAwesomeConfig=z;var k2=[];function _0(c){return k2.push(c),()=>{k2.splice(k2.indexOf(c),1)}}var J=r1,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D0(c){if(!c||!K)return;let e=b.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let l=b.head.childNodes,t=null;for(let n=l.length-1;n>-1;n--){let s=l[n],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(t=s)}return b.head.insertBefore(e,t),c}var T0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A2(){let c=12,e="";for(;c-- >0;)e+=T0[Math.random()*62|0];return e}function h2(c){let e=[];for(let l=(c||[]).length>>>0;l--;)e[l]=c[l];return e}function w1(c){return c.classList?h2(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function e4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P0(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,'="').concat(e4(c[l]),'" '),"").trim()}function $2(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,": ").concat(c[l].trim(),";"),"")}function k1(c){return c.size!==U.size||c.x!==U.x||c.y!==U.y||c.rotate!==U.rotate||c.flipX||c.flipY}function F0(c){let{transform:e,containerWidth:l,iconWidth:t}=c,n={transform:"translate(".concat(l/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(s," ").concat(a," ").concat(i)},p={transform:"translate(".concat(t/2*-1," -256)")};return{outer:n,inner:m,path:p}}function I0(c){let{transform:e,width:l=r1,height:t=r1,startCentered:n=!1}=c,s="";return n&&j3?s+="translate(".concat(e.x/J-l/2,"em, ").concat(e.y/J-t/2,"em) "):n?s+="translate(calc(-50% + ".concat(e.x/J,"em), calc(-50% + ").concat(e.y/J,"em)) "):s+="translate(".concat(e.x/J,"em, ").concat(e.y/J,"em) "),s+="scale(".concat(e.size/J*(e.flipX?-1:1),", ").concat(e.size/J*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var B0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function l4(){let c=X3,e=Y3,l=z.cssPrefix,t=z.replacementClass,n=B0;if(l!==c||t!==e){let s=new RegExp("\\.".concat(c,"\\-"),"g"),a=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");n=n.replace(s,".".concat(l,"-")).replace(a,"--".concat(l,"-")).replace(i,".".concat(t))}return n}var N3=!1;function s1(){z.autoAddCss&&!N3&&(D0(l4()),N3=!0)}var H0={mixout(){return{dom:{css:l4,insertCss:s1}}},hooks(){return{beforeDOMElementCreation(){s1()},beforeI2svg(){s1()}}}},Y=c2||{};Y[X]||(Y[X]={});Y[X].styles||(Y[X].styles={});Y[X].hooks||(Y[X].hooks={});Y[X].shims||(Y[X].shims=[]);var q=Y[X],t4=[],n4=function(){b.removeEventListener("DOMContentLoaded",n4),W2=1,t4.map(c=>c())},W2=!1;K&&(W2=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),W2||b.addEventListener("DOMContentLoaded",n4));function R0(c){K&&(W2?setTimeout(c,0):t4.push(c))}function D2(c){let{tag:e,attributes:l={},children:t=[]}=c;return typeof c=="string"?e4(c):"<".concat(e," ").concat(P0(l),">").concat(t.map(D2).join(""),"</").concat(e,">")}function y3(c,e,l){if(c&&c[e]&&c[e][l])return{prefix:e,iconName:l,icon:c[e][l]}}var O0=function(e,l){return function(t,n,s,a){return e.call(l,t,n,s,a)}},a1=function(e,l,t,n){var s=Object.keys(e),a=s.length,i=n!==void 0?O0(l,n):l,m,p,u;for(t===void 0?(m=1,u=e[s[0]]):(m=0,u=t);m<a;m++)p=s[m],u=i(u,e[p],p,e);return u};function V0(c){let e=[],l=0,t=c.length;for(;l<t;){let n=c.charCodeAt(l++);if(n>=55296&&n<=56319&&l<t){let s=c.charCodeAt(l++);(s&64512)==56320?e.push(((n&1023)<<10)+(s&1023)+65536):(e.push(n),l--)}else e.push(n)}return e}function z1(c){let e=V0(c);return e.length===1?e[0].toString(16):null}function U0(c,e){let l=c.length,t=c.charCodeAt(e),n;return t>=55296&&t<=56319&&l>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function v3(c){return Object.keys(c).reduce((e,l)=>{let t=c[l];return!!t.icon?e[t.iconName]=t.icon:e[l]=t,e},{})}function L1(c,e){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:t=!1}=l,n=v3(e);typeof q.hooks.addPack=="function"&&!t?q.hooks.addPack(c,v3(e)):q.styles[c]=d(d({},q.styles[c]||{}),n),c==="fas"&&L1("fa",e)}var{styles:n2,shims:q0}=q,j0={[N]:Object.values(a2[N]),[T]:Object.values(a2[T]),[P]:Object.values(a2[P])},E1=null,s4={},a4={},i4={},o4={},r4={},W0={[N]:Object.keys(s2[N]),[T]:Object.keys(s2[T]),[P]:Object.keys(s2[P])};function G0(c){return~k0.indexOf(c)}function $0(c,e){let l=e.split("-"),t=l[0],n=l.slice(1).join("-");return t===c&&n!==""&&!G0(n)?n:null}var f4=()=>{let c=t=>a1(n2,(n,s,a)=>(n[a]=a1(s,t,{}),n),{});s4=c((t,n,s)=>(n[3]&&(t[n[3]]=s),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{t[i.toString(16)]=s}),t)),a4=c((t,n,s)=>(t[s]=s,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{t[i]=s}),t)),r4=c((t,n,s)=>{let a=n[2];return t[s]=s,a.forEach(i=>{t[i]=s}),t});let e="far"in n2||z.autoFetchSvg,l=a1(q0,(t,n)=>{let s=n[0],a=n[1],i=n[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(t.names[s]={prefix:a,iconName:i}),typeof s=="number"&&(t.unicodes[s.toString(16)]={prefix:a,iconName:i}),t},{names:{},unicodes:{}});i4=l.names,o4=l.unicodes,E1=X2(z.styleDefault,{family:z.familyDefault})};_0(c=>{E1=X2(c.styleDefault,{family:z.familyDefault})});f4();function A1(c,e){return(s4[c]||{})[e]}function X0(c,e){return(a4[c]||{})[e]}function Z(c,e){return(r4[c]||{})[e]}function m4(c){return i4[c]||{prefix:null,iconName:null}}function Y0(c){let e=o4[c],l=A1("fas",c);return e||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function e2(){return E1}var _1=()=>({prefix:null,iconName:null,rest:[]});function X2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=N}=e,t=s2[l][c],n=E2[l][c]||E2[l][t],s=c in q.styles?c:null;return n||s||null}var K0={[N]:Object.keys(a2[N]),[T]:Object.keys(a2[T]),[P]:Object.keys(a2[P])};function Y2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=e,t={[N]:"".concat(z.cssPrefix,"-").concat(N),[T]:"".concat(z.cssPrefix,"-").concat(T),[P]:"".concat(z.cssPrefix,"-").concat(P)},n=null,s=N,a=t0.filter(m=>m!==W3);a.forEach(m=>{(c.includes(t[m])||c.some(p=>K0[m].includes(p)))&&(s=m)});let i=c.reduce((m,p)=>{let u=$0(z.cssPrefix,p);if(n2[p]?(p=j0[s].includes(p)?N0[s][p]:p,n=p,m.prefix=p):W0[s].indexOf(p)>-1?(n=p,m.prefix=X2(p,{family:s})):u?m.iconName=u:p!==z.replacementClass&&!a.some(C=>p===t[C])&&m.rest.push(p),!l&&m.prefix&&m.iconName){let C=n==="fa"?m4(m.iconName):{},M=Z(m.prefix,m.iconName);C.prefix&&(n=null),m.iconName=C.iconName||M||m.iconName,m.prefix=C.prefix||m.prefix,m.prefix==="far"&&!n2.far&&n2.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},_1());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&s===T&&(n2.fass||z.autoFetchSvg)&&(i.prefix="fass",i.iconName=Z(i.prefix,i.iconName)||i.iconName),!i.prefix&&s===P&&(n2.fasds||z.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Z(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||n==="fa")&&(i.prefix=e2()||"fas"),i}var u1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];let n=l.reduce(this._pullDefinitions,{});Object.keys(n).forEach(s=>{this.definitions[s]=d(d({},this.definitions[s]||{}),n[s]),L1(s,n[s]);let a=a2[N][s];a&&L1(a,n[s]),f4()})}reset(){this.definitions={}}_pullDefinitions(e,l){let t=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(t).map(n=>{let{prefix:s,iconName:a,icon:i}=t[n],m=i[2];e[s]||(e[s]={}),m.length>0&&m.forEach(p=>{typeof p=="string"&&(e[s][p]=i)}),e[s][a]=i}),e}},S3=[],L2={},u2={},Q0=Object.keys(u2);function J0(c,e){let{mixoutsTo:l}=e;return S3=c,L2={},Object.keys(u2).forEach(t=>{Q0.indexOf(t)===-1&&delete u2[t]}),S3.forEach(t=>{let n=t.mixout?t.mixout():{};if(Object.keys(n).forEach(s=>{typeof n[s]=="function"&&(l[s]=n[s]),typeof n[s]=="object"&&Object.keys(n[s]).forEach(a=>{l[s]||(l[s]={}),l[s][a]=n[s][a]})}),t.hooks){let s=t.hooks();Object.keys(s).forEach(a=>{L2[a]||(L2[a]=[]),L2[a].push(s[a])})}t.provides&&t.provides(u2)}),l}function M1(c,e){for(var l=arguments.length,t=new Array(l>2?l-2:0),n=2;n<l;n++)t[n-2]=arguments[n];return(L2[c]||[]).forEach(a=>{e=a.apply(null,[e,...t])}),e}function o2(c){for(var e=arguments.length,l=new Array(e>1?e-1:0),t=1;t<e;t++)l[t-1]=arguments[t];(L2[c]||[]).forEach(s=>{s.apply(null,l)})}function l2(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return u2[c]?u2[c].apply(null,e):void 0}function C1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,l=c.prefix||e2();if(e)return e=Z(l,e)||e,y3(p4.definitions,l,e)||y3(q.styles,l,e)}var p4=new u1,Z0=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,o2("noAuto")},c6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(o2("beforeI2svg",c),l2("pseudoElements2svg",c),l2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,R0(()=>{l6({autoReplaceSvgRoot:e}),o2("watch",c)})}},e6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Z(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=X2(c[0]);return{prefix:l,iconName:Z(l,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(y0))){let e=Y2(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||e2(),iconName:Z(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=e2();return{prefix:e,iconName:Z(e,c)||c}}}},F={noAuto:Z0,config:z,dom:c6,parse:e6,library:p4,findIconDefinition:C1,toHtml:D2},l6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=b}=c;(Object.keys(q.styles).length>0||z.autoFetchSvg)&&K&&z.autoReplaceSvg&&F.dom.i2svg({node:e})};function K2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>D2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!K)return;let l=b.createElement("div");return l.innerHTML=c.html,l.children}}),c}function t6(c){let{children:e,main:l,mask:t,attributes:n,styles:s,transform:a}=c;if(k1(a)&&l.found&&!t.found){let{width:i,height:m}=l,p={x:i/m/2,y:.5};n.style=$2(S(d({},s),{"transform-origin":"".concat(p.x+a.x/16,"em ").concat(p.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function n6(c){let{prefix:e,iconName:l,children:t,attributes:n,symbol:s}=c,a=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(l):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(d({},n),{id:a}),children:t}]}]}function D1(c){let{icons:{main:e,mask:l},prefix:t,iconName:n,transform:s,symbol:a,title:i,maskId:m,titleId:p,extra:u,watchable:C=!1}=c,{width:M,height:v}=l.found?l:e,I=t==="fak",V=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(f2=>u.classes.indexOf(f2)===-1).filter(f2=>f2!==""||!!f2).concat(u.classes).join(" "),_={children:[],attributes:S(d({},u.attributes),{"data-prefix":t,"data-icon":n,class:V,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(v)})},H=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(M/v*16*.0625,"em")}:{};C&&(_.attributes[i2]=""),i&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(p||A2())},children:[i]}),delete _.attributes.title);let D=S(d({},_),{prefix:t,iconName:n,main:e,mask:l,maskId:m,transform:s,symbol:a,styles:d(d({},H),u.styles)}),{children:R,attributes:r2}=l.found&&e.found?l2("generateAbstractMask",D)||{children:[],attributes:{}}:l2("generateAbstractIcon",D)||{children:[],attributes:{}};return D.children=R,D.attributes=r2,a?n6(D):t6(D)}function w3(c){let{content:e,width:l,height:t,transform:n,title:s,extra:a,watchable:i=!1}=c,m=S(d(d({},a.attributes),s?{title:s}:{}),{class:a.classes.join(" ")});i&&(m[i2]="");let p=d({},a.styles);k1(n)&&(p.transform=I0({transform:n,startCentered:!0,width:l,height:t}),p["-webkit-transform"]=p.transform);let u=$2(p);u.length>0&&(m.style=u);let C=[];return C.push({tag:"span",attributes:m,children:[e]}),s&&C.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),C}function s6(c){let{content:e,title:l,extra:t}=c,n=S(d(d({},t.attributes),l?{title:l}:{}),{class:t.classes.join(" ")}),s=$2(t.styles);s.length>0&&(n.style=s);let a=[];return a.push({tag:"span",attributes:n,children:[e]}),l&&a.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),a}var{styles:i1}=q;function h1(c){let e=c[0],l=c[1],[t]=c.slice(4),n=null;return Array.isArray(t)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(n1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(n1.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(n1.PRIMARY),fill:"currentColor",d:t[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:e,height:l,icon:n}}var a6={found:!1,width:512,height:512};function i6(c,e){!K3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function g1(c,e){let l=e;return e==="fa"&&z.styleDefault!==null&&(e=e2()),new Promise((t,n)=>{if(l==="fa"){let s=m4(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&i1[e]&&i1[e][c]){let s=i1[e][c];return t(h1(s))}i6(c,e),t(S(d({},a6),{icon:z.showMissingIcons&&c?l2("missingIconAbstract")||{}:{}}))})}var k3=()=>{},x1=z.measurePerformance&&U2&&U2.mark&&U2.measure?U2:{mark:k3,measure:k3},S2='FA "6.6.0"',o6=c=>(x1.mark("".concat(S2," ").concat(c," begins")),()=>d4(c)),d4=c=>{x1.mark("".concat(S2," ").concat(c," ends")),x1.measure("".concat(S2," ").concat(c),"".concat(S2," ").concat(c," begins"),"".concat(S2," ").concat(c," ends"))},T1={begin:o6,end:d4},q2=()=>{};function E3(c){return typeof(c.getAttribute?c.getAttribute(i2):null)=="string"}function r6(c){let e=c.getAttribute?c.getAttribute(v1):null,l=c.getAttribute?c.getAttribute(S1):null;return e&&l}function f6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function m6(){return z.autoReplaceSvg===!0?j2.replace:j2[z.autoReplaceSvg]||j2.replace}function p6(c){return b.createElementNS("http://www.w3.org/2000/svg",c)}function d6(c){return b.createElement(c)}function z4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?p6:d6}=e;if(typeof c=="string")return b.createTextNode(c);let t=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(s){t.setAttribute(s,c.attributes[s])}),(c.children||[]).forEach(function(s){t.appendChild(z4(s,{ceFn:l}))}),t}function z6(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var j2={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(l=>{e.parentNode.insertBefore(z4(l),e)}),e.getAttribute(i2)===null&&z.keepOriginalSource){let l=b.createComment(z6(e));e.parentNode.replaceChild(l,e)}else e.remove()},nest:function(c){let e=c[0],l=c[1];if(~w1(e).indexOf(z.replacementClass))return j2.replace(c);let t=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let s=l[0].attributes.class.split(" ").reduce((a,i)=>(i===z.replacementClass||i.match(t)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});l[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}let n=l.map(s=>D2(s)).join(`
`);e.setAttribute(i2,""),e.innerHTML=n}};function A3(c){c()}function L4(c,e){let l=typeof e=="function"?e:q2;if(c.length===0)l();else{let t=A3;z.mutateApproach===x0&&(t=c2.requestAnimationFrame||A3),t(()=>{let n=m6(),s=T1.begin("mutate");c.map(n),s(),l()})}}var P1=!1;function u4(){P1=!0}function b1(){P1=!1}var G2=null;function _3(c){if(!h3||!z.observeMutations)return;let{treeCallback:e=q2,nodeCallback:l=q2,pseudoElementsCallback:t=q2,observeMutationsRoot:n=b}=c;G2=new h3(s=>{if(P1)return;let a=e2();h2(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!E3(i.addedNodes[0])&&(z.searchPseudoElements&&t(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&z.searchPseudoElements&&t(i.target.parentNode),i.type==="attributes"&&E3(i.target)&&~w0.indexOf(i.attributeName))if(i.attributeName==="class"&&r6(i.target)){let{prefix:m,iconName:p}=Y2(w1(i.target));i.target.setAttribute(v1,m||a),p&&i.target.setAttribute(S1,p)}else f6(i.target)&&l(i.target)})}),K&&G2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function L6(){G2&&G2.disconnect()}function u6(c){let e=c.getAttribute("style"),l=[];return e&&(l=e.split(";").reduce((t,n)=>{let s=n.split(":"),a=s[0],i=s.slice(1);return a&&i.length>0&&(t[a]=i.join(":").trim()),t},{})),l}function M6(c){let e=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),t=c.innerText!==void 0?c.innerText.trim():"",n=Y2(w1(c));return n.prefix||(n.prefix=e2()),e&&l&&(n.prefix=e,n.iconName=l),n.iconName&&n.prefix||(n.prefix&&t.length>0&&(n.iconName=X0(n.prefix,c.innerText)||A1(n.prefix,z1(c.innerText))),!n.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function C6(c){let e=h2(c.attributes).reduce((n,s)=>(n.name!=="class"&&n.name!=="style"&&(n[s.name]=s.value),n),{}),l=c.getAttribute("title"),t=c.getAttribute("data-fa-title-id");return z.autoA11y&&(l?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(t||A2()):(e["aria-hidden"]="true",e.focusable="false")),e}function h6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function D3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:t,rest:n}=M6(c),s=C6(c),a=M1("parseNodeAttributes",{},c),i=e.styleParser?u6(c):[];return d({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:s}},a)}var{styles:g6}=q;function M4(c){let e=z.autoReplaceSvg==="nest"?D3(c,{styleParser:!1}):D3(c);return~e.extra.classes.indexOf(Z3)?l2("generateLayersText",c,e):l2("generateSvgReplacementMutation",c,e)}var j=new Set;Q3.map(c=>{j.add("fa-".concat(c))});Object.keys(s2[N]).map(j.add.bind(j));Object.keys(s2[T]).map(j.add.bind(j));Object.keys(s2[P]).map(j.add.bind(j));j=[...j];function T3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();let l=b.documentElement.classList,t=u=>l.add("".concat(b3,"-").concat(u)),n=u=>l.remove("".concat(b3,"-").concat(u)),s=z.autoFetchSvg?j:Q3.map(u=>"fa-".concat(u)).concat(Object.keys(g6));s.includes("fa")||s.push("fa");let a=[".".concat(Z3,":not([").concat(i2,"])")].concat(s.map(u=>".".concat(u,":not([").concat(i2,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=h2(c.querySelectorAll(a))}catch{}if(i.length>0)t("pending"),n("complete");else return Promise.resolve();let m=T1.begin("onTree"),p=i.reduce((u,C)=>{try{let M=M4(C);M&&u.push(M)}catch(M){K3||M.name==="MissingIcon"&&console.error(M)}return u},[]);return new Promise((u,C)=>{Promise.all(p).then(M=>{L4(M,()=>{t("active"),t("complete"),n("pending"),typeof e=="function"&&e(),m(),u()})}).catch(M=>{m(),C(M)})})}function x6(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M4(c).then(l=>{l&&L4([l],e)})}function b6(c){return function(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(e||{}).icon?e:C1(e||{}),{mask:n}=l;return n&&(n=(n||{}).icon?n:C1(n||{})),c(t,S(d({},l),{mask:n}))}}var N6=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=U,symbol:t=!1,mask:n=null,maskId:s=null,title:a=null,titleId:i=null,classes:m=[],attributes:p={},styles:u={}}=e;if(!c)return;let{prefix:C,iconName:M,icon:v}=c;return K2(d({type:"icon"},c),()=>(o2("beforeDOMElementCreation",{iconDefinition:c,params:e}),z.autoA11y&&(a?p["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||A2()):(p["aria-hidden"]="true",p.focusable="false")),D1({icons:{main:h1(v),mask:n?h1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:M,transform:d(d({},U),l),symbol:t,title:a,maskId:s,titleId:i,extra:{attributes:p,styles:u,classes:m}})))},y6={mixout(){return{icon:b6(N6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=T3,c.nodeCallback=x6,c}}},provides(c){c.i2svg=function(e){let{node:l=b,callback:t=()=>{}}=e;return T3(l,t)},c.generateSvgReplacementMutation=function(e,l){let{iconName:t,title:n,titleId:s,prefix:a,transform:i,symbol:m,mask:p,maskId:u,extra:C}=l;return new Promise((M,v)=>{Promise.all([g1(t,a),p.iconName?g1(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[V,_]=I;M([e,D1({icons:{main:V,mask:_},prefix:a,iconName:t,transform:i,symbol:m,maskId:u,title:n,titleId:s,extra:C,watchable:!0})])}).catch(v)})},c.generateAbstractIcon=function(e){let{children:l,attributes:t,main:n,transform:s,styles:a}=e,i=$2(a);i.length>0&&(t.style=i);let m;return k1(s)&&(m=l2("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),l.push(m||n.icon),{children:l,attributes:t}}}},v6={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=e;return K2({type:"layer"},()=>{o2("beforeDOMElementCreation",{assembler:c,params:e});let t=[];return c(n=>{Array.isArray(n)?n.map(s=>{t=t.concat(s.abstract)}):t=t.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:t}]})}}}},S6={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:t=[],attributes:n={},styles:s={}}=e;return K2({type:"counter",content:c},()=>(o2("beforeDOMElementCreation",{content:c,params:e}),s6({content:c.toString(),title:l,extra:{attributes:n,styles:s,classes:["".concat(z.cssPrefix,"-layers-counter"),...t]}})))}}}},w6={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=U,title:t=null,classes:n=[],attributes:s={},styles:a={}}=e;return K2({type:"text",content:c},()=>(o2("beforeDOMElementCreation",{content:c,params:e}),w3({content:c,transform:d(d({},U),l),title:t,extra:{attributes:s,styles:a,classes:["".concat(z.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(e,l){let{title:t,transform:n,extra:s}=l,a=null,i=null;if(j3){let m=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();a=p.width/m,i=p.height/m}return z.autoA11y&&!t&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,w3({content:e.innerHTML,width:a,height:i,transform:n,title:t,extra:s,watchable:!0})])}}},k6=new RegExp('"',"ug"),P3=[1105920,1112319],F3=d(d(d({FontAwesome:{normal:"fas",400:"fas"}},r0),o0),M0),N1=Object.keys(F3).reduce((c,e)=>(c[e.toLowerCase()]=F3[e],c),{}),E6=Object.keys(N1).reduce((c,e)=>{let l=N1[e];return c[e]=l[900]||[...Object.entries(l)][0][1],c},{});function A6(c){let e=c.replace(k6,""),l=U0(e,0),t=l>=P3[0]&&l<=P3[1],n=e.length===2?e[0]===e[1]:!1;return{value:z1(n?e[0]:e),isSecondary:t||n}}function _6(c,e){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(e),n=isNaN(t)?"normal":t;return(N1[l]||{})[n]||E6[l]}function I3(c,e){let l="".concat(g0).concat(e.replace(":","-"));return new Promise((t,n)=>{if(c.getAttribute(l)!==null)return t();let a=h2(c.children).filter(M=>M.getAttribute(f1)===e)[0],i=c2.getComputedStyle(c,e),m=i.getPropertyValue("font-family"),p=m.match(v0),u=i.getPropertyValue("font-weight"),C=i.getPropertyValue("content");if(a&&!p)return c.removeChild(a),t();if(p&&C!=="none"&&C!==""){let M=i.getPropertyValue("content"),v=_6(m,u),{value:I,isSecondary:V}=A6(M),_=p[0].startsWith("FontAwesome"),H=A1(v,I),D=H;if(_){let R=Y0(I);R.iconName&&R.prefix&&(H=R.iconName,v=R.prefix)}if(H&&!V&&(!a||a.getAttribute(v1)!==v||a.getAttribute(S1)!==D)){c.setAttribute(l,D),a&&c.removeChild(a);let R=h6(),{extra:r2}=R;r2.attributes[f1]=e,g1(H,v).then(f2=>{let $4=D1(S(d({},R),{icons:{main:f2,mask:_1()},prefix:v,iconName:D,extra:r2,watchable:!0})),Q2=b.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(Q2,c.firstChild):c.appendChild(Q2),Q2.outerHTML=$4.map(X4=>D2(X4)).join(`
`),c.removeAttribute(l),t()}).catch(n)}else t()}else t()})}function D6(c){return Promise.all([I3(c,"::before"),I3(c,"::after")])}function T6(c){return c.parentNode!==document.head&&!~b0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(f1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function B3(c){if(K)return new Promise((e,l)=>{let t=h2(c.querySelectorAll("*")).filter(T6).map(D6),n=T1.begin("searchPseudoElements");u4(),Promise.all(t).then(()=>{n(),b1(),e()}).catch(()=>{n(),b1(),l()})})}var P6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=B3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:l=b}=e;z.searchPseudoElements&&B3(l)}}},H3=!1,F6={mixout(){return{dom:{unwatch(){u4(),H3=!0}}}},hooks(){return{bootstrap(){_3(M1("mutationObserverCallbacks",{}))},noAuto(){L6()},watch(c){let{observeMutationsRoot:e}=c;H3?b1():_3(M1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},R3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,t)=>{let n=t.toLowerCase().split("-"),s=n[0],a=n.slice(1).join("-");if(s&&a==="h")return l.flipX=!0,l;if(s&&a==="v")return l.flipY=!0,l;if(a=parseFloat(a),isNaN(a))return l;switch(s){case"grow":l.size=l.size+a;break;case"shrink":l.size=l.size-a;break;case"left":l.x=l.x-a;break;case"right":l.x=l.x+a;break;case"up":l.y=l.y-a;break;case"down":l.y=l.y+a;break;case"rotate":l.rotate=l.rotate+a;break}return l},e)},I6={mixout(){return{parse:{transform:c=>R3(c)}}},hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-transform");return l&&(c.transform=R3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:l,transform:t,containerWidth:n,iconWidth:s}=e,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),m="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),p="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(i," ").concat(m," ").concat(p)},C={transform:"translate(".concat(s/2*-1," -256)")},M={outer:a,inner:u,path:C};return{tag:"g",attributes:d({},M.outer),children:[{tag:"g",attributes:d({},M.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:d(d({},l.icon.attributes),M.path)}]}]}}}},o1={x:0,y:0,width:"100%",height:"100%"};function O3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function B6(c){return c.tag==="g"?c.children:[c]}var H6={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-mask"),t=l?Y2(l.split(" ").map(n=>n.trim())):_1();return t.prefix||(t.prefix=e2()),c.mask=t,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:l,attributes:t,main:n,mask:s,maskId:a,transform:i}=e,{width:m,icon:p}=n,{width:u,icon:C}=s,M=F0({transform:i,containerWidth:u,iconWidth:m}),v={tag:"rect",attributes:S(d({},o1),{fill:"white"})},I=p.children?{children:p.children.map(O3)}:{},V={tag:"g",attributes:d({},M.inner),children:[O3(d({tag:p.tag,attributes:d(d({},p.attributes),M.path)},I))]},_={tag:"g",attributes:d({},M.outer),children:[V]},H="mask-".concat(a||A2()),D="clip-".concat(a||A2()),R={tag:"mask",attributes:S(d({},o1),{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,_]},r2={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:B6(C)},R]};return l.push(r2,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(H,")")},o1)}),{children:l,attributes:t}}}},R6={provides(c){let e=!1;c2.matchMedia&&(e=c2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:S(d({},t),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let s=S(d({},n),{attributeName:"opacity"}),a={tag:"circle",attributes:S(d({},t),{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:S(d({},n),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(d({},s),{values:"1;0;1;1;0;1;"})}),l.push(a),l.push({tag:"path",attributes:S(d({},t),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:S(d({},s),{values:"1;0;0;0;0;1;"})}]}),e||l.push({tag:"path",attributes:S(d({},t),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(d({},s),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},O6={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-symbol"),t=l===null?!1:l===""?!0:l;return c.symbol=t,c}}}},V6=[H0,y6,v6,S6,w6,P6,F6,I6,H6,R6,O6];J0(V6,{mixoutsTo:F});var T8=F.noAuto,C4=F.config,P8=F.library,h4=F.dom,g4=F.parse,F8=F.findIconDefinition,I8=F.toHtml,x4=F.icon,B8=F.layer,U6=F.text,q6=F.counter;var j6=["*"],W6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},G6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},$6=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(l=>e[l]?l:null).filter(l=>l)},F1=new WeakSet,b4="fa-auto-css";function X6(c,e){if(!e.autoAddCss||F1.has(c))return;if(c.getElementById(b4)!=null){e.autoAddCss=!1,F1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",b4),l.innerHTML=h4.css();let t=c.head.childNodes,n=null;for(let s=t.length-1;s>-1;s--){let a=t[s],i=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}c.head.insertBefore(l,n),e.autoAddCss=!1,F1.add(c)}var Y6=c=>c.prefix!==void 0&&c.iconName!==void 0,K6=(c,e)=>Y6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},Q6=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(t){C4.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),J6=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let s of n.icon[2])typeof s=="string"&&(this.definitions[n.prefix][s]=n)}}addIconPacks(...t){for(let n of t){let s=Object.keys(n).map(a=>n[a]);this.addIcons(...s)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),Z6=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=B2({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[m2]});let c=e;return c})(),c8=(()=>{let e=class e{constructor(t,n){this.renderer=t,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}};e.\u0275fac=function(n){return new(n||e)(w(q1),w(V1))},e.\u0275cmp=h({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[m2,g],ngContentSelectors:j6,decls:1,vars:0,template:function(n,s){n&1&&(K1(),Q1(0))},encapsulation:2});let c=e;return c})(),N4=(()=>{let e=class e{constructor(t,n,s,a,i){this.sanitizer=t,this.config=n,this.iconLibrary=s,this.stackItem=a,this.document=F2(e3),i!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){G6();return}if(t){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let s=this.buildParams();X6(this.document,this.config);let a=x4(n,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(t){let n=K6(t,this.config.defaultPrefix);if("icon"in n)return n;let s=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return s??(W6(n),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?g4.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:$6(t),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};e.\u0275fac=function(n){return new(n||e)(w(r3),w(Q6),w(J6),w(Z6,8),w(c8,8))},e.\u0275cmp=h({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,s){n&2&&(Y1("innerHTML",s.renderedIconHTML,U1),H2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[m2,g],decls:0,vars:0,template:function(n,s){},encapsulation:2});let c=e;return c})();var y4=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=I2({type:e}),e.\u0275inj=P2({});let c=e;return c})();var v4={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]};var S4={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};function l8(c,e){if(c&1){let l=b2();o(0,"a",12),O("keyup.enter",function(){W(l),y(3);let n=B(1);return G(n.previous())})("click",function(){W(l),y(3);let n=B(1);return G(n.previous())}),f(1),o(2,"span",13),f(3),r()()}if(c&2){let l=y(3);L(),t2(" ",l.previousLabel," "),L(2),x(l.screenReaderPageLabel)}}function t8(c,e){if(c&1&&(o(0,"span",14),f(1),o(2,"span",13),f(3),r()()),c&2){let l=y(3);L(),t2(" ",l.previousLabel," "),L(2),x(l.screenReaderPageLabel)}}function n8(c,e){if(c&1&&(o(0,"li",9),$(1,l8,4,2,"a",10)(2,t8,4,2,"span",11),r()),c&2){y(2);let l=B(1);d2("disabled",l.isFirstPage()),L(),E("ngIf",1<l.getCurrent()),L(),E("ngIf",l.isFirstPage())}}function s8(c,e){if(c&1){let l=b2();o(0,"a",12),O("keyup.enter",function(){W(l);let n=y().$implicit;y(2);let s=B(1);return G(s.setCurrent(n.value))})("click",function(){W(l);let n=y().$implicit;y(2);let s=B(1);return G(s.setCurrent(n.value))}),o(1,"span",13),f(2),r(),o(3,"span"),f(4),N2(5,"number"),r()()}if(c&2){let l=y().$implicit,t=y(2);L(2),t2("",t.screenReaderPageLabel," "),L(2),x(l.label==="..."?l.label:y2(5,2,l.label,""))}}function a8(c,e){if(c&1&&($1(0),o(1,"span",16)(2,"span",13),f(3),r(),o(4,"span"),f(5),N2(6,"number"),r()(),X1()),c&2){let l=y().$implicit,t=y(2);L(3),t2("",t.screenReaderCurrentLabel," "),L(2),x(l.label==="..."?l.label:y2(6,2,l.label,""))}}function i8(c,e){if(c&1&&(o(0,"li"),$(1,s8,6,5,"a",10)(2,a8,7,5,"ng-container",15),r()),c&2){let l=e.$implicit;y(2);let t=B(1);d2("current",t.getCurrent()===l.value)("ellipsis",l.label==="..."),L(),E("ngIf",t.getCurrent()!==l.value),L(),E("ngIf",t.getCurrent()===l.value)}}function o8(c,e){if(c&1){let l=b2();o(0,"a",12),O("keyup.enter",function(){W(l),y(3);let n=B(1);return G(n.next())})("click",function(){W(l),y(3);let n=B(1);return G(n.next())}),f(1),o(2,"span",13),f(3),r()()}if(c&2){let l=y(3);L(),t2(" ",l.nextLabel," "),L(2),x(l.screenReaderPageLabel)}}function r8(c,e){if(c&1&&(o(0,"span",14),f(1),o(2,"span",13),f(3),r()()),c&2){let l=y(3);L(),t2(" ",l.nextLabel," "),L(2),x(l.screenReaderPageLabel)}}function f8(c,e){if(c&1&&(o(0,"li",17),$(1,o8,4,2,"a",10)(2,r8,4,2,"span",11),r()),c&2){y(2);let l=B(1);d2("disabled",l.isLastPage()),L(),E("ngIf",!l.isLastPage()),L(),E("ngIf",l.isLastPage())}}function m8(c,e){if(c&1&&(o(0,"ul",4),$(1,n8,3,4,"li",5),o(2,"li",6),f(3),r(),$(4,i8,3,6,"li",7)(5,f8,3,4,"li",8),r()),c&2){let l=y(),t=B(1);d2("responsive",l.responsive),L(),E("ngIf",l.directionLinks),L(2),J1(" ",t.getCurrent()," / ",t.getLastPage()," "),L(),E("ngForOf",t.pages)("ngForTrackBy",l.trackByIndex),L(),E("ngIf",l.directionLinks)}}var T2=class{constructor(){this.change=new p2,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(e){return e.id==null&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)}updateInstance(e){let l=!1;for(let t in this.instances[e.id])e[t]!==this.instances[e.id][t]&&(this.instances[e.id][t]=e[t],l=!0);return l}getCurrentPage(e){return this.instances[e]?this.instances[e].currentPage:1}setCurrentPage(e,l){if(this.instances[e]){let t=this.instances[e],n=Math.ceil(t.totalItems/t.itemsPerPage);l<=n&&1<=l&&(this.instances[e].currentPage=l,this.change.emit(e))}}setTotalItems(e,l){this.instances[e]&&0<=l&&(this.instances[e].totalItems=l,this.change.emit(e))}setItemsPerPage(e,l){this.instances[e]&&(this.instances[e].itemsPerPage=l,this.change.emit(e))}getInstance(e=this.DEFAULT_ID){return this.instances[e]?this.clone(this.instances[e]):{}}clone(e){var l={};for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);return l}},p8=Number.MAX_SAFE_INTEGER,w4=(()=>{class c{constructor(l){this.service=l,this.state={}}transform(l,t){if(!(l instanceof Array)){let C=t.id||this.service.defaultId();return this.state[C]?this.state[C].slice:l}let n=t.totalItems&&t.totalItems!==l.length,s=this.createInstance(l,t),a=s.id,i,m,p=s.itemsPerPage,u=this.service.register(s);if(!n&&l instanceof Array){if(p=+p||p8,i=(s.currentPage-1)*p,m=i+p,this.stateIsIdentical(a,l,i,m))return this.state[a].slice;{let M=l.slice(i,m);return this.saveState(a,l,M,i,m),this.service.change.emit(a),M}}else return u&&this.service.change.emit(a),this.saveState(a,l,l,i,m),l}createInstance(l,t){return this.checkConfig(t),{id:t.id!=null?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||l.length}}checkConfig(l){let n=["itemsPerPage","currentPage"].filter(s=>!(s in l));if(0<n.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${n.join(", ")}`)}saveState(l,t,n,s,a){this.state[l]={collection:t,size:t.length,slice:n,start:s,end:a}}stateIsIdentical(l,t,n,s){let a=this.state[l];return!a||!(a.size===t.length&&a.start===n&&a.end===s)?!1:a.slice.every((m,p)=>m===t[n+p])}}return c.\u0275fac=function(l){return new(l||c)(w(T2,16))},c.\u0275pipe=O1({name:"paginate",type:c,pure:!1}),c})();var d8=(()=>{class c{constructor(l,t){this.service=l,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new p2,this.pageBoundsCorrection=new p2,this.pages=[],this.changeSub=this.service.change.subscribe(n=>{this.id===n&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(l){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(l){this.pageChange.emit(l)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let l=this.service.getInstance(this.id);return l.totalItems<1?1:Math.ceil(l.totalItems/l.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let l=this.service.getInstance(this.id),t=this.outOfBoundCorrection(l);t!==l.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(t),this.pages=this.createPageArray(l.currentPage,l.itemsPerPage,l.totalItems,this.maxSize)}):this.pages=this.createPageArray(l.currentPage,l.itemsPerPage,l.totalItems,this.maxSize)}outOfBoundCorrection(l){let t=Math.ceil(l.totalItems/l.itemsPerPage);return t<l.currentPage&&0<t?t:l.currentPage<1?1:l.currentPage}createPageArray(l,t,n,s){s=+s;let a=[],i=Math.max(Math.ceil(n/t),1),m=Math.ceil(s/2),p=l<=m,u=i-m<l,C=!p&&!u,M=s<i,v=1;for(;v<=i&&v<=s;){let I,V=this.calculatePageNumber(v,l,s,i),_=v===2&&(C||u),H=v===s-1&&(C||p);M&&(_||H)?I="...":I=V,a.push({label:I,value:V}),v++}return a}calculatePageNumber(l,t,n,s){let a=Math.ceil(n/2);return l===n?s:l===1?l:n<s?s-a<t?s-n+l:a<t?t-a+l:l:l}}return c.\u0275fac=function(l){return new(l||c)(w(T2),w(c3))},c.\u0275dir=B2({type:c,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[m2]}),c})();function I1(c){return!!c&&c!=="false"}var k4=(()=>{class c{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new p2,this.pageBoundsCorrection=new p2,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(l){this._directionLinks=I1(l)}get autoHide(){return this._autoHide}set autoHide(l){this._autoHide=I1(l)}get responsive(){return this._responsive}set responsive(l){this._responsive=I1(l)}trackByIndex(l){return l}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=h({type:c,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[["p","paginationApi"],[3,"pageChange","pageBoundsCorrection","id","maxSize"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(l,t){if(l&1){let n=b2();o(0,"pagination-template",1,0),O("pageChange",function(a){return W(n),G(t.pageChange.emit(a))})("pageBoundsCorrection",function(a){return W(n),G(t.pageBoundsCorrection.emit(a))}),o(2,"nav",2),$(3,m8,6,8,"ul",3),r()()}if(l&2){let n=B(1);E("id",t.id)("maxSize",t.maxSize),L(2),H2("aria-label",t.screenReaderPaginationLabel),L(),E("ngIf",!(t.autoHide&&n.pages.length<=1))}},dependencies:[d8,n3,t3,s3],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),c})(),E4=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=I2({type:c}),c.\u0275inj=P2({providers:[T2],imports:[[z2]]}),c})();var A4=(c,e)=>e.id,L8=c=>({itemsPerPage:3,currentPage:c}),u8=c=>["/userdetails",c];function M8(c,e){if(c&1&&(o(0,"tr")(1,"td"),f(2),r(),o(3,"td"),f(4),r(),o(5,"td"),f(6),r(),o(7,"td"),f(8),r(),o(9,"td"),f(10),r(),o(11,"td"),k(12,"fa-icon",7)(13,"fa-icon",8),r()()),c&2){let l=e.$implicit,t=y();L(2),x(l.id),L(2),x(l.name),L(2),x(l.email),L(2),x(l.phone),L(2),x(l.address.city),L(2),E("icon",t.faUser),L(),E("icon",t.faEye)("routerLink",c1(8,u8,l.id))}}function C8(c,e){if(c&1&&(o(0,"div",4)(1,"div",9),k(2,"img",10),o(3,"div",11)(4,"h5",12),f(5),r(),o(6,"p",13),f(7),r(),o(8,"p",13),f(9),r(),o(10,"p",13),f(11),r(),o(12,"p",13),f(13),r()()()()),c&2){let l=e.$implicit;L(5),x(l.name),L(2),x(l.address.city),L(2),x(l.phone),L(2),x(l.email),L(2),x(l.id)}}var _4=(()=>{let e=class e{constructor(){this.users=t1,this.faUser=v4,this.faEye=S4,console.log(l1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-user-list"]],standalone:!0,features:[g],decls:28,vars:5,consts:[[1,"text-center"],[1,"table","table-bordered","table-striped"],[1,"container"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-4","offset-4"],[3,"pageChange"],[1,"mx-3",3,"icon"],[1,"mx-3",3,"icon","routerLink"],[1,"card","text-center"],["src","https://attic.sh/ul4khwf22vvfdnk27l1qa7tuv03g","alt","Card image cap","height","200",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(n,s){n&1&&(o(0,"h3",0),f(1,"User List"),r(),o(2,"table",1)(3,"thead")(4,"tr")(5,"th"),f(6,"User Id"),r(),o(7,"th"),f(8,"Name"),r(),o(9,"th"),f(10,"Email"),r(),o(11,"th"),f(12,"Phone"),r(),o(13,"th"),f(14,"City"),r(),o(15,"th"),f(16,"Profile Photo"),r()()(),o(17,"tbody"),J2(18,M8,14,10,"tr",null,A4),r()(),o(20,"div",2)(21,"div",3),J2(22,C8,14,5,"div",4,A4),N2(24,"paginate"),r(),o(25,"div",3)(26,"div",5)(27,"pagination-controls",6),O("pageChange",function(i){return s.p=i}),r()()()()),n&2&&(L(18),Z2(s.users),L(4),Z2(y2(24,0,s.users,c1(3,L8,s.p))))},dependencies:[y4,N4,E4,w4,k4,Q]});let c=e;return c})();var D4=(()=>{let e=class e{constructor(t,n){this.activatedRoute=t,this.httpClient=n}ngOnInit(){this.activatedRoute.data.subscribe(t=>{this.user=t.userInfo})}};e.\u0275fac=function(n){return new(n||e)(w(O2),w(R2))},e.\u0275cmp=h({type:e,selectors:[["app-user-details"]],standalone:!0,features:[g],decls:17,vars:5,consts:[[1,"text-center"],[1,"row"],[1,"col-sm-4","offset-4"],[1,"card","text-center"],["src","https://attic.sh/ul4khwf22vvfdnk27l1qa7tuv03g","alt","Card image cap","height","200px",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(n,s){n&1&&(o(0,"h2",0),f(1,"User Details"),r(),o(2,"div",1)(3,"div",2)(4,"div",3),k(5,"img",4),o(6,"div",5)(7,"h5",6),f(8),r(),o(9,"p",7),f(10),r(),o(11,"p",7),f(12),r(),o(13,"p",7),f(14),r(),o(15,"p",7),f(16),r()()()()()),n&2&&(L(8),x(s.user.name),L(2),x(s.user.address.city),L(2),x(s.user.phone),L(2),x(s.user.email),L(2),x(s.user.id))}});let c=e;return c})();var T4=(()=>{let e=class e{constructor(t){this.activatedRoute=t}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.prod=t,console.log(t)})}};e.\u0275fac=function(n){return new(n||e)(w(O2))},e.\u0275cmp=h({type:e,selectors:[["app-product-details"]],standalone:!0,features:[g],decls:10,vars:3,consts:[[1,"text-center"],[1,"col-sm-3","0ffset-3","card","text-center"],[1,"card-body"],[1,"card-text"]],template:function(n,s){n&1&&(o(0,"h2",0),f(1,"Product Details"),r(),o(2,"div",1)(3,"div",2)(4,"p",3),f(5),r(),o(6,"p",3),f(7),r(),o(8,"p",3),f(9),r()()()),n&2&&(L(5),x(s.prod.id),L(2),x(s.prod.title),L(2),x(s.prod.price))}});let c=e;return c})();var P4=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-permanent-jobs"]],standalone:!0,features:[g],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),f(1,"permanent-jobs works!"),r())}});let c=e;return c})();var F4=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-contract-jobs"]],standalone:!0,features:[g],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),f(1,"contract-jobs works!"),r())}});let c=e;return c})();var I4=(c,e)=>!0;var B4=(()=>{let e=class e{constructor(t){this.httpClient=t,this.users_api="https://jsonplaceholder.typicode.com/users"}getAllUsers(){return this.httpClient.get(this.users_api)}getUserById(t){return this.httpClient.get(`${this.users_api}/${t}`)}};e.\u0275fac=function(n){return new(n||e)(R1(R2))},e.\u0275prov=x2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();var H4=(c,e)=>{let l=+c.params.id;return F2(B4).getUserById(l)};var R4=[{path:"",component:e1},{path:"home",component:e1},{path:"aboutus",component:z3},{path:"careers",component:L3,children:[{path:"",redirectTo:"permanent",pathMatch:"full"},{path:"permanent",component:P4},{path:"contract",component:F4}]},{path:"users",component:_4},{path:"userdetails/:id",component:D4,resolve:{userInfo:H4}},{path:"products",canActivate:[I4],loadComponent:()=>import("./chunk-42LBYMZ4.js").then(c=>c.ProductListComponent)},{path:"productdetails",component:T4},{path:"**",component:u3}];var O4={providers:[Z1({eventCoalescing:!0}),p3(R4),a3(i3([]))]};var V4=(()=>{let e=class e{constructor(){this.isAdmin=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-navbar"]],standalone:!0,features:[g],decls:25,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","home","routerLinkActive","active",1,"nav-link"],["routerLink","aboutus","routerLinkActive","active",1,"nav-link"],["routerLink","careers","routerLinkActive","active",1,"nav-link"],["routerLink","users","routerLinkActive","active",1,"nav-link"],["routerLink","products","routerLinkActive","active",1,"nav-link"],[1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"]],template:function(n,s){n&1&&(o(0,"nav",0)(1,"div",1)(2,"button",2),k(3,"span",3),r(),o(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),f(8,"Home"),r()(),o(9,"li",6)(10,"a",8),f(11,"About-us"),r()(),o(12,"li",6)(13,"a",9),f(14,"Careers"),r()(),o(15,"li",6)(16,"a",10),f(17,"UserList"),r()(),o(18,"li",6)(19,"a",11),f(20,"Products"),r()()(),o(21,"form",12),k(22,"input",13),o(23,"button",14),f(24,"Search"),r()()()()())},dependencies:[Q,m3,z2],styles:[".active[_ngcontent-%COMP%]{background-color:#0ff}"]});let c=e;return c})();var U4=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-footer"]],standalone:!0,features:[g],decls:20,vars:0,consts:[[1,"container-fluid"],[1,"py-3","my-4","bg-dark","text-white"],[1,"nav","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#",1,"nav-link","px-2"],[1,"text-center","text-muted"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"footer",1)(2,"ul",2)(3,"li",3)(4,"a",4),f(5,"Home"),r()(),o(6,"li",3)(7,"a",4),f(8,"Features"),r()(),o(9,"li",3)(10,"a",4),f(11,"Pricing"),r()(),o(12,"li",3)(13,"a",4),f(14,"FAQs"),r()(),o(15,"li",3)(16,"a",4),f(17,"About"),r()()(),o(18,"p",5),f(19,"\xA9 2021 Company, Inc"),r()()())}});let c=e;return c})();var x8=Q4(q4());var W4=(()=>{let e=class e{constructor(){this.flag=!0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-body"]],standalone:!0,features:[g],decls:4,vars:0,consts:[[1,"container"],[1,"row"],[1,"body","border","p-2","m-1"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),k(3,"router-outlet"),r()()())},dependencies:[V2,z2],styles:[".body[_ngcontent-%COMP%]{min-height:400px}"]});let c=e;return c})();var G4=(()=>{let e=class e{constructor(){this.title="angular_project_august_2024"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:3,vars:0,template:function(n,s){n&1&&k(0,"app-navbar")(1,"app-body")(2,"app-footer")},dependencies:[V4,U4,W4]});let c=e;return c})();o3(G4,O4).catch(c=>console.error(c));
