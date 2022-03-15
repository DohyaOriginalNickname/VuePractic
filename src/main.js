import Vue from 'vue'
import { initializeApp }  from "../node_modules/firebase/app"

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created(){
    initializeApp({
      apiKey: "AIzaSyCeCP7uo-T8vjMtbEkpGsmAT5ZaH1FjVx4",
      authDomain: "vue-project-34437.firebaseapp.com",
      databaseURL: "https://vue-project-34437-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "vue-project-34437",
      storageBucket: "vue-project-34437.appspot.com",
      messagingSenderId: "585738814608",
      appId: "1:585738814608:web:6a445b93b63e013638c415",
      measurementId: "G-C9N203764N"
    })
  } 
}).$mount('#app')
