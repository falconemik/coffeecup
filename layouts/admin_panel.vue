<template>
  <v-app dark>
    <v-toolbar fixed app :clipped-left="clipped" color="brown" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Admin</v-toolbar-title>
        <v-toolbar-title v-text="pageTitle" ></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat @click="logout">Выйти</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
        
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      >
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile 
        router
        :to="item.to"
        :key="i"
        v-for="(item, i) in items"
        exact
            >
          <v-list-tile-action>
            <v-tooltip right>
              <v-icon large color="green darken-2" slot="activator" >{{ item.icon }}</v-icon>
              <span>{{item.title}}</span>
            </v-tooltip>
          </v-list-tile-action>
          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
</v-app>
  
</template>
<script>
  export default {
    data () {
      return {
        formError: null,
        formUsername: '',
        formPassword: '',
        drawer: true,
        fixed: true,
        clipped: true,
        miniVariant: true,
        items: [
          { title: 'Пользователи', icon: 'account_box', to: '/admin/users' },
          { title: 'Заказы', icon: 'assignment', to: '/admin/order_list' },
          { title: 'Наличие товара', icon: 'assessment', to: '/admin/store' },
          { title: 'Главная', icon: 'chat', to: '/admin' }
        ],
        right: null
      }
    },
    computed: {
      pageTitle () {
        // return this.items.find(x => x.to === this.$route.path).title
      }
    },
    methods: {
      async logout () {
        try {
          await this.$store.dispatch('logout')
            .then(() => this.$router.replace({ path: '/' }))
        } catch (e) {
          this.formError = e.message
        }
      }
    }
  }
</script>