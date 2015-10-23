'use strict';

/**
 * @ngdoc service
 * @name birthdayMovieApp.moviedb
 * @description
 * # moviedb
 * Service in the birthdayMovieApp.
 */
angular.module('birthdayMovieApp')
  .service('moviedb', function ($http, config) {
    var movieDB = {
			discover: function(date1, date2){
				return $http.get(config.urlMovie + 'discover/movie',
					{
						params: {
							'api_key': config.key,
							'sort_by': 'popularity.desc',
							'language': 'pt',
							'primary_release_date.gte': date1,
							'primary_release_date.lte': date2
						}
					}

				);
			},
			videos: function(idMovie){
				return $http.get(config.urlMovie + 'movie/'+idMovie+'/videos',
					{
						params: {
							'api_key':config.key
						}
					}

				);
			}
		}
		return movieDB;
  });
