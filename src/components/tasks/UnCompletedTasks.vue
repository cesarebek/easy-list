<template>
  <v-main>
    <v-container>
      <TaskItem
        v-for="task in unCompletedTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
      <v-alert type="info" class="text-center" v-if="check">
        Good job, all tasks are done!
      </v-alert>
    </v-container>
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
    check() {
      return this.unCompletedTasks.length == 0;
    },
  },
};
</script>
