<template>
  <main class="app">
    <Header> </Header>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>

<script>
// CSS
import "./styles/reset.css";
import "./styles/global.css";
// Components
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
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
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
}
</style>
