<template>
  <v-main>
    <v-container>
      <TaskItem
        v-for="task in completedTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
      <v-alert type="info" class="text-center" v-if="check">
        Any completed tasks yet. Let's complete something!
      </v-alert>
    </v-container>
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
    check() {
      return this.completedTasks.length == 0;
    },
  },
};
</script>
