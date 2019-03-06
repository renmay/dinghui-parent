<template>
<div>
  <!--<ul class="list-new"  v-for="item in noticeList">-->
    <!--{{item.id}}-->
    <!--<li class="tof"><span class="mgl10">{{item.id}}</span><span class="mgl30">{{item.content}}</span></li>-->
  <!--</ul>-->

    <el-table
      :data="noticeList"
      :row-style="tableRowStyle"
      :header-cell-style="tableHeaderColor"
      style="width: 100%"
      >
      <el-table-column
        prop="id"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
    </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="100"
    @size-change="handleSizeChange"
    @prev-click="handlePrevClick"
    @next-click="handleNextClick"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</div>
</template>

<script>
  export default {
    data(){
      return {
        noticeList:[],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
      }
    },
    mounted(){
      var params = this.$route.params;
      this.getNoticeList()
    },
    activated(){
      this.getNoticeList()
    },
    methods: {
      sizeChangeHandle (val) {
        alert(val)
        this.pageSize = val
        this.pageIndex = 1
        this.getNoticeList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getNoticeList()
      },
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        alert(size)
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
        this.pageIndex = currentPage;
        this.getNoticeList()
      },
      handlePrevClick: function (size) {
        this.pageIndex = size;
        this.getNoticeList()
      },
      handleNextClick: function (size) {
        this.pageIndex = size;
        this.getNoticeList()
      },
      getNoticeList(){
        // pageNum = this.pageIndex
        // rows = this.pageSize
        this.$http.get('/api/schoolpublic/findAll?type=1&pageNum='+this.pageIndex+'&rows='+this.pageSize).then(res => {  //这是从本地请求的数据接口，
          this.noticeList = res.body.list
        })
      },
      tableRowStyle({ row, rowIndex }) {
        return 'font-weight:bold;font-size:14px;'
      },
      // 修改table header的背景色
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background-color: rgb(229,236,242);font-weight: bold;'
        }
      }
    }
  }
</script>

<style scoped>
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
