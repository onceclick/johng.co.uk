--- 
wordpress_id: 1131
layout: post
title: Fedora 11 to 12 Upgrade Tips
wordpress_url: http://www.johng.co.uk/?p=1131
---
This worked for me after a bit of faffing:
<code lang="bash">
yum install yum-fastestmirror
yum clean all
yum install preupgrade
rm -rf /var/cache/yum/preupgrade*
</code>

Run the final line to blow away the upgrade cache if you run into any problems and need to try again.

<strong>UPDATE: </strong>Oh and you might need to run <a href="http://gparted.sourceforge.net/">gparted</a> to resize your /boot partition. It needs to be <a href="https://fedoraproject.org/wiki/Common_F12_bugs#boot-300mb">at least 300mb</a>!!
