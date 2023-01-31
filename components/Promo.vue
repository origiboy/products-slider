<template>
  <div>
    <div v-if="stiker.type === 'new'" class="stiker" style="background: #6776B7;">Новинка</div>
    <div v-if="stiker.type === 'promo'" class="stiker" style="background: #7F65B7;">Промо</div>
  </div>

</template>

<script>
  import '~/assets/styles/promo.scss'

  export default {
    props: ['stiker'],
  }
</script>
