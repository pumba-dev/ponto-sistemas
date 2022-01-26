import { createApp } from 'vue'
import Root from './App.vue'
import SuiVue from 'semantic-ui-vue';

const App = createApp(Root)

App.use(SuiVue);

App.mount('#app')
