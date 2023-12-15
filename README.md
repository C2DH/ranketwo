## Welcome to Ranke.2

visit the [website](https://c2dh.github.io/ranketwo/).
You can use the [editor on GitHub](https://github.com/C2DH/memorycord/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Installation

Ranke.2 uses the docker image of [Jekyll 4.2](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)

Install and update gems:

```bash
  docker-compose run --rm bundle-install
```

then run the website locally

```bash
  docker-compose up
```

### How to create a new page

in pages, create the default md file, in English, e.g. `tutorials.md` then create one md file per language, e.g. 'tutorials.de.md' and 'tutorials.fr.md'. It's Jekyll default way to build up pages.
Pay attention to each file frontmatter, esp `permalink`, which is responsible for the generation of the corresponding html page. Always prepend the laguage in the permalink for non default language. The presence of permalink avoid to modify the TEMPLATE url of the config (error: The URL template doesn't have lang keys. Check your permalink template! (NoMethodError))

```yaml
---
layout: collection
lang: fr
permalink: /fr/tutorials/
link: /tutorials/
title: Tutorials
collection: tutorials
---
```

### Jekyll Cheatsheet

Published by [@rstacruz](https://ricostacruz.com/), a clear insight on how jekyll works.
https://devhints.io/jekyll

### Jekyll Themes

This website uses the layout and styles from the Jekyll theme selected in the [repository settings](https://github.com/C2DH/ranketwo/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1

## Header 2

### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Add new type of filter to search

Once you have added a new filter type using jekyll in default.html with `meta`, you can add it to the search engine.
For example:
Pass data directly from the metadata to search.
```html
<meta data-pagefind-filter="author:{{author_name.name}}"
property="article:authors" content="{{author}}" />
```
Pass data from a html meta tag content parameter to search.
```html
<meta data-pagefind-filter="mediatype[content]"
property="article:mediatypes" content="{{mediatype}}" />
```

After that, you need to add the new filter type to search.html.

1. In div id="filters" in div class="row" add a new tag. Every new filter should be ended with `_filter`.
```html
<div id="filters" class="col-4">
    <div class="row">
        <div class="col-6">
            <div id="layouts_filter"></div>
            <div id="mediatypes_filter"></div>
        </div>
        <div class="col-6">
            <div id="authors_filter"></div>
            <div id="tags_filter"></div>
        </div>
        <!-- here goes a new filter type -->
        <div class="col-6">
            <div id="new_type_filter"></div>
        </div>
    </div>
</div>
```

2. In function `display_filters()` in javascript section
```js
...
document.getElementById("authors_filter").innerHTML = "";
document.getElementById("tags_filter").innerHTML = "";
// add here
document.getElementById("new_type_filter").innerHTML = "";
...
```

3. In function `display_filters()` in javascript section, add new case to `switch`
```js
...
case "author":
    document.getElementById("authors_filter").innerHTML += new_filter;
    break;
case "new_type":
    document.getElementById("new_type_filter").innerHTML += new_filter;
    break;
...
```

Finally recompile the docker and let pagefind create index.