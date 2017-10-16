var app = angular.module('smilefreeApp', []);

	app.controller('galleryCtrl', function($scope, $http) {
		var vm = this;
		// debugger
		$scope.kkn = function(search){
	  	$scope.search = search;
	  };
		// get service
	  $http.get("/assets/documents/gallery.json")
	  .then(function(response) {
	  	// debugger
	      $scope.myWelcome = response.data;
	  }); 
	}); 