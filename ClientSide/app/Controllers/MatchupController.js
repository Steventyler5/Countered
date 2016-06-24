Countered.controller('MatchupController', [
	'$http', 
	'$scope',
	'PassChamp',
	'Matchup',

	function($http, $scope, PassChamp, Matchup) {
		$scope.ChampNameString = PassChamp.getChampString();

		$scope.LoadMatchup = () => {
			$scope.ChampName = $scope.ChampNameString.replace(" ", "+");
			Matchup($scope.ChampName)
			.then(
				(matchups) => {
					console.log(matchups);
					$scope.MatchupObj = matchups;
				}
			)
		}


	}
		
]);