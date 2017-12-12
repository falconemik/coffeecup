<template>
  <v-layout>
    <v-flex>
      <v-card style="background-color:#bdb76b">
        Конткты
        Обратная связь
        <form>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="subject"
      label="Тема"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      v-model="message"
      label="Сообщение"
      :counter="10"
      required
    ></v-text-field>
    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
      </v-card>  
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
  export default {
    data () {
      return {
        subject: '',
        email: '',
        message: ''
      }
    },
    methods: {
      async submit () {
        const mail = { 
          to: this.email,
          subject: this.subject,
          html: this.message
        }
        await this.$axios.$post('http://nzxt.ddns.net:3030/mailer', {mail})
      },
      clear () {
        this.subject = ''
        this.email = ''
      }
    }
  }
</script>