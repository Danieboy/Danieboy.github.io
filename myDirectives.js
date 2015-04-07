var app = angular.module('blog-directives', []);

app.directive("start", function() {
    return {
        restrict: "E",
        templateUrl: "start.html"
    }
});

app.directive("resume", function() {
    return {
        restrict: "E",
        templateUrl: "resume.html"
    }
});

app.directive("myProjects", function() {
    return {
        restrict: "E",
        templateUrl: "myProjects.html"
    }
});

app.directive("reviews", function() {
    return {
        restrict: "E",
        templateUrl: "reviews.html"
    }
});

app.directive("contact", function() {
    return {
        restrict: "E",
        templateUrl: "contact.html"
    }
});
