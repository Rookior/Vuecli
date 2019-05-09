<template>
  <div class="test">
    <h1 class="testTittle">{{ user }}测试使用less</h1>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  props: {
    user: String
  }
  
}
</script>

<style scoped lang="less">
@test_color:#f00;
.test{
  background: #000;
  color: #fff;
  .testTittle {
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 1px solid @test_color;
  }
}
</style>
