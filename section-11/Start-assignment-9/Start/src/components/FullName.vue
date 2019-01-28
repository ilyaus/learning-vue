<template>
  <div>
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" class="form-control" v-model="firstName"  @change="nameUpdated()">
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" class="form-control" v-model="lastName" @change="nameUpdated()">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    getFirstName(fullName) {
      if (fullName) return fullName.split(' ')[0]
    },
    getLastName(fullName) {
      if (fullName) return fullName.split(' ')[1]
    },
    nameUpdated () {
      console.log("nameUpdated: " + this.firstName + ' ' + this.lastName)
      this.$emit("input", this.firstName + ' ' + this.lastName)
    }
  },
  created () {
    console.log(this.value)
    if (this.value) {
      this.firstName = this.getFirstName(this.value)
      this.lastName = this.getLastName(this.value)
    }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      fullName: ''
    }
  }
}
</script>
