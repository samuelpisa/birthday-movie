'use strict';

/**
 * @ngdoc function
 * @name birthdayMovieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the birthdayMovieApp
 */
angular.module('birthdayMovieApp')
  .controller('MainCtrl', ['$scope', '$sce', 'moviedb', 
  	function ($scope, $sce, moviedb) {
   
		$scope.discover = function(month, day, year) {
			try{
				var dateCalc = new Date(year, month, day);
			}catch(errors){
				$scope.errors = "Invalid Date.";
				return ;
			}
			var date2 = dateCalc.toISOString().substring(0,10);
			dateCalc.setMonth(dateCalc.getMonth() - 2);
			var date1 = dateCalc.toISOString().substring(0,10);
			var idMovie;

			var response = moviedb.discover(date1, date2);
			response.then(function(resp){
				$scope.urlVideo = null;
				for (var i=0, size = resp.data.results.length; i < size; i++) {
				    if(resp.data.results[i].original_language == 'en'){
						$scope.movie = resp.data.results[i];
						idMovie = resp.data.results[i].id;
						break;
					}
				}

				if(idMovie){
				var respVideo = moviedb.videos(idMovie);
				respVideo.then(function(resp){
					if(resp.data.results){
						for (var i=0, size = resp.data.results.length; i < size; i++) {
						    if(resp.data.results[i].site == 'YouTube'){
								$scope.urlVideo = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + resp.data.results[i].key);
								if(resp.data.results[i].name == 'Trailer'){
									break;
								}
							}
						}
					}
				});
			}
			});

			
     	};
    	
  }]);
