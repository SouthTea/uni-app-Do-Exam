(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exam/exam"],{"07b7":function(t,o,i){"use strict";var e=i("5aff"),s=i.n(e);s.a},1307:function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=0,e=[],s=[],n=0,c={data:function(){return{title:null,tip:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"],mode:0,status:0,autonext:!0,topic:{id:0,type:1,content:"",collect:!1,options:[{text:"",correct:!0},{text:"",correct:!0},{text:"",correct:!1},{text:"",correct:!1}],analysis:""},options_sel:[0,0,0,0],topiccard:[{id:0,content:"测试题目测试题目测试题目测试题目测试题目测试题目"},{id:1,content:"测试题目2测试题目2测试题目2测试题目2测试题目2测试题目"}],showanswer:!1,showcard:!1}},onLoad:function(t){this.title=t.title,n=t.id,this.mode=t.mode,this.status=t.status,this.gettopics(0,!0),this.topiccard=getApp().globalData.topiccard,1==this.mode&&1==this.status&&(this.showanswer=!0)},onShow:function(){this.autonext=t.getStorageSync("autonext")},methods:{setautonext:function(){this.autonext=!this.autonext,t.setStorageSync("autonext",this.autonext)},click2:function(t){var o=t.timeStamp;o-i<350&&this.collect(),i=o},collect:function(){var o=this;t.request({method:"POST",url:"https://1312.aiepoch.cn/api/v1/juan/addcollect",data:{openid:t.getStorageSync("openid"),quesdataid:o.topic.qdid,iscollect:!this.topic.collect},success:function(t){console.log(t),200==t.statusCode&&1==t.data.code&&(o.topic.collect=t.data.data)}})},gettopics:function(o){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=this;t.request({method:"GET",url:"https://1312.aiepoch.cn/api/v1/juan/gettopics",data:{openid:t.getStorageSync("openid"),recordid:n,i:o},success:function(o){console.log(o),200==o.statusCode&&(1==o.data.code?(s=o.data.data.topics,e=o.data.data.options_sels,i&&(c.topic=s[1],c.options_sel=e[1])):t.showModal({title:"获取题目",content:o.data.message,showCancel:!1}))}})},to:function(t){t!=this.topic.id&&(this.answercount=0,0==this.mode&&(this.showanswer=!1),t+1==this.topic.id?this.tolast():t-1==this.topic.id?this.tonext():this.gettopics(t,!0))},tolast:function(){this.topic=s[0],this.options_sel=e[0],this.gettopics(this.topic.id)},tonext:function(){this.topic=s[2],this.options_sel=e[2],this.gettopics(this.topic.id)},option_sel:function(o){if(1!=this.mode||1!=this.status){var i=this.options_sel[o];if(1==this.topic.type)this.options_sel[o]=this.options_sel[o]?0:1;else{for(var e=0;e<this.topic.options.length;e++)this.options_sel[e]=0;this.options_sel[o]=1}if(0!=this.mode||1==this.topic.type||this.showanswer||(this.showanswer=!0),i!=this.options_sel[o]){for(var s=0,c="",a=this,d=0;d<this.options_sel.length;d++)s+=this.options_sel[d],c+=this.options_sel[d]?"1":"0";this.options_sel.push(0),this.options_sel.pop(),0==s?(c="NULL",this.topiccard[this.topic.id].class=""):this.topiccard[this.topic.id].class="select",t.request({method:"GET",url:"https://1312.aiepoch.cn/api/v1/juan/updatesel",data:{openid:t.getStorageSync("openid"),recordid:n,index:a.topic.id,options:c},success:function(o){console.log(o),200==o.statusCode&&(-1==o.data.code?t.showModal({title:"系统繁忙",content:o.data.message,showCancel:!1}):0!=a.mode||o.data.data?0==a.mode&&o.data.data&&a.autonext&&a.topic.id<a.topiccard.length-1?a.tonext():1!=a.mode&&(a.showanswer=!0):a.topiccard[a.topic.id].class="error")}})}}},sumbit:function(){if(1==this.mode&&0==this.status){t.request({method:"POST",url:"https://1312.aiepoch.cn/api/v1/juan/sumbit",data:{openid:t.getStorageSync("openid"),recordid:n}})}t.navigateBack()}}};o.default=c}).call(this,i("543d")["default"])},"5aff":function(t,o,i){},8644:function(t,o,i){"use strict";i.r(o);var e=i("e6e6"),s=i("ccc2");for(var n in s)"default"!==n&&function(t){i.d(o,t,(function(){return s[t]}))}(n);i("07b7");var c,a=i("f0c5"),d=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);o["default"]=d.exports},acbc:function(t,o,i){"use strict";(function(t){i("efe7");e(i("66fd"));var o=e(i("8644"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(o.default)}).call(this,i("543d")["createPage"])},ccc2:function(t,o,i){"use strict";i.r(o);var e=i("1307"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(o,t,(function(){return e[t]}))}(n);o["default"]=s.a},e6e6:function(t,o,i){"use strict";i.d(o,"b",(function(){return s})),i.d(o,"c",(function(){return n})),i.d(o,"a",(function(){return e}));var e={uniIcons:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(i.bind(null,"7df4"))}},s=function(){var t=this,o=t.$createElement;t._self._c;t._isMounted||(t.e0=function(o){t.showcard=!t.showcard})},n=[]}},[["acbc","common/runtime","common/vendor"]]]);