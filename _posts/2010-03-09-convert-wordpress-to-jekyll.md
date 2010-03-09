---
layout: post
title: "Dropping Wordpress and Moving to Jekyll"
---
[Wordpress][] as a blogging platform and general CMS is incredibly popular and it's easy to see why. Creating a large, blog backed site is very easy and quick to do. There are also a wealth of plugins available to customise specific bits and pieces. But while attempting to streamline my sites over the last few months Wordpress has been the real dog I've been unable to budge.

### The Problem With Wordpress

What was once the king of blogging engines had become a cumbersome legacy platform that I needed to maintain. For me Wordpress just doesn't fit into my stack anymore.

*	My data was locked away in its massive MySQL database.
*	Some of the SQL queries were incredibly slow.
*	Switching hosts was a real chore and prone to serious error.
*	It's written in god awful PHP which I no longer want to run as a module. I don't run any other PHP apps on my VPS so it just adds bloat.
*	I need to take regular backups.
*	The whole thing is a memory hog.

### Where To Go?

I have 5 years worth of posts in the database and hundreds of comments that I need to keep. I looked into several options. I wanted style flexibility, ease of posting and most importantly of all the ability to import all my existing data. I investigated many self hosted platforms but all the database backed ones such as Mephisto didn't really solve my problems. As for the hosted solutions such as Tumblr, Posterous and Wordpress.com I didn't see a clear way to maintain comments and permalinks. Thats when I started looking into static site generators.

### Enter the Jekyll

[Jekyll][] is a blog aware static site generator. You write posts in [markdown][] files and they are compiled to clean HTML. You have full control of the layout and templates and there is no database in sight. It can be deployed to any webhost as the site generated is pure HTML with no dependancies.

The icing on the cake is that [Github pages][] supports Jekyll out of the box, allowing pushes to Github to automatically generate blog posts.

### How I Converted Wordpress To Jekyll

*	Permalinks are maintained because Jekyll's pretty permalink option is identical to the Wordpress default scheme.
*	Jekyll provides a Wordpress convertor to bring all published blog posts over as HTML
*	By installing the [Disqus][] plugin into Wordpress before switching all my years of existing comments were ported to their system. Disqus host your comments and provide a Javascript widget - perfect for static sites! If you maintain permalinks when porting over the comments fetched from Disqus will be the same as in Wordpress.

Thats the three main pieces of data that I need to maintain - finally blog independence!

### Problems Encountered

Jekyll's markdown to HTML convertor doesn't like all my posts and I have had to spend a while going through and cleaning them up. 90% of the time this was because my Wordpress blog posts contained invalid HTML. This was easily the most time consuming thing.

I was well aware of this going in but you are basically writing a blog from scratch and relying on the post processing and template engine that Jekyll provides. This did allow my to use the excellent [Compass][] framework and probably explains why the site looks at little minimalistic right now.

### Would I Recommend It?

To normal people - no. There is simply too much low level blog building and a knowledge of web development and version control is really useful. If you are a developer or have a desire to control every aspect of your blog I believe this is the way to go. Writing posts in markdown and committing them to Github is such a nice way to publish. You also have the flexibility to leave Github and take your blog else where at any time.

Best of all I can finally remove MySQL from my server and unload the PHP module. I do prefer blogging this way as markdown almost encourages long form posts with its ease of inserting markup. I hope to be blogging more frequently from Jekyll in the future. Let me know if you spot any oddities along the way.

[Wordpress]: http://www.wordpress.org
[markdown]:  http://daringfireball.net/projects/markdown/
[Jekyll]: http://jekyllrb.com/
[Github pages]: http://pages.github.com
[Disqus]: http://www.disqus.com
[Compass]: http://compass-style.org/