export const Home = {
    path: '/',
    name: 'home',
    meta: {
        title: '主页'
    },
    component: () => import('../pages/Home.vue')
};

export const About = {
    path: '/about',
    name: 'about',
    meta: {
        title: '关于'
    },
    component: () => import('../pages/About.vue'),
    children: [
        {
          // 当 /about/profile 匹配成功，
          // AboutProfile 会被渲染在 About 的 <router-view> 中
          path: 'profile',
          component: () => import('../pages/AboutProfile.vue')
        },
        {
          // 当 /about/posts 匹配成功
          // AboutPosts 会被渲染在 About 的 <router-view> 中
          path: 'posts',
          component: () => import('../pages/AboutPosts.vue')
        }
      ]
};

export const page404 = {
    path: '/*',
    name: 'page404',
    component: () => import('../pages/page404.vue')
};

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    About,
    Home,
    page404
];
