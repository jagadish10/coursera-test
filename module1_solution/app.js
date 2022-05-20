(function (){
    'use strict'
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',checkItems)
    checkItems.$inject=['$scope'];

    function checkItems($scope) {
        $scope.items="";
        $scope.message=""

        $scope.checkCount = function() {
            $scope.itemArray = $scope.items.split(',').length;
            if( $scope.items.length==0){
                $scope.message = "Please enter data first"
            }
            else if($scope.itemArray>=1 && $scope.itemArray<=3) {
                $scope.message = "Enjoy!"
            }
            else {
                $scope.message = "Too much!"
            }
        }
    };

})();