(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fa392c"],{aab4:function(t,e,a){"use strict";a("99af");var n=a("b775"),o="/admin/product/category";e["a"]={getPageList:function(t,e,a){return Object(n["a"])({url:"".concat(o,"/").concat(t,"/").concat(e),method:"get",params:a})},getById:function(t){return Object(n["a"])({url:"".concat(o,"/get/").concat(t),method:"get"})},save:function(t){return Object(n["a"])({url:"".concat(o,"/save"),method:"post",data:t})},updateById:function(t){return Object(n["a"])({url:"".concat(o,"/update"),method:"put",data:t})},removeById:function(t){return Object(n["a"])({url:"".concat(o,"/remove/").concat(t),method:"delete"})},removeRows:function(t){return Object(n["a"])({url:"".concat(o,"/batchRemove"),method:"delete",data:t})},findAllList:function(){return Object(n["a"])({url:"".concat(o,"/findAllList"),method:"get"})}}},dbb5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"输入搜索："}},[a("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"关键字"},model:{value:t.searchObj.name,callback:function(e){t.$set(t.searchObj,"name",e)},expression:"searchObj.name"}})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.fetchData()}}},[t._v("查询")]),a("el-button",{attrs:{type:"default"},on:{click:function(e){return t.resetData()}}},[t._v("清空")])],1)],1),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets",staticStyle:{"margin-top":"5px"}}),a("span",{staticStyle:{"margin-top":"5px"}},[t._v("数据列表")]),a("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.add()}}},[t._v("添加")]),a("el-button",{staticClass:"btn-add",staticStyle:{margin:"0 10px"},attrs:{size:"mini"},on:{click:function(e){return t.removeRows()}}},[t._v("批量删除")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.list,stripe:"",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"序号",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s((t.page-1)*t.limit+e.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间"}}),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/product/category/edit/"+e.row.id}},[a("el-button",{attrs:{type:"text",size:"mini"}},[t._v("修改")])],1),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.removeDataById(e.row.id)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":t.page,total:t.total,"page-size":t.limit,"page-sizes":[5,10,20,30,40,50,100],layout:"sizes, prev, pager, next, jumper, ->, total, slot"},on:{"current-change":t.fetchData,"size-change":t.changeSize}})],1)},o=[],i=(a("d3b7"),a("159b"),a("aab4")),c={data:function(){return{listLoading:!0,list:null,total:0,page:1,limit:10,searchObj:{},multipleSelection:[]}},created:function(){console.log("list created......"),this.fetchData()},mounted:function(){console.log("list mounted......")},methods:{changeSize:function(t){console.log(t),this.limit=t,this.fetchData(1)},add:function(){this.$router.push({path:"/product/category/add"})},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;console.log("翻页。。。"+e),this.page=e,i["a"].getPageList(this.page,this.limit,this.searchObj).then((function(e){t.list=e.data.records,t.total=e.data.total,t.listLoading=!1}))},resetData:function(){console.log("重置查询表单"),this.searchObj={},this.fetchData()},removeDataById:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return i["a"].removeById(t)})).then((function(t){e.fetchData(e.page),t.code&&e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(t){console.log("handleSelectionChange......"),console.log(t),this.multipleSelection=t},removeRows:function(){var t=this;console.log("removeRows......"),0!==this.multipleSelection.length?this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=[];return t.multipleSelection.forEach((function(t){e.push(t.id)})),i["a"].removeRows(e)})).then((function(e){t.fetchData(t.page),e.code&&t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})})):this.$message({type:"warning",message:"请选择要删除的记录!"})}}},s=c,l=a("2877"),r=Object(l["a"])(s,n,o,!1,null,"564f5f0a",null);e["default"]=r.exports}}]);