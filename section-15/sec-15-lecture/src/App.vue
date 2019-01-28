<template>
  <div id="app">
    <ul class="list-group">
      <li v-for="(ramp, index) in testData.ramps" :key="index" class="list-group-item">{{ramp.throughputMBps}}</li>
    </ul>
    <button class="btn btn-primary" @click="getTestData()">Get Data</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      testData: {},
      resource: {}
    }
  },
  methods: {
    getTestData () {
      // this
      //   .$http.get('test/VolatileBlobRandomDH_4KbMsg/result')
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(jsonData => {
      //     this.testData = jsonData
      //   })

      // this.resource.get()
      //   .then(response => {
      //     this.testData = response.body
      //   })

      this.resource.getData({ testName: 'VolatileBlobRandomDH_4KbMsg' }).then(response => {
        this.testData = response.body
      })
    }
  },
  created () {
    const customActions = {
      getData: { method: 'GET' }
    }
    this.resource = this.$resource('test/{testName}/result', {}, customActions)
    // VolatileBlobRandomDH_4KbMsg
  }
}
</script>

<style>
</style>
