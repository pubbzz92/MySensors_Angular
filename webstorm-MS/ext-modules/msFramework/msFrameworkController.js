"use strict";

angular.module("msFramework").controller("msFrameworkController",
    ['$scope','$location',
        function ($scope,$location) {

            $scope.$on("ms-menu-item-selected-event",function(evt,data){

                $scope.routeString=data.route;
                $location.path(data.route);

            });

            $scope.doClick = function(){

                alert("add items");

            };



        }
    ]);

