<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm10 md6>
        <v-toolbar app>
          <v-btn>Главная</v-btn>
          <v-btn>Контакты</v-btn>
          <v-btn>Отзывы</v-btn>
          <v-btn>Карта</v-btn>
        </v-toolbar>
        <nuxt />
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'CoffeeCup'
      }
    }
  }
</script>
