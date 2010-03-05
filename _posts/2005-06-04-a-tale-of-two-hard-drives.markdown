--- 
wordpress_id: 371
layout: post
title: A Tale of Two Hard Drives
wordpress_url: http://www.johng.co.uk/?p=123
---
Had a bit of a scare last night. While moving some videos from my Ubuntu partition to a USB hard drive my system totally locked up - very strange for Linux. I rebooted, it happened again but this time the system refused to boot.

On closer inspection my Western Digital hard drive was now appearing in the bios as <code>WDC ROM MODEL-MA</code> when it should have appeared as <code>WDC WD800JD-00HK</code>. The fact it was registering as a 0MB disk in Partition Magic only added to the torture.

So I went to bed last night faced with the prospect of losing my entire music collection and all the documents I had written in the last three years. The ironic thing is <a href="http://www.johng.co.uk/index.php/2005/05/09/new-dvd-burner/">I had bought a DVD writer</a> a few weeks ago for the purpose of backing this all up among other things.

So I was pleasantly surprised this morning when the drive showed up in the bios as <code>WDC WD800JD-00HK</code> again. Good old WD800 - I knew you'd come back after a good night's rest! I immediately whipped out an old IDE drive, installed Ubuntu, mounted the partitions and copied everything onto removable storage (hard disk and DVD to be sure).

It may be working ok for now but I am still sending it back to Western Digital for replacement as it's unacceptable for my drive to have an identity crisis whenever it feels like.

In the aftermath I can see what triggered the problem but not why it was <em>that</em> problem which occurred. The removable hard disk involved in the crash was FAT32 formatted in Windows and had been running like a dog. Since <a href="http://gparted.sourceforge.net/">formatting</a> it to FAT32 in Linux it's running nicely now. So bad formatting on the destination drive combined with a dual booted, 'end of the drive' partition as the source set it off. Hopefully this will be the first and last time I ever see this again.
