function PaceCalculatorController($log, calculatorService) {
  var ctrl = this;

  ctrl.name = "Kalkulator tempa";
  ctrl.distance = 10;
  ctrl.hours = 2;
  ctrl.minutes = 30;
  ctrl.peace = 0;

  ctrl.calculate = function () {

    $log.log('ctrl.time = ' + ctrl.time );

    var peace = calculatorService.calculatePeace(ctrl.time, ctrl.distance);
    if (peace) {
      ctrl.peace = peace;
    }
    else {
      ctrl.peace = "?";
    }
  }
}
