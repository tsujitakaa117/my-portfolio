<template>
    <div class="video-container">
      <video autoplay muted loop id="myVideo">
        <source :src="src" type="video/mp4">
      </video>
  
      <!-- Text overlay -->
      <div class="overlay-text">
        <h1>{{text}}</h1>
      </div>
    </div>
</template>


<script>
export default {
    name: 'MovieHeader',
    props: {
        src: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>



<style scoped>
.video-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full screen */
    overflow: hidden;
    margin-top:30px;
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
</style>
