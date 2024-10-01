<template>
    <v-container class="video-container pa-0" fluid>
    <video autoplay muted loop id="myVideo">
      <source :src="require('../assets/works.mp4')" type="video/mp4">
    </video>

  </v-container>

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
.video-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full screen */
    overflow: hidden;
    margin-top:30px;
  }
  
  #myVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the entire background */
    z-index: -1; /* Behind the text */
  }
  
  /* Text overlay */
  .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1; /* Ensure it's above the video */

  }
  
  .overlay-text h1 {
    font-size:6rem;
  }
  
  .overlay-text p {
    font-size: 1.5rem;
  }
  .border
  {
      width: 100%;
      margin-left: auto;

  }
  .border h2
  {
      text-align: center;
      padding-top: 20px;
      padding-bottom: 20px;
  }


  /* .WorksGaraly
  {
      margin-top: 30px;
      width:80%;
      height:300px;
      margin:auto;
      border: 1px solid #000;
  } */

</style>