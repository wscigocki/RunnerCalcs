function TimeCtrlController(timeService) {
  var $ctrl = this;

  $ctrl.calcTotal = function () {
      $ctrl.totalSeconds = timeService.getTotalSeconds($ctrl.hours, $ctrl.minutes, $ctrl.seconds);
      $ctrl.onChange({totalSeconds: $ctrl.totalSeconds});
  };

  $ctrl.$onInit = function () {
    $ctrl.calcTotal();
  }
}
