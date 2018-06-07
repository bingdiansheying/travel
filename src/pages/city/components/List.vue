<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area">
				<div class="title bordertopbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title bordertopbottom">热门城市</div>
				<div class="button-list">
					<div 
						class="button-wrapper" 
						v-for='item of hot' 
						:key='item.id'
						@click='handleCityClick(item.name)'
					>
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for='(item,key) of cities' :ref='key'>
				<div class="title bordertopbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item" 
						v-for='inneritem of item' 
						:key='inneritem.id'
						@click='handleCityClick(inneritem.name)'
					>
						{{inneritem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	name: 'CityList',
	props:{
		cities:Object,
		hot: Array,
		letter: String
	},
	methods: {
		handleCityClick (city){
			this.$store.commit('changeCity',city)
			this.$router.push('./')
		}
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.wrapper)
	},
	watch:{
		letter(){
			if(this.letter){
				const element=this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	}
}
</script>
<style lang='stylus' scoped>
	@import '~styles/varibles.styl'
	.list
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		.title
			line-height: .54rem
			background: #eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.button-list
			overflow:hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				float: left
				width:33.3%
				.button
					margin: .1rem
					padding: .1rem 0
					text-align: center
					border: .02rem solid red
					border-radius: .06rem
		.item-list
			.item
				line-height: .75rem
				color: #666
				padding-left: .2rem
				border-bottom: .01rem solid #aaa
</style>