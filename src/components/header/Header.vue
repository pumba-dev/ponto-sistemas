<template>
  <section class="header">
    <Logo></Logo>
    <GitHubLink></GitHubLink>
  </section>
</template>

<script>
import GitHubLink from "../buttons/GitHubBtn.vue";
import Logo from "./PontoLogo.vue";
export default {
  components: {
    Logo,
    GitHubLink,
  },
};
</script>

<style scoped>
.header {
  width: 80%;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .header {
    width: 70%;
  }
}

@media (min-width: 2560px) {
  .header {
    width: 60%;
  }
}
</style>