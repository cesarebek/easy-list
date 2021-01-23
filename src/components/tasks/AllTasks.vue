<template>
  <v-main>
    <TaskItem
      v-for="task in allTasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :completed="task.completed"
      :id="task.id"
    />
    <v-alert type="info" v-if="this.allTasks.length === 0" class="text-center"
      >Any task yet. Start adding your first one!
    </v-alert>
  </v-main>
</template>

<script>
import TaskItem from '@/components/TaskItem';
export default {
  components: { TaskItem },
  computed: {
    allTasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
