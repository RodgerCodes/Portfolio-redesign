<template>
  <div>
    <div class="header">
        <img :src="logo" alt="Logo">
        <nav>
            <div class="links">
               <router-link to="/">Home</router-link>
             <router-link to="/blog">Blog</router-link>
             <router-link to="/uses">Uses</router-link>
             <router-link to="/about">About</router-link>
            </div>
            <div class="links1">
                  <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
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
         logo:require('../../assets/logo.png')
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

a{
    color: #fff;
    font-weight: 500;
}

.router-link-exact-active{
  color: red;
}


</style>
