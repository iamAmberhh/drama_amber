import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/all.scss';
import router from './router';
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.component("VueLoading", Loading);
app.mount('#app');
