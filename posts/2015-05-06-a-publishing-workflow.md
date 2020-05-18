---
title: "A Publishing Workflow"
description: "How to publish content to your static site using Github and pull requests"
author: joesepi
layout: post
permalink: /2015/05/06/a-publishing-workflow/
categories:
  - Web Dev
---

I am a big fan of the [static-site movement](https://staticsitegenerators.net/). As such, I have been going through all of my web sites and converting the ones that can be served as flat files to this type of simple platform. We have recently converted the Behance Tech site (where I work) from WordPress to static files and would like to document our new content publishing workflow publicly so that others may learn from it or perhaps offer their own opinions.

I'll begin by saying, as a technologist writing for the web, I find the [Github pull request workflow](https://guides.github.com/introduction/flow/) combined with the benefits of static site platforms to be liberating and invigorating. Here are some of the key reasons why:

- Served using [Github Pages](https://pages.github.com/) (no server costs)
- Inherently secure
- Write in your preferred editor, not some substandard web editor
- Write in [Markdown](http://daringfireball.net/projects/markdown/) with "markup" that stays out of the way
- Write limited meta data at the top of the file
- Open a [pull request](https://help.github.com/articles/using-pull-requests/) to get review of the post
- Merging the pull request publishes the post

There are many benefits and not many downsides, <abbr title="In My Humble Opinion">IMHO</abbr>, and it seems to be a no-brainer decision to move to this approach. This may be partly because as a technologist I am comfortable in the world of text editors and versioning repositories, but I think other non-tech people could get on board too.

Here are the basic steps for a contributor to get involved:

#### tl;dr

1. fork; clone; branch (basically, get a copy of the code locally)
1. write;
1. commit your work; pull request; merge/publish

#### More Details:

1. If you haven't already, fork the master repo, clone it locally
<br>\* *optional:* for this workflow, it is best to create a branch for your post
1. Add yourself to the authors file if this is your first contribution
1. Write in markdown (`.md`) with the minimal meta information at the top of the document
<br>\* *optional:* use the `_drafts` folder if you are not publishing on merge (scheduled posts)
<br>\* *optional:* commit the work to manage "revisions"; push to your remote to keep your work "backed up"; open the pull request only when you are ready
1. When ready for review (final or incremental), push the post to your remote and open a pull request
<br>\* *note:* if it is a post scheduled to be published at a later date or if you are looking for comments and not ready to publish, keep the post in the `_drafts` directory; if the post is ready to be published immediately, move the file to the `_posts` directory and prefix the filename with the date (`2015-09-27-my-fence-post.md`) before opening the pull request
1. Colleagues can then view and comment on the content (potentially with a "diff" of a previous version, if one exists in the "upstream")
1. Once you and the reviewer(s) are satisfied, merge the PR. If the content was moved to the `_posts` directory in the PR, then you are now "published"

There may be some unfamiliar terms above (depending on your skill level and experience with these particular tools and techniques), but hopefully the bullet points and steps were conceptually descriptive enough to walk you through the flow at a high level and demonstrate the benefits.


