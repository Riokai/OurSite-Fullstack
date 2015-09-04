'use strict';

angular.module('ourSiteApp')
  .controller('ModuleCtrl', function ($scope, $http, $modal, $state, $location, $log, Auth) {

  	$scope.modules = [];
  	$scope.isLoggedIn = Auth.isLoggedIn;
  	$scope.currentUser = Auth.getCurrentUser;

    $scope.isEdit = false;
    $scope.editText = '编辑';

    $http.get('/api/modules').success(function(res) {

    	$scope.modules = res;

    });

    var register = function(user) {
    	console.log(user);
      // $scope.submitted = true;

      // if(form.$valid) {
        Auth.createUser({
          name: user.name,
          email: user.email,
          password: user.pass
        })
        .then( function() {
          // Account created, redirect to home
          $state.go($state.current, {}, {reload: true});
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      // }
    };

    var login = function(user) {
      // $scope.submitted = true;

      // if(form.$valid) {
        Auth.login({
          email: user.email,
          password: user.pass
        })
        .then( function() {
          // Logged in, redirect to home
          $state.go($state.current, {}, {reload: true});
        })
        .catch( function(err) {
          // $scope.errors.other = err.message;
          alert(err.message);
        });
      // }
    };

    $scope.logout = function() {
      Auth.logout();
      console.log('you are logout.');
      $state.go($state.current, {}, {reload: true});
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
	    	if (user.name) {
	    		console.log(user);
	    		register(user);
	    	} else {
          login(user);
        }
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleEdit = function() {
      $scope.isEdit = !$scope.isEdit;

      $scope.editText = '完成';
    }
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
  		user.email = $scope.email;
  		user.pass = $scope.pass;

	  	if (type === 'register') {
	  		user.rePass = $scope.rePass;
	  		user.name = $scope.name;
	  	}

	    $modalInstance.close(user);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	});
