<template>
	<div>
<h6 class="text-danger">My Second Child Component</h6>
<h6> Name comes from parent {{myName}}</h6>
<h6>Age comes from parent:{{myAge}}</h6>
<h6>printed using Function {{switchName()}}</h6>
<button @click="editAge">Edit Age</button>
</div>
</template> 

<script>
	import { eventBus } from '../main';
	export default{

		// props: { 
  //      myName: [String, Array] for string array
		// }
		// props: { 
  //      myName: String  for string validation
		// }

		props:['myName'],
		props1:['myAge'],
		methods:{
			switchName(){
				return this.myName;
			},
			editAge(){
             this.myAge=30;
             this.myName='Kumar';
            eventBus.$emit('ageWasReset',this.myAge);
            eventBus.$emit('nameWasReset',this.myName);

			}
		},

	}
</script>
<style>
div
{
	height:200px;
}
</style>