Countered.controller('MainController', [
	'$http', 
	'$scope',
	'LoadNames',

	function($http, $scope, LoadNames) {

		$scope.LoadNames = () => {
			LoadNames()
			.then(
				(namesList) => {
					$scope.nameList = namesList;
					console.log("NL", $scope.nameList);
				}
			)
		}
	}
]);