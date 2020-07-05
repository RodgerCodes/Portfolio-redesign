<template>
  <div>
    <Header/>
    <router-view/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
export default {
  name: 'App',
  components: {
    Header,
    // Footer
  }
}
</script>

<style>
/* base styles */
:root{
  --bg-color:#15202b;
  --text-color:rgba(255, 255, 255, 0.918);
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color:var(--bg-color) ;
  color: var(--text-color);
  font-family: 'Rubik-Regular', sans-serif;
  overflow-x: hidden;
}

a{
  text-decoration: none;
}

li{
  list-style: none;
}

.grid{
  display: grid;
  grid-column: 1/12;
  /* grid-gap: 20px; */
}




@font-face {
  font-family: 'Rubik-Regular';
  src: url('./assets/fonts/Rubik-Regular.ttf');
}
</style>
