'use strict';

app
    .controller('itemIndex', function ($scope) {

    })

    .controller('itemList', function ($rootScope, $scope, itemProvider, $location) {
        $scope.items = itemProvider.getItems();

        $scope.removeItem = function (item){
          itemProvider.remove(item);
        }

          $scope.editItem = function (item){
          $rootScope.itemtoEdit = item;
          $location.url('/items/edit');


        }
    })

    .controller('itemCreate', function ($scope, categoryProvider, itemProvider) {
        $scope.categories = categoryProvider.getCategories();
        //$scope.items = itemProvider.getItems();

        $scope.save = function (item) {
            itemProvider.create(item);
        }
    })

    .controller('itemEdit', function ($rootScope, $scope, categoryProvider, itemProvider, $location) {
        $scope.categories = categoryProvider.getCategories();
        $scope.item = $rootScope.itemtoEdit;

        $scope.save = function (item) {
            itemProvider.update(item);
            $location.url('/items/');
        }
    })
;