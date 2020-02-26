angular.module('alurapic').controller('FotosController', function($scope,urlFoto) {
	 
		$scope.fotos = {};
		$scope.mensagem ='';

	  urlFoto.query(function(fotos){
				$scope.fotos = fotos;
					
		}),  function(erro){  console.log(erro); 		}

		/*
			let promise = $http.get('v1/fotos');
			promise.then(function(response){
				$scope.foto = response.data;	
		}).catch(function(error){
			console.log(error);
		}); **/
		$scope.remover = function(foto){
				urlFoto.delete({fotoId: foto._id}, function() {
					let indiceFoto = $scope.fotos.indexOf(foto);
					$scope.fotos.splice(indiceFoto,1);
					$scope.mensagem = 'Foto ' + foto.titulo + 'foi removida com sucesso!';
				}), function(erro){	$scope.mensagem = 'Foto ' + foto.titulo + 'Não foi removida! ';;
		}
	}
});