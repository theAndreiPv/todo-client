import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import autosize from 'v-autosize/dist/plugin';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseSvg from './components/BaseSvg.vue';
import ContainerScroll from './components/ContainerScroll.vue';

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.use(autosize);


Vue.component('BaseSvg', BaseSvg);
Vue.component('ContainerScroll', ContainerScroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
