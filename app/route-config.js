export default function($logProvider, $stateProvider, $urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '../app/components/home/templates/home.tpl.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  });
  $logProvider.debugEnabled(true);
}