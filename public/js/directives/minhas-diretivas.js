angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		let ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			titulo: '@titulo'
		}
		ddo.transclude = true;

		ddo.templateUrl = 'js/directives/meu-painel.html'

		return ddo;
	}) .directive('minhaFoto', function() {

		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
				titulo: '@',
				url: '@'
		};

		ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
		
		return ddo;
}).directive('meuBotaoPerigo', function() {
	
	let ddo = {}
	ddo.restrict ="E";

	ddo.scope={
		nome: '@',
		acao:'&'
	}

	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)"> {{nome}}</button>';

	return ddo;
});
	