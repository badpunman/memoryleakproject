import Vue from 'vue'

let a = Vue.component('foo', {
  name: 'foo',
  template: `<div>{{mydata}}</div>`,
  data() {
    return {
      mydata: "foo"
    }
  }
})

export default a;