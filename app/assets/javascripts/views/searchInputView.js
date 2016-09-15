var app = app || {};

app.SearchInputView = Backbone.View.extend({
  el: "#searchForm",

  events: {
    "click .bla": "search",
    'keydown .input': 'checkForEnter'
  },

  checkForEnter: function (e) {
    var ENTER_KEY = 13;
    if ( event.which === ENTER_KEY ) {
      e.preventDefault();
      this.createSecret();
    }
  },

  search: function(e){
    e.preventDefault();
    var $origin = $("#origin").val();
    var $destination = $("#destination").val();
    console.log($origin);
    console.log($destination);
    
    var flightView = new app.FlightView();
    flightView.render($origin, $destination);
  },

  render: function(){
    var $searchInputViewTemplate = $("#searchInputViewTemplate").html();
    this.$el.html($searchInputViewTemplate);
  }
});
