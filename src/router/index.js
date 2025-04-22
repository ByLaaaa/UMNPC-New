import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'
import About from '../views/About.vue'
import Committee from '../views/Committee.vue'
import Join from '../views/Join.vue'
import Contact from '../views/Contact.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/programs', name: 'Programs', component: Programs },
    { path: '/about', name: 'About', component: About },
    { path: '/committee', name: 'Committee', component: Committee },
    { path: '/join', name: 'Join', component: Join },
    { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
