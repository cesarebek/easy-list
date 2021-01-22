<template>
  <v-main>
    <v-container>
      <v-card color="#385F73" dark>
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>

        <v-card-subtitle>{{ description }}</v-card-subtitle>

        <v-card-actions>
          <v-switch v-model="completed" inset label="Complete"></v-switch>

          <v-spacer></v-spacer>

          <v-menu bottom left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="mr-3 ">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>Update</v-list-item>
              <v-list-item @click="destroy(id)">Delete</v-list-item>
            </v-list>
          </v-menu>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import axios from '@/axios.js';
export default {
  props: ['title', 'description', 'completed', 'due_to', 'id'],
  methods: {
    async destroy(id) {
      await axios.delete(`task/${id}`);
      //Refreshing list of whole tasks
      const updTasks = await axios.get('tasks');
      this.$store.dispatch('tasks', updTasks.data.data);
    },
  },
};
</script>
