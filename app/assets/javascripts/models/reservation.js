var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",

  defaults: {
      row: NaN,
      column: NaN
  },

  initialize: function() {
    console.log("a new reservations has just been made.");
  }
});
