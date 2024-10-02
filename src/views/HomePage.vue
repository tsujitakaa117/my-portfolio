<template>
    <Profilecard></Profilecard>
    <v-container class="text-center mt-12">
        <v-row>
          <v-col cols="12">
            <h1 class="display-2">Welcome to My Portfolio</h1>
            <p class="headline">Engineer, Developer, and Designer</p>
            <v-btn color="primary" large @click="goToWorks">See My Works</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>

</template>



<script>
import Profilecard from '@/components/profilecard.vue';

export default {
  components: {
    Profilecard,
  },
  methods: {
    goToWorks() {
      this.$router.push('/works');
    },
  },
};


</script>


<style>
.v-spacer {
  height: 100px;
}
</style>