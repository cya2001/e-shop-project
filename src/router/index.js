import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login/index.vue';
import Home from '../components/Home/index.vue';
import Category from '../components/Category/index.vue';
import Layout from '../components/Layout/index.vue';
import SubCategory from '../components/SubCategory/index.vue';
import Detail from '../components/Detail/index.vue';
import test from '../components/compbase/test/test.vue'
import CartList from '../components/CartList/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        component:Layout,
        children:[
            {
                path:'',
                component:Home
            },
            {
                path:'category/:id',
                component:Category,
            },
            {
                path:'category/sub/:id',
                component:SubCategory,
            },
            {
                path:'detail/:id',
                component:Detail,
            },
            {
                path:'cartlist',
                component:CartList,
            },
        ]
    },
    {
        path:'/login',
        component:Login
    }
  ],
  scrollBehavior(){
    return{
        top:0
    }
  },
})


export default router
