<template>
  <div class="buttons-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.buttons-container {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 0.25rem;
}
</style>