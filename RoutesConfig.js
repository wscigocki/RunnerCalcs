RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/paceCalculator');

  $stateProvider

  .state('paceCalculator', {
    url: '/paceCalculator',
    templateUrl: 'templates/paceCalculator.html',
    controller: "paceCalculatorController as ctrl"
  })

  .state('distanceCalculator', {
    url: '/distanceCalculator',
    templateUrl: 'templates/distanceCalculator.html',
    controller: "distanceCalculatorController as ctrl"
  });

  console.log('ok');
};
