<template>
  <profilecard></profilecard>
  <BorderText text="Awards"></BorderText>
  <v-container fluid class="profile-container">
    <v-row justify="center">
      <CardComponent
        v-for="award in awards"
        :key="award.title"
        :title="award.title"
        :description="award.description"
        :image="award.image"
        :expandedDescription="award.expandedDescription"
      ></CardComponent>
    </v-row>
  </v-container>
  </template>
  
  <script>
  import profilecard from '@/components/profilecard.vue';
  import CardComponent from "@/components/CardComponent.vue"; // カードコンポーネントをインポート
  import BorderText from '@/components/BorderText.vue';


  export default {
    components: {
      profilecard,
      CardComponent,
      BorderText,
    },
    data() {
      return {
        Text: "Awards",
        awards: [
          {
            title: "五月祭2023 グランプリ",
            description: "東大の学園祭である五月祭にてチームリーダとして参加したプロジェクトが最優秀賞を受賞しました",
            image: require("@/assets/IMG_2131.jpg"),
            expandedDescription: "「精密Lab.」という学科企画にて、Arduinoを用いた体験型アトラクションを制作、展示しました。",
          },
          {
            title: "五月祭2024 グランプリ",
            description: "昨年に引き続き、東大の学園祭である五月祭にてチームリーダとして参加したプロジェクトが最優秀賞を受賞しました",
            image: require("@/assets/IMG_2910.jpg"),
            expandedDescription: "「精密Lab.」という学科企画にて、「VRタイムトラベル」というVR体験型アトラクションを制作、展示しました。",
          },
        ],
      };
    },
  };




  </script>
  






  <style scoped>


  </style>
  