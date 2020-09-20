<template>
    <div data-aos="fade-up" class="project" id="projects">
        <h1>My Projects</h1>
        <p>Here is a list of some of my Personal Projects</p>
        <div class="project-1">
          <div class="project-1-meta">
            <h2>Writershub</h2>
          <img :src="writershub" alt="Writershub screenshot">
          </div>
          <div class="project-1-desc">
            <p>Writershub is a free platform where people can share articles from their fields of experience from lifestyle to gaming to tecchnology and more. This Project is running on Nodejs, MongoDB, Express and Express-handlebars for the Frontend</p>
            <div class="features">
              <h2>Features</h2>
             <ul>
              <li>Authentication</li>
              <li>Authorisation</li>
              <li>CRUD operations</li>
              <li>User Dashboard</li>
              <li>Share via Twitter</li>
              <li>Password Reset with SendGrid</li>
            </ul>
            <a href="https://writershuub.herokuapp.com/" rel="noreferrer noopener" target="_blank">
               View
             </a>
            </div>
            <!-- <div class="project-link"> 

             
            </div> -->
          </div>
        </div>

        <!-- project 2 -->
        <div class="project-2">
          <div class="project-2-meta">
            <h2>Todevdo</h2>
            <img :src="todo" alt="Todoist screenshot">
          </div>
          <div class="project-2-desc">
            <p>This is a simple web app where you can manage your daily task build with Nodejs, MongoDB, Express and Express-handlebars for the frontend </p>
            <div class="features">
              <h2>Features</h2>
              <ul>
                <li>Authentication</li>
                <li>Google Auth</li>
                 <li>Authorisation</li>
                <li>Project Management</li>
              </ul>
              
            </div>
            <a href="https://todevdo.herokuapp.com/" rel="noreferrer noopener" target="_blank">View</a>
          </div>
        </div>

        <!-- project 3 -->
        <div class="project-3">
          <div class="project-3-meta">
              <h2>Thoughts 101</h2>
              <img :src="Thoughts" alt="">
          </div>
          <div class="project-3-desc">
            <p>This is a simple fullstack web app build with Nodejs, Express, MongoDB, Vuejs and Vuetify as a Frontend where you can write share your thoughts anonymously</p>
            <div class="features">
              <h2>Features</h2>
               <ul>
                 <li>CRUD operations</li>
               </ul>
               <a href="https://thoughts101.herokuapp.com/#/" rel="noreferrer noopener" target="_blank">View</a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Projectsection",
    data(){
      return{
        writershub:require('../assets/project.jpg'),
        Thoughts:require('../assets/thoughts.jpg'),
        todo:require('../assets/todoist.jpg')
      }
    },
}
</script>

<style>
.project{
  margin-top: 40px;
}
 .project h1 {
   font-size: 1.8em;
   text-align: center;
   margin-top: 10px;
   padding: 15px 0;
 }

 .project p {
     padding: 0  15px;
     margin:15px 0
 }

 .project-1{
   margin:4rem 0;
 }

 .project-2{
   margin-bottom: 5rem;
 }

 .project-1 img, .project-2 img, .project-3 img{
   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.452), 0px 0px 30px  rgba(0, 0, 0, 0.452);
   width: 100%;
   transition: all 0.5s ease;
 }
 
 .project-1 img:hover, .project-2 img:hover, .project-3 img:hover{
   transform: scale(1.018);
   background: #000;
 }

 .project-1 .features h2, .project-2 .features h2, .project-3 .features h2{
     padding:0px 10px;
     text-align: center;
 }

  .project-1 .features ul, .project-3 .features ul, .project-2 .features ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding:5px 20px
  }
  
  .project-1 a, .project-2 a, .project-3 a{
    color: white;
    padding: 5px 10px;
     transition: all 0.5s ease;
     font-weight: bold;
  }

  .project-1 a:hover, .project-2 a:hover, .project-3 a:hover{
    transform:scale(1.0.18);
  }



.project-1-meta h2, .project-2-meta h2, .project-3-meta h2{
     text-align: center;
     margin: 15px 0;
     text-transform: uppercase;
 }



 @media Screen and (min-width:500px){
   .project-1 .features ul{
      margin-left: 30px;
   }

   .project p{
     text-align: center;
   }

   .project-1 a, .project-2 a, .project-3 a{
     margin-left: 80px;
   }

 }

 @media Screen and (min-width:620px){
    .project-1 img, .project-2 img, .project-3 img{
      width: 80%;
      margin-left: 70px;
    }

     
     .project-1 .features ul{
       margin-left: 60px;
     }
 }

 @media screen and (min-width:880px){
   .project-1, .project-2, .project-3{
     display: flex;
   }

   .project-1 img, .project-2 img, .project-3 img{
     width: 400px;
     margin-left: 20px;
   }

   .project-2 a, .project-3 a, .project-1 a{
     margin:10px 20px;
   }
    
   .project-1-desc{
     margin-top: 3rem;
   }

   .project-2-desc{
     margin-top: 3rem;
   }
   
   .project-3-desc{
     margin-top: 5rem;
   }

   .project-1 .features ul, .project-2 .features ul, .project-3 .features ul{
      margin-left:40px;
    }

 }

 @media Screen and (min-width:916px){

    .project p {
       margin: 10px 0;
     }

    .project-1 .features ul, .project-2 .features ul, .project-3 .features ul{
      margin-left:61px;
    }
    
 }

 @media screen and (min-width:1070px){

   .project-1 img, .project-2 img, .project-3 img{
     width: 500px;
     margin-left: 20px;
   }

   .project-1-desc{
     margin-top: 5rem;
   }

   .project-2-desc{
     margin-top: 5rem;
   }
   
   .project-3-desc{
     margin-top: 5rem;
   }

   .project p{
    margin: 5px 0;
   }
 }

 @media screen and (min-width:1200px){
   .project-1 img, .project-2 img, .project-3 img{
     margin-left: 60px;
   }
 }

 </style>