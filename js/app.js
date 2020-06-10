define(function(){
    angular.module('ascii-wars', ['ngRoute','ngSanitize'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/html/menu.html'
                })
                .when('/game', {
                    templateUrl: '/html/game.html',
                    controller: 'GameContoller as Game'
                })
                .otherwise({
                    redirectTo: '/'
                })
        })
        .init = function() {
            require(['controllers/game'], function(){
                angular.bootstrap(document, ['ascii-wars'])
            });
        }
})
