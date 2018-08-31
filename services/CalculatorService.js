function CalculatorService() {
  var service = this;

  service.getTotalMinutes = function (time) {
    console.log(time);
    var num = time.getHours();
    console.log(num);

    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rminutes + time.getMinutes();
  }

  service.calculatePeace = function(time, distance) {
    var totalMinutes = service.getTotalMinutes(time);
    console.log('totalMinutes ' + totalMinutes);
    return time.getMinutes() / distance;
  }
}
