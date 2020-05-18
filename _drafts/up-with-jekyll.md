---
title: From 0 - 60 with Jekyll
author: joesepi
layout: post
description: Learning to Jekyll with only broken guitars
categories:
  - Learning
tags: [ jekyll, static site ]
---

> Some parts are directly stripped from docs site and some parts are modified sections of the docs site on Jekyll: https://jekyllrb.com/docs


-----
> 1 | Jekyll

What is Jekyll, exactly?

Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.

How Jekyll works in a nutshell:

Jekyll has a config file (section 3 below) that tells it how to process basic text files. By default, it reads each page's meta data (simply placed at the top of each file. more below) and knows how to process it to generate a site of static html files. That meta data will say which layout it should use (page style layout or post style layout as two examples) and each layout will probably reference include files (more below but examples being: header, nav, footer). Blog posts are named a specific way, which depends on how you specify them in the config file.

For example, this: <br>
`/_posts/2015-12-17-lbb-show.md` <br>
gets turned into this as the path for your web browser: <br>
`http://joesepi.com/2015/12/17/lbb-show/`

docs: https://jekyllrb.com/docs/home/


-----
> 2 | Directory structure 

Jekyll is, at its core, a text transformation engine. The concept behind the system is this: you give it text written in your favorite markup language, be that Markdown, Textile, or just plain HTML, and it churns that through a layout or a series of layout files. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more. This is all done through editing text files; the static web site is the final product. (Example directory structure near end of this document.)

docs: https://jekyllrb.com/docs/structure/


-----
> 3 | Configuration

Jekyll has powerful and flexible configuration options that should be specified in a _config.yml file placed in your site’s root directory.

Good example from my site: <br>
code: https://github.com/joesepi/joesepi.github.io/blob/master/_config.yml <br>
As you get near the bottom, it gets less important at this stage of learning.

docs: https://jekyllrb.com/docs/configuration/


-----
> 4 | Front Matter

Files that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

```
---
layout: post
title: Blogging Like a Hacker
---
```

Between these triple-dashed lines, you can set predefined variables (see below for a reference) or even create custom ones of your own. These variables will then be available to you to access using Liquid tags both further down in the file and also in any layouts or includes that the page or post in question relies on.

docs: https://jekyllrb.com/docs/frontmatter/

Good example is a blog post from my site:<br>
code: https://raw.githubusercontent.com/joesepi/joesepi.github.io/master/_posts/2015-12-17-lbb-show.md <br>
page: http://joesepi.com/2015/12/17/lbb-show/


What you end up with is a site directory/file structure like this, which should help put some of these bits into context:
```
.
├── _config.yml
|
├── _includes
|   ├── footer.html
|   └── header.html
|
├── _layouts
|   ├── page.html
|   └── post.html
|
├── _posts      <-- get processed using the post layout
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
|
├── about.md    <-- gets processed using the page layout
├── contact.md  <-- gets processed using the page layout
└── index.html  <-- this page is html (not md) because you usually do more layout work that is unique to your home page
```
