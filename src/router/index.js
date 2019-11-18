import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 官方 component: () => import('../views/login/Login')
 * webpack懒加载  component: r => require.ensure([], () => r(require('../views/login/Login')), 'Login'),
 * import加载所有 import Login from '../views/login/Login'
 */

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Login'),
        meta: {
            keepAlive: false,
            title: '登录'
        }
    },
    {
        path: '*',//输错路由前往404
        meta: {
            keepAlive: false,
            title: '404'
        }
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('../views/error/NotFound'),
        meta: {
            keepAlive: false,
            title: '404'
        }
    },
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: () => import('../views/home/Index'),
        meta: {
            keepAlive: false,
            title: '首页'
        }
    },
	{
		path: '/good-list',
		name: 'goodList',
		component: () => import('../views/goods/GoodList'),
		meta: {
			keepAlive: false,
			title: '商品列表'
		}
	},
	{
		path: '/good-list/good-detail',
		name: 'goodDetail',
		component: () => import('../views/goods/GoodDetail'),
		meta: {
			keepAlive: false,
			title: '商品详情',
			parentPath: '/good-list',
			parentTitle: '商品列表'
		}
	}
]

const router = new VueRouter({
    // 	mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router

