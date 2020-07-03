<template>
  <div>
    <div class="header">
        <img :src="logo" alt="Logo">
        <nav>
         <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/uses">Uses</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
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
    width:160px;
}

nav{
    height: 40px;
}

nav ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-bottom: 10px;
    transition: all 0.5s ease;
}

a{
    color: #fff;
    font-weight: 500;
}

.router-link-exact-active{
  color: red;
}


</style>
