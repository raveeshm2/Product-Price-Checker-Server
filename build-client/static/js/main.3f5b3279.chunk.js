(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,r){},162:function(e,t,r){},165:function(e,t,r){"use strict";r.r(t),r.d(t,"history",(function(){return ut}));var n=r(1),a=r(0),c=r.n(a),s=r(39),o=r.n(s),i=(r(151),r(11)),u=r(67),l=r(170),d=r(172),j=r(136),b=r(6),p=r.n(b),O=r(18),h=r(173),f=r(168),x=r(169),m=r(69),v=r.n(m),y=r(13),g=r(28),w=r(25),k=r(29),P=r(51),E=r(57),T=r(9),C=r(71),N=r(142),L=function(e){Object(P.a)(r,e);var t=Object(E.a)(r);function r(e,n,a,c){var s;return Object(w.a)(this,r),(s=t.call(this,"".concat(e,": ").concat(n).concat(a?" ".concat(a):""))).url=e,s.status=n,s.statusText=void 0,s.data=void 0,s.data=c,s.statusText=a||null,s}return r}(Object(N.a)(Error));function S(e,t,r){return q.apply(this,arguments)}function q(){return(q=Object(O.a)(p.a.mark((function e(t,r,n){var a,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://vast-eyrie-21993.herokuapp.com").concat(t),Object(i.a)({credentials:"include",headers:n},r));case 2:if(200!==(a=e.sent).status){e.next=19;break}if(!(c=a.headers.get("content-type"))||-1===c.indexOf("application/json")){e.next=18;break}return e.prev=6,e.next=9,a.clone().json();case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(6),console.error(e.t0),console.error(a),console.error(a.clone().text()),new Error("Error with JSON parsing");case 18:return e.abrupt("return",null);case 19:return s=null,e.prev=20,e.next=23,a.json();case 23:s=e.sent,e.next=28;break;case 26:e.prev=26,e.t1=e.catch(20);case 28:throw new L(a.url,a.status,a.statusText,s);case 29:case"end":return e.stop()}}),e,null,[[6,12],[20,26]])})))).apply(this,arguments)}function A(e,t){return R.apply(this,arguments)}function R(){return(R=Object(O.a)(p.a.mark((function e(t,r){var n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:[],e.prev=1,e.next=4,r();case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e.catch(1),n.forEach((function(t){if(t(e.t0))throw e.t0})),console.error(e.t0),t(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function I(e,t,r,n,a,c){return U.apply(this,arguments)}function U(){return(U=Object(O.a)(p.a.mark((function e(t,r,n,a,c,s){var o,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.payload,u=Object(C.a)(r,["payload"]),e.abrupt("return",A(n,Object(O.a)(p.a.mark((function e(){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,Object(i.a)(Object(i.a)({},u),{},{body:o?JSON.stringify(o):void 0}),Object(i.a)({},s));case 2:return r=e.sent,e.abrupt("return",c(r));case 4:case"end":return e.stop()}}),e)}))),a));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=r(62);var H=function(e,t){return function(r){return r.status===e&&(!t||t(r))}},z=function(e,t){return function(r){if(e(r)){var n=r.data&&r.data.errors?r.data.errors:[];return n.length>0?{errors:n}:{errors:[].concat(Object(F.a)(t.errors),Object(F.a)(n))}}}};var G,J,D=z(H(404),{errors:["Not found"]}),B=z(H(500),{errors:["Internal server error"]}),V=H(401,(function(e){return e.data&&e.data.errors.includes("Not authenticated")})),_=r(129),M=function(){function e(){Object(w.a)(this,e)}return Object(k.a)(e,null,[{key:"post",value:function(t){return e.fetch(t.url,{method:"POST",payload:t.payload},t.deserialize?t.deserialize:function(e){return e})}},{key:"put",value:function(t){return e.fetch(t.url,{method:"PUT",payload:t.payload},t.deserialize?t.deserialize:function(e){return e})}},{key:"get",value:function(t){return e.fetch(t.url,{method:"GET"},t.deserialize?t.deserialize:function(e){return e})}},{key:"delete",value:function(t){return e.fetch(t.url,{method:"DELETE",payload:t.payload},(function(e){return e}))}},{key:"fetch",value:function(){var t=Object(O.a)(p.a.mark((function t(r,n,a,c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",I(r,n,e.errorsInterpreter,e.errorPass,a,Object(i.a)(Object(i.a)({},e.defaultHeaders),c)));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n,a){return t.apply(this,arguments)}}()}]),e}();function W(e){return{loading:!1,error:null,data:e}}M.defaultHeaders={"Content-Type":"application/json"},M.requests={GET:M.get,POST:M.post,PUT:M.put,DELETE:M.delete},M.errorPass=[V],M.errorDetectors=[D,B,function(e){if(!(r=e).data&&!r.url&&!r.status&&!r.statusText){var t=e.data&&e.data.errors?e.data.errors:[];return{errors:[e.statusText].concat(Object(F.a)(t))}}var r}],M.errorsInterpreter=(G=M.errorDetectors,J={errors:["Unknown error"]},function(e){var t,r=Object(_.a)(G);try{for(r.s();!(t=r.n()).done;){var n=(0,t.value)(e);if(n)return n}}catch(a){r.e(a)}finally{r.f()}return J});var Q,Y=function e(t){var r=this;Object(w.a)(this,e),this.type=t,this.requestActionType="".concat(this.type,"_REQUEST"),this.errorActionType="".concat(this.type,"_ERROR"),this.responseActionType="".concat(this.type,"_RESPONSE"),this.request=function(e){return{type:r.requestActionType,payload:e}},this.response=function(e){return{type:r.responseActionType,payload:e}},this.error=function(e,t){return{type:r.errorActionType,error:e,payload:t}},this.reducer=function(e,t){switch(t.type){case r.requestActionType:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case r.responseActionType:return{loading:!1,data:t.payload,error:null};case r.errorActionType:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:Object(F.a)(t.error.errors),data:t.payload?t.payload:e.data});default:return e}}},$=function(){function e(){Object(w.a)(this,e),this.assignment=void 0}return Object(k.a)(e,[{key:"getHandler",value:function(e){var t=p.a.mark(r);function r(e,r){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.assignment[e](r);case 3:t.next=11;break;case 5:return t.prev=5,t.t0=t.catch(0),alert("".concat(e,": ").concat(t.t0.message)),t.next=10,Object(T.c)({type:"REQUEST_FAILED",message:t.t0.message});case 10:console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,5]])}return r.bind(this,e)}},{key:"rootSaga",value:p.a.mark((function e(){var t,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,r=Object.keys(this.assignment);case 1:if(!(t<r.length)){e.next=8;break}return n=r[t],e.next=5,Object(T.d)(n,this.getHandler(n));case 5:t++,e.next=1;break;case 8:case"end":return e.stop()}}),e,this)}))}]),e}(),K=function(e,t){return{type:"UPDATE_TOAST",payload:{show:!0,header:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("strong",{className:"mr-auto",children:[" ",e," "]})}),body:Object(n.jsx)(n.Fragment,{children:t})}}},X=r(24),Z=new Y("/SCRAPE"),ee=new Y("/ADD_PRODUCT"),te=new Y("/EDIT_PRODUCT"),re=new Y("/DELETE_PRODUCT"),ne=function(e){Object(P.a)(r,e);var t=Object(E.a)(r);function r(){var e,n;Object(w.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=t.call.apply(t,[this].concat(c))).assignment=(e={},Object(g.a)(e,Z.requestActionType,n.scrape),Object(g.a)(e,ee.requestActionType,n.addProduct),Object(g.a)(e,te.requestActionType,n.editProduct),Object(g.a)(e,re.requestActionType,n.deleteProduct),e),n}return Object(k.a)(r,[{key:"scrape",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.get,{url:"/scrape"});case 3:return r=e.sent,e.next=6,Object(T.c)(Z.response(r));case 6:e.next=17;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(T.c)(Z.error(e.t0));case 12:if(!e.t0.errors.includes("User is not authenticated")){e.next=15;break}return e.next=15,Object(T.c)(Object(X.d)("/"));case 15:return e.next=17,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 17:case"end":return e.stop()}}),e,null,[[0,8]])}))},{key:"addProduct",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.post,{url:"/product",payload:t.payload});case 3:return r=e.sent,e.next=6,Object(T.c)(ee.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(T.c)(ee.error(e.t0));case 14:return e.next=16,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 16:case"end":return e.stop()}}),e,null,[[0,10]])}))},{key:"editProduct",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.put,{url:"/product",payload:t.payload});case 3:return r=e.sent,e.next=6,Object(T.c)(te.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(T.c)(te.error(e.t0));case 14:return e.next=16,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 16:case"end":return e.stop()}}),e,null,[[0,10]])}))},{key:"deleteProduct",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.delete,{url:"/product",payload:t.payload});case 3:return r=e.sent,e.next=6,Object(T.c)(re.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(T.c)(re.error(e.t0));case 14:return e.next=16,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 16:case"end":return e.stop()}}),e,null,[[0,10]])}))}]),r}($),ae=function(e){var t=e.product,r=e.show,c=e.onHide,s=Object(y.d)(),o=Object(y.e)((function(e){return e.products.deletePRoduct}));function i(){return(i=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(re.request({id:t.id}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){o.loading||!o.data&&!o.error||c()}),[o,c]),Object(n.jsxs)(h.a,{show:r,onHide:c,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(n.jsx)(h.a.Header,{closeButton:!0,children:Object(n.jsx)(h.a.Title,{id:"contained-modal-title-vcenter",children:null===t||void 0===t?void 0:t.alias})}),Object(n.jsxs)(h.a.Body,{children:[Object(n.jsx)("h6",{children:t&&t.productName&&v.a.decode(t.productName)}),Object(n.jsx)("h5",{children:"Are you sure, you want to remove this product ?"})]}),Object(n.jsxs)(h.a.Footer,{children:[Object(n.jsxs)(f.a,{variant:"danger",type:"submit",disabled:o.loading,onClick:function(){return i.apply(this,arguments)},children:[Object(n.jsx)(x.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:o.loading?"d-inline-block":"d-none"}),Object(n.jsx)("span",{className:o.loading?"ml-3 d-inline-block":"d-none",children:"Loading..."}),Object(n.jsx)("span",{className:o.loading?"d-none":"d-inline-block",children:"Yes, I confirm"})]}),Object(n.jsx)(f.a,{variant:"primary",onClick:c,children:"No"})]})]})},ce=r(174),se=r(22),oe=se.a({alias:se.c().required("Alias name is required"),url:se.c().required("Product URL is required"),cutOffPrice:se.c().required("Cutoff price is required").matches(/^[0-9]+$/,"Only Numbers are supported"),portal:se.c().required("Portal name is required")}),ie=se.a({email:se.c().required("Email is required").email("Not a valid email address")}),ue=se.a({currentPassword:se.c().required("Current password is required"),newPassword:se.c().min(8,"Must be atleast 8 characters"),confirmPassword:se.c().when("newPassword",{is:function(e){return e&&""!==e.trim()},then:se.c().required("Password is required").equals([se.b("newPassword")],"Passwords must match"),otherwise:se.c().max(0,"Please enter new password first")})}),le=se.a({email:se.c().required("Email address is required"),password:se.c().required("Password is required")}),de=r(20),je=(Q=ce.a.Control,function(e){var t=e.field,r=e.form,a=(e.meta,Object(C.a)(e,["field","form","meta"]));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Q,Object(i.a)(Object(i.a)(Object(i.a)({},t),{},{onChange:function(e){r.setFieldValue(t.name,e.target.value,!0)}},a),{},{isValid:r.touched[t.name]&&!r.errors[t.name],isInvalid:!!r.errors[t.name]})),Object(n.jsx)(ce.a.Control.Feedback,{children:"Looks good!"}),Object(n.jsx)(ce.a.Control.Feedback,{type:"invalid",children:r.errors[t.name]})]})}),be=function(e){var t=Object.assign({},e);return Object(n.jsx)(de.a,Object(i.a)(Object(i.a)({},t),{},{component:je}))},pe=function(e){return function(t){var r=t.field,a=t.form,c=(t.meta,t.options),s=Object(C.a)(t,["field","form","meta","options"]);return Object(n.jsx)(e,Object(i.a)(Object(i.a)(Object(i.a)({as:"select"},r),{},{onChange:function(e){a.setFieldValue(r.name,e.target.value,!0)}},s),{},{children:c.map((function(e){return Object(n.jsx)("option",{value:e.key,children:e.value})}))}))}}(ce.a.Control),Oe=function(e){var t=Object.assign({},e);return Object(n.jsx)(de.a,Object(i.a)(Object(i.a)({},t),{},{component:pe}))},he=function(e){var t=e.className,r=void 0===t?"":t,a=e.type,c=void 0===a?"button":a,s=e.variant,o=void 0===s?"primary":s,i=e.loading,u=e.disabled,l=e.loadingText,d=void 0===l?"Loading...":l,j=e.staticText,b=e.onClick;return Object(n.jsxs)(f.a,{className:r,variant:o,type:c,disabled:u,style:{cursor:u?"not-allowed":"pointer"},onClick:b,children:[Object(n.jsx)(x.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:i?"d-inline-block":"d-none"}),Object(n.jsx)("span",{className:i?"ml-3 d-inline-block":"d-none",children:d}),Object(n.jsx)("span",{className:i?"d-none":"d-inline-block",children:j})]})},fe=function(e){var t=e.product,r=e.show,c=e.onHide,s=Object(y.d)(),o=Object(y.e)((function(e){return e.products.editProduct}));function u(){return(u=Object(O.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(te.request(Object(i.a)(Object(i.a)({},r),{},{cutOffPrice:parseInt(r.cutOffPrice.toString().trim()),id:t.id})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){o.loading||!o.data&&!o.error||c()}),[o,c]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(h.a,{show:r,onHide:c,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:Object(n.jsx)(de.c,{initialValues:{alias:(null===t||void 0===t?void 0:t.alias)||"",url:(null===t||void 0===t?void 0:t.url)||"",cutOffPrice:(null===t||void 0===t?void 0:t.cutOffPrice)||-1,imgURL:(null===t||void 0===t?void 0:t.imgURL)||"",portal:(null===t||void 0===t?void 0:t.portal)||""},onSubmit:function(e){return function(e){return u.apply(this,arguments)}(e)},validationSchema:oe,children:function(e){var r=e.dirty,a=e.isValid;return Object(n.jsxs)(de.b,{children:[Object(n.jsx)(h.a.Header,{closeButton:!0,children:Object(n.jsx)(h.a.Title,{id:"contained-modal-title-vcenter",children:null===t||void 0===t?void 0:t.alias})}),Object(n.jsxs)(h.a.Body,{children:[Object(n.jsx)("h6",{children:t&&t.productName&&v.a.decode(t.productName)}),Object(n.jsxs)(ce.a.Group,{controlId:"alias",children:[Object(n.jsx)(ce.a.Label,{children:"Product Alias"}),Object(n.jsx)(be,{name:"alias",type:"text",placeholder:"Enter product alias name",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"productURL",children:[Object(n.jsx)(ce.a.Label,{children:"Product URL"}),Object(n.jsx)(be,{name:"url",type:"text",placeholder:"Enter Product URL",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"cutOffPrice",children:[Object(n.jsx)(ce.a.Label,{children:"Cut Off Price"}),Object(n.jsx)(be,{name:"cutOffPrice",type:"text",placeholder:"Enter Cut Off Price",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"imgURL",children:[Object(n.jsx)(ce.a.Label,{children:"Image URL"}),Object(n.jsx)(be,{name:"imgURL",type:"text",placeholder:"Enter Image URL",autoComplete:"off"}),Object(n.jsx)(ce.a.Text,{className:"text-muted",children:"Not required for Amazon Products but still can pe provided to override default image"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"portal",children:[Object(n.jsx)(ce.a.Label,{children:"Portal"}),Object(n.jsx)(Oe,{options:[{key:"Flipkart",value:"Flipkart"},{key:"Amazon",value:"Amazon"}],name:"portal",type:"select",placeholder:"Enter Website Name"})]})]}),Object(n.jsxs)(h.a.Footer,{children:[Object(n.jsx)(he,{type:"submit",loading:o.loading,disabled:o.loading||!a||!r,loadingText:"Loading...",staticText:"Update"}),Object(n.jsx)(f.a,{variant:"secondary",onClick:c,children:"Close"})]})]})}})})})},xe=r(177),me=r(175),ve=function(e){var t=e.show,r=e.onHide,c=Object(y.d)(),s=Object(y.e)((function(e){return e.products.addProduct}));function o(){return(o=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(ee.request(Object(i.a)(Object(i.a)({},t),{},{cutOffPrice:parseInt(t.cutOffPrice.toString().trim())})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){s.loading||!s.data&&!s.error||r()}),[s,r]),Object(n.jsx)(h.a,{show:t,onHide:r,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:Object(n.jsx)(de.c,{initialValues:{alias:"",url:"",cutOffPrice:0,imgURL:"",portal:"Flipkart"},onSubmit:function(e){return function(e){return o.apply(this,arguments)}(e)},validationSchema:oe,children:function(e){var t=e.dirty,a=e.isValid;return Object(n.jsxs)(de.b,{children:[Object(n.jsx)(h.a.Header,{closeButton:!0,children:Object(n.jsx)(h.a.Title,{id:"contained-modal-title-vcenter",children:"Add New product"})}),Object(n.jsxs)(h.a.Body,{children:[Object(n.jsxs)(ce.a.Group,{controlId:"alias",children:[Object(n.jsx)(ce.a.Label,{children:"Product Alias"}),Object(n.jsx)(be,{name:"alias",type:"text",placeholder:"Enter product alias name",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"productURL",children:[Object(n.jsx)(ce.a.Label,{children:"Product URL"}),Object(n.jsx)(be,{name:"url",type:"text",placeholder:"Enter Product URL",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"cutOffPrice",children:[Object(n.jsx)(ce.a.Label,{children:"Cut Off Price"}),Object(n.jsx)(be,{name:"cutOffPrice",type:"text",placeholder:"Enter Cut Off Price",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"imgURL",children:[Object(n.jsx)(ce.a.Label,{children:"Image URL"}),Object(n.jsx)(be,{name:"imgURL",type:"text",placeholder:"Enter Image URL",autoComplete:"off"}),Object(n.jsx)(ce.a.Text,{className:"text-muted",children:"Not required for Amazon Products but still can pe provided to override default image"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"portal",children:[Object(n.jsx)(ce.a.Label,{children:"Portal"}),Object(n.jsx)(Oe,{options:[{key:"Flipkart",value:"Flipkart"},{key:"Amazon",value:"Amazon"}],name:"portal",type:"select",placeholder:"Enter Website Name"})]})]}),Object(n.jsxs)(h.a.Footer,{children:[Object(n.jsx)(he,{type:"submit",loading:s.loading,disabled:s.loading||!a||!t,loadingText:"Loading...",staticText:"Add Product"}),Object(n.jsx)(f.a,{variant:"secondary",onClick:r,children:"Close"})]})]})}})})},ye=r(171),ge=new Y("/CRON/STATUS"),we=new Y("/CRON/START"),ke=new Y("/CRON/STOP"),Pe=function(e){Object(P.a)(r,e);var t=Object(E.a)(r);function r(){var e,n;Object(w.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=t.call.apply(t,[this].concat(c))).assignment=(e={},Object(g.a)(e,ge.requestActionType,n.status),Object(g.a)(e,we.requestActionType,n.startJob),Object(g.a)(e,ke.requestActionType,n.stopJob),e),n}return Object(k.a)(r,[{key:"status",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.get,{url:"/cron/status"});case 3:return r=e.sent,e.next=6,Object(T.c)(ge.response(r));case 6:if("/productList"===ut.location.pathname){e.next=10;break}return e.next=10,Object(T.c)(Object(X.d)("/productList"));case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,Object(T.c)(ge.error(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))},{key:"startJob",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.post,{url:"/cron/start",payload:t.payload});case 3:return r=e.sent,e.next=6,Object(T.c)(we.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(T.c)(we.error(e.t0));case 14:return e.next=16,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 16:case"end":return e.stop()}}),e,null,[[0,10]])}))},{key:"stopJob",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.post,{url:"/cron/stop"});case 3:return r=e.sent,e.next=6,Object(T.c)(ke.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(T.c)(ke.error(e.t0));case 14:return e.next=16,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 16:case"end":return e.stop()}}),e,null,[[0,10]])}))}]),r}($),Ee=function(e){var t,r=e.show,c=e.onHide,s=Object(y.d)(),o=Object(y.e)((function(e){return e.cron.status})),i=Object(y.e)((function(e){return e.cron.startJob})),u=Object(y.e)((function(e){return e.cron.stopJob}));function d(){return(d=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(we.request(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return x.apply(this,arguments)}function x(){return(x=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(ke.request(null));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){s(ge.request(null))}),[s]),Object(a.useEffect)((function(){(!i.loading&&(i.data||i.error)||!u.loading&&(u.data||u.error))&&c()}),[i,u,c]),Object(n.jsx)(h.a,{show:r,onHide:c,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:Object(n.jsx)(de.c,{initialValues:{email:(null===(t=o.data)||void 0===t?void 0:t.email)||"",hour:"1day"},onSubmit:function(e){console.log("updating cron job",e),function(e){d.apply(this,arguments)}(e)},validationSchema:ie,enableReinitialize:!0,children:function(e){e.dirty;var t,r,a=e.isValid;return Object(n.jsxs)(de.b,{children:[Object(n.jsx)(h.a.Header,{closeButton:!0,children:Object(n.jsx)(h.a.Title,{id:"contained-modal-title-vcenter",children:"Manage CRON Jobs"})}),Object(n.jsxs)(h.a.Body,{children:[Object(n.jsxs)(ce.a.Group,{controlId:"email",children:[Object(n.jsx)(ce.a.Label,{children:"Email"}),Object(n.jsx)(be,{name:"email",type:"email",placeholder:"Enter Your email",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"frequency",children:[Object(n.jsx)(ce.a.Label,{children:"Email frequency"}),Object(n.jsx)(Oe,{options:[{key:"15min",value:"Every 15 minutes"},{key:"30min",value:"Every 30 minutes"},{key:"1hr",value:"Every 1 hour"},{key:"2hr",value:"Every 2 hours"},{key:"4hr",value:"Every 4 hours"},{key:"6hr",value:"Every 6 hours"},{key:"8hr",value:"Every 8 hours"},{key:"12hr",value:"Every 12 hours"},{key:"1day",value:"Every day"},{key:"1week",value:"Every week"},{key:"1month",value:"Every month"}],name:"hour",type:"select",placeholder:"Enter E-mail frequency"})]}),"Cron Job Status: ","Running"===(null===(t=o.data)||void 0===t?void 0:t.status)?Object(n.jsxs)("span",{className:"text-success",children:["Running once every ",null===(r=o.data)||void 0===r?void 0:r.cronFrequency]}):Object(n.jsx)("span",{className:"text-danger",children:"Not Running"})]}),Object(n.jsx)(h.a.Footer,{children:Object(n.jsx)(l.a,{fluid:!0,children:Object(n.jsxs)(ye.a,{children:[Object(n.jsx)(j.a,{md:12,lg:5,className:"pl-0 d-sm-flex",children:Object(n.jsx)(he,{variant:"danger",onClick:b,loading:u.loading,disabled:u.loading||!a,staticText:"Stop CRON Job",loadingText:"Stopping.."})}),Object(n.jsx)(j.a,{md:12,lg:3,children:Object(n.jsx)("div",{className:"d-sm-block d-lg-none",style:{height:".5rem"}})}),Object(n.jsxs)(j.a,{md:12,lg:4,className:"pr-0 d-flex justify-content-center justify-content-lg-end",children:[Object(n.jsx)(he,{type:"submit",loading:i.loading,disabled:i.loading||!a,staticText:"Start CRON Job",loadingText:"Starting.."}),Object(n.jsx)(f.a,{variant:"secondary",className:"ml-2",onClick:c,children:"Close"})]})]})})})]})}})})},Te=new Y("USER/LOGIN"),Ce=new Y("USER/CHANGE"),Ne=new Y("USER/LOGOUT"),Le=function(e){Object(P.a)(r,e);var t=Object(E.a)(r);function r(){var e,n;Object(w.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=t.call.apply(t,[this].concat(c))).assignment=(e={},Object(g.a)(e,Te.requestActionType,n.login),Object(g.a)(e,Ce.requestActionType,n.changePassword),Object(g.a)(e,Ne.requestActionType,n.logout),e),n}return Object(k.a)(r,[{key:"login",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.post,{url:"/user/login",payload:t.payload});case 3:return r=e.sent,e.next=6,Object(T.c)(Te.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:return e.next=10,Object(T.c)(Object(X.d)("/productList"));case 10:e.next=18;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,Object(T.c)(Te.error(e.t0));case 16:return e.next=18,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 18:case"end":return e.stop()}}),e,null,[[0,12]])}))},{key:"changePassword",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.put,{url:"/user/change",payload:t.payload});case 3:return r=e.sent,e.next=6,Object(T.c)(Ce.response(r));case 6:return e.next=8,Object(T.c)(K("Success",r.message.join("")));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(T.c)(Ce.error(e.t0));case 14:return e.next=16,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 16:case"end":return e.stop()}}),e,null,[[0,10]])}))},{key:"logout",value:p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)(M.post,{url:"/user/logout"});case 3:return r=e.sent,e.next=6,Object(T.c)(Ne.response(r));case 6:if(!r.message.includes("Logout Successful !!")){e.next=9;break}return e.next=9,Object(T.c)(Object(X.d)("/"));case 9:return e.next=11,Object(T.c)(K("Success",r.message.join("")));case 11:e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,Object(T.c)(Ne.error(e.t0));case 17:return e.next=19,Object(T.c)(K("Error",e.t0.errors.join(". ")));case 19:case"end":return e.stop()}}),e,null,[[0,13]])}))}]),r}($),Se=function(e){var t=e.show,r=e.onHide,c=Object(y.d)(),s=Object(y.e)((function(e){return e.user.changePassword}));function o(){return(o=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(Ce.request(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){s.loading||!s.data&&!s.error||r()}),[s,r]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(h.a,{show:t,onHide:r,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:Object(n.jsx)(de.c,{initialValues:{currentPassword:"",newPassword:"",confirmPassword:""},onSubmit:function(e){return function(e){return o.apply(this,arguments)}({currentPassword:e.currentPassword,newPassword:e.newPassword})},validationSchema:ue,children:function(e){var t=e.dirty,a=e.isValid;return Object(n.jsxs)(de.b,{children:[Object(n.jsx)(h.a.Header,{closeButton:!0,children:Object(n.jsx)(h.a.Title,{id:"contained-modal-title-vcenter",children:"Change Account Settings"})}),Object(n.jsxs)(h.a.Body,{children:[Object(n.jsxs)(ce.a.Group,{controlId:"currentPassword",children:[Object(n.jsx)(ce.a.Label,{children:"Current Password"}),Object(n.jsx)(be,{name:"currentPassword",type:"password",placeholder:"Please enter current password",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"newPassword",children:[Object(n.jsx)(ce.a.Label,{children:"New Password"}),Object(n.jsx)(be,{name:"newPassword",type:"password",placeholder:"Please enter new password",autoComplete:"off"})]}),Object(n.jsxs)(ce.a.Group,{controlId:"confirmPassword",children:[Object(n.jsx)(ce.a.Label,{children:"Confirm Password"}),Object(n.jsx)(be,{name:"confirmPassword",type:"password",placeholder:"Please enter same password again",autoComplete:"off"})]})]}),Object(n.jsxs)(h.a.Footer,{children:[Object(n.jsx)(he,{type:"submit",loading:s.loading,disabled:s.loading||!a||!t,loadingText:"Changing..",staticText:"Submit"}),Object(n.jsx)(f.a,{variant:"secondary",onClick:r,children:"Close"})]})]})}})})})},qe=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(a.useState)(!1),j=Object(u.a)(d,2),b=j[0],p=j[1],O=Object(y.d)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(xe.a,{bg:"dark",variant:"dark",fixed:"top",expand:"md",children:[Object(n.jsx)(xe.a.Brand,{href:"#home",children:"Price Checker"}),Object(n.jsx)(xe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(xe.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(me.a,{className:"ml-auto",children:[Object(n.jsx)(me.a.Link,{href:"#home",children:"Home"}),Object(n.jsx)(me.a.Link,{href:"#addProduct",onClick:function(){return c(!0)},children:"Add Product"}),Object(n.jsx)(me.a.Link,{href:"#cronJobs",onClick:function(){return l(!0)},children:"CRON Jobs"}),Object(n.jsx)(me.a.Link,{href:"#settings",onClick:function(){return p(!0)},children:"Settings"}),Object(n.jsx)(me.a.Link,{href:"#logout",onClick:function(){return O(Ne.request(null))},children:"Log out"})]})})]}),Object(n.jsx)(ve,{show:r,onHide:function(){c(!1)}}),Object(n.jsx)(Ee,{show:i,onHide:function(){l(!1)}}),Object(n.jsx)(Se,{show:b,onHide:function(){p(!1)}})]})},Ae=r(139),Re=function(e){return Object(n.jsxs)("div",{style:{height:"80vh"},className:e.loading?"d-flex justify-content-center align-items-center flex-column":"d-none",children:[Object(n.jsx)(Ae.CubeSpinner,Object(i.a)({},e)),Object(n.jsx)("div",{className:e.loading?"mt-5":"d-none",children:Object(n.jsx)("h5",{children:" Loading your Products. Please wait..."})})]})},Ie=r(178),Ue=r.p+"static/media/not-available.f227f124.png",Fe=function(e){var t=e.imgURL||Ue;return Object(n.jsxs)(Ie.a,{style:{minWidth:"18rem"},className:"h-100",children:[Object(n.jsx)(Ie.a.Img,{variant:"top",src:t}),Object(n.jsxs)(Ie.a.Body,{className:"d-flex flex-column justify-content-end",children:[Object(n.jsx)(Ie.a.Title,{children:e.alias}),e&&e.productName&&Object(n.jsx)(Ie.a.Subtitle,{className:"mt-2 mb-2",children:v.a.decode(e.productName)}),Object(n.jsxs)(Ie.a.Text,{className:"mt-4",children:["Website: ",e.portal," ",Object(n.jsx)("br",{}),"Current Price: ",Object(n.jsxs)("b",{children:["\u20b9",e.price]})," ",Object(n.jsx)("br",{}),"Cut Off Price: \u20b9",e.cutOffPrice," ",Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)(f.a,{variant:"primary",onClick:function(){return window.open(e.url,"_blank").focus()},children:"Buy Now !"}),Object(n.jsxs)("div",{className:"d-inline-flex justify-content-end",children:[Object(n.jsx)(f.a,{variant:"secondary",onClick:function(){return e.setEditModal(e.id)},children:"Edit"}),Object(n.jsx)(f.a,{className:"ml-1",variant:"danger",onClick:function(){return e.setDeleteModal(e.id)},children:"Delete"})]})]})]})]})},He=function(e){var t,r,c=Object(a.useState)(null),s=Object(u.a)(c,2),o=s[0],b=s[1],p=Object(a.useState)(null),O=Object(u.a)(p,2),h=O[0],f=O[1],x=Object(y.d)(),m=Object(y.e)((function(e){return e.products.list}));return Object(a.useEffect)((function(){x(Z.request(null))}),[x]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(qe,{}),Object(n.jsxs)("div",{className:"mb-4",style:{marginTop:"5rem"},children:[m.data&&Object(n.jsxs)(l.a,{children:[Object(n.jsx)("h1",{className:"mb-2 pl-1",children:"Product List"}),Object(n.jsx)(d.a,{children:m.data.map((function(e){return Object(n.jsx)(j.a,{lg:"4",className:"mt-4",children:Object(n.jsx)(Fe,Object(i.a)(Object(i.a)({},e),{},{setEditModal:b,setDeleteModal:f}))},e.id)}))})]}),Object(n.jsx)(Re,{loading:!!m.loading,frontColor:"#4A90E2",size:120}),Object(n.jsx)(fe,{show:!!o,onHide:function(){b(null)},product:null===(t=m.data)||void 0===t?void 0:t.find((function(e){return e.id===o}))}),Object(n.jsx)(ae,{show:!!h,onHide:function(){f(null)},product:null===(r=m.data)||void 0===r?void 0:r.find((function(e){return e.id===h}))})]})]})},ze=r(176),Ge={show:!1,header:null,body:null,autohide:!0,minHeight:"100px",top:"5rem",right:"5rem",delay:5e3},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TOAST":return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},De=function(){var e=Object(y.e)((function(e){return e.toast})),t=Object(y.d)();return Object(n.jsxs)(ze.a,{style:{position:"fixed",top:e.top,right:e.right,zIndex:10},show:e.show,autohide:e.autohide,onClose:function(){return t({type:"UPDATE_TOAST",payload:Ge})},delay:e.delay,children:[Object(n.jsx)(ze.a.Header,{children:e.header}),Object(n.jsx)(ze.a.Body,{children:e.body})]})},Be=r(114),Ve=(r(162),function(){var e=Object(y.d)(),t=Object(y.e)((function(e){return e.user.login}));function r(){return(r=Object(O.a)(p.a.mark((function t(r){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Te.request(r));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){e(ge.request(null))}),[e]),Object(n.jsx)("div",{id:"cover",className:"min-vh-100",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-8 col-sm-10 col-xs-2 mx-auto form p-4",style:{zIndex:1},children:Object(n.jsx)(de.c,{initialValues:{email:"",password:""},onSubmit:function(e){return function(e){return r.apply(this,arguments)}(e)},validationSchema:le,children:function(e){var r=e.dirty,a=e.isValid;return Object(n.jsxs)(de.b,{children:[Object(n.jsx)("h4",{className:"pt-1 pb-3",children:"Sign In"}),Object(n.jsx)(ce.a.Group,{controlId:"email",children:Object(n.jsx)(be,{name:"email",type:"text",placeholder:"Enter email address",autoComplete:"off"})}),Object(n.jsx)(ce.a.Group,{controlId:"password",children:Object(n.jsx)(be,{name:"password",type:"password",placeholder:"Enter password",autoComplete:"off"})}),Object(n.jsx)(he,{type:"submit",loading:t.loading,disabled:t.loading||!a||!r,loadingText:"Logging in..",staticText:"Login"})]})}})})})})})});var _e=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(De,{}),Object(n.jsxs)(Be.c,{children:[Object(n.jsx)(Be.a,{path:"/productList",component:He}),Object(n.jsx)(Be.a,{path:"/",component:Ve})]})]})},Me=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,179)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},We=r(50),Qe=r(143),Ye=r(41);r(164);function $e(e,t){return function(r,n){return r?e(r,n):t}}function Ke(e){return function(t,r){return Object(i.a)(Object(i.a)({},t),Object.keys(e).reduce((function(n,a){return n[a]=e[a](t[a],r),n}),{}))}}function Xe(e){return e.reduce((function(e,t){return function(r,n){return t(e(r,n),n)}}),(function(e,t){return e}))}var Ze={login:W(null),changePassword:W(null),logout:W(null)},et=$e(Xe([Ke({login:Te.reducer,changePassword:Ce.reducer,logout:Ne.reducer})]),Ze),tt={list:W(null),addProduct:W(null),editProduct:W(null),deletePRoduct:W(null)},rt=$e(Xe([Ke({list:Z.reducer,addProduct:ee.reducer,editProduct:te.reducer,deletePRoduct:re.reducer})]),tt),nt={status:W(null),startJob:W(null),stopJob:W(null)},at=$e(Xe([Ke({status:ge.reducer,startJob:we.reducer,stopJob:ke.reducer})]),nt),ct={user:Ze,router:void 0,toast:Ge,products:tt,cron:nt};var st=r(44),ot=r(127),it=function(){function e(t){Object(w.a)(this,e),this.sagas=t}return Object(k.a)(e,[{key:"rootSaga",value:p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)(this.sagas.map((function(e){return e.rootSaga()})));case 2:case"end":return e.stop()}}),e,this)}))}]),e}(),ut=Object(st.a)(),lt=Object(Qe.a)(),dt=function(e,t){var r=Ye.d;return Object(Ye.e)(function(e){return Object(Ye.c)({user:et,router:Object(We.b)(e),toast:Je,products:rt,cron:at})}(e),ct,r(Ye.a.apply(void 0,Object(F.a)(t))))}(ut,[lt,Object(ot.a)(ut)]),jt=new it([new Le,new ne,new Pe]);lt.run(jt.rootSaga.bind(jt)),o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y.a,{store:dt,children:Object(n.jsx)(We.a,{history:ut,children:Object(n.jsx)(_e,{})})})}),document.getElementById("root")),Me()}},[[165,1,2]]]);
//# sourceMappingURL=main.3f5b3279.chunk.js.map