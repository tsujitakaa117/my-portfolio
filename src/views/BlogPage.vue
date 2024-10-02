<template>
    <BorderText text="Blog"></BorderText>
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
          works: [
            {
              title: "2024/10/02",
              description: "テスト",
              image: require("@/assets/IMG_1052.jpg"),
              expandedDescription: "テスト",
            },
            {
              title: "VR中世アーチャー",
              description: "五月祭2024出展作品:中世の世界でアーチャーとして生き抜くVRゲーム",
              image: require("@/assets/medieval.png"),
              expandedDescription: "Unityを用いて、VRゲームを制作しました。VRコントローラーを使って矢を射る感覚を楽しめます。",
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
    