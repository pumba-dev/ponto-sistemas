<template>
  <div>
    <transition name="fade" appear>
      <div
        class="delete-background"
        v-if="showDeleteConfirm"
        @click="this.$emit('hideDelete')"
      ></div>
    </transition>
    <transition name="fade" appear>
      <div class="delete-container" v-if="showDeleteConfirm">
        <h3 class="ui header">Deseja Apagar Esta Pessoa?</h3>
        <div class="delete-options">
          <button class="ui primary button" @click="this.$emit('delete')">
            Apagar
          </button>
          <button class="ui button" @click="this.$emit('hideDelete')">
            Cancelar
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showDeleteConfirm: {
      typeof: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.delete-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.delete-container {
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

.header {
  color: var(--primary-color);
}

.delete-options {
  display: flex;
  gap: 1.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>