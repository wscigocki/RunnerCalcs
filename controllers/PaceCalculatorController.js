function PaceCalculatorController() {
  var ctrl = this;

  ctrl.name = "Kalkulator tempa";
  ctrl.distance = 10;
  ctrl.time = new Date();
  ctrl.peace = 0;

  ctrl.calculate = function () {
    console.log(ctrl.time.getMinutes());
    ctrl.peace = ctrl.time.getMinutes() / ctrl.distance ;
  }
}
