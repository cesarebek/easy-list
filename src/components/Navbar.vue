<template>
  <nav>
    <v-app-bar
      height="100"
      color="#6A76AB"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Welcome back {{ user.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="mr-3 ">
            <v-avatar>
              <img
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="profile pic"
              />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">Logout</v-list-item>
          <v-list-item>Settings</v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <router-link to="/dushboard/all"><v-tab>All</v-tab></router-link>
          <router-link class="mytext" to="/dushboard/completed"
            ><v-tab>Completed</v-tab></router-link
          >
          <router-link class="mytext" to="/dushboard/running"
            ><v-tab>Running</v-tab></router-link
          >
        </v-tabs>
      </template>
    </v-app-bar>
  </nav>
</template>

<script>
import axios from '@/axios.js';

export default {
  computed: {
    user() {
      return this.$cookies.get('user');
    },
  },
  methods: {
    async logout() {
      try {
        await axios.post('user/logout');
        this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
        this.$router.push('/login');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.mytext {
  text-decoration: none;
  color: white;
}
</style>
