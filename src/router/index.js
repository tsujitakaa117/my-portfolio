import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import WorksPage from '../views/WorksPage.vue';
import BlogPage from '../views/BlogPage.vue';



const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    path: '/works',
    name: 'WorksPage',
    component: WorksPage,
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
