(function(angular) {
  'use strict';

var app = angular.module('app', ['ngSanitize']);

app.controller('contentController', function ($scope, $http) {
		$http.get('data.json').success(function(data) {
			$scope.content = data;
		});
		$scope.iconClassExt = "square icon";
});

})(window.angular);