---
layout: post
title: "Heroku: Your account vavramuk@gmail.com does not have access to appname"
---

Encountered this error while trying to deploy an app to Heroku today.

{% highlight bash %}
 !  Your account vavramuk@gmail.com does not have access to appname.
 !
 !  SSH Key Fingerprint: aa:bb:aa:bb:aa:bb:aa:bb:aa:bb:aa:bb:aa:bb:aa:bb

fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
{% endhighlight %}

I thought I had been hacked but "vavramuk@gmail.com" is actually the default
public key for Vagrant, which I had been using earlier. To solve the problem
run:

{% highlight bash %}
ssh-add -D
{% endhighlight %}

And try to push again.

Via [@dmathieu](https://twitter.com/dmathieu/status/456347197571735553)