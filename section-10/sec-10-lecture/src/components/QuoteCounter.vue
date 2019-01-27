<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress-bar" role="progressbar"
             aria-valuenow="60"
             aria-valuemin="0"
             aria-valuemax="100"
             :style="{width: (quoteCount / maxQuotes) * 100 + '%'}"
             >
          {{ quoteCount }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    maxQuotes: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      quoteCount: 0
    }
  },
  created () {
    eventBus.$on('updateQuotesCounter', (count) => {
      this.quoteCount = count
    })
  }
}
</script>
