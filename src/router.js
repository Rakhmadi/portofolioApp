import { createWebHistory,createWebHashHistory, createRouter } from 'vue-router';
import home from './components/home.vue';
import skill from './components/skill.vue';
import Project from './components/Project.vue';
import contact from './components/contact.vue';

const routes = [
    {
        path:'/',
        name:'home',
        component:home
    },{
        path:'/skill',
        name:'skill',
        component:skill
    },{
        path:'/Project',
        name:'Project',
        component:Project
    },{
        path:'/contact',
        name:'contact',
        component:contact
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 