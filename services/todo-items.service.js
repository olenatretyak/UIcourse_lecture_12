(function () {
    "use strict";

    angular.module('lits.todo-app')
        .factory('TodoItemsService', TodoItemsService);

    function TodoItemsService() {
        return {
            items: getItems()
        };

        //
        // Public methods
        //

        function getItems() {
            return [
                {
                    id: 1,
                    title: 'Crate new project'
                },
                {
                    id: 2,
                    title: 'Create module'
                },
                {
                    id: 3,
                    title: 'Create main controller'
                }
            ];
        }
    }
})();