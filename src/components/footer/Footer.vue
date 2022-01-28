<template>
  <section class="footer">
    <PumbaLogo></PumbaLogo>
    <Copyright></Copyright>
  </section>
</template>

<script>
import PumbaLogo from "./PumbaLogo.vue";
import Copyright from "./Copyright.vue";
export default {
  components: {
    PumbaLogo,
    Copyright,
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--primary-color);
  gap: 1rem;
  padding: 1rem 0rem;
}
</style>