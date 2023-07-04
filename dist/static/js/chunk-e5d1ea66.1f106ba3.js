(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5d1ea66"],{"04ee":function(t,i,e){},"31a6":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container"},[e("h4",[t._v("活动信息")]),e("table",{staticClass:"table table-striped table-condenseda table-bordered",attrs:{width:"100%"}},[e("tbody",[e("tr",[e("th",{attrs:{width:"15%"}},[t._v("活动标题")]),e("td",{attrs:{width:"35%"}},[e("b",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.activityInfo.activityName))])]),e("th",{attrs:{width:"15%"}},[t._v("活动时间")]),e("td",{attrs:{width:"35%"}},[t._v(t._s(t.activityInfo.startTime)+"至"+t._s(t.activityInfo.endTime))])]),e("tr",[e("th",[t._v("活动类型")]),e("td",[t._v(t._s(t.activityInfo.activityTypeString))]),e("th",[t._v("创建时间")]),e("td",[t._v(t._s(t.activityInfo.createTime))])]),e("tr",[e("th",[t._v("活动描述")]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(t.activityInfo.activityDesc))])])])]),e("el-dialog",{attrs:{title:"添加规则",visible:t.dialogRuleVisible,width:"490px"},on:{"update:visible":function(i){t.dialogRuleVisible=i}}},[e("el-form",{attrs:{"label-width":"120px"}},["FULL_REDUCTION"==t.activityInfo.activityType?e("el-form-item",{attrs:{label:"满减金额"}},[e("el-input",{model:{value:t.activityRule.conditionAmount,callback:function(i){t.$set(t.activityRule,"conditionAmount",i)},expression:"activityRule.conditionAmount"}})],1):t._e(),"FULL_REDUCTION"==t.activityInfo.activityType?e("el-form-item",{attrs:{label:"优惠金额"}},[e("el-input",{model:{value:t.activityRule.benefitAmount,callback:function(i){t.$set(t.activityRule,"benefitAmount",i)},expression:"activityRule.benefitAmount"}})],1):t._e(),"FULL_DISCOUNT"==t.activityInfo.activityType?e("el-form-item",{attrs:{label:"满减件数"}},[e("el-input",{model:{value:t.activityRule.conditionNum,callback:function(i){t.$set(t.activityRule,"conditionNum",i)},expression:"activityRule.conditionNum"}})],1):t._e(),"FULL_DISCOUNT"==t.activityInfo.activityType?e("el-form-item",{attrs:{label:"优惠折扣"}},[e("el-input",{model:{value:t.activityRule.benefitDiscount,callback:function(i){t.$set(t.activityRule,"benefitDiscount",i)},expression:"activityRule.benefitDiscount"}})],1):t._e(),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]),e("el-button",{attrs:{type:""},on:{click:function(i){t.dialogRuleVisible=!1}}},[t._v("取消")])],1)],1)],1),e("h4",[t._v(" 规则列表 "),e("el-button",{attrs:{type:"",size:"mini"},on:{click:function(i){t.dialogRuleVisible=!0}}},[t._v("添加规则")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.activityRuleList,border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"序号",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v(" "+t._s(i.$index+1)+" ")]}}])}),e("el-table-column",{attrs:{label:"活动类型"}},[t._v(" "+t._s("FULL_REDUCTION"==t.activityInfo.activityType?"满减":"满量打折")+" ")]),"FULL_REDUCTION"==t.activityInfo.activityType?e("el-table-column",{attrs:{prop:"conditionAmount",label:"满减金额"}}):t._e(),"FULL_REDUCTION"==t.activityInfo.activityType?e("el-table-column",{attrs:{prop:"benefitAmount",label:"优惠金额"}}):t._e(),"FULL_DISCOUNT"==t.activityInfo.activityType?e("el-table-column",{attrs:{prop:"conditionNum",label:"满减量数"}}):t._e(),"FULL_DISCOUNT"==t.activityInfo.activityType?e("el-table-column",{attrs:{prop:"benefitDiscount",label:"优惠折扣"}}):t._e(),e("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.removeDataById(i.$index)}}},[t._v("删除")])]}}])})],1),e("el-dialog",{attrs:{title:"添加活动范围",visible:t.dialogRangVisible,width:"490px"},on:{"update:visible":function(i){t.dialogRangVisible=i}}},[e("div",{staticStyle:{"margin-top":"20px"}},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[e("el-form-item",[e("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"400px"},attrs:{"fetch-suggestions":t.querySearch,"trigger-on-focus":!1,placeholder:"请输入关键字，选择活动商品","value-key":"skuName"},on:{select:t.selectData},model:{value:t.keyword,callback:function(i){t.keyword=i},expression:"keyword"}})],1),e("el-form-item",[e("el-button",{attrs:{type:""},on:{click:function(i){t.dialogRangVisible=!1}}},[t._v("取消")])],1)],1)],1)]),e("h4",[t._v(" 活动范围列表 "),e("el-button",{attrs:{type:"",size:"mini"},on:{click:function(i){t.dialogRangVisible=!0}}},[t._v("添加活动范围")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.skuInfoList,border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"序号",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v(" "+t._s(i.$index+1)+" ")]}}])}),e("el-table-column",{attrs:{prop:"id",label:"SKU ID",width:"100"}}),e("el-table-column",{attrs:{label:"图片",width:"320",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticClass:"info"},[e("div",{staticClass:"pic"},[e("img",{staticStyle:{width:"50px"},attrs:{src:t.row.imgUrl,alt:"scope.row.title"}})])])]}}])}),e("el-table-column",{attrs:{prop:"skuName",label:"名称"}}),e("el-table-column",{attrs:{prop:"price",label:"价格",width:"70"}}),e("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.removeSkuDataById(i.$index)}}},[t._v("删除")])]}}])})],1),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-form",{attrs:{"label-width":"0px"}},[e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),e("el-button",{on:{click:t.back}},[t._v("返回")])],1)],1)],1)],1)},a=[],o=(e("d3b7"),e("159b"),e("a434"),e("9de8")),l={activityId:"",conditionAmount:"",conditionNum:"",benefitAmount:"",benefitDiscount:"",benefitLevel:""},c={data:function(){return{listLoading:!0,activityRule:l,saveBtnDisabled:!1,dialogRuleVisible:!1,activityInfo:null,activityRuleList:[],dialogRangVisible:!1,keyword:"",skuInfoList:[],dialogCouponVisible:!1,couponInfoList:[]}},watch:{$route:function(t,i){console.log("路由变化......"),console.log(t),console.log(i),this.init()}},created:function(){console.log("form created ......"),this.init()},methods:{init:function(){var t=this.$route.params.id;this.fetchDataById(t),this.fetchRuleDataById(t)},add:function(){this.activityRuleList.push({activityId:this.activityInfo.id,conditionAmount:this.activityRule.conditionAmount,conditionNum:this.activityRule.conditionNum,benefitAmount:this.activityRule.benefitAmount,benefitDiscount:this.activityRule.benefitDiscount}),this.activityRule=l,this.dialogRuleVisible=!1},save:function(){var t=this,i=[];this.skuInfoList.forEach((function(t){i.push({skuId:t.id})}));var e=[];this.couponInfoList.forEach((function(t){e.push(t.id)}));var n={activityId:this.activityInfo.id,activityRuleList:this.activityRuleList,activitySkuList:i,couponIdList:e};o["a"].saveActivityRule(n).then((function(i){t.$message.success(i.message),t.$router.push({path:"/activity/activityInfo/list"})}))},removeDataById:function(t){this.activityRuleList.splice(t,1)},back:function(){this.$router.push({path:"/activity/activityInfo/list"})},fetchRuleDataById:function(t){var i=this;o["a"].findActivityRuleList(t).then((function(t){i.activityRuleList=t.data.activityRuleList||[],i.skuInfoList=t.data.skuInfoList||[],i.couponInfoList=t.data.couponInfoList||[],i.listLoading=!1}))},fetchDataById:function(t){var i=this;o["a"].getById(t).then((function(t){i.activityInfo=t.data}))},querySearch:function(t,i){console.log(t),console.log(i),o["a"].findSkuInfoByKeyword(t).then((function(t){i(t.data)}))},selectData:function(t){this.skuInfoList.push(t),this.dialogRangVisible=!1},removeSkuDataById:function(t){this.skuInfoList.splice(t,1)}}},s=c,u=(e("7b5a"),e("2877")),r=Object(u["a"])(s,n,a,!1,null,null,null);i["default"]=r.exports},"7b5a":function(t,i,e){"use strict";e("04ee")},"9de8":function(t,i,e){"use strict";e("99af");var n=e("b775"),a="/admin/activity/activityInfo";i["a"]={getPageList:function(t,i){return Object(n["a"])({url:"".concat(a,"/").concat(t,"/").concat(i),method:"get"})},getById:function(t){return Object(n["a"])({url:"".concat(a,"/get/").concat(t),method:"get"})},save:function(t){return Object(n["a"])({url:"".concat(a,"/save"),method:"post",data:t})},updateById:function(t){return Object(n["a"])({url:"".concat(a,"/update"),method:"put",data:t})},removeById:function(t){return Object(n["a"])({url:"".concat(a,"/remove/").concat(t),method:"delete"})},removeRows:function(t){return Object(n["a"])({url:"".concat(a,"/batchRemove"),method:"delete",data:t})},findActivityRuleList:function(t){return Object(n["a"])({url:"".concat(a,"/findActivityRuleList/").concat(t),method:"get"})},saveActivityRule:function(t){return Object(n["a"])({url:"".concat(a,"/saveActivityRule"),method:"post",data:t})},findSkuInfoByKeyword:function(t){return Object(n["a"])({url:"".concat(a,"/findSkuInfoByKeyword/").concat(t),method:"get"})}}},a434:function(t,i,e){"use strict";var n=e("23e7"),a=e("23cb"),o=e("a691"),l=e("50c4"),c=e("7b0b"),s=e("65f0"),u=e("8418"),r=e("1dde"),d=e("ae40"),f=r("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),y=Math.max,b=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,i){var e,n,r,d,f,v,h=c(this),g=l(h.length),I=a(t,g),_=arguments.length;if(0===_?e=n=0:1===_?(e=0,n=g-I):(e=_-2,n=b(y(o(i),0),g-I)),g+e-n>m)throw TypeError(p);for(r=s(h,n),d=0;d<n;d++)f=I+d,f in h&&u(r,d,h[f]);if(r.length=n,e<n){for(d=I;d<g-n;d++)f=d+n,v=d+e,f in h?h[v]=h[f]:delete h[v];for(d=g;d>g-n+e;d--)delete h[d-1]}else if(e>n)for(d=g-n;d>I;d--)f=d+n-1,v=d+e-1,f in h?h[v]=h[f]:delete h[v];for(d=0;d<e;d++)h[d+I]=arguments[d+2];return h.length=g-n+e,r}})}}]);