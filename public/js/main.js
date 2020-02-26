angular.module('alurapic', ['minhasDiretivas', 'ngRoute' ,'meusServicos']).config(function($routeProvider, $locationProvider){

     $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos', {

      templateUrl : 'partials/principal.html' ,
      controller : 'FotosController'

    });

    $routeProvider.when('/fotos/new', {
      templateUrl : 'partials/cadastro.html' ,
      controller : 'cadastroFotoController'

    });

    $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl : 'partials/cadastro.html' ,
      controller : 'cadastroFotoController'

    });

    $routeProvider.otherwise({ redirectTo : '/fotos'  });
});