!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}function n(t){return t&&t.Math==Math&&t}function f(t){try{return!!t()}catch(t){return!0}}function o(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}function p(t){return m.call(t).slice(8,-1)}function u(t){if(null==t)throw TypeError("Can't call method on "+t);return t}function s(t){return w(u(t))}function i(t){return"object"==typeof t?null!==t:"function"==typeof t}function a(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}function l(t,e){return b.call(t,e)}function j(t){if(!i(t))throw TypeError(String(t)+" is not an object");return t}function d(e,n){try{O(v,e,n)}catch(t){v[e]=n}return n}var v=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),r=!f(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),c={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,g={f:h&&!c.call({1:2},1)?function(t){var e=h(this,t);return!!e&&e.enumerable}:c},m={}.toString,y="".split,w=f(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==p(t)?y.call(t,""):Object(t)}:Object,b={}.hasOwnProperty,x=v.document,S=i(x)&&i(x.createElement),C=!r&&!f(function(){return 7!=Object.defineProperty((t="div",S?x.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),k=Object.getOwnPropertyDescriptor,E={f:r?k:function(t,e){if(t=s(t),e=a(e,!0),C)try{return k(t,e)}catch(t){}if(l(t,e))return o(!g.f.call(t,e),t[e])}},A=Object.defineProperty,P={f:r?A:function(t,e,n){if(j(t),e=a(e,!0),j(n),C)try{return A(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},O=r?function(t,e,n){return P.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t},z="__core-js_shared__",R=v[z]||d(z,{}),L=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return L.call(t)});function N(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+$).toString(36)}var F,I,T,M,U=R.inspectSource,q=v.WeakMap,H="function"==typeof q&&/native code/.test(U(q)),G=e(function(t){(t.exports=function(t,e){return R[t]||(R[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.5.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),W=0,$=Math.random(),Q=G("keys"),V={},B=v.WeakMap;if(H){var D=new B,J=D.get,K=D.has,Y=D.set;F=function(t,e){return Y.call(D,t,e),e},I=function(t){return J.call(D,t)||{}},T=function(t){return K.call(D,t)}}else{var X=Q[M="state"]||(Q[M]=N(M));V[X]=!0,F=function(t,e){return O(t,X,e),e},I=function(t){return l(t,X)?t[X]:{}},T=function(t){return l(t,X)}}function Z(t){return"function"==typeof t?t:void 0}function tt(t,e){return arguments.length<2?Z(ht[t])||Z(v[t]):ht[t]&&ht[t][e]||v[t]&&v[t][e]}function et(t){return isNaN(t=+t)?0:(0<t?mt:gt)(t)}function nt(t){return 0<t?yt(et(t),9007199254740991):0}function rt(l){return function(t,e,n){var r,o,i,a=s(t),c=nt(a.length),u=(r=c,(o=et(n))<0?bt(o+r,0):wt(o,r));if(l&&e!=e){for(;u<c;)if((i=a[u++])!=i)return!0}else for(;u<c;u++)if((l||u in a)&&a[u]===e)return l||u||0;return!l&&-1}}function ot(t,e){for(var n=kt(e),r=P.f,o=E.f,i=0;i<n.length;i++){var a=n[i];l(t,a)||r(t,a,o(e,a))}}function it(t,e){var n=At[Et(t)];return n==Ot||n!=Pt&&("function"==typeof e?f(e):!!e)}function at(t,e){var n,r,o,i,a,c=t.target,u=t.global,l=t.stat;if(n=u?v:l?v[c]||d(c,{}):(v[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Rt(n,r))&&a.value:n[r],!zt(u?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ot(i,o)}(t.sham||o&&o.sham)&&O(i,"sham",!0),vt(n,r,i,t)}}function ct(t){return Object(u(t))}function ut(t,e,n){var r=a(e);r in t?P.f(t,r,o(0,n)):t[r]=n}function lt(t){return l(It,t)||(Nt&&l(Tt,t)?It[t]=Tt[t]:It[t]=Mt("Symbol."+t)),It[t]}function st(t,e){var n;return Lt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Lt(n.prototype)?i(n)&&null===(n=n[Ut])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}var ft,dt,pt={set:F,get:I,has:T,enforce:function(t){return T(t)?I(t):F(t,{})},getterFor:function(n){return function(t){var e;if(!i(t)||(e=I(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}},vt=e(function(t){var e=pt.get,c=pt.enforce,u=String(String).split("String");(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||l(n,"name")||O(n,"name",e),c(n).source=u.join("string"==typeof e?e:"")),t!==v?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=n:O(t,e,n)):i?t[e]=n:d(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||U(this)})}),ht=v,gt=Math.ceil,mt=Math.floor,yt=Math.min,bt=Math.max,wt=Math.min,xt={includes:rt(!0),indexOf:rt(!1)}.indexOf,_t=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),St={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=s(t),o=0,i=[];for(n in r)!l(V,n)&&l(r,n)&&i.push(n);for(;e.length>o;)l(r,n=e[o++])&&(~xt(i,n)||i.push(n));return i}(t,_t)}},Ct={f:Object.getOwnPropertySymbols},kt=tt("Reflect","ownKeys")||function(t){var e=St.f(j(t)),n=Ct.f;return n?e.concat(n(t)):e},jt=/#|\.prototype\./,Et=it.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},At=it.data={},Pt=it.NATIVE="N",Ot=it.POLYFILL="P",zt=it,Rt=E.f,Lt=Array.isArray||function(t){return"Array"==p(t)},Nt=!!Object.getOwnPropertySymbols&&!f(function(){return!String(Symbol())}),Ft=Nt&&!Symbol.sham&&"symbol"==typeof Symbol(),It=G("wks"),Tt=v.Symbol,Mt=Ft?Tt:N,Ut=lt("species"),qt=tt("navigator","userAgent")||"",Ht=v.process,Gt=Ht&&Ht.versions,Wt=Gt&&Gt.v8;Wt?dt=(ft=Wt.split("."))[0]+ft[1]:qt&&(!(ft=qt.match(/Edge\/(\d+)/))||74<=ft[1])&&(ft=qt.match(/Chrome\/(\d+)/))&&(dt=ft[1]);function $t(e){return 51<=Vt||!f(function(){var t=[];return(t.constructor={})[Bt]=function(){return{foo:1}},1!==t[e](Boolean).foo})}function Qt(t){if(!i(t))return!1;var e=t[Dt];return void 0!==e?!!e:Lt(t)}var Vt=dt&&+dt,Bt=lt("species"),Dt=lt("isConcatSpreadable"),Jt=9007199254740991,Kt="Maximum allowed index exceeded",Yt=51<=Vt||!f(function(){var t=[];return t[Dt]=!1,t.concat()[0]!==t}),Xt=$t("concat");at({target:"Array",proto:!0,forced:!Yt||!Xt},{concat:function(t){var e,n,r,o,i,a=ct(this),c=st(a,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if(Qt(i=-1===e?a:arguments[e])){if(o=nt(i.length),Jt<u+o)throw TypeError(Kt);for(n=0;n<o;n++,u++)n in i&&ut(c,u,i[n])}else{if(Jt<=u)throw TypeError(Kt);ut(c,u++,i)}return c.length=u,c}});var Zt,te,ee=[].join,ne=w!=Object,re=(Zt=",",!(te=[]["join"])||!f(function(){te.call(null,Zt||function(){throw 1},1)}));at({target:"Array",proto:!0,forced:ne||re},{join:function(t){return ee.call(s(this),void 0===t?",":t)}});function oe(r,o,t){if(!function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}function ie(p){var v=1==p,h=2==p,g=3==p,m=4==p,y=6==p,b=5==p||y;return function(t,e,n,r){for(var o,i,a=ct(t),c=w(a),u=oe(e,n,3),l=nt(c.length),s=0,f=r||st,d=v?f(t,l):h?f(t,0):void 0;s<l;s++)if((b||s in c)&&(i=u(o=c[s],s,a),p))if(v)d[s]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return s;case 2:ae.call(d,o)}else if(m)return!1;return y?-1:g||m?m:d}}var ae=[].push,ce={forEach:ie(0),map:ie(1),filter:ie(2),some:ie(3),every:ie(4),find:ie(5),findIndex:ie(6)}.map,ue=$t("map"),le=ue&&!f(function(){[].map.call({length:-1,0:1},function(t){throw t})});at({target:"Array",proto:!0,forced:!ue||!le},{map:function(t,e){return ce(this,t,1<arguments.length?e:void 0)}});var se="".repeat||function(t){var e=String(u(this)),n="",r=et(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},fe=1..toFixed,de=Math.floor,pe=function(t,e,n){return 0===e?n:e%2==1?pe(t,e-1,n*t):pe(t*t,e/2,n)};at({target:"Number",proto:!0,forced:fe&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f(function(){fe.call({})})},{toFixed:function(t){function e(t,e){for(var n=-1,r=e;++n<6;)r+=t*s[n],s[n]=r%1e7,r=de(r/1e7)}function n(t){for(var e=6,n=0;0<=--e;)n+=s[e],s[e]=de(n/t),n=n%t*1e7}function r(){for(var t=6,e="";0<=--t;)if(""!==e||0===t||0!==s[t]){var n=String(s[t]);e=""===e?n:e+se.call("0",7-n.length)+n}return e}var o,i,a,c,u=function(t){if("number"!=typeof t&&"Number"!=p(t))throw TypeError("Incorrect invocation");return+t}(this),l=et(t),s=[0,0,0,0,0,0],f="",d="0";if(l<0||20<l)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||1e21<=u)return String(u);if(u<0&&(f="-",u=-u),1e-21<u)if(i=(o=function(t){for(var e=0,n=t;4096<=n;)e+=12,n/=4096;for(;2<=n;)e+=1,n/=2;return e}(u*pe(2,69,1))-69)<0?u*pe(2,-o,1):u/pe(2,o,1),i*=4503599627370496,0<(o=52-o)){for(e(0,i),a=l;7<=a;)e(1e7,0),a-=7;for(e(pe(10,a,1),0),a=o-1;23<=a;)n(1<<23),a-=23;n(1<<a),e(1,1),n(2),d=r()}else e(0,i),e(1<<-o,0),d=r()+se.call("0",l);return d=0<l?f+((c=d.length)<=l?"0."+se.call("0",l-c)+d:d.slice(0,c-l)+"."+d.slice(c-l)):f+d}});var ve={};ve[lt("toStringTag")]="z";var he="[object z]"===String(ve),ge=lt("toStringTag"),me="Arguments"==p(function(){return arguments}()),ye=he?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ge))?n:me?p(e):"Object"==(r=p(e))&&"function"==typeof e.callee?"Arguments":r},be=he?{}.toString:function(){return"[object "+ye(this)+"]"};he||vt(Object.prototype,"toString",be,{unsafe:!0});function we(){var t=j(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}var xe="toString",_e=RegExp.prototype,Se=_e[xe],Ce=f(function(){return"/a/b"!=Se.call({source:"a",flags:"b"})}),ke=Se.name!=xe;(Ce||ke)&&vt(RegExp.prototype,xe,function(){var t=j(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in _e)?we.call(t):n)},{unsafe:!0});var je,Ee,Ae=RegExp.prototype.exec,Pe=String.prototype.replace,Oe=Ae,ze=(je=/a/,Ee=/b*/g,Ae.call(je,"a"),Ae.call(Ee,"a"),0!==je.lastIndex||0!==Ee.lastIndex),Re=void 0!==/()??/.exec("")[1];(ze||Re)&&(Oe=function(t){var e,n,r,o,i=this;return Re&&(n=new RegExp("^"+i.source+"$(?!\\s)",we.call(i))),ze&&(e=i.lastIndex),r=Ae.call(i,t),ze&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Re&&r&&1<r.length&&Pe.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});function Le(c){return function(t,e){var n,r,o=String(u(t)),i=et(e),a=o.length;return i<0||a<=i?c?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===a||(r=o.charCodeAt(i+1))<56320||57343<r?c?o.charAt(i):n:c?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}}function Ne(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==p(t))throw TypeError("RegExp#exec called on incompatible receiver");return Fe.call(t,e)}var Fe=Oe,Ie=lt("species"),Te=!f(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),Me=!f(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Ue={codeAt:Le(!1),charAt:Le(!0)}.charAt,qe=Math.max,He=Math.min,Ge=Math.floor,We=/\$([$&'`]|\d\d?|<[^>]*>)/g,$e=/\$([$&'`]|\d\d?)/g;!function(n,t,e,r){var o=lt(n),i=!f(function(){var t={};return t[o]=function(){return 7},7!=""[n](t)}),a=i&&!f(function(){var t=!1,e=/a/;return"split"===n&&((e={constructor:{}}).constructor[Ie]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return t=!0,null},e[o](""),!t});if(!i||!a||"replace"===n&&!Te||"split"===n&&!Me){var c=/./[o],u=e(o,""[n],function(t,e,n,r,o){return e.exec===Fe?i&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),l=u[0],s=u[1];vt(String.prototype,n,l),vt(RegExp.prototype,o,2==t?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)}),r&&O(RegExp.prototype[o],"sham",!0)}}("replace",2,function(o,S,C){return[function(t,e){var n=u(this),r=null==t?void 0:t[o];return void 0!==r?r.call(t,n,e):S.call(String(n),t,e)},function(t,e){var n=C(S,t,this,e);if(n.done)return n.value;var r=j(t),o=String(this),i="function"==typeof e;i||(e=String(e));var a=r.global;if(a){var c=r.unicode;r.lastIndex=0}for(var u,l,s=[];;){var f=Ne(r,o);if(null===f)break;if(s.push(f),!a)break;""===String(f[0])&&(r.lastIndex=(u=o,(l=nt(r.lastIndex))+(c?Ue(u,l).length:1)))}for(var d,p="",v=0,h=0;h<s.length;h++){f=s[h];for(var g=String(f[0]),m=qe(He(et(f.index),o.length),0),y=[],b=1;b<f.length;b++)y.push(void 0===(d=f[b])?d:String(d));var w=f.groups;if(i){var x=[g].concat(y,m,o);void 0!==w&&x.push(w);var _=String(e.apply(void 0,x))}else _=k(g,o,m,y,w,e);v<=m&&(p+=o.slice(v,m)+_,v=m+g.length)}return p+o.slice(v)}];function k(i,a,c,u,l,t){var s=c+i.length,f=u.length,e=$e;return void 0!==l&&(l=ct(l),e=We),S.call(t,e,function(t,e){var n;switch(e.charAt(0)){case"$":return"$";case"&":return i;case"`":return a.slice(0,c);case"'":return a.slice(s);case"<":n=l[e.slice(1,-1)];break;default:var r=+e;if(0==r)return t;if(f<r){var o=Ge(r/10);return 0===o?t:o<=f?void 0===u[o-1]?e.charAt(1):u[o-1]+e.charAt(1):t}n=u[r-1]}return void 0===n?"":n})}});var Qe,Ve=/"/g;function Be(t){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}at({target:"String",proto:!0,forced:(Qe="fixed",f(function(){var t=""[Qe]('"');return t!==t.toLowerCase()||3<t.split('"').length}))},{fixed:function(){return t="tt",n=e="",r=String(u(this)),o="<"+t,""!==e&&(o+=" "+e+'="'+String(n).replace(Ve,"&quot;")+'"'),o+">"+r+"</"+t+">";var t,e,n,r,o}});function De(t,e){if(t instanceof NodeList)for(var n=0;n<t.length;n++)t[n].classList.add(e);else(t instanceof Node||t instanceof Element)&&t.classList.add(e)}function Je(t,e){var n=e.split(" ");if(t instanceof NodeList)for(var r=0;r<t.length;r++)for(var o=0;o<n.length;o++)t[r].classList.remove(n[o]);else if(t instanceof Node||t instanceof Element)for(var i=0;i<n.length;i++)t.classList.remove(n[i])}var Ke,Ye,Xe;function Ze(t,e){var n=1<arguments.length&&void 0!==e?e:"",r=document.querySelector("#"+t+"-css-style");r||((r=document.createElement("style")).setAttribute("id",t+"-css-style"),r.setAttribute("type","text/css"),document.querySelector("head").appendChild(r)),r.innerHTML=n}window.addEventListener("load",function(){document.addEventListener("header_builder_panel_changed",function(t){return"hfg_header_layout_partial"===t.detail.partial_id?(window.HFG.init(),console.log("Reinitialize HFG with sidebar."),!1):"nav-icon_partial"===t.detail.partial_id?(window.HFG.init(!0),console.log("Reinitialize HFG with skip."),!1):void 0}),document.addEventListener("customize_control_sidebar",function(t){"open"===t.detail&&window.HFG.toggleMenuSidebar(!0),"close"===t.detail&&window.HFG.toggleMenuSidebar(!1)}.bind(this)),document.addEventListener("customize_section_opened",function(t){"header_sidebar"===t.detail&&window.HFG.toggleMenuSidebar(!0)}.bind(this));var b={mobile:"max-width: 576px",tablet:"min-width: 576px",desktop:"min-width: 961px"};_.each(neveCustomizePreview,function(t,y){_.each(t,function(g,m){wp.customize(m,function(t){t.bind(function(e){var t="";switch(y){case"neve_background_control":if("color"===e.type){t+="body "+g.selector+"{background-image: none !important;}";var n="undefined"!==e.colorValue?e.colorValue:"inherit";return t+="body "+g.selector+"{background-color: "+n+" !important; }",t+=g.selector+":before{ content: none !important; }",Ze(m,t),!1}e.useFeatured&&neveCustomizePreview.currentFeaturedImage&&(e.imageUrl=neveCustomizePreview.currentFeaturedImage),t+=g.selector+"{",t+=e.imageUrl?'background-image: url("'+e.imageUrl+'") !important;':"background-image: none !important;",t+=!0===e.fixed?"background-attachment: fixed !important;":"background-attachment: initial !important;",t+="background-position:"+(100*e.focusPoint.x).toFixed(2)+"% "+(100*e.focusPoint.y).toFixed(2)+"% !important;",t+="background-size: cover !important;",document.querySelector(".header-menu-sidebar").classList.contains("dropdown")||(t+="position: absolute;"),t+='top: 0; bottom: 0; width: 100%; content:"";',t+="}";var r="undefined"!==e.overlayColorValue?e.overlayColorValue:"inherit";t+=g.selector+':before { content: "";position: absolute; top: 0; bottom: 0; width: 100%;background-color: '+r+" !important;opacity: "+e.overlayOpacity/100+"!important;}",t+=g.selector+"{ background-color: transparent !important; }",Ze(m,t);break;case"\\Neve\\Customizer\\Controls\\React\\Radio_Buttons":if(g.additional&&g.additional.is_for&&"row_skin"===g.additional.is_for){var o=document.querySelectorAll(g.selector);Je(o,"dark-mode light-mode"),De(o,e);break}var i=document.querySelectorAll(g.selector);_.each(i,function(t){Je(t.parentNode,"hfg-item-center hfg-item-right hfg-item-left"),De(t.parentNode,"hfg-item-"+e)});break;case"\\Neve\\Customizer\\Controls\\Radio_Image":break;case"\\Neve\\Customizer\\Controls\\Range":case"\\Neve\\Customizer\\Controls\\React\\Responsive_Range":var a=JSON.parse(e);0<a.mobile?t+="@media (max-width: 576px) { body "+g.selector+"{ "+g.additional.prop+":"+a.mobile+g.additional.unit+";}}":t+="@media (max-width: 576px) { body "+g.selector+"{ "+g.additional.prop+":unset;}}",0<a.tablet?t+="@media (min-width: 576px) { body "+g.selector+"{ "+g.additional.prop+":"+a.tablet+g.additional.unit+";}}":t+="@media (min-width: 576px) { body "+g.selector+"{ "+g.additional.prop+":unset;}}",0<a.desktop?t+="@media (min-width: 961px) { body "+g.selector+"{ "+g.additional.prop+":"+a.desktop+g.additional.unit+";}}":t+="@media (min-width: 961px) { body "+g.selector+"{ "+g.additional.prop+":unset;}}",Ze(m,t);break;case"\\Neve\\Customizer\\Controls\\React\\Spacing":for(var c in b){for(var u in t+="@media ("+b[c]+") { body "+g.selector+"{",e[c])""!==e[c][u]?t+=g.additional.prop+"-"+u+":"+e[c][u]+e[c+"-unit"]+";":t+=g.additional.prop+"-"+u+": unset;";t+="}}"}Ze(m,t);break;case"\\Neve\\Customizer\\Controls\\React\\Typography":for(var l in t+="html ".concat(g.selector,"{\n\t\t\t\t\t\t\t\t\t\ttext-transform: ").concat(e.textTransform,";\n\t\t\t\t\t\t\t\t\t\tfont-weight: ").concat(e.fontWeight,";\n\t\t\t\t\t\t\t\t\t}"),b)t+="@media (".concat(b[l],") { \n\t\t\t\t\t\t\t\t\t\t\thtml ").concat(g.selector," {\n\t\t\t\t\t\t\t\t\t\t\t\tfont-size:").concat(e.fontSize[l]).concat(e.fontSize.suffix[l],";\n\t\t\t\t\t\t\t\t\t\t\t\tletter-spacing:").concat(e.letterSpacing[l],"px;\n\t\t\t\t\t\t\t\t\t\t\t\tline-height:").concat(e.lineHeight[l],";\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}");Ze(m,t);break;case"\\Neve\\Customizer\\Controls\\React\\Button_Appearance":var s=e.background||"unset",f=e.text||"currentColor",d=e.text||"";t+="html ".concat(g.selector," {\n\t\t\t\t\t\t\t\t\t\tbackground-color: ").concat(s,";\n\t\t\t\t\t\t\t\t\t\tborder-radius: ").concat(e.borderRadius,"px;\n\t\t\t\t\t\t\t\t\t\tcolor: ").concat(f,";"),"outline"===e.type&&(t+="border: ".concat(e.borderWidth,"px solid ").concat(d,";")),"fill"===e.type&&(t+="border: none;"),t+="}",t+="html ".concat(g.selector," .icon-bar {\n\t\t\t\t\t\t\t\t\t\tbackground-color: ").concat(f,";\n\t\t\t\t\t\t\t\t\t}"),Ze(m,t);break;case"text":var p=document.querySelector(g.selector);if(""===e)return p.parentNode.removeChild(p),!1;if(null===p){var v=document.createElement(g.additional.html_tag);v.classList.add(g.additional.wrap_class),document.querySelector(g.additional.parent).prepend(v)}document.querySelector(g.selector).innerHTML=e;break;case"neve_range_control":"svg-icon-size"===g.additional.type&&(t+="html ".concat(g.selector," {\n\t\t\t\t\t\t\t\t\t\t\twidth: ").concat(e,"px;\n\t\t\t\t\t\t\t\t\t\t\theight: ").concat(e,"px;\n\t\t\t\t\t\t\t\t\t\t}"),Ze(m,t));break;case"\\Neve\\Customizer\\Controls\\React\\Color":var h=""===e?"unset":e;t+="html ".concat(g.selector," {\n\t\t\t\t\t\t\t\t\t\t").concat(g.additional.prop,": ").concat(h,";\n\t\t\t\t\t\t\t\t\t}"),Ze(m,t)}})})})}),wp.customize.preview.bind("font-selection",function(t){var e=neveCustomizePreview[t.type][t.controlId].selector,n=t.source,r=t.controlId+"_font_family",o=t.inherit?"inherit":'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';if(e=(e=e.split(",")).map(function(t){return"html "+t}).join(","),!1===t.value?Ze(t.controlId,e+"{font-family: "+o+";}"):Ze(t.controlId,e+"{font-family: "+t.value+" ;}"),"google"===n.toLowerCase()){var i=document.querySelector("#"+r),a="//fonts.googleapis.com/css?family="+t.value.replace(" ","+")+"%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800";if(null!==i)return i.setAttribute("href",a),!1;var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("id",r),c.setAttribute("href",a),c.setAttribute("type","text/css"),c.setAttribute("media","all"),document.querySelector("head").appendChild(c)}})}),(Ke=jQuery).neveCustomizeUtilities={setLiveCss:function(o,t){var i="",e=Ke("."+o.styleClass);if("object"!==Be(t))return Ke(o.selectors).css(o.cssProperty,t.toString()+o.propertyUnit),!1;Ke.each(t,function(t,e){var n;if("suffix"===t)return!0;var r=o.propertyUnit;switch("object"===Be(o.propertyUnit)&&(r=o.propertyUnit[t]),n=o.selectors+"{ "+o.cssProperty+":"+e+r+"}",t){default:case"mobile":i+=n;break;case"desktop":i+="@media(min-width: 960px) {"+n+"}";break;case"tablet":i+="@media (min-width: 576px){"+n+"}"}}),0<e.length?e.text(i):Ke("head").append('<style type="text/css" class="'+o.styleClass+'">'+i+"</style>")}},(Ye=jQuery).neveRangesPreview={init:function(){this.rangesPreview()},ranges:{neve_container_width:{selector:".container",cssProp:"max-width",unit:"px",styleClass:"container-width-css"}},rangesPreview:function(){_.each(this.ranges,function(r,t){wp.customize(t,function(t){t.bind(function(t){var e=JSON.parse(t);if(!e)return!0;"object"===Be(e.suffix)&&(r.unit=e.suffix);var n={selectors:r.selector,cssProperty:r.cssProp,propertyUnit:r.unit?r.unit:"",styleClass:r.styleClass};Ye.neveCustomizeUtilities.setLiveCss(n,e)})})})}},jQuery.neveRangesPreview.init(),(Xe=jQuery).neveLayoutPreview={init:function(){this.contentWidthsPreview(),this.containersLivePreview()},contentWidths:{neve_sitewide_content_width:{content:".neve-main > .container .col",sidebar:".nv-sidebar-wrap"},neve_blog_archive_content_width:{content:".archive-container .nv-index-posts",sidebar:".archive-container .nv-sidebar-wrap"},neve_single_post_content_width:{content:".single-post-container .nv-single-post-wrap",sidebar:".single-post-container .nv-sidebar-wrap"},neve_shop_archive_content_width:{content:".archive.woocommerce .shop-container .nv-shop.col",sidebar:".archive.woocommerce .shop-container .nv-sidebar-wrap"},neve_single_product_content_width:{content:".single-product .shop-container .nv-shop.col",sidebar:".single-product .shop-container .nv-sidebar-wrap"},neve_other_pages_content_width:{content:"body:not(.single):not(.archive):not(.blog) .neve-main > .container .col",sidebar:"body:not(.single):not(.archive):not(.blog) .nv-sidebar-wrap"}},contentWidthsPreview:function(){Xe.each(this.contentWidths,function(n,r){wp.customize(n,function(t){t.bind(function(t){var e=" @media (min-width: 961px) {\n\t\t\t\t\t\t\t".concat(r.content," { max-width: ").concat(t,"% !important; }\n\t\t\t\t\t\t\t").concat(r.sidebar," { max-width: ").concat(100-t,"% !important; }\n\t\t\t\t\t\t}");Ze(n+"-css",e)})})})},containersLayoutMap:{neve_default_container_style:".page:not(.woocommerce) .single-page-container",neve_blog_archive_container_style:".archive-container",neve_single_post_container_style:".single-post-container",neve_shop_archive_container_style:".woocommerce-page.post-type-archive .neve-main > div",neve_single_product_container_style:".single-product .neve-main > div"},containersLivePreview:function(){Xe.each(this.containersLayoutMap,function(t,e){e+=":not(.set-in-metabox)",wp.customize(t,function(t){t.bind(function(t){if("contained"===t)return Xe(e).removeClass("container-fluid").addClass("container"),!1;Xe(e).removeClass("container").addClass("container-fluid")})})})}},jQuery.neveLayoutPreview.init()}();
