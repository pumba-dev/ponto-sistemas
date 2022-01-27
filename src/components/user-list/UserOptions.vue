<template>
  <div class="user-options">
    <i aria-hidden="true" class="edit circular icon" @click="editUser()"></i>
    <i
      aria-hidden="true"
      class="user delete circular icon"
      @click="deleteUser()"
    ></i>
  </div>
</template>

<script>
export default {
  methods: {
    editUser() {
      this.$emit("edit", "Edit User");
    },
    deleteUser() {
      this.$emit("delete", "Delete User");
    },
  },
};
</script>

<style scoped>
.user-options {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon {
  cursor: pointer;
}

.edit:hover {
  background-color: rgba(255, 255, 0, 0.5) !important;
}

.delete:hover {
  background-color: rgba(255, 0, 0, 0.5) !important;
}
</style>