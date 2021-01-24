<template>
  <v-main>
    <v-container>
      <TaskItem
        v-for="task in allTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :completed="task.completed"
        :id="task.id"
      />
      <v-alert
        type="info"
        class="text-center"
        v-if="allTasks.length === 0 || undefined"
      >
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
    //Tasks state
    allTasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
