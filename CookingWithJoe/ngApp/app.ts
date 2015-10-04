﻿namespace CookingWithJoe {

    angular.module('CookingWithJoe', ['ngResource', 'ngRoute', 'ui.bootstrap'])
        .config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
            $routeProvider.when('/', {
                templateUrl: '/ngApp/home.html',

            }).when('/index', {
                templateUrl: '/ngApp/home.html',

            }).when('/edit/:id', {
                templateUrl: '/ngApp/edit.html',
                controller: 'RecipeEditController as vm'

            }).when('/delete/:id', {
                templateUrl: '/ngApp/delete.html',
                controller: 'RecipeDeleteController as vm'

            }).when('/addrecipe', {
                templateUrl: '/ngApp/addrecipe.html',
                controller: 'RecipeAddController as vm'

            }).when('/recipe', {
                templateUrl: '/ngApp/recipe.html',
                controller: 'RecipeListController as vm'

            }).when('/editreview/:id', {
                templateUrl: '/ngApp/editreview.html',
                controller: 'ReviewEditController as vm'

            }).when('/deletereview/:id', {
                templateUrl: '/ngApp/deletereview.html',
                controller: 'ReviewDeleteController as vm'

            }).when('/addreview', {
                templateUrl: '/ngApp/addreview.html',
                controller: 'ReviewAddController as vm'

            }).when('/reviews', {
                templateUrl: '/ngApp/reviews.html',
                controller: 'ReviewListController as vm'

            }).when('/login', {
                templateUrl: '/ngApp/login.html',
                controller: 'AccountController as vm'

            }).when('/register', {
                templateUrl: '/ngApp/register.html',
                controller: 'AccountController as vm'

            }).when('/about', {
                templateUrl: '/ngApp/about.html'

            }).when('/contact', {
                templateUrl: '/ngApp/contact.html'

            }).when('/categories', {
                templateUrl: '/ngApp/categories.html',


            });

            $locationProvider.html5Mode(true);

        });



    angular.module('CookingWithJoe').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('CookingWithJoe').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });;

}