<template>
  <!-- vue2.0需要根元素,3.0可以是代码片段 fragment -->
  <div class="container">
    APP
    <p>{{$store.state.username}}</p>
    <p>{{$store.getters.newName}}</p>
    <button @click="mutationsFn">改名</button>
  </div>
  <!-- <P>P</P> -->
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    // 2. 使用根模块getters的数据
    console.log(store.getters.newName)
    const mutationsFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>

<style>

</style>
