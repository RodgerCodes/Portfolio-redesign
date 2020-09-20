<template>
  <div>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Uses/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Home from './Views/Home.vue'
import About from './Views/About.vue'
import Projects from './Views/Projects.vue'
import Uses from './Views/Uses.vue'
import Contact from './Views/Contact.vue'
import Footer from './components/layout/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Projects,
    Uses,
    Contact,
    Footer
  }
}
</script>

<style>
/* base styles */
:root{
  --bg-color:#15202b;
  --text-color:rgba(255, 255, 255, 0.918);
}

html{
  scroll-behavior: smooth;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color:var(--bg-color) ;
  color: var(--text-color);
  font-family: 'Rubik', sans-serif;
  overflow-x: hidden;
}

a{
  text-decoration: none;
}

.grid{
  display: grid;
  grid-column: 1/15;

}
</style>
