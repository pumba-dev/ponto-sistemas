<template>
  <form class="user-form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style>
.user-form {
  width: min-content;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
</style>