<template>
  <v-main>
    <TaskItem
      v-for="task in completedTasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :completed="task.completed"
      :id="task.id"
    />
    <v-alert
      type="info"
      v-if="this.completedTasks.length === 0"
      class="text-center"
      >Any completed task yet. Let's complete something before!
    </v-alert>
  </v-main>
</template>

<script>
import TaskItem from '@/components/TaskItem';
export default {
  components: { TaskItem },
  computed: {
    completedTasks() {
      return this.$store.getters.completedTasks;
    },
  },
};
</script>
