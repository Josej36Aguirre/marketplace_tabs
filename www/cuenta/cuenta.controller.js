angular.module('starter').controller('CuentaCtrl', function($scope, servicioCuenta, $ionicLoading, $ionicPopup ) {
	$scope.perfil = {};
	$scope.usuarioActual = null;
	$scope.registrar = function() {
		$ionicLoading.show();
		servicioCuenta.registrar($scope.perfil).then(function(data) {
		$ionicLoading.hide();
		$ionicPopup.alert({
			title: 'Exito!',
			template: 'Usuario registrado exitosamente.'
		});

		}, function(err) {
		$ionicLoading.hide();
		$ionicPopup.alert({
			title: err.code,
			template: err.message
		});
	});
};


	$scope.iniciar_sesion = function() {
		$ionicLoading.show();
		servicioCuenta.iniciar_sesion($scope.perfil).then(function(data) {
		$ionicLoading.hide();
		$scope.usuarioActual = servicioCuenta.usuarioActual();
		}, function(err) {
			$ionicLoading.hide();

		});
	};

	$scope.terminbr_sesion = function() {

		$ionicLoading.show();
		servicioCuenta . terminar_sesion($scope.perfil).then(function () {
		$ionicLoading.hide();
		$scope.usuarioActual = null;
		}, function(err) {
			$ionicLoading.hide();
		});
	};
});
