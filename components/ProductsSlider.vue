<template>
  <VueSlickCarousel v-bind="settings">
      <div v-for="product in PRODUCTS">
        <Product :product=product></Product>
      </div>
      <template #prevArrow="arrowOption">
        <button class="arrow">
          <span v-if="arrowOption.currentSlide === 0">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.48224 0.999996L1.36612 5.11611C0.877965 5.60427 0.877964 6.39572 1.36612 6.88388L5.48224 11M1.73224 6L19.2322 6" stroke="#A5A5A5" stroke-linecap="round"/>
            </svg>
          </span>
            <span v-else>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.48224 0.999996L1.36612 5.11611C0.877965 5.60427 0.877964 6.39572 1.36612 6.88388L5.48224 11M1.73224 6L19.2322 6" stroke="#000000" stroke-linecap="round"/>
            </svg>
          </span>
        </button>
    </template>
    <template #nextArrow="arrowOption">
        <button class="arrow arrow-rotate">
          <span v-if="arrowOption.currentSlide === arrowOption.slideCount - 1">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.48224 0.999996L1.36612 5.11611C0.877965 5.60427 0.877964 6.39572 1.36612 6.88388L5.48224 11M1.73224 6L19.2322 6" stroke="#A5A5A5" stroke-linecap="round"/>
            </svg>
          </span>
            <span v-else>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.48224 0.999996L1.36612 5.11611C0.877965 5.60427 0.877964 6.39572 1.36612 6.88388L5.48224 11M1.73224 6L19.2322 6" stroke="#000000" stroke-linecap="round"/>
            </svg>
          </span>
        </button>
    </template>
    </VueSlickCarousel>
</template>

<script>

import Product from '~/components/Product.vue'
import '~/assets/styles/productsSlider.scss'

import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        settings: {
          dots: false,
          infinite: false,
          variableWidth: true
        },
        variant: 'default'
      }
    },

    computed: {
      ...mapGetters([
          'PRODUCTS'
      ])
    },

    components: { Product }
  }
</script>
