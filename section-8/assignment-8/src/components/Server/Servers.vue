<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" @click="showStatus(server)" v-bind:>
                Server #{{ server.id }} - {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
  import {eventBus} from "../../main";

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
    created() {
      eventBus.$on('updateStatus', (status) => {
        alert("Updating status to " + status);
      });
    },

    methods: {
      showStatus(server) {
        eventBus.$emit("updateStatusDetails", server.status);
      }
    }
  }
</script>

<style>

</style>
