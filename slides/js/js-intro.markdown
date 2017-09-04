---
layout: slides
title: Introducing JavaScript
---
<section markdown="block" class="intro-slide">
# Introducing JavaScript

### {{ site.course_number}}-{{ site.course_section }}

<p><small> 
</small></p>
</section>

<section markdown="block">

## Let's Talk About

1. {:.fragment} What is __JavaScript__ _anyway_ 🤔
2. {:.fragment} Where we've seen it? 👀
3. {:.fragment} Why are _we_ using JavaScript? 🕸
4. {:.fragment} How are we going to learn it? 📖

</section>




<section markdown="block">
## About JavaScript

### Perhaps You've Used it Before?

__It's pretty much the standard language for developing for the web__ (for better or worse).
{:.fragment}

__JavaScript is__ &rarr;
{:.fragment}

* {:.fragment} a high-level programming language that is __available on many platforms__
* {:.fragment} that __supports multiple programming paradigms__, such as imperative, functional and object oriented programming
* {:.fragment} it has a lot of really great (and sometimes quirky 🙃) features, but it also has some really terrible parts too 😖 

<aside class="notes">
Have you used JavaScript before? 
Keep hands up if you've used es6/es2015? 
Keep hands up if you've used React/Angular
</aside>

</section>

<section markdown="block">
## Interesting JavaScript Features

__We'll go over these in more detail in the next couple of classes__ &rarr;

1. {:.fragment} __first-class functions__ (functions are just objects that can be passed around as values like strings and numbers)
2. {:.fragment} __closures__ (a function has access to the variables in scope when the function was created)
3. {:.fragment} __versatile and dynamic objects__ (object literal notation is _pretty powerful_)
4. {:.fragment} __prototypal inheritance__  (using another object to base new objects off of)
</section>

<section markdown="block">
## Functions as First Class Citizens

In JavaScript, __functions are just objects__ that can be:

__Passed around__:
{:.fragment}

<pre><code data-trim contenteditable>
// in the code below, w => w.toUpperCase() is a shorthand 
// way of // creating a function, which is then passed to 
// the array method, map

const  words = ['yachty', 'boaty', 'canooey'];
console.log(words.map(w => w.toUpperCase()));
</code></pre>
{:.fragment}

<br>

__Or even have properties and methods__!
{:.fragment}

<pre><code data-trim contenteditable>
// another way to declare a function

function sayBroccoli(times=1) {
    console.log('broccoli'.repeat(times));
}
// WAT? this function has a method called bind!?
const sayBroccoliTwice = sayBroccoli.bind(null, 2);
</code></pre>
{:.fragment}

</section>

<section markdown="block">
## Closures

__A function has access to the variables in scope when the function was created__:

<pre><code data-trim contenteditable>
// val is available to returned function 
// even after stringAccumulator returns
function stringAccumulator(val='') {
    return function(s) {
        val += '\n' + s;
        console.log(val);
    };
}
</code></pre>
{:.fragment}

<pre><code data-trim contenteditable>
const addColdStates = stringAccumulator('team names');
addVegetable('Minnesota');
addVegetable('Maine');
addVegetable('Michigan');
</code></pre>
{:.fragment}
</section>

<section markdown="block">
## Objects

Object literal notation is easy!

<pre><code data-trim contenteditable>
const obj = {nights: 0};
</code></pre>
{:.fragment}

<br>

Add a method? No problem!
{:.fragment}

<pre><code data-trim contenteditable>
obj.incrementNights = function() {
    this.nights += 1;
}

obj.incrementNights();
console.log(obj.nights);
</code></pre>
{:.fragment}

</section>

<section markdown="block">
## Prototypal Inheritance

I want `anotherObj` to be based off of the `obj` from the previous example:

<pre><code data-trim contenteditable>
// set obj to be the "prototype" of anotherObj using Object.create
anotherObj = Object.create(obj);
</code></pre>
{:.fragment}


Now... another Obj has both `nights` and `incrementNights` as properties
{:.fragment}

<pre><code data-trim contenteditable>
anotherObject.incrementNights();
anotherObject.incrementNights();
console.log(anotherObj.nights);
</code></pre>
{:.fragment}
</section>

<section markdown="block">
## About Those Examples

__Those examples may not have made much sense, even if you already new JavaScript__ &rarr;

1. {:.fragment} don't worry, __we'll cover everything in-depth in this class and the next few classes__
2. {:.fragment} if you've used JavaScript before and are confused by the lack of `var` the weird `=>` syntax, etc. ... it's because we're using ES6 and beyond (recent versions of JavaScript)

</section>
{% comment %}
<section markdown="block">

<aside>
dynamically typed? - type checking occurs during runtime, practically - don't have to declare types when creating variables
</aside>
 __dynamically typed__ and __weakly typed__

__JavaScript is now...__ &rarr;

* _ubiquitous_ on the web
* it's an integral part of creating modern, single-page web apps
* ...but it's usage has gone beyond web page interactivity:
	* {:.fragment} server side language (__Node.js__)
	* {:.fragment} database query language (__MongoDB__)
	* {:.fragment} creative programming (__processing.js__)
	* {:.fragment} embedded scripting language (__Max/MSP__)
</section>
{% endcomment %}


<section markdown="block">
##  Some History
Originally created in 1995 (by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)) as a way to add interactivity (through programming) to web pages in __Netscape Navigator__!

<div markdown="block" class="img">
![Netscape!](../../resources/img/netscape.gif)
</div>

</section>

<section markdown="block">
## More History

