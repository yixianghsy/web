(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8da5f01c"],{"40a1":function(t,a,e){},"6f9e":function(t,a,e){"use strict";var i=e("40a1"),s=e.n(i);s.a},"8e45":function(t,a,e){},bb51:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"main"},[e("blog-list")],1)])])},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list"},t._l(t.blogList,(function(a){return e("div",{key:a.id,staticClass:"card"},[e("router-link",{attrs:{to:"/detail/"+a.id}},[e("p",{staticClass:"title"},[t._v(t._s(a.title))])]),e("p",{staticClass:"date"},[t._v(t._s(a.create_time))])],1)})),0)},c=[],l={data:function(){return{blogList:[]}},methods:{getBlogList:function(){var t=this;this.$axios.get("/api/article/allList").then((function(a){0===a.data.code&&(t.blogList=a.data.data)})).catch((function(t){console.log(t)}))}},created:function(){this.getBlogList()}},o=l,r=(e("fe61"),e("2877")),u=Object(r["a"])(o,n,c,!1,null,"fcda64c8",null),f=u.exports,d={name:"Home",components:{BlogList:f}},p=d,v=(e("6f9e"),Object(r["a"])(p,i,s,!1,null,"ffd82e38",null));a["default"]=v.exports},fe61:function(t,a,e){"use strict";var i=e("8e45"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-8da5f01c.3b606501.js.map