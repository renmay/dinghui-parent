import Home from  '../views/home.vue';
import News from  '../views/NewHome.vue';
import NewList from  '../views/newList.vue';
import NewsTable from  '../views/newTable.vue';
import QueryLogin from  '../views/QueryLogin.vue';
let routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/news',
    component:News,
    children:[
      {'path':'newList/:nid',component: NewList},
    ]
  },
  {
    path:'/newsTable',
    component:NewsTable,
  },
  {
    path:'/queryLogin',
    component:QueryLogin,
  },
]
export default routes;
