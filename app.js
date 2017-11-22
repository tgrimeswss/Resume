var ViewModel = {

  toggleVisibility : function(element) {
    if ($(element).css('display') == 'none') {
      $(element).empty();
      $(element).css('display','block');
    }
    else {
      $(element).css('display','none');
    }
  },

  displayInfo : function() {
    var self = this;//'self' refers to the currently selected data object
    ViewModel.toggleVisibility('.'+self.id);/*Toggles the class on each list
    menu element. There was a class created on each list element using KO JS
    through the CSS attribute*/
    appendElements(self);
  },
//------------------------------------------------------------------------------
  titleArray : ko.observableArray(),
  headerTitleArray : ko.observableArray(),

  titleElements : function() {
    for (x = 0; x < data.length; x++) {
      ViewModel.titleArray.push(data[x]);
    }
  },

  headerTitleElements : function() {
    for (x = 0; x < headerData.length; x++) {
      ViewModel.headerTitleArray.push(headerData[x]);
    }
  },

  init : function() {
    ViewModel.titleElements();
    ViewModel.headerTitleElements();
  }

};


ko.applyBindings(ViewModel);
ViewModel.init();
