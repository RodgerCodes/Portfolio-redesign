<template>
  <div data-aos="fade-up" class="contact-info" id="contact">
    <h1>Contact Info</h1>
    <div class="extra">
      <p>
        Contact me via
        <a href="mailto:rkumwanje@gmail.com">Email</a>
      </p>
      <a href="https://github.com/RodgerCodes" target="_blank"
        ><i class="fab fa-github fa-lg" style="color:#000"></i
      ></a>
    </div>
  </div>
</template>

<script>
// import Footer from './layout/Footer'
export default {
  name: "contactsection",
  components: {
    // Footer
  },
};
</script>

<style>
.contact-info {
  margin-top: 100px;
}

.contact-info .classic,
.contact-info h1 {
  text-align: center;
}

.contact-info .classic div {
  margin: 15px 0;
}
.contact-info .classic h1 {
  font-weight: 500;
  font-size: 1.6rem;
}
.contact-info .extra {
  font-size: 1.2rem;
  padding: 10px 29px;
  text-align: center;
  margin: 15px 0;
}

.hellofo {
  position: absolute;
  bottom: 7%;
  width: 100%;
}

.contact-info .extra a {
  color: #34ade3;
}

@media screen and (min-width: 760px) {
  .contact-info .classic {
    justify-content: space-around;
  }
}

@media screen and (min-width: 1200px) {
  .contact-info .social {
    justify-content: space-evenly;
  }
}
</style>
