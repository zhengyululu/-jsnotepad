module.exports=function(grunt){
    grunt.initConfig({
        eslint: {
            options: {
                configFile: '.eslintrc.json'
            },
            target: ['./js/*.js']
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: './css/*.css'
        },
        htmlhint: {
            options: {
                htmlhintrc: '.htmlhintrc'
            },
            src: '*.html'
        },
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'dist/bundle.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'dist/bundle.css'
            }
        },
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./index.html',
                dest:'dist/index.min.html'
            }
        },
        cssmin:{
            './dist/bundle.min.css':'dist/bundle.css'          
        },
        uglify:{
            './dist/bundle.min.js':'dist/bundle.js'    
        },

    });
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default',['htmlhint', 'csslint','eslint','concat','htmlmin','cssmin','uglify'])
}