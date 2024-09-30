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
/* ナビゲーションメニュー */
.navbar {
  background-color: #bd9acd;
  display: flex;
  justify-content: center;
  position: fixed;
  min-width: 100%;
}

.menu {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu ul {
  list-style-type: none;
  margin-right: 0;
  padding: 0;
}

.menu li {
  padding: 10px;
}
</style>
