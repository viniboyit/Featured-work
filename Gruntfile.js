module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: '320px',
            width: '360',
            suffix: '_360',         
          },{
            name: '640px',
            width: '640',
            suffix: '_640px', 
          },{
            name: '1024px',
            width: '1024',
            suffix: '_1024px',           
          },{
            name: '2000px',
            width: '2000',
            suffix: '_2000px',
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
