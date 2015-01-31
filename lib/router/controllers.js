AppController = RouteController.extend({
  layoutTemplate: 'app_layout'
});

MainController = AppController.extend({
  // EXAMPLE:
  // waitOn: function () {
  //   return Meteor.subscribe('products');
  // },
  // data: function () {
  //   return {
  //     products: Products.find({}, {sort: {numberOfVotes: -1, name: -1}})
  //   };
  // }
});
