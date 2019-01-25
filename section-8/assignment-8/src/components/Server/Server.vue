<template>
  <div>
    <li class="list-group-item" @click="updateStatus()" style="cursor: pointer" :server="server">
      Server #{{ server.id }} - {{ server.status }}
    </li>
  </div>
</template>

<script>
import {eventBus} from '../../main'

export default {
  props: ['server'],
  methods: {
    updateStatus() {
      eventBus.$emit('updateStatusDetails', this.server)
    }
  }
}
</script>