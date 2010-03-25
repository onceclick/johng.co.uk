--- 
wordpress_id: 1681
layout: post
title: CouchDB - A Next Generation Database
wordpress_url: http://www.johng.co.uk/?p=1681
---
[![](http://www.johng.co.uk/wp-content/uploads/2010/02/Couchdb-logo.png)](http://www.johng.co.uk/wp-content/uploads/2010/02/Couchdb-logo.png)Over the last few months I have been digging more and more into <a href="http://nosql-database.org/">NoSQL</a> databases. I initially tried several out but my focus remained on <a href="http://couchdb.apache.org/">CouchDB</a> because of it's accessibility and well thought out design.

Everything in CouchDB has been very well planned out from a modern, web facing perspective. I'm specifically talking about the RESTful HTTP interaction with the database, the JSON document format and the ability to construct a complex MapReduce with pure Javascript. These all combine into the most credible alternative to traditional SQL databases.

One thing that has surprised me when moving from years of using relational databases is how much you need to change your mind set. Sure, everyone said I would need to unlearn what I already knew but it was still took longer than I was expecting. At several stages during my projects I felt I had finally turned the corner and had my CouchDB eureka moment but as I later found out I still hadn't fully grokked it yet.

I will do a separate post with quick tips for those new to CouchDB.

If you are interested in giving it a try just go and install it and play around with the web interface. You can insert documents and write MapReduce views all with the built in web app! I highly recommend using <a href="http://github.com/couchrest/couchrest">CouchRest</a> if you are a Ruby developer and <a href="http://github.com/hpoydar/couchrest-rails">CouchRest-Rails</a> if you need Rails support.
