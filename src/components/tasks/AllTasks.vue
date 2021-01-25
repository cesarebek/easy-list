<template>
  <v-main>
    <v-container>
      <v-alert type="error" v-if="isLoading">Loading...</v-alert>
      <div v-else>
        <TaskItem
          v-for="task in allTasks"
          :key="task.id"
          :title="task.title"
          :description="task.description"
          :completed="task.completed"
          :id="task.id"
        />
      </div>
      <v-alert type="info" class="text-center" v-if="check">
        Any task yet. Add your first one now!
      </v-alert>
    </v-container>
  </v-main>
</template>

<script>
import TaskItem from '@/components/TaskItem';

export default {
  components: { TaskItem },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    check() {
      return this.allTasks.length == 0;
    },
    allTasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
