/*angular.module('starter').controller('ComprarCtrl', ComprarCtrl);

ComprarCtrl.$inject = ['$scope', 'ProductosService'];


function ComprarCtrl($scope, ProductosService) {
	var vm = this;
	ProductosService.lista().then(function(productos) {
		console.log(productos);
	        vm.productos = chunk(productos,2);


	   
});
	
 /*Esta funcion recibe un array y crea combinaciones de filas y 
	 columnas para crear subarrays dentro del array.
	 i.e chunk([1,3,4,5,6,7],2) = [[1,3],[4,5],[6,7]] */
/*	 function chunk(arr,size) {
	 	var newArr = [];
	 	for (var i=0; i<arr.length; i+=size) {
	 		newArr.push(arr.slice(i, i+size));

	 	}
	 	return newArr;
	 }
 }

*/
angular.module('starter').controller('ComprarCtrl', ComprarCtrl);

ComprarCtrl.$inject = ['$scope', '$state', '$ionicPopup', 'ProductosService', 'servicioCuenta'];


function ComprarCtrl($scope, $state, $ionicPopup , ProductosService, servicioCuenta) {

    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function(){
        ProductosService.lista().then(function (productos) {
        vm.productos = chunk(productos, 2);
    });

});

    $scope.comprar = function(p) {

        var usuario= servicioCuenta.usuarioActual();//LOGIN DE USUARIO

        if (usuario) { //SI ESTA LOGUEADO PERMITALE COMPRAR
            ProductosService.comprar(usuario.email, p.$id).then(function () {
                $ionicPopup.alert({
                    title: 'Compra exitosa!',
                    template: 'Continua comprando.'
                    });

            });
        } else {
            $state.go('tab.cuenta');
        }
    };

    /*Esta funcion recibe un array y crea combinaciones de filas y 
     columnas para crear subarrays dentro del array.
     i.e chunk([1,3,4,5,6,7],2) = [[1,3],[4,5],[6,7]] */

     function chunk(arr,size) {
         var newArr = [];
         for (var i=0; i<arr.length; i+=size) {
             newArr.push(arr.slice(i, i+size));

         }
         return newArr;
     }
}