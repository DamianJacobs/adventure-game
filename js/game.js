var lvl0 = document.getElementById("begin");
var lvl1 = document.getElementById("level1");
var lvl3 = document.getElementById("level3");
var lvl4 = document.getElementById('level4');
var lvl5 = document.getElementById('level5');
var lvl6 = document.getElementById('level6');
var lvl7 = document.getElementById('level7');
var lvl8 = document.getElementById('level8');
var lvl9 = document.getElementById('level9');
var lvl10 = document.getElementById('level10');
var dia1 = document.getElementById("dialog1");
var dia2 = document.getElementById("dialog2");
var bed = document.getElementById('OBedroom');
var drawer = document.getElementById("kast");
var curtain = document.getElementById("gordijn");
var desk = document.getElementById("tafel")
var gat = document.getElementById("Boom")
var dood = document.getElementById('death')
var dood2 = document.getElementById('death2')
var dood3 = document.getElementById('death3')
var dood4 = document.getElementById('death4')
var vic = document.getElementById('victory')
var statusGordijn = "open";
var helm = false;
var key = false;
var hotdog = false;
var mes = false;
var plank = false;
var bijl = false;
var acces = false;
var bravepants = false;
var head = false;
var items = false;
var paddo = false;
var sqrl = false;
var steen = false;
var bosshead = false;
var stick = false;
var spraak = false;
var Supknife = false;

function optie() {
  alert('did u really think u had an option, NOW GO AND PLAY THE GAME!!');
}

function quit() {
  alert('nope ur not leaving no one leaves u will play forever and ever and ever!!    u can try to change this in options');
}

function Device() {
  alert('U got the device and u are rdy to sleep now');
  device.style.visibility = "hidden";
  helm = true;
}

function sleep() {
  if (helm === false) {
    alert("I have to get the device before i go to sleep");
  }


}

function begin() {
  lvl1.style.visibility = "hidden";
  lvl3.style.visibility = "hidden";
  lvl4.style.visibility = "hidden";
  lvl7.style.visibility = "hidden";
  vic.style.visibility = "hidden";
  dood4.style.visibility = "hidden";
  dood3.style.visibility = "hidden";
  dood2.style.visibility = "hidden";
  lvl8.style.visibility = "hidden";
  lvl9.style.visibility = "hidden";
  lvl10.style.visibility = "hidden";
  lvl6.style.visibility = "hidden";
  lvl5.style.visibility = "hidden";
  bed.style.visibility = "hidden";
  dood.style.visibility = "hidden";
  desk.style.visibility = "hidden";
  gat.style.visibility = "hidden"
  drawer.style.visibility = "hidden";
  curtain.style.visibility = "hidden";
  dia1.style.visibility = "hidden";
  dia2.style.visibility = "hidden";
  document.getElementById("start").onclick = dialog1;
  document.getElementById("opties").onclick = optie;
  document.getElementById("quit").onclick = quit;
  document.getElementById('body').style.backgroundImage = "url('css/img/start.jpg')"



}

window.onload = begin;


function dialog1() {
  lvl0.style.visibility = "hidden";
  dia1.style.visibility = "visible";
  document.getElementById("continue").onclick = level1;
  document.getElementById('body').style.backgroundImage = "url('css/img/start.jpg')"
}

function level1() {
  desk.style.visibility = "hidden";
  drawer.style.visibility = "hidden";
  curtain.style.visibility = "hidden";
  lvl1.style.visibility = "visible";
  dia1.style.visibility = "hidden";
  document.getElementById("desk").onclick = tafel;
  document.getElementById('Sleep').onclick = sleep;
  if (helm === true) {
    document.getElementById("Sleep").onclick = dialog2;
  }
  document.getElementById("drawer").onclick = kast;
  document.getElementById("Curtain").onclick = gordijn;
  document.getElementById('body').style.backgroundImage = "url('css/img/bedroom.jpg')"
  if (statusGordijn == "open") {
    statusGordijn = "closed";
  } else {
    statusGordijn = "open";
  }

}

