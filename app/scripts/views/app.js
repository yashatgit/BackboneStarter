'use strict';
define([
  'backbone',
  'templates'
], function(Backbone, JST) {
  var App = Backbone.View.extend({

    template: JST['app/scripts/templates/app.ejs'],

    initialize: function() {},

    render: function() {
      $('.app').html(this.template());
    }
  });

  return App;
});
