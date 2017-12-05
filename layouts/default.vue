<template>
  <v-app>
    <v-content>
      <v-container pa-0 style="background-image: url(coffee.png);">
        <v-layout justify-center>
          <v-flex xs12 sm10 md6>
            <div id="header">
              <div class="mistero">Mistero</div>            
              <div class="coffee">Coffee</div>
            </div>
            <v-toolbar app dense class="grey darken-4">
                <v-btn flat to="/" exact color="amber lighten-4">Главная</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat to="/contacts" color="amber lighten-4">Контакты</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat to="/feedback" color="amber lighten-4">Отзывы</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat to="/map" color="amber lighten-4">Карта</v-btn>
            </v-toolbar>
          <nuxt />
          <v-footer dark></v-footer>
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

<style>
@font-face {
	font-family: "City of Rain";
  src: url(/assets/fonts/City_of_Rain.ttf);
}
@font-face {
font-family: "Altoysitalic";
src: url(/assets/fonts/Altoysitalic_personal_only.ttf);
}
#header {
  background-color: #351602;
}
.mistero {
  width: 340px;
  line-height: initial;
  margin: -20px auto;
  font-family: "City of Rain";
  font-size: 100px;
  color: #cd853f;
}
.coffee {
  width: 68px;
  margin: 0 auto;
  font-family: "Altoysitalic";
  font-size: 35px;
  color: #ffebcd;
}
</style>

