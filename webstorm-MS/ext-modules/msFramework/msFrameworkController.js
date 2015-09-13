"use strict";

angular.module("msFramework").controller("msFrameworkController",
    ['$scope','$location',
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



        }
    ]);

