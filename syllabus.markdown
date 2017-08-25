---
layout: default
nav-state: syllabus
---

<div class="row">

  <div class="col-md-6">
    <div class="panel panel-default">

<a name="info"></a>
<div class="panel-heading">Course Info</div>
<div class="panel-body" markdown="block">

* __Course Title:__ {{ site.course_name }}
* __Course Number:__ {{ site.course_number }}-{{ site.course_section }}
* __Semester:__ {{ site.course_semester }}
* __Meeting Time:__ {{ site.course_time }}
* __Room:__ {{ site.course_room }}
* __Instructor:__ Joe Versoza
* __Contact:__ <a href="{{ site.contact_link }}">{{ site.contact_label }} {{ site.contact_note }}</a>
* __Email:__ jversoza at cs dot nyu dot edu
* __Office Hours:__ {{ site.office_hours }}
* __Office Hours Room:__  {{ site.office_hours_room }}
</div>
    </div>
  </div><!-- end col -->

  <div class="col-md-6">
    <div class="panel panel-default">
<a name="description"></a>
<div class="panel-heading">Course Description</div>
<div class="panel-body" markdown="block">

This course is a __practical introduction__ to creating __modern web applications__.

It will cover __full stack web development__ - from database design all the way through client side interactivity.  Students will use current server and client side web frameworks to build dynamic, data-driven sites.  Various tools to support development will also be introduced, such as version control and build systems.

__\*__ Basic knowledge of __HTML__ and __CSS__ and familiarity with using __command line__ tools are required.
</div>
    </div>
  </div><!-- end col -->

</div><!-- end row -->

<div class="row">

  <div class="col-md-6">
    <div class="panel panel-default">
<a name="topics"></a>
<div class="panel-heading">Topics</div>
<div class="panel-body" markdown="block">
* __JavaScript__ 
* __Server Side Programming__ (with Node and Express)
* __Storing and Retrieving Data__ (with a NoSQL database, such as MongoDB)
* __Client Side Build-Out__
* __Client Side Programming__ (both with vanilla JavaScript and using a JavaScript framework)
* __Realtime Web Applications__ (socket.io)
* __Development Tools__ (version control with git, task automation, static analysis tools, etc.)
* __Extra Topics Time Permitting__ (JS Framework like React, Intermediate CSS features like Flexbox, etc.)
</div>
    </div>
  </div><!-- end col -->

  <div class="col-md-6" name="quiz-policy" id="quiz-policy">
    <div class="panel panel-default">
<a name="homework"></a>
<div class="panel-heading">Quizzes</div>
<div class="panel-body" markdown="block">
Expect about __one quiz__ every __week__, which can be in one of the following formats:

* Take from home quizzes 
    * Submitted __electronically via NYU Classes__ 
    * Quizzes will be closed at the due date given
    * Quizzes are to be taken on your own
* In-class quizzes
    * Dates for in-class quizzes will be posted one week before quiz is given
    * Will be based on homework
    * Will be given at the beginning of class
* Make ups will be allowed for the following exceptions:
    1. illness, with documentation
    2. religious observance
    3. technical issues (NYU Classes down, Quiz not Appearing, etc.), with documentation

</div>
    </div>
  </div><!-- end col -->

</div><!-- end row -->

<div class="row" name="hw-policy" id="hw-policy">
  <div class="col-md-6">
    <div class="panel panel-default">
<a name="homework"></a>
<div class="panel-heading">Homework</div>
<div class="panel-body" markdown="block">
Expect about __one homework__ every __week__, with one final project assigned mid-semester:

* Homework must be turned in __electronically via git__ 
* Late homework will not be accepted (repositories are closed when homework is due)
    * Exceptions:
        1. illness or family/personal issue, with documentation
        2. religious observance
        3. technical issues (broken computer, github down, etc.), with documentation
    * Notification of illness / accommodation must be made before due date
    * Long term accommodations (for example, extra time on exams, etc.) must be made known prior to the first exam
