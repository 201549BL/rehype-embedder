# rehype-embedder

## What is this?

This is a plugin for [rehype](https://github.com/rehypejs/rehype). The plugin parses a html syntax tree and replaces link-nodes with embeddable content such as iframes. The plugin consists of an attacher and a extension passed as an option to the attacher.

## When should I use it?

It's simple to build a new extension then add it as an options argument to the attacher. The extensions can be customized however you like. I've made an example extension that adds youtube embeds as iframes, feel free to use this as a base when making your own extensions.

## Licence

MIT
