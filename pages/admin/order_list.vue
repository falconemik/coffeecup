`<template>
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

</template>

<script>
  import { DB } from '@/services/fireinit.js'

  export default {
    firebase: {
      orders: DB.ref('orders')
    },
    data () {
      return {
        temp: null
      }
    }
  }
</script>