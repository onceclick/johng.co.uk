---
layout: nil
---
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
 
 <title>johng Blog</title>
 <link href="http://www.johng.co.uk/atom.xml" rel="self"/>
 <link href="http://www.johng.co.uk/"/>
 <updated>{{ site.time | date_to_xmlschema }}</updated>
 <id>http://www.johng.co.uk/</id>
 <author>
   <name>John Griffin</name>
   <email>john@griffin.io</email>
 </author>
 
 {% for post in site.posts %}
 <entry>
   <title>{{ post.title }}</title>
   <link href="http://www.johng.co.uk{{ post.url }}"/>
   <updated>{{ post.date | date_to_xmlschema }}</updated>
   <id>http://www.johng.co.uk{{ post.id }}</id>
   <content type="html">{{ post.content | xml_escape }}</content>
 </entry>
 {% endfor %}
 
</feed>