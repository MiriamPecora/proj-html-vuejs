import PageAbout from './pages/PageAbout.vue';
import PageForm from './pages/PageForm.vue';
import PageHome from './pages/PageHome.vue';

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
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }