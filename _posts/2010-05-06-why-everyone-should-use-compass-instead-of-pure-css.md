---
layout: post
title: "Why Everyone Should Use Compass Instead of Pure CSS"
---
[Compass](http://compass-style.org/) is a framework for creating CSS. You write stylesheets in SASS and they are compiled to CSS. In my view it is the best tool to come along in front end web development in a *long* time. This is why you should start using it right now:

### Your Stylesheets Will More Closely Resemble Your Markup

SASS is whitespace aware so it forces you to think hierarchically. HTML is a hierarchy of nodes so why shouldn't your stylesheets be scoped in a similar way. This makes stylesheets more closely resemble markup and reduces common problems of style overlapping and elements taking on styles unexpectedly.

### Your Stylesheets Will Be Smaller

Working on a complex design with many pages can lead to fairly colossal CSS bloat. With reusable style blocks (mixins), variables, basic functions and inheritance you cut this down significantly. I am currently working on a project with 182 SASS properties defined. After compilation this gives 795 CSS properties. I'm so glad I didn't have to type out all that CSS.

### CSS Framework Support

Compass has built in support for [Blueprint](http://blueprintcss.org/), [YUI](http://developer.yahoo.com/yui/grids/), [360 Grid](http://960.gs/), [Susy](http://www.oddbird.net/susy/) and others through plugins. They provide tried and tested layouts and styles that have been tested cross browser. Compass defaults to Blueprint and I highly recommend you use it. No more floating and guessing widths - just set your column size and it works.

### Fantastic Plugins, Utilities and Mixins

I had a problem with CSS ellipsis support under Firefox recently but Compass had me covered with a [plugin](http://compass-style.org/docs/reference/compass/utilities/text/ellipsis/). I just did a compass install compass/ellipsis and gave the broken link a class of ellipsis. Done. No hacking, no worrying. There are tons of helpers like this that cover everything from link colouring to border radius.

### Keep Your CSS Modern

If I do +border-radius in the latest version of Compass it applies the necessary properties to get rounded corners working on webkit, mozilla, opera and IE (when support comes). In the future as new versions of Compass are released to support new browsers the CSS properties behind might change but I don't need to know about it, I just need to call it and it works everywhere.

### You Don't Have To Write SASS

I think SASS is brilliant but many people don't have the time to learn it or just dislike it. Compass 0.10 introduces support for SCSS which is a superset of CSS. If you know CSS you can immediately write Compass compatible style sheets.

### It Will Run Anywhere

Although it's a Ruby project I have used it with Java in production. It's a command line tool so you can either leave it watching your style directory and compiling automatically or just hook it into your normal build process by calling the compile command. Of course it work best in Rails but there is no excuse for not using it on other projects.

Give it a try today! Compass even includes convertors to get your old styles ported over to SASS or SCSS so there's no excuse.