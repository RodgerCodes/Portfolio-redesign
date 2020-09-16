import Vue from 'vue';
import Vuerouter from 'vue-router';
import Home from '../Views/Home.vue'

Vue.use(Vuerouter);

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:"*",
        redirect:'/'
    }
]

const router = new Vuerouter({
    mode:'history',
    routes,
    scrollBehavior:function(to, from , savedPosition) {
        if(to.hash) {
          return {selector:to.hash,
          savedPosition}
        }
        else{
          return {x:0, y:0}
        }
      }
});

export default router;


