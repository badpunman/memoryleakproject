<template>
  <div id="app">
    <button @click="toggleChoose()">switch</button>
          
    <div v-if="choose">
      Whoot. asdop kasdop kasopd kad asd asd  asd asd
      <hello :collection="collection"></hello>
    </div>
    <div v-else>      
      Whoot WhootWhoot. asdop kasdop kasopd kad asd asd  asd asdWhoot. 
      asdop kasdop kasopd kad asd asd  asd asdWhoot. asdop kasdop kasopd kad asd asd  asd asdWhoot. asdop kasdop kasopd kad asd asd  asd asdWhoot. asdop kasdop kasopd kad asd asd  asd asd
    </div>        
  </div>
</template>

<script>
import Hello from '.\\components\\Hello'
import {mapState} from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      choose: false,
      collection: [
        {text: "test"},
        {text: "test2"},
        {text: "test3"},
        {text: "test4"}
      ]
    }
  },
  methods: {
    toggleChoose() {
      this.choose = ! this.choose;
    }
  },
  computed: {
    //  ...mapState({
    //    stuff : state => state.test.test
    //  })
  },
  components: {
    Hello
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
</style>
