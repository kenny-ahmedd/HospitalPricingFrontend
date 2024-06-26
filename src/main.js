// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'
import store from "./store/index.js";


const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(store)
app.mount('#app');