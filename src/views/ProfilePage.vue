<template>
    <div class="video-container">
      <video autoplay muted loop id="myVideo">
        <source src="../assets/14831_1280x720.mp4" type="video/mp4">
      </video>
  
      <!-- Text overlay -->
      <div class="overlay-text">
        <h1>About me</h1>
      </div>
    </div>
    <div class = "border">
        <h2>Profile</h2>
    </div>
    <div class = "content">
      <img src="../assets/me.jpg" alt="me">
      <div class = "text">
        <h2>-名前-</h2>
        <p>辻野貴大</p>
        <h2>-生年月日-</h2>
        <p>2001年6月7日</p>
        <h2>-出身地-</h2>
        <p>北海道札幌市</p>
        <h2>-趣味-</h2>
        <p>ギター、ゲーム制作、読書</p>
        <h2>-History-</h2>
        2001年6月   北海道札幌市にて誕生<br>
        2021年4月   東京大学理科二類入学<br>
        2023年3月   東京大学工学部精密工学科進学<br>
        2024年3月   <a href =https://www.photon.rcast.u-tokyo.ac.jp/>高橋道畑研究室</a>にて研究開始<br>
        2025年3月   東京大学大学院工学系研究科進学予定<br>
        <h2>-Skill-</h2>
        <p>Python, C++, Java, HTML, CSS, JavaScript, Vue.js, Unity, Blender<br>を習得しています<br><br>
            中国語、英語、日本語を話すことができます<br>
            科学技術で人類を進化させることが夢です</p>
    </div>
    </div>
    <div class = "border2">
        <h2>Awards</h2>
    </div>

    <div class ="awardlist">
        <ul>
            <li>
                <div class="v-card">
                    <h2>2024/05 東京大学五月祭グランプリ受賞</h2>
                    <img src="../assets/IMG_2910.jpg" alt="award">
                    <div class="v-card__text">
                        <p>自身の開発したゲーム、およびチームリーダとして学科企画「精密Lab.」にて最優秀賞を獲得しました </p>
                    </div>
                </div>
            </li>
            </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfilePage',
  };
  </script>
  






  <style scoped>
  /* Video container */
  .video-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full screen */
    overflow: hidden;

  }
  
  #myVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the entire background */
    z-index: -1; /* Behind the text */
  }
  
  /* Text overlay */
  .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1; /* Ensure it's above the video */

  }
  
  .overlay-text h1 {
    font-size:6rem;
  }
  
  .overlay-text p {
    font-size: 1.5rem;
  }
    .border
    {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .border h2
    {
        font-size: 2rem;
        margin-left: 50%;
        margin-right: auto;
        justify-content: center;
    }

  .content 
  {
    display: flex;
    border: 1px solid black;
    width: 85%;
    background-color: #bd9acd;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
  .content img
    {
        width: 30%;
        display: block;
        margin-left: 0;
        border-radius: 50%;
        padding: 50px;
        height: 30%;
        margin-top: 3%;
  }
    .content h2
    {
        font-size: 2rem;
        margin-left: 0;
    }
    .text
    {
        padding: 50px;
    }
    .border2 h2
    {
        font-size: 2rem;
        margin-left: 50%;
        margin-right: auto;
        justify-content: center;
    }
    .border2
    {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
    .v-card
    {
        background-color: #bd9acd;
        border-radius: 10px;
        border: 1px solid black;
    }
    .awardlist
    {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .awardlist ul
    {
        list-style-type: none;
    }
    .awardlist li
    {
        margin-top: 20px;
        width: 20%;
    }
    .v-card img
    {
        width: 100%;

    }
    .v-card__text
    {
        padding: 10px;
    }
    .vcard h2
    {
        font-size: 1.5rem;
    }

  </style>
  