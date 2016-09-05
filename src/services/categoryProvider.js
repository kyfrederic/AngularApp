'use strict';

// suppression de la arraylist des categories car maintenant des la base de données

app.service('categoryProvider', function ($firebase) {
    // creation d'une reference
        var ref = new Firebase("https://myfredpojet.firebaseio.com/categories");
        var sync = $firebase(ref);
        var categories = sync.$asArray();

        // synchronisation : il faut le commentation après la synchronisation sinon elle va, a chque foi q'on ouvrira une page categorie ecraser les données dans la base
        //sync.$set('categories', categories); 

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.$add(category);
    }

    this.remove = function(category){
        categories.$remove(category);

    }

    this.update = function(category){
        categories.$save(category);
    }
});