function gordijn() {
  lvl1.style.visibility = "hidden";
  drawer.style.visibility = "hidden";
  desk.style.visibility = "hidden";
  curtain.style.visibility = "visible";
  document.getElementById("Desk").onclick = tafel;
  document.getElementById('sleep').onclick = sleep;
  if (helm === true) {
    document.getElementById("sleep").onclick = dialog2;
  }
  document.getElementById("drawer2").onclick = kast;
  document.getElementById("curtain").onclick = level1;
  document.getElementById('body').style.backgroundImage = "url('css/img/close.png')"
  if (statusGordijn == "open") {
    statusGordijn = "closed";
  } else {
    statusGordijn = "open";
  }
}

function kast() {
  lvl1.style.visibility = "hidden";
  desk.style.visibility = "hidden";
  drawer.style.visibility = "visible";
  curtain.style.visibility = "hidden";
  document.getElementById("device").onclick = Device;
  document.getElementById('body').style.backgroundImage = "url('css/img/drawer2.png')"
  if (statusGordijn == "open") {
    statusGordijn = "closed";
  } else {
    statusGordijn = "open";
  }

  if (statusGordijn === "closed") {
    document.getElementById("drawer1").onclick = gordijn;

  } else {
    document.getElementById("drawer1").onclick = level1;
  }
}



function tafel() {
  lvl1.style.visibility = "hidden";
  desk.style.visibility = "visible";
  curtain.style.visibility = "hidden";
  drawer.style.visibility = "hidden";
  document.getElementById('voedsel').onclick = eten;
  document.getElementById('body').style.backgroundImage = "url('css/img/desk.jpg')"
  if (statusGordijn == "open") {
    statusGordijn = "closed";
  } else {
    statusGordijn = "open";
  }
  if (statusGordijn === "closed") {
    document.getElementById("desk1").onclick = gordijn;

  } else {
    document.getElementById("desk1").onclick = level1;
  }
}

function eten() {
  alert('U picked up the food "this might be usefull"');
  voedsel.style.visibility = "hidden";
  hotdog = true;
}

function dialog2() {
  lvl1.style.visibility = "hidden";
  dia2.style.visibility = "visible";
  curtain.style.visibility = "hidden";
  document.getElementById("Continue").onclick = level3;
}

function level3() {
  lvl4.style.visibility = "hidden";
  lvl6.style.visibility = "hidden";
  lvl5.style.visibility = "hidden";
  no.style.visibility = "hidden";
  poppy.style.visibility = "hidden";
  back.style.visibility = "hidden";
  yes.style.visibility = "hidden";
  lvl3.style.visibility = "visible";
  dia2.style.visibility = "hidden";
  document.getElementById('Right1').onclick = level5;
  document.getElementById('Left1').onclick = level6;
  document.getElementById("house").onclick = door;

  function door() {
    if (key === true) {
      document.getElementById("house").onclick = level4;

    } else {
      alert('The door is locked "i need to find an key"');
    }
  }
  document.getElementById('body').style.backgroundImage = "url('css/img/huis.jpg')"
  document.getElementById('body').style.backgroundPosition = "center";
}



function level4() {
  lvl3.style.visibility = "hidden";
  bed.style.visibility = "hidden";
  lvl4.style.visibility = "visible";
  document.getElementById('upstairs').onclick = OBedroom;
  document.getElementById('outside').onclick = level3;
  document.getElementById('kitchen').onclick = sounds;
  document.getElementById('body').style.backgroundImage = "url('css/img/inside.jpg')";

  function sounds() {
    alert('there are scary sounds coming from the kitchen i should be carefull if i go in there.')
    document.getElementById('kitchen').innerHTML = "search kitchen";
    if (hotdog === false) {
      document.getElementById('kitchen').onclick = death;
    } else {
      document.getElementById('kitchen').onclick = Knife;
      alert('there was an hungry monster inside u trew the sandwich out the window and the monster chased after it ur safe for now')
    }
  }

  function Knife() {
    alert('there is nothing in here but an olf kitchen knife')
    alert('U picked up the knife "i can maybe use this later on"')
    mes = true;
    kitchen.style.visibility = "hidden";
  }
}

