<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Status: {{ serverStatus }}</p>
        <button @click="setToNormal">Set to Normal</button>
    </div>

</template>

<script>
    import { eventBus} from "../../main";

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
          localServerStatus: 'Unknown'
        };
      },
      created () {
        eventBus.$on('updateStatusDetails', (status) => {this.serverStatus = status});
      },

      methods: {
        setToNormal() {
          newStatus = {
            status: 'Normal',
            id: this.serverId
          }
          eventBus.$emit('updateStatus', newStatus);
        }
      }
    }
</script>

<style>

</style>
