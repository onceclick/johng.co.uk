--- 
wordpress_id: 1331
layout: post
title: "Ruby: Convert Relative URI to Absolute"
wordpress_url: http://www.johng.co.uk/?p=1331
---
Just discovered this today but the URI concatenation in Ruby is fantastic. Fantastic to the extent that you can take a host URL add it to a relative URL and produce an absolute URL for that resource. For example:

{% highlight ruby %}
u=URI.parse("http://www.chart-track.co.uk/?i=756&amp;s=1111")
a=u+"/assets/images/m/modernwarfare2hangson_797_2.jpg"
a.to_s
>> "http://www.chart-track.co.uk/assets/images/m/modernwarfare2hangson_797_2.jpg"
{% endhighlight %}

[via Eric Hodel](http://groups.google.com/group/comp.lang.ruby/browse_thread/thread/e4bd6387f9042128/3a08cf040cb8b254?lnk=gst&amp;q=Converting+relative+URLs#3a08cf040cb8b254)
