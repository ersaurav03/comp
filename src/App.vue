<template>
  <div id="app">
    <nav1></nav1>
<father></father>

    <router-view/>
  </div>
</template>

<script>
  import father from './components/father.vue';
  import nav1 from './components/nav.vue';

  export default{
    components:{
      father,
      nav1
    
    }
  }
</script>

<style>
.h1
{
  height:500px;
}
</style>
