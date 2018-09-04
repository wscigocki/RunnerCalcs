angular.module("runnerCalcApp", ["ui.router"])

// config
.config(RoutesConfig)

// controllers
.controller('distanceCalculatorController', DistanceCalculatorController)
.controller('paceCalculatorController', PaceCalculatorController)
.controller('timeCtrlController', TimeCtrlController)

// services
.service('calculatorService', CalculatorService)
.service('timeService', TimeService)
.service('stringService', StringService)

// filters
.filter('peace', PeaceFilterFactory)

// components
.component('timeCtrl', {
  templateUrl: 'src/components/TimeCtrl/timeCtrl.html',
  controller: 'timeCtrlController',
  //controllerAs: '$ctrl',
  bindings: {
      hours: '=',
      minutes: '=',
      seconds: '=',
      onChange: '&'
  }
});
