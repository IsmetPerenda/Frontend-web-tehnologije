//prvi zadatak
function bigImg(x) {
  x.style.height = "245px";
  x.style.width = "271px";
}
//dodatna funkcija koja kada sklonimo misa sliku vratimo u pocetni polozaj
function normalImg(x) {
  x.style.height = "192px";
  x.style.width = "108px";
}
//---------------------------
//drugi zadatak
function poredaj() {

  var $list = $("#prva_godina");
  var $list2 = $("#druga_godina");

  $list.children().detach().sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  }).appendTo($list);

  $list2.children().detach().sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  }).appendTo($list2);

}
//--------------------------
//treci zadatak
$(document).ready(function () {
  $("#sviPredmeti").click(function () {
    $("#lista1").show();
    $("#lista2").show();
  });
  $("#prvaGodina").click(function () {
    $("#lista2").hide();
    $("#lista1").show();
  });
  $("#drugaGodina").click(function () {
    $("#lista1").hide();
    $("#lista2").show();
  });
});


//---------------------------
//cetvrti zadatak

//profZeljko
$(document).ready(function () {
  $(".profesor1").mouseover(function () {
    $(".profesor1").css("background-color", "yellow");
    $(".matematika").css("background-color", "yellow");
  });
  $(".profesor1").mouseout(function () {
    $(".profesor1").css("background-color", "");
    $(".matematika").css("background-color", "");
  });



//profVedran
  $(".profesor2").mouseover(function () {
    $(".profesor2").css("background-color", "yellow");
    $(".programiranje").css("background-color", "yellow");
  });
  $(".profesor2").mouseout(function () {
    $(".profesor2").css("background-color", "");
    $(".programiranje").css("background-color", "");
  });

//profVensada
  $(".profesor4").mouseover(function () {
    $(".profesor4").css("background-color", "yellow");
    $(".web").css("background-color", "yellow");
  });

  $(".profesor4").mouseout(function () {
    $(".profesor4").css("background-color", "");
    $(".web").css("background-color", "");
  });

//profEmir
  $(".profesor3").mouseover(function () {
    $(".profesor3").css("background-color", "yellow");
    $(".baze").css("background-color", "yellow");
  });

  $(".profesor3").mouseout(function () {
    $(".profesor3").css("background-color", "");
    $(".baze").css("background-color", "");
  });

//profAmila
  $(".profesor5").mouseover(function () {
    $(".profesor5").css("background-color", "yellow");
    $(".pismenost").css("background-color", "yellow");
  });

  $(".profesor5").mouseout(function () {
    $(".profesor5").css("background-color", "");
    $(".pismenost").css("background-color", "");
  });
});


  
                             
                                     
       