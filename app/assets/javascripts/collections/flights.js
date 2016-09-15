var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",

  model: app.Flight,

  initialize: function(){

    var searchView = new app.SearchView();
    searchView.render();

  }
});
