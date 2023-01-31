<template>
  <div class="card">
    <img :src = product.image :alt=product.title  class="image">
    <span class="id">{{ product.id }}</span>
    <h3>{{ product.title }}</h3>
    <div class="rating">
      <div v-for="index in product.rating">
        <img src="~/assets/icons/star_filled.svg" alt="Рейтинг">
      </div>
      <div v-for="index in (5 - product.rating)">
        <img src="~/assets/icons/star.svg" alt="Рейтинг">
      </div>
    </div>
    <div class="content">
      <div>
        <span class="old-price" :class="[{ 'opacity-null': !product.prices.rrc.old_price}]">{{ product.prices.rrc.old_price }} {{ product.prices.rrc.currency }}</span>
        <h4>{{ product.prices.rrc.price }} {{ product.prices.rrc.currency }}</h4>
      </div>
      <div class="d-flex align-items-center">
        <button class="add-to-cart"></button>
        <button class="favourite"></button>
        <button class="price-change"></button>
      </div>
    </div>
    <div class="stiker-wrapper">
      <div v-for="stiker in product.stickers">
        <Promo :stiker=stiker />
      </div>
    </div>


  </div>
</template>

<script>
  import Promo from '~/components/Promo.vue'
  import '~/assets/styles/product.scss'

  export default {
    props: ['product'],
    components: { Promo }
  }
</script>
