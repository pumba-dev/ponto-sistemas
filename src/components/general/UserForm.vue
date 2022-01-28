<template>
  <form class="user-form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.user-form {
  width: min-content;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  gap: 1rem;
}
</style>