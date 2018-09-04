function TimeCtrlController(timeService) {
  var $ctrl = this;

  $ctrl.calcTotal = function () {
      var totalSeconds = timeService.getTotalSeconds($ctrl.hours, $ctrl.minutes, $ctrl.seconds);
      $ctrl.onChange({totalSeconds: totalSeconds});
  };

  $ctrl.$onInit = function () {
    $ctrl.calcTotal();
  }
}
