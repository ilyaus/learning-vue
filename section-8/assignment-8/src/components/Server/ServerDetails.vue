<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Server Status: {{ server.status }}</p>
        <p v-else>Please select a server</p>
        <button @click="setToNormal">Set to Normal</button>
    </div>
</template>

<script>
    import {eventBus} from "../../main";

    export default {
      props: {
        serverStatus: {
          type: String,
          default: 'Unknown'
        },
        serverId: {
          type: Number,
          required: true
        }
      },
      data() {
        return {
          server: null
        };
      },
      created () {
        eventBus.$on('updateStatusDetails', (server) => {
          this.server = server
        });
      },

      methods: {
        setToNormal() {
          this.server.status = 'Normal'
        }
      }
    }
</script>

<style>

</style>
