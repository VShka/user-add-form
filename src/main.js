import Vue from 'vue'
import Vuelidate from 'vuelidate';

Vue.config.devtools = true;
Vue.config.productionTip = false


import App from './App.vue'

Vue.use(Vuelidate);
new Vue({
  render: h => h(App),
}).$mount('#app')
