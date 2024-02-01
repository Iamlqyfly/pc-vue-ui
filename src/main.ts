import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import QUI from '../packages';

import './assets/markdown.css';
import './style.css'

import Preview from './components/Preview.vue';

const app = createApp(App);
app.component('Preview', Preview)
app.use(QUI).use(router).mount('#app')
