<template>
    <div>
      <div class="new-header pr">
        <div class="left-bg">
          <img src="/static/img/LOGO.png">
        </div>
        <div class="new-bottom">
          <el-button type="primary">首页</el-button>
          <el-button type="primary" >帮助</el-button>
          <!--<el-button type="primary" icon="el-icon-search">退出</el-button>-->
          <el-button type="primary">退出</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewHeader"
    }
</script>

<style scoped>
.new-header{width: 100%;height: 300px;background: url("/static/img/banner2.jpg") no-repeat;background-size: 100%}
  .left-bg{width: 100%;height: 60px;background: url("/static/img/bg1.png") no-repeat;line-height: 60px}
  .new-bottom{width: 360px;position: absolute;bottom: 13px;overflow: hidden;right: 0}
</style>
