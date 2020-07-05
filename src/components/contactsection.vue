<template>
    <div class="contact-info">
       <div class="classic">
         <div class="number"> 
           <h1>Phone Numbers</h1>
          <p>+265 880 122 611</p>
          <p>+265 992 424 839</p>
         </div>
         <div>
           <h1>Location</h1>
           <p>Likuni, Lilongwe, Malawi, Africa</p>
         </div>
       </div>
       <div class="extra">
         <p>Other ways i prefer for communication are <a href="mailto:rkumwanje@gmail.com">Email</a> and <a href="">LinkedIn</a></p>
       </div>
       <div class="social">
          <a href="https://twitter.com/rodger_codes" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter fa-lg" style="color:#34ADE3"></i></a>
          <a href="https://github.com/RodgerCodes" target="_blank" rel="noreferrer noopener" ><i class="fab fa-github fa-lg" style="color:#fff"></i></a>
          <a href="https://www.instagram.com/rodger.codes/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram fa-lg" style="color:#E1306C" ></i></a>
          <a href="https://dribbble.com/Rodger_codes" target="_blank" rel="noreferrer noopener"><i class="fab fa-dribbble fa-lg" style="color:#ea4c89"></i></a>
          <a href="https://www.linkedin.com/in/rodger-kumwanje-2a708a18b/" target="_blank" rel="noreferrer noopener"><i class="fab fa-linkedin-in fa-lg" style="color:#1A5772"></i></a>
       </div>
       <div class="hellofo">
        <Footer/>
       </div>
       
    </div>
</template>

<script>
import Footer from './layout/Footer'
export default {
    name:'contactsection',
    components:{
      Footer
    }
}
</script>

<style>
.contact-info{
  margin-top: 100px;
}
.contact-info .classic{
  text-align: center;
}

.contact-info .classic div{
  margin: 15px 0;
}
.contact-info .classic h1{
  font-weight: 500;
  font-size: 1.6rem;
}
.contact-info .extra {
 font-size: 1.2rem;
 padding: 10px 29px;
 text-align: center;
 margin: 15px 0;
}

.hellofo{
  position: absolute;
  bottom: 7%;
  width: 100%;
}

.contact-info .extra a{
  color: #34ADE3;
}

.contact-info .social{
  display: flex;
  justify-content: space-around;
  margin: 26px 10px;
  padding: 10px 8px;
  transition: all 1s ease;
}

.contact-info .social a:hover{
  background-image:linear-gradient(#753a88, #cc2b5e);
  padding: 10px 8px;
  border-radius: 80%;
  transition: all 0.5s ease;

}

@media screen and (min-width:500px){
  .contact-info .classic{
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width:760px){
  .contact-info .classic{
   justify-content: space-around;
  }
}

@media screen and (min-width:1200px){
  .contact-info .social{
    justify-content: space-evenly;
  }
}
</style>