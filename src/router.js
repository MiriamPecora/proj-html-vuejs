import PageAbout from './pages/PageAbout.vue';
import PageForm from './pages/PageForm.vue';
import PageHome from './pages/PageHome.vue';

import NotFound from './pages/NotFound.vue';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        component: PageHome,
        name: 'Home',
        path: '/'
    },
    {
        component: PageAbout,
        name: 'About',
        path: '/about'
    },
    {
        component: PageForm,
        name: 'Book',
        path: '/book-now'
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }