<template>
  <main class="app">
    <Header> </Header>
    <router-view class="view"></router-view>
  </main>
</template>

<script>
// CSS
import "./styles/reset.css";
import "./styles/global.css";
// Components
import Header from "./components/header/Header.vue";

export default {
  components: {
    Header,
  },
  setup() {
    return {
      name: "App",
    };
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  height: 100%;
}

.view {
  padding-top: 2rem;
}
</style>
