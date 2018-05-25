angular.module('starter').controller('VenderCtrl', function($scope, $state, servicioCuenta, ProductosService, $ionicPopup){
    
    $scope.producto = {};

    $scope.vender = function() {
        var usuario = servicioCuenta.usuarioActual();

        if (usuario) {

            ProductosService.vender($scope.producto).then(function () {
                var alertPopup = $ionicPopup.alert({
                        title: 'Producto publicado exitosamentel',
                        template: "Verifica tu producto en la sección  'Comprar'."
                    });

                    alertPopup.then(function(res) {
                        $state.go('tab.comprar');
                    });

                });
            
        } else {
                $state.go('tab.cuenta');
               }
    };

});

