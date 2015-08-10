'use strict';

angular.module('ourSiteApp')
  .controller('RootCtrl', function ($rootScope, $location) {
    // $rootScope.goTimer = function() {
    // 	$location.path('/timer');
    // }

    $rootScope.goPath = function(path) {

    	$location.path(path);

    };
  });
