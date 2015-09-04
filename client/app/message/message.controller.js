'use strict';

angular.module('ourSiteApp')
  .controller('MessageCtrl', function ($scope, $http, $modal, $log, $state, Auth, text) {

    var api = '/api/messages';
    var currentUser = Auth.getCurrentUser();

    $scope.title = '留言板';

    $scope.data = [];

    $http.get(api).success(function(res) {
      $scope.data = res;
      $scope.len = res.length;

      // update emotion src
      angular.forEach($scope.data, function(item) {

        item.content = text.processEmotion(item.content);
        
        angular.forEach(item.children, function(chil) {
          chil.content = text.processEmotion(chil.content);
        });

      });

    });

    $scope.delMessage = function(message) {
      $http
        .delete(api + '/' + message._id)
        .success(function(res) {
          // console.log(res);
          $state.go($state.current, {}, {reload: true});
        })
        .error(function(err) {
          console.log(err);
        })
    };

    $scope.openModal = function(type) {
      var modalInstance = $modal.open({
        // animation: $scope.animationsEnabled,
        templateUrl: 'messageModalContent.html',
        controller: 'MessageModal',
        resolve: {
          type: function() {
            return type;
          }
        },
        size: 'lg'
      });

      modalInstance.result.then(function (message) {
        if (type === 'addMessage') {
          addMessage(message);
        } else {
          // login(message);
        }
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    var addMessage = function(message) {
      
      message.from = currentUser._id;

      $http.post(api, message).success(function(res) {
        $state.go($state.current, {}, {reload: true});
      });

    };

    var replyMessage = function() {

    };
  })
  .controller('MessageModal', function ($scope, $modalInstance, type) {
    // $scope.size = 'lg';

    var message = {};

    if (type === 'addMessage') {
      $scope.modalTitle = '写下留言';
      // $scope.isRegister = true;
    } else {
      $scope.modalTitle = '用户登录';
      $scope.isRegister = false;
    }

    $scope.ok = function () {
      message.content = $scope.content;

      $modalInstance.close(message);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
