<template>
  <div :class="['ui', Alert.type, 'message']">
    <div class="content">
      <h6 class="header">{{ Alert.title }}</h6>
      <p>{{ Alert.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Alert: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  padding: 0px;
}
</style>