function CalculatorService() {
  var service = this;

  service.calculatePeace = function(totalSeconds, distance) {
    return (totalSeconds / 60) / distance;
  }

  service.calculateSpeed = function(totalSeconds, distance) {
    return distance / (totalSeconds / 60 / 60);
  }
}
