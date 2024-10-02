<template>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <!-- カード画像 -->
        <v-img
          :src="image"
          alt="Card Image"
          height="300px"
          cover
        ></v-img>
  
        <!-- カードタイトルと詳細 -->
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
  
        <!-- LEARN MORE ボタン -->
        <v-card-actions>
          <v-btn text color="blue" @click="dialog = true">Learn More</v-btn>
        </v-card-actions>
      </v-card>
  
      <!-- 拡大表示用のダイアログ（YouTube動画を含む） -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <!-- 拡大されたカードのタイトルと詳細 -->
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ expandedDescription }}</v-card-text>
  
          <!-- YouTube 動画の埋め込み -->
          <v-card-text>
            <div class="video-container">
              <iframe
                :src="youtubeEmbedUrl"
                width="560"
                height="315"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </v-card-text>
  
          <!-- ダイアログを閉じるボタン -->
          <v-card-actions>
            <v-btn text color="blue" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </template>
  
  <script>
  export default {
    name: "CardComponent",
    props: {
      title: String,
      description: String,
      image: String,
      expandedDescription: String,
      youtubeVideoId: String, // YouTube 動画の ID を受け取る
    },
    data() {
      return {
        dialog: false,
      };
    },
    computed: {
      youtubeEmbedUrl() {
        // YouTube 動画の埋め込み用 URL を生成
        return `https://www.youtube.com/embed/${this.youtubeVideoId}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  