<template>
  <div>
    <div class="container">
      <div class="mgt25 ofh">
        <div class="fr list-right innk" style="width: 100%;height:690px;padding-left: 30px;background-color: cadetblue;text-align: center;"
             :data="noticeDetailData">
          <h3 style="color: red;">{{noticeDetailData.title}}</h3>
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
        noticeDetailData: {title:""},
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
