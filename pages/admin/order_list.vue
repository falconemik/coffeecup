<template>
  <v-container>
    <v-data-table
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
        <td class="text-xs-right">{{ props.item.status }}</td>
        <td class="text-xs-right"><v-btn>{{ props.item.details }}</v-btn></td>
      </template>
    </v-data-table>
    <div>
        <h1>Super secret page</h1>
        <router-link to="/">Back to the home page</router-link>
      </div>
  </v-container>
</template>
  <script>
      export default {
        data () {
          return {
            headers: [
              {
                text: 'id',
                align: 'left',
                sortable: false,
                value: 'name'
              },
              { text: 'odrer number', value: 'guid' },
              { text: 'name', value: 'fat' },
              { text: 'phone', value: 'carbs' },
              { text: 'email', value: 'protein' },
              { text: 'adress', value: 'Grushevskogo str' },
              { text: 'delivery', value: 'delivery' },
              { text: 'status', value: 'done' },
              { text: 'order datails', value: 'details' }
            ],
            items: [
              {
                value: false,
                id: '1',
                name: 'Uli',
                guid: '6464646',
                phone: 24,
                email: 'elegancia18@i.ua',
                adress: 'Grushevskogo str',
                delivery: 'NovaPoshta',
                status: 'done',
                details: 'Details'
              }
            ]
          }
        },
        fetch ({ store, redirect }) {
          if (!store.state.authUser) {
            return redirect('/')
          }
        }
      }
    </script>