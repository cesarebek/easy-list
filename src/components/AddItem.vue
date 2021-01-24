<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-6 pa-10 green" dark v-bind="attrs" v-on="on" icon>
          <v-icon> mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add New Task
        </v-card-title>

        <v-card-text class="px-10 py-5">
          <v-text-field label="Title" block v-model="title"> </v-text-field>
          <v-text-field label="Description" block v-model="description">
          </v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn class="success" @click="submitTask" block>
            <v-icon left>mdi-check-circle</v-icon> Add Task
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from '@/axios.js';
export default {
  data() {
    return {
      title: '',
      description: '',
      dialog: false,
    };
  },
  methods: {
    async submitTask() {
      await axios.post('task/store', {
        title: this.title,
        description: this.description,
      });
      this.dialog = false;
      this.$store.dispatch('tasks');
    },
  },
};
</script>

<style lang="scss" scoped>
.my-fixed {
  position: fixed;
  right: 5%;
  bottom: 4%;
  z-index: 5;
}
</style>
