<template>
  <div class="edit-user">
    <transition name="fade" appear>
      <div
        class="edit-background"
        v-if="showUpdate"
        @click="sendHideEvent"
      ></div>
    </transition>

    <transition name="slide" appear>
      <div class="form-container" v-if="showUpdate">
        <h1 class="edit-title">Alterar Dados da Pessoa</h1>

        <div>
          <Alert v-show="alert.show" :Alert="alert"></Alert>
        </div>

        <form
          class="edit-form"
          :class="['ui', alert.type, 'form']"
          @submit.prevent="submitUpdate"
        >
          <div class="field" :class="{ error: inputErr.cpf }">
            <label>CPF</label>
            <input
              placeholder="Insira seu CPF"
              type="text"
              v-model="user.cpf"
              v-mask="'###.###.###-##'"
              disabled
            />
          </div>

          <div class="field" :class="{ error: inputErr.name }">
            <label>Nome</label>
            <input
              placeholder="Insira seu nome"
              type="text"
              maxlength="20"
              v-model="user.name"
            />
          </div>

          <div class="field" :class="{ error: inputErr.phone }">
            <label>Telefone</label>
            <input
              placeholder="Insira seu Número"
              type="text"
              v-model="user.phone"
              v-mask="'(##) #####-####'"
            />
          </div>

          <div class="options">
            <CancelBtn @click="sendHideEvent"></CancelBtn>
            <SubmitFormBtn
              type="submit"
              :disabled="btnDisabled"
              :class="{ loading: btnDisabled }"
            ></SubmitFormBtn>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { onBeforeUpdate, ref } from "vue";
import db from "../../services/Firestore.js";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import Alert from "../general/Alert.vue";
import SubmitFormBtn from "../general/SubmitFormBtn.vue";
import CancelBtn from "../general/CancelBtn.vue";

export default {
  components: { Alert, SubmitFormBtn, CancelBtn },
  props: {
    userID: {
      typeof: Object,
      required: true,
    },
    showUpdate: {
      typeof: Boolean,
      required: true,
    },
  },
  setup(props) {
    async function getUser() {
      const userRef = doc(db, "users", props.userID);
      const userSnap = await getDoc(userRef);
      return userSnap.data();
    }

    const user = ref({
      name: "",
      cpf: "",
      phone: "",
    });

    onBeforeUpdate(async () => {
      await getUser().then((resp) => {
        user.value = { ...resp };
      });
    });

    return { user };
  },
  data() {
    return {
      inputErr: {
        name: false,
        cpf: false,
        phone: false,
      },
      alert: {
        show: false,
        type: "",
        title: "",
        message: "",
      },
      btnDisabled: false,
    };
  },
  methods: {
    sendHideEvent() {
      this.$emit("hideUpdate");
    },

    submitUpdate() {
      const user = this.user;

      if (this.userIsValid(user)) {
        this.resetAlert();
        this.btnDisabled = true;
        this.updateUserOnDatabase(user).then(() => {
          this.$emit("UserUpdated");
        });
      } else {
        this.verifyInputErr();
      }
    },

    userIsValid(user) {
      return (
        user.name.length >= 5 &&
        user.cpf.length == 14 &&
        user.phone.length == 15
      );
    },

    resetAlert() {
      this.inputErr = {
        name: false,
        cpf: false,
        phone: false,
      };
      this.alert = {
        show: false,
        type: "",
        title: "",
        message: "",
      };
    },

    async updateUserOnDatabase(user) {
      const userRef = doc(db, "users", user.cpf);

      await updateDoc(userRef, {
        name: user.name,
        phone: user.phone,
      });
    },

    showAlert(type, title, message) {
      this.alert.type = type;
      this.alert.title = title;
      this.alert.message = message;
      this.alert.show = true;
    },

    verifyInputErr() {
      const user = this.user;
      const inputErr = this.inputErr;
      let inputWitHErr = [];

      if (user.name.length < 5) {
        inputErr.name = true;
        inputWitHErr.push("Nome");
      } else {
        inputErr.name = false;
      }

      if (user.phone.length != 15) {
        inputErr.phone = true;
        inputWitHErr.push("Telefone");
      } else {
        inputErr.phone = false;
      }

      if (inputWitHErr.length > 0)
        this.showAlert(
          "error",
          "Erro nos Dados!",
          "Preencha os seguintes campos corretamente."
        );
    },
  },
};
</script>

<style>
.form-container {
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

.edit-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.edit-form {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.edit-title {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100vh);
}
</style>