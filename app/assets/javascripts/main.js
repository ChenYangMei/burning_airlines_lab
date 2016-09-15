var app = app || {};

$(document).ready(function(){
  app.reservations = new app.Reservations();
  app.reservations.fetch();

  app.flights = new app.Flights();
  app.flights.fetch();
});
