<template>
  <BorderText text="What I made"></BorderText>
  <v-container fluid class="profile-container">
    <v-row justify="center">
      <CardComponent
        v-for="work in works"
        :key="work.title"
        :title="work.title"
        :description="work.description"
        :expandedDescription="work.expandedDescription"
        :image="work.image"
      ></CardComponent>
      <CardComponentYoutube
        v-for="work in works_youtube"
        :key="work.title"
        :title="work.title"
        :description="work.description"
        :youtubeVideoId="work.youtubeVideoId"
        :image="work.image"
      ></CardComponentYoutube>
    </v-row>
  </v-container>
  </template>
  
  <script>
  import CardComponent from "@/components/CardComponent.vue"; // カードコンポーネントをインポート
  import BorderText from '@/components/BorderText.vue';
  import CardComponentYoutube from "@/components/CardComponentYoutube.vue";

  export default {
    components: {
      CardComponent,
      CardComponentYoutube,
      BorderText,
    },
    data() {
      return {
        Text: "Awards",
        works: [
          {
            title: "AI美女化カメラ",
            description: "生成AIを用いてカメラを起動すると美女に加工された画像が表示される魔法のカメラ",
            image: require("@/assets/IMG_1052.jpg"),
            expandedDescription: "Raspberry Pi、Stable Diffusionを用いて、AIによる画像生成を実現しました。",
          },
          {
            title: "VR中世アーチャー",
            description: "五月祭2024出展作品:中世の世界でアーチャーとして生き抜くVRゲーム",
            image: require("@/assets/medieval.png"),
            expandedDescription: "This paper was awarded for the development of a new measurement system using optical phenomena. The system has a resolution of atomic scale and is expected to be used in various fields.",
          },
        ],
        works_youtube: [
          {
            title: "プログラミングバトルロワイアル",
            description: "五月祭2024出展作品:ブロックプログラミングにて設計したロボット同士が戦う教育ゲーム",
            image: require("@/assets/prog_battle.png"),
            youtubeVideoId: "i7_MEcKsdBo?si=yyGUXuk9tgSgrwJh",
          },
          {
            title: "VRタイムトラベル",
            description: "五月祭2024出展作品:さまざまな時代を冒険しているかのような本格的VRゲーム",
            image: require("@/assets/time_travel.png"),
            youtubeVideoId: "w0VVW4HPpWg?si=x6MPLqz9QhNFWR4o",
          },
        ],
      };
    },
  };




  </script>
  






  <style scoped>


  </style>
  