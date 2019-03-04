import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router/index';
import VueResource from 'vue-resource';
import './assets/css/comm.css';

import Footer from './components/foot';
import NewHeader from './components/head';

Vue.config.productionTip = false;
Vue.use(Footer);
Vue.use(NewHeader);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({routes});
new Vue({
  el: '#app',
  router,
  render:h => h(App)
});
