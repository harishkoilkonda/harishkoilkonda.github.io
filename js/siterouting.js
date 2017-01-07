angular
		.module("myApp")
		.config(function($routeProvider){

	$routeProvider

				.when("/home",{
						controller:'homeController',
						templateUrl:"./Home.html"
						
				})

				.when("/West",{
						controller:'homeController',
						templateUrl:"./West.html"
						
				})

				.when("/MidWest",{
						controller:'homeController',
						templateUrl:"./MidWest.html"					
	
				})
				.when("/NorthEast",{
						controller:'homeController',
						templateUrl:"./NorthEast.html"
						
				})
				.when("/South",{
						controller:'homeController',
						templateUrl:"./South.html"
						
				})
				.when("/Gallery",{
						controller:'homeController',
						templateUrl:"./Gallery.html"
						
				})
				.when("/ContactUs",{
						controller:'homeController',
						templateUrl:"./ContactUs.html"
						
				})
				.otherwise("/home");

});
