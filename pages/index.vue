<template>
  <div class="container">
    <div>
      <h2>Новые поступления</h2>
    </div>

    <ProductsSlider />
  </div>
</template>

<script>

import ProductsSlider from '~/components/ProductsSlider.vue'
import '~/assets/styles/main.scss'

export default {
  components: { ProductsSlider },
}
</script>
