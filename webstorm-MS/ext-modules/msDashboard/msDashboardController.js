/**
 * Created by Pubudu on 2015-09-19.
 */

angular.module('app').controller("dashController",

    ['$scope', function($scope){


    $scope.dataItems= [
        {
            'name':'Smartphone',
            'serial':'0718807352',
            'img':'map',
            'status':'Inactive',
            'Nimg':'fa-mobile',
            'Simg':'fa-toggle-off'



        },
        {
            'name':'Raspberry-pi',
            'serial':'1451825418-246218',
            'img':'rpi',
            'status':'Active',
            'Nimg':'fa-bug',
            'Simg':'fa-toggle-on'

        },
        {
            'name':'Smartphone',
            'serial':'0112729729',
            'img':'map',
            'status':'Active',
            'Nimg':'fa-mobile',
            'Simg':'fa-toggle-on'



        },
        {
            'name':'Raspberry-pi',
            'serial':'14518vhj88-18',
            'img':'rpi',
            'status':'Inctive',
            'Nimg':'fa-bug',
            'Simg':'fa-toggle-off'

        }

    ]




}]);
