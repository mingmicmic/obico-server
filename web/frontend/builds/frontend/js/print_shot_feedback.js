(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={print_shot_feedback:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([4,"chunk-vendors"]),n()})({0:function(t,e){},"0d29":function(t,e,n){t.exports=n.p+"img/detective-hour-inverse.png"},1807:function(t,e,n){"use strict";n("99af"),n("a15b");var a=n("0b49"),s=n.n(a),r=n("dd61"),i=n.n(r);e["a"]={publicTimelapse:function(){return"/api/v1/publictimelapse/"},printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(t){return"/api/v1/sharedresources/?"+i()(s()(t),(function(t){return t.join("=")})).join("&")},sharedResource:function(t){return"/api/v1/sharedresources/".concat(t,"/")},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWebSocket:function(t){return"/ws/web/".concat(t,"/")},printerSharedWebSocket:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(a){return n}},s=function(t,e){return localStorage.setItem(t,e)}},4:function(t,e,n){t.exports=n("84bc")},"502a":function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return d}));n("caad"),n("2532");var a=n("f3f3"),s=n("c1df"),r=n.n(s),i=n("9b02"),o=n.n(i),c=function(t){return t?r()(t):null},l=function(t){return t.ended_at=c(t.cancelled_at||t.finished_at),t.started_at=c(t.started_at),t.uploaded_at=c(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},u=function(t,e){var n={createdAt:function(){return c(this.created_at)},isOffline:function(){return null===o()(this,"status",null)},isPaused:function(){return o()(this,"status.state.flags.paused",!1)},isIdle:function(){return"Operational"===o()(this,"status.state.text","")},isDisconnected:function(){return o()(this,"status.state.flags.closedOrError",!0)},isPrinting:function(){return!this.isDisconnected()&&"Operational"!==o()(this,"status.state.text","")},inTransientState:function(){return!this.hasError()&&o()(this,"status.state.text","").includes("ing")&&!o()(this,"status.state.text","").includes("Printing")},hasError:function(){return o()(this,"status.state.flags.error")||o()(this,"status.state.text","").toLowerCase().includes("error")},alertUnacknowledged:function(){return o()(this,"current_print.alerted_at")&&r()(o()(this,"current_print.alerted_at")).isAfter(r()(o()(this,"current_print.alert_acknowledged_at")||0))}};return e?(o()(e,"status._ts",-1)>o()(t,"status._ts",0)&&delete t.status,Object(a["a"])(Object(a["a"])(Object(a["a"])({},e),t),n)):Object(a["a"])(Object(a["a"])({},t),n)},d=function(t,e,n){var a=Math.round(t.length*e),s=n?"p":"fields.normalized_p";return o()(t[a],"".concat(s),0)}},5237:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-dark text-white"},[a("img",{staticClass:"card-img",attrs:{src:n("6e05"),alt:"The Detective is still working"}}),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-overlay",staticStyle:{"background-color":"rgba(0,0,0,0.6)"}},[n("h5",{staticClass:"card-title text-center",staticStyle:{padding:"70px 0"}},[t._v("The Detective is still busy working on your time-lapse")])])}],r={name:"DetectiveWorking"},i=r,o=n("2877"),c=Object(o["a"])(i,a,s,!1,null,null,null);e["a"]=c.exports},"6e05":function(t,e,n){t.exports=n.p+"img/detective-working.gif"},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var a=n("0122"),s=/(?:^|[-_/])(\w)/g,r="root",i="anonymous component",o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,c=function(t){var e=o.exec(t);return e?e.slice(1):[]},l=function(t,e){var n=c(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u=function(t){if(!t)return i;if(t.$root===t)return r;if(!t.$options)return i;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=l(e,".vue");return n.replace(s,(function(t,e){return e?e.toUpperCase():""}))}return i},d=function t(e,n,s,r,i,o){var c=0;for(var l in n){if(c+=1,c>o)break;"object"==Object(a["a"])(n[l])?i>r&&t(e,n[l],s+"."+l,r+1,i,o):e[s+"."+l]=n[l]}},p=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,a,s){if(window.Sentry){var r={},i=a;if(a._original&&(i=a._original),i)try{r.componentName=u(i),d(r,JSON.parse(JSON.stringify(i.$options.propsData)),"props",0,2,10)}catch(o){console.log("Unable to extract metadata from Vue component.")}s&&(r.lifecycleHook=s),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",r),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,a,s),t.util&&t.util.warn("Error in ".concat(s,': "').concat(n.toString(),'"'),a),console.error(n)}};e["a"]=p},"7a8a":function(t,e,n){"use strict";var a=n("c8fe"),s=n.n(a);s.a},"7b5f":function(t,e,n){},"7c77":function(t,e,n){},"84bc":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),s=n("f357"),r=n("785f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"printshots-container row justify-content-center"},[n("pull-to-reveal",{attrs:{enable:!1}},[n("navbar",{attrs:{"view-name":"app.views.web_views.print_shot_feedback"}})],1),n("div",{staticClass:"col-sm-12 col-lg-6"},[n("div",{staticClass:"card"},[t._m(0),n("loading",{attrs:{active:null===t.print,"is-full-page":!0}}),null!==t.print?n("div",[t.print.access_consented_at?n("div",[n("div",[n("vue-slick-carousel",{ref:"carousel",attrs:{arrows:!0,dots:!0},on:{afterChange:t.onNextShot},scopedSlots:t._u([{key:"customPaging",fn:function(e){return[n("div",{class:t.pageClass(e)},[t._v("•")])]}}],null,!1,3226812120)},t._l(this.shots,(function(e,a){return n("print-shot-card",{key:a,attrs:{shot:e},on:{shotChanged:t.onShotChanged}})})),1)],1),n("br"),n("div",{staticClass:"card-body p-3"},[n("a",{attrs:{href:"/prints/"}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" Time-lapse ")])])]):n("consent",{attrs:{print:this.print},on:{"continue-btn-pressed":this.consentBtnPressed}})],1):t._e()],1)])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"card-header text-center"},[t._v(" F "),n("i",{staticClass:"fas fa-search focused-feedback-icon"}),t._v("CUSED FEEDBACK ")])}],c=n("bc3a"),l=n.n(c),u=n("c1df"),d=n.n(u),p=n("c707"),f=n.n(p),h=n("51f5"),v=n.n(h),m=n("a7ab"),b=n.n(m),g=(n("7b8d"),n("6a2c"),n("9062")),_=n.n(g),w=(n("e40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body consent-section"},[n("div",[t._v(" Number of snapshots: "),n("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.print.printshotfeedback_set.length))])]),n("p",[t._v(" Estimated time to finish: "),n("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.estimatedFeedbackTime))])]),t._m(0),n("br"),n("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:!t.consentChecked,type:"button"},on:{click:function(e){return t.$emit("continue-btn-pressed")}}},[t._v("Start Focused Feedback")]),n("br"),n("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.consentChecked,expression:"consentChecked"}],staticClass:"custom-control-input",attrs:{type:"checkbox",name:"consented",id:"consented-checkbox"},domProps:{checked:Array.isArray(t.consentChecked)?t._i(t.consentChecked,null)>-1:t.consentChecked},on:{change:function(e){var n=t.consentChecked,a=e.target,s=!!a.checked;if(Array.isArray(n)){var r=null,i=t._i(n,r);a.checked?i<0&&(t.consentChecked=n.concat([r])):i>-1&&(t.consentChecked=n.slice(0,i).concat(n.slice(i+1)))}else t.consentChecked=s}}}),t._m(1)]),n("br"),n("div",[n("span",{staticClass:"text-muted"},[t._v("File:")]),t._v(" "+t._s(t.print.filename)+" ")]),n("div",[n("span",{staticClass:"text-muted"},[t._v("Printed:")]),t._v(" "+t._s(t.print.started_at.fromNow())+" ")]),n("br"),t.print.video_url?n("video-box",{attrs:{videoUrl:t.print.video_url,posterUrl:t.print.poster_url,fullScreenBtn:!1}}):n("div",[n("detective-working")],1)],1)}),y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-muted font-weight-light"},[t._v(" Help The Detective get better by giving her in-depth feedback on the snapshots of the print. You will earn "),n("strong",{staticClass:"text-light"},[t._v("2 non-expirable Detective Hours")]),t._v(" after you finish this Focused Feedback. "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/"}},[t._v("Learn more. "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"custom-control-label",staticStyle:{"font-size":"16px"},attrs:{for:"consented-checkbox"}},[t._v(" I grant The Spaghetti Detective team members the permission to review the time-lapse video of the print shown on this page. "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#you-need-to-grant-permission-to-tsd-team-to-review-your-time-lapse"}},[t._v("Why is this necessary? "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])}],C=n("c1ee"),k=n("5237"),x={name:"Consent",props:{print:Object},components:{VideoBox:C["a"],DetectiveWorking:k["a"]},data:function(){return{consentChecked:!1}},computed:{estimatedFeedbackTime:function(){var t=12*this.print.printshotfeedback_set.length;return t<60?"".concat(t," seconds"):d.a.duration(t,"seconds").humanize()}}},S=x,O=(n("c6d8"),n("2877")),$=Object(O["a"])(S,w,y,!1,null,"abf6b24c",null),E=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"card-img-top",attrs:{src:t.shot.image_url}}),n("div",{staticClass:"px-3 pt-4"},[n("b-form-group",{attrs:{label:"Do you see any spaghetti in this picture?"}},[n("b-form-radio-group",{attrs:{options:t.options},on:{change:t.updateShot},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1),t._m(0)],1)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",{staticClass:"text-muted"},[t._v(" Not sure? Look at "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#spaghetti-examples"}},[t._v("some examples. "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])}],D=n("1807"),B=n("8226"),P=n("2924"),N={name:"PrintShotCard",components:{BFormGroup:B["a"],BFormRadioGroup:P["a"]},props:{shot:Object},data:function(){return{answer:this.shot.answer,options:[{text:"Yes",value:"LOOKS_BAD"},{text:"No",value:"LOOKS_OK"},{text:"I am not sure",value:"UNDECIDED"}]}},methods:{updateShot:function(t){var e=this;l.a.put(D["a"].printShotFeedback(this.shot.id,this.shot.print_id),{answer:t}).then((function(t){var n=t.data,a=n.instance,s=n.credited_dhs;e.$emit("shotChanged",a),s>0&&e.$swal({title:"You are awesome!",html:"<p>The Detective just got a little smarter because of your feedback!</p><p>You just earned 2 non-expirable Detective Hours - Yay!</p>",confirmButtonText:"I'm done!",showCancelButton:!0,cancelButtonText:"Change feedback"}).then((function(t){t.isConfirmed&&(window.location.href="/prints/")}))}))}}},W=N,R=Object(O["a"])(W,T,j,!1,null,null,null),U=R.exports,A=n("502a"),q=n("b768"),I=n("8ffe"),L={name:"PrintShotFeedbackApp",components:{Consent:E,Loading:_.a,PrintShotCard:U,VueSlickCarousel:b.a,PullToReveal:q["a"],Navbar:I["a"]},props:{config:{default:function(){},type:Object}},data:function(){return{shots:[],currentShot:0,print:null}},computed:{},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;l.a.get(D["a"].print(this.config.printId)).then((function(e){t.print=Object(A["b"])(e.data),t.shots=f()(t.print.printshotfeedback_set,"id")}))},updatePrint:function(t){var e=this;l.a.patch(D["a"].print(this.print.id),t).then((function(t){return e.print=t.data}))},consentBtnPressed:function(){this.updatePrint({access_consented_at:d()()})},onShotChanged:function(t){var e=v()(this.shots,(function(e){return e.id==t.id}));this.$set(this.shots,e,t),this.$refs.carousel.next()},onNextShot:function(t){this.currentShot=t},pageClass:function(t){return t===this.currentShot?"page-visiting":this.shots[t].answered_at?"text-success":"page-unvisited"}}},F=L,H=(n("c13b"),Object(O["a"])(F,i,o,!1,null,"3ed02e9a",null)),M=H.exports;Object(r["a"])(a["default"]),a["default"].use(s["a"]),new a["default"]({components:{App:M}}).$mount("#print-shot-feedback-mount")},"8a45":function(t,e,n){t.exports=n.p+"img/logo-inverted.png"},"8a5a":function(t,e,n){"use strict";var a=n("7c77"),s=n.n(a);s.a},"8f60":function(t,e,n){},"8ffe":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark static-top flex-column"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/printers/"}},[a("img",{staticStyle:{height:"32px"},attrs:{src:n("8a45"),alt:"The Spaghetti Detective"}})]),a("button",{ref:"mobileDropdown",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{ref:"mobileDropdownContent",staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav"},[t.user?a("li",{staticClass:"nav-item",class:{active:t.viewName.includes("printers")}},[a("a",{staticClass:"nav-link",attrs:{href:"/printers/"}},[t._v("Printer ")])]):t._e(),t.user?a("li",{staticClass:"nav-item",class:{active:t.viewName.includes("prints")}},[a("a",{staticClass:"nav-link",attrs:{href:"/prints/"}},[t._v("Time-lapse ")])]):t._e(),t.user?a("li",{staticClass:"nav-item",class:{active:t.viewName.includes("gcodes")}},[a("a",{staticClass:"nav-link",attrs:{href:"/gcodes/"}},[t._v("G-Code ")])]):t._e(),t.user?t._e():a("li",{staticClass:"nav-item",class:{active:"publictimelapse_list"===t.viewName}},[a("a",{staticClass:"nav-link glowing",attrs:{href:"/publictimelapses/"}},[t._v("Spaghetti Gallery")])]),t.isEnt?a("li",{staticClass:"nav-item",class:{active:"pricing"===t.viewName}},[a("a",{staticClass:"nav-link",attrs:{href:"/ent/pricing/"}},[t._v("Pricing")])]):t._e(),t._m(0),t._m(1)]),a("ul",{staticClass:"navbar-nav ml-auto"},[t.user?t._e():a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/accounts/login/"}},[t._v("Sign In")])]),!t.user&&t.allowSignUp?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/accounts/signup/"}},[t._v("Sign up")])]):t._e(),t.isEnt&&t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link badge-btn",attrs:{href:"/ent/subscription/#detective-hour-balance"}},[a("img",{attrs:{src:n("0d29")}}),a("span",{staticClass:"badge badge-light",attrs:{id:"user-credits"}},[t._v(t._s(t.dhBadgeNum))]),a("span",{staticClass:"sr-only"},[t._v("Detective Hours")])])]):t._e(),t.user?a("li",{ref:"accountDropdown",staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle user-menu",attrs:{"data-toggle":"dropdown",href:"#",id:t.user.id,"aria-expanded":"false"}},[t._v(" "+t._s(t.user.first_name||t.user.email)+" "),a("span",{staticClass:"caret"})]),a("div",{ref:"accountDropdownContent",staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"themes"}},[t._m(2),t.isEnt?a("a",{staticClass:"dropdown-item",attrs:{href:"/ent/subscription/"}},[a("i",{staticClass:"far fa-user-circle"}),t._v("Account")]):t._e(),a("div",{staticClass:"dropdown-divider"}),t._m(3)])]):t._e()])])])]),t.needsEmailVerification?a("div",{staticClass:"alert alert-warning text-center",attrs:{role:"alert"}},[t._v(" You will not get notified by email on print failure, as your primary email address is not verified. "),a("a",{attrs:{href:"/accounts/email/"}},[t._v("Verify your email address.")])]):t._e()])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://www.thespaghettidetective.com/help"}},[t._v("Help")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://discord.gg/hsMwGpD"}},[t._v("Forum")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"/user_preferences/"}},[n("i",{staticClass:"fas fa-sliders-h"}),t._v("Preferences")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"/accounts/logout/"}},[n("i",{staticClass:"fas fa-sign-out-alt"}),t._v("Log out")])}],r=n("c1df"),i=n.n(r),o={name:"Navbar",data:function(){return{user:null,allowSignUp:!1,isEnt:!1}},props:{viewName:{default:function(){return""},type:String}},created:function(){var t=JSON.parse(document.querySelector("#settings-json").text),e=t.ACCOUNT_ALLOW_SIGN_UP,n=t.IS_ENT;this.allowSignUp=!!e,this.isEnt=!!n,this.user=JSON.parse(document.querySelector("#user-json").text)},computed:{dhBadgeNum:function(){return this.user&&this.user.is_dh_unlimited?"∞":Math.round(this.user.dh_balance)},needsEmailVerification:function(){if(!this.user)return!1;var t=i()(this.user.date_joined).isBefore(i()().subtract(15,"days"));return this.isEnt&&!this.user.is_primary_email_verified&&t}},methods:{hideDropdowns:function(){var t=this.$refs.accountDropdown;t.classList.contains("show")&&(t.classList.remove("show"),this.$refs.accountDropdownContent.classList.remove("show"));var e=this.$refs.mobileDropdown;e.getAttribute("aria-expanded")&&(e.classList.add("collapsed"),this.$refs.mobileDropdownContent.classList.remove("show"))}}},c=o,l=(n("fda5"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"60e69dd2",null);e["a"]=u.exports},b768:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pullToRevealWrapper",staticClass:"wrapper"},[n("div",[n("div",{staticClass:"pull-to-reveal"},[t.enable?t._t("default"):t._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showEdge,expression:"showEdge"}],staticClass:"showing-edge"}),n("div",{staticClass:"spaceholder"})]),n("div",{ref:"staticWrapper"},[t.enable?t._e():t._t("default")],2)])},s=[],r={name:"PullToReveal",props:{showEdge:{default:function(){return!1},type:Boolean},shiftContent:{default:function(){return!0},type:Boolean},enable:{default:function(){return!0},type:Boolean}},data:function(){return{status:"closed",animationTime:.5}},watch:{enable:function(t){t?(this.destroyDisabled(),this.initEnabled()):(this.destroyEnabled(),this.initDisabled())}},mounted:function(){this.enable?this.initEnabled():this.initDisabled()},destroyed:function(){this.enable?this.destroyEnabled():this.destroyDisabled()},methods:{initEnabled:function(){window.addEventListener("scroll",this.handleScroll),document.querySelector("body").style.minHeight="101vh";var t=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),e=this.$refs.pullToRevealWrapper.querySelector(".spaceholder"),n=this.animationTime;t.style.transition="all ".concat(n,"s"),e.style.transition="all ".concat(n,"s"),window.onload=function(){0===window.scrollY&&window.scrollBy({top:1,behavior:"smooth"});var e=parseInt(window.getComputedStyle(t).height);t.style.top="-".concat(2*e,"px")}},destroyEnabled:function(){window.removeEventListener("scroll",this.handleScroll),document.querySelector("body").style.minHeight="";var t=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),e=this.$refs.pullToRevealWrapper.querySelector(".spaceholder");t.style.transition="none",e.style.transition="none",t.style.top="-999px"},initDisabled:function(){var t=this.$refs.pullToRevealWrapper.querySelector(".showing-edge");t.style.display="none";var e=this.$refs.staticWrapper;e.style.position="absolute",e.style.width="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1";var n=parseInt(window.getComputedStyle(e).height);document.querySelector("body").style.paddingTop="".concat(n,"px")},destroyDisabled:function(){var t=this.$refs.pullToRevealWrapper.querySelector(".showing-edge");t.style.display="block";var e=this.$refs.staticWrapper;e.style.display="none",document.querySelector("body").style.paddingTop=0},handleScroll:function(){var t=window.pageYOffset,e=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),n=parseInt(window.getComputedStyle(e).height);if(0===t){if("opened"===this.status)return;e.style.top=0,this.status="opened",this.shiftContent&&(this.$refs.pullToRevealWrapper.querySelector(".spaceholder").style.height="".concat(n,"px"))}else{if("closed"===this.status)return;this.$emit("hide"),e.style.top="-".concat(2*n,"px"),this.status="closed",this.shiftContent&&(this.$refs.pullToRevealWrapper.querySelector(".spaceholder").style.height=0)}}}},i=r,o=(n("8a5a"),n("2877")),c=Object(o["a"])(i,a,s,!1,null,"7bf59c72",null);e["a"]=c.exports},c07c:function(t,e,n){},c13b:function(t,e,n){"use strict";var a=n("7b5f"),s=n.n(a);s.a},c1ee:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-top"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-default-skin vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0},on:{timeupdate:t.onTimeUpdate}}),t.fullscreenBtn?n("a",{staticClass:"fullscreen-btn",attrs:{role:"button"},on:{click:function(e){return t.$emit("fullscreen")}}},[n("i",{staticClass:"fa fa-expand fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()],1)},s=[],r=n("d6d3"),i={name:"VideoBox",components:{videoPlayer:r["videoPlayer"]},props:{videoUrl:String,posterUrl:String,fullscreenBtn:{default:function(){return!0},type:Boolean},fluid:{type:Boolean,default:function(){return!0}},autoplay:{type:Boolean,default:function(){return!1}}},computed:{playerOptions:function(){return{muted:!0,preload:"none",language:"en",playbackRates:[.5,1,1.5,2],fluid:this.fluid,fill:!this.fluid,autoplay:this.autoplay,sources:[{type:"video/mp4",src:this.videoUrl}],controlBar:{fullscreenToggle:!1},poster:this.posterUrl}}},methods:{onTimeUpdate:function(t){this.$emit("timeupdate",t.currentTime()/t.duration())}}},o=i,c=(n("7a8a"),n("2877")),l=Object(c["a"])(o,a,s,!1,null,"2ae6d05e",null);e["a"]=l.exports},c6d8:function(t,e,n){"use strict";var a=n("8f60"),s=n.n(a);s.a},c8fe:function(t,e,n){},f357:function(t,e,n){"use strict";var a=n("f3f3"),s=n("a026"),r=n("5886"),i=n("3c33"),o=function(t,e,n){var r=document.createElement("div"),i=new s["default"]({render:function(n){return n(t,{props:e})}}).$mount(r);return s["default"].swal(Object(a["a"])(Object(a["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(i.$el)},onDestroy:function(){i.$destroy(),r.remove()}}))},c=function(t,e,n){return s["default"].swal(Object(a["a"])(Object(a["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},l=function(t,e){t.use(r["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),s=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),l=function(e,n){if(!Object(i["a"])(n,!1)){var s=Object(a["a"])(Object(a["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(s).then((function(t){t.value&&(Object(i["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=o,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=s,t.prototype.$swal["DismissableToast"]=l};e["a"]={install:l}},fda5:function(t,e,n){"use strict";var a=n("c07c"),s=n.n(a);s.a}});
//# sourceMappingURL=print_shot_feedback.js.map