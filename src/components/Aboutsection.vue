<template>
    <div class="about">
       <h1>About Me</h1>
       <div class="about-info grid">
        <img :src="myimage" alt="Rodger Photo">
        <div class="extra-info">
            <h2>My Name is Rodger Kumwanje and i am a 19 year old Full stack developer with 1 year experience building web apps with Technologies like Nodejs, Vuejs ,Html5, CSS3, Vanilla JavaScript, MongoDB, MySQL and Postgres. With the techstack you can only guess it, my favourite Programming language is JavaScript.I am also a Student at the Malawi University of Science and Technology <a target="_blank" rel="noreferrer" href="https://www.must.ac.mw/">Must</a> Pursuing a degree in Meteorology and Climate Science</h2>
        </div>
       </div>
       <Techstack/>
       <div>
          <Footer/>
       </div>
    </div>
</template>

<script>
import Techstack from './extracomp/Techstack';
import Footer from './layout/Footer'
export default {
    name:'Aboutsection',
    data() {
        return {
            myimage:require('../assets/rodger.png')
        }
    },
    components:{
        Techstack,
        Footer
    }
}
</script>

<style>
.about{
    margin-top: 40px;
}
.about h1 {
    text-align: center;
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.932);
}

.about-info img{
    max-width: 300px;
    padding: 10px 30px;
    grid-column: 6/7;
    grid-row: 1;

}

.about-info .extra-info{
    grid-row: 2;
    grid-column: 1/13;
}

.about-info .extra-info h2{
   font-weight: 400;
   font-size: 1em;
   padding: 10px 8px;
}

@media screen and (min-width:500px){
    
}

@media screen and (min-width:710px){
    .about-info .extra-info{
        grid-row: 1;
        grid-column: 3/13;
        padding: 10px 0;
    }
    
    .about-info img{
        grid-column: 1/3;
    }

}
</style>