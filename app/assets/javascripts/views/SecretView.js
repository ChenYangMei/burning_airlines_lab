var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li', //as we have the ul sitting on the page already, we just have to add the li and then append it to the page
  //this creates a new li and sets it up as this.el and this.$el


  render: function(){
    //we provided a model when we instantiated this view
    //save its content
      var row = this.model.get("row"); //the content key on the model passed in
      // var col = this.model.get("column");
      this.$el.text(row);

      var $div = $("#"+row+"B");
      console.log($div);
      // $div.attr("id",column);
      $div.css("background-color","green");
      this.$el.prependTo("#secrets");
  }
});
