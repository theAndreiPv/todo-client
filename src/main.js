import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import TextareaAutosize from 'vue-textarea-autosize';
import Vuebar from 'vuebar';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseSvg from './components/BaseSvg.vue';
import ContainerScroll from './components/ContainerScroll.vue';

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.use(TextareaAutosize);
Vue.use(Vuebar);

Vue.component(BaseSvg.name, BaseSvg);
Vue.component(ContainerScroll.name, ContainerScroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
