import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import AllServersStatus from './AllServersStatus.vue'
import ServerStatus from './ServerStatus.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-server-status', ServerStatus)
Vue.component('app-all-servers-status', AllServersStatus)

new Vue({
  el: '#app',
  render: h => h(App)
})
