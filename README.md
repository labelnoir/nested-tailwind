![Nested Tailwind](/demo/nested-tailwind.svg)

A simple extension to TailwindCSS to enable nested styling. Based on the official [typography plugin](https://github.com/tailwindlabs/tailwindcss-typography)
, but without the default styling and a bit more inclusive for different types of content.

## Installation

```shell
npm i -D @labelnoir/nested-tailwind
```

## Usage

Under the hood, this plugin adds [variations](https://tailwindcss.com/docs/plugins#adding-variants) which enable
you to select nested elements by prefixing the selector with `nested-`.

**Example**

```html
<div class="nested-h2:text-red-500">
	<h2>This text will be red</h2>
</div>
```

## Escaping

Don't want to use the nested styling for every nested element? Just like the typography plugin this library provides
an way to disable styling on children by using the class `reset-nested`.

**Example**

```html
<div class="nested-h2:text-red-500">
	<article>
		<h2>This text will appear red</h2>
		<p>Lorem ipsum dolor sit amet...</p>
	</article>

	<article class="reset-nested">
		<h2>This text will not appear red</h2>
		<p>Lorem ipsum dolor sit amet...</p>
	</article>
</div>
```

### Overwriting

Escaping nested styling can also be used to apply new styling to a subset of children. Simply add the `reset-nested`
class and apply new classes for nested styling from that point on.

**Example**

```html
<div class="nested-h2:text-red-500">
	<article>
		<h2>This text will appear red</h2>
		<p>Lorem ipsum dolor sit amet...</p>
	</article>

	<article class="reset-nested nested-h2:text-green-500">
		<h2>This text will appear green</h2>
		<p>Lorem ipsum dolor sit amet...</p>
	</article>
</div>
```

## Demo

A simple demo/playground has been created using Parcel. Clone the repo, install the dependencies and run the demo script.

```bash
npm i
npm run demo
```
