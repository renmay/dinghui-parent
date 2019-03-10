<template>
  <div>
    <div class="container">
      <v-newHeader></v-newHeader>

      <div class="mgt25 ofh">
        <div class="fl list-left bgf innk" style="height:357px;overflow: hidden;">=
          <div class="">
            <img src="/static/img/bg2.png"/>
          </div>
          <ul class="new-item">
            <li class="tof hactive">
              <router-link to="/policy/policyList">
                <i class="mgr10"></i><span href="">通知公告</span>
                <span class="policy-all">全部>></span>
              </router-link>
            </li>
            <li class="tof hno" v-for="item in policyList">
              <router-link v-bind:to="'/policy/policyDetail/'+item.id">
                <i class="mgr10"></i><span href="">{{item.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="fr list-right bgf innk" style="height:690px;overflow: hidden;padding: 10px">
          <router-view/>
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
        policyList: [],
        bannerData: [{url: './static/img/banner1.jpg', name: '第一张'}, {url: './static/img/banner2.jpg', name: '第一张'}]
      }
    },
    mounted: function () {
      this.$http.get('/api/schoolpublic/findAll?type=1').then(res => {  //这是从本地请求的数据接口，
        this.policyList = res.body.list
      })
    },
    methods: {
      getpolicyList(){
        this.$http.get('/api/schoolpublic/findAll?type=1').then(res => {  //这是从本地请求的数据接口，
          this.policyList = res.body.list
        })
      }
    }
  }
</script>

<style scoped>
  .list-left {
    width: 301px;
    border: 1px solid #E6E6E6;
    border-top: none;
    overflow: hidden;
    border-radius: 3px
  }

  .list-right {
    width: 868px;
    border: 1px solid #E6E6E6;
    border-top: none;
    overflow: hidden;
    border-radius: 3px
  }

  .new-item {
    padding: 20px 10px;
  }

  .new-item li {
    width: 100%;
    line-height: 30px;
    border-bottom: 1px dashed #ddd;
  }

  .new-item li i {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .new-item li span {
    font-size: 14px;
  }

  .hno {
    background-color: #fff;
    color: #333
  }

  .hno span {
    color: #333
  }

  .hactive {
    background-color: #1AA4FC;
    color: #fff
  }

  .hactive span {
    color: #fff
  }

  .hno i {
    border: 1px solid #1AA4FC
  }

  .policy-all {
    font-size: 12px !important;
    float: right;
    display: block;
    padding-right: 10px;
    cursor: pointer;
  }
</style>
