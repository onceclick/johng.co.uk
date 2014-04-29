---
layout: post
title: "Rails 4.1: Database URLs"
---

DHH mentioned in the [Rails 4.1 announcement blog post][1] that it now supports
configuration of database connetions through URLs. I couldn't find any
documentation for the feature so here's how it works.

Your config/database.yml can now go from something like this:

{% highlight yaml %}
development:
  adapter: postgresql
  database: app_development
  host: localhost
{% endhighlight %}

To this:

{% highlight yaml %}
development: "postgresql://localhost/app_development"
{% endhighlight %}

You can also specifiy the database URL as an environment variable when running
your app, for example:

{% highlight bash %}
DATABASE_URL=postgresql://localhost/app_development bundle exec rails s
{% endhighlight %}

Unfortunately you can only override an existing config with an env var if you
use the original (non url based) syntax in your database.yml file.

Configuration via env var is very useful in production environments where
service discovery is used and saves having to rewriting the database.yml
each time just to point at a different database.

[1]: http://weblog.rubyonrails.org/2014/4/8/Rails-4-1/