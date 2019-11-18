<template>
  <section class="app-header">
	<div class="title">首页</div>
  </section>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>
.app-header{
	position: sticky;
	left: 0;
	top: 0;
	padding: 0 20px;
	box-sizing: border-box;
	width: 100%;
	height: 88px;
	background: #F2F2F2;
	display: -webkit-box;
	align-items: center;
	text-align: center;
}
.app-header .icon{
	width: 20px;
	height: 20px;
}
.app-header .title{
	flex: 1;
	font-size: 34px;
}
</style>
