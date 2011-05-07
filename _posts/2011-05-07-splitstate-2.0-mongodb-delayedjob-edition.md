---
layout: post
title: "Splitstate 2.0 - MongoDB, DelayedJob Edition"
---
[Splitstate.com][1] is the gaming news service that I launched in 2009 and announced [here][2] a few weeks later. By using a combination of Ruby and CouchDB I was able to provide a stable and reliable service for over a year with very few tweaks needed. Just looking back at the git log and the server uptime I can see there was a period last year where no work was done on the site for 8 months while I and others were happily using the service everyday.

But all good things must come to an end - a few months ago requests started encountering long slow downs and the application would crash several time a day. It was due to a number of reasons but the main issue affecting performance was the database growing to 3GB and the app not being designed to handle such a large dataset. Partially my fault and partially a fault of the tools I was using I decided to rebuild splitstate once more - harder, better, faster, stronger!

### The Database

I love CouchDB, I think it's a fantastic database and it's a great way to build web services and self contained data driven applications. What hasn't been so great about using CouchDB is the driver and ODM support. The best way I found to work with it was to write map reduce functions right on the database - not the Rails way at all.

In my day to day work and on other projects I have been using MongoDB a lot more where the ODM support is just stellar. You really can't go wrong with either [MongoMapper][3] or [Mongoid][4] as they both have active communities around them and continue to be updated to work with the latest versions of MongoDB and Rails. I went with Mongoid because I'm more familiar with it.

### Background Processing

Last time I chose ruby daemons for processing all the feeds and links that need to be sifted through which has turned out to be a very primitive and non-scalable option. Luckily job queues and background processing options have come a long way since then! I chose [DelayedJob][5] because it integrates well with Mongoid and [Heroku][6] supports it with no configuration needed.

### The Code

I took a much more modular approach when writing the code this time and was able to learn from the mistakes I made last time. Lots of small methods and anything that needed to hit a remote server I encapsulated as a delayed job. Switching to Mongo allowed me to keep more of the story selection logic in Ruby where it should be so I could throughly test it. I'm much happier with the code now - it's cleaner, leaner and more maintainable than before.

### Hosting

I did [rant about Heroku in my last post][7] but it really is the easiest way to host a rails application. Splitstate 1.0 was running on [Linode][8] who are an excellent VPS provider but these days I need something a little more managed so I can just focus on the code. I don't want to worry about installing packages on the server and heroku's git based deployment makes it hard to use anything else.

### This Is Not The End

The hard work is done, it's running on production and finding loads of interesting news stories. Of course I would like to do more with splitstate and now it's running nicely I can build on this a deliver new features and potentially even new sites!

[1]: http://www.splitstate.com
[2]: http://www.johng.co.uk/2010/01/15/splitstate-com-latest-gaming-news/
[3]: http://mongomapper.com/
[4]: http://mongoid.org/
[5]: https://github.com/collectiveidea/delayed_job
[6]: http://www.heroku.com/
[7]: http://www.johng.co.uk/2011/04/21/heroku-and-ec2/
[8]: http://www.linode.com/