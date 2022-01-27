import { createApp } from 'vue'
import Root from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue';
import VueTheMask from 'vue-the-mask'

// Create Vue App
const App = createApp(Root)

// Plugins
App.use(router)
App.use(SuiVue);
App.use(VueTheMask)

// Mount
App.mount('#app')
