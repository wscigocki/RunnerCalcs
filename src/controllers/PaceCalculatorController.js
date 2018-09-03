function PaceCalculatorController($log, calculatorService) {
  var ctrl = this;

  ctrl.name = "Kalkulator tempa";
  ctrl.distance = 10;
  ctrl.hours = 1;
  ctrl.minutes = 0;
  ctrl.seconds = 0;
  ctrl.totalSeconds = 0;
  ctrl.peace = 0;

  ctrl.calculate = function () {
    var peace = calculatorService.calculatePeace(ctrl.totalSeconds, ctrl.distance);
    if (peace) {
      ctrl.peace = peace;
    }
    else {
      ctrl.peace = "?";
    }
  }

  ctrl.onTotalSecondsChange = function (totalSeconds) {
    ctrl.totalSeconds = totalSeconds;
    ctrl.calculate();
  }


}
