appController.controller('loginController', function($state) {

    var controller = this;

    controller.irHome = function() {
        console.log('foi');
        $state.go('home');
    }
})