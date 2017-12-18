<template>
  <table>
    <thead>
        <tr>
          <th>Client</th>
          <th>Phone</th>
          <th>Question</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, i) in orders" :key="i">
          <td>{{order.name}}</td>
          <td>{{order.phone}}</td>
          <td>{{order.status}}</td>
        </tr>
      </tbody>
    </table>

<!-- <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.guid }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.phone }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.adress }}</td>
        <td class="text-xs-right">{{ props.item.delivery }}</td>
        <td class="text-xs-right"><v-btn to="/admin/details">Детали</v-btn></td>
      </template>
      
      
    </v-data-table>
     -->
</template>
  <script>
    import Firebase from 'firebase'
    
    var config = {
      apiKey: 'AIzaSyDpyXi_cAEDFC_m3LrmaaHggc_lLNA0OXw',
      authDomain: 'coffecup-d6152.firebaseapp.com',
      databaseURL: 'https://coffecup-d6152.firebaseio.com',
      projectId: 'coffecup-d6152',
      storageBucket: 'coffecup-d6152.appspot.com',
      messagingSenderId: '586625591569'
    }

    var app = Firebase.initializeApp(config)
    var db = app.database()
    var orderRef = db.ref('orders')
    
    export default {
      // firebase: {
      //   },
      data () {
        return {
          orders: orderRef
        //   headers: [
        //     {
        //       text: 'id',
        //       align: 'left',
        //       sortable: false,
        //       value: 'name'
        //     },
        //   { text: 'odrer number', value: 'guid' },
        //   { text: 'name', value: 'fat' },
        //   { text: 'phone', value: 'carbs' },
        //   { text: 'email', value: 'protein' },
        //   { text: 'adress', value: 'Grushevskogo str' },
        //   { text: 'delivery', value: 'delivery' },
        //   { text: 'order datails', value: 'details' }
        // ],
        // items: [
        //   {
        //     value: false,
        //     id: '1',
        //     name: 'Uli',
        //     guid: '6464646',
        //     phone: 24,
        //     email: 'elegancia18@i.ua',
        //     adress: 'Grushevskogo str',
        //     delivery: 'NovaPoshta',
        //     status: 'done',
        //     details: 'Details'
        //   }
        // ]
        }
      }
    // ,
    // fetch ({ store, redirect }) {
    //   if (!store.state.authUser) {
    //     return redirect('/')
    //   }
    // }
}
</script>