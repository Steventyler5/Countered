'use strict';

//Holy balls, a factory that actually works like it's supposed to. Terminating prepositions make you sound cool.

Countered.factory('LoadNames', function($q, $http) {

	let loadNames = () => {
	 	return $q(function(resolve, reject) {
			$http.get(`http://localhost:5000/api/MatchParticipant`)
	    		.success(
	                (namesList) => resolve(namesList),
	                (error) => reject(error)
	            );
	        });
	};

	return loadNames;
});