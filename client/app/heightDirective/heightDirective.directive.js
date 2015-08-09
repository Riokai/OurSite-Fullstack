'use strict';

angular.module('ourSiteApp')
  .directive('heightDirective', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        // element.text('this is the heightDirective directive');
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;

        element.css({
        	// width: width,
        	minHeight: height
        });

       	window.onresize = function() {
       		height = document.documentElement.clientHeight;

       		element.css({
       			// width: width,
       			minHeight: height
       		});
       	};
      }
    };
  });