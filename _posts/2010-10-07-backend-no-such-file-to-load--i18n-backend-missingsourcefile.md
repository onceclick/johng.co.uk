---
layout: post
title: "`backend': no such file to load -- i18n/backend (MissingSourceFile)"
---
While upgrading an old Rails 2.3.5 app to Rails 2.3.9 I came across this error:

{% highlight ruby %}
`backend': no such file to load -- i18n/backend (MissingSourceFile)
{% endhighlight %}

It's very simple to fix as Rails 2.3.9 is just missing the i18n dependancy. If you are requiring gems using the old school way just add it to your environment.rb:

{% highlight ruby %}
config.gem "i18n"
{% endhighlight %}

Or if you're running [Bundler](http://gembundler.com/rails23.html), like everyone should be, just add it to your Gemfile and run bundle update:

{% highlight ruby %}
gem 'i18n'
{% endhighlight %}