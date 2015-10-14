/**
 * Created by Pubudu on 2015-09-19.
 */

angular.module('app').controller("dashController",

    ['$scope','$rootScope','$http', function($scope,$rootScope,$http){

   
        $scope.dataItems = [];

         //we could use the webservice here to get json data
        $http.get('Json/testData.json').success(function(response){$scope.dataItems = response.devices;});
            

        $scope.$on('ms-add-device', function (evt, data) {
            
            $scope.dataItems.push(data.msg);

        });






}]);
