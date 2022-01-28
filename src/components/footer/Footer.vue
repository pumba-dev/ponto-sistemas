<template>
  <section class="footer">
    <PumbaLogo></PumbaLogo>
    <Copyright></Copyright>
    <MadeWith></MadeWith>
  </section>
</template>

<script>
import PumbaLogo from "./PumbaLogo.vue";
import Copyright from "./Copyright.vue";
import MadeWith from "./MadeWith.vue";
export default {
  components: {
    PumbaLogo,
    Copyright,
    MadeWith,
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 0rem;
  background-color: var(--primary-color);
}
</style>