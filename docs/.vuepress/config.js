const sidebar = require('../blog')
const BASE_URL = 'https://dragon-chen777.github.io'

const NOXONE_MUSIC_LIST = [
	// todo
	'红莲华',
	'カナタハルカ',
	'なんでもないや',
	'打上花火',
	'愛にできることはまだあるかい',
	'宝贝（in the night）',
	'张三的歌',
	'Melody',
	'普通朋友',
	'飞机场的10：30',
	'爱，很简单',
	'很高兴认识你',
	'对不起',
	'一路向北',
	'Drugs You Should Try It',
	'Mamacita',
].map((music) => ({
	cover: `${BASE_URL}/assets/music/${music}.png`,
	title: music,
	link: `${BASE_URL}/assets/music/${music}.mp3`,
}))

module.exports = {
	title: 'NOXONE',
	description: '欢迎来到NOxONE的小破站~',
	base: '/NOxONE/',
	head: [['link', { rel: 'icon', href: `${BASE_URL}/assets/images/logo.png` }]],
	theme: 'reco',
	themeConfig: {
		type: 'blog',
		author: 'NOxONE',
		startYear: '2023',
		logo: `https://p3-passport.byteimg.com/img/user-avatar/039391726bfa394febe9e5853f06026a~180x180.awebp`,
		authorAvatar: 'https://p3-passport.byteimg.com/img/user-avatar/039391726bfa394febe9e5853f06026a~180x180.awebp',
		authorAvatar2: 'https://dragon-chen777.github.io/assets/images/noxoneAvator.png',
		nav: [
			{
				text: '博客',
				icon: 'reco-home',
				link: '/blog/',
			},
			{
				text: 'Demos',
				icon: 'reco-other',
				items: [
					{
						text: '🎵NOxONE音乐播放器',
						link: 'https://dragon-chen777.github.io/Music-player',
					},
					{
						text: '🎮打方块游戏',
						link: 'https://dragon-chen777.github.io/Block-collision-game',
					},
					{
						text: '👨马保国打字游戏',
						link: 'https://dragon-chen777.github.io/Typer-game',
					},
					{
						text: '📕答案之书',
						link: 'https://dragon-chen777.github.io/Book-of-answers',
					},
					{
						text: '🎥影院座位预订',
						link: 'https://dragon-chen777.github.io/Cinema-seat-reservation',
					},
					{
						text: '💎我的处女作',
						link: 'https://dragon-chen777.github.io/My-first-web-20200722',
					},
				],
			},
			{
				text: '百宝箱',
				icon: 'reco-menu',
				items: [
					{
						text: '🔨开发工具箱',
						link: 'https://www.runjs.cool',
					},
					{
						text: '🎨tinypng图片压缩',
						link: 'https://tinypng.com',
					},
					{
						text: '👓代码片段生成器',
						link: 'https://99cc.vip/public/tools/vscode_snippet/index.html',
					},
					{
						text: '路过图床',
						link: 'https://imgse.com',
					},
					{
						text: '🎯代码随想录',
						link: 'https://programmercarl.com',
					},
					{
						text: '🎲打字背英文',
						link: 'https://qwerty.kaiyi.cool',
					},
				],
			},
			{
				text: '社交账号',
				icon: 'reco-account',
				items: [
					{
						icon: 'reco-github',
						text: 'Github',
						link: 'https://github.com/Dragon-chen777',
					},
					{
						icon: 'reco-npm',
						text: 'npm',
						link: 'https://www.npmjs.com/~noxone',
					},
					{
						icon: 'reco-juejin',
						text: '掘金',
						link: 'https://juejin.cn/user/3488066386291463',
					},
					{
						icon: 'reco-csdn',
						text: 'CSDN',
						link: 'https://blog.csdn.net/Xiaoyc7',
					},
					{
						icon: 'reco-bilibili',
						text: 'Bilibili',
						link: 'https://space.bilibili.com/273377574',
					},
				],
			},
		],
		sidebar,
		// subSidebar: 'auto',
		blogConfig: {
			category: {
				location: 5,
				text: '专栏',
			},
			tag: {
				location: 5, // 在导航栏菜单中所占的位置，默认3
				text: '标签', // 默认文案 “标签”
			},
			socialLinks: [
				// 信息栏展示社交信息
				{
					icon: 'reco-github',
					link: 'https://github.com/Dragon-chen777',
				},
				{
					icon: 'reco-npm',
					link: 'https://www.npmjs.com/~noxone',
				},
				{
					icon: 'reco-juejin',
					link: 'https://juejin.cn/user/3488066386291463',
				},
				{
					icon: 'reco-csdn',
					link: 'https://blog.csdn.net/Xiaoyc7',
				},
				{
					icon: 'reco-bilibili',
					link: 'https://space.bilibili.com/273377574',
				},
			],
		},
		locales: {
			'/': {
				recoLocales: {
					article: '文章', // 默认 文章
					tag: '标签', // 默认 标签
					category: '专栏', // 默认 分类
					friendLink: '友链', // 默认 友情链接
					pagation: {
						prev: '上一页',
						next: '下一页',
						go: 'GO',
						jump: '传送到',
					},
				},
			},
		},
		vssueConfig: {
			platform: 'github',
			owner: 'Dragon-chen777',
			repo: 'NOxONE',
			clientId: '6b16c80b6b1338dd296b',
			clientSecret: '6a96da6578132cc58ee3d1f8935b88bf804336d3',
		},
	},
	plugins: {
		'@noxone/vuepress-plugin-cover': {
			main: [
				{
					content: ['我想，', '在这个世界上,', '虽然没有最美好的相遇，', '但却应该有为了相遇或重逢，', '所做的最美好的努力。'],
				},
				{
					content: ['一定要爱着点什么，', '恰似草木对光阴的钟情。'],
				},
				{
					content: ['人生如梦，', '我投入了的却是真情，', '世界先爱了我，', '我不能不爱它。'],
				},
				{
					content: ['爱自己，', '是终身浪漫的开始。'],
				},
				{
					content: ['我不想谋生，', '我想生活。'],
				},
				{
					content: ['要么重构，', '要么享受！'],
				},
			],
		},
		'@noxone/vuepress-plugin-music-player': {
			musicList: NOXONE_MUSIC_LIST,
			zIndex: 19,
			themeColor: '#69c6f5',
		},
		'@noxone/vuepress-plugin-live2d': {},
		sakura: {
			num: 10, // 默认数量
			show: true, //  是否显示
			zIndex: 9999, // 层级
			img: {
				replace: false, // false 默认图 true 换图 需要填写httpUrl地址
				httpUrl: '...', // 绝对路径
			},
		},
		'reading-progress': {},
		'go-top': {},
		'@vuepress-reco/back-to-top': false,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': '/',
			},
		},
	},
	extraWatchFiles: [
		'.vuepress/styles/index.styl', // 使用相对路径
		'.vuepress/styles/palette.styl',
		'.vuepress/components/',
	],
}
