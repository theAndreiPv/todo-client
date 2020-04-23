import Vue from 'vue';
import TextareaAutosize from 'vue-textarea-autosize';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseIcon from './components/BaseIcon.vue';

Vue.config.productionTip = false;

Vue.use(TextareaAutosize);

Vue.component(BaseIcon.name, BaseIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
