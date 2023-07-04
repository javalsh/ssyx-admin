(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-534aa113"],{4617:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{attrs:{type:"text",width:"100",placeholder:"关键字",clearable:""},model:{value:t.searchObj.keyword,callback:function(e){t.$set(t.searchObj,"keyword",e)},expression:"searchObj.keyword"}})],1),a("el-form-item",{attrs:{label:"商品分类",prop:"tmId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.searchObj.categoryId,callback:function(e){t.$set(t.searchObj,"categoryId",e)},expression:"searchObj.categoryId"}},t._l(t.categoryList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"商品类型"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchObj.skuType,callback:function(e){t.$set(t.searchObj,"skuType",e)},expression:"searchObj.skuType"}},[a("el-option",{attrs:{value:"0",label:"普通商品"}}),a("el-option",{attrs:{value:"1",label:"秒杀商品"}})],1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.fetchData()}}},[t._v("查询")]),a("el-button",{attrs:{type:"default"},on:{click:t.resetSearch}},[t._v("清空")])],1)],1),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets",staticStyle:{"margin-top":"5px"}}),a("span",{staticStyle:{"margin-top":"5px"}},[t._v("数据列表")]),a("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.add()}}},[t._v("添加")]),a("el-button",{staticClass:"btn-add",staticStyle:{margin:"0 10px"},attrs:{size:"mini"},on:{click:function(e){return t.removeRows()}}},[t._v("批量删除")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,stripe:"",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"SUK_ID/sku编号",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("ID："+t._s(e.row.id))]),a("p",[t._v("编号："+t._s(e.row.skuCode))])]}}])}),a("el-table-column",{attrs:{prop:"skuName",label:"sku名称"}}),a("el-table-column",{attrs:{label:"商品图片",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"80px"},attrs:{src:t.row.imgUrl}})]}}])}),a("el-table-column",{attrs:{label:"库存/预警库存/..",width:"140px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("库存："+t._s(e.row.stock))]),a("p",[t._v("预警库存："+t._s(e.row.lowStock))]),a("p",[t._v("锁定库存："+t._s(e.row.lockStock))]),a("p",[t._v("限购个数："+t._s(e.row.perLimit))])]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格/市场价",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("价格：￥"+t._s(e.row.price))]),a("p",[t._v("市场价："+t._s(e.row.marketPrice))])]}}])}),a("el-table-column",{attrs:{prop:"sale",label:"销量"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序"}}),a("el-table-column",{attrs:{label:"标签",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("上架/下架： "),a("el-switch",{attrs:{"inactive-value":0,"active-value":1},on:{change:function(a){return t.handlePublishStatusChange(e.$index,e.row)}},model:{value:e.row.publishStatus,callback:function(a){t.$set(e.row,"publishStatus",a)},expression:"scope.row.publishStatus"}})],1),a("p",[t._v("审核状态： "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.handleStatusChange(e.$index,e.row)}},model:{value:e.row.checkStatus,callback:function(a){t.$set(e.row,"checkStatus",a)},expression:"scope.row.checkStatus"}})],1),a("p",[t._v("新人专享： "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.handleNewPersonChange(e.$index,e.row)}},model:{value:e.row.isNewPerson,callback:function(a){t.$set(e.row,"isNewPerson",a)},expression:"scope.row.isNewPerson"}})],1)]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/product/skuInfo/edit/"+e.row.id}},[a("el-button",{attrs:{type:"text",size:"mini"}},[t._v("修改")])],1),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.removeDataById(e.row.id)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":t.page,total:t.total,"page-size":t.limit,"page-sizes":[5,10,20,30,40,50,100],layout:"sizes, prev, pager, next, jumper, ->, total, slot"},on:{"current-change":t.fetchData,"size-change":t.changeSize}})],1)},o=[],c=(a("d3b7"),a("159b"),a("b7c5")),s=a("aab4"),i={data:function(){return{listLoading:!0,list:null,total:0,page:1,limit:10,searchObj:{},multipleSelection:[],categoryList:[]}},created:function(){console.log("list created......"),this.fetchData(),this.fetchCategoryList()},mounted:function(){console.log("list mounted......")},methods:{changeSize:function(t){console.log(t),this.limit=t,this.fetchData(1)},add:function(){this.$router.push({path:"/product/skuInfo/add"})},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;console.log("翻页。。。"+e),this.page=e,c["a"].getPageList(this.page,this.limit,this.searchObj).then((function(e){t.list=e.data.records,t.total=e.data.total,t.listLoading=!1}))},fetchCategoryList:function(){var t=this;s["a"].findAllList().then((function(e){t.categoryList=e.data}))},resetData:function(){console.log("重置查询表单"),this.searchObj={},this.fetchData()},removeDataById:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return c["a"].removeById(t)})).then((function(t){e.fetchData(e.page),t.code&&e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(t){console.log("handleSelectionChange......"),console.log(t),this.multipleSelection=t},removeRows:function(){var t=this;console.log("removeRows......"),0!==this.multipleSelection.length?this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=[];return t.multipleSelection.forEach((function(t){e.push(t.id)})),c["a"].removeRows(e)})).then((function(e){t.fetchData(t.page),e.code&&t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})})):this.$message({type:"warning",message:"请选择要删除的记录!"})},handlePublishStatusChange:function(t,e){var a=this;if(1!==e.checkStatus)return this.$message({type:"info",message:"审核通过才可以上级或下架"}),void(e.publishStatus=1===e.publishStatus?0:1);c["a"].publish(e.id,e.publishStatus).then((function(t){a.$message({type:"info",message:"操作成功"}),a.fetchData()}))},handleStatusChange:function(t,e){var a=this;c["a"].check(e.id,e.checkStatus).then((function(t){a.$message({type:"info",message:"操作成功"}),a.fetchData()}))},handleNewPersonChange:function(t,e){var a=this;c["a"].isNewPerson(e.id,e.isNewPerson).then((function(t){a.$message({type:"info",message:"操作成功"}),a.fetchData()}))}}},r=i,l=a("2877"),u=Object(l["a"])(r,n,o,!1,null,null,null);e["default"]=u.exports},aab4:function(t,e,a){"use strict";a("99af");var n=a("b775"),o="/admin/product/category";e["a"]={getPageList:function(t,e,a){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/").concat(e),method:"get",params:a})},getById:function(t){return Object(n["a"])({url:"".concat(o,"/get/").concat(t),method:"get"})},save:function(t){return Object(n["a"])({url:"".concat(o,"/save"),method:"post",data:t})},updateById:function(t){return Object(n["a"])({url:"".concat(o,"/update"),method:"put",data:t})},removeById:function(t){return Object(n["a"])({url:"".concat(o,"/remove/").concat(t),method:"delete"})},removeRows:function(t){return Object(n["a"])({url:"".concat(o,"/batchRemove"),method:"delete",data:t})},findAllList:function(){return Object(n["a"])({url:"".concat(o,"/findAllList"),method:"get"})}}},b7c5:function(t,e,a){"use strict";a("99af");var n=a("b775"),o="/admin/product/skuInfo";e["a"]={getPageList:function(t,e,a){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/").concat(e),method:"get",params:a})},getById:function(t){return Object(n["a"])({url:"".concat(o,"/get/").concat(t),method:"get"})},save:function(t){return Object(n["a"])({url:"".concat(o,"/save"),method:"post",data:t})},updateById:function(t){return Object(n["a"])({url:"".concat(o,"/update"),method:"put",data:t})},removeById:function(t){return Object(n["a"])({url:"".concat(o,"/remove/").concat(t),method:"delete"})},removeRows:function(t){return Object(n["a"])({url:"".concat(o,"/batchRemove"),method:"delete",data:t})},publish:function(t,e){return Object(n["a"])({url:"".concat(o,"/publish/").concat(t,"/").concat(e),method:"get"})},check:function(t,e){return Object(n["a"])({url:"".concat(o,"/check/").concat(t,"/").concat(e),method:"get"})},isNewPerson:function(t,e){return Object(n["a"])({url:"".concat(o,"/isNewPerson/").concat(t,"/").concat(e),method:"get"})}}}}]);