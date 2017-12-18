<template>
  <v-card>
    <v-card-text>
      Робуста 100 г
    </v-card-text> 
    <v-card-text>
      Арабика  100 г
    </v-card-text>  
    <v-form @submit.prevent="statusSend">
     <v-select
        label="Status"
        v-model="select"
        :items="items"
        required
      ></v-select>
      <v-btn
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      select: null,
      items: [
        'received',
        'done'
      ]
    }
  },
  methods: {
    statusSend () {
      const data = JSON.stringify({
        select: this.select
      })
      this.$axios.$post('http://localhost:3000/answer',
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
  }
}
</script>

