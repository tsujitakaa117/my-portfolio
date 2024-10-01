<template>
   <v-container fluid class="profile-container">
    <!-- プロフィールカード -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card height = "auto">
          <!-- プロフィール画像 -->
          <v-img
            :src="require('../assets/me.jpg')"
            alt="Profile Picture"
            height="auto"
            class="grey lighten-2"
            cover
          ></v-img>

          <!-- プロフィール詳細 -->
          <v-card-title class="headline">Takahiro Tsujino</v-card-title>
          <v-card-subtitle>Engineer / Developer / Researcher</v-card-subtitle>

          <v-card-text height = "auto">
            初めまして、私の名前は辻野貴大です<br>
            私は東京大学の学生で、エンジニア、開発者、研究者として活動しています。<br>
            私の専門分野は計測工学、Web開発、Unityによるゲーム開発です。<br>
            これまでに多くのプロジェクトに携わり、様々な技術を習得してきました。<br>
            今後も新しい技術を学び、新しいプロジェクトに挑戦していきたいと考えています。<br>
          </v-card-text>

          <!-- ソーシャルメディアリンク -->
          <v-card-actions>
            <v-btn icon>
              <v-icon color="blue darken-2">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="indigo">mdi-github</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="red">mdi-instagram</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- スキルセクション -->
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Skills</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="primary" dark>JavaScript</v-chip>
              <v-chip color="secondary" dark>Vue.js</v-chip>
              <v-chip color="blue" dark>Python</v-chip>
              <v-chip color="green" dark>Team Management</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- プロジェクトセクション -->
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Projects</v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Project 1: Web Application Development</v-list-item-title>
                  <v-list-item-subtitle>A modern web application built with Vue.js and Vuetify.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Project 2: Engineering Solution</v-list-item-title>
                  <v-list-item-subtitle>Developed an innovative solution for optimizing engineering workflows.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    <v-container class="border">
    <v-row>
      <v-col class="text-center">
        <h2>Awards</h2>
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
        <h3 class="headline mb-0">五月祭2024 グランプリ受賞</h3>
        <div class="grey--text">東大の学園祭である五月祭にて企画最優秀賞を獲得しました</div>
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
    name: 'ProfilePage',
  };

  
  </script>
  






  <style scoped>


  </style>
  