<template>
  <h3 class="ui header">{{ text }}</h3>
</template>

<script>
export default {
  props: {
    text: {
      typeof: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  color: var(--primary-color);
}
</style>