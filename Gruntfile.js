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
		},

		exec: {
			s3sync: {
				//cmd: "find . -type f -name '*.php' -exec php -l {} ;",
				cmd: 'aws s3 sync --exclude ".git/*" --exclude "node_modules/*" --exclude "Gruntfile.js" --exclude "package.json" . s3://www.dawnpatrol.vc --delete',
				callback: function (error, stdout, stderr) {
					grunt.log.write('stdout: ' + stdout);
					grunt.log.write('stderr: ' + stderr);
                
					if (error !== null) {
						grunt.log.error('exec error: ' + error);
					}
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-exec');

	// Default task(s).
	grunt.registerTask('default', ['connect:server']);
	grunt.registerTask('server', ['connect:server']);
	grunt.registerTask('deploy', ['exec:s3sync']);
	grunt.registerTask('dev', [ 'default' ]);

};
