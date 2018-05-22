angular.module('starter').factory('servicioCuenta', function($firebaseAuth, $ionicLoading) {
	var auth = $firebaseAuth(),
		usuarioActual;
		return {
			registrar: function (user) {
				return auth.$createUserWithEmailAndPassword(user.email, user.password);
				alert(user.email);
		},
		iniciar_sesion : function(user) {
			return auth.$signInWithEmailAndPassword(user.email, user.password).then(function(user) {
				console.log(user);
				usuarioActual = user;
			});

		},
		usuarioActual : function () {

		return usuarioActual;
		}
	};
});	

