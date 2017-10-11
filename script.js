var cb_vg = document.getElementById('cb_veg');
var sriuba = document.getElementById('sriubos');
var div_sriubos = document.getElementById('div_sriubos');
var salotos = document.getElementById('salotos');
var div_salotos = document.getElementById('div_salotos');

zuvis = document.getElementById('zuvis');
kepsnys = document.getElementById('kepsnys');
kose = document.getElementById('kose');

zuvies = document.getElementById('zuvies');
kepsniai = document.getElementById('kepsniai');
koses = document.getElementById('koses');

antruju_sarasas = document.getElementById('antruju_sarasas').options;

sriuba.addEventListener("change", function(){
  if(sriuba.checked) {
    div_sriubos.style.display = "block";
  } else {
    div_sriubos.style.display = "none";
  }
});

salotos.addEventListener("change", function(){
  if(salotos.checked) {
    div_salotos.style.display = "block";
  } else {
    div_salotos.style.display = "none";
  }
});

cb_vg.addEventListener("change", function(){
  var sriubu_sarasas = document.getElementById('sriubu_sarasas').options;

  if(cb_veg.checked) {
    for(var i=0; i < sriubu_sarasas.length; i++){
      if(sriubu_sarasas[i].getAttribute("veg") == "false") {

        if(sriubu_sarasas.selectedIndex == i) {
          alert("ne vegetariskas");
        }

        sriubu_sarasas[i].style.display = "none";




      } else {
        var selected = false;
        if(!selected) {
          sriubu_sarasas[i].setAttribute("selected", "true");
          selected = true;
        }
      }
    }
  } else {
    for(var i=0; i < sriubu_sarasas.length; i++){
      sriubu_sarasas[i].style.display = "block";
    }
  }
});

cb_vg.addEventListener("change", function(){
  var salotu_sarasas = document.getElementById('salotu_sarasas').options;
  
  if(cb_veg.checked) {
    for(var i=0; i < salotu_sarasas.length; i++){
      if(salotu_sarasas[i].getAttribute("veg") == "false") {
        salotu_sarasas[i].style.display = "none";
      }
    }
  } else {
    for(var i=0; i < salotu_sarasas.length; i++){
      salotu_sarasas[i].style.display = "block";
    }
  }
});


antruju_sarasas.addEventListener("change", function(){

  if (zuvies.checked) {
      for(var i=0; i < antruju_sarasas.length; i++) {
        if(antruju_sarasas[i].getElementById("zuvies") == "false" ) {

          antruju_sarasas[i].style.display = "none";
        } else {
          var selected2 = false;
          if(!selected2) {
          antruju_sarasas[i].setAttribute("selected", "true");
          selected = true;
        }
      }
   }
 }  else  {

    for(var i=0; i < antruju_sarasas.length; i++){
      antruju_sarasas[i].style.display = "block";
    }
  }
});


// --------------------------------------------------------------

cb_vg.addEventListener("change", function(){
  var sriubu_sarasas = document.getElementById('sriubu_sarasas').options;

  if(cb_veg.checked) {
    for(var i=0; i < sriubu_sarasas.length; i++){
      if(sriubu_sarasas[i].getAttribute("veg") == "false") {

        if(sriubu_sarasas.selectedIndex == i) {
          alert("ne vegetariskas");
        }

        sriubu_sarasas[i].style.display = "none";




      } else {
        var selected = false;
        if(!selected) {
          sriubu_sarasas[i].setAttribute("selected", "true");
          selected = true;
        }
      }
    }
  } else {
    for(var i=0; i < sriubu_sarasas.length; i++){
      sriubu_sarasas[i].style.display = "block";
    }
  }
});



















/* 
antruju_sarasas.addEventListener("change", function(){

  if (zuvies.checked) {
      for(var i=0; i < antruju_sarasas.length; i++) {
        if(antruju_sarasas[i].getElementById == "false" ) {

          antruju_sarasas[i].style.display = "none";
        } else {
          var selected2 = false;
          if(!selected2) {
          antruju_sarasas[i].setAttribute("selected", "true");
          selected = true;
        }
      }
   }
 } else {
    for(var i=0; i < antruju_sarasas.length; i++){
      antruju_sarasas[i].style.display = "block";
    }
  }
});
*/ 