<template>
    <div class="footer">
         <p>Built with <i class="fas fa-heart" style="color:red"></i> by Rodger Kumwanje with <i class="fab fa-vuejs" style="color:green"></i></p>
         <p>v0.5.0</p>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
.footer{
    position: absolute;
    width: 100%;
    background-color: #11181f;
    left: 50%;
    transform: translateX(-50%);
}

.footer p{
    text-align: center;
    font-size: 0.8rem;
    padding: 5px 0;
}
</style>