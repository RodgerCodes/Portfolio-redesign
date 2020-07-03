import Vue from 'vue';
import Vuerouter from 'vue-router';
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
import Projects from '../Views/Projects.vue'
import Uses from '../Views/Uses.vue'

Vue.use(Vuerouter);

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/projects',
        name:'Projects',
        component:Projects
    },
    {
        path:'/uses',
        name:'Uses',
        component:Uses
    }
]

const router = new Vuerouter({
    mode:'history',
    routes
});

export default router;


