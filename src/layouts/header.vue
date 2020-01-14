<template>
	<div class="header">
		<div class="header_left">
			<span>上海</span><i><img src="../../public/img/首页/ia_300000000.png"></i>
		</div>
		<h4>易惠购商城</h4>
		<div class="header_right"><img src="../../public/img/首页/ia_300000001.png"></div>
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
	.header{width: 100%;height:1rem;color: #fff;display: flex;justify-content: space-around;background: #ff7a01;}
	.header .header_left{}
	.header .header_left span{font: .3rem/1rem "";}
	.header .header_left i{background: url(../../public/img/首页/ia_300000000.png) no-repeat right;}
	.header h4{font:.36rem/1rem "";}
	.header .header_right{line-height: 1rem;}
	.header .header_right img{width: .5rem;height: .5rem;}
</style>
<!-- 约是测出地大小px*2/100 -->