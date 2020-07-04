<template>
  <div class="home grid">
    <div class="intro">
        <h1>Hello there,</h1>
     <h2>I'm Rodger.</h2>
     <h3>A FullStack Web Developer</h3>
    </div>
    
    <img :src="dev" alt="">
    <div>
      <router-link to="/about" class="btn">About</router-link>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Homesection',
  data() {
    return {
      dev:require('../assets/dev.png')
    }
  },
}
</script>

<style>
.home img{
  width: 100%;
  display: none;
}


.home .intro{
  font-size: 1.2em;
  padding-left: 20px;
  font-family: 'Rubik-Regular';
  line-height: 1.3;
  margin-top: 145px;
  font-weight: normal;
}

.home .intro h3{
  font-size: 1.2em;
  margin-top: 3px;
}

.home .btn {
  position: absolute;
  top: 65%;
  left: 5%;
  margin-top: 10px;
  color: #fff;
  background-image: linear-gradient(#34ADE3,#1A5772);
  padding: 8px 10px;
  border-radius: 20px;
  font-size: 1.2em;
  transition: all 0.5s ease;
}

.home .btn:hover{
  transform: scale(1.01);
}

</style>