* __Write your own code!__ This means:
    * Don't copy (clone, download, etc.) anyone else's code
    * Don't distribute/publish your code (including publishing to a public git repository or posting in a forum)
        * (You can publish your final project once the class is over)
    * The Director of Undergraduate Studies will handle any instances of cheating or software plagiarism
* __Help!__
    * Office hours and tutoring is available
    * If you use code from online resources outside of the course materials, annotate your code with comments and the link to the resource
    * High level discussions with other students is allowed
    * Help debugging from other students is allowed
    

{% comment %}
    * help debugging
    * high level discussions
    * no sending code
    * no cloning code
    * no sharing on public repositories
    * no sharing on piazza 
    * keep "write your own code"
{% endcomment %}



</div>
    </div>
  </div><!-- end col -->

  <div class="col-md-6">
    <div class="panel panel-default">
<a name="books"></a>
<div class="panel-heading">Books</div>
<div class="panel-body" markdown="block">

__Readings will be sourced from the following books__ (all are free to read online, but a hardcopy or ebook can purchased as well!): 

* [{{ site.book_js }}]( {{ site.book_js_link }}) by {{ site.book_js_author }} 
* [{{ site.book_js_2 }}]( {{ site.book_js_2_link }}) by {{ site.book_js_2_author }} 
* [{{ site.book_js_3 }}]( {{ site.book_js_3_link }}) by {{ site.book_js_3_author }} 
* [{{ site.book_js_4 }}]( {{ site.book_js_4_link }}) by {{ site.book_js_4_author }} 
* [{{ site.book_js_5 }}]( {{ site.book_js_5_link }}) by {{ site.book_js_5_author }} 
* [{{ site.book_js_6 }}]( {{ site.book_js_6_link }}) by {{ site.book_js_6_author }} 
* [{{ site.book_js_7 }}]( {{ site.book_js_7_link }}) by {{ site.book_js_7_author }} 
* [{{ site.book_js_8 }}]( {{ site.book_js_8_link }}) by {{ site.book_js_8_author }} 
* [{{ site.book_js_9 }}]( {{ site.book_js_9_link }}) by {{ site.book_js_9_author }} 

Significant material will be pulled from the following sites:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
* [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/)
* [2ality](http://www.2ality.com/)
* [IETF (Internet Engineering Task Force) Tools](https://tools.ietf.org)
* [OWASP (Open Web Application Security Project)](https://www.owasp.org/index.php/Main_Page)
* [NODESCHOOL](https://nodeschool.io/)
* [NCZOnline](https://www.nczonline.net/)
* documentation for [node](https://nodejs.org/en/docs/), [express](https://expressjs.com/en/api.html), [mongodb](https://docs.mongodb.com/manual/), [socket.io](http://socket.io/docs/), and [react](https://facebook.github.io/react/docs/hello-world.html).

</div>
    </div>
  </div><!-- end col -->
</div><!-- end row -->

<div class="row">

  <div class="col-md-6">
    <div class="panel panel-default">
<a name="grading"></a>
<div class="panel-heading">Grading</div>
<div class="panel-body" markdown="block">
* __25%__ - Homework
* __25%__ - Exam #1
* __25%__ - Exam #2
* __10%__ - Quizzes / Activities
* __15%__ - Final Project
</div>
    </div>
  </div><!-- end col -->



  <div class="col-md-6">
    <div class="panel panel-default">
<a name="Tutoring"></a>
<div class="panel-heading">Tutoring</div>
<div class="panel-body" markdown="block">
There is a __tutor available__ for the course.

* Location
    * __WWH 412__
* Hours
    * See pinned message on Piazza

{% comment %}
    * __Wednesday__  - 5pm - 7pm
    * __Thursday__ -  1pm - 3pm 
    * __Friday__  - 1pm - 3pm
{% endcomment %}

Additionally, the tutor will hold workshops based on student demand. Some workshops may include:

* commandline
* git
* http
* html
* css

</div>
    </div>
  </div><!-- end col -->
</div><!-- end row -->
