<template>
  <v-app id="app">
    <!-- ナビゲーションメニュー -->
    <v-app-bar color="indigo" dark>
      <v-toolbar-title>辻野貴大のホームページ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <router-link to="/" class="nav-link">Home</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/profile" class="nav-link">Profile</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/works" class="nav-link">Works</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/blog" class="nav-link">Blog</router-link>
      </v-btn>
    </v-app-bar>

    <!-- ルーティングされたコンテンツ -->
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- フッター -->
    <v-footer 
    class="bg-indigo lighten-1 text-center d-flex flex-column pa-4 height-10px"
  >
    <!-- ソーシャルアイコンボタン -->
 

    <!-- 説明テキスト -->
    <div class="pt-4">
      あああああああああああああああ
    </div>

    <v-divider class="my-4"></v-divider>

    <!-- 年とVuetify -->

  </v-footer>
  </v-app>
</template>

<script>


export default {
  data: () => ({
    icons: [
      'mdi-',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>

<style scoped>
/* ナビゲーションメニューのリンクスタイル */
.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

/* カスタムフッタースタイル */
footer {
  background-color: #bd9acd;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
}
</style>
