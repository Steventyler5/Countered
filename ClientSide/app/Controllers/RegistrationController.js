"use strict";

NotDolls.controller('RegistrationController',[
'$http',
'$scope',
'AuthFactory',

	function ($http, $scope, authFactory) {
		$scope.githubOauth = function () {
			OAuth.initialize('erAkXwntur0Fi2JHsAa25tBTlqk')
			OAuth.popup('github').done(function(result) {
                console.log(result)

                result.me().done(function(data) {
                    // do something with `data`, e.g. print data.name
                    console.log(data);

                    $http({
                    	url: "http://localhost:5000/api/Geek",
                    	method: "POST",
                    	data: JSON.stringify({
                    		username: data.alias,
                    		location: data.location,
                    		emailAddress: data.email,
                    		createdDate: new Date()
                    	})
                    }).then(response => {
                    	authFactory.setUser(response.data[0])
                    },
                    response => {
                    	console.log("reject", response)
                    	
                    	//If the geeek exists, go get its object
                    	if (response.status === 409) {
                    		$http.get(`http://localhost:5000/api/Geek?username=${data.alias}`)
                    		.then(
                    			response => authFactory.setUser(response.data[0]),
                    			response => console.log("Could not find Geek")
                    		)
                    	}
                    })
                })
            });
		};
	}
]);