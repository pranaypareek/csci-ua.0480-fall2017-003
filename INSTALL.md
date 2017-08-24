prereqs
-----
* node + npm
	* use brew plz
* globally installed:
	* bower
	* grunt-cli

* create package json using node init
node init
* edit appropriately, add devDependencies for grunt?  perhaps do this without having to add devDeps and just try adding?
* install grunt-jekyll
* hand code gruntfile.js to include jekyll
* test out your jekyll build
* add a few packages
npm install grunt-contrib-less --save-dev
npm install grunt-contrib-watch --save-dev
* create a bower.json file
* install bootstrap, save the deps
bower install bootstrap -S
* jekyll connect
* set up jekyll watch
	* what files to watch for

http://blog.elenakolevska.com/using-grunt-with-laravel-and-bootstrap/
http://www.rosengren.me/blog/automate-jekyll-with-grunt/

jekyll build into site
grunt config in dir?
and/or jekyll w/ less plugin
version css and less files
???


vim plugins
-----
* start w/ vundle
* jshint
* bufexplorer
* coloresque
* surround?

tip on command t
Note: If you are on OS X Mavericks and compiling against MacVim, the default
system Ruby is 2.0 but MacVim still links against the older 1.8.7 Ruby that is
also bundled with the system; in this case the build command becomes:

  cd ~/.vim/bundle/command-t/ruby/command-t
  /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby extconf.rb
  make

{% comment %}
<!--
<!DOCTYPE html>
<html>

  {% include head.html %}

    <body>

    {% include header.html %}
	<div class="container">
	<div class="starter-template">
		<h1>Syllabus</h1>
		<p class="lead">csci-ua.0480-fall2014</p>
		{{ content }}
	</div>
    </div>


    </body>
</html>
-->
{% endcomment %}
