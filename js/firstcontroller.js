
	var myFirstController = function myFirstController($scope) {
    var self = this;
    $scope.name = 'Avinash';
};

angular
    .module('myApp',[])
    .controller('myFirstController', myFirstController);
