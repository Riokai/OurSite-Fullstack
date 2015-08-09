'use strict';

angular.module('ourSiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('module', {
        url: '/module',
        templateUrl: 'app/module/module.html',
        controller: 'ModuleCtrl',
        title: '模板列表'
      });
  });