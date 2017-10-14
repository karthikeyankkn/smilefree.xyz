var app = angular.module('smilefreeApp', []);
	app.controller('galleryCtrl', function($scope, $http) {
		debugger
	  $http.get("assets/documents/gallery.json")
	  .then(function(response) {
	  	debugger
	      $scope.myWelcome = response.data;
	  });
	}); 