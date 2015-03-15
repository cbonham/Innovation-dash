'use strict';

module.exports =
  angular.module('uHero', [
    'ui.router',
    //load extra external dependencies here, e.g.:
    //'ngAnimate',
    //html templates in $templateCache generated by Gulp:
    require('../../../tmp/templates').name,
    //useful directives, filters, services shared across the app
    require('../common').name,
    //example app module:
    require('./edu').name,
    require('./ent').name,
    require('./rnd').name,
    require('./econ').name

    //load extra app modules here, e.g.:
    //require('./frontend').name,
    //require('./admin').name
  ])

.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/edu");
});
