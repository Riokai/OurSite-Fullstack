'use strict';

angular.module('ourSiteApp')
  .factory('text', function () {

    var text = {};

    text.processEmotion = function(str) {

      if (typeof str === 'string') {
        str = str.replace(/(\/images.+?gif")/g, "assets$1");
      }

      return str;

    }

    return text;
  });
