function CalculatorService() {
  var service = this;

  service.calculatePeace = function(totalSeconds, distance) {
    return (totalSeconds / 60) / distance;
  }
}
