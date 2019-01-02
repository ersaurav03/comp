import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import child from './components/child.vue';

Vue.config.productionTip = false
export const eventBus= new Vue();
// Vue.components('child',child);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
