---
title: Sample JavaScript
author: joesepi
layout: post
permalink: /2014/09/01/sample-javascript/
categories:
  - JavaScript
tags: [ javascript, tutorial, nbd ]
---

## Show the date and time when the page loads
In this example the event handler onLoad is embedded within the tag. OnLoad activates whenever a new page has finished downloading. This alert code tells the browser to create an alert box containing the value of the variable "today". Thus, it automatically prints out the date and time when the page has finished loading and requires no special action by the user.


```
import 'jqueryui/draggable';

var makeDraggable = function(handle) {
  handle = handle || '.js-drag-handle';
  return this.$view.draggable({ handle: handle });
};

export default { makeDraggable };
```
