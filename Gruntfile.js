module.exports = function(grunt) {


	// Project configuration.
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9100,
					base: '.',
					keepalive: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('default', ['connect:server']);
	grunt.registerTask('server', ['connect:server']);
	grunt.registerTask('dev', [ 'default' ]);


};
