var ViewModel = {

  toggleVisibility : function(element) {
    if ($(element).css('display') == 'none') {
      $(element).empty();//Empties the contents in the showInfo element
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

  titleElements : function() {
    for (x = 0; x < data.length; x++) {
      ViewModel.titleArray.push(data[x]);
    }
  },

  init : function() {
    ViewModel.titleElements();
  }

};
ko.applyBindings(ViewModel);
ViewModel.init();
