(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-562a4334"],{"920f":function(e,t,a){"use strict";a("99af");var i=a("b775"),r="/admin/order/orderInfo";t["a"]={getPageList:function(e,t,a){return Object(i["a"])({url:"".concat(r,"/").concat(e,"/").concat(t),method:"get",params:a})},show:function(e){return Object(i["a"])({url:"".concat(r,"/get/").concat(e),method:"get"})},deliver:function(e){return Object(i["a"])({url:"".concat(r,"/deliver"),method:"post",data:e})},findReceiveList:function(e,t){return Object(i["a"])({url:"".concat(r,"/findReceiveList/").concat(e,"/").concat(t),method:"get"})},findLeaderReceiveList:function(e,t){return Object(i["a"])({url:"".concat(r,"/findLeaderReceiveList/").concat(e,"/").concat(t),method:"get"})}}},cf52:function(e,t,a){"use strict";a("99af");var i=a("b775"),r="/admin/sys/ware";t["a"]={getPageList:function(e,t,a){return Object(i["a"])({url:"".concat(r,"/").concat(e,"/").concat(t),method:"get",params:a})},getById:function(e){return Object(i["a"])({url:"".concat(r,"/get/").concat(e),method:"get"})},save:function(e){return Object(i["a"])({url:"".concat(r,"/save"),method:"post",data:e})},updateById:function(e){return Object(i["a"])({url:"".concat(r,"/update"),method:"put",data:e})},removeById:function(e){return Object(i["a"])({url:"".concat(r,"/remove/").concat(e),method:"delete"})},removeRows:function(e){return Object(i["a"])({url:"".concat(r,"/batchRemove"),method:"delete",data:e})},findAllList:function(){return Object(i["a"])({url:"".concat(r,"/findAllList"),method:"get"})}}},f3ff:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("el-form",{attrs:{inline:""}},[a("el-form-item",{attrs:{label:"下单时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择开始日期","value-format":"yyyy-MM-dd"},model:{value:e.searchObj.date,callback:function(t){e.$set(e.searchObj,"date",t)},expression:"searchObj.date"}})],1),a("el-form-item",{attrs:{label:"仓库"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.fetchLeaderList},model:{value:e.searchObj.wareId,callback:function(t){e.$set(e.searchObj,"wareId",t)},expression:"searchObj.wareId"}},e._l(e.wareList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.fetchData()}}},[e._v("查询")]),a("el-button",{attrs:{type:"default"},on:{click:e.resetSearch}},[e._v("清空")])],1)],1),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets",staticStyle:{"margin-top":"5px"}}),a("span",{staticStyle:{"margin-top":"5px"}},[e._v("数据列表")]),a("el-button",{staticClass:"btn-add",staticStyle:{margin:"0 10px"},attrs:{size:"mini"}},[e._v("打印")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"数据正在加载......",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),a("el-table-column",{attrs:{prop:"leaderName",label:"团长",width:"90"}}),a("el-table-column",{attrs:{prop:"leaderPhone",label:"团长电话",width:"100"}}),a("el-table-column",{attrs:{prop:"takeName",label:"提货点",width:"130"}}),a("el-table-column",{attrs:{prop:"skuNum",label:"商品数量",width:"80"}}),a("el-table-column",{attrs:{prop:"driverName",label:"司机",width:"90"}}),a("el-table-column",{attrs:{prop:"driverPhone",label:"司机电话",width:"100"}}),a("el-table-column",{attrs:{prop:"deliverDate",label:"配送日期",width:"100"}}),a("el-table-column",{attrs:{prop:"createTime",label:"配送时间"}}),a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v(e._s(0==t.row.deliverStatus?"未发货":1==t.row.deliverStatus?"已发货":"已收货"))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.fetchReceiveList(t.row.leaderId)}}},[e._v("发货明细")]),0==t.row.deliverStatus?a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.send(t.row.leaderId)}}},[e._v("发货")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:"发货清单",visible:e.receiveDialogVisible,width:"40%"},on:{"update:visible":function(t){e.receiveDialogVisible=t}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.receiveList,"element-loading-text":"数据正在加载......",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),a("el-table-column",{attrs:{prop:"skuName",label:"商品"}}),a("el-table-column",{attrs:{prop:"skuNum",label:"商品数量",width:"130"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.receiveDialogVisible=!1}}},[e._v("取 消")])],1)],1),a("el-dialog",{attrs:{title:"发货",visible:e.sendDialogVisible,width:"40%"},on:{"update:visible":function(t){e.sendDialogVisible=t}}},[a("el-form",{ref:"flashPromotionForm",attrs:{"label-width":"150px",size:"small"}},[a("el-form-item",{attrs:{label:"司机："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.driver,callback:function(t){e.driver=t},expression:"driver"}},e._l(e.driverList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),a("el-form-item",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.sendDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.sendSave()}}},[e._v("确 定")])]}}])})],1)],1)],1)},r=[],n=(a("b0c0"),a("920f")),l=a("b775"),o="/admin/user/driver",c={findDriver:function(e){return Object(l["a"])({url:"".concat(o,"/findDriver/").concat(e),method:"get"})}},s=a("cf52"),d={data:function(){return{listLoading:!1,list:null,searchObj:{},wareList:[],leaderList:[],receiveDialogVisible:!1,receiveList:[],sendDialogVisible:!1,leaderId:null,driverList:[],driver:null}},created:function(){console.log("list created......"),this.fetchWareList()},mounted:function(){console.log("list mounted......")},methods:{fetchData:function(){var e=this;n["a"].findReceiveList(this.searchObj.wareId,this.searchObj.date).then((function(t){e.list=t.data,e.listLoading=!1}))},fetchWareList:function(){var e=this;s["a"].findAllList().then((function(t){e.wareList=t.data}))},fetchReceiveList:function(e){var t=this;this.receiveDialogVisible=!0,n["a"].findLeaderReceiveList(e,this.searchObj.date).then((function(e){t.receiveList=e.data,t.listLoading=!1}))},send:function(e){var t=this;this.sendDialogVisible=!0,this.leaderId=e,c.findDriver(this.searchObj.wareId).then((function(e){t.driverList=e.data}))},sendSave:function(){var e=this,t={deliverDate:this.searchObj.date,leaderId:this.leaderId,driverId:this.driver.id,driverName:this.driver.name,driverPhone:this.driver.phone};n["a"].deliver(t).then((function(t){e.$message({type:"success",message:"发货成功!"}),e.fetchData()}))},resetData:function(){console.log("重置查询表单"),this.searchObj={},this.fetchData()}}},u=d,f=a("2877"),h=Object(f["a"])(u,i,r,!1,null,null,null);t["default"]=h.exports}}]);