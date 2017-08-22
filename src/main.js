// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import $ from 'jquery'
// import './assets/libs/ol/ol.css'
// import ol from './assets/libs/ol/ol'

Vue.config.productionTip = false
Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})