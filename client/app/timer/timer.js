'use strict';

angular.module('ourSiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timer', {
        url: '/timer',
        templateUrl: 'app/timer/timer.html',
        controller: 'TimerCtrl',
        title: '一起的日子'
      });
  });