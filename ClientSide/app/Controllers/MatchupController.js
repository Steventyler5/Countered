Countered.controller('MatchupController', [
	'$http', 
	'$scope',
	'PassChamp',
	'Matchup',

	function($http, $scope, PassChamp, Matchup) {
		$scope.ChampName = PassChamp.getChampString();

		$scope.LoadMatchup = () => {
			$scope.ChampName = $scope.ChampName.replace(" ", "+");
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