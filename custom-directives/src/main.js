import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import clickOutsideDirective from './click-outside-directive';

createApp(App).directive('click-outside', clickOutsideDirective).mount('#app');
