'use strict';
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        build: {
            files: [{
                expand: true,
                cwd: 'working/css',
                src: ['*.css'],
                dest: 'dist/css',
                ext: '.min.css'
            }]
        }
      },
      uglify: {
        options: {
          mangle: false
        },
        build: {
          files: [{
            expand: true,
            cwd: 'working/js',
            src: ['*.js'],
            dest: 'dist/js',
            ext: '.min.js'
          }]
        }
      },
      copy: {
        build: {
          files: [{
            expand: true,
            src: ['working/resources/**'],
            dest: 'dist/resources',
          },
          {
            expand: true,
            src: ['working/fonts/**'],
            dest: 'dist/fonts',
          }]
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy')
    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'uglify', 'copy']);
};
