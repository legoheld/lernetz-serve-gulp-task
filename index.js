var path = require('path');
var gulp = require('gulp');
var merge = require('merge');
var run = require( 'gulp-run-command' ).default;

module.exports = function( options ) {
	
	
	var defaults = {
		folder: 'docker/dev',
		project: path.basename( process.cwd() )
	}
	
	// merge options with default values
	options = merge.recursive( defaults, options );
	
	// return object with up and down closures
	return {
		up: run( 
			[
				'docker-compose --project-name "' + options.project + '" up -d',
				'docker-compose --project-name "' + options.project + '" ps'
			], 
			{ cwd:options.folder }
		),
		down: run( 
			[
				'docker-compose --project-name "' + options.project + '" down --remove-orphans',
			],
			{ cwd:options.folder }
		)
	};
	
}