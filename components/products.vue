<template>
    <v-carousel>
    <v-carousel-item v-for='(item,i) in products' :key='i'>
      <v-container fluid>
      <v-layout row>
        <v-flex xs6>
            <v-card-media
              contain
              height="350px"
              :src= "item.img"
              >
            </v-card-media>
        </v-flex>
        <v-flex xs6>
          <v-card-title primary-title class="pa-0">
            <div>
              <h3 class="headline mb-0" style="text-transform:uppercase" height="350px">{{item.title}}</h3>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs6>
        </v-flex>
        <v-flex xs6 text-xs-center>
          <h1>{{item.price}}</h1>
        </v-flex> 
      </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    props: ['products']
  }
</script>
