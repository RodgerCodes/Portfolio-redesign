<template>
    <div class="post">  
    </div>
</template>

<script>
import { EventBus } from '../../event-bus';
export default {
    name:"Post",
    data() {
        return {
            post:''
        }
    },
  mounted(){
      EventBus.$on('data', item => {
          this.post = item
      });  
    
  } 
}
</script>

<style scoped>
 .posts h1{
     color: #fff;
 }
</style>