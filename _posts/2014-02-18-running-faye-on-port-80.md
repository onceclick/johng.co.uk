---
layout: post
title: "Running Faye on Port 80 via Nginx"
---

I have found on restricted networks it's tricky to get [faye][1] running using
it's default settings. Faye normally runs on port 9292 which is blocked on many
firewalls. To get around this I configured an Nginx proxy to sit in front of the
main web app and the faye process and route all requests to the correct service.
This means all traffic can be served over port 80 or 443 if you're using SSL.

This is an example of the configuration I used.

    server {
      listen      80;
      server_name app;
      root        /srv/app/current/public;

      location ^~ /faye {
        proxy_pass         http://127.0.0.1:9292/faye;
        proxy_redirect     off;
        proxy_set_header   Upgrade    $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_http_version 1.1;
        proxy_buffering    off;
        proxy_cache_bypass $http_pragma $http_authorization;
        proxy_no_cache     $http_pragma $http_authorization;
      }
    }

[1]: http://faye.jcoglan.com