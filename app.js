(function() {
    var app = angular.module('developerBlog', ['blog-directives']);


    app.controller('BlogController', function() {
        this.myDirectives = pages;
    });

    var pages = [{
        name: 'Start'
    }, {
        name: 'Resum�'
    }, {
        name: 'My Projects'
    }, {
        name: 'Reviews'
    }, {
        name: 'Contact'
    }
    ];
})();