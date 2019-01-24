import Vue from 'vue'
import App from './App.vue'

import GlobalComponent from './components/GlobalComponent.vue'

Vue.config.productionTip = false

Vue.component('GlobalComponent', GlobalComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
