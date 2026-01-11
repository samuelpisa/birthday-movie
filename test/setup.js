const angularModule = await import('angular');
const angular = angularModule.default || angularModule;

window.angular = angular;

await import('angular-mocks');

await import('../app/scripts/app');
await import('../app/scripts/controllers/main');
await import('../app/scripts/controllers/about');
await import('../app/scripts/services/moviedb');
await import('../app/scripts/services/config');
