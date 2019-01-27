<template>
  <div id="app" class="container">
    <form action="">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" class="form-control" id="email">
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="password" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="age">Mail</label>
            <input type="number" class="form-control" id="age">
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  div {
    text-align: center;
  }
</style>
