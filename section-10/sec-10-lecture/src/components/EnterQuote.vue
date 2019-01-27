<template>
  <div class="row">
      <div class="col-sm-8 form-group">
        <form>
          <label>Quote</label>
          <textarea class="form-control" rows="3" v-model="quote"></textarea>
          <button @click.prevent="addQuote()" class="btn btn-primary">Add Quote</button>
        </form>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    addQuote () {
      if (this.quote.trim().length > 0) {
        console.log('Adding ' + this.quote)
        eventBus.$emit('updateQuotes', this.quote)
        this.quote = ''
      }
    }
  }
}
</script>
