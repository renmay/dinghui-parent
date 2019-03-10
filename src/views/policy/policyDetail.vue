<template>
  <div>
    <div class="container">
      <div class="mgt25 ofh">
        <div class="fr list-right innk" style="width: 100%;height:690px;margin: 100px;"
             :data="policyDetailData">
          <!--<h3>{{policyDetailData.title}}</h3>-->
          <h3 style="font-size: 20px;text-align: center;padding-bottom: 10px;">石门乡本地村民子弟</h3>
          <p style="color:#666;text-indent:40px;padding:10px 100px;line-height: 22px;"> 一、石门乡本地村民子弟有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报城东小学；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。</p>
          <p style="color:#666;text-indent:40px;padding:10px 100px;line-height: 22px;">二、杨村乡本地村民子弟 有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报正清路小学；在怀化城区合法经商务工的，可在非鹤城城区户籍批次申报其他城区公办小学。</p>
          <p style="color:#666;text-indent:40px;padding:10px 100px;line-height: 22px;">  三、盈口乡本地村民子弟 有村小的直接入村小就读，无村小的可作为鹤城城区户籍就近申报。</p>
          <p style="color:#666;text-indent:40px;padding:10px 100px;line-height: 22px;">四、河西办事处本地村民子弟 有村小的直接入村小就读，无村小的可作为鹤城城区户籍申报河西学校；在怀化城区合法经商务工的，可在非鹤城城区户籍批</p>
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
        policyDetailData: {title: ""},
        id: ""
      }
    },
    watch: {
      $route() {
        this.id = this.$route.params.nid;
        this.getpolicyDetail()
      }
    },
    mounted: function () {
      var params = this.$route.params;
      this.id = params.nid;
      this.getpolicyDetail()
    },
    methods: {
      getpolicyDetail() {
        this.$http.get('/api/schoolpublic/findById?id=' + this.id).then(res => {  //这是从本地请求的数据接口，
          this.policyDetailData = res.body
          console.log(this.policyDetailData.title)
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
