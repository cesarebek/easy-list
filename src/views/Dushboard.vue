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
  created() {
    this.$store.dispatch('tasks');
  },
};
</script>
