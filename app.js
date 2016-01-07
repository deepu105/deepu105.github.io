'use strict';

var indexApp = angular.module('indexApp', []);

indexApp.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

indexApp.controller('ModuleListCtrl', function ($scope, $http, $location, $filter) {
    $scope.modules = [
        {
            name: 'Jhipster Generator',
            npmPackageName: 'generator-jhipster'
        },
        {
            name: 'Jhipster Entity Audit Generator',
            npmPackageName: 'generator-jhipster-entity-audit'
        },
        {
            name: 'Jhipster Bootswatch Theme Generator',
            npmPackageName: 'generator-jhipster-bootswatch'
        },
        {
            name: 'Angular Clock',
            npmPackageName: 'angular-clock'
        },
    ];
    var modulesList= '';
    for (var i = 0; i < $scope.modules.length; i++) {
        modulesList += $scope.modules[i].npmPackageName + ',';
    }
    $http.get('https://api.npmjs.org/downloads/point/last-month/' + modulesList).success(function(data) {
        for (var i = 0; i < $scope.modules.length; i++) {
            var module = $scope.modules[i];
            module.downloads = data[module.npmPackageName].downloads;
        }
    });

    for (var i = 0; i < $scope.modules.length; i++) {
        var module = $scope.modules[i];
        $http.get('https://api.github.com/repos/deepu105/' + module.npmPackageName).success(function(data) {
            module.stars = data.stargazers_count;
        });
    }

});
