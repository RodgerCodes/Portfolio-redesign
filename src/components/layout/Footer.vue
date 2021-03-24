<template>
  <div class="footer">
    <p>Designed and Built by Rodger</p>
    <p>All rights reserved 2021&copy;</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  position: absolute;
  width: 100%;
  background-color: #11181f;
  left: 50%;
  transform: translateX(-50%);
}

.footer p {
  text-align: center;
  padding: 8px 0;
  font-size: 15px;
}
</style>
