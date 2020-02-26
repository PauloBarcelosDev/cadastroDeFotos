angular.module('meusServicos', ['ngResource']).factory('urlFoto', function($resource){
  return  $resource('/v1/fotos/:fotoId', null, {
    update : {
      method: 'PUT'
    }
  });
});