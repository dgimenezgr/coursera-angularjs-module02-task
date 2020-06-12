(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.checkItem = function (itemIndex) {
    ShoppingListCheckOffService.checkItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  alreadyBoughtList.uncheckItem = function (itemIndex) {
    ShoppingListCheckOffService.uncheckItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
    {
      "name": "cookies",
      "number": 10
    },
    {
      "name": "sugary drinks",
      "number": 5
    },
    {
      "name": "burger buns",
      "number": "1 pack"
    },
    {
      "name": "meaty burgers",
      "number": 15
    },
    {
      "name": "cheddar cheese",
      "number": "a lot of"
    },
    {
      "name": "bacon",
      "number": "3 kg"
    },
    {
      "name": "pickles",
      "number": "1 jar"
    }
  ];

  // List of to buy items
  var alreadyBoughtItems = [];

  service.checkItem = function (itemIndex) {
    var boughtItem = toBuyItems[itemIndex];    
    toBuyItems.splice(itemIndex, 1);
    alreadyBoughtItems.push(boughtItem)
  };

  service.uncheckItem = function (itemIndex) {
    var toBuyItem = alreadyBoughtItems[itemIndex];    
    alreadyBoughtItems.splice(itemIndex, 1);
    toBuyItems.push(toBuyItem)
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
