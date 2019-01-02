<template>
	<div>
		<h6>My First Child Component</h6>
        <h6>Name comes from parent:{{myName}}</h6>
        <h6>Age comes from parent:{{myAge}}</h6>
        <h6>Printed using Function :{{switchName()}}</h6>
        <button @click="changeName">Child change Button</button>
	</div>

</template> 

<script>
	import { eventBus } from '../main';
export default{
   props:['myName'],
   props:['myAge'],
   methods:{
   	switchName(){
   		return this.myName;
   	},
   	changeName(){
   		this.myName='Saurav';
   		// this.$emit('nameWasReset',this.myName);

   	}
},
		created()
		{
			eventBus.$on('ageWasReset',(data) => {
				this.myAge=data;
			});

			eventBus.$on('nameWasReset',(data) => {
             this.myName=data;
			});
		}
}
</script>
<style>
div
{
	height:200px;
}
</style>