<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书 | 虚构类" type="hasCover" :items="novel"></scroller>
		<scroller title="最受关注图书 | 非虚构类" type="hasCover" :items="reality"></scroller>
		<scroller title="豆瓣纸书" type="hasCover" :items="travel">
			<div class="promItem" slot="proItem">
				<img src="../assets/book_zw.jpg" class="corver" alt="">
				<div class="content">
					<span class="price">
						￥68
					</span>
					<p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
				</div>
			</div>
		</scroller>
		<scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
		<types></types>
    <download-app></download-app>
  </div>
</template>

<script>
	import { mapState } from 'vuex'
	import Scroller from '../components/Scroller';
	import Types from '../components/Types'
	import DownloadApp from '../components/DownloadApp'

	export default {
		name: 'book-view',
		components: { Scroller , Types , DownloadApp },
		data () {
			return {

			}
		},
		computed: {
			...mapState({
				novel: state => state.book.novel,
				reality: state => state.book.reality,
				travel: state => state.book.travel,
				bookTags: state => state.book.bookTags 
			})
		},
		methods: {
			getBook: function(){
				this.$store.dispatch('getBook')
			}
		},
		created () {
			this.getBook()
		} 
	}

</script>
