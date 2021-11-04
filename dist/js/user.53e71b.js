(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{757:function(e,t,a){},859:function(e,t,a){"use strict";var n=a(757);a.n(n).a},874:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(40),r=a.n(n),l=a(21),i=a.n(l),o=a(76),s=a.n(o),c=a(74),u=a.n(c),d=a(10),p=a(687),m=a(691),g=a(758),b={id:"",account:"",name:"",roles:[],gender:"",avatar:"",mobilePhone:"",email:""},f={account:[{required:!0,message:"请填写账号",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]{5,10}$/,message:"账号为5到10位的字母、数字或下划线组成",trigger:"blur"}],name:[{required:!0,message:"请填写姓名",trigger:"blur"},{max:6,message:"姓名长度不能超过6个字",trigger:"blur"}],roles:[{required:!0,message:"请选择角色",trigger:"change"}],mobilePhone:[{required:!0,message:"请填写手机号",trigger:"blur"},{pattern:/^1[345789]\d{9}$/,message:"手机号码格式不正确",trigger:"blur"}],email:[{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},h={components:{AvatarUpload:g.a},data:function(){return{tableMng:p.a,formRules:f,visible:!1,detail:{},detailBackup:{},confirmLoading:!1,initLoading:!1}},methods:{open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.visible=!0,this.changeDetail(e),this.getDetail()},toggleVisible:function(){this.visible=!this.visible},changeDetail:function(e){this.detail=i()({},b,e),this.detailBackup=i()({},b,e)},getDetail:function(){var e=this;return s()(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.detail.id){t.next=3;break}return t.abrupt("return");case 3:return e.initLoading=!0,t.prev=4,t.next=7,e.$api.user.getDetail({id:a});case 7:n=t.sent,e.changeDetail(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.error(t.t0);case 14:return t.prev=14,e.initLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,e,[[4,11,14,17]])})))()},handleConfirm:function(){var e,t=this;this.$refs.form.validate((e=s()(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=18;break}return t.confirmLoading=!0,e.prev=2,e.next=5,t.$api.user.update({detail:t.detail});case 5:t.$message.success("提交成功"),t.handleClose(),t.$emit("success"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:return e.prev=13,t.confirmLoading=!1,e.finish(13);case 16:e.next=19;break;case 18:t.$message.error("请按照正确格式填写");case 19:case"end":return e.stop()}}),e,t,[[2,10,13,16]])}))),function(t){return e.apply(this,arguments)}))},handleBeforeClose:function(){window.JSON.stringify(this.detailBackup)===window.JSON.stringify(this.detail)?this.handleClose():this.$confirm("信息修改后未提交，确认关闭？","提示",{type:"warning"}).then(this.handleClose).catch((function(){}))},handleClose:function(){this.$refs.form.clearValidate(),this.visible=!1}}},v=a(3),_=Object(v.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-dialog",{staticClass:"user-edit",attrs:{title:e.detail.id?"编辑用户":"新增用户",width:"700px",visible:e.visible,"confirm-loading":e.confirmLoading},on:{confirm:e.handleConfirm,close:e.handleBeforeClose}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.initLoading,expression:"initLoading"}],ref:"form",attrs:{model:e.detail,rules:e.formRules,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"账号:",prop:"account"}},[a("el-input",{attrs:{placeholder:"请填写账号",clearable:"",disabled:!!e.detail.id},model:{value:e.detail.account,callback:function(t){e.$set(e.detail,"account",t)},expression:"detail.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[a("el-input",{attrs:{placeholder:"请填写用户姓名",clearable:""},model:{value:e.detail.name,callback:function(t){e.$set(e.detail,"name",t)},expression:"detail.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色:",prop:"roles"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择用户角色"},model:{value:e.detail.roles,callback:function(t){e.$set(e.detail,"roles",t)},expression:"detail.roles"}},e._l(e.tableMng.getTable("role"),(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"性别:"}},[a("el-radio-group",{model:{value:e.detail.gender,callback:function(t){e.$set(e.detail,"gender",t)},expression:"detail.gender"}},e._l(e.tableMng.getTable("gender"),(function(t){return a("el-radio",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name))])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"头像:"}},[a("avatar-upload",{attrs:{action:"https://sm.ms/api/v2/upload",name:"smfile"},model:{value:e.detail.avatar,callback:function(t){e.$set(e.detail,"avatar",t)},expression:"detail.avatar"}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机:",placeholder:"请填写手机号",prop:"mobilePhone"}},[a("el-input",{attrs:{clearable:""},model:{value:e.detail.mobilePhone,callback:function(t){e.$set(e.detail,"mobilePhone",t)},expression:"detail.mobilePhone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱:",placeholder:"请填写邮箱地址",prop:"email"}},[a("el-input",{attrs:{clearable:""},model:{value:e.detail.email,callback:function(t){e.$set(e.detail,"email",t)},expression:"detail.email"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,x={name:"",gender:"",roles:[],pageNumber:1,pageSize:20},y={name:"User",components:{UserEdit:_},data:function(){return{tableMng:p.a,userList:[],query:u.a.cloneDeep(x),total:0,selectedRows:[],tableLoading:!1,exportLoading:!1}},created:function(){this.getTableData()},methods:{getTableData:function(){var e=this;return s()(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.tableLoading=!0,t.next=3,e.$api.user.getList(e.query);case 3:a=t.sent,e.userList=a.list.map((function(t,a){return i()({},t,{index:(e.query.pageNumber-1)*e.query.pageSize+a+1})})),e.total=a.total,e.tableLoading=!1,n=document.querySelector(".inner-layout__page"),Object(d.f)(n,0,800);case 9:case"end":return t.stop()}}),t,e)})))()},handleReset:function(){this.query=u.a.cloneDeep(x),this.getTableData()},handleEdit:function(e){this.$refs.userEdit.open(e)},handleDelete:function(e){var t=this,a=[],n=[];e.id?(a=[e.id],n=[e.name]):(a=this.selectedRows.map((function(e){return e.id})),n=this.selectedRows.map((function(e){return e.name}))),0===n.length?this.$message.warning("请选择要删除的用户！"):this.$confirm("确定删除用户：“"+n.join("，")+"”？","提示",{type:"warning"}).then(s()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.user.remove({id:a});case 2:t.$message.success("删除成功！"),t.getTableData();case 4:case"end":return e.stop()}}),e,t)})))).catch((function(){}))},handleSelectedRows:function(e){this.selectedRows=e},handleFilterGender:function(e,t,a){return t[a.property]===e},handleExport:function(){var e=this;return s()(r.a.mark((function t(){var a,n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.exportLoading=!0,a=["序号","姓名","手机","性别","角色","创建时间","累计消费额(元)"],t.next=4,e.$api.user.getList();case 4:n=t.sent,l=n.list.map((function(t,a){return{index:(e.query.pageNumber-1)*e.query.pageSize+a+1,name:t.name,mobilePhone:t.mobilePhone,gender:t.gender,roles:t.roles.toString(),createDate:t.createDate,consume:t.consume}})),Object(m.a)(a,l,"用户数据表"),e.exportLoading=!1;case 8:case"end":return t.stop()}}),t,e)})))()}}},w=(a(859),Object(v.a)(y,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-manager"},[a("div",{staticClass:"user-manager__header"},[a("div",{staticClass:"title"},[a("section-title",{attrs:{name:"用户列表"}})],1),e._v(" "),a("div",{staticClass:"operation"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.handleEdit({})}}},[e._v(" 新增用户 ")]),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-minus"},on:{click:function(t){return e.handleDelete({})}}},[e._v(" 批量删除 ")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-download",loading:e.exportLoading},on:{click:e.handleExport}},[e._v("导出表格")])],1)]),e._v(" "),a("el-form",{ref:"queryForm",attrs:{inline:!0,model:e.query}},[a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{attrs:{placeholder:"请输入用户姓名关键字",clearable:""},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别:"}},[a("el-select",{attrs:{placeholder:"请选择性别",clearable:""},model:{value:e.query.gender,callback:function(t){e.$set(e.query,"gender",t)},expression:"query.gender"}},e._l(e.tableMng.getTable("gender"),(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"角色:"}},[a("el-select",{attrs:{placeholder:"请选择角色",multiple:"",clearable:""},model:{value:e.query.roles,callback:function(t){e.$set(e.query,"roles",t)},expression:"query.roles"}},e._l(e.tableMng.getTable("role"),(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getTableData}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.handleReset}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"user-manager__table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.userList,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectedRows}},[a("el-table-column",{attrs:{type:"selection",width:"50px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"80px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobilePhone",label:"手机",width:"120px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别",width:"120px",filters:e.tableMng.formatTable("gender","value","text"),"filter-method":e.handleFilterGender},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.tableMng.getNameById("gender",t.row.gender)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"roles",label:"角色"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t\t\t\t"+e._s(e.tableMng.getNamesByIds("role",t.row.roles))+"\n\t\t\t\t")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createDate",label:"创建时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"consume",label:"累计消费额(元)",width:"160px",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("pagination",{attrs:{total:e.total,"page-number":e.query.pageNumber,"page-size":e.query.pageSize},on:{"update:pageNumber":function(t){return e.$set(e.query,"pageNumber",t)},"update:page-number":function(t){return e.$set(e.query,"pageNumber",t)},"update:pageSize":function(t){return e.$set(e.query,"pageSize",t)},"update:page-size":function(t){return e.$set(e.query,"pageSize",t)},pagination:e.getTableData}}),e._v(" "),a("user-edit",{ref:"userEdit",on:{success:e.getTableData}})],1)}),[],!1,null,"1e1018f5",null).exports)}}]);