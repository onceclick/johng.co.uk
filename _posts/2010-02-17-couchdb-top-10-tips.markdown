--- 
wordpress_id: 1731
layout: post
title: CouchDB - Top 10 Tips
wordpress_url: http://www.johng.co.uk/?p=1731
---
<ol>
	<li>Read the <a href="http://books.couchdb.org/">book</a>!! (can't emphasise this enough)</li>
	<li>Forget about trying to link documents together like tables</li>
	<li>Use the JSON hierarchy to define how bits of information are connected within documents</li>
	<li>Don't think about each document being a row on table</li>
	<li>Use a MapReduce to get the data out in the way you want</li>
	<li><em><span style="font-style: normal;">Use keys in a MapReduce for sorting</span></em></li>
	<li>If you need key on something other than the uuid write a MapReduce for it</li>
	<li><em><span style="font-style: normal;">Don't worry about putting too much into a Document because a quick MapReduce will just pull it all out for you</span></em></li>
	<li><em><span style="font-style: normal;">Use a plugin like <a href="http://github.com/hpoydar/couchrest-rails">CouchRest-Rails</a> which doesn't pretend CouchDB is a relational database</span></em></li>
	<li>Spend as long as you can designing and tweaking the structure of your documents</li>
</ol>
