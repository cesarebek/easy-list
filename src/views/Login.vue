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
              <v-alert type="error" v-if="error" class="text-center">
                {{ error }}
              </v-alert>
              <v-btn
                class="success py-xs-5 mb-3 text-capitalize"
                block
                rounded
                @click="login"
                >Login
              </v-btn>
              <p class="text-center ma-3 ">don't have an account yet?</p>
              <div block class="text-center">
                <router-link to="/register"
                  ><v-btn
                    class="primary px-10 text-capitalize"
                    width="50%"
                    rounded
                  >
                    Signup for Free!
                  </v-btn>
                </router-link>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// import axios from '@/axios.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
