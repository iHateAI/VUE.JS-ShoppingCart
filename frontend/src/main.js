import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp({
  extends: App,
  beforeCreate() {
    this.$store.dispatch('getUserInfo');
  },
})
  .use(store)
  .use(router)
  .mount('#app');