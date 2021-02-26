<template>
  <div class="fixed_container">
    <div class="tencent_code">
      <h4>关注作者</h4>
      <p>和万千小伙伴一起学习</p>
      <img :src="$withBase('/logo.jpg')" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "fixed",
};
</script>
<style scoped lang="stylus">
.fixed_container {
  display none;

  z-index: 999;
  position: fixed;
  left: 18px;
  bottom: 30px;

  .tencent_code {
    text-align: center;
  }
}
</style>