---
layout: post
title: "Guardian Filtered Feed"
---

**UPDATE** This stopped working because the feed format changed several times. I also no longer subscribe to the feed.

I forgot to make [this project][1] public when I created it for myself and
started using it a couple of years ago.

I put together a [filtered version of the Guardian's RSS feed][1] which is more
to my tastes. It removes sports news, podcasts and other non news items that
appear in the feed. It also inserts images seen at the top of stories on the
website, which for some reason are removed from the official feed. It's also in
atom format but that's more a side effect of atom being simpler to generate in
rails.

It has been working fine with Google Reader for a number of years now, maybe
someone else will find it useful too.

[1]: http://guardian-filtered.herokuapp.com/