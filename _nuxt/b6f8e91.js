(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(e,t,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("60edeb16",content,!0,{sourceMap:!1})},364:function(e,t,n){"use strict";n(357)},365:function(e,t,n){var r=n(37)(!1);r.push([e.i,'.l-news[data-v-1be7cf1a]{width:100%;height:calc(100vh - 140px);background-color:var(--bg-element);border-radius:var(--br-bg);padding:25px 15px 25px 25px;box-shadow:0 0 15px 0 var(--bs-c-element);transition:.3s}.l-news__box[data-v-1be7cf1a]{display:flex;flex-direction:column;grid-gap:5px;gap:5px;padding-right:10px;max-height:calc(100vh - 190px);border-radius:var(--br-mc);overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:var(--bg-page) var(--c-border);transition:.3s}.l-news__box[data-v-1be7cf1a]::-webkit-scrollbar{width:8px}.l-news__box[data-v-1be7cf1a]::-webkit-scrollbar-track{background-color:var(--c-border);border-radius:4px;-webkit-transition:.3s;transition:.3s}.l-news__box[data-v-1be7cf1a]::-webkit-scrollbar-thumb{background-color:var(--bg-page);border-radius:4px;-webkit-transition:.3s;transition:.3s}.l-news__box__element[data-v-1be7cf1a]{position:relative;background-color:var(--bg-s-el);display:flex;justify-content:space-between;border-radius:15px;padding-right:15px}.l-news__box__element[data-v-1be7cf1a],.l-news__box__element *[data-v-1be7cf1a]{transition:.3s}.l-news__box__element>div[data-v-1be7cf1a]{padding:15px 0}.l-news__box__element>div[data-v-1be7cf1a]:first-child{padding:0}.l-news__box__element__img[data-v-1be7cf1a]{position:relative;overflow:hidden;display:flex;align-items:center;flex-basis:25%;max-width:300px;border:3px solid var(--bg-s-el);border-right:0;border-radius:var(--br-mc) 0 0 var(--br-mc);background-color:var(--bg-element);transition:.3s}.l-news__box__element__img[data-v-1be7cf1a]:before{width:100%;height:100%;content:"";display:block;position:absolute;background:linear-gradient(90deg,rgba(44,44,65,0),#2c2c41 25%,hsla(0,0%,94.1%,0) 50%,#f0f0f0 75%,hsla(0,0%,94.1%,0)) var(--lbg-s-el-pos);background-size:400% 100%;z-index:1;transition:.3s}.l-news__box__element__img__logo[data-v-1be7cf1a]{font-size:30px;padding:15px;width:100%;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.l-news__box__element__img__logo svg[data-v-1be7cf1a]{color:var(--light-purple)}.l-news__box__element__img__logo span[data-v-1be7cf1a]{color:var(--c-text-logo);font-weight:700;transition:.3s}.l-news__box__element__img img[data-v-1be7cf1a]{position:absolute;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.l-news__box__element__title[data-v-1be7cf1a]{align-self:center;font-size:24px;font-weight:500;letter-spacing:1px;flex-basis:25%;white-space:pre-wrap;line-height:26px;padding-right:25px;color:var(--c-stnd-text)}.l-news__box__element__content[data-v-1be7cf1a]{flex-basis:40%;display:flex;align-items:center;white-space:normal;line-height:18px;font-weight:300;color:var(--c-blur-text)}.l-news__box__element__time[data-v-1be7cf1a]{display:flex;justify-content:flex-end;align-self:flex-end;flex-basis:10%;font-size:12px;color:var(--c-el-time);white-space:nowrap}@media (max-width:1000px){.l-news[data-v-1be7cf1a]{max-height:calc(100% - 70px);padding:20px 10px 20px 20px;border-radius:var(--br-md)}.l-news__box[data-v-1be7cf1a]{max-height:100%}.l-news__box__element[data-v-1be7cf1a]{flex-direction:column;padding-right:0}.l-news__box__element__img[data-v-1be7cf1a]{min-width:100%;max-width:100%;border-radius:var(--br-mc);border-right:3px solid var(--bg-s-el)}.l-news__box__element__img[data-v-1be7cf1a]:before{display:none}.l-news__box__element__img img[data-v-1be7cf1a]{position:relative}.l-news__box__element__content[data-v-1be7cf1a],.l-news__box__element__time[data-v-1be7cf1a],.l-news__box__element__title[data-v-1be7cf1a]{padding:5px 10px!important}}',""]),e.exports=r},369:function(e,t,n){"use strict";n.r(t);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(50);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var _={name:"IndexPage",head:function(){return{title:"Resumer: News"}},data:function(){return{dateFilter:{day:"numeric",month:"short",hour:"numeric",minute:"numeric",hour12:!1}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["GET_NEWS"]))},c=_,d=(n(364),n(25)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"l-news"},[t("div",{staticClass:"l-news__box"},e._l(e.GET_NEWS,(function(element,n){return t("div",{key:"news-el-".concat(n),staticClass:"l-news__box__element"},[t("div",{staticClass:"l-news__box__element__img"},[element.banner?t("img",{attrs:{src:"/news/img/".concat(element.banner),alt:element.banner}}):t("span",{staticClass:"l-news__box__element__img__logo"},[t("lfa",{attrs:{icon:["fas","sheet-plastic"]}}),e._v(" "),t("span",[e._v("Resumer")])],1)]),e._v(" "),t("div",{staticClass:"l-news__box__element__title"},[e._v(e._s(element.title))]),e._v(" "),t("div",{staticClass:"l-news__box__element__content"},[t("span",[e._v("\n          "+e._s(element.content)+"\n        ")])]),e._v(" "),t("div",{staticClass:"l-news__box__element__time"},[e._v(e._s(new Date(element.timestamp).toLocaleDateString("en-US",e.dateFilter)))])])})),0)])}),[],!1,null,"1be7cf1a",null);t.default=component.exports}}]);