<template>
	<div class="footer">
		<ul>
			<router-link tag="li" active-class="active" to="/home"><a href="javascript:;">首页</a><img ></router-link>
			<router-link tag="li" active-class="active" to="/around"><a href="javascript:;">附近</a><img ></router-link>
			<router-link tag="li" active-class="active" to="/shop"><a href="javascript:;">购物车</a><img ></router-link>
			<router-link tag="li" active-class="active" to="/my"><a href="javascript:;">我的</a><img ></router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){return {}},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	.footer{}
</style>
