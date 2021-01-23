<template>
  <v-main>
    <TaskItem
      v-for="task in unCompletedTasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :completed="task.completed"
      :id="task.id"
    />
    <v-alert
      type="info"
      v-if="this.unCompletedTasks.length === 0"
      class="text-center"
      >Any uncompleted tasks. Good job!
    </v-alert>
  </v-main>
</template>

<script>
import TaskItem from '@/components/TaskItem';
export default {
  components: { TaskItem },
  computed: {
    unCompletedTasks() {
      return this.$store.getters.unCompletedTasks;
    },
  },
};
</script>
