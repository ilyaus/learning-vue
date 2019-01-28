import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'http://10.126.64.47:9001/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  next(response => {
    console.log(response)
  })
})

new Vue({
  render: h => h(App)
}).$mount('#app')
