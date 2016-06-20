Countered.controller('MainController', [
	'$http', 
	'$scope',
	'LoadNames',
	'PassChamp',

	function($http, $scope, LoadNames, PassChamp) {

		$scope.GetMatchup = (string) => {
			console.log("GM string", string);
			switch (string) {
				case "MonkeyKing":
					string = "Wukong";
					break;

				case "FiddleSticks":
					string = "Fiddlesticks";
					break;

				case "Leblanc":
					string = "LeBlanc";
					break;

				case "Khazix":
					string = "KhaZix";
					break;

				case "Chogath":
					string = "ChoGath";
					break;

				case "DrMundo":
					string = "Dr. Mundo";
					break;

				case "TahmKench":
					string = "Tahm Kench";
					break;	

				case "XinZhao":
					string = "Xin Zhao";
					break;

				case "MasterYi":
					string = "Master Yi";
					break;

				case "LeeSin":
					string = "Lee Sin";
					break;

				case "JarvanIV":
					string = "Jarvan IV";
					break;
			}
			PassChamp.setChampString(string);
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