
	var homeController=function homeController($scope){
		$scope.welcometag="Welcome to Sightseeing Place in USA";

	};

	angular
			.module("myApp")
			.controller("homeController",homeController);
