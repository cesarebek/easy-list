<template>
  <v-main>
    <v-container>
      <v-card color="#385F73" dark class="mx-sm-15 mx-lg-15">
        <v-card-title :class="lineThroughMain">
          {{ title }}
        </v-card-title>

        <v-card-subtitle :class="lineThroughSub">{{
          description
        }}</v-card-subtitle>

        <v-card-actions>
          <v-switch
            inset
            :label="completedLabel"
            v-model="completedUpd"
            @click="updateCompleted(id)"
            class="ml-5"
          ></v-switch>

          <v-spacer></v-spacer>

          <v-menu bottom left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="mr-3" large>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                ><EditDialog
                  :title="title"
                  :description="description"
                  :completed="completed"
                  :id="id"
              /></v-list-item>
              <v-list-item @click="destroy(id)"
                ><v-btn text>
                  <v-icon left>mdi-delete</v-icon> Delete</v-btn
                ></v-list-item
              >
            </v-list>
          </v-menu>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import EditDialog from '@/components/EditDialog';

export default {
  props: ['title', 'description', 'completed', 'id'],
  data() {
    return {
      completedUpd: this.completed,
    };
  },
  components: { EditDialog },
  computed: {
    completedState() {
      return this.completed === 1 ? false : true;
    },
    completedLabel() {
      return this.completed === 1 ? 'Uncomplete' : 'Complete';
    },
    lineThroughMain() {
      return this.completed === 1
        ? 'headline text-decoration-line-through'
        : 'headline';
    },
    lineThroughSub() {
      return this.completed === 1 ? 'text-decoration-line-through' : '';
    },
  },
  methods: {
    //Task Complete toggle
    updateCompleted() {
      this.$store.dispatch('updateCompleted', {
        id: this.id,
        completed: this.completedState,
      });
    },
    //Task Delete
    destroy(id) {
      this.$store.dispatch('deleteTask', id);
    },
  },
};
</script>
