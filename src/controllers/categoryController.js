'use strict';

app
    .controller('categoryIndex', function ($scope) {
    })

    .controller('categoryList', function ($rootScope, $scope, categoryProvider, $location) {
        $scope.categories = categoryProvider.getCategories();

        $scope.removeCategorie = function (category){
            categoryProvider.remove(category);

        }

        $scope.editCategory = function (category){
          $rootScope.categorytoEdit = category;
          $location.url('/categories/edit');
        }
    })

    .controller('categoryCreate', function ($scope, categoryProvider) {
        categoryProvider.getCategories();

        $scope.createCategory = function (category) {
            categoryProvider.create(category);
        }
    })

    .controller('categoryEdit', function ($rootScope, $scope, categoryProvider, itemProvider, $location) {
        $scope.categories = categoryProvider.getCategories();
        $scope.category = $rootScope.categorytoEdit;

        $scope.createCategory = function (category) {
            categoryProvider.update(category);
            $location.url('/categories/');
        }
    })
;