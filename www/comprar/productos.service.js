angular.module('starter').service('ProductosService', ProdutosService); 

ProdutosService.$inject = ['$http', '$q'];

function ProdutosService($http, $q){
	return {
		lista: lista
	};


	function lista() {

		return $http.get('comprar/productos.json')
		.then(function(response) {
			return response.data.productos;
		})
		.catch(function(error){
			$q.reject();
		});
	}
};


