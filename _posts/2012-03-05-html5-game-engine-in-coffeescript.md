---
layout: post
title: "Gibdo - My HTML5 Game Engine In CoffeeScript"
---
Recently, inspired by the work of [Notch](http://www.minecraft.net/) and [Bret Victor](https://vimeo.com/36579366), I have been doing a little more game programming in my spare time. The only game development I had done previously was in C/C++ and I found it just didn't have the tight feedback loop that both Notch and Bret demonstrate so well when they code. As I didn't feel like firing up Eclipse and going down the Java rabbit hole with Notch I decided to take Bret's approach and work on an HTML5 Canvas game.

What I have been able to put together so far is called [Gibdo](https://github.com/john-griffin/gibdo) - a top-down 2D game starting point featuring,

* A scrolling view window that tracks the player across the game world.
* View limit detection to allow the player to move off the centre of the screen as the edges of the game world are reached.
* Sprite collision detection.
* Keyboard input.
* Sprite animation and sprite swapping based on the player's direction.

[![Screenshot right](http://john-griffin.github.com/gibdo/resources/game.png)](http://john-griffin.github.com/gibdo/public/index.html)

It's all written in [CoffeeScript](http://coffeescript.org/) which has been a great fit for working on a game due to it's clean handling of JavaScript's prototypal inheritance. You need only compare it to the compiled JavaScript to realise how much easier it is to reason about the CoffeeScript code.

I have also take then time to fully document the code using [Docco](https://github.com/jashkenas/docco). You can find the [annotated source here](http://john-griffin.github.com/gibdo/) which I highly recommend checking out to see how it works.

It's obviously not a full game but I feel it's a good starting point to build off. In the future I would like to add,

* Multiplayer support (maybe using pusher).
* Tile based world generation.
* Game mechanics such as combat, levels, etc. 
* Sound effects.
* Massively Improved sprites (a pixel artist I am not).

You can try it out in your browser right [here](http://john-griffin.github.com/gibdo/public/index.html). Feel free to submit pull requests [on GitHub](https://github.com/john-griffin/gibdo) if you would like to add any new features.