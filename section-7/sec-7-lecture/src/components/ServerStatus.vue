<template>
  <div>
    Server Status: {{ status }} 
    <button @click="changeStatus">Change</button>
    <global-component/>
  </div>
</template>

<script>

export default {
  name: 'ServerStatus',
  data: function() {
    return { status: 'Critical' }
  },
  methods: {
    changeStatus: function() {
      this.status = 'Normal'
    }
  }
}
</script>
