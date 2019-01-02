<template>
  <div>
     <div class="container bg-dark ">
    
      <h1 class="text-danger"> I am parent Componment</h1>
      <h6 class="text-danger">Current age is:{{age}}</h6>
      <h6 class="text-success"> My Name is {{name}}</h6>
      <button @click="changeName">Change My Name</button>
      <div class="row ">
        <div class="col-lg-5 bg-primary mt-5 ">
          <child  :myName="name" :myAge="age" @nameWasReset="name = $event"></child>
        </div>
        <div class="col-lg-2 bg-dark">
          
        </div>
        <div class="col-lg-5 bg-success mt-5">
         <child3 :myName="name" :myAge="age"></child3>
        </div>
      </div>
     </div>

  </div>
</template>

<script>
  import child from './child.vue';
  import child3 from './child3.vue';

  export default{
    components:{
      child,
      child3
      
    
    },
    data:function() {
      return{
        name:'Saurav',
        age: 27
      }
    },
    methods: {
      changeName(){
       this.name='Anna';
      }
    }
  }
</script>

<style>
.h1
{
  height:500px;
}
</style>
