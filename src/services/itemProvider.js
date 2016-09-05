'use strict';

app.service('itemProvider', function ($firebase) {
	    var ref = new Firebase("https://myfredpojet.firebaseio.com/");
        var sync = $firebase(ref);
        //sync.$set('items', items); 

    this.getItems = function () {
        return items;


    }

    this.create = function (item) {
        items.push(item);

        return items;
    }
});