var app = angular.module('smilefreeApp', []);
	// reverse custom filter
  	app.filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
	  };
	});
	app.controller('galleryCtrl', function($scope, $http) {
		// debugger
		// get service
	  $http.get("/assets/documents/gallery.json")
	  .then(function(response) {
	  	// debugger
	      $scope.myWelcome = response.data;
	  });
	}); 