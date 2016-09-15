var app = app || {}

app.seatSelectView = Backbone.View.extend({
  el: ".planeDiagram",

  events: {
    'click div': 'colorChange',
  },

  colorChange: function(e){
    console.log("dasdfsfds");
  }
});
