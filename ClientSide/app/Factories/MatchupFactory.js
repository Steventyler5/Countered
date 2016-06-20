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
	                    		ChampName : game.Champ2Name,
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
	       	 			var categories= [""];
	       				var dollars = [""];
	        			var colors = [""];
	        			for (var matchup in masterObject){
	        				if (Object.keys(masterObject).length > 20) {
	                			if (masterObject[matchup].total <2) {
	                    		delete masterObject[matchup];
	                    		break;
	                		}
	            		}
	             		if (masterObject[matchup].wins == 0){
			                delete masterObject[matchup];
			            } else {
			                 masterObject[matchup].winPercent = masterObject[matchup].wins / masterObject[matchup].total;
			                 // if (masterObject[matchup].winPercent = 0) {
			                    // delete masterObject[matchup];
			                 // }
			                 categories.push(masterObject[matchup].ChampName);
			                 dollars.push(Math.round(masterObject[matchup].winPercent * 100));
			                 if (masterObject[matchup].winPercent > 0.6) {
			                    colors.push("#008000");
			                 }
			                 if (masterObject[matchup].winPercent <= 0.6 && masterObject[matchup].winPercent > 0.4) {
			                    colors.push("#ffff00");
			                 }
			                 if (masterObject[matchup].winPercent <= 0.4) {
			                    colors.push("#ff0000");
			                 }
			             }
			        } 
        			var grid = d3.range(21).map(function(i){
            return {'x1':0,'y1':0,'x2':0,'y2':470};
        });

        var tickVals = grid.map(function(d,i){
            if(i>0){ return i*10; }
            else if(i===0){ return "100";}
        });

        var xscale = d3.scale.linear()
                        .domain([0,100])
                        .range([0,720]);

        var yscale = d3.scale.linear()
                        .domain([0,categories.length])
                        .range([0,500]);

        var colorScale = d3.scale.quantize()
                        .domain([0,categories.length])
                        .range(colors);

        var canvas = d3.select('#wrapper')
                        .append('svg')
                        .attr({'width':900,'height':600});

        var grids = canvas.append('g')
                          .attr('id','grid')
                          .attr('transform','translate(150,10)')
                          .selectAll('line')
                          .data(grid)
                          .enter()
                          .append('line')
                          .attr({'x1':function(d,i){ return i*36; },
                                 'y1':function(d){ return d.y1; },
                                 'x2':function(d,i){ return i*36; },
                                 'y2':function(d){ return d.y2; },
                            })
                          //Grid line styles
                          .style({'stroke':'#adadad','stroke-width':'1px'});

        var xAxis = d3.svg.axis();
            xAxis
                .orient('bottom')
                .scale(xscale)
                .tickValues(tickVals);

        var yAxis = d3.svg.axis();
            yAxis
                .orient('left')
                .scale(yscale)
                .tickSize(2)
                .tickFormat(function(d,i){ return categories[i]; })
                .tickValues(d3.range(categories.length));

        var y_xis = canvas.append('g')
                          .attr("transform", "translate(150,0)")
                          .attr('id','yaxis')
                          .call(yAxis);

        var x_xis = canvas.append('g')
                          .attr("transform", "translate(150,480)")
                          .attr('id','xaxis')
                          .call(xAxis);

        //translate moves the bars around the graph wit their labels, the yscale addition will move them but not their labels.
        var chart = canvas.append('g')
                            .attr("transform", "translate(150,-27)")
                            .attr('id','bars')
                            .selectAll('rect')
                            .data(dollars)
                            .enter()
                            .append('rect')
                            .attr('height',19)
                            .attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
                            .style('fill',function(d,i){ return colorScale(i); })
                            .attr('width',function(d){ return 0; });


        var transit = d3.select("svg").selectAll("rect")
                            .data(dollars)
                            .transition()
                            .duration(1500) 
                            .attr("width", function(d) {return xscale(d); });

        var transitext = d3.select('#bars')
                            .selectAll('text')
                            .data(dollars)
                            .enter()
                            .append('text')
                            .attr({'x':function(d) {return xscale(d)-200; },'y':function(d,i){ return yscale(i)+35; }})
                            .text(function(d){ return d+"%"; }).style({'fill':'#000','font-size':'14px'});
	                	resolve(masterObject);
	                },
	                (error) => reject(error)
	            );
	        });
	};

	return matchup;
});