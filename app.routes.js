(function () {
    "use strict";

    angular.module('lits.todo-app')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main-page/main-page.tpl.html',
                controller: 'MainPageController'
            })
            .when('/add-item', {
                templateUrl: 'add-item/add-item.controller.js',
                controller: 'AddItemController'
            });
    }
})();