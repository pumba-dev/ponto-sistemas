<template>
  <div class="field">
    <label>{{ text }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>