'use strict';

//Holy balls, a factory that actually works like it's supposed to. Terminating prepositions make you sound cool.

Countered.factory('Matchup', function($q, $http) {

	let matchup = (champString) => {
	 	return $q(function(resolve, reject) {
			$http.get(`http://localhost:5000/api/MatchParticipant/?=${champString}`)
	    		.success(
	                (matchups) => {

	                	let masterObject = {};
        				matchups.forEach(function(game){
            				// console.log(game.Champ2Name)
	            			if (!masterObject.hasOwnProperty(game.Champ2Name)) {
	                			masterObject[game.Champ2Name] = {
	                    		// Champ : game.Champ2Name,
	                   			wins : 0,
	                   			total : 0,
	                    		winPercent : null
	                  		 	}
            				}
           				
           					if (game.Outcome === "Loser") {
	                			masterObject[game.Champ2Name].wins ++;
	                			masterObject[game.Champ2Name].total ++;
	            			} else if (game.Outcome === "Winner") {
                				masterObject[game.Champ2Name].total ++;
            				}
       	 				})
        			for (var matchup in masterObject){
             			masterObject[matchup].winPercent = masterObject[matchup].wins / masterObject[matchup].total;
        			}
        			
	                	resolve(masterObject);
	                },
	                (error) => reject(error)
	            );
	        });
	};

	return matchup;
});