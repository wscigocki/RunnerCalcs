function TimeService() {
  var service = this;

  service.getTotalSeconds = function (hours, minutes, seconds) {
    hours = hours | 0;
    minutes = minutes | 0;
    return hours * 60 * 60 + minutes * 60 + seconds;
  }

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

}
