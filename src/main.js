import Vue from 'vue'
import { initializeApp }  from "../node_modules/firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import BuyModalComponent from './components/shared/BuyModal'

Vue.component('app-buy-modal', BuyModalComponent)

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

    onAuthStateChanged(getAuth(),user => {
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  } 
}).$mount('#app')
