(function () {
    "use strict";

    angular.module('lits.todo-app')
        .controller('AddItemController', AddItemController);

    function AddItemController($scope, $location, TodoItemsService) {
        $scope.addItem = addItem;

        //
        // Public methods
        //

        function addItem() {

            TodoItemsService.items.push({
                id: TodoItemsService.items.length + 1,
                title: $scope.itemText
            });

            $location.path('/');
        }
    }
})();