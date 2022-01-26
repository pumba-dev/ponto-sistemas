import { createApp } from 'vue'
import Root from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue';

// Create Vue App
const App = createApp(Root)

// Plugins
App.use(router)
App.use(SuiVue);

// Mount
App.mount('#app')
