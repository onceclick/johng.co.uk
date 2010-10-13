---
layout: post
title: "Run Capybara & Cucumber Features In Internet Explorer On Remote Windows"
---
[Capybara](http://github.com/jnicklas/capybara) is a fantastic way to perform real integration tests on your Rails apps in actual browsers. Anyone can start writing tests (or features) after reading through a [couple of examples](http://cukes.info/) using the super simple Cucumber tools.

I thought a lot of people would be using Capybara to run their tests in Internet Explorer on remote Windows boxes. Most Rails developers are not running Windows making testing in IE a chore, so any automated way of doing so would be massively popular right? Not really! I couldn't find much in the way of end to end documentation so I dug through the Capybara\WebDriver source code and eventually got it all working. If you want to get it working in your Rails application it's actually pretty simple (now I've done the research!).

### Installing Cucumber and Capybara

First thing is make sure you have the latest Cucumber and Capybara configured in your Rails app. If you have a Gemfile add these dependancies and then run bundle update:

{% highlight ruby %}
gem 'cucumber-rails', '0.3.2'
gem 'capybara', '0.4.0.rc'
{% endhighlight %}

If you're still adding gems in the environment.rb add these lines there instead:

{% highlight ruby %}
config.gem "cucumber-rails", :version => '0.3.2'
config.gem 'capybara', :version => '0.4.0.rc'
{% endhighlight %}

These were the latest versions of the gems at the time of writing - use these or newer versions. Make sure these gems are installed and then run this is generate your cucumber config:

{% highlight bash %}
script/generate cucumber --capybara --rspec --spork
{% endhighlight %}

Feel free to omit the rspec and spork options if you don't use them.

### Testing It Out

I highly recommend at this point you write a Cucumber feature and get it passing. We haven't configured Capybara for IE yet so this will run using Capybara's default driver (headless) so you can see if your feature works at all before we even try and get it working in a real browser.

Pick a really simple part of your application (like a login screen) to start with and write a feature for it based on the [excellent documentation](http://github.com/jnicklas/capybara) and then run:

{% highlight bash %}
rake cucumber
{% endhighlight %}

Once you have your feature passing we can move on with the configuration.

### Windows Configuration

Pick a Windows box (XP, Server 2003 or newer) either on your local network, in the [cloud](http://aws.amazon.com/windows/) or on a [virtual machine](http://www.virtualbox.org/) on your desktop. So long as the box is accessible via the network it depends on your preference which one you go for.

WebDriver\Selenium requires Java so if you don't have it download it [here](http://www.java.com/en/download/manual.jsp). You should be able to open up a new command prompt (Start..Run...cmd) and run the java command to see it has installed successfully.

Go to the Selenium downloads page and grab the file selenium-server-standalone-2.0a6.jar (or whatever the latest version is). From your command prompt you should be able to navigate to where the file is downloaded and run:

{% highlight bash %}
java -jar selenium-server-standalone-2.0a6.jar
{% endhighlight %}

It should output some logs and let you know its running and awaiting connections.

### Hooking Up Capybara to Windows

To get our features running on that box lets switch back to the Rails app, open up features/support/env.rb and after this line:

{% highlight ruby %}
Capybara.default_selector = :css
{% endhighlight %}

insert this configuration:

{% highlight ruby %}
Capybara.app_host = "http://192.168.1.37:3000"
Capybara.register_driver :selenium do |app|
  Capybara::Driver::Selenium.new(app,
    :browser => :remote,
    :url => "http://192.168.1.127:4444/wd/hub",
    :desired_capabilities => :internet_explorer)
end
{% endhighlight %}

Replace the IPs of app_host and url to the IPs of your Rails app and Windows box respectively.

### Watch The Show

Run it:

{% highlight bash %}
rake cucumber
{% endhighlight %}

Look at your Windows box and you should see the Capybara connect and start to run your tests through IE. With a little luck everything will pass!

Now you can right outside-in tests for every new feature you add and be safe in the knowledge they work in IE. Let me know if you had any problems.