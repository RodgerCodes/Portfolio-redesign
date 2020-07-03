<template>
    <div class="uses">
        <p>This Page is inspired by <a href="" target="_blank">Wes Bos's Uses page</a></p>
        <div class="Editor">
          <h1>Editor + Terminal</h1>
          <div>
              <h3>Code Editor</h3>
                 
              <a href="">Hello</a>
          </div>
          <hr>
          <div>
              <h3>Code Editor Theme</h3>
              <a href="">Hello</a>
          </div>
          <hr>
          <div>
              <h3>Code Editor Font</h3>
              <a href="">Hello</a>
          </div>
          <hr>
          <div>
              <h3>Console App</h3>
              <a href=""></a>
          </div>
        </div>
        <div class="Desktop">
            <h1>Desktop Apps</h1>
            <div>
                <h3>Browser</h3>
                <a href=""></a>
            </div>
            <hr>
            <div>
                <h3>Todo App</h3>
                <a href=""></a>
            </div>
            <hr>
            <div>
                <h3>Video Editing</h3>
                <a href=""></a>
            </div>
        </div>
        <div class="hosting">
          <h1>Hosting & Co.</h1>
          <div>
              <h3>Hosting Frontend sites</h3>
              <a href=""></a>
          </div>
          <hr>
          <div>
              <h3>Hosting backend</h3>
              <a href=""></a>
          </div>
          <hr>
          <div>
              <h3>Other cloud needs</h3>
              <a href=""></a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Usessection'
}
</script>

<style>
.uses p {
    padding: 15px 8px;
}

.uses .Editor{
    margin: 15px 0;
}

.uses .Desktop{
    margin: 20px 0;
}

.uses .hosting{
    margin: 25px 0;
}

.uses a {
    color: rgb(65, 134, 225);
}

.uses .Editor h1, .uses .Desktop h1, .uses .hosting h1{
    font-weight: normal;
    padding: 10px 15px;
}

.Editor > div h3, .Desktop > div h3, .hosting > div h3{
    font-weight: 200;
    padding-left:5x;
}

.Editor >div {
   display: flex;
   justify-content: space-between;
}
.Editor > div a {
    grid-row: 1;
    grid-column: 3/6;
}
hr{
    margin: 10px 0;
    padding: 0 10px;
}
</style>