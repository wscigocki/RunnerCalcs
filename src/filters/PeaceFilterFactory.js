function PeaceFilterFactory(stringService) {

  var factory = this;
  factory.stringService = stringService;

  return function(decimalPeace) {
    var seconds = Math.floor((decimalPeace % 1) * 60);
    var minutes = Math.floor(decimalPeace);
    var formattedSeconds = factory.stringService.pad(seconds, 2);
    return minutes + ":" + formattedSeconds;
  }
}
