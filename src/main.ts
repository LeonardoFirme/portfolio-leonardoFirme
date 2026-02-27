/*
* file: src/main.ts
* description: Inicialização da aplicação Vue 3 com carregamento de estilos globais.
* author: Leonardo Firme
* version: 1.0.0
*/

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');