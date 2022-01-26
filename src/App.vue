<template>
  <main>
    <Header> </Header>
    <router-view></router-view>
  </main>
</template>

<script>
// CSS
import "./styles/reset.css";
import "./styles/global.css";
// Components
import Header from "./components/Header.vue";

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
</style>
