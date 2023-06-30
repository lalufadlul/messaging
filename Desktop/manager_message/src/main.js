import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';

const router = createRouter({
  history: createWebHistory('/messaging/'), // Replace with your actual GitHub Pages subdirectory
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/category/:title', 
      name: 'Category',
      component: Category,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
