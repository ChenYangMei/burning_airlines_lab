var app = app || {};
var $flightID = $("#flightID");
console.log($flightID);


$(document).ready(function(){
  app.reservations = new app.Reservations();
  app.reservations.fetch();
  // var content = app.reservations.where({flight_ID: $("#flightID").text()});
  // console.log(content);


  app.router = new app.Router();
  Backbone.history.start();



});
