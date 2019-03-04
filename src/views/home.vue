<template>
  <div>
  <div class="container">
    <header class="home-header bgblue">
        <img src="/static/img/LOGO.png">
    </header>
    <div class="pdl15 pdr15 bgf">
      <div class="home-banner">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in bannerData" :key="item">
            <img v-bind:src="item.url" />
            <h3>{{ item.name }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="mgt25">
       <div class="fl list-left bgf innk bdr4" style="height:357px;overflow: hidden;">
         <div class="">
           <div class="fl text-ball pr f16 innk">
             <i class="pinform"></i>通知公告
           </div>
           <span href="" class="fr hmore mgr15 bolder"><router-link to="/notice">more>></router-link></span>
         </div>
         <ul class="new-item">
           <li class="tof hactive"><span class="mgr10"></span><a href="">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭锅电饭锅电饭锅豆腐干豆腐</a></li>
           <li class="tof hno"><span class="mgr10"></span><a href="">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭锅电饭锅电饭锅豆腐干豆腐</a></li>
         </ul>
       </div>
      <div class="fr list-right bgf innk bdr4" style="height:357px;overflow: hidden;">
          <div class="content-title mssege">
            <i></i>
            <span>信息</span>
          </div>
          <ul class="content-list">
            <li class="tof"><i></i><router-link to="/queryLogin">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭</router-link></li>
            <li class="tof"><i></i><router-link to="/queryLogin">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭</router-link></li>
            <li class="tof"><i></i><router-link to="/queryLogin">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭</router-link></li>
          </ul>
      </div>
    </div>


    <div class="mgt15">
      <div class="fl list-left bgf innk bdr4" style="height:470px;overflow: hidden;">
        <div class="">
          <div class="fl text-ball pr f16 innk">
            <i class="xgzc"></i>相关政策
          </div>
          <span href="" class="fr hmore mgr15 bolder"><router-link to="/policy">more>></router-link></span>
        </div>
        <ul class="new-item">
          <li class="tof hactive"><span class="mgr10"></span><a href="">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭锅电饭锅电饭锅豆腐干豆腐</a></li>
          <li class="tof hno"><span class="mgr10"></span><a href="">花都小徐说看看撒ssds水电费第三方第三方十多个梵蒂冈电饭锅电饭锅电饭锅豆腐干豆腐</a></li>
        </ul>
      </div>
      <div class="fr list-right innk" style="overflow: hidden;border-top: none">
        <div class="content-title school">
          <i></i>
          <span>学校</span>
          <a href="" class="hmore mgr15 bolder" style="float: right">more>></a>
        </div>
        <ul class="school-list pdl10 bdr4 ofh bgf" style="height: 431px;overflow: hidden;">
          <li>
            <a href=""><img src="/static/img/img1.jpg"/></a>
            <a href=""><span>贵阳一中</span></a>
          </li>
          <li>
            <a href=""><img src="/static/img/img1.jpg"/></a>
            <a href=""><span>贵阳一中</span></a>
          </li>
          <li>
            <a href=""><img src="/static/img/img1.jpg"/></a>
            <a href=""><span>贵阳一中</span></a>
          </li>
          <li>
            <a href=""><img src="/static/img/img1.jpg"/></a>
            <a href=""><span>贵阳一中</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
    <v-foot></v-foot>
  </div>
</template>

<script>
  //import Footer from '../components/cfooter';
    export default {
        data(){
          return {
            bannerData:[{url:'./static/img/banner1.jpg',name:'第一张'},{url:'./static/img/banner2.jpg',name:'第一张'}]
          }
        },
      mounted:function () {
        this.$http.get('/api/schoolpublic/findAll?type=1').then(res => {  //这是从本地请求的数据接口，
          console.log(res+"hhhhhh")
        }),
          this.$http.get('/api/schoolpublic/findAll?type=2').then(res => {  //这是从本地请求的数据接口，
            console.log("我们六点半下班"+ res)
          })
      },
      /*components:{
          'v-footer':Footer,
      }*/
    }
</script>

<style scoped>
  .home-header{padding: 2px 0;}
  .home-banner{width:100%;height:450px;}
  .list-left{width:304px;border-top: 1px solid #E6E6E6;overflow: hidden;border-radius: 3px}
  .list-right{width:888px;border-top: 1px solid #E6E6E6;overflow: hidden;border-radius: 3px}
  .text-ball{height:40px;padding-left: 45px;width: 98px;color:#fff;background-color: #06B5F4;border-radius: 4px 0px 4px 0px;line-height: 40px}
  .text-ball i{display: block;width:45px;height:40px;position: absolute;top:0;left: 0}
  .text-ball .pinform{background: url("/static/img/inform.png") no-repeat 7px 7px;}
  .text-ball .xgzc{background: url("/static/img/xgzc.png") no-repeat 7px 9px;}
  .hmore{display: block;line-height: 40px;color:#1AA4FC;font-size: 14px}
  .hmore a{color:#1AA4FC;font-size: 14px}
  .new-item{padding:20px 10px;}
  .new-item li{width:100%;line-height: 30px;border-bottom: 1px dashed #ddd;}
  .new-item li span{display: inline-block;width:8px;height:8px;border-radius: 50%;}
  .new-item li a{font-size: 14px;}
  .hno a{color:#333;}
  .hno span{border:1px solid #333}
  .hactive a{color:#1AA4FC}
  .hactive span{border:1px solid #1AA4FC}
  .content-title{height: 40px;line-height: 40px;background: #F6F7F9}
  .content-title>*{display: inline-block;float: left}
  .mssege i{width:60px;height:40px;background: url("/static/img/xx.png") no-repeat 10px 3px;}
  .school i{width:60px;height:40px;background: url("/static/img/xgzc2.png") no-repeat 10px 3px;}
  .content-list{padding:0 45px}
  .content-list li{width:100%;margin-top: 20px}
  .content-list li>*{display: inline-block;float: left}
  .content-list li>i{width:35px;height:40px;background: url("/static/img/tree.png") no-repeat 0px 3px;background-size: 27px}
  .content-list li>a{text-decoration: underline;margin-top: 13px;color: #EC6D06;}
  .school-list li{width:250px;float: left;margin-left: 27px;margin-top: 20px}
  .school-list li a{display: block;width: 100%;text-align: center;overflow: hidden}
  .school-list li a:first-child{border:1px solid #ddd}
  .school-list li a img{height: 145px;display: block}
  .school-list li a span{line-height: 30px;color:#333}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<style>
  .el-carousel__container{height: 420px}
  .el-carousel__indicator.is-active button{background-color: #333}
  .el-carousel__item img{width: 100%;height: 100%}
</style>
