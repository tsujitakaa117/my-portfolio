<template>
  <div id="app">
    <!-- ナビゲーションメニュー -->
    <nav class="navbar">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>

    <!-- ここに現在のルートに対応するコンポーネントが表示されます -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 必要に応じてスタイルを記述します */
</style>
