(function (window) {
  var speakWord = "Adeus ";
  var byeSpeaker = {};
  byeSpeaker.sayBye = function (name_to_bye) {
    console.log(speakWord  + name_to_bye + "!");
  }
  window.byeSpeaker = byeSpeaker;
})(window);
