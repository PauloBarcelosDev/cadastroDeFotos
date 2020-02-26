angular.module("alurapic").controller("cadastroFotoController", function(
    $scope,
    $routeParams,
    $http,
    urlFoto
  ) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
        urlFoto.get({fotoId: $routeParams.fotoId},function(foto){
        $scope.foto = foto;
      }), function(error){
        $scope.mensagem = "Não foi possivel obter a Foto";
      };
    }

    $scope.submeter = function() {
      if ($scope.formulario.$valid) {
        if ($scope.foto._id) {
          urlFoto.update(
            { fotoId: $scope.foto._id },
            $scope.foto,
            function() {
              $scope.mensagem = "Foto Alterada Com Sucesso!";
            },
            function(error) {
              $scope.mensagem = "Não foi possivel alterara foto!";
            }
          );
        } else {
          urlFoto.save($scope.foto, function() {
            $scope.foto = {};
            $scope.mensagem = "Foto Cadastrada com sucesso";
          }),
            function(erro) {
              $scope.mensagem = "Não foi possivel incluir a foto";
            };
        }
      }
    };
  });


