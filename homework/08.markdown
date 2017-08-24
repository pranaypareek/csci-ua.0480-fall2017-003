---
layout: homework
title: CSCI-UA.0480 - Homework #8
---

<div class="panel panel-default">
	<div class="panel-heading">Homework #8</div>
	<div class="panel-body" markdown="block">

# Movies Ajax - __Due Saturday, April 22nd, by 11PM__

## Overview

### Goals / Topics Covered

You'll be using the following concepts:

* XMLHttpRequest
* sending back json from Express

### Description

Take an existing express application that allows a user to add and filter movies from a list of movies, and modify it so that it uses AJAX POSTs and GETs instead of form submissions (essentially converting the original site into a "single page application").

You will:

1. consolidate the forms for filtering movies and adding movies so that they appear on the same page
2. add routes to create an api for retrieving movies and adding new movies
3. use JavaScript to trigger background requests to the api from the form submit buttons

Use the following resources as reference:

1. [Slides on AJAX Part 1](../slides/20/ajax.html)
2. [Slides on AJAX Part 2](../slides/21/ajax-express.html)
3. [AJAX POST (from Part 2)](../slides/21/ajax-express.html#/47)
 
### Submission Process

You will be given access to a private repository on GitHub.  The final version of your assignment should be in GitHub

* __Push__ your changes to the homework repository on GitHub.
* Commits later than that date will be handled on a case-by-case basis.

### Make at Least 3 Commits

* Commit multiple times throughout your development process.
* Make at least 3 separate commits

## About the Existing Code

__The code in your repository was created with express generator__

* consequently, it's in es5 syntax; feel free to convert to es6 (though it's not requried)
* to run you can use any of these commands:

```
nodemon start
node start
./bin/www
```

The application will be served on port 3000.

__Lastly, all of the code can be found in routes/index.js__

## Movies Ajax Requirements

### __Required Features__

__Modify templates and Routes, External JavaScript__

1. move the form from <code>/movies/create</code> into <code>/movies</code> (the page with the list of movies)
2. remove the route for <code>/movies/create</code> (you may want to preserve some of the logic, though!)
3. remove the template for <code>/movies/create</code>
4. modify the layout file so that it includes an external JavaScript file to be used later

__Filtering with AJAX__

1. create a route for the following API url: <code>GET /api/movies</code>
    * it should return a list of all movies in the database
    * if there's a query string parameter for director, it should filter the list based on director
    * it should return JSON
    * example:
        <pre><code data-trim contenteditable>GET http://localhost:3000/api/movies?director=Werner%20Herzog    
&nbsp;
[
    {
        "title":"Fitzcarraldo",
        "director":"Werner Herzog",
        "year":1982,"__v":0
    },
    {
        "title":"Stroszek",
        "director":"Werner Herzog",
        "year":1977,"__v":0
    }
]
</code></pre>
2. modify your form so that when the button is pressed:
    * the regular form button press event isn't triggered (use <code>preventDefault</code>)
    * ...instead, the value in the filter form field is retrieved
    * ...and is used to construct a url
    * a background request is made to the url
    * when the JSON is returned, it should be parsed into a list of movie objects
    * use those movie objects to replace the contents of the list of movies on the page
    * __filtering with a blank field gives back all movies__
3. Example interaction:
    <br>
    ![ajax filter](../resources/img/hw08-02-movies-ajax-filter.gif)

__Adding with AJAX__

1. create a route for the following API url: <code>POST /api/movies/create</code>
    * it should create a movie based on the data in the POST request's body
        * note that the year field is a <code>Number</code>
        * __so you'll have to convert your incoming data to the appropriate type!__
    * the data that it gives back should give some indication of whether or not the add operation succeeded
        * for example... send back the object inserted if successful
        * otherwise, send back an object with a key called error... with a value containing an error message
    * it should return JSON
2. modify your form so that when the add button is pressed:
    * the regular form button press event isn't triggered (use <code>preventDefault</code>)
    * ...instead, the values in the add form are retrieved
    * a background request is made to the url
        * remember to set content type: <code>req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");</code>
        * in <code>res.send</code>, make sure to add the form data as name value pairs: <code>"name1=value1&name2=value2&nameN=valueN"</code>
    * when a response is retrieved, repopulate the table so that the new movie is added
    * __if there was a filter set before adding, then clear the filter to show all movies, including the newly added one__
3. Example interaction:
    <br>
    ![ajax add](../resources/img/hw08-02-movies-ajax-add.gif)

{% comment %}
![add](../resources/img/hw08-02-movies-add.gif)
![filter](../resources/img/hw08-01-movies-filter.gif)
![ajax add](../resources/img/hw08-04-movies-ajax-add2.gif)
{% endcomment %}



</div>
</div>
