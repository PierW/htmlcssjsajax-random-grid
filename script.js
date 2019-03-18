$(document).ready(init);

function boxGenerator() {

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var content = { class : "box"};
  var completeHTML = template(content);
  var container = $(".container-box");

  for (var i = 0; i < 36; i++) {
    container.append(completeHTML);
  }
}

function myJoke() {

  var me = $(this);
  var value = me.text();

  $.ajax({
    url: "https://www.boolean.careers/api/random/int",
    methos: "GET",
    success: function (dati, stato) {
      if (dati.success && value == "") {
        me.text(dati.response);
        if (dati.response <= 5) {
          me.css("background-color", "yellow");
        }
        else {
          me.css("background-color", "green");
        }
      }
    },
    error: function (richiesta, stato, errori) {
      alert("Errore di connessione");
    }
  });

}


function init() {

  boxGenerator();

  var square = $(".box");
  square.click(myJoke);
}
