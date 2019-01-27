<template>
  <div class="row">

      <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="removeQuote(index)">
        {{ quote }}
      </app-quote>

  </div>
</template>

<script>
import Quote from './Quote.vue'
import { eventBus } from '../main'

export default {
  components: {
    appQuote: Quote
  },
  props: ['maxQuotes'],
  data () {
    return {
      quotes: []
    }
  },
  methods: {
    removeQuote (i) {
      console.log('Removing quote ' + i)
      this.quotes.splice(i, 1)
    }
  },
  created () {
    eventBus.$on('updateQuotes', (quote) => {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push(quote)
        eventBus.$emit('updateQuotesCounter', this.quotes.length)
      } else {
        alert('No more quotes, please!')
      }
    })
  }
}
</script>

<style>
  .panel-body {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
