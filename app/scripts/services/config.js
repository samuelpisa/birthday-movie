'use strict';

/**
 * @ngdoc service
 * @name birthdayMovieApp.config
 * @description
 * # config
 * Constant in the birthdayMovieApp.
 */
angular.module('birthdayMovieApp')
  .constant('config', {
    key: import.meta.env.VITE_TMDB_KEY || '',
    urlMovie: 'http://api.themoviedb.org/3/',
    urlYouTube: 'https://www.youtube.com/embed/'
  });
