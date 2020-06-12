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

  showList.uncheckItem = function (itemIndex) {
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
      "name": "meaty burgers",
      "number": 15
    }
  ];

  // List of to buy items
  var alreadyBoughtItems = [
    {
      "name": "kale",
      "number": 1
    }
  ];

  service.checkItem = function (itemIndex) {
    toBuyItems.splice(itemIndex);
    alreadyBoughtItems.push(itemIndex)
  };

  service.uncheckItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    var toBuyItems = toBuyItems;
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
