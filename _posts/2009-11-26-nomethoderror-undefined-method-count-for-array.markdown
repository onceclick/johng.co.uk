--- 
wordpress_id: 1201
layout: post
title: "NoMethodError: undefined method `count' for Array"
wordpress_url: http://www.johng.co.uk/?p=1201
---
<code>NoMethodError: undefined method `count' for #&lt;Array:0x9c0e3e8&gt;</code>

Getting this error like this when you deploy your Ruby on Rails app to a production server?

You probably need to upgrade the server to Ruby 1.8.7 like me :) Doh! Luckily <a href="http://github.com/railsmachine/moonshine/commit/41eb65a37c3781b2e28d8434f95f1a1165c358b4">moonshine</a> has it covered for this one, I just had to switch from using ree to ree187 in my moonshine.yml file.
