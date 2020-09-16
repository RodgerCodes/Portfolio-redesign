<template>
    <div class="tech">
        <h1>Skills</h1>
        <div class="stack">
            <div>
                <img :src="html" alt="html and css">
            </div>
            <div>
                <img :src="js" alt="javascript logo">
            </div>
            <div>
                <img :src="git" alt="Git logo">
            </div>
            <div>
                <img :src="django" alt="django logo">
            </div>
            <div>
                <img :src="node" alt="nodejs logo">
            </div>
            <div>
                <img :src="express" alt="Express logo">
            </div>
            <div>
                <img :src="flutter" alt="flutter logo">
            </div>
            <div>
                <img :src="vue" alt="vuejs logo">
            </div>
            <div>
                <img :src="mongodb" style="width:60px !important;" alt="mongodb logo">
            </div>
            
            <div>
                <img :src="docker" alt="docker logo">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Techstack',
    data() {
        return {
            docker:require('../../assets/docker.png'),
            node:require('../../assets/nh.png'),
            html:require('../../assets/html.png'),
            mongodb:require('../../assets/mongo.png'),
            vue:require('../../assets/vuej.png'),
            js:require('../../assets/js.png'),
            git:require('../../assets/git.png'),
            flutter:require('../../assets/flutter.png'),
            express:require('../../assets/express.png'),
            django:require('../../assets/pyhton.png')
        }
    },
}
</script>

<style>
.tech h1{
 text-align: center;
 font-weight: 600;
 padding: 30px 10px;
}

.tech .stack{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-gap: px; */
    padding: 10px 50px;
}

.tech .stack div{
    margin: 10px 0;
}

.tech .stack > div img:hover{
    /* background-color: rebeccapurple; */
    transform: scale(1.3);
}


.tech .stack > div img {
    max-width: 50px;
    width: 10%;
    transition: all 0.5s ease;
}

@media screen and (min-width:500px) {
      .tech .stack {
          grid-template-columns: repeat(4,1fr);
          margin-left: 70px;
      }

      .tech .stack > div img{
          width: 60%;
      }
}

@media screen and (min-width:710px){
    .tech .stack{
        grid-template-columns: repeat(8, 1fr);
    }
}
</style>