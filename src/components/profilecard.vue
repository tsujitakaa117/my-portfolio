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

          <v-card-text>
            初めまして、私の名前は辻野貴大です<br>
            私は東京大学工学部精密工学科の学生で、エンジニア、開発者、研究者として活動しています。<br>
            私の専門分野は計測工学、Web開発、Unityによるゲーム開発です。<br>
            これまでに多くのプロジェクトに携わり、様々な技術を習得してきました。<br>
            今後も新しい技術を学び、新しいプロジェクトに挑戦していきたいと考えています。<br>
          </v-card-text>

          <!-- ソーシャルメディアリンク -->
          
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
              <v-chip color="green" dark>Unity</v-chip>
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
                  <v-list-item-title>Project 1: 原子スケール分解能を持つ、次世代リニアエンコーダの開発</v-list-item-title>
                  <v-list-item-subtitle>光学現象を用いて今までにない計測システムの開発をしています</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Project 2: Unityを用いたゲーム開発</v-list-item-title>
                  <v-list-item-subtitle>UnityとOculus Questを用いて世界観に没入できるVRゲームを開発しています</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Project 3: Vue.jsを用いたHP作成</v-list-item-title>
                  <v-list-item-subtitle>UI/UXデザインについて勉強しており、HPを作成しています</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  name: 'ProfileCard',
};
</script>