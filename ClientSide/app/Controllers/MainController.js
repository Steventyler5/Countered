Countered.controller('MainController', [
	'$http', 
	'$scope',
	'LoadNames',

	function($http, $scope, LoadNames) {

		$scope.GetMatchup = (string) => {
			console.log(string)
		}

		$scope.LoadNames = () => {
			LoadNames()
			.then(
				(namesList) => {
					var noSpacesList = []; 
					namesList.forEach(function(name){
						name = name.replace(" ", "")
								.replace("sticks", "Sticks")
								.replace("Wukong", "MonkeyKing")
								.replace("Blanc", "blanc")
								.replace("Zix", "zix")
								.replace("Gath", "gath")
								.replace(".", "");

						noSpacesList.push(name);
					});
					$scope.nameList = noSpacesList;
					console.log("NL", $scope.nameList);
				}
			)
		}
	}
]);