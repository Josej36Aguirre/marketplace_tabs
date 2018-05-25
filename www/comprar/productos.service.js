/*angular.module('starter').service('ProductosService', ProdutosService); 

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

*/
angular.module('starter').service('ProductosService', ProductosService); 

ProductosService.$inject = ['$http', '$q', '$firebaseArray', '$firebaseObject'];


    function ProductosService($http, $q, $firebaseArray, $firebaseObject){

        return {
                lista: lista,
                comprar: comprar,
                vender: vender
            };

        function lista() 
        {

            var productsRef = firebase.database().ref().child('productos');
            return $firebaseArray(productsRef).$loaded();
        }

        function comprar(userId, productId) 
        {

            var comprasRef = firebase.database().ref('/compras/');
            return $firebaseArray(comprasRef).$add({usuario: userId, producto: productId});
        }

        function vender(product) //aqui envia al formulario vender.html
        {

            var comprasRef = firebase.database().ref('/productos/');
            return $firebaseArray(comprasRef).$add(product);
        }
};


