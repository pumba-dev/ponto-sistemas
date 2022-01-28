<template>
  <div class="popup-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>