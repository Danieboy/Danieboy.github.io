(function() {
    var app = angular.module('developerBlog', ['blog-directives']);


    app.controller('BlogController', function() {
        this.myDirectives = pages;
    });

    var pages = [{
        name: 'Start'
    }, {
        name: 'Resume'
    }, {
        name: 'My Projects'
    }, {
        name: 'Reviews'
    }, {
        name: 'Contact'
    }
    ];
})();