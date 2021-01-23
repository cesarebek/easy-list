<template>
  <v-main>
    <v-container class="d-flex mt-15 pt-15">
      <v-row justify="center" align="center">
        <v-col cols="10" xs="9" sm="7" md="6" lg="5" xl="4">
          <v-card class="pa-5">
            <v-form>
              <v-text-field
                label="Email"
                outlined
                v-model="email"
                type="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                outlined
                v-model="password"
                type="password"
              ></v-text-field>
              <v-btn
                class="success py-xs-5 mb-3 text-capitalize"
                block
                rounded
                @click="login"
                >Login</v-btn
              >
              <p class="text-center ma-3 ">don't have an account yet?</p>
              <div block class="text-center">
                <v-btn
                  class="primary px-10 text-capitalize"
                  width="50%"
                  rounded
                  @click="signUp"
                >
                  Signup for Free!
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from '@/axios.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.isLoading = true;
        const res = await axios.post('login', {
          email: this.email,
          password: this.password,
        });
        //Saving token in the cookies
        this.$cookies.set('access_token', res.data.token);
        //Setting user state
        this.$cookies.set('user', res.data.data);
        //Redirecting to the user dushboard
        this.$router.push('dushboard');
      } catch (e) {
        console.log('Email or password not valid');
      }
    },
    signUp() {
      this.$router.push('register');
    },
  },
};
</script>
