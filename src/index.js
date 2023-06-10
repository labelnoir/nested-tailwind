const plugin = require('tailwindcss/plugin')

const htmlElements = [
	["a"],
	["abbr"],
	["address"],
	["area"],
	["article"],
	["aside"],
	["audio"],
	["b"],
	["base"],
	["bdi"],
	["bdo"],
	["blockquote"],
	["body"],
	["br"],
	["button"],
	["canvas"],
	["caption"],
	["cite"],
	["code"],
	["col"],
	["colgroup"],
	["data"],
	["datalist"],
	["dd"],
	["del"],
	["details"],
	["dfn"],
	["dialog"],
	["div"],
	["dl"],
	["dt"],
	["em"],
	["embed"],
	["fieldset"],
	["figcaption"],
	["figure"],
	["footer"],
	["form"],
	["h1"],
	["h2"],
	["h3"],
	["h4"],
	["h5"],
	["h6"],
	["head"],
	["header"],
	["headings", "h1", "h2", "h3", "h4", "h5", "h6", "th"],
	["hgroup"],
	["hr"],
	["html"],
	["i"],
	["iframe"],
	["img"],
	["input"],
	["ins"],
	["kbd"],
	["label"],
	["legend"],
	["li"],
	["link"],
	["main"],
	["map"],
	["mark"],
	["menu"],
	["meta"],
	["meter"],
	["nav"],
	["noscript"],
	["object"],
	["ol"],
	["optgroup"],
	["option"],
	["output"],
	["p"],
	["picture"],
	["portal"],
	["pre"],
	["progress"],
	["q"],
	["rp"],
	["rt"],
	["ruby"],
	["s"],
	["samp"],
	["script"],
	["section"],
	["select"],
	["slot"],
	["small"],
	["source"],
	["span"],
	["strong"],
	["style"],
	["sub"],
	["summary"],
	["sup"],
	["table"],
	["tbody"],
	["td"],
	["template"],
	["textarea"],
	["tfoot"],
	["th"],
	["thead"],
	["time"],
	["title"],
	["tr"],
	["track"],
	["u"],
	["ul"],
	["var"],
	["video"],
	["wbr"]
]

module.exports = plugin(
	function ({ addVariant }) {
		htmlElements.map(([name, ...selectors]) => {
			if (selectors.length === 0) selectors = name

			// Default not selector
			const notSelectors = [
				':where(& .reset-nested *)',
				`:where(& .reset-nested-${name} *)`
			]

			// Add reset-nested for grouped elements
			if (typeof selectors === 'object')
				notSelectors.push(selectors.map(selector => `:where(& .reset-nested-${selector} ${selector})`))

			// Add reset-nested-headings for each heading element
			if (/h\d/gm.test(name))
				notSelectors.push(':where(& .reset-nested-headings *)')

			addVariant(`nested-${name}`, `& :is(${selectors}):not(${notSelectors.join(', ')})`)
		})
	}, {}
)
