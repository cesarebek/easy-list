<template>
  <v-main>
    <Navbar />
    <router-view />
    <AddItem />
  </v-main>
</template>

<script>
// import axios from '@/axios.js';
import Navbar from '@/components/Navbar';
import AddItem from '@/components/AddItem';

export default {
  components: { Navbar, AddItem },
  async created() {
    await this.$store.dispatch('tasks');
    // const res = await axios.get('tasks');
    // const tasks = await res.data.data;
    // this.$store.dispatch('tasks', tasks);
    await console.log('tasks: ' + this.tasks);
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
