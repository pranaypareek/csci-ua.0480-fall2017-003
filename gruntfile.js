module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
                    port: grunt.option('port') || 4000,
					base: '_site'
				},
			}
		},

		jekyll: {
			build: {
				serve: false,
                incremental: true
			},

            options: {
                incremental: true
            }

		},

		less: {
			dev: {
				options: {
					compress: true,
				},
				files: {
					"./resources/css/pdf.css":"./resources/less/pdf.less",
					"./_site/resources/css/pdf.css":"./resources/css/pdf.css",
					"./resources/css/styles.css":"./resources/less/base.less",
					"./_site/resources/css/styles.css":"./resources/less/base.less",
					"./resources/css/slides.css":"./resources/less/slides.less",
					"./_site/resources/css/slides.css":"./resources/less/slides.less"
				}
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			site: {
				src: [
					'./bower_components/jquery/dist/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
				],
				dest: './resources/js/site.js',
			}//,
			/*slides: {
				src: [ './bower_components/reveal.js/lib/js/head.js',
					'./bower_components/reveal.js/lib/js/reveal.js',
					'./bower_components/reveal.js/plugin/zoom-js/zoom.js',
					'./bower_components/reveal.js/plugin/notes/notes.js'
				],
				dest: './resources/js/slides.js',
			}*/
		},

		copy: {
			slides: {
				nonull: true,
				expand: true,
				cwd: 'bower_components/',
				src: 'reveal.js/**',
				dest: 'resources/lib/'
			},
		},

		watch: {
			less: {
				files: ['resources/less/*.less'],
				tasks: 'less'
			},
			jekyll: {
				files: [ 
					'*.html',
					'*.yml',
					'*.markdown',
					'slides/*/*.markdown',
					'code/*.*',
					'homework/*.*',
					'slides/*/*.html',
					'resources/js/**.js',
					'_posts/**',
					'_includes/**',
					'_layouts/**',
					'!**/node_modules/**',
					'!**/_site/**',
					'!_site',
					'!_site/**',
					'!**/bower_components/**',
					'!bower.json',
					'!gruntfile.js',
					'!package.json',
					'!README.md'
          		],
				options: {
					livereload: true,
				},
				tasks: 'jekyll',
			}
		},
	});

	grunt.registerTask('build', 'jekyll:build');
	grunt.registerTask('watch', ['watch:less', 'watch:jekyll']);
	grunt.registerTask('dev', ['concat', 'copy', 'build', 'connect', 'watch']);

	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
};





