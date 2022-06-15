var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var name_from_array = names[i];
  var firstLetter = name_from_array.charAt(0);
  var firstLetterM = firstLetter.toUpperCase();
  if (firstLetterM == 'J'){
    byeSpeaker.sayBye(name_from_array);
  } else{ helloSpeaker.sayHello(name_from_array);}
} 