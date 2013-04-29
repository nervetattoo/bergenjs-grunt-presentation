/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      shower: {
          files: "src/*",
          tasks: "shower"
      },
      connect: {
          files: "src/",
          tasks: "connect"
      }
    },

    connect: {
        server: {
            options: {
                port: 9091,
                base: "./",
                keepalive: true
            }
        }
    },

    shower: {
        bergenjs: {
            title: "BergenJS",
            src: "src/intro.md",
            styles: "src/styles.css"
        },
        grunt: {
            title: "BergenJS Grunt",
            src: "src/index.md",
            styles: "src/styles.css"
        }
    },

    curl: {
        'scripts/script.js': 'http://shwr.me/shower/shower.min.js'
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shower-markdown');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-curl');

  // Default task.
  grunt.registerTask('present', ['curl', 'shower', 'connect']);
  grunt.registerTask('default', ['jshint']);

};