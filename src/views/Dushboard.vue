<template>
  <v-main>
    <Navbar />
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :completed="task.completed"
      :due_to="task.due_to"
      :id="task.id"
    />
  </v-main>
</template>

<script>
import axios from '@/axios.js';
import Navbar from '@/components/Navbar';
import TaskItem from '@/components/TaskItem';

export default {
  components: { Navbar, TaskItem },
  mounted() {
    this.loadTasks();
  },
  methods: {
    async loadTasks() {
      const tasks = await axios.get('tasks');
      this.$store.dispatch('tasks', tasks.data.data);
      console.log(tasks);
    },
  },
  computed: {
    user() {
      return this.$cookies.get('user');
    },
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
