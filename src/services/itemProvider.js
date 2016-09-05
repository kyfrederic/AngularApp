'use strict';

app.service('itemProvider', function ($firebase) {
	    var ref = new Firebase("https://myfredpojet.firebaseio.com/items");
        var sync = $firebase(ref);
        //sync.$set('items', items); 
        var items = sync.$asArray();

    this.getItems = function () {
        return items;
    }
// l'ajout refraichit automatiquement la collection dans firebase (sync.$asArray();) donc pas besoin de return
    this.create = function (item) {
        //items.push(item);
        items.$add(item);
    }

    this.remove = function(item){
        items.$remove(item);
    }

    this.update = function(item){
        items.$save(item);
    }
});