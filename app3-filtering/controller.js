angular.module('filterApp').controller('mainCtrl', function($scope, mainSvc) {

$scope.peopleList = mainSvc.returnPeople();

})
