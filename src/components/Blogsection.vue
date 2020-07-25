<template>
    <div class="blog">
        <p v-if="err">{{err}}</p>
        <h1>Featured Articles</h1>
      <div class="article">
          <div
           v-for="post in posts"
           v-bind:key="post.id"
           v-bind:item="post"
          class="card">
             <h1>{{post.title}}</h1>
             <p>{{post.body | truncate(150, '...') |stripTags }}</p>
              <a href="https://desolate-river-28338.herokuapp.com/{{post._id}}" class="btn" target="_blank">Read More</a>
          </div>
    </div>      
    </div>
</template>

<script>
import DataService from '../apidata';
export default {
    name:"Blogsection",
    data(){
        return {
            posts:[],
            err:'',
            item:''
        }
    },
    async created(){
         try {
             this.posts = await DataService.getPosts();
         } catch (err) {
              this.err = err;
         }
    },
    filters: {
        truncate: function (text, length, suffix) {
            return text.substring(0, length) + suffix;
        },
        stripTags:function(input){
        return input.replace(/<(?:.|\n)*?>/gm, '')
    }
  }
}
</script>

<style>

.article {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 5px 15px;
}

.blog h1{
    font-size: 1.5rem;
    text-align: center;
    padding-top: 50px;
}

.article .card{
    margin-top: 30px;
    padding: 0 10px;
    width: 300px;
    height: 300px;
    box-shadow: 0px 0px 10px #10171d, 0px 0px 10px #10171d;
}

.article .card h1{
    font-size: 1.5rem;
    font-weight: 600;
    padding: 20px 2px;
}

.article .card p{
    font-weight: normal;
}

.article .card button{
    border: none;
    color: #fff;
    background:#10171d;
    padding: 10px 10px;
    margin-top: 10px;
   box-shadow: 0px 0px 10px #15202b, 0px 0px 10px #15202b;
}

@media screen and (min-width:370px){
    .article {
         padding:5px 32px;
    }
}

@media screen and (min-width:420px){
    .article {
         padding:5px 52px;
    }
}

@media screen and (min-width:500px){
    .article{
        padding:5px 90px;
    }
}

@media screen and (min-width:715px){
    .article{
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        padding: 5px 50px;
    }
}

@media screen and (min-width:980px){
    .article{
        grid-template-columns: repeat(3,1fr);
        padding: 5px 20px;
        grid-gap: 30px;
    }
}

@media screen and (min-width:1200px){
    .article{
        padding: 5px 40px;
    }

    .article p{
        font-size: 1.2rem;
    }

    .article .card{
        width: 350px;
    }
}

</style>
