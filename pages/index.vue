<template>
  <v-layout justify-center align-center>
    <v-flex style="background-color:#bdb76b">
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :src= 'item.src' :key="i">
      
    </v-carousel-item>
  </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/products-images/amethyst.png'
        },
        {
          src: '/products-images/arcane.png'
        },
        {
          src: '/products-images/grand.png'
        }
      ]
    }
  }
}
</script>