<template>
  <div class="PageVuex">
    <h1>Vuex实例 Shopping Cart Example</h1>
    <h2>Products</h2>
    <ProductList/>
    <p style="margin:0 20%;border-bottom:1px solid #ccc"></p>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: { ProductList, ShoppingCart }
}
</script>