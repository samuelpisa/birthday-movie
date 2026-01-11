import $ from 'jquery';
import angular from 'angular';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

window.$ = $;
window.jQuery = $;
window.angular = angular;

await import('bootstrap/dist/js/bootstrap.js');

await import('angular-animate');
await import('angular-cookies');
await import('angular-resource');
await import('angular-route');
await import('angular-sanitize');
await import('angular-touch');
await import('angular-filter');

await import('./app');
await import('./controllers/main');
await import('./controllers/about');
await import('./services/moviedb');
await import('./services/config');

angular.element(document).ready(() => {
  angular.bootstrap(document, ['birthdayMovieApp']);
});
