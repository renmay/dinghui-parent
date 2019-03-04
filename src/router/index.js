import Home from  '../views/home.vue';
import Policy from  '../views/Policy.vue';
import PolicyList from '../views/policyList.vue';
import Notice from '../views/notice.vue';
import QueryLogin from  '../views/QueryLogin.vue';
let routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/policy',
    component:Policy,
    children:[
      {'path':'PolicyList/:nid',component: PolicyList},
    ]
  },
  {
    path:'/notice',
    component:Notice,
  },
  {
    path:'/queryLogin',
    component:QueryLogin,
  },
]
export default routes;
