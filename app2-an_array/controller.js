angular.module('arrayApp').controller('arrayController', function($scope, arrService) {

    $scope.dataFromService = arrService.returnData();



})
