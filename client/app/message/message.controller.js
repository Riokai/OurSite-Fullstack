'use strict';

angular.module('ourSiteApp')
  .controller('MessageCtrl', function ($scope) {
    $scope.title = '留言板';

    $scope.data = [
    	{
    		"_id" : "5502d4f89df9ff762d9ed733",
    		"from" : "5502d4b99df9ff762d9ed732",
    		"content" : "曾凯大傻瓜，不要不要，不可以不可以~~~~我爱你，么么哒~",
    		"createTime" : "2015-03-13 20:15:52",
    		"children" : [
    			{
    				"from" : "54d0798cb6dfe7081753e2ae",
    				"to" : "5502d4b99df9ff762d9ed732",
    				"content" : "小懒猪，以后陪我锻炼去，让你嘚瑟。我爱你",
    				"_id" : "5502d5aa9df9ff762d9ed734",
    				"createTime" : "2015-03-13 20:18:50"
    			},
    			{
    				"from" : "54d0798cb6dfe7081753e2ae",
    				"to" : "54d0798cb6dfe7081753e2ae",
    				"content" : "<img src=\"/images/face/4.gif\" border=\"0\" />",
    				"_id" : "550b92b290a2a30c34789e15",
    				"createTime" : "2015-03-20 11:23:30"
    			}
    		],
    		"__v" : 3
    	}
    ]
  });
