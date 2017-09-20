# lernetz-serve-gulp-task
A gulp task that starts/stops docker containers with docker-compose. It executes docker-compose command with gulp-run-command. Means that docker-compose must be installed on the system.

## Usage
The following example will show how to use the serve task.
Keep an eye on the trailing function call. This will return an object with the corresponding up/down functions to register.

```javascript
var gulp = require('gulp');
var serve = require( 'lernetz-serve-gulp-task' )();

gulp.task( 'serve:up', serve.up );
gulp.task( 'serve:down', serve.down );
```

## Options
The task accepts an parameter object with the following attributes:

 * **folder**: The path to the folder where the docker-compose files lies
 * **project**: The project name for docker to start. Every container will be prefixed with that project name.

```javascript
var gulp = require('gulp');
var serve = require( 'lernetz-serve-gulp-task' )( { folder:"docker/folder", project:"name" } );

gulp.task( 'serve:up', serve.up );
gulp.task( 'serve:down', serve.down );
```