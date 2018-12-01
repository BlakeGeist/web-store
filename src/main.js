import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VueStripeCheckout from 'vue-stripe-checkout'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)
Vue.use(VueStripeCheckout, 'pk_test_yBVcFyDWFZeqbpVo6fKuLzUf')
Vue.config.productionTip = false
Vue.config.devtools = true

let app
 
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      router,
      store,
      firebase,
      render: h => h(App)
    }).$mount('#app')
  }
})
