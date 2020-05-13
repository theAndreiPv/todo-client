import Vue from 'vue';
import Vuelidate from 'vuelidate';
import vClickOutside from 'v-click-outside';
import autosize from 'v-autosize/dist/plugin';
import firebase from 'firebase/app';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseSvg from './components/BaseSvg.vue';
import ContainerScroll from './components/ContainerScroll.vue';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(autosize);
Vue.use(Toasted, {
  position: 'bottom-center',
  duration: 3000,
});

Vue.component('BaseSvg', BaseSvg);
Vue.component('ContainerScroll', ContainerScroll);

firebase.initializeApp({
  apiKey: 'AIzaSyD3WV9nSqGGzUpxwNt3HoURpe6vAVkkTxA',
  authDomain: 'todo-project-fbfb7.firebaseapp.com',
  databaseURL: 'https://todo-project-fbfb7.firebaseio.com',
  projectId: 'todo-project-fbfb7',
  storageBucket: 'todo-project-fbfb7.appspot.com',
  messagingSenderId: '153067853096',
  appId: '1:153067853096:web:472cc861ee4a50b04cac1d',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
