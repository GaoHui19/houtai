<script>
import errGif from '@/assets/images/common/403.gif'

export default {
	data() {
		return {
			dialogVisible: false,
			// 图片路径加上参数，保证每次打开这个页面都会重新开始播放gif。
			// 图片路径带查询参数后放在远程加载的非常慢。
			errGif: errGif + '?' + Date.now(),
			gifList: [
				'https://i.loli.net/2019/11/25/tA8LF4yWBiR3mKe.gif',
				'https://i.loli.net/2019/11/25/I5mQqnbSdlaCOeu.gif',
				'https://s2.ax1x.com/2019/11/25/MXz4nP.gif',
				'https://i.loli.net/2019/11/25/brpQXvJd31a5URL.gif',
				'https://i.loli.net/2019/11/25/4j192cmGeBqQaE5.gif',
				'https://i.loli.net/2019/11/25/Nj5ZFabnkTPXIR4.gif',
				'https://i.loli.net/2019/11/25/fRkBh6uGxA5EC34.gif',
				'https://i.loli.net/2019/11/25/TEAopkJ7BWSrXQx.gif',
				'https://i.loli.net/2019/11/25/GneYytT4iLg1ofX.gif',
				'https://i.loli.net/2019/11/25/Dts9QBjJ5EKZ1bF.gif',
			],
		}
	},
}
</script>

<template>
	<div class="forbbiden">
		<div class="content">
			<img style="float: right" :src="errGif" alt="" />
			<p class="oops">Oops!</p>
			<h2>你没有权限访问该页面</h2>
			<p class="dissatisfy">如有不满请联系相关领导</p>
			<p>或者你可以</p>

			<ul class="list">
				<li>
					<router-link to="/home">返回首页</router-link>
				</li>
				<li>
					<a href="https://www.tmall.com/" target="_blank">随便看看</a>
				</li>
				<li @click="dialogVisible = true">点我看图</li>
			</ul>

			<el-dialog v-model="dialogVisible">
				<span slot="title">图片来源：<a href="https://dribbble.com/" target="_blank">dribbble</a></span>
				<el-carousel height="400px" arrow="always" :autoplay="false" indicator-position="none">
					<el-carousel-item v-for="gif in gifList" :key="gif">
						<img class="dialog-img" :src="gif" alt="" />
					</el-carousel-item>
				</el-carousel>
			</el-dialog>
		</div>
	</div>
</template>

<style lang="less" scoped>
.forbbiden {
	position: absolute;
	top: 2px;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
	overflow: auto;

	.content {
		width: 650px;
		margin: 80px auto;

		.oops {
			font-size: 50px;
			font-weight: 600;
			margin-bottom: 20px;
		}

		.dissatisfy {
			font-size: 12px;
			margin: 10px 0;
		}

		.list {
			list-style-type: disc;
			list-style-position: inside;

			li {
				text-decoration: underline;
				cursor: pointer;
				margin-bottom: 4px;
				color: #4a4a4a;
			}
		}

		.dialog-img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>

<style lang="less">
.forbidden {
	.el-carousel__indicators {
		display: none;
	}
}
</style>