function OBedroom() {
  bed.style.visibility = "visible";
  lvl4.style.visibility = "hidden";
  document.getElementById('wood').onclick = houtje;
  document.getElementById('Back').onclick = level4;
  document.getElementById('body').style.backgroundImage = "url('css/img/oldbedroom.jpg')"

  function houtje() {
    alert('i might use this for something')
    plank = true;
    wood.style.visibility = "hidden";
  }

}

function level5() {

  lvl5.style.visibility = "visible";
  poppy.style.visibility = "visible";
  back.style.visibility = "visible";
  lvl3.style.visibility = "hidden";
  no.style.visibility = "hidden";
  yes.style.visibility = "hidden";
  document.getElementById('no').onclick = nono;

  if (head === true) {
    document.getElementById('poppy').onclick = talk2

  }

  function nono() {
    no.style.visibility = "hidden";
    yes.style.visibility = "hidden";
    poppy.style.visibility = "visible";
    back.style.visibility = "visible";
    alert('then no key for u comeback wenn u put ur brave pants on.')
    bravepants = true;
  }

  document.getElementById('yes').onclick = ye;

  function ye() {
    no.style.visibility = "hidden";
    yes.style.visibility = "hidden";
    poppy.style.visibility = "visible";
    back.style.visibility = "visible";
    acces = true;
    alert('glad we can make this deal, and to show me u really did it i will need u to take its head')
    document.getElementById('poppy').onclick = talk;
  }

  function talk() {
    if (head === false) {
      alert('what are u waiting for??')
    } else {
      alert('thanks for your help')
      key = true;
      document.getElementById('poppy').onclick = talk2
    }
  }

  function talk2() {
    alert('I am busy now go away')
  }

  document.getElementById('poppy').onclick = praat;

  function praat() {
    if (head === true) {
      document.getElementById('poppy').onclick = talk;
    } else {
      document.getElementById('poppy').onclick = permission;
      alert('"girl"Hello  stranger')
    }

  }

  function permission() {
    if (bravepants === true) {
      alert("did u put on ur brave pants already i wont give u my weapon and or key if u dont")
      no.style.visibility = "visible";
      yes.style.visibility = "visible";
      poppy.style.visibility = "hidden";
      back.style.visibility = "hidden";
    } else {
      alert('"girl: an key?? yes i can give that to you but, well u got to do something for me first then"')
      alert('"girl: go to the left of the house to the darkforrest there is an beast the keeps stealing my food u must kill it for me"')
      no.style.visibility = "visible";
      yes.style.visibility = "visible";
      poppy.style.visibility = "hidden";
      back.style.visibility = "hidden";

    }
  }
  document.getElementById('hammer').onclick = warned;


  function hamer() {
    alert('lets do this')
    bijl = true;
    hammer.style.visibility = "hidden";
  }

  function warned() {
    if (acces === false) {
      alert('i will smash your face if u try to steal')
      document.getElementById('hammer').onclick = warned2;
    } else {
      document.getElementById('hammer').innerHTML = "grab the axe";
      alert('this is the axe u will need')
      document.getElementById('hammer').onclick = hamer;
    }
  }


  function warned2() {
    if (acces === false) {
      alert('fool me once shame on me fool me twice shame on you fool me thrice uhh..... Hamer!!!!')
      document.getElementById('hammer').onclick = warned3;
    } else {
      alert('this is the axe u will need')
      document.getElementById('hammer').onclick = hamer;
    }
  }

  function warned3() {
    if (acces === false) {
      document.getElementById('hammer').onclick = death2;
    } else {
      alert('this is the axe u will need')
      document.getElementById('hammer').onclick = hamer;
    }
  }

  document.getElementById('back').onclick = level3;
  document.getElementById('body').style.backgroundImage = "url('css/img/blacksmith.jpg')"
}

