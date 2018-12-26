import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Header = () => import(/* webpackChunkName: 'layout' */ '@/layout/header');
const Body = () => import(/* webpackChunkName: 'layout' */ '@/layout/body');
const Menu = () => import(/* webpackChunkName: 'layout' */ '@/layout/menu');
const Main = () => import(/* webpackChunkName: 'layout' */ '@/layout/main');
const Notfind = () => import(/* webpackChunkName: 'layout' */ '@/layout/error/404');

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: { name: 'Home' },
        },
        {
            path: '/',
            redirect: { name: 'Home' },
        },
        {
            path: '/mint/test',
            component: () => import(/* webpackChunkName: 'test' */ '@/page/test')
        },
        {
            path: '/mint',
            redirect: { name: 'Home' },
            components: {
                header: Header,
                menu: Menu,
                body: Body
            },
            children: [
                {
                    /*首页*/
                    path: 'home',
                    redirect: {name: 'Home'},
                    component: Main,
                    children: [
                        {
                            path: 'index',
                            name: 'Home',
                            component: () => import(/* webpackChunkName: 'home' */ '@/page/home')
                        }
                    ]
                },
                {
                    path: 'jsComponents',
                    redirect: {name: 'Home'},
                    component: Main,
                    children: [
                        {
                            path: 'toast',
                            name: 'toast',
                            component: () => import(/* webpackChunkName: 'toast' */ '@/page/js.components/toast')
                        }
                    ]
                },
                {
                    path: 'cssComponents',
                    redirect: {name: 'Home'},
                    component: Main,
                    children: [
                        {
                            path: 'header',
                            name: 'header',
                            component: () => import(/* webpackChunkName: 'header' */ '@/page/css.components/header')
                        }
                    ]
                },
                {
                    path: 'formComponents',
                    redirect: {name: 'Home'},
                    component: Main,
                    children: [
                        {
                            path: 'switch',
                            name: 'switch',
                            component: () => import(/* webpackChunkName: 'form' */ '@/page/form.components/switch')
                        }
                    ]
                }
            ]
        }, 
        {
            path: '*',
            name: '404',
            component: Notfind
        }
    ]
});

export default router;