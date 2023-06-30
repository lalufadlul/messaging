<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
		</div>
		<div class="search-container-parent">
		  <div class= "search-container">
			   
			  <input class= "input-search"
				type="text"
				
				placeholder="Search for answers"
				
			  />
			  <div class="icon-search">
				<Icon name="search"></Icon>
				
				
			  </div>
		</div> 
		
	  </div>
	</div>
	
</template>

<script>
import Icon from '../components/Icon.vue';

export default {
   
    components: {
      Icon,
    }
}
    
  
</script>

<style lang="scss" scoped>
    @import '../assets/variable.scss';
    #header-text{
		text-align: center;
		font-family: font-family;
		color: text-black; 
		padding: 20px;

		h1{
			font-style: normal;
			font-weight: bold;
			font-size: 34px;
			line-height: 41px;
		}

		h3{
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;
		}
    }
	.search-container-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}
.search-container {
	display: flex;
  	align-items:  center;
	text-align: center;
	justify-content: center;
}

.input-search {
	width:700px;
	height:40px;
	padding-left: 20px;
	border: 2px solid #EEEEEE;
	border-right: 0px;
	border-radius: 5px 0px 0px 5px;
	font-family: 'Lato';
	font-size: 16px;
	font-weight: 400;
}

.icon-search {
	display: flex;
	width:50px;
	height:40px;
	background-color: #03A84E;
	align-items:  center;
	justify-content: center;
	border-radius: 0px 5px 5px 0px;
	border: 3px solid #03A84E;
}
</style>