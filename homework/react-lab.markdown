---
layout: homework
title: CSCI-UA.0480 - Socket IO Lab
---

<div class="panel panel-default">
	<div class="panel-heading">React Lab</div>
	<div class="panel-body" markdown="block">

# React Lab - Binary Number or Card Calculator (10 points for In-Class Project/Quiz Grade)

## Submission Process

* work in groups of 2 or 3
* choose one of the applications described below in the Overview &rarr; Description and implement it
* __submit using [this form](https://docs.google.com/a/nyu.edu/forms/d/e/1FAIpQLSeyWVIq2ymcFrsLWf5bB6APGDreDIbb3AqJlf9Cqx413Aa97w/viewform)__
* __each person on the team should submit their own individual form__
* once you've submitted:
    * raise your hand to let me know
    * either...
        1. help others with their lab
        2. try the other application!

## Scoring

* __+7 points__ for showing up and submitting form 
* __+2 points__ form submitted with a _reasonable_ amount of _valid looking_ code
* __+1 point__ code deployed on [codepen.io](https://codepen.io)

## Overview

### Goals / Topics Covered

You'll be using the following concepts:

* React
    * props
    * state
    * events
    * nested components
    * form elements


### Description

Create __one of these two applications__:

1. an application that calculates the decimal value of an 8-bit binary number 
1. an application that calculates the total of a hand of cards

## Instructions

### Setup

You can develop your application with any tools that you like. If you'd like to use what we learned in the lectures, you can choose either of these methods:

1. use `create-react-app`
    * allows quick setup for local development
    * you can use your own text editor!
    * [see the instructions on setting up create-react-app in the slides](../slides/26/react-state-parent.html#/15)
2. create a new project (pen) in [codepen.io](https://codepen.io)
    * debugging might be difficult
    * ...but your application will already be deployed!
    * to setup, configure babel as your JavaScript pre-processor and add React and ReactDOM Libraries:
        <br>
        ![codepen](../resources/img/codepen.gif)

### Implementation

Choose __one of these two small React applications__ to implement &rarr;

1. __Binary Number__
    * create an application that calculates the decimal value of an 8-bit binary number
    * start with 8 bits all set to 0
    * add the decimal value of the binary number composed of the 8 bits
    * each bit can be clicked so that it is set to either 0 or 1
    * every time a bit is clicked, the value of the bit will be toggled (0 goes to 1, 1 goes to 0)
    * recalculate the decimal value every time a bit is updated
    * the bits should all be adjacent to each other, any other styling is your discretion
    * see the example interaction below:
        ![bin](../resources/img/hw10-screen.gif)
2. __Card Calculator__
    * create an application that:
        * uses a comma separated list of card values 
        * ...to create a series of cards and 
        * ... display the total value of all of the _valid_ cards in the list
    * create a text input that allows entry of a comma separated list 
    * using only the valid faces from the list, display the cards in the DOM 
        * __they can all be the same suit__
        * valid faces are J, Q, K, A
        * or numbers 2 through 10
    * the cards should styled such that:
        * each card has a width and a height
        * each card is displayed adjacent to each other
        * any other styling is your discretion
    * lastly, display the total of the valid cards (that is, the cards shown in the DOM)
        * numbers will be counted as their numeric value
        * J, Q, and K are worth 10
        * an ace (A) will always count as 11
    * see the example below:
        ![calc](../resources/img/lab02-card-calculator.gif)

### Deployment

To deploy your app in codepen.io... (only valid if you developed locally, otherwise, your code is _already there_)

1. configure babel, React and React DOM as shown in the gif above (see Instructions &rarr; setup)
2. copy all of your __components__ over to the js panel (don't include any of the import statements)
3. you may have to change `extends` so that it's `extends React.Component` for each component
4. use ```ReactDom.render``` at the very end to render your main/root component:
    ```ReactDOM.render(<App />, document.body);```
