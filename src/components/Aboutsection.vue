<template>
  <div data-aos="fade-up" class="about" id="about">
    <h1>About Me</h1>
    <div class="about-info grid">
      <img :src="myimage" alt="Rodger Photo" loading="lazy" />
      <div class="extra-info">
        <h2>
          My Name is Rodger Kumwanje and i am a Full stack Web and Mobile App
          developer and i just love building stuff. I am also a Student at the
          Malawi University of Science and Technology
          <a target="_blank" rel="noreferrer" href="https://www.must.ac.mw/"
            >Must</a
          >
          Pursuing a degree in Meteorology and Climate Science⛅. Apart from
          Programming i am also interested in Astronomy 🌌, Genetics🧬,
          Psychology and Philosophy
        </h2>
      </div>
    </div>
    <Techstack />
  </div>
</template>

<script>
import Techstack from "./extracomp/Techstack";

export default {
  name: "Aboutsection",
  data() {
    return {
      myimage: require("../assets/rodger.webp"),
    };
  },
  components: {
    Techstack,
  },
};
</script>

<style>
.about {
  margin-top: 150px;
}
.about h1 {
  text-align: center;
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.932);
}

.about-info img {
  max-width: 300px;
  padding: 10px 30px;
  grid-column: 6/7;
  grid-row: 1;
  border: 2px solid transparent;
  transition: all 0.5s ease;
}

.about-info img:hover {
  transform: scale(1.2);
}

.about-info .extra-info {
  grid-row: 2;
  grid-column: 1/13;
}

.about-info .extra-info h2 {
  font-weight: 400;
  font-size: 1em;
  padding: 10px 8px;
}

.about-info .extra-info a {
  color: rgb(24, 125, 219);
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 710px) {
  .about-info .extra-info {
    grid-row: 1;
    grid-column: 3/13;
    padding: 10px 0;
  }

  .about-info img {
    grid-column: 1/3;
  }
}

@media screen and (min-width: 1200px) {
  .about-info .extra-info {
    padding-top: 40px;
  }
}
</style>
