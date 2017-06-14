module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		build: "build/<%= pkg.name %>/",
		useminPrepare: {
			html: {
				src: "index.html",
				options: {
					staging: '.mytmp',
					dest: 'mydist',
					flow: {
						steps: {
							css: ['cssmin']
						},
						post: {
							css: [{
								name: 'uglify',
								createConfig: function(context, block){
									var generated = context.options.generated;
									generated.options = {
										keepBreaks: true
									}
								}
							}]
						}
					}
				}
			}
		},
		usemin: {
			html: 'index.html',
			options: {
				assetsDirs: ["/", 'js/'],
				patterns: {
					html: [
						[
							/(css\/style\.min\.123)\.css/,
							'log info'
						]
					]
				}
			}
		},
		concat: {
			js: {
				options: {
					banner: "/*! widget.js and controller.js concat start */\n",
					footer: "\n/*! widget.js and controller.js concat end */",
					stripBanners: true
				},
				files: [
					{src: ["js/widget.js", "js/controller.js"], dest: "<%= build %>js/common.js"}
				]
			},
			css: {
				options: {
					banner: "/*! reset.css and style.css concat start */\n",
					footer: "\n/*! reset.css and style.css concat end */",
					stripBanners: true
				},
				files: [
					{src: ["css/reset.css", "css/style.css"], dest: "<%= build %>css/style.css"}
				]
			}
		},
		htmlmin: {
			options: {
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				useShortDoctype: true,
				removeAttributeQuotes: true,
				removeComments: false,
				removeEmptyAttributes: true,
				removeEmptyElements: true,
				removeOptionalTags: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			},
			index: {
				files: [
					{src: "index.html", dest: "<%= build %>index.min.html"}
				]
			}
		},
		cssmin: {
			options: {
			},
			files: {src: "<%= build %>css/style.css", dest: "<%= build %>css/style.min.css"}
		},
		uglify: {
			options: {
				mangle: true,
				report: "min",
				compress: {
					drop_console: true
				},
				footer:'\n/*! <%= pkg.name %> last modified at <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			files: {src: "<%= build %>js/common.js", dest: "<%= build %>js/common.min.js"}
		},
		image_sprite: {
			options: {
				cssPath: 'tmp',
				vertical: true,
				margin: 10
			},
			sprite: {
				options: {
					cssFile: 'sprite.css'
				},
				files: {
					'tmp/sprite.png': ['img/*.png']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-image-sprite');

	// grunt.registerTask('default', ['useminPrepare', 'cssmin:generated', 'usemin']);
	grunt.registerTask('default', ['image_sprite']);
}