<template>
  <v-main>
    <Navbar />
    <TaskList />
    <AddItem />
  </v-main>
</template>

<script>
// import axios from '@/axios.js';
import Navbar from '@/components/Navbar';
import TaskList from '@/components/TaskList';
import AddItem from '@/components/AddItem';

export default {
  components: { Navbar, TaskList, AddItem },

  created() {
    this.$store.dispatch('tasks');
    this.$store.dispatch('user');
  },
};
</script>
