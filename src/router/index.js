import Home from  '../views/home.vue';
import Policy from '../views/policy/policy.vue';
import PolicyList from '../views/policy/policyList.vue';
import PolicyDetail from '../views/policy/policyDetail.vue';
import Notice from '../views/notice/notice.vue';
import NoticeList from '../views/notice/noticeList.vue';
import NoticeDetail from '../views/notice/noticeDetail.vue';
import Inquire from '../views/inquire.vue';
import Apply from '../views/apply.vue';
let routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/policy',
    component:Policy,
    children:[
      {'path':'PolicyList',component: PolicyList},
      {'path':'PolicyDetail/:nid',component: PolicyDetail},
    ]
  },
  {
    path:'/notice',
    component:Notice,
    children:[
      {'path':'NoticeList',component: NoticeList},
      {'path':'NoticeDetail/:nid',component: NoticeDetail},
    ]
  },
  {
    path:'/inquire',
    component:Inquire,
  },
  {
    path:'/apply',
    component:Apply,
  },
]
export default routes;
