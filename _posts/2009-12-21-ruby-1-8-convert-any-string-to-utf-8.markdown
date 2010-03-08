--- 
wordpress_id: 1281
layout: post
title: "Ruby 1.8: Convert Any String to UTF-8"
wordpress_url: http://www.johng.co.uk/?p=1281
---
For those of us who have yet to take the plunge into Ruby 1.9 it can be quite annoying to convert the encoding of a string to utf-8. I'm using couchdb so it's quite important when bringing data in that it's utf-8. Luckily there is a handy standard library called Iconv to help, so if you can't guarantee the encoding of your data I recommend trying this little snippet to strip out the badness:

{% highlight ruby %}
ic = Iconv.new('UTF-8//IGNORE', 'UTF-8')
valid_string = ic.iconv(untrusted_string + ' ')[0..-2]
{% endhighlight %}

[via Stack Overflow](http://stackoverflow.com/questions/951891/how-can-i-convert-a-string-from-windows-1252-to-utf-8-in-ruby)