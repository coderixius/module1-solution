(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject= ['$scope'];
	function LunchCheckController($scope) {
		$scope.message="";
		$scope.foods="";
		$scope.totalfoods=0;



		$scope.countfoods= function(message) {

			console.log("message "+message)
			if(message==="")
				return 0;
			var count=0;
			var array= message.split(',');
			for (var i = 0; i < array.length; i++) {
				if(array[i].trim()!=="")
					count++;
			}
			return count;
		};

		$scope.showMessage= function() {
			$scope.totalfoods= $scope.countItems($scope.items)
			$scope.setData($scope.totalfoods);
			if($scope.totalfoods<1)
				$scope.message="Please enter data first";

			else if($scope.totalfoods<4 &&
					$scope.totalfoods>0)
				$scope.message="Enjoy!";
			else
				$scope.message="Too much!"
		};
		



	};

})();
