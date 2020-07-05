<template>
    <div class="tech">
        <h1>Favourite TechStack</h1>
        <div class="stack">
            <div>
                <img :src="node" alt="nodejs logo">
                <h4>Node.js</h4>
            </div>
            <div>
                <img :src="html" alt="html and css">
                <h4>Html and css</h4>
            </div>
            <div>
                <img :src="vue" alt="vuejs logo">
                <h4>Vuejs</h4>
            </div>
            <div>
                <img :src="mongodb" alt="mongodb logo">
                <h4>Mongodb</h4>
            </div>
            <div>
                <img :src="js" alt="javascript logo">
                <h4>JavaScript</h4>
            </div>
            <div>
                <img :src="docker" alt="docker logo">
                <h4>Docker</h4>
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
            js:require('../../assets/js.png')
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
    grid-gap: 10px;
    padding: 10px 50px;
}

.tech .stack div{
    margin: 10px 0;
}


.tech .stack > div img {
    max-width: 120px;
    width: 50%;
}

.tech .stack > div h4{
    font-weight: normal;
    font-size: 0.9em;
    text-align: start;
}

@media screen and (min-width:500px) {
      .tech .stack {
          grid-template-columns: repeat(3,1fr);
          margin-left: 70px;
      }

      .tech .stack > div img{
          width: 60%;
      }
}

@media screen and (min-width:710px){
    .tech .stack{
        grid-template-columns: repeat(6, 1fr);
    }
}
</style>