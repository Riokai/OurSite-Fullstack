'use strict';

angular.module('ourSiteApp')
  .controller('ModuleCtrl', function ($scope, $http, $modal, $log, Auth) {

  	$scope.modules = [];
  	$scope.isLoggedIn = Auth.isLoggedIn();
  	// console.log($scope.isLoggedIn);

    $http.get('/api/modules').success(function(res) {

    	$scope.modules = res;

    });

    var login = function() {
    	Auth.login({});
    };

    $scope.openModal = function(type) {
    	var modalInstance = $modal.open({
	      // animation: $scope.animationsEnabled,
	      templateUrl: 'userModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      resolve: {
	      	type: function() {
	      		return type;
	      	}
	      }
	    });

	    modalInstance.result.then(function (user) {
	    	console.log(user);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };



  })
	.controller('ModalInstanceCtrl', function ($scope, $modalInstance, type) {
		var user = {};

		if (type === 'register') {
			$scope.modalTitle = '用户注册';
			$scope.isRegister = true;
		} else {
			$scope.modalTitle = '用户登录';
			$scope.isRegister = false;
		}

	  $scope.ok = function () {
  		user.name = $scope.name;
  		user.pass = $scope.pass;

	  	if (type === 'register') {
	  		user.rePass = $scope.rePass;
	  	}

	    $modalInstance.close(user);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	});
