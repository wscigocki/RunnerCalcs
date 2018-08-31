angular.module("runnerCalcApp", ["ui.router"])

// config
.config(RoutesConfig)

// controllers
.controller('distanceCalculatorController', DistanceCalculatorController)
.controller('paceCalculatorController', PaceCalculatorController)

// services
.service('calculatorService', CalculatorService)

// components
.component('timeCtrl', {
  templateUrl: 'components/timeCtrl.html',
  bindings: {
      hours: '=',
      minutes: '='
  }
});


function TimeCtrl() {
  return  {
    templateUrl: 'components/timeCtrl.html'
  }
}
