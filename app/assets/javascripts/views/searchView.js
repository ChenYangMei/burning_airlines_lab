var app = app || {};

app.SearchView = Backbone.View.extend({
  el: "#search",

  render: function(){

    var searchViewTemplate = $("#searchViewTemplate").html();
    console.log(searchViewTemplate);
    this.$el.html( searchViewTemplate );

    var searchInputView = new app.SearchInputView();
    searchInputView.render();

  }
});
