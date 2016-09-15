var app = app || {};

$(document).ready(function(){
  app.reservations = new app.Reservations();
  app.reservations.fetch();

  app.router = new app.Router();
  Backbone.history.start(); 

});
