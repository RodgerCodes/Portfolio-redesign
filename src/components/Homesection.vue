<template>
  <div class="home grid">
    <div class="intro">
        <h1>Hello there ✌,</h1>
     <h2>I'm Rodger Kumwanje</h2>
     <h3>A FullStack Web Developer</h3>
    </div>
    
    <img :src="dev" alt="">
    <div>
      <router-link to="/#about" class="btn">About</router-link>
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
  font-family: 'Rubik';
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
  color: rgba(255, 255, 255, 0.918);
  background: #1A5772;
  padding: 8px 17px;
  border-radius: 20px;
  font-size: 1.2em;
  transition: all 0.5s ease;
}


.home .btn:hover{
  transform: scale(1.1);
}

@media screen and (min-width:360px){
   body{
     font-size: 17px;
   }

   .home .intro{
     margin-top: 180px;
   }
}

@media screen and (height:812px){
  .home .intro{
    margin-top:240px;
  }

  .home .btn{
    top: 59%;
  }
}

@media screen and (height:1024px){
  .home .intro{
    margin-top: 500px !important;
  }

  .home .intro h3{
    font-size: 1.7rem;
  }

  .home .intro h1{
    font-size: 4rem;
  }

  .home .btn{
    top: 50% !important;
  }

  .home img{
    margin-top: 400px !important;
  }

  
}

@media screen and (min-width:375px){
    .home .btn{
      top: 70%;
    }
  }

  @media screen and (min-width: 425px){
     .home .btn{
       top: 80%;
     }
  }

@media screen and (height:1366px){
  .home .intro{
    margin-top: 620px !important;
  }

  .home img{
    margin-top: 500px !important;
    width: 200% !important;
  }

  .home .intro h1{
    font-size: 5rem;
  }

  .home .intro h2{
    font-size: 4rem;
  }

  .home .btn{
    top: 60% !important;
    font-size: 3rem;
    left: 2% !important;
  }

  .home .intro h3{
    font-size: 3rem;
  }

  /* body{
    font-size: 21px !important;
  } */
}

@media screen and (min-width:411px){
   body{
     font-size: 18px;
   }

   .home .intro{
     margin-top: 230px;
   }
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
      grid-column: 11;
    }
     
     .home .intro h2{
       font-size: 1.8em;
     }

    .home .btn{
      top: 67%;
      left:4%;
      font-size: 1.2rem;
    }

    .home img{
      margin-top:80px;
      margin-left:100px;
      width: 100%;
    }
}
</style>
