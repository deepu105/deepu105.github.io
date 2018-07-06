'use strict';

var indexApp = angular.module('indexApp', []);

indexApp.controller('ModuleListCtrl', function ($scope, $http, $location, $filter) {
    $scope.modules = [
        {
            name: 'JHipster Generator',
            desc: 'A cool yeoman generator for AngularJS + Spring stack',
            npmPackageName: 'generator-jhipster',
            author: 'jhipster',
            href: 'http://jhipster.github.io/',
            img: 'home/assets/img/logo-jhipster.png',
            icon: 'img'
        },
        {
            name: 'Angular Clock',
            desc: 'A beautiful responsive clock face and clock widget for angular JS. Built in SVG',
            npmPackageName: 'angular-clock',
            author: 'deepu105',
            href: '/angular-clock',
            icon: 'fa-clock-o fa-2x'
        },
        {
            name: 'Jhipster Registry',
            desc: 'Service Registry, based on Spring Cloud Netflix Eureka and Spring Cloud Config',
            npmPackageName: 'jhipster-registry',
            author: 'jhipster',
            href: 'https://github.com/jhipster/jhipster-registry',
            img: 'home/assets/img/logo-jhipster.png',
            icon: 'img'
        },
        {
            name: 'Jhipster Entity Audit Generator',
            desc: 'A yeoman generator to enable entity audit in Jhipster generated apps',
            npmPackageName: 'generator-jhipster-entity-audit',
            author: 'hipster-labs',
            href: 'https://github.com/hipster-labs/generator-jhipster-entity-audit',
            img: 'home/assets/img/logo-jhipster.png',
            icon: 'img'
        },
        {
            name: 'JDL Studio',
            desc: 'An awesome online JDL editor and visualizer',
            npmPackageName: 'jdl-studio',
            author: 'jhipster',
            href: 'http://jhipster.github.io/jdl-studio/',
            img: 'home/assets/img/logo-jhipster.png',
            icon: 'img'
        },
        {
            name: 'Jhipster Bootswatch Theme Generator',
            desc: 'A yeoman generator to enable bootswatch themes in Jhipster generated apps',
            npmPackageName: 'generator-jhipster-bootswatch',
            author: 'hipster-labs',
            href: 'https://github.com/hipster-labs/generator-jhipster-bootswatch',
            img: 'home/assets/img/logo-jhipster.png',
            icon: 'img'
        },
        {
            name: 'Angular Object Diff',
            desc: 'An AngularJS plugin to generate and view object difference',
            npmPackageName: 'angular-object-diff',
            author: 'deepu105',
            href: 'https://github.com/deepu105/angular-object-diff',
            icon: 'fa-2x fa-file-code-o'
        },
        {
            name: 'UML and Sequence Diagram Generator',
            desc: 'A sequence diagram generator using angularJS and an UML Diagram Generator based on PlantUML. Experimental.',
            author: 'deepu105',
            href: '/svg-seq-diagram',
            icon: 'fa-2x fa-code'
        },

    ];
    var modulesList= '';
    $scope.modules.forEach (function(mod) {
        if (mod.npmPackageName) {
            modulesList += mod.npmPackageName + ',';
        }
    });
    $http.get('https://api.npmjs.org/downloads/point/last-month/' + modulesList).success(function(data) {
        $scope.modules.forEach (function(mod) {
            if(data && data[mod.npmPackageName]) mod.downloads = data[mod.npmPackageName].downloads;
        });
    });

    $scope.modules.forEach (function(mod) {
        if (mod.npmPackageName) {
            $http.get('https://api.github.com/repos/'+ mod.author +'/' + mod.npmPackageName).success(function(data) {
                if (data) mod.stars = data.stargazers_count;
            });
        }
    });

});

$(document).ready(function() {
    appMaster.smoothScroll();
    appMaster.reviewsCarousel();
    appMaster.screensCarousel();
    appMaster.animateScript();
    appMaster.revSlider();
    appMaster.scrollMenu();
    appMaster.placeHold();
    appMaster.preLoader();
});
