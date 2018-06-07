<template>
	<ul class="list">
		<li 
			class="item" 
			v-for='item of letters' 
			:key='item'
			:ref='item'
			@touchstart='handletouchstart'
			@touchmove='handletouchmove'
			@touchend='handletouchend'
			@click='handleLetterClick'
		>
			{{item}}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	data(){
		return{
			touchstatus:false,
			startY: 0,
			timer: null
		}
	},
	updated (){
		this.startY = this.$refs['A'][0].offsetTop
	},
	computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
	methods: {
		handleLetterClick(e){
			this.$emit('change',e.target.innerText)
		},
		handletouchstart(){
			this.touchstatus = true
		},
		handletouchmove(e){
			if(this.touchstatus){
				if(this.timer){
					clearTimeOut(this.timer)
				}
				this.timer = setTimeOut(() => {
					const touchY = e.touches[0].clientY
					const index = Math.floor((touchY - this.startY)/20)
					if(index >=0 && index <= this.letters.length){
						this.$emit('change',this.letters[index])
					}
				},16)
			}
		},
		handletouchend(){
			this.touchstatus = false
		}
	}
}
</script>
<style lang='stylus' scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
</style>