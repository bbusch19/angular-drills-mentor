angular.module('apiApp').controller('mainCtrl', function($scope, mainService) {
var myPokemon = ['bulbasaur', 'ivysaur'];

$scope.pokemon = '';
$scope.loading = false;


$scope.getPokemonByName = function(name) {
    $scope.loading = true;
    $scope.pokemon = '';
    name = name.toLowerCase();
    mainService.getPokemon(name).then(function(res) {
        $scope.loading = false;
        $scope.pokemon = res;
    })
}

})
