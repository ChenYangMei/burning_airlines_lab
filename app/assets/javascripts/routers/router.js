var app = app || {};


//this is only talking about the client-side URLs i..e the things after the #
app.Router = Backbone.Router.extend({
  routes: {
    '': 'initializeSecretsApp' //empty client-side URL. In the case that is hit, the function initializeSecretsApp willl be run
  },

  initializeSecretsApp: function() {
    console.log("initializeSecretsApp was called");
    var av = new app.AppView(); //Creates a new instance of the AppView (similar to application.html.erb -- IT JUST LOADS OTHER VIEWS INTO IT (like the yield statement))
    av.render(); //this is the same as the things we were doing in the browser
  }

});
