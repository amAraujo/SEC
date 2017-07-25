angular.module('app.route', [])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // const HOME = {
    //     abstract: true,
    //     name: 'home',
    //     templateUrl: 'app/components/template.base.html',
    //     controller: 'templateBaseController as controller'
    // };
    const HOME = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/components/templateBase/templateBase.html',
        controller: 'templateBaseController as controller'
    };

    const LOGIN = {
        name: 'login',
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'loginController as controller'
    };

    $stateProvider.state(LOGIN);
    $stateProvider.state(HOME);

    $urlRouterProvider.otherwise('/login');

});