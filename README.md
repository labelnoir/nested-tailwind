# Nested Tailwind

A simple extension to TailwindCSS to enable nested styling. Based on the official typography plugin, but without
the default styling and a bit more inclusive for different types of content.

## Installation
```shell
# NPM
npm i @labelnoir/nested-tailwind

# Yarn
yarn add @labelnoir/nested-tailwind

# pnpm 
pnpm i @labelnoir/nested-tailwind
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
