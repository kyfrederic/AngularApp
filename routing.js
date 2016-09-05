'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'itemIndex',
                templateUrl: 'views/item/index.html'
            })
            .when('/items/', {
                controller: 'itemList',
                templateUrl: 'views/item/list.html'
            })
            .when('/items/new', {
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html'
            })
            .when('/categories/', {
                controller: 'categoryList',
                templateUrl: 'views/category/list.html'
            })
            .when('/categories/new', {
                controller: 'categoryCreate',
                templateUrl: 'views/category/create.html'
            })
    }
);