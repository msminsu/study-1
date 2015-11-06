module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jade: {
			compile: {
				files: {
					'dist/index.html': ['src/index.jade']
				},

				options: {
					pretty: true
				}
			}
		},

		watch: {
			jade: {
				files: 'src/*.jade',
				tasks: ['jade']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jade, watch']);
};