function level6() {
  if (bijl === true) {
    if (head === true) {
      alert('There must be more to this place')
    } else {
      alert('the monster must be here somewhere')
    }
  } else {
    alert('I hate scary forests')
  }
  lvl7.style.visibility = "hidden";
  lvl10.style.visibility = "hidden";
  lvl6.style.visibility = "visible";
  lvl3.style.visibility = "hidden";
  gat.style.visibility = "hidden"
  document.getElementById('up').onclick = level10;
  document.getElementById('Left2').onclick = level7;
  document.getElementById('outside2').onclick = level3;
  document.getElementById('bush').onclick = bush1;
  document.getElementById('tree').onclick = boom;

  function bush1() {
    alert('look like something is hiding in this bush')
    document.getElementById('bush').innerHTML = "search the bush";
    document.getElementById('bush').onclick = monster;
  }

  function monster() {
    if (bijl === true) {
      alert('the monster was hiding inside it! it jumped at you but with smooth skills, a lot of fear and peeing in your pants u smacked the monster with the axe and chop its head off')
      head = true;
      bush.style.visibility = "hidden";
    } else {
      document.getElementById('bush').onclick = death;
    }
  }

  function boom() {
    alert('there is an big tree behind here')
    document.getElementById('tree').innerHTML = "search tree";
    document.getElementById('tree').onclick = Boom;

  }
  document.getElementById('body').style.backgroundImage = "url('css/img/forest.jpg')"

}

function Boom() {
  gat.style.visibility = "visible"
  lvl6.style.visibility = "hidden"
  document.getElementById('return').onclick = level6;
  document.getElementById('item1').onclick = steen1;
  document.getElementById('body').style.backgroundImage = "url('css/img/boomgat.jpg')"
}

function steen1() {
  if (plank === true) {
    alert('i cant reach it maybe with this plank i picked up i can somehow reach it')
    alert('an shiny stone this seems important')
    steen = true;
    item1.style.visibility = "hidden"
  } else {
    alert('there seems to be something shiny in this crack but i just cant reach it')
  }
}

function level10() {
  lvl10.style.visibility = "visible";
  lvl6.style.visibility = "hidden";
  document.getElementById('baas').onclick = gevecht;
  document.getElementById('back6').onclick = level6;
  document.getElementById('body').style.backgroundImage = "url('css/img/boss.png')"

  function gevecht() {
    document.getElementById('baas').innerHTML = "";
    alert('this monster is huge i wil need an nuke too kill that thing, seems like he also has one of his minions with him')
    if (Supknife === true) {
      document.getElementById('baas').onclick = yeahh;
    } else {
      document.getElementById('baas').onclick = hurt;
    }
  }

  function hurt() {
    if (Supknife === true){
      document.getElementById('baas').onclick = yeahh;
    } else {
      document.getElementById('baas').onclick = death4;
    }
  }

  function yeahh() {
    baas.style.visibility = "hidden";
    alert("that was so AWESOME!! i cant believe i killed it. tho his minion is stil trying to fight a rock.... i dont think he wil do any harm")
    bosshead = true;
  }
}

