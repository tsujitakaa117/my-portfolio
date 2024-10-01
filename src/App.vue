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
    class="bg-indigo lighten-1 text-center d-flex flex-column pa-4"
  >
    <!-- ソーシャルアイコンボタン -->
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        icon
        class="mx-4"
        variant="text"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </div>

    <!-- 説明テキスト -->
    <div class="pt-4">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider class="my-4"></v-divider>

    <!-- 年とVuetify -->
    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
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
