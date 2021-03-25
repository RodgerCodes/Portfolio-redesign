<template>
  <div data-aos="fade-up" class="tech">
    <h1>Skills</h1>
    <div class="stack">
      <div>
        <img :src="html" alt="html and css" />
      </div>
      <div>
        <img :src="js" alt="javascript logo" />
      </div>
      <div>
        <img :src="git" alt="Git logo" />
      </div>
      <div>
        <img :src="django" alt="django logo" />
      </div>
      <div>
        <img :src="node" alt="nodejs logo" />
      </div>
      <div>
        <img :src="express" alt="Express logo" />
      </div>
      <div>
        <img :src="postgres" alt="postgress logo" />
      </div>
      <div>
        <img :src="mysql" alt="msyql logo" />
      </div>
      <div>
        <img :src="flutter" alt="flutter logo" />
      </div>
      <div>
        <img :src="vue" alt="vuejs logo" />
      </div>
      <div>
        <img :src="mongodb" alt="mongodb logo" />
      </div>

      <div>
        <img :src="docker" alt="docker logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Techstack",
  data() {
    return {
      docker: require("../../assets/docker.png"),
      node: require("../../assets/nh.webp"),
      html: require("../../assets/html.webp"),
      mongodb: require("../../assets/mongo.webp"),
      vue: require("../../assets/vuej.webp"),
      js: require("../../assets/js.webp"),
      git: require("../../assets/git.webp"),
      flutter: require("../../assets/flutter.png"),
      express: require("../../assets/express.png"),
      django: require("../../assets/pyhton.png"),
      postgres: require("../../assets/postgress.webp"),
      mysql: require("../../assets/download.png"),
    };
  },
};
</script>

<style>
.tech h1 {
  text-align: center;
  font-weight: 600;
  padding: 30px 10px;
  color: black !important;
}

.tech .stack {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 50px;
}

.tech .stack div {
  margin: 10px 30px;
}

.tech .stack > div img:hover {
  transform: scale(1.3);
}

.tech .stack > div img {
  max-width: 50px;
  width: 370%;
  transition: all 0.5s ease;
}

@media screen and (min-width: 500px) {
  .tech .stack {
    grid-template-columns: repeat(5, 1fr);
  }

  .tech .stack > div img {
    width: 370%;
  }
}

@media screen and (min-width: 710px) {
  .tech .stack {
    grid-template-columns: repeat(9, 1fr);
  }
}
</style>
