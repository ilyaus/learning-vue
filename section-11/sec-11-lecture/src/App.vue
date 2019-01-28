<template>
  <div id="app" class="container">
    <form action="">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" class="form-control" id="email" v-model.lazy="user.mail">
            {{ user.mail }}
          </div>
          <div class="form-group">
            <label for="name">Password</label>
            <input type="password" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="age">
          </div>
          <div class="form-group">
            <label for="sendMail"></label>
            <input type="checkbox" v-model="sendMail" id="sendMail" value="sendMail" class="form-control">
            <label for="sendInfoMail"></label>
            <input type="checkbox" v-model="sendMail" id="sendInfoMail" value="sendInfoMail" class="form-control">
          </div>
          <div class="form-group">
            <label for="female">Female</label>
            <input type="radio" v-model="gender" id="female" name="gender" value="Female" class="form-control">
            <label for="male">Male</label>
            <input type="radio" v-model="gender" id="male" name="gender" value="Male" class="form-control">
          </div>
          <div class="form-group">
            <label for="priorities">Priorities</label>
            <select id="priorities" v-model="selectedPriority" class="form-control">
              <option v-for="(priority, index) in priorities" v-bind:key="index">{{ priority }}</option>
            </select>
          </div>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-xs-6">
        <h3>Checkbox</h3>
        {{ sendMail }}
        {{ sendMailVar }}
      </div>
      <div class="col-xs-6">
        <h3>Radio Box</h3>
        {{ gender }}
      </div>
      <div class="col-xs-6">
        <h3>Priority</h3>
        {{ selectedPriority }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      user: {
        mail: '',
        name: '',
        age: -1
      },
      sendMail: [],
      sendMailVar: '',
      gender: '',

      selectedPriority: 'Medium',
      priorities: ['High', 'Medium', 'Low']
    }
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
