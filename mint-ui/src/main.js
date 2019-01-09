import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/style/index.scss';

// import LogRocket from 'logrocket';
// LogRocket.init('2bgkhp/logrocket-demo');

// LogRocket.identify('linxingjian', {
//     name: 'linxingjian',
//     email: 'linxingjian@example.com',

//     // Add your own custom user variables here, ie:
//     subscriptionType: 'pro'
// });

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
