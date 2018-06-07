<template>
  <div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;内容</span>
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{this.$store.state.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
	.header
	  display: flex
	  line-height: $headerHeight
	  background: $bgColor
	  .header-left
	    width: .64rem
	    float: left
	    .back-icon
	    	text-align: center
	    	font-size: .4rem
	  .header-input
	    flex: 1
	    height: .64rem
	    line-height: .64rem
	    margin-top: .12rem
	    background: #fff
	    border-radius: .1rem
	  .header-right
	    float: right
	    min-width: 1.24rem
	    text-align: center
	    color: #fff
	    .arrow-icon
	      font-size: .24rem
	      margin-left: -.04rem
</style>
