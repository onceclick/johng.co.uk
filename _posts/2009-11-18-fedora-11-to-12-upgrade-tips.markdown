--- 
wordpress_id: 1131
layout: post
title: Fedora 11 to 12 Upgrade Tips
wordpress_url: http://www.johng.co.uk/?p=1131
---
This worked for me after a bit of faffing:

{% highlight bash %}
yum install yum-fastestmirror
yum clean all
yum install preupgrade
rm -rf /var/cache/yum/preupgrade*
{% endhighlight %}

Run the final line to blow away the upgrade cache if you run into any problems and need to try again.

**UPDATE:** Oh and you might need to run [gparted](http://gparted.sourceforge.net/) to resize your /boot partition. It needs to be [at least 300mb](https://fedoraproject.org/wiki/Common_F12_bugs#boot-300mb)!!
