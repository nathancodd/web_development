'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},
		watch: {
			files: 'css/*.scss',
			tasks: ['sass']
		}
	});

	grunt.registerTask('css',['sass']);
};