---
title: Persisting Changes
author: joesepi
layout: post
permalink: /2011/09/15/persisting-changes/
categories:
  - Web Dev
---
[<img src="http://www.joesepi.com/wp-content/uploads/2011/09/ruleDiff1-300x147.png" alt="" title="ruleDiff" width="300" height="147" class="alignright size-medium wp-image-121" />][1]I just found this really cool feature of Chrome&#8217;s Dev Tools. I was thinking: &#8216;hey, it would be really cool if when I edited CSS after inspecting an element that the dev tools would highlight the changed declarations. Well, in a roundabout way, the dev tools do highlight your changes and they even keep a history. You just need to know where to look: switch to the Resources pane and locate the CSS file where your edits occurred and you will see a little arrow that signals there is a history of edits on that file. Whabam! There ya go!

[Persisting Changes][2]

**Update**: Things have changed in Chrome and this isn&#8217;t as easy to find and work with. The issue is <a href="https://code.google.com/p/chromium/issues/detail?id=140553" target="_blank">being tracked</a> and I expect a better experience in a future release.

 [1]: http://www.joesepi.com/wp-content/uploads/2011/09/ruleDiff1.png
 [2]: http://code.google.com/chrome/devtools/docs/elements-styles.html#persist
