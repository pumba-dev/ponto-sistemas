<template>
  <h1 class="view-title">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.view-title {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
}
</style>