---
layout: default
title: Final Project
nav-state: "Final Project"
---
<style>

.warning {
    background-color: #eecccc;
}

pre {
	display: inline-block;
	padding: 9.5px;
	margin: 0 0 10px;
	font-size: 15px;
	word-break: break-all;
	word-wrap: break-word;
	background-color: rgb(224, 229, 234);	
	color: #001446;
	border-radius: 4px;
	border: none !important;
}

#final h4 {
	font-size:1.2em;
	margin-top: 1.5em;
	text-decoration: underline;
}
</style>
<div class="panel panel-default">
	<div class="panel-heading">Final Project</div>
	<div class="panel-body" markdown="block">

# Final Project, Due __WED, Nov 29th at 11pm__

## Overview 

Create a __small__ web application using Express and MongoDB. Build the application incrementally over the course of 4 weeks.

<a name="requirements">

## Project Requirements

### Requirements

* You must use Express and MongoDB (or other server-side framework and database with permission)
* You must write your own code, with annotations/references added for any code sourced from books, online tutorials, etc.

### Grading Rubric

__Completing the milestones leading up to the due date is required!__ Milestones 1 - 3 are worth over half of your final project grade.

* (15 points) Milestone #1 - requirements, draft data model, and a skeleton application
* (20 points) Milestone #2 - deployment attempt and a single working form (__You cannot change _your idea_ for your final project after this__)
* (20 points) Milestone #3 - two working forms and proof of work on research topics
* (45 points total) Completed project
    * (15 points) minimum 3 x forms or ajax interactions (__excluding login__)
    * (6 points) minimum 3 x any of the following (can be the same): 
        * original Constructors (that is, a constructor you've written yourself), including methods added to prototype
        * Object.create (where prototype matters)
        * es6 classes 
        * original higher order functions or these built-in higher order functions on the Array object: map, reduce, filter
    * (2 points) minimum 2 x mongoose schemas
    * (9 points) stability / security
        * simple validation on user input to prevent application from crashing
        * doesn't allow user input to be displayed unescaped directly on page
        * pages that require authentication cannot be accessed without authentication
        * data specified as private to a user cannot be viewed by another user
        * etc.
    * (5 points) _originality_ 
        * is not mostly based on existing homework
        * majority of code is not from online tutorial
    * (8 points) worth of research topics; see below


{% comment %}
* provide api end points
* what data is authenticated
* urls of where data
{% endcomment %}

## Additional Requirements, Your Choice

Choose at least __8 points__ worth of these following topics (research and implementation). __This list may change slightly (added items, adjustments to points) as project ideas come in.__ 

* (3 points) Unit testing with JavaScript
	* [Jasmine](http://jasmine.github.io/)
	* [Mocha](https://github.com/mochajs/mocha)
	* Any others found through research
    * Minimally 4 tests
    * You'll have to link to testing code in repository
    * ... and show a screen capture of tests
* (5 points) Automated functional testing for all of your routes using any of the following:
	* [PhantomJS](http://phantomjs.org/) - headless browser testing
	* [Selenium](http://www.seleniumhq.org/)
    * Minimally 4 tests
    * You'll have to link to testing code in repository
    * ... and show a screen capture of tests
* (3 points) Configuration management
	* [nconf](https://github.com/flatiron/nconf)
	* [Node convict](https://github.com/mozilla/node-convict)
	* Any others found through research
* (3 points) Use [grunt](http://gruntjs.com/), [gulp](http://gulpjs.com/), webpack or even make (!) to automate any of the following ... must be used in combination with one or more of the other requirements, such as:
    * (2 points) Integrate ESLint / JSHint / JSLint into your workflow
        * Must be used __with build tool__ (see above requirement on Grunt or Gulp
        * Must have have configuration file in repository
        * Must run on entire codebase __outside of <code>node_modules</code>
        * Must link to relevant lines in build configuration and lint configuration 
    * (2 points) Concatenation and minification of CSS  and JavaScript files
        * Must be used __with build tool__ (see above requirement on Grunt or Gulp
        * (Only client side files!)
        * Only minify and concatenate client side JavaScript
        * Must link to relevant lines in build configuration and mark-up (to show included css) 
    * (2 points) Use a CSS preprocesser
	    * [Sass](http://sass-lang.com/)
	    * [Less](http://lesscss.org/)
	    * [Myth](http://www.myth.io/)
        * Must link to relevant lines in build configuration and directory of _unprocessed_ CSS source
* (5 points) Integrate user authentication
	* Minimally, implement sign up and registration
	* Or implement sign in with provider, such as FB Connect, Google, etc. (which could be worth more points)
* (3 points) Perform client side form validation using custom JavaScript or JavaScript __library__
    * errors must be integrated into the DOM 
    * the following will not receive full credit:
        * using form elements with attributes as constraints 
        * displaying errors with `alert`
* (2 points) Use a CSS framework throughout your site, use a reasonable of customization of the framework (don't just use stock Bootstrap - minimally configure a theme):
	* [Bootstrap](http://getbootstrap.com/)
	* [Foundation](http://foundation.zurb.com/)
* (1 - 6 points) Use a __server-side__ JavaScript library or module that we did not cover in class (not including any from other requirements) 
    * assign a point value to the library or module that you're using based on amount of effort and/or code required for integration
    * Must link to source code relevant to implementation and evidence of working implementation on site
* (1 - 6 points) Use a __client-side__ JavaScript library or module that we did not cover in class (not including any from other requirements)
    * assign a point value to the library or module that you're using based on amount of effort and/or code required for integration
    * for example, angular 2 or d3 might be 6 points, while google maps might be 1 point
    * Must link to source code relevant to implementation and evidence of working implementation on site
* (1 - 6 points) Per external API used 
    * assign a point value to the library or module that you're using based on amount of effort and/or code required for integration
    * for example, angular 2 might be 6 points, while google maps might be 1 point
    * Must link to source code relevant to implementation and API documentation

<a name="milestone1"></a>

## Milestones

<a name="proposal"></a>

### __11/01 at 11PM__ - Milestone 1 - Requirements / Specifications, Draft Data Model, Skeleton Application (15 points)

[Check out sample documentation](https://github.com/nyu-csci-ua-0480-008-spring-2017/final-project-example)

* Documentation
	* Submit electronically through a supplied GitHub repository
	* Write everything up in your README.md
		* Drop the images into your repository (either under a separate branch or in a folder called documentation)
		* [Link to it based on this SO article](http://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository)
	* A one-paragraph description of your project
	* Requirements
		* Sample documents (JSON / JavaScript literal objects will be fine, or your actualy Schemas) that you will store in your database, and a description of what each document represents
		* Enumerate any references from one document to another
	* Wireframes ([like this one](http://upload.wikimedia.org/wikipedia/commons/4/47/Profilewireframe.png)) 
		* [a great article on wireframes](http://www.onextrapixel.com/2011/03/28/creating-web-design-wireframes-tools-resources-and-best-practices/)
		* some possible tools
			* Hand-drawn
			* Balsamiq
			* Google drawings
			* Omnigraffle
			* Adobe tools such Photoshop (psds), Illustrator (ai) etc.
	* [A Site Map (see examples)](http://creately.com/diagram-community/popular/t/site-map)
	* One of the following to represent what your application will actually do:
		* A list of user stories ([simply a list of sentences in the form of _as a &lt;type of user&gt;, I want &lt;some goal&gt; so that &lt;some reason&gt;_](http://en.wikipedia.org/wiki/User_story#Format))
		* A list/spreadsheet of [use cases (see the end of this article)](http://www.stellman-greene.com/2009/05/03/requirements-101-user-stories-vs-use-cases/)
		* A [Use Case Diagram](https://www.andrew.cmu.edu/course/90-754/umlucdfaq.html)
	* __Which modules / concept will you research?__
		* List of research topics
		* A brief description of concept (3 or 4 sentence each)
			* What is it?
			* Why use it?
			* List of possible candidate modules or solutions
            * Points for research topic (based on specifications above)
* Code
	* A skeleton express app
		* Start populating your package.json with required modules
	* A 1st draft mongoose schema

<div id="final" markdown="block">

<a name="milestone2">

<br>
<br>
<br>

### 11/08 at 11pm - Milestone 2 - Initial Deployment and First Form (20 points)

{% comment %}
1. attempt to deploy your code to Courants _compute_ and assignment servers by following [instructions](homework/deploy.html)
2. <span class="warning">use [this form to submit your deployed site](https://docs.google.com/a/nyu.edu/forms/d/e/1FAIpQLSe2TvDeXusZAqmG8644BKK8ItTvOOx-ByTE-6dmM_bleHhJCA/viewform)</span>
3. your submission won't be graded unless the form above is sent with urls to your deployed site
3. your deployed site should contain the following progress:
    * __one working form (that is not login or registration)__ 
        * ...that should allow data to be modified or deleted
        * the results of submitting this form should be apparent/viewable
    * show progress on at least 1 of your research topics; the url that shows you've implemented what you've researched can be:
        * a page on your site that's deployed to the server
        * a link to the github repository / line no

<a name="milestone3">

<br>
<br>
<br>
{% endcomment %}

### 11/15 at 11pm - Milestone 3 - 2nd Form and More Progress on Research (20 points)

{% comment %}
1. make at least 3 additional commits to add:
    * your 2nd form / ajax interaction
    * make more progress on your research topics
2. redeploy your code to Courant's server by running git pull and restarting forever
    1. `ssh` into linserv1 or linserv2 (remember, you have to go to access.cims.nyu.edu first)
    2. `cd` into your project directory (should be in `~/opt/NETID-final-project`)
    3. run `forever stopall` and `forever start bin/www` 
        * you'll have to use the full path to forever, likely `~/usr/local/node_modules/bin/forever`
        * and perhaps the full bath to `bin/www`
3. [submit this form for milestone #3 to indicate urls](https://docs.google.com/a/nyu.edu/forms/d/e/1FAIpQLScIKAMNIuUBakdzhwLUGpZ7v8zSHDzykPIdWyzsqm3IkiV6Pg/viewform)
    * __both working forms or ajax interactions (that are not login or registration)__ 
    * a link to show code changes since milestone #2:
        * start with the url to your repository: `https://github.com/nyu-csci-ua-0480-008-spring-2017/NETID-final-project/`
        * and append the following to the url: `compare/master@%7B04-09-17%7D...master`
        * for example: `https://github.com/nyu-csci-ua-0480-008-spring-2017/NETID-final-project/compare/master@%7B04-09-17%7D...master`
                     




<a id="final_submit" name="final_submit">

<br>
<br>
<br>
<br>
{% endcomment %}

### __11/29 11PM__ - Final Project Complete and Code is fully  _Deployed_ 
{% comment %}

* __all commits must be in by Thursday, April 27th__ (repositories will be closed early Friday morning)
* __project must be deployed__ on i6 (or other platform, such as Heroku, gomix, zeit, etc.)
    * if your application needs to be restarted while being graded; I will contact you
    * you will not receive a penalty for restarting after the due date
* __the [final project form submission](https://docs.google.com/a/nyu.edu/forms/d/e/1FAIpQLSfUNe5P9bzNBA1Z03b6NDeZEXe2qRRYBeewNWN1VnbLSkwgQQ/viewform) must be filled out__ (if a form is not submitted, you will receive a 0 for your project)
* late submissions:
    * +2 days 
    * 20% penalty
    * a late submission form will be posted 

<br>
<br>
<br>

<a name="suggestions">
{% endcomment %}

{% comment %}
## Potential Projects

* A project portfolio site
* Create a one-player game with a computer AI - allow logins, saved high scores, saved games
	* Maybe a card game building off of handy (blackjack) 
    * or something like Cookie Clicker ...
	* or a Battleship clone
	* or a platformer
* Or... whatever you can come up with!
{% endcomment %}
</div>
</div>
</div> 
