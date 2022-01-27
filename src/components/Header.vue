<template>
  <section class="header">
    <Logo></Logo>
    <GitHubLink></GitHubLink>
  </section>
</template>

<script>
import GitHubLink from "./GitHubLink.vue";
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
    GitHubLink,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  width: 80%;
  margin: auto;
}

@media (min-width: 1024px) {
  .header {
    padding: 2rem 0rem;
    width: 70%;
  }
}

@media (min-width: 2560px) {
  .header {
    width: 60%;
  }
}
</style>