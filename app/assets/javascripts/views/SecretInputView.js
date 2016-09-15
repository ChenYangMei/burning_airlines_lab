var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",
  //this was added in the AppView


  events: {
    'click button': 'createSecret', //event for when someone clicks the button
    // 'keydown textarea' : 'checkForEnter' //so that you can press enter when entering a new secret and it is the same as submit
  },

  // checkForEnter: function (e){
  //   //if the user clicked the enter key, run the createSecret function
  //   var ENTER_KEY = 13;
  //   if(event.which === ENTER_KEY){
  //     e.preventDefault(); //ensures that the enter key doesn't create a linebreak when it is submitted
  //     this.createSecret();
  //     console.log("you clicked enter");
  //   }
  // },

  createSecret: function (e) { //event for when someone clicks the button
    var newSecret = new app.Reservation();
    var userInputRow = this.$el.find("#textarea").val(); //i.e the user input text in the input field
    var userInputColumn = this.$el.find("#textareatwo").val();

    var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    var newUserInputColumn = alphabet.indexOf(userInputColumn) + 1; //alphabet converted into number
    console.log(newUserInputColumn);

    newSecret.set({
      row: userInputRow,
      column: newUserInputColumn
    });

    //newSecret doesnt have an ID, so this will send a POST req to the url (as set urlroot) defied on the model.POST req to secrets runs the create method (in the secrets controller. The content of that is defined in secrets.jso.builder)
    newSecret.save(); //this will send a post request to /secrets, at which point it creates it
    app.reservations.add(newSecret); //this fires the add event listener on app.secrets, which puts this particular secret on the page

    this.$el.find("#textarea").val('').focus(); //this says to clear the textarea section once a secret has been entered and .focus puts the cursor on the screen
    this.$el.find("#textareatwo").val('').focus();
  },

  render: function(){
    //this will be the content loaded into the green rectangle!
    var templateMarkup = $("#secretInputViewTemplate").html();

    this.$el.html(templateMarkup);
  }
});
