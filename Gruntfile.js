module.exports = function (grunt) {

    // This banner gets inserted at the top of the generated files, such a minified CSS
    var bannerContent = '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * Version: <%= pkg.version %>\n' +
        ' * Build date: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n' +
        ' */\n\n';

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    config: 'config.rb'
                }
            }
        },
        cssnano: {
            options: {
                sourcemap: false,
                discardComments: {removeAll: true}
            },
            dist: {
                files: {
                    'app/_/css/styles.min.css': 'app/_/css/styles.css'
                }
            }
        },
        watch: {
                       sass: {
                files: ['_sass/**/*.scss'],
                tasks: ['compass']
            },
            css: {
                files: ['app/_/css/styles.css'],
                tasks: ['cssnano']
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['compass', 'cssnano']);

};
