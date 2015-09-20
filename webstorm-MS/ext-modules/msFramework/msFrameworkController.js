"use strict";

angular.module("msFramework").controller("msFrameworkController",
    ['$scope','$location','$element','$compile',
        function ($scope,$location) {

            $scope.$on("ms-menu-item-selected-event",function(evt,data){

                $scope.routeString=data.route;
                $location.path(data.route);

            });

            $scope.showModal = false;
            $scope.doClick = function(){

                $scope.showModal = !$scope.showModal;
                //alert($scope.showModal);

            };

            $scope.close = function(){

                $scope.showModal = false;

            };

            $scope.add = function() {
                $scope.close();
                //this can be used to add a new device to the database
                //so that it will be displayed through ng-repeat

                $('.dashboardItems').append('<h1 style="color: red">new device</h1>');

            }



        }
    ]);

