<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>

        <hr>

        <p>{{ selectedComponent }}</p>

        <keep-alive>
          <component :is="selectedComponent">
            <h2 slot="title">Quote:</h2>
            <p slot="content">The wonderful quote!</p>
            <hr slot="title">
          </component>
        </keep-alive>

        <!-- <app-quote>
          <h2 slot="title">Quote:</h2>
          <p slot="content">The wonderful quote!</p>
          <hr slot="title">
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  name: 'app',
  data() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'app-quote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px auto;
  text-align: center;
}

h2 {
  color: red;
}
</style>
