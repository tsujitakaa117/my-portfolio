<template>
    <v-container class="border">
    <v-row>
      <v-col class="text-center">
        <h2>{{ text }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
