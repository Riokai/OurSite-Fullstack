'use strict';

angular.module('ourSiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('module', {
        url: '/',
        templateUrl: 'app/module/module.html',
        controller: 'ModuleCtrl',
        title: '我俩的小站'
      });
  });