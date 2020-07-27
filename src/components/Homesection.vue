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
// import Footer from './layout/Footer'
export default {
  name: 'Homesection',
  data() {
    return {
      dev:require('../assets/dev.png')
    }
  },
  components:{
    
  }
}
</script>

<style>
.home img{
  display: none;
  max-width: 700px;
}


.home .intro{
  font-size: 1.2em;
  padding-left: 20px;
  font-family: 'Rubik-Regular';
  line-height: 1.3;
  margin-top: 145px;
  font-weight: normal;
  grid-row: 1;
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
  background: #1A5772;
  padding: 8px 10px;
  border-radius: 20px;
  font-size: 1.2em;
  transition: all 0.5s ease;
}

.home .btn:hover{
  transform: scale(1.1);
}

@media screen and (min-width:500px){
  body{
    font-size: 18px;
  }

  .home .intro{
    margin-top: 160px;
    grid-column: 1/10;
  }

  .home .btn{
    top: 61%;
    left: 3%;
  }

  .home img{
    display: block;
    grid-row:1;
    grid-column: 11/12;
    margin-top: 45px;
    width: 400%;
  }
}


@media screen and (min-width:590px){
  .home img{
    grid-column: 13;
    padding: 0 10px;
    width: 300%;
  }
}

@media screen and (min-width:620px){
   .home img{
     grid-column: 13/15;
   }
}

@media screen and (min-width:710px){
  body{
    font-size: 20px;
  }
   .home .intro{
     grid-column: 4/11;
     margin-top: 170px;
     margin-left: 20px;
   }

   .home img{
     width: 180%;
     grid-column: 12;
     margin-left: 100px;
     margin-top: 70px;
   }

   .home .btn{
     left: 5%;
   }
}

@media screen and (min-width:760px){
    .home .btn{
       top: 58%;
    }
}

@media screen and (min-width:1130px){
  .home .intro{
    grid-column: 7/8;
    margin-left: 110px;
  }

  .home .btn{
    left: 12%;
  }

  .home img{
     grid-column: 12/13;
  }
}

@media screen and (min-width:1200px){
    body{
      font-size: 22px;
    }

    .home .intro{
      margin-top: 200px;
      margin-left:6px;
    }

    .home .btn{
      top: 65%;
      left:7%;
      font-size: 1.2rem;
    }

    .home img{
      margin-top:80px;
      margin-left:100px;
      width: 100%;
    }
}
</style>
