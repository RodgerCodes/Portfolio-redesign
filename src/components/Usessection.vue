<template>
    <div data-aos="fade-up" class="uses" id="uses">
        <p>Inspired by <a href="https://wesbos.com/uses" rel="noreferrer noopener" target="_blank">Wes Bos's Uses page</a></p>
        <div class="Editor">
          <h1>Editor + Terminal</h1>
          <div>
              <h3>Code Editor</h3>
                <p>I mainly use <a href="https://code.visualstudio.com/download"  rel="noreferrer noopener" target="_blank">Vscode</a></p>
          </div>
          <hr>
          <div>
              <h3>Code Editor Theme</h3>
              <p><a href="https://vscodethemes.com/e/morgan-codes.morgan-codes-vscode-theme"  rel="noreferrer noopener" target="_blank">Morgan.codes</a> by Morgan RichardSon</p>
          </div>
          <hr>
          <div>
              <h3>Code Editor Font</h3>
              <p>Consolas</p>
          </div>
          <hr>
          <div>
              <h3>Console App</h3>
              <p>Vscode intergrated terminal with <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10"  rel="noreferrer noopener" target="_blank">WSl</a></p>
          </div>
        </div>
        <div class="Desktop">
            <h1>Desktop Apps</h1>
            <div>
                <h3>Browser</h3>
                <a href="https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjw9IX4BRCcARIsAOD2OB2hGRHj0-AEDLHFkjGYdVNGwsbqq-8g1tTvuGEpTRDnFO7hHMdmNAwaAgpwEALw_wcB&gclsrc=aw.ds"  rel="noreferrer noopener" target="_blank">Google Chrome</a>
            </div>
            <hr>
            <div>
                <h3>Todo App</h3>
                <a href="https://todo.microsoft.com/tasks/"  rel="noreferrer noopener" target="_blank">Microsoft Todo App</a>
            </div>
            <hr>
            <div>
                <h3>Video Editing</h3>
                <a href="https://www.adobe.com/africa/products/premiere.html"  rel="noreferrer noopener" target="_blank">Adobe premiere Pro</a>
            </div>
        </div>
        <div class="hosting">
          <h1>Hosting & Co.</h1>
          <div>
              <h3>Hosting Frontend sites</h3>
              <a href="https://www.netlify.com/"  rel="noreferrer noopener" target="_blank">Netlify</a>
          </div>
          <hr>
          <div>
              <h3>Hosting backend</h3>
              <a href="https://www.heroku.com"  rel="noreferrer noopener" target="_blank">Heroku</a>
          </div>
          <hr>
          <div>
              <h3>Other cloud needs</h3>
              <a href="https://www.kintohub.com/" rel="noreferrer noopener" target="_blank">KintoHub</a>
          </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'Usessection',
   
}
</script>

<style>

.uses{
    margin-top: 40px;
    padding: 10px 15px;
}
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
    color: rgb(65, 144, 247);
}

.uses .Editor h1, .uses .Desktop h1, .uses .hosting h1{
    font-weight: normal;
    padding: 10px 15px;
}

.Editor > div h3, .Desktop > div h3, .hosting > div h3{
    font-weight: 200;
    padding-left:5x;
}

.Editor > div, .Desktop > div, .hosting > div {
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

@media screen and (min-width:414px){
    .uses{
        padding: 10px 15px;
    }
}

@media screen and (min-width:500px) {
    .uses p{
        text-align: center;
    }

    .uses .Editor, .uses .Desktop, .uses .hosting{
        padding: 0 20px;
    }
}

@media screen and (min-width:1130px){
    .uses .Editor, .uses .Desktop, .uses .hosting{
        padding: 0 50px;
    }
}
</style>