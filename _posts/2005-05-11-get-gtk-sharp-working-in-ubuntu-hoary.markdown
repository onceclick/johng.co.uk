--- 
wordpress_id: 349
layout: post
title: Get gtk-sharp Working in Ubuntu Hoary
wordpress_url: http://www.johng.co.uk/index.php/2005/05/11/get-gtk-sharp-working-in-ubuntu-hoary/
---
<p>Ubuntu Linux 5.4 (Hoary) doesn't have support for gtk-sharp in its repositories so if you need to do any development work in mono using monodevelop you will not be able to run your code. These are the steps I took to get a working mono development environment:<br /></p><ol><li>sudo apt-get install mono</li><li>This will give you an error so goto <a href="http://gtk-sharp.sourceforge.net/" target="_self">http://gtk-sharp.sourceforge.net/</a> and download the latest version.</li><li>sudo alien -v -d gtk-sharp-1.0.8.tar.gz <em>(or whatever the file you downloaded is called)</em></li><li>sudo dpkg -i gtk-sharp_1.0.8-2_all.deb <em>(again replace this with the file you just generated)</em></li><li>sudo apt-get install monodoc</li><li>sudo apt-get install monodevelop</li></ol>Then run monodevelop and you should be able to build gtk-sharp based code fine!