function level7() {
  lvl7.style.visibility = "visible";
  lvl6.style.visibility = "hidden";
  lvl8.style.visibility = "hidden";
  lvl9.style.visibility = "hidden";
  document.getElementById('shroom').onclick = paddos;
  document.getElementById('back3').onclick = level6;
  document.getElementById('wizard').onclick = level9;
  document.getElementById('up3').onclick = level8;
  document.getElementById('body').style.backgroundImage = "url('css/img/wizard.jpg')"


function paddos() {
  alert('this looks odd i should take it with me')
  paddo = true;
  shroom.style.visibility = "hidden"
}

  function reee() {
    document.getElementById('wizard').onclick = level9;
    if (spraak === true) {
      document.getElementById('wizar').onclick = speech0;
    } else {
      document.getElementById('wizar').onclick = speech2;
    }
  }

  function level8() {
    lvl7.style.visibility = "hidden";
    lvl8.style.visibility = "visible";
    document.getElementById('stok').onclick = tak;
    document.getElementById('dier').onclick = beest;
    document.getElementById('back4').onclick = level7;
    document.getElementById('body').style.backgroundImage = "url('css/img/bomen.jpg')"

function tak() {
  if (spraak === true) {
    stok.style.visibility = "hidden"
    alert('looks like this might be usefull')
    stick = true;
  }
  alert('what even do i need an stick for')
}


    function beest() {
      alert('ahh cute squirrel, i want it')
    if (stick === true) {
      dier.style.visibility = "hidden";
      alert("'smacks with stick' gotcha, sorry friend")
      sqrl = true;
    } else {
    alert('its too fast :C')
    }
  }
}


  function level9() {
    alert('hello there my friend');
    lvl7.style.visibility = "hidden";
    lvl9.style.visibility = "visible";
    document.getElementById('back5').onclick = level7;
    document.getElementById('pot').onclick = itemm;
    document.getElementById('wizar').onclick = speech0;
    document.getElementById('body').style.backgroundImage = "url('css/img/tovenaar.jpg')"

    function itemm() {
      if (paddo === true, steen === true, mes === true, stick === true, sqrl === true) {
        alert('this should be all');
        items = true
      } else {
        alert('i should not mess with that')
      }
    }
  }

  function speech0() {
    if (items === true) {
      document.getElementById('wizar').onclick = speech3;
    } else {
      document.getElementById('wizar').onclick = speech;
    }
  }

  function speech3() {
    if (bosshead === true) {
      alert('i will bring u back to your own world as long as your body gets sunlight i can bring u back')
      document.getElementById('wizar').onclick = win;
    } else {
      alert('take this knife of power and defeat the evil at once if u killed it bring the head to me and i will bring u back to your own world')
      alert('you must defeat the monster and bring back our peace')
      Supknife = true;
    }
  }

    function win() {
      alert('ok tell me wen your ready')
      if (statusGordijn === "closed") {
        document.getElementById('wizar').onclick = victory;
      } else {
        document.getElementById('wizar').onclick = death3;
      }
    }


      function speech() {
        if (head === false) {
          alert("u are not ready yet")
        } else {
          alert('we must hurry the monster that is disturbing this place very destructive we must put an end to this')
          document.getElementById('wizar').onclick = speech2;
        }
      }

      function speech2() {
        alert('bring me the items that i need(knife,stone,squirrel,stick,shroom) trow the items in the pot and i will an most powerfull item that wil destroy the monster and bring peace to this world')
        if (items === true) {
          spraak = false;
        } else {
          spraak = true;
        }
      }
    }


  function death() {
    alert("There was an hungry monster inside and it got u before u even know what happend, may u rest in peace....")
    lvl6.style.visibility = "hidden";
    dood.style.visibility = "visible";
    lvl4.style.visibility = "hidden";
    document.getElementById('body').style.backgroundImage = "url('css/img/death.png')"

  }

  function death2() {
    alert("u tried to grab to axe without permission and the girl instantly killed u(with the hammer), may u rest in peace....")
    lvl5.style.visibility = "hidden";
    dood2.style.visibility = "visible";
    hammer.style.visibility = "hidden";
    no.style.visibility = "hidden";
    yes.style.visibility = "hidden";
    poppy.style.visibility = "hidden";
    back.style.visibility = "hidden";
    document.getElementById('body').style.backgroundImage = "url('css/img/death.png')"

  }

  function death3() {
    alert('before u went to bed u closed the curtains wich prevented sunlight from getting to your body and u got trapped for ever in this world')
    lvl9.style.visibility = "hidden";
    dood3.style.visibility = "visible";
    document.getElementById('body').style.backgroundImage = "url('css/img/death.png')"

  }

  function death4() {
    alert('the monster was way to strong u tried evrything to kill it but it all broke or just did nothing the monster retaliated and killed u in an instant, may u rest in peace ....')
    lvl10.style.visibility = "hidden";
    dood3.style.visibility = "visible";
    document.getElementById('body').style.backgroundImage = "url('css/img/death.png')"

  }

 function victory() {
   alert("after and weird looking way of traveling u arived safe back in ur bed and continued your legacy without nightmares")
   document.getElementById('body').style.backgroundImage = "url('css/img/bedroom.jpg')"
   lvl9.style.visibility = "hidden";
   vic.style.visibility = "visible";
  }
