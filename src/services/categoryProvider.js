'use strict';


app.service('categoryProvider', function ($firebase) {
        var ref = new Firebase("https://myfredpojet.firebaseio.com/");
        var sync = $firebase(ref);
        //sync.$set('categories', categories); 

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.push(category);

        return items;
    }
});