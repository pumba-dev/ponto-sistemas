<template>
  <div>
    <transition name="fade" appear>
      <PopupBackground
        v-if="showDeleteConfirm"
        @click="this.$emit('hideDelete')"
      ></PopupBackground>
    </transition>
    <transition name="fade" appear>
      <PopupContainer class="popup-container" v-if="showDeleteConfirm">
        <PopupTitle text="Deseja Apagar Esta Pessoa?"></PopupTitle>
        <ButtonsContainer>
          <CancelBtn @click="this.$emit('hideDelete')"></CancelBtn>
          <DeleteBtn @click="this.$emit('delete')"></DeleteBtn>
        </ButtonsContainer>
      </PopupContainer>
    </transition>
  </div>
</template>

<script>
import PopupBackground from "../popup/PopupBackground.vue";
import PopupContainer from "../popup/PopupContainer.vue";
import PopupTitle from "../popup/PopupTitle.vue";
import CancelBtn from "../buttons/CancelBtn.vue";
import DeleteBtn from "../buttons/DeleteBtn.vue";
import ButtonsContainer from "../buttons/ButtonsContainer.vue";

export default {
  components: {
    CancelBtn,
    DeleteBtn,
    PopupBackground,
    PopupContainer,
    PopupTitle,
    ButtonsContainer,
  },
  props: {
    showDeleteConfirm: {
      typeof: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.popup-container {
  width: max-content;
  padding: 25px 50px;
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