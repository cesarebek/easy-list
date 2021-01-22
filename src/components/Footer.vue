<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="25px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Hello, I'm Cezary and this is my todo app made with Laravel and Vue JS
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        2021 — <strong>Bek Cezary</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-linkedin', 'mdi-instagram'],
  }),
};
</script>
