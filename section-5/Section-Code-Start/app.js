Vue.component('hello', {
  template: '<h1>Hello from template</h1>'
})

const vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = "Changed";
    }
  }
});

const vm3 = new Vue({
  template: '<h1>Hello</h1>'
});

vm3.$mount("#app3");

// setTimeout(function() {
//   vm1.title = 'Changed by timer!';
//   vm1.show();
// }, 3000);

