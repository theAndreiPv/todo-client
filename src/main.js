import Vue from 'vue';
import TextareaAutosize from 'vue-textarea-autosize';
import Vuebar from 'vuebar';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseIcon from './components/BaseIcon.vue';
import ContainerScroll from './components/ContainerScroll.vue';

Vue.config.productionTip = false;

Vue.use(TextareaAutosize);
Vue.use(Vuebar);

Vue.component(BaseIcon.name, BaseIcon);
Vue.component(ContainerScroll.name, ContainerScroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
