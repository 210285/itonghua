import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')