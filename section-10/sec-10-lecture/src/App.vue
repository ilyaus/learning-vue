<template>
  <div id="app" class="container">
    <app-quote-counter :maxQuotes="maxQuotes"></app-quote-counter>
    <app-enter-quote ></app-enter-quote>
    <app-quotes-display :maxQuotes="maxQuotes"></app-quotes-display>
    <app-info></app-info>
  </div>
</template>

<script>
import QuoteCounter from './components/QuoteCounter.vue'
import EnterQuote from './components/EnterQuote.vue'
import QuotesDisplay from './components/QuotesDisplay.vue'
import Info from './components/Info.vue'

// import { eventBus } from './main'

export default {
  name: 'app',
  data () {
    return {
      maxQuotes: 5
    }
  },
  components: {
    appQuoteCounter: QuoteCounter,
    appEnterQuote: EnterQuote,
    appQuotesDisplay: QuotesDisplay,
    appInfo: Info
  }
}
</script>

<style>
  #app {
    text-align: center
  }
</style>
