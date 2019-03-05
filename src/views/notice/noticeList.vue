<template>
<div>
  <!--<ul class="list-new"  v-for="item in noticeList">-->
    <!--{{item.id}}-->
    <!--<li class="tof"><span class="mgl10">{{item.id}}</span><span class="mgl30">{{item.content}}</span></li>-->
  <!--</ul>-->
  <template>
    <el-table
      :data="noticeList"
      :row-style="tableRowStyle"
      :header-cell-style="tableHeaderColor"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      row-style="height:80"
      style="width: 100%;">
      <el-table-column
        prop="id"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </el-table>
  </template>
  <!--<el-pagination-->
    <!--background-->
    <!--layout="prev, pager, next"-->
    <!--:total="100"-->
    <!--@size-change="handleSizeChange"-->
    <!--@prev-click="handlePrevClick"-->
    <!--@next-click="handleNextClick"-->
    <!--@current-change="handleCurrentChange"-->
  <!--&gt;-->
  <!--</el-pagination>-->
  <!--<el-pagination-->
    <!--@size-change="sizeChangeHandle"-->
    <!--@current-change="currentChangeHandle"-->
    <!--:current-page="pageIndex"-->
    <!--:page-sizes="[10, 20, 50, 100]"-->
    <!--:page-size="pageSize"-->
    <!--:total="totalPage"-->
    <!--layout="total, sizes, prev, pager, next, jumper">-->
  <!--</el-pagination>-->
</div>
</template>

<script>
  export default {
    data(){
      return {
        noticeList:[],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0
      }
    },
    methods:{
      // // 初始页currentPage、初始每页数据数pagesize和数据data
      // handleSizeChange: function (size) {
      //   alert(size)
      //   this.pagesize = size;
      //   console.log(this.pagesize)  //每页下拉显示数据
      // },
      // handleCurrentChange: function(currentPage){
      //   alert(currentPage)
      //   this.currentPage = currentPage;
      //   console.log(this.currentPage)  //点击第几页
      // },
      // handlePrevClick: function (size) {
      //   alert(size)
      //   this.pagesize = size;
      // },
      // handleNextClick: function (size) {
      //   alert(size)
      //   this.pagesize = size;
      // },
      // handleUserList() {
      //   this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
      //     this.userList = res.body
      //   })
      // }
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getNoticeList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getNoticeList()
      },
    },
    mounted(){
      var params = this.$route.params;
      console.log(params.nid)
      this.getNoticeList()
    },
    activated(){
      this.getNoticeList()
    },
    methods: {
      getNoticeList(){
        // pageNum = this.pageIndex
        // rows = this.pageSize
        this.$http.get('/api/schoolpublic/findAll?type=1').then(res => {  //这是从本地请求的数据接口，
          this.noticeList = res.body.list
          console.log(this.noticeList+"分页")
        })
      },
      // tableRowClassName({row, rowIndex}) {
      //   if (rowIndex === 1) {
      //     return 'warning-row';
      //   } else if (rowIndex === 3) {
      //     return 'success-row';
      //   }
      //   return '';
      // }
      tableRowStyle({ row, rowIndex }) {
        return 'font-weight:bold;font-size:14px;font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";'
      },
      // 修改table header的背景色
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background-color: rgb(229,236,242);font-weight: bold;font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";'
        }
      }
    }
  }
</script>

<style scoped>
  body{
    font-family: Microsoft Yahei;
  }
  .list-new{width:100%;height: 610px;}
  .list-new li{line-height: 32px;border-bottom: 1px solid #ddd;color: #333;font-size: 14px}
  .new-bg-title{line-height: 34px;background-color: #E5ECF2}
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
