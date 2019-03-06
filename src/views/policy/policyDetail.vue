<template>
<div>
  <div class="container">
    <div class="mgt25 ofh">

      <div class="fr list-right innk" style="height:690px;overflow: hidden;padding: 10px">
        <h3 class="policy-detail-title">鹤城城市规划区域范围内本地村民子弟小学一年级入学报名办法</h3>

        一、石门乡本地村民子弟

        有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报城东小学；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。

        二、杨村乡本地村民子弟

        有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报正清路小学；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。

        三、盈口乡本地村民子弟

        有村小的直接入村小就读，无村小的可作为鹤城城区户籍就近申报。

        四、河西办事处本地村民子弟

        有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报河西学校；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。

      </div>
    </div>


  </div>
  <v-foot></v-foot>
</div>
</template>

<script>
  export default {
    data(){
      return {
        bannerData:[{url:'./static/img/banner1.jpg',name:'第一张'},{url:'./static/img/banner2.jpg',name:'第一张'}]
      }
    },
    mounted:function () {
      this.$http.get('/api/home-page/policies').then(res => {  //这是从本地请求的数据接口，
      })
    },
  }
</script>

<style scoped>
.policy-detail-title{
  /*text-align: center;*/
  font-size: 18px;
  font-weight: bold;
}
</style>
