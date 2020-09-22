<template>
  <div>
    <div class="header">
        <router-link to="/"><img :src="logo" alt="Logo"></router-link>
        <nav>
            <div class="links">
               <router-link to="/">Home</router-link>
               <router-link to="/#about">About</router-link>
             
             <router-link to="/#projects">Projects</router-link>
             
            </div>
            <div class="links1">
                  <router-link to="/#uses">Uses</router-link>
            <router-link to="/#contact">Contact</router-link>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
 name:'Header',
 data(){
     return{
         logo:require('../../assets/logo.webp')
     }
 }
}
</script>

<style scoped>
.header img{
    width:100px;
}

nav{
    height: 40px;
    display: grid;
    grid-column: 1/8;
}

nav a {
    font-weight: 500;
    font-size: 1.1em;
}

nav .links{
    grid-row: 1;
    grid-column: 1;
    margin-bottom: 15px;
}

nav .links a {
    margin: 0 20px;
}

nav .links1 {
    grid-row: 2;
   grid-column: 1;
   padding-left:60px;
}

nav .links1 a{
    margin: 0 20px;

}

nav .links a:hover, nav .links1 a:hover{
    transform: scale(1.2);
} 

a{
    color: #fff;
    font-weight: 500;
}

@media Screen and (min-width:500px){
    nav .links{
        grid-column: 1/6;
    }

    nav{
     padding: 0 10px;
    }

    nav .links1{
        grid-row: 1;
        grid-column:5/8 ;
    }

    nav .links1 a{
        margin: 0 9px;
    }

    nav .links a{
        margin: 0 10px;
    }
}

@media screen and (min-width:590px){
    nav .links{
        grid-column: 3/6;
    }
}

@media screen and (min-width:620px){
    
}

@media screen and (min-width:710px){
    nav{
        position: absolute;
        top: 2.5%;
        right: 5%;
    }

    nav .links1{
        margin-left:30px;
    }
}

@media screen and (min-width:1200px){
    nav .links1{
        margin-left:40px;
    }

    .header img{
        margin-left: 40px;
    }
}


</style>
