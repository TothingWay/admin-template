import { createRouter, createWebHashHistory } from 'vue-router'

/* Layout */
import Layout from '/@/layout/index.vue'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    meta: { title: 'test', icon: 'icon-xiai' },
    children: [
      {
        path: '/dashboard',
        component: () => import('/@/views/Home.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'icon-xiai' }
      },
      {
        path: '/home',
        component: () => import('/@/views/Home.vue'),
        name: 'Home',
        meta: { title: 'Home', icon: 'icon-xiai' }
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    meta: { title: 'test', icon: 'icon-xiai' },
    children: [
      {
        path: '/test1',
        component: () => import('/@/views/Home.vue'),
        name: 'test1',
        meta: { title: 'test1', icon: 'icon-xiai' }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    meta: { title: 'test2', icon: 'icon-xiai' },
    children: [
      {
        path: '/about1',
        component: () => import('/@/views/Home.vue'),
        name: 'About',
        meta: { title: 'about', icon: 'icon-xiai' },
        children: [
          {
            path: '/about3',
            component: () => import('/@/views/Home.vue'),
            name: 'About3',
            meta: { title: 'about3', icon: 'icon-xiai' },
            children: [
              {
                path: '/about34',
                component: () => import('/@/views/Home.vue'),
                name: 'About34',
                meta: { title: 'about34', icon: 'icon-xiai' },
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
