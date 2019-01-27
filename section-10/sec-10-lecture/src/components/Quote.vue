<template>
  <div class="col-sm-2">
    <div class="card card-body quote">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteQuote () {
      console.log('Deleting quote')
    }
  }
}
</script>
