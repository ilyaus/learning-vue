<template>
  <div>
    <div class="title">
      <slot name="title"/>
      <span>
        <slot name="subtitle">Default</slot>
      </span>
    </div>
    <div><slot name="content"/></div>
    <button @click="counter++">Increase Counter</button>
    <p>{{ counter }}</p>
  </div>  
</template>

<script>
export default {
  props: ['quote'],
  data () {
    return {
      'counter': 0
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid #cccccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  .title {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
  }
</style>
