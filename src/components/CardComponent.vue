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
  
      <!-- 拡大表示用のダイアログ -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-img :src="image" alt="Card Image" height="400px" cover></v-img>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ expandedDescription }}</v-card-text>
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
    },
    data() {
      return {
        dialog: false,
      };
    },
  };
  </script>
  