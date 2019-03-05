<template>
  <div>
    <div class="container">
      <div class="mgt25 ofh">

        <div class="fr list-right innk" style="height:690px;overflow: hidden;padding: 10px" v-for="item in noticeList">
          {{item.title}}
          {{item.id}}
          <h3 class="policy-detail-title">鹤城城市规划区域范围内本地村民子弟小学一年级入学报名办法</h3>

          <p>一、石门乡本地村民子弟

            有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报城东小学；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。</p>

          <p> 二、杨村乡本地村民子弟

            有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报正清路小学；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。</p>

          <p> 三、盈口乡本地村民子弟

            有村小的直接入村小就读，无村小的可作为鹤城城区户籍就近申报。</p>

          <p> 四、河西办事处本地村民子弟

            有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报河西学校；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。</p>

        </div>
      </div>


    </div>
    <v-foot></v-foot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id:"",
        bannerData: [{url: './static/img/banner1.jpg', name: '第一张'}, {url: './static/img/banner2.jpg', name: '第一张'}]
      }
    },
    watch:{
      $route(){
        this.id = this.$route.params.nid;
        this.getNoticeDetail()
      }
    },
    mounted: function () {
      var params = this.$route.params;
      this.id = params.nid;
      this.getNoticeDetail()
      /*this.$http.get('/api/home-page/policies').then(res => {  //这是从本地请求的数据接口，
        console.log(res)
      })*/
    },
    methods: {
      getNoticeList(){
        this.$http.get('/api/schoolpublic/findAll?type=1').then(res => {  //这是从本地请求的数据接口，
          this.noticeList = res.body.list
        })
      },
      getNoticeDetail(){
        this.$http.get('/api/schoolpublic/findById?id='+this.id).then(res => {  //这是从本地请求的数据接口，
          this.noticeDetail = res.body.list
        })
      }
    }
  }
</script>

<style scoped>
  .policy-detail-title {
    /*text-align: center;*/
    font-size: 18px;
    font-weight: bold;
  }
</style>
