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
            title: "Best Paper Award",
            description: "Awarded for the paper on the development of a new measurement system using optical phenomena",
            image: require("@/assets/IMG_2910.jpg"),
            expandedDescription: "This paper was awarded for the development of a new measurement system using optical phenomena. The system has a resolution of atomic scale and is expected to be used in various fields.",
          },
          {
            title: "Best Presentation Award",
            description: "Awarded for the presentation on the development of a new measurement system using optical phenomena",
            image: require("@/assets/IMG_2910.jpg"),
            expandedDescription: "This presentation was awarded for the development of a new measurement system using optical phenomena. The system has a resolution of atomic scale and is expected to be used in various fields.",
          },
          {
            title: "Best Poster Award",
            description: "Awarded for the poster on the development of a new measurement system using optical phenomena",
            image: require("@/assets/IMG_2910.jpg"),
            expandedDescription: "This poster was awarded for the development of a new measurement system using optical phenomena. The system has a resolution of atomic scale and is expected to be used in various fields.",
          },
        ],
      };
    },
  };




  </script>
  






  <style scoped>


  </style>
  