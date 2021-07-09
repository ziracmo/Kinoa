import './index.scss';

import App from './App.vue';
import { createApp } from 'vue';
import router from './router/index';

createApp(App).use(router).mount('#app');
