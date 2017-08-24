---
layout: homework
title: CSCI-UA.0480 - Homework #2
---

<div class="panel panel-default">
	<div class="panel-heading">Homework #2</div>
	<div class="panel-body" markdown="block">

# Higher Order Functions Exercises, Basketball - __Due Thursday, February 16th, by 11PM__

## Overview

### Description

__hoffy.js__ - Write a series of 8 functions that demonstrate the use of the rest operator (or call/apply), and higher order functions 

__basketfunc.js__ and __report.js__ - Print out a report analyzing basketball games based off of JSON data. There are two parts to this file:

* An initial version that works off of a local JSON file
* An second version that works off of remote urls and additional data.

See the [sample output](#hw02-sample) at the end of these instructions.

### Submission Process

You will be given access to a private repository on GitHub. It will contain unit tests, stub files for your code, a `package.json` and a `.eslintrc`

* The final version of your assignment should be in GitHub.
* __Push__ your changes to the homework repository on GitHub.

### (4 points) Make at Least 4 Commits

* Commit multiple times throughout your development process.
* Make at least 4 separate commits - (for example, one option may be to make one commit per part in the homework).

## Part 1 - Setup and Exercises

For this homework, you'll have files available in your repository, so you'll be cloning first.

The solutions to the following problems can go in the same file - __src/hoffy.js__:

### Setup

1. go to your github account...
2. find your repository: NetID-homework02 (note... this __should be your NetID__)
3. use the appropriate URL to run git clone

<pre><code data-trim contenteditable>git clone [YOUR REPO URL]</code></pre>

### Background Info

Implement 8 functions that use JavaScript features such as:

* the rest operator
* the spread operator
* functions as arguments
* functions as return values
* decorators
* optionally call/apply/bind
* optionally arrow functions
* Array methods: 'filter', 'map', 'reduce'

Go through the functions in order; the concepts explored build off one-another, and the functions become more and more challenging to implement as you go on.

Do not use a regular `while`, `for`, `for ... in`, `for ... of`, or `forEach` loop. __There will a small (-2) penalty every time one is used__.


### Steps

1. prep...
    * create a `.gitignore` to ginore node_modules
    * make sure that `mocha`, `chai`, and `eslint` are still installed (similar to previous assignment)
        <pre><code data-trim contenteditable>npm install -g mocha
npm install --save-dev eslint
npm install --save-dev chai
</code></pre>
    * you'll also need a few additional modules installed locally for the unit tests to run:
        * finally, install sinon and mocha-sinon locally for mocking `console.log` (these are for unit tests)
        * `npm install --save-dev sinon`
        * `npm install --save-dev mocha-sinon`
2. implement functions below in __hoffy.js__
3. make sure you export your functions as you implement them so that...
4. you can run tests as you develop these functions (again, the tests are included in the repository):
    `mocha tests/hoffy-test.js`
5. also remember to run eslint (there's a `.eslintrc` file included in the repository):
    `node_modules/.bin/eslint src/*`

### (40 points) Functions to Implement

### (-2 per while, for, forEach, for of, or for in loop used)

<hr>

### `prod(num1 [, num2, ..., numN])`

__Parameters:__

* `num1`, `num2`, up through ... `numN` - the values to be multiplied

__Returns:__

* the product of the arguments as a `Number` 
* the product of no arguments is undefined
* the product of a single argument is that argument

__Description:__

This function demonstrates the use of the rest operator (ES6) or using the built-in arguments object. Multiplies all of the arguments together and returns the resulting product. If there are no arguments, the resulting product is undefined. Does not check for types of incoming arguments.

__Example:__

    // returns the product of all arguments passed in
    prod(1, 2, 3, 4) // --> 24
    prod(1, 1, 1, 1, 1, 1, 1, 1, 1, 1) // --> 1
    prod(1) // --> 1

    prod() // --> undefined

<hr>

### `any(arr, fn)`

__Parameters:__

* `arr` - the `Array` to test
* `fn` - the function that will be used to test every element in the `Array`

__Returns:__

* `true` or `false` - whether or not any of the elements in the `Array` pass the test

__Description:__

This function demonstrates using functions as an argument or arguments to another function. It calls function, `fn`, on every element in `arr` checking if they pass the test. If at least one element passes the test, `fn`, then return true. Note that it is not possible to break from higher order functions (so the solution here will not be quite as efficient as a regular `for` or `for of` loop). Check out the [readings](http://eloquentjavascript.net/05_higher_order.html) or [slides](../slides/04/higher-order-functions-continued.html) on higher order functions for relevant background material and examples.

__Example:__

    // are any of these numbers odd?
    any([2, 3, 4, 6], x => x % 2 === 1) // true
    any([2, 4, 6, 8], x => x % 2 === 1) // false

<hr>

### `maybe(fn)`

__Parameters:__

* `fn` - the function to be called 

__Returns:__

* a new `function` or `undefined` - the `function` calls the original function

__Description:__

This is similar to the previous function, but it also demonstrates returning a function and using the spread operator. `maybe` will take a function, `fn` and return an entirely new function.

The new function will take the same arguments as the original function (`fn`). Consequently when the new function is called, it will use the arguments passed to it and l call the old function and return the value that's returned from the old function. However, if any of the arguments are `undefined` or `null`, the old function is not called, and `undefined` is called instead. You can think of it as a way of calling the old function only if all of the arguments are not `null` or not `undefined`.


__Example:__

    function createFullName(firstName, lastName) {
        return `${firstName} ${lastName}`; 
    }
    maybe(createFullName)('Frederick', 'Functionstein'); // Frederick Functionstein
    maybe(createFullName)(null, 'Functionstein');        // undefined
    maybe(createFullName)('Freddy', undefined);          // undefined 

<hr>

### `constrainDecorator(fn, min, max)`

__Parameters:__

* `fn` - the function to modify (_decorate_)
* `min` - the minimum value that `fn` can return
* `max` - the maximum value that `fn` can return

__Returns:__

* `function` - a function that...
    * does the same thing as the original function, `fn` (that is, it calls the original function)
    * accepts the same number of arguments as the original function, `fn`
    * the return value is the return value of `fn`, unless it is less than or greater than the `min` and `max`, in which case it returns `min` or `max` respectively

__Description:__

This function is a decorator (similar to `maybe`). [See the slides on the decorator pattern](../slides/04/higher-order-functions-continued.html) for background information. It builds on top of the example in the slides by actually _modifying_ the return value of the original function. 

This function wraps the function `fn` in another function so that operations can be performed before and after the original function `fn` is called. This can be used to modify incoming arguments, modify the return value, or do any other task before or after the function call. Again, we'll be modifying the return value in this case.

This particular decorator function constrains the result of the function being wrapped, `fn` so that its return value fits between `min` and `max` inclusive. If these are omitted from the original outer function, then the newly returned function will just return the value unmodified. You can assume that the return value of `fn` is `Number` (you do not have to deal with other types).


__Example:__

    // creates a new function from the built-in function, parseInt
    // the new function is the same thing as parseInt, but it constrains
    // the return value to a value between min and max (inclusive)
    const constrainedParseInt = constrainDecorator(parseInt, -10, 10);

    // still works like the original parseInt
    constrainedParseInt("7") // --> 7
    constrainedParseInt("-10")) // --> -10

    // but if the return value is less than min or greater than max
    // it returns min or max respectively
    constrainedParseInt("-12") // --> -10
    constrainedParseInt("12")) // --> 10

    // however, if either min or max are missing, then the new function
    // returns the result of fn unmodified regardless of value
    var constrainedParseInt2 = constrainDecorator(parseInt);
    constrainedParseInt2("-12") // --> -12

<hr>

### `limitCallsDecorator(fn, n)`

__Parameters:__

* `fn` - the function to modify (_decorate_)
* `n` - the number of times that `fn` is allowed to be called

__Returns:__

* `function` - a function that...
    * does the same thing as the original function, `fn` (that is, it calls the original function)
    * but can only be called `n` times
    * after the `n`th call, the original function, `fn` will not be called, and the return value will always be `undefined`

__Description:__

This is the culmination of all of the concepts from the previous functions. However, instead of just reading from a variable that's available through the closure, you'll use it to keep track of the number of times that a function is called... and prevent the function from being called again if it goes over the `max` number of allowed function calls. Here are the steps you'll go through to implement this:

1. create your decorator (function)
2. create a local variable to keep track of the number of calls
3. create an inner function to return
    * the inner function will check if the number of calls is less than the max number of allowed calls
    * if it's still under max, call the function, `fn` (allow all arguments to be passed), return the return value of calling `fn`, and increment the number of calls
    * if it's over max, just return `undefined` immediately without calling the original function

__Example:__

    const = limitedParseInt = limitCallsDecorator(parseInt, 3);
    limitedParseInt("423") // --> 423
    limitedParseInt("423") // --> 423 
    limitedParseInt("423") // --> 423
    limitedParseInt("423") // --> undefined

<hr>

### `mapWith(fn)`

__Parameters:__

* `fn` - a _callback_ function that takes in a single argument and returns a value (it will eventually operate on every element in an array)

__Returns:__

* `function` - a function that...
    * has 1 parameter, an `Array`
    * returns a new Array where every element is the result of calling the original function passed in `fn` on elements in the incoming Array, producing an entirely new `Array`

__Description:__

This is different from regular map. The regular version of map immediately calls the callback function on every element in an Array to return a new Array. `mapWith`, on the other hand, gives back a function rather than executing the callback immediately (think of the difference between bind and call/apply). `mapWith` is basically a function that turns another function into a mapping function (a function that works on Arrays). 

__Example:__

    // original square function that works on Numbers
    function square(n) {return n * n;} 

    // create a 'mapped' version of the square function
    mapWithSquare = mapWith(square); 

    // now square can work on Arrays of Numbers!
    console.log(mapWithSquare([1, 2, 3])); // [1, 4, 9]    
    
    mapWithParseInt = mapWith((n) => parseInt(n));
    console.log(mapWithParseInt([' 123', '45', '67 '])); // [123, 45, 67]

<hr>

### `simpleINIParse(s)`

__Parameters:__

* `s` - a string that contains data in a simplified [INI format](https://en.wikipedia.org/wiki/INI_file)

__Returns:__

* `object` - an `object` that represents the data in the string as keys and values

__Description:__

For this function, we'll assume that the string being passed in is in a simplified INI format:

Name and value pairs are separated by new lines. Each line has a name on the left side and a value on the right side. An equals sign with no spaces separates the name and the value. For example, the following string literal is in INI format - `"foo=bar\nbaz=qux\nquxx=corge"`. When printed (or if within a file) the content would look like:

    foo=bar
    baz=qux
    quxx=corge

This function takes a string in INI format and parses its names and values as properties and values in a JavaScript object. Consequently, the string above, `"foo=bar\nbaz=qux\nquxx=corge"`, is parsed into: `{foo: 'bar', baz: 'qux', quxx: 'corge'}` 

If duplicate names exist, the later name will overwrite the earlier name (for example, two foo=..., will result in the last foo= overriding the first).

If there is no `=` sign, the line will be skipped.

If there is an equal sign, but one side is missing (`=foo` or `foo=`), then treat the resulting name or value as ''.

__Example:__

    let s = "foo=bar\nbaz=qux\nquxx=corge";
    simpleINIParse(s); // {foo: 'bar', baz: 'qux', quxx: 'corge'} 

    s = "foo=bar\nbaz=qux\nquxx=corge\nfoo=WAT";
    simpleINIParse(s); // {foo: 'WAT', baz: 'qux', quxx: 'corge'}

    s = "foo=bar\nbaz\nquxx=corge";
    simpleINIParse(s); // {foo: 'bar', quxx: 'corge'};

    s = "foo=bar\nbaz=\n=qux";
    simpleINIParse(s); // {foo: 'bar', baz: '', '': 'qux'}


<hr>


### `readFileWith((fn)`

__Parameters:__

* `fn` - a _callback_ function that takes in a single argument, a string of data, and parses it into a JavaScript object (or Array)... this function will eventually work on the data read in from a file using `fs.readFile`.

__Returns:__

* `function` - a function that reads a file and immediately parses it into a JavaScript object (or Array)
    * it has 2 parameters: the `fileName` of the file being read, and callback function specified by the caller to handle the parsedData 
    * this new function does not return anything; instead, it runs the callback function supplied after it reads in the file


__Description:__

This combines many of the items from above and combines it with using callbacks / asynchronous programming.

This function will take a parsing function and turn it into a function that opens a file and immediately parses it. This resulting function will be an async function (!) so it will take a callback as one of its arguments (this callback function is defined by the caller).

The steps for `readFileWith` are:

1. takes a parsing function as an argument
2. returns a new function
3. the new function will take a `fileName` and a callback as arguments
4. it'll read a file using `fs.readFile` (make sure the `fs` module is `require`'d in your project)
    * check out the [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback) docs
    * use the `fileName` passed in to the new function as the file name for `readFile`
    * set the encoding when calling `readFile` to `utf8`
    * the callback supplied to `readFile` should:
        * parse the data resulting from a file read using the original parsing function, `fn` passed into `readFileWith` if there's no error
        * call the callback passed into the new function with the err object (regardless of wheteher or not it's null/undefined) and the parsed data (again, regardless of whether or not it has a value or is `undefined`)
        * if there is an error, the parsed data should be `undefined`

This is essentially a function that creates functions that reads and parses files.


__Example:__

    // assuming config.ini look like this:
    foo=bar
    baz=qux
    quxx=corge

    // use our simpleINIParse function from earlier!
    const readFileWithSimpleINIParse = readFileWith(simpleINIParse);
    readFileWithSimpleINIParse('tests/config.ini', (err, data) => {
        // within the callback, data is equal to
        //  {foo: 'bar', baz: 'qux', quxx: 'corge'}
    });

    // assuming config.json look like this:
    {
		"foo": "bar", 
		"baz": [1, 2, 3]
    }
    
    const readFileWithJSONParse = readFileWith(JSON.parse);
    readFileWithJSONParse('tests/config.json', (err, data) => {
        // within the callback, data is equal to
        // {foo: 'bar', baz: [1, 2, 3]};
    });

### Test, Lint and Commit

Once you're finished with your functions, remember to:

1. make sure all tests are passing
2. make sure that eslint shows no errors
3. commit and push your code!


## (33 points) Part 2 - Processing NBA Game Data, Reading from a Local `json` File

The original data for this game was sourced from [http://stats.nba.com/game/#!/0021600681/](http://stats.nba.com/game/#!/0021600681/). I've restructured it and made the data available through the course site and your repository. You'll be using this data to extract some information from the game.

You'll be using two files for this:

1. `basketfunc.js` to create a function called `processGameData`
2. `report.js` to read in JSON data and use the `processGameData` above to create a report

### Importing Data

* Create a file called `src/report.js`
* Start by reading in the file `tests/0021600681_gamedetail.json` using `fs.readFile` (of course, require the module first, then call the function)
* See the docs on [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback) (hint: make sure you specify `utf8` as the second argument)
* The file that you read in contains game data in JSON format
* Parse the game data into an actual JavaScript object using the methods from the built-in <code>JSON</code> module.  See [the slides](../slides/02/objects.html#/20) or the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* Note, you can only do this from within the function (the callback function, or the function to be called once data is read from the file) that you supply to `fs.readFile`
* Examine the resulting object... (for example, try printing it out!)

## Examining the Data

* Assuming that your parsed data is in a variable called `data`...
* `data` should be an object with nested objects and arrays, with all of the data nested in a property named `g`
* Examine the properties in `data.g`
    * note that any numeric values are __ALL strings__ (so it may be good to clean up / convert the data before working on it with numeric operators)
    * there are a few properties that describe the game, such as the game's id, <code>gid</code>, game data and time, `gdte`, etc.
    * ... and there two properties within `g`, `hls` and `vls` that represents data about each team in the game
    * there's meta info in `hls` and `vls` that represents the team name and team cit (`tn` and `tc` respectively)
    * additionally, `hls.pstsg` and `vls.pstsg` are both `Array`s that contain player data for each team (each player represented as an object)
    * you can expect to find the following properties in each _player_ object 
	    * <code>fn</code>: player's first name
	    * <code>ln</code>: player's last name
	    * <code>fgm</code>: the number of field goals (both two pointers and three pointers, worth 2 and 3 points each respectively) that a player made
	    * <code>fga</code>: the number of field goals (both two pointers and three pointers) that a player attempted
	    * <code>ftm</code>: the number of free throws that a player made (each only worth 1 point)
	    * <code>fta</code>:  the number of free throws that a player attempted 
	    * <code>oreb</code>:  the player's number of defensive rebounds
	    * <code>dreb</code>:  the player's number of offensive rebounds
	    * <code>tpm</code>:  the number of three point field goals that a player made
	    * <code>tpa</code>:  the number of three point field goals that a player attempted
	    * <code>tov</code>:  the number of turnovers a player made (loss of possession of ball)
	    * <code>ast</code>:  the number of assists that a player made (the number of passes that led to a score)
	    * <code>blk</code>:  the number of blocks that a player made (for a player on defense, the number of shots that the player blocked or tipped)

## Calculations

### The `processGameData` Function

You'll create a function to generate a report (as a string) based on game data:

1. Create a function in `src/basketfunc.js` 
2. ...that takes in game data as an object (for example, the parsed data from the sample file, `0021600680_gamedetail.json`) 
3. ...and returns a single string that contains a report with the calculations listed below:

### Implementation Requirements

When creating your report in `processGameData`, you must use __all__ of the following Array methods __at least once each__ in your program:

* <code>forEach</code>
* <code>filter</code>
* <code>map</code>
* <code>reduce</code>

There will be a small penalty for each one not used (-2).

### Game ID and Date/Time

* Start the report with the game's id (for example, for the game in the sample file, Celtics vs Rockets, it's <code>0021600681</code>, and the date is 2017-01-25):
    <pre><code data-trim contenteditable>Game ID: 0021600681, 2017-01-25
=====
</code></pre>
* Notice the line of 5 equal signs underneath the game id


### Final Score

* Include the final score of the game in the report string... based on the data provided
* The score for each team can be calculated by summing the following values for each player on that team:
	* __3 points__ for every of three point field goal made 
	* __2 points__ for every two point field goal made
	* __1 point__ for every free throw made
* Note that the number of 2 point field goals made is actually number of field_goals_made  - three_pointers_made (because field_goals_made counts both twos and threes)
* The score should be in the following format: <code>team_city team_name - total_score</code>

* Example string: 
    <pre><code data-trim contenteditable>Boston Celtics - 120
Houston Rockets - 109
</code></pre>

### Player With the Most Rebounds

* Include the name and the number of rebounds of the player that had the most rebounds in the game in the report string
* The number of rebounds is the sum of Offensive Rebounds and Defensive Rebounds.
* Use the following format: <code> * Most rebounds:Jae Crowder with 10
</code>.

* Example string:
    <pre><code data-trim contenteditable> * Most rebounds:Jae Crowder with 10
</code></pre>

### Player With Highest Three Pointer Percentage that Took Attempted Least 5 Three Pointers

* Include the name of the player
    * that attempted at least 5 three point shots
    * and... has the highest three point shooting percentage in the game (either team)
    * (three point shooting percentage is number of threes made divided by number of threes attempted)
* Use the following format: <code> * Player with highest 3 point percentage: first_name, last_name at percentage (made/attempted)
</code>. 
* Example string:
    <pre><code data-trim contenteditable> * Player with highest 3 point percentage that took at least 5 shots: Trevor Ariza at %50.00 (4/8) 
</code></pre>



### Total Number of Players With at Least One Block

* Include the total number of players across both teams that have at least one block
* Use the following format: <code> * There were total_number_of_players_with_min_blocks players that had at least one block
</code>.
* Example string:
    <pre><code data-trim contenteditable> * There were 6 players that had at least one block
</code></pre>

### Players With More Turnovers Than Assists

* Include a list of all of the players that have more turnovers than assists.
* The format should be: <code> * team_name players with more turnovers than assists:</code>.
* ...Followed by a list of player names in the format <code>first_name last_name has an assist to turnover ratio of assists:turnovers</code>.
* Example string:
<pre><code data-trim contenteditable> *  Players with more turnovers than assists:
         Boston - Celtics
         * Jaylen Brown has an assist to turnover ratio of 0:3
         * Amir Johnson has an assist to turnover ratio of 1:2
         * Kelly Olynyk has an assist to turnover ratio of 2:3
         * Gerald Green has an assist to turnover ratio of 0:1

         Houston - Rockets
         * Trevor Ariza has an assist to turnover ratio of 2:3
         * Ryan Anderson has an assist to turnover ratio of 1:2
         * Corey Brewer has an assist to turnover ratio of 1:2
</code></pre>

### Return Value

The result of all of the calculations should be coalesced into a single large string representing the report.

This string should be returned by your `processGameData` function in your module, `basketfunc.js`.

<!--* -->

### Calling `processGameData`

Now that you've finished your function, you can try calling it on the data coming in from the local sample file.

1. In `report.js`: `require` the module that you created. 
2. Use your function on the data that you parsed from reading in the example json file, `0021600680_gamedetail.json`.
3. Print out the resulting string. 
4. You can check the original page that the data was sourced from to confirm your calculations: [http://stats.nba.com/game/#!/0021600681/](http://stats.nba.com/game/#!/0021600681/)  
5. Additionally, compare your output with the example output below.


### Example Output

<pre><code data-trim contenteditable>Game ID: 0021600681, 2017-01-25
=====
Boston Celtics - 120
Houston Rockets - 109
* Most rebounds:Jae Crowder with 10
* Player with highest 3 point percentage that took at least 5 shots: Trevor Ariza at %50.00 (4/8)
* There were 6 players that had at least one block
* Players with more turnovers than assists:
         Boston - Celtics
         * Jaylen Brown has an assist to turnover ratio of 0:3
         * Amir Johnson has an assist to turnover ratio of 1:2
         * Kelly Olynyk has an assist to turnover ratio of 2:3
         * Gerald Green has an assist to turnover ratio of 0:1

         Houston - Rockets
         * Trevor Ariza has an assist to turnover ratio of 2:3
         * Ryan Anderson has an assist to turnover ratio of 1:2
         * Corey Brewer has an assist to turnover ratio of 1:2
</code></pre>

Lint, commit and push your code; the next part will make modifications to this existing code (you can overwrite your work in this file directly for the next part).
<!--* -->

## (12 points) Part 3 - Retrieve JSON from URL

### Setup for Retrieving JSON 

Instead of reading a local file, __modify your program__ so that it requests JSON data from a specified url. Run your report again; the output should remain unchanged despite the change in data source. __You should overwrite your existing `report.js` file__ (the diffs are in git anyway).

* Install the requests library in your project's root folder: <code>npm install --save request</code> (similar to installing <code>readline-sync</code> in the previous assignment)
* Add the module to the beginning of `report.js`
* __Comment out or delete reading from a local file__

### Retrieve and Process JSON Data

* Use the requests library to retrieve the URL that contains the game data for the [game shown on this page](http://stats.nba.com/game/#!/0021600680/)
* The URL for the JSON data associated with this game is at:
    * [http://foureyes.github.io/csci-ua.0480-spring2017-008/homework/02/0021600680_gamedetail.json](http://foureyes.github.io/csci-ua.0480-spring2017-008/homework/02/0021600680_gamedetail.json)
* [Read the documentation](https://github.com/mikeal/request) to see how to use the requests module (or see the [slides](http://foureyes.github.io/csci-ua.0480-fall2016-001/slides/03/node-npm-debug-git.html#/6))
* Notice that the data is only available within the callback that you pass in to calling <code>request</code> (much like using `readFile`
* Again, a __callback__ is a function passed as an argument to another function... the callback will be invoked / executed at a later time, when some event is triggered
* In the case of <code>request</code>, it's the function that you pass in as the 2nd argument
* (The call to your report generation should be moved to the callback of request... )
* Parse the body of the response from `request` into an object
* Print out the result of calling `processGameData` on the parsed response


### Process Data From Requested JSON

* The top level object `g` from the parsed JSON data contains a <code>nextgid</code> property;
* The <code>nextgid</code> property contains the next game id to parse
* Construct a new URL based on that ID
* Use the <code>request</code> library again to retrieve and process the data from this new URL
* Continue to do this until the <code>next</code> property does not contain a url
* Your program should print out reports on several games.
* Example Output:


<pre name="hw02-sample" id="hw02-sample"><code data-trim contenteditable>Game ID: 0021600680, 2017-01-25
=====
Cleveland Cavaliers - 112
Sacramento Kings - 116
* Most rebounds:Kevin Love with 16
* Player with highest 3 point percentage that took at least 5 shots: Arron Afflalo at %66.00 (4/6)
* There were 8 players that had at least one block
* Players with more turnovers than assists:
         Cleveland - Cavaliers
         * Channing Frye has an assist to turnover ratio of 0:2
         * Kay Felder has an assist to turnover ratio of 1:3

         Sacramento - Kings


Game ID: 0021600681, 2017-01-25
=====
Boston Celtics - 120
Houston Rockets - 109
* Most rebounds:Jae Crowder with 10
* Player with highest 3 point percentage that took at least 5 shots: Trevor Ariza at %50.00 (4/8)
* There were 6 players that had at least one block
* Players with more turnovers than assists:
         Boston - Celtics
         * Jaylen Brown has an assist to turnover ratio of 0:3
         * Amir Johnson has an assist to turnover ratio of 1:2
         * Kelly Olynyk has an assist to turnover ratio of 2:3
         * Gerald Green has an assist to turnover ratio of 0:1

         Houston - Rockets
         * Trevor Ariza has an assist to turnover ratio of 2:3
         * Ryan Anderson has an assist to turnover ratio of 1:2
         * Corey Brewer has an assist to turnover ratio of 1:2
.
.
&lt;additional games&gt;
.
.

</code></pre>
</div>

</div>

