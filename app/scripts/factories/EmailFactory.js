/**
 * Factory: EmailFactory
 */
angular.module('ngMailApp')
  .factory('EmailFactory', function EmailFactory ($q, $http, $routeParams) {
    'use strict';
    var exports = {};

    exports.reply = function (message) {
      if (message) {
        // we would obviously hit the back-end here
        // but let's just alert what we've typed
        console.log('Reply content: ' + message);
      }
    };

    exports.getMessage = function (params) {
      if ( params.id ) {
        var deferred = $q.defer();
        $http.get('scripts/json/message/' + params.id + '.json')
          .success(function (data) {
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    return exports;
  });