var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  //el or tagName
    //assigns this.el and this.$el
    //If we use el it means reference an existing item or element
    //If we use tagname, it means create a new element


  //events
  //event functions

  render: function(){
    console.log("An instance of the app.AppView was created");

    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    //effectively, we are loading both the appViewTemplate and the SecretInputView using this broader render function
    var secretInputView = new app.SecretInputView();
      //Doesn't need to represent any information (i.e. there is no collection or model it is trying to show)
    secretInputView.render();


    //Nee to get markup from the script tag in app.html.erb
    //CHange the #app htmlt o be that markup
  }
  //render
});
