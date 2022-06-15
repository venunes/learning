(function (window) {
  var speakWord = "Olá ";
  var helloSpeaker = {};
  helloSpeaker.sayHello = function (name_to_hello) {
    console.log(speakWord  + name_to_hello + "!");
  }
  window.helloSpeaker = helloSpeaker;
})(window);
