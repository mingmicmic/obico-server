(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,b=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={octoprint_tunnel:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;o.push([6,"chunk-vendors"]),n()})({"052b":function(e,t,n){"use strict";var r=n("df60"),a=n.n(r);a.a},1807:function(e,t,n){"use strict";n("99af"),n("a15b");var r=n("0b49"),a=n.n(r),o=n("dd61"),i=n.n(o);t["a"]={printShotFeedback:function(e,t){return"/api/v1/printshotfeedbacks/".concat(e,"/?print_id=").concat(t)},print:function(e){return"/api/v1/prints/".concat(e,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(e){return"/api/v1/prints/".concat(e,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(e){return"/api/v1/printers/".concat(e,"/")},printerAction:function(e,t){return"/api/v1/printers/".concat(e).concat(t)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(e,t){return"/api/v1/gcodes/?page=".concat(e,"&page_size=").concat(t||24)},gcode:function(e){return"/api/v1/gcodes/".concat(e,"/")},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(e){return"/api/v1/sharedresources/?"+i()(a()(e),(function(e){return e.join("=")})).join("&")},sharedResource:function(e){return"/api/v1/sharedresources/".concat(e,"/")},printerDiscovery:function(){return"/api/v1/printer_discovery/"},printerControl:function(e){return"/printers/".concat(e,"/control/")},printerWebSocket:function(e){return"/ws/web/".concat(e,"/")},printerSharedWebSocket:function(e){return"/ws/share_token/web/".concat(e,"/")},printerWizard:function(e){return"/printers/wizard/?printerId=".concat(e)}}},"3c33":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n("90b9"),a=function(e,t){var n=Object(r["a"])()?localStorage.getItem(e):null,a=n||t;try{return JSON.parse(a)}catch(o){return a}},o=function(e,t){Object(r["a"])()&&localStorage.setItem(e,t)}},"4f95":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o}));var r=function(){return""!==JSON.parse(document.querySelector("#app-platform-json").text)["platform"]},a=function(){return JSON.parse(document.querySelector("#user-json").text)},o=function(){return JSON.parse(document.querySelector("#settings-json").text)}},6:function(e,t,n){e.exports=n("6368")},6368:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f357"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isPro?e._e():n("div",{staticClass:"floating-panel text-center pb-2"},[e._m(0),n("div",{class:e.usageClass},[e._v(e._s(e.usageMTD)+"/"+e._s(e.humanizedUsageCap))]),e.overage?n("div",[e._v("Your month-to-date tunneling usage is over the Free plan limit. "),n("a",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",href:"/ent_pub/pricing/"}},[e._v("Get Unlimited Tunneling")])]):e._e()]),n("div",[e.printerId?n("iframe",{staticClass:"tunnel-iframe",attrs:{src:e.iframeUrl()+"#temp"}}):e._e()])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-muted"},[e._v("Month-To-Date Usage/Free Limit("),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users"}},[e._v("?")]),e._v(")")])}],c=(n("fb6a"),n("bc3a")),u=n.n(c),s=n("6625"),l=n.n(s),p=n("49d5"),b=n.n(p),g=n("1807"),f=n("4f95"),d=n("90b9"),m={name:"OctoPrintTunnelPage",components:{},data:function(){return{bytesMTD:null,usageCap:null,isPro:!0,printerId:null}},computed:{usageClass:function(){return{"text-success":this.bytesMTD<.8*this.usageCap,"text-warning":this.bytesMTD>=.8*this.usageCap&&this.bytesMTD<this.usageCap,"text-danger":this.bytesMTD>=this.usageCap}},usageMTD:function(){return b()(this.bytesMTD)},humanizedUsageCap:function(){return b()(this.usageCap)},overage:function(){return this.bytesMTD>=this.usageCap}},created:function(){this.isPro=Object(f["c"])().is_pro,this.printerId=l()(window.location.pathname,"/").slice(-2,-1).pop()},mounted:function(){var e=Object(d["a"])()?localStorage.getItem("skip-tunneling-warning"):null;"yes"!==e&&this.$swal.Prompt.fire({html:'\n          <h4 class="text-center p-2">\n            <svg class="menu-icon" fill="currentColor" viewBox="0 0 346.26 368.59" style="height: 1.1em;margin-right: 0.75em;">\n              <use href="#svg-octoprint-tunneling" />\n            </svg>\n            OctoPrint Secure Tunnel\n          </h4>\n          <div class="p-1">\n            It may take long time for OctoPrint page to load as it is securely tunneled via The Spaghetti Detective server.\n          </div>\n          <div class="p-1">\n            <a target="_blank" href="https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users">\n            Learn more about OctoPrint Tunneling\'s security and page load speed.\n            <i class="fas fa-external-link-alt"></i>\n          </a>\n        </div>\n        ',input:"checkbox",inputPlaceholder:"Don't show again"},"octoprint-tunnel.warning").then((function(e){e.isConfirmed&&e.value&&Object(d["a"])()&&localStorage.setItem("skip-tunneling-warning","yes")}));var t=this,n=function(){u.a.get(g["a"].tunnelUsage()).then((function(e){t.bytesMTD=e.data.total,t.usageCap=e.data.monthly_cap}))};setInterval(n,15e3),setTimeout(n,4e3)},methods:{iframeUrl:function(){return"/octoprint/".concat(this.printerId,"/")}}},v=m,h=(n("052b"),n("e345"),n("2877")),O=Object(h["a"])(v,o,i,!1,null,"6b77e8de",null),j=O.exports,y=n("785f"),k=n("b1ef"),w=n("5f5b");Object(k["c"])(),Object(y["a"])(r["default"]),r["default"].use(a["a"]),r["default"].use(w["a"]),new r["default"]({components:{OctoPrintTunnelPage:j}}).$mount("#octoprint-tunnel-mount")},"785f":function(e,t,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r=n("0122"),a=/(?:^|[-_/])(\w)/g,o="root",i="anonymous component",c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,u=function(e){var t=c.exec(e);return t?t.slice(1):[]},s=function(e,t){var n=u(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},l=function(e){if(!e)return i;if(e.$root===e)return o;if(!e.$options)return i;if(e.$options.name)return e.$options.name;if(e.$options._componentTag)return e.$options._componentTag;if(e.$options.__file){var t=e.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=s(t,".vue");return n.replace(a,(function(e,t){return t?t.toUpperCase():""}))}return i},p=function e(t,n,a,o,i,c){var u=0;for(var s in n){if(u+=1,u>c)break;"object"==Object(r["a"])(n[s])?i>o&&e(t,n[s],a+"."+s,o+1,i,c):t[a+"."+s]=n[s]}},b=function(e){var t=e.config.errorHandler;e.config.errorHandler=function(n,r,a){if(window.Sentry){var o={},i=r;if(r._original&&(i=r._original),i)try{o.componentName=l(i),p(o,JSON.parse(JSON.stringify(i.$options.propsData)),"props",0,2,10)}catch(c){console.log("Unable to extract metadata from Vue component.")}a&&(o.lifecycleHook=a),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(e){e.setContext("vue",o),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof t&&t.call(e,n,r,a),e.util&&e.util.warn("Error in ".concat(a,': "').concat(n.toString(),'"'),r),console.error(n)}};t["a"]=b},"90b9":function(e,t,n){"use strict";function r(){try{var e="__random_key_we_are_not_going_to_use__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}n.d(t,"a",(function(){return r}))},ad56:function(e,t,n){},b1ef:function(e,t,n){"use strict";n.d(t,"a",(function(){return J})),n.d(t,"e",(function(){return z})),n.d(t,"b",(function(){return H})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return F}));n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0");var r,a,o,i,c,u,s,l,p,b,g,f,d,m,v,h,O,j,y,k,w,_,D,S,x,L,C,T,P,$,M,I,E=n("fc11"),U=n("a026"),B=n("90b9"),J={Light:"Light",Dark:"Dark",System:"System"},N=[{name:"primary-hover",values:(r={},Object(E["a"])(r,J.Light,"rgb(178 137 248)"),Object(E["a"])(r,J.Dark,"rgb(154 106 239)"),r)},{name:"primary",values:(a={},Object(E["a"])(a,J.Light,"rgb(153 101 244)"),Object(E["a"])(a,J.Dark,"rgb(165 123 238)"),a)},{name:"on-primary",values:(o={},Object(E["a"])(o,J.Light,"rgb(255 255 255)"),Object(E["a"])(o,J.Dark,"rgb(255 255 255)"),o)},{name:"secondary",values:(i={},Object(E["a"])(i,J.Light,"rgb(40 48 58)"),Object(E["a"])(i,J.Dark,"rgb(235 235 235)"),i)},{name:"on-secondary",values:(c={},Object(E["a"])(c,J.Light,"rgb(235 235 235)"),Object(E["a"])(c,J.Dark,"rgb(40 48 58)"),c)},{name:"success",values:(u={},Object(E["a"])(u,J.Light,"rgb(92 184 92)"),Object(E["a"])(u,J.Dark,"rgb(92 184 92)"),u)},{name:"success-hover",values:(s={},Object(E["a"])(s,J.Light,"rgb(76 174 76)"),Object(E["a"])(s,J.Dark,"rgb(76 174 76)"),s)},{name:"on-success",values:(l={},Object(E["a"])(l,J.Light,"rgb(255 255 255)"),Object(E["a"])(l,J.Dark,"rgb(255 255 255)"),l)},{name:"danger",values:(p={},Object(E["a"])(p,J.Light,"rgb(217 83 79)"),Object(E["a"])(p,J.Dark,"rgb(217 83 79)"),p)},{name:"danger-hover",values:(b={},Object(E["a"])(b,J.Light,"rgb(194 65 61)"),Object(E["a"])(b,J.Dark,"rgb(194 65 61)"),b)},{name:"on-danger",values:(g={},Object(E["a"])(g,J.Light,"rgb(255 255 255)"),Object(E["a"])(g,J.Dark,"rgb(255 255 255)"),g)},{name:"warning",values:(f={},Object(E["a"])(f,J.Light,"rgb(240 173 78)"),Object(E["a"])(f,J.Dark,"rgb(240 173 78)"),f)},{name:"warning-hover",values:(d={},Object(E["a"])(d,J.Light,"rgb(219 154 63)"),Object(E["a"])(d,J.Dark,"rgb(219 154 63)"),d)},{name:"on-warning",values:(m={},Object(E["a"])(m,J.Light,"rgb(255 255 255)"),Object(E["a"])(m,J.Dark,"rgb(255 255 255)"),m)},{name:"on-warning-2",values:(v={},Object(E["a"])(v,J.Light,"rgb(0 0 0)"),Object(E["a"])(v,J.Dark,"rgb(0 0 0)"),v)},{name:"background",values:(h={},Object(E["a"])(h,J.Light,"rgb(235 235 235)"),Object(E["a"])(h,J.Dark,"rgb(35 49 65)"),h)},{name:"surface-primary",values:(O={},Object(E["a"])(O,J.Light,"rgb(255 255 255)"),Object(E["a"])(O,J.Dark,"rgb(72 91 113)"),O)},{name:"surface-secondary",values:(j={},Object(E["a"])(j,J.Light,"rgb(245 245 245)"),Object(E["a"])(j,J.Dark,"rgb(45 62 79)"),j)},{name:"overlay",values:(y={},Object(E["a"])(y,J.Light,"rgb(245 245 245 / .8)"),Object(E["a"])(y,J.Dark,"rgb(0 0 0 / .8)"),y)},{name:"hover",values:(k={},Object(E["a"])(k,J.Light,"rgb(102 102 102 / .075)"),Object(E["a"])(k,J.Dark,"rgb(255 255 255 / .075)"),k)},{name:"divider",values:(w={},Object(E["a"])(w,J.Light,"rgb(171 182 194)"),Object(E["a"])(w,J.Dark,"rgb(106 123 138)"),w)},{name:"text-primary",values:(_={},Object(E["a"])(_,J.Light,"rgb(40 48 58)"),Object(E["a"])(_,J.Dark,"rgb(235 235 235)"),_)},{name:"text-secondary",values:(D={},Object(E["a"])(D,J.Light,"rgb(138 148 162)"),Object(E["a"])(D,J.Dark,"rgb(170 172 176)"),D)},{name:"text-help",values:(S={},Object(E["a"])(S,J.Light,"rgb(76 155 232)"),Object(E["a"])(S,J.Dark,"rgb(76 155 232)"),S)},{name:"input-background",values:(x={},Object(E["a"])(x,J.Light,"rgb(226 232 237)"),Object(E["a"])(x,J.Dark,"rgb(66 86 107)"),x)},{name:"input-placeholder",values:(L={},Object(E["a"])(L,J.Light,"rgb(40 48 58 / .5)"),Object(E["a"])(L,J.Dark,"rgb(235 235 235 / .5)"),L)},{name:"table-accent",values:(C={},Object(E["a"])(C,J.Light,"rgb(227 227 227)"),Object(E["a"])(C,J.Dark,"rgb(40 56 72)"),C)},{name:"icon-tunneling-1",values:(T={},Object(E["a"])(T,J.Light,"rgb(78 93 108)"),Object(E["a"])(T,J.Dark,"rgb(234 234 234)"),T)},{name:"icon-tunneling-2",values:(P={},Object(E["a"])(P,J.Light,"rgb(29 41 53)"),Object(E["a"])(P,J.Dark,"rgb(205 205 205)"),P)}],W=[{name:"logo-bg",values:($={},Object(E["a"])($,J.Light,'url("/static/img/logo-bg/logo-bg_light.svg")'),Object(E["a"])($,J.Dark,'url("/static/img/logo-bg/logo-bg_dark.svg")'),$)},{name:"tail-spin",values:(M={},Object(E["a"])(M,J.Light,'url("/static/img/tail-spin/tail-spin_light.svg")'),Object(E["a"])(M,J.Dark,'url("/static/img/tail-spin/tail-spin_dark.svg")'),M)}],q=[{name:"top-nav",values:(I={},Object(E["a"])(I,J.Light,"0px 2px 10px rgb(0 0 0 / .1)"),Object(E["a"])(I,J.Dark,"0px 2px 10px rgb(0 0 0 / .3)"),I)}],z=U["default"].observable({value:(Object(B["a"])()?localStorage.getItem("colorTheme"):J.Dark)||J.Dark});function H(){return z.value===J.System?"not all"!==window.matchMedia("(prefers-color-scheme)").media&&window.matchMedia("(prefers-color-scheme: light)").matches?J.Light:J.Dark:z.value}function A(){var e=H();N.forEach((function(t){if(document.documentElement.style.setProperty("--color-".concat(t.name),t.values[e]),"surface-secondary"===t.name){var n=document.querySelector('meta[name="theme-color"]');n.content=t.values[e]}})),W.forEach((function(t){document.documentElement.style.setProperty("--url-".concat(t.name),t.values[e])})),q.forEach((function(t){document.documentElement.style.setProperty("--shadow-".concat(t.name),t.values[e])}))}function F(e){z.value=e,Object(B["a"])()&&localStorage.setItem("colorTheme",z.value),A()}},df60:function(e,t,n){},e345:function(e,t,n){"use strict";var r=n("ad56"),a=n.n(r);a.a},f357:function(e,t,n){"use strict";var r=n("f3f3"),a=n("a026"),o=n("5886"),i=n("3c33"),c=function(e,t,n){var o=document.createElement("div"),i=new a["default"]({render:function(n){return n(e,{props:t})}}).$mount(o);return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(i.$el)},onDestroy:function(){i.$destroy(),o.remove()}}))},u=function(e,t,n){return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(e)}}))},s=function(e,t){e.use(o["a"],t);var n=e.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),a=e.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),s=e.swal.mixin({icon:"error",customClass:{container:"dark-backdrop"}}),l=e.swal.mixin({customClass:{container:"dark-backdrop"}}),p=function(t,n){if(!Object(i["a"])(n,!1)){var a=Object(r["a"])(Object(r["a"])({},t),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return e.swal(a).then((function(e){e.value&&(Object(i["b"])(n,!0),console.log(e))}))}};e.prototype.$swal["openModalWithComponent"]=c,e.prototype.$swal["openModalWithElement"]=u,e.prototype.$swal["Confirm"]=n,e.prototype.$swal["Toast"]=a,e.prototype.$swal["DismissableToast"]=p,e.prototype.$swal["Reject"]=s,e.prototype.$swal["Prompt"]=l};t["a"]={install:s}}});
//# sourceMappingURL=octoprint_tunnel.js.map