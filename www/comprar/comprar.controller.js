angular.module('starter').controller('ComprarCtrl', ComprarCtrl);

ComprarCtrl.$inject = ['$scope', 'ProductosService'];


function ComprarCtrl($scope, ProductosService) {
	var vm = this;
	ProductosService.lista().then(function(productos) {
		console.log(productos);
	        vm.productos = productos;


	   
});
 }