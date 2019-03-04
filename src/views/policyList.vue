<template>
<div>
  <div class="new-bg-title"><span class="mgl10">序号</span><span style="margin-left: 340px">标题</span></div>
  <ul class="list-new">
    <li class="tof"><span class="mgl10">1</span><span class="mgl30">水电费是否是sssd的发是否</span></li>
    <li class="tof"><span class="mgl10">2</span><span class="mgl30">水电费是否是的发是否是</span></li>
  </ul>
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

      }
    },
    methods:{
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        alert(size)
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        alert(currentPage)
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      },
      handlePrevClick: function (size) {
        alert(size)
        this.pagesize = size;
      },
      handleNextClick: function (size) {
        alert(size)
        this.pagesize = size;
      },
      handleUserList() {
        this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
          this.userList = res.body
        })
      }
    },
    mounted(){
      var params = this.$route.params;
      console.log(params.nid)
    }
  }
</script>

<style scoped>
.list-new{width:100%;height: 610px;}
.list-new li{line-height: 32px;border-bottom: 1px solid #ddd;color: #333;font-size: 14px}
  .new-bg-title{line-height: 34px;background-color: #E5ECF2}
</style>
