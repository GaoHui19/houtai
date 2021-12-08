const InnerLayout = () => import(/* webpackChunkName:'innerLayout' */ '@/layouts/inner-layout')
const Tab = () => import(/* webpackChunkName:'tab' */ '@/pages/tab')

const route = {
	name: 'Tab',
	path: '/tab',
	component: InnerLayout,
	redirect: '/tab/index',
	meta: {
		title: 'Tab选项卡',
		icon: 'tab',
	},
	children: [
		{
			path: '/tab/index',
			component: Tab,
			meta: {
				title: 'Tab选项卡',
				activePath: '/tab',
			},
		},
	],
}

export default route
