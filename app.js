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
            npmPackageName: 'generator-jhipster',
            author: 'jhipster'
        },
        {
            name: 'Jhipster Entity Audit Generator',
            npmPackageName: 'generator-jhipster-entity-audit',
            author: 'deepu105'
        },
        {
            name: 'Jhipster Bootswatch Theme Generator',
            npmPackageName: 'generator-jhipster-bootswatch',
            author: 'deepu105'
        },
        {
            name: 'Angular Clock',
            npmPackageName: 'angular-clock',
            author: 'deepu105'
        },
    ];
    var modulesList= '';
    $scope.modules.forEach (function(mod) {
        modulesList += mod.npmPackageName + ',';
    });
    $http.get('https://api.npmjs.org/downloads/point/last-month/' + modulesList).success(function(data) {
        $scope.modules.forEach (function(mod) {
            mod.downloads = data[mod.npmPackageName].downloads;
        });
    });

    $scope.modules.forEach (function(mod) {
        $http.get('https://api.github.com/repos/'+ mod.author +'/' + mod.npmPackageName).success(function(data) {
            mod.stars = data.stargazers_count;
        });
    });

});
