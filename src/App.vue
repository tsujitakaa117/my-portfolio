<template>
  <div id="app">
    <!-- ナビゲーションメニュー -->

    <div class="navbar">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
    </div>

    <!-- ここに現在のルートに対応するコンポーネントが表示されます -->
    <router-view>
    </router-view>
    <footer>
      <p>Contact</p>
      <p>Mail: jiino0607@gmail.com</p>
      <a href="https://github.com/tsujitakaa117">github</a>
    </footer>
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
  justify-content: right;

  min-width: 100%;
  margin-top: 0;
  hidden: 0;
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

.menu a {
  color: white;
  text-decoration: none;
}

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
