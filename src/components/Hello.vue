<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <div v-for="i in collection">
      {{i.test}}
    </div>
    <foo></foo>
    <!--<el-form :model="formdata">
      <el-form-item label="foo" prop="msg">
        <el-input v-model="formdata.msg"></el-input>        
      </el-form-item>
      <el-form-item label="foo" >
        <el-input v-model="formdata.msg"></el-input>        
      </el-form-item>
    </el-form>-->
    <input v-model="formdata.msg"></input>
    <!--<el-popover ref="popover1" title="Title" trigger="click">
      <div class="foo"><img src="../assets/logo.png"><form></form></div>
      <div slot="reference">Click this</div>
    </el-popover>-->
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>
<script>
// import $ from 'jquery'
import Vue from 'vue'

Vue.component('foo', {
  name: 'foo',
  template: `<div>{{mydata}}</div>`,
  data() {
    return {
      mydata: "foo"
    }
  }
})

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      formdata: {
        msg: "fooooo"
      }
    }
  },
  props: [
    'collection'
  ], 
  methods: {
    reference() {
      // let self = this;
      let a = function() {
        this.msg = "bah";
      }
      a();
      //console.log(self);  
    }
  },
  mounted() {
    // $.get('api/getstring')
    // .then((res) => {
    //   this.thing = res;
    //   //console.log(res);
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
