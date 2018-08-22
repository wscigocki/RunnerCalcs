angular.module("runnerCalcApp", ["ui.router"])

// config
.config(RoutesConfig)

// controllers
.controller('distanceCalculatorController', DistanceCalculatorController)
.controller('paceCalculatorController', PaceCalculatorController);
