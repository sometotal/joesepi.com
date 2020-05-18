---
title: Faster in quirks mode?
author: joesepi
layout: post
permalink: /2011/03/18/faster-in-quirks-mode/
categories:
  - Web Develoment
tags:
  - Doctype
  - ExtJS
  - HTML
  - Javascript
---
I have been getting the urge to say things lately, so I may be writing more in this space in the near future. And I am going to talk about things other than Rock music, or should I say &#8220;in addition to Rock music.&#8221; In fact, I am going to start now:

I just started on a project that began using ExtJS before I arrived. I have been trying to remain unbiased and learn the pros and cons of the Javascript library/framework. So far, I have not been won over. I see lots of people talking about performance and I am noticing that the sites that use ExtJS are often preempted by a little loading graphic. Both are not good signs. But this latest thing I stumbled upon takes my confidence in ExtJS down even more:

I have found that ExtJS prefers no doctype. This may be the case for 3.3 and earlier version only &#8212; 4.0 should be out soon and I think they abandon this recommendation for that release. But for 3.3, I believe it is so, and the reason given is&#8230;

&#8220;&#8230;[t]he only reason that no DOCTYPE is recommended is that Ext is faster on IE6 and IE7 in quirks mode&#8230;&#8221; [LINK][1]

Ugh.

 [1]: http://www.sencha.com/forum/showthread.php?122202-Form-field-height-issue-with-ie6-ie7-and-ie8