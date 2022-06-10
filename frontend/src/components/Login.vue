<template>
  <v-app>
    <v-card width="500px" class="mx-auto mt-5">
      <v-toolbar color="primary" flat> test </v-toolbar>
      <v-card-title> Login?? </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="user ID"
            v-model="authId"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="password"
            @click:append="showPassword = !showPassword"
            v-model="authPass"
          />
          <v-card-actions>
            <v-btn block class="info" @click="post">LogIn</v-btn>
          </v-card-actions>

          <div class="mt-12 text-center">
            {{ msg }}
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Login", // eslint-disable-line
  data() {
    return {
      showPassword: false,
      msg: "userIDとPasswordを入力してください",
      authId: "",
      authPass: "",
    };
  },
  methods: {
    async post() {
      const data = { id: this.authId, pass: this.authPass };
      this.msg = await this.$axios
        .post("/test", data)
        .then(function (response) {
          console.log(response);
          return response.data.message;
        })
        .catch(function (error) {
          console.log(error);
          return error.message;
        });

      if (this.msg == "OK") {
        this.$store.dispatch("fetch", this.authId);
        this.$router.push("Page1");
      }
    },
  },
};
</script>
