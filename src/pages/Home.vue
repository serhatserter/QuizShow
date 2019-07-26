<template>
  <div class="nameElements">
    <h1>Name: {{playername}}</h1>
    <br />

    <input
      name="inputname"
      class="nameInput"
      v-model="usernameInput"
      v-validate="'required|min:2'"
      @keyup.enter="clickButton()"
      autocomplete="off"
    />
    <br />

    <b-button variant="light" class="nameInput" @click="clickButton()">Play</b-button>
    <br />

    <span>{{ errors.first('inputname') }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Play from "./Play.vue";

export default {
  name: "Home",
  components: { Play },

  data() {
    return {};
  },

  computed: {
    ...mapState(["playername"]),

    usernameInput: {
      get() {
        return this.playername;
      },
      set(value) {
        this.playerNameUpdate(value);
      }
    }
  },

  methods: {
    ...mapActions(["playerNameUpdate"]),

    async clickButton() {
      const validationResponse = await this.$validator.validateAll();

      if (!validationResponse) {
        return false;
      }

      this.playerNameUpdate(this.usernameInput);

      this.$router.push({ name: "play" });
    }
  }
};
</script>

<style>
.nameElements {
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.nameInput {
  width: 400px;
  text-align: center;
}
</style>
