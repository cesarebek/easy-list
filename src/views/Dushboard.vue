<template>
  <v-main>
    <Navbar />
    <h1>Welcome back {{ user.name }}</h1>
  </v-main>
</template>

<script>
import axios from '@/axios.js';
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  mounted() {
    this.loadTasks();
  },
  data() {
    return {};
  },

  methods: {
    async loadTasks() {
      const res = await axios.get('tasks');
      console.log(res);
    },
  },
  computed: {
    user() {
      return this.$cookies.get('user');
    },
  },
};
</script>
