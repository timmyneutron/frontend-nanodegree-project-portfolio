/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
          {
            width: 360,
            suffix: "_1x",
            quality: 80
          }, {
            width: 455,
            suffix: "_1x",
            quality: 80
          }, {
            width: 720,
            suffix: "_1x",
            quality: 80
          }, {
            width: 360,
            suffix: "_2x",
            quality: 60
          }, {
            width: 455,
            suffix: "_2x",
            quality: 60
          }, {
            width: 720,
            suffix: "_2x",
            quality: 60
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/images_src/',
          dest: 'images/resp_images/'
        }]
      }
    },

    // /* Clear out the images directory if it exists */
    // clean: {
    //   dev: {
    //     src: ['images/resp_images/'],
    //   },
    // },

    //  Generate the images directory if it is missing
    // mkdir: {
    //   dev: {
    //     options: {
    //       create: ['images/resp_images/']
    //     },
    //   },
    // },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['responsive_images']);

};
