var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#flights",

  render: function(originInput, destinationInput){

    var allFlights = app.flights;
    console.log(allFlights);

    var flightResults = allFlights.where({
      origin: originInput,
      destination: destinationInput
    });

    for (var i = 0; i < flightResults.length; i++) {
      var flight = flightResults[i].toJSON();

      var $flightViewTemplate = $("#flightViewTemplate").html();
      var dynamicMarkupTemplate = _.template( $flightViewTemplate );
      var compiledTemplate = dynamicMarkupTemplate( flight );
      this.$el.html(compiledTemplate);
    }
  }

});
