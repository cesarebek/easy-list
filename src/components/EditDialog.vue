<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-icon left>mdi-update</v-icon>
          Update
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Task Update
        </v-card-title>

        <v-card-text>
          <v-text-field label="Title" v-model.trim="titleUpd"></v-text-field>
          <v-text-field
            label="Description"
            v-model="descriptionUpd"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn block class="success" @click="save(id)" :disabled="check">
            <v-icon left>mdi-check-circle</v-icon> Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from '@/axios.js';

export default {
  props: ['id', 'title', 'description'],
  data() {
    return {
      titleUpd: this.title,
      descriptionUpd: this.description,
      dialog: false,
    };
  },
  computed: {
    check() {
      return this.titleUpd === '';
    },
  },
  methods: {
    async save(id) {
      await axios.put(`task/${id}`, {
        title: this.titleUpd,
        description: this.descriptionUpd,
      });
      const updTasks = await axios.get('tasks');
      this.$store.dispatch('tasks', updTasks.data.data);
      this.dialog = false;
    },
  },
};
</script>
