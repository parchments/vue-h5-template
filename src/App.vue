<template>
  <div id="app">
	<app-header></app-header>
	<index></index>
	<nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
window.onload = function () {
	window.viewportUnitsBuggyfill.init({
		hacks: window.viewportUnitsBuggyfillHacks
	});

	// var winDPI = window.devicePixelRatio;
	// var uAgent = window.navigator.userAgent;
	// var screenHeight = window.screen.height;
	// var screenWidth = window.screen.width;
	// var winWidth = window.innerWidth;
	// var winHeight = window.innerHeight;

	// console.log(
	// 	"Windows DPI:" + winDPI +
	// 	";\ruAgent:" + uAgent +
	// 	";\rScreen Width:" + screenWidth +
	// 	";\rScreen Height:" + screenHeight +
	// 	";\rWindow Width:" + winWidth +
	// 	";\rWindow Height:" + winHeight
	// )
}
import Index from './views/home/Index.vue'
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    'index': Index,
    'app-header': AppHeader,
    'nav-bar': NavBar
  }
}
</script>
<style scoped>
	#app{
		margin: 0 auto 108px;
	}
</style>
