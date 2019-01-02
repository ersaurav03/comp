<template>
	
			
				<nav class="navbar navbar-expand-lg bg-light navbar-light">
					<a class="navbar-brand" href="#">Navbar</a>
					<button class="navbar-toggler" data-toggle="collapse" data-target="#id1">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="id1">
						<ul class="navbar-nav">
							<li v-for="linkk in links" class="nav-item">
								<a href="#" class="nav-link">{{linkk}}</a>
							</li>
						</ul>
					</div>
				</nav>
			


</template>


<script type="text/javascript">
	export default{
		data:function()
		{
			return{
				links :['Home','About', 'Contacts','Account','Name'],
				tags :['']
			}
		}
	}
</script>