* Microsoft also implemented a compatible dialect of JavaScript for Internet Explorer called [JScript](http://en.wikipedia.org/wiki/JScript)
* formally standardized in the late 90's (under the name [ECMAScript](http://en.wikipedia.org/wiki/ECMAScript))
	* implementations include the JavaScript engines in various browsers 
	* as well as [ActionScript](http://en.wikipedia.org/wiki/ActionScript) (remember Flash?) 
	* and, of course, various server side implementations, such as Node.js and Rhino
* (did I mention that it's __not Java__?)

</section>

<section markdown="block">
## Where is it Now?

__It's in transition... (and the naming conventions are confusing)__ &rarr;

* {:.fragment} the previous version, ES5, has been implemented fairly __completely__ in all modern browsers
* {:.fragment} ES6 (also called ES2015) is "mostly" [implemented in node and major browsers](http://kangax.github.io/compat-table/es6/)
* {:.fragment} we'll learn ES5 along with some ES6 features 
* {:.fragment} the standard for ES7 (also called ES2016) was finalized in the summer of 2016, but it's features are only partially implemented by browsers
* {:.fragment} (we maaaaay go over ES7 stuff)

</section>


{% comment %}
<section markdown="block">
## Where You've Seen It

* __as a server side language, JavaScript can be found on:__
	* (as mentioned before) [PayPal](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/), [New York Times](https://source.opennews.org/en-US/articles/nyt-redesigns-mobile/), and  [LinkedIn](http://queue.acm.org/detail.cfm?id=2567673)
	* [even](http://jobs.netflix.com/jobs.php?id=NFX01209) [NetFlix](http://techblog.netflix.com/2014/08/scaling-ab-testing-on-netflixcom-with_18.html) and [Walmart](http://codewinds.com/podcast/002.html)!?
	* [and others, of course](http://www.nearform.com/nodecrunch/node-js-becoming-go-technology-enterprise#.VAUUIWSwLPY)
* __here are some particularly _awesome_ uses of JavaScript on the front-end:__
	* [Khan Academy uses JavaScript/Process.js to teach computer science](https://www.khanacademy.org/cs/programming/variables/p/challenge-bucktooth-bunny)
	* [Creative programming, user interface experimentation (hakim.se)](http://hakim.se/experiments)
	* [Skifree.js!](http://basicallydan.github.io/skifree.js/)

\* (we're going to start off a little less ambitious, though)

</section>
{% endcomment %}

<section markdown="block">
## A Quick Rundown of its Features

* __multi paradigm__ - __Object Oriented__ (through prototypes), __Functional__, etc.
* __dynamically typed__ (eh... maybe not a great feature?)
* __weakly typed__ (also maybe not a great feature?)
* most implementations are __interpreted__ rather than compiled (or at least hide the compilation from you ... shrug)
* __C-like syntax__ - so you should be pretty familiar with all of the curly braces
</section>

<section markdown="block">
## It's Available!

* you can install server-side JavaScript on multiple platforms (Node.js has __Windows__, __Linux__, and __OSX__ installers)
* it's available on every major browser (such as Chrome, Safari or Internet Explorer)
* not only are you able to run JavaScript, but... if you have a web browser and a text editor, you will be able to write JavaScript programs as well!
* __check out the JavaScript _console_ in Chrome__ &rarr;
* In Chrome: View &rarr; Developer &rarr; JavaScript Console
</section>

<section markdown="block">
## Running JavaScript

We'll be running JavaScript on both the server and the client... so we'll rely on:

* {:.fragment} the __Node.js__ commandline interpreter / [REPL](http://nodejs.org/api/repl.html), which is really just [V8](http://en.wikipedia.org/wiki/V8_(JavaScript_engine)) (what's v8? &rarr;)
<pre><code data-trim contenteditable>
node myfile.js
</code></pre>
{:.fragment}
<pre><code data-trim contenteditable>
pines:~ joe$ node
> console.log('REPL time!')
</code></pre>
{:.fragment}
* {:.fragment} and Chrome for running JavaScript in browser (which is, coincidentally, also __v8__)

</section>

<section markdown="block" data-background="#440000">
## For the first few classes, it would be good to use __node__, but your browser's developer tools or jsfiddle will work in a pinch.

### Let's see all of them in action &rarr;

</section>

{% comment %}
<section markdown="block">
## JavaScript Basics

### OK! Now About the _Actual_ Language

* [Values](http://eloquentjavascript.net/01_values.html)
* [Program Structure](http://eloquentjavascript.net/02_program_structure.html)
* ...And the slides (based on the above readings)
* [Values, Types, and Operators](values-types-operators.html)
* [Variables](variables-control-structures.html)
* [Control Structures](conditionals-loops.html)


</section>
{% endcomment %}


<section markdown="block">
## A few Notes on How You'll be Writing Programs

* use any text editor you want (I don't care, really)
* some editors that I, as well as other students, have used in the past:
    * Visual Studio Code (&larr; this one is pretty good!)
    * Atom
	* sublimetext
	* WebStorm
	* vim (&lt;-- I use this mostly, but _probably not a good choice if you don't already know it_)
* if you don't have node installed yet, you could use
	* your browser's developer tools (ugh?)
	* [jsfiddle](jsfiddle.net) (or [codepen](codepoen.io) or jsbin, etc.)
</section>

<section markdown="block">
## Let's End With a Quick Survey

I'd like to get an idea of what languages / technologies everyone has had experience with. 

* __please fill out__ [this survey]({{ site.survey_intro }}) rn 
* take ~5 minutes to do this in class (you can finish it up outside of class later)
* (it's also my secret way of taking attendance)
* (and collecting your GitHub usernames)
</section>
