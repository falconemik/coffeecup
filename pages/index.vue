<template>
  <v-layout justify-center align-center>
    <v-flex style='background-color:#bdb76b'>
    <productsCarousel :products="items" />
    </v-flex>
  </v-layout>
</template>

<script>
import products from '../assets/products.js'
import productsCarousel from '../components/products'

export default {
  data () {
    return {
      items: products
    }
  },
  components: {
    productsCarousel
  }
}
</script>