<template>
  <div>
    <div class="container">
      <div class="mgt25 ofh">
        <div class="fr list-right innk" style="width: 100%;height:690px;margin: 100px;"
             :data="noticeDetailData">
          <!--<h3>{{noticeDetailData.title}}</h3>-->
          <h3 style="font-size: 20px;text-align: center;padding-bottom: 10px;">{{noticeDetailData.title}}</h3>
          <p v-html="noticeDetailData.content" style="padding-left: 200px;"></p>
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
        noticeDetailData: {title: ""},
        id: ""
      }
    },
    watch: {
      $route() {
        this.id = this.$route.params.nid;
        this.getNoticeDetail()
      }
    },
    mounted: function () {
      var params = this.$route.params;
      this.id = params.nid;
      this.getNoticeDetail()
    },
    methods: {
      getNoticeDetail() {
        this.$http.get('/api/schoolpublic/findById?id=' + this.id).then(res => {  //这是从本地请求的数据接口，
          this.noticeDetailData = res.body
          console.log(this.noticeDetailData.title)
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
