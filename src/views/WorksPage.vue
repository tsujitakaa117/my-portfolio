<template>


  <!-- タイトル -->
  <v-container class="border">
    <v-row>
      <v-col class="text-center">
        <h2>私の作った作品たち</h2>
      </v-col>
    </v-row>
  </v-container>
    <v-container fluid height="1400px">
      <v-row justify="center">
        <v-col>
    <v-card max-width="400">
    <v-img
      :src="require('../assets/IMG_2910.jpg')"
      alt="Desert"
      height="300px"
      class="grey lighten-2"
      cover
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">タイトル！</h3>
        <div class="grey--text">説明文！</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn text color="blue">Learn More</v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  <v-col>
  <v-card max-width="400">
    <v-img
      :src="require('../assets/IMG_2910.jpg')"
      alt="Desert"
      height="300px"
      class="grey lighten-2"
      cover
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">おちんちん</h3>
        <div class="grey--text">ちんこちんこちんこ</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn text color="blue">Learn More</v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  <v-col>
  <v-card max-width="400">
    <v-img
      :src="require('../assets/IMG_2910.jpg')"
      alt="Desert"
      height="300px"
      class="grey lighten-2"
      cover
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">ちんこ</h3>
        <div class="grey--text">ちんこ</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn text color="blue">Learn More</v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
</v-row>
</v-container>
</template>




<script>
export default {
    name: 'WorksPage',
};

</script>


<style scoped>
</style>