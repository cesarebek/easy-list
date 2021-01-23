<template>
  <v-main>
    <Navbar
      @renderAllTasks="allTasks"
      @renderCompletedTasks="compTasks"
      @renderUncompletedTasks="unCompTask"
    />
    <TaskItem
      v-for="task in tasksToRender"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :completed="task.completed"
      :id="task.id"
    />
    <h1 class="text-center mt-5" v-if="noTasks">No tasks yet!</h1>
    <AddItem />
  </v-main>
</template>

<script>
import axios from '@/axios.js';
import Navbar from '@/components/Navbar';
import TaskItem from '@/components/TaskItem';
import AddItem from '@/components/AddItem';

export default {
  components: { Navbar, TaskItem, AddItem },
  data() {
    return {
      tasksToRender: [],
    };
  },

  created() {
    this.tasksToRender = this.loadTasks();
  },

  methods: {
    //All tasks loader
    async loadTasks() {
      const res = await axios.get('tasks');
      const tasks = res.data.data;
      this.$store.dispatch('tasks', tasks);
      console.log('All Tasks');
      this.tasksToRender = this.tasksGetter;
    },
    //Whole tasks loader
    allTasks() {
      this.tasksToRender = this.tasksGetter;
    },
    //Completed tasks loader
    compTasks() {
      this.tasksToRender = this.completedTasksGetter;
    },
    //Uncompleted tasks loader
    unCompTask() {
      this.tasksToRender = this.unCompletedTasksGetter;
    },
  },
  computed: {
    noTasks() {
      return this.tasksToRender.length === 0 || null;
    },
    user() {
      return this.$cookies.get('user');
    },
    tasksGetter() {
      return this.$store.getters.tasks;
    },
    completedTasksGetter() {
      return this.$store.getters.completedTasks;
    },
    unCompletedTasksGetter() {
      return this.$store.getters.unCompletedTasks;
    },
  },
};
</script>
