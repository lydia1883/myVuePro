<template>
  	<div class="home-view has-header">
		<sub-nav mold="quickNav"></sub-nav>
		<!-- <user-bar></user-bar> -->
		<list mold="thumbnail" :items="events"></list>
		<infinite-loading @infinite="onInfinite" ref="infiniteLoading">
			<loading slot="spinner"></loading>
		</infinite-loading>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import InfiniteLoading from 'vue-infinite-loading' 
	import SubNav from '../components/SubNav'
	import List from '../components/List'
	import Loading from '../components/Loading'
	import UserBar from '../components/UserBar'

	export default {
		name: 'home-view',
		components : { SubNav , List , InfiniteLoading , Loading , UserBar },
		data() {
			return {}
		},
		computed: {
			// Getting Vuex State from store/modules/activities
			...mapState({
				events: state => state.activities.events
			})
		},
		methods: {
			onInfinite () {
				setTimeout(() => {
					this.loadMore();
					this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
				},1000)
			},
			// Dispatching Actions
			...mapActions([
				'loadMore'
			])
		}
	}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>