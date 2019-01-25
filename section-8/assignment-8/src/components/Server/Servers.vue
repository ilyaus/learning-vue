<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <app-server v-for="(server, index) in this.servers" :key="index" :server="server"/>            
        </ul>
    </div>
</template>

<script>
  import {eventBus} from "../../main"
  import Server from './Server.vue'

  export default {
    data: function () {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Warning'},
          {id: 3, status: 'Critical'},
          {id: 4, status: 'Normal'}
        ]
      }
    },
    components: {
      'app-server': Server
    },
    created() {
    },
    methods: {
      showStatus(server) {
        eventBus.$emit("updateStatusDetails", server);
      }
    }
  }
</script>

<style>

</style>
