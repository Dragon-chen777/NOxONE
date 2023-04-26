module.exports = {
	$schema: '​https://json.schemastore.org/prettierrc',
	printWidth: 200, // 单行长度
	tabWidth: 2, // 缩进长度
	useTabs: true, // 使用tab缩进
	semi: false, // 是否在句末使用分号
	singleQuote: true, // 是否使用单引号
	quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
	trailingComma: 'all', // 多行时尽可能打印尾随逗号
	bracketSpacing: true, // 是否在对象前后添加空格: { foo: bar }
	jsxBracketSameLine: true, // 是否将多属性html标签的‘>’折行放置
	requirePragma: false, // 是否仅在文件添加顶部注释标记时才格式化
	insertPragma: false, // 是否在已被preitter格式化的文件顶部加上标注
	proseWrap: 'preserve', // 不知道怎么翻译
	vueIndentScriptAndStyle: false, // 是否对vue中的script及style标签缩进
	endOfLine: 'lf', // 结束行形式
	embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化的方式
}
