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
        <h2>名前</h2>
        <p>辻野貴大</p>
        <h2>生年月日</h2>
        <p>2001年6月7日</p>
        <h2>出身地</h2>
        <p>北海道札幌市</p>
        <h2>趣味</h2>
        <p>ギター、ゲーム制作、</p>
        <h2>-About me-</h2>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああ  
    </div>
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
  </style>
  