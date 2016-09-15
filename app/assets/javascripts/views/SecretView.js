var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li', //as we have the ul sitting on the page already, we just have to add the li and then append it to the page
  //this creates a new li and sets it up as this.el and this.$el


  render: function(){
    //we provided a model when we instantiated this view
    //save its content



    var content = app.reservations.where({
      flight_id: parseInt( $("#flightID").text() )
    });
      for (var i = 0; i < content.length; i+=1){
        var row = content[i].attributes.row;
        var column = content[i].attributes.column;

        var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
        var columnToAlpha = alphabet[column - 1];

        this.$el.text("Seat: " + row + columnToAlpha);
        var $div = $("#"+row+columnToAlpha);
        $div.css("background-color","green");
        // this.$el.prependTo("#secrets");
      }

      //
      // var rowCurrent = this.model.get("row"); //the content key on the model passed in
      // var columnCurrent = this.model.get("column"); //this is a number. Needs to be converted into alphabet
      //
      // var alphabetTwo = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
      // var columnToAlphaTwo = alphabetTwo[columnCurrent - 1];
      //
      // this.$el.text("Seat: " + rowCurrent + columnToAlphaTwo);
      // var $divTwo = $("#"+rowCurrent+columnToAlphaTwo);
      // $divTwo.css("background-color","green");
      // this.$el.prependTo("#secrets");
  }
});
