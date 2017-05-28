// site/js/views/book.js
var app = app || {};

app.BookView = Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template( $('#bookTemplate').html() ),
	render: function() {
		// tmpl is a function that takes a JSON object and returns html
		// this.el is what we defined in tagName. use $el to get access // to jQuery html() function
		this.$el.html( this.template( this.model.toJSON() ));
		return this;
	},
	events: {
            'click .delete': 'deleteBook',
            'click .update': 'updateBook'
	},
	deleteBook: function() { // Delete model
		this.model.destroy();
		// Delete view
		this.remove();
	},
  updateBook: function(e) {
    console.log(this);
    var thisModel = this.model; // Crazy scope stuff
    //console.log("Was that a model?");
    e.preventDefault();
    var formData = {};
    $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
      if( $( el ).val() != '' ){
         //console.log(thisModel);
         //console.log("Was that this.model?");
         thisModel.set(el.id,$(el).val());
      }
    });
    this.model.save(); // updates in database!
    this.render();
    //render(); // doesn't render to screen
  }
});
