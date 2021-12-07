const InnerLayout = () => import(/* webpackChunkName:'innerLayout' */ '@/layouts/inner-layout')
const Blank = () => import(/* webpackChunkName:'blank' */ '@/pages/blank')

const route = {
	name: 'Blank',
	path: '/blank',
	component: InnerLayout,
	redirect: '/blank/index',
	meta: {
		title: '空白页',
		icon: 'blank',
	},
	children: [
		{
			path: '/blank/index',
			component: Blank,
			meta: {
				title: '空白页',
				activePath: '/blank',
			},
		},
	],
}

export default route
