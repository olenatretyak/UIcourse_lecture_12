(function () {
    "use strict";

    angular.module('lits.todo-app')
        .controller('MainPageController', MainPageController);

    function MainPageController($scope, $location, TodoItemsService) {
        $scope.todoItems = TodoItemsService.items;

        $scope.goToAddPage = goToAddPage;

        //
        // Public methods
        //

        function goToAddPage() {
            $location.path('/add-item');
        }
    }
})();