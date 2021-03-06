function PaceCalculatorController($log, calculatorService, timeService) {
  var ctrl = this;

  ctrl.name = "Kalkulator tempa";
  ctrl.distance = 10;
  ctrl.hours = 1;
  ctrl.minutes = 0;
  ctrl.seconds = 0;
  ctrl.totalSeconds = 0;
  ctrl.peace = 0;
  ctrl.speed = 0;

  ctrl.calculatePeace = function () {
    var peace = calculatorService.calculatePeace(ctrl.totalSeconds, ctrl.distance);
    if (peace == undefined) {
      ctrl.peace = "?";
    }
    else {
      ctrl.peace = peace;
    }
  }

  ctrl.calculateSpeed = function () {
    var speed = calculatorService.calculateSpeed(ctrl.totalSeconds, ctrl.distance);
    if (speed == undefined) {
      ctrl.speed = "?";
    }
    else {
      ctrl.speed = speed;
    }
  }

  ctrl.onTotalSecondsChange = function (totalSeconds) {
    ctrl.totalSeconds = totalSeconds;
    ctrl.calculatePeace();
    ctrl.calculateSpeed();
  }

  ctrl.onDistanseChange = function() {
    ctrl.calculatePeace();
    ctrl.calculateSpeed();
    
  }

}
