---
title: A Publishing Workflow
categories:
  - General
  - Code
tags:
  - code
  - publishing
  - git
  - Jekyll
---

I have recently moved to Jekyll for my personal site as well as several sites that I created or maintain. It is a great platform for a technologist as it uses the tools I am familiar with: I write my content in vim, using markdown for "formatting," and use git to manage the files. Bonus: github pages for hosting is free!

Another benefit that comes from this setup is the Github workflow, that works great for a publishing workflow when working with a team. Here are the basic steps and then we will walk through the flow in more detail below:

1. In your fork, you write your content in a `_drafts` folder, optionally committing the work to manage "revisions" and to keep your work "backed up."
2. When you are ready for review (final or incremental), you commit your content (optionally moving it from `_drafts` to `_posts` if you are ready to publish after review) and open a "Pull Request."
3. A colleague is able to view the content you have written (potentially with a "diff" of a previous version, if one exists in the "upstream") and add comments.
4. Once you and the reviewer are satisfied with the current revision in the pull request, you can "merge" the PR and then the content lives upstream. If the content was moved to the `_posts` directory in the PR, then you are now also "published."

Now I know that I threw some terms around up there, but hopefully they were conceptually descriptive enough to walk you through the flow at a high level. Let's now dig into some of those concepts further.
