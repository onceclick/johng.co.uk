---
layout: post
title: "Creating An Add to Instapaper Button"
---

I love [Instapaper](http://www.instapaper.com) but noticed a complete lack of traditional sharing buttons available for the service. No one seems to be running them on blogs or articles, instead everyone relies on the ["Read Later" bookmarklet](http://www.instapaper.com/extras). The only Instapaper buttons I have seen in the wild are on [Google Reader](http://www.google.com/reader) and iPhone apps like [Tweetie](http://www.atebits.com/tweetie-iphone/) but in both cases you need to provide login credentials up front to authenticate with Instapaper. Not so good if you are anonymously browsing a blog.

Luckily the "Read Later" bookmarklet code doesn't need pre-authentication so I have been able to extract out the code and use it in the buttons above my blog posts.

### The Code

Insert the following javascript somewhere on your page.

{% highlight javascript %}

<script type="text/javascript" charset="utf-8">
	function iprl5(){
		var d = document,
		z = d.createElement('scr' + 'ipt'),
		b = d.body;
		try {
		    if (!b) throw (0);
		    d.title = '(Saving...) ' + d.title;
		    z.setAttribute('src', 'http://www.instapaper.com/j/WLdpiYDr34OC?u=' + 
		                   encodeURIComponent(d.location.href) + '&t=' + (new Date().getTime()));
		    b.appendChild(z);
		} catch(e) {
		    alert('Please wait until the page has loaded.');
		}
	}
</script>

{% endhighlight %}

And add a link in somewhere that calls the function on click eg,

{% highlight html %}

<a class="instapaper" href="#" onclick="iprl5();void(0);">Add to Instapaper</a>

{% endhighlight %}

I have added the Instapaper favicon to make it a bit more appealing.

![](/images/addtoinstapaper.png)

That's all there is to it! You get to hook into the same code as used in the bookmarklet, only difference being the method is called on the click of a link. The nice thing is if you're not logged in you get prompted and then taken back to the same page. If you are logged in you get the confirmation box in the top right of the screen and remain on the same page.

Thanks to [Marco](http://www.marco.org/) for the brilliant service.