---
layout: post
title: "Heroku, EC2 and The Cloud"
---
Today Amazon's US East Coast EC2 servers went down hard, taking with them [many popular websites](http://eu.techcrunch.com/2011/04/21/amazon-ec2-goes-down-taking-with-it-reddit-foursquare-and-quora/). Our internal application is hosted on [Heroku](http://www.heroku.com/), who provide a layer on top of [EC2](http://aws.amazon.com/ec2/) for hosting Ruby rack applications, was one of the many effected. Heroku along with countless other hosting providers bill themselves as "cloud hosts" but that term is very lose and open to interpretation.

Amazon can degrade instances when they feel like and provide no easy way to move instances between data centres. Heroku provide excellent features and add a ton of value to the cloud but are really no better when it comes to reliability. They only run instances in the US East Cost data centre and are essentially at the whim of Amazon when it comes to availability.

A true cloud provider would spread instances across as many of Amazon's regions as possible and even onto other provider's clouds such as [Rackspace](http://www.rackspace.com/).

The promises of the cloud were that it didn't matter where your apps and data were located - they were just in the cloud! Turns out the current offerings are not even close.