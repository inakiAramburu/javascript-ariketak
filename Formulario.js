function Taula()
{
  var Data = new Date();
  var Error = 0;
  Urtea = Data.getFullYear();
    //izena
      var Izena = (document.getElementById("Izena").value);
    //Abizena1
      var Abizena1 = (document.getElementById("Abizena1").value);
    //Abizena2
      var Abizena2 = (document.getElementById("Abizena2").value);
    //Taulan Jaiotze data jartzen du
      var Jaiotze_data = parseInt(document.getElementById("jData").value);
    //Taulan Sexua jartzen du
      var Sexua;
      if (document.getElementById("S1").checked) Sexua = (document.getElementById("S1").value);
      else if (document.getElementById("S2").checked) Sexua = (document.getElementById("S2").value);
      else if (document.getElementById("S3").checked) Sexua = (document.getElementById("S3").value);
      else if (document.getElementById("S4").checked) Sexua = (document.getElementById("S4").value);
      else if (document.getElementById("S5").checked) Sexua = (document.getElementById("S5").value);
    //Herria
			var Herri = (document.getElementById("Herria").value);
    //Probintzia
      var Probintzia = (document.getElementById("Probintzia").value);
    //Korreoa
      var Korreoa = (document.getElementById("Korreoa").value);
    //Pasahitza
			var Pasahitza = (document.getElementById("Pasahitza").value);
    //Telefonoa
      var Telefonoa = (document.getElementById("Telefonoa").value);
    //NAN
      var eNAN = (document.getElementById("NAN").value);

      NANZnbk = eNAN.slice(0, 8);
      NANLetra = eNAN.slice(8, 9);
      if (NANLetra != Asmatu(NANZnbk))
      {
        alert("NAN-aren letra gaizki dago");
        Error++;
      }

      var Adina =	Urtea - Jaiotze_data
      if (Adina < 18)
      {
        alert ("EZ DITUZU 18 URTE!");
        Error++;
      }
      else if (isNaN(Adina))
      {
        alert ("Ez duzu data bete");
        Error++;
      }
      //IzenAbizenak juntatu
        var IzenAbizenak = Izena.concat(" ", Abizena1, " ", Abizena2)
      //Izena beteta dagoen ikusten du.
        if (Izena.length == 0)
        {
          alert("Izena bete behar duzu");
          Error++;
        }
      //Abizena1 betea dagoen ikuzten du.
        if (Abizena1.length == 0)
        {
          alert("1. Abizena bete behar duzu");
          Error++;
        }
      //Abizena2 betea dagoen ikuzten du.
        if (Abizena2.length == 0)
        {
          alert("2. Abizena bete behar duzu");
          Error++;
        }
      //Korreoa betea dagoen ikuzten du.
        if (Korreoa.length == 0)
        {
          alert("Korreoa bete behar duzu");
          Error++;
        }
      //telefonoa zartuduzun ikuzten du.
        if (Telefonoa.length != 9)
        {
          alert("Telefonoa ez dago ondo");
          Error++;
        }
        if (Pasahitza.length == 0)
        {
          alert("Pasahitza bete behar duzu");
          Error++;
        }
        if (Herri.length == 0)
        {
          alert("Herria jarri behar duzu");
          Error++;
        }
////////////////////Erroreak ez badaude taula erakutziko du.////////////////////////////////
  if (!Error)
  {
    //Izena Abizanenak pantailaratu
      document.getElementById("e_Izena").innerHTML = IzenAbizenak;
    //Taulan adina erakuzten du
      document.getElementById("e_Data").innerHTML = Adina;

    //taulan sexua jartzen du.
      document.getElementById("e_Sexo").innerHTML = Sexua;
    //taulan probintzia jartzen du.
      document.getElementById("e_Probintzia").innerHTML = Probintzia;
    //Taulan Korreo jartzen du.
      document.getElementById("e_Korreoa").innerHTML = Korreoa;
    //Taulan Telefonoa jartzen du
      document.getElementById("e_Telefonoa").innerHTML =Telefonoa;
    //Taulan NAN jartzen du
      document.getElementById("e_NAN").innerHTML =eNAN ;
    //formularrioa ezkutatzen du.
      document.getElementById("Formularioa").style.display = "none";
    //Taula erakuzten du.
      document.getElementById("Taula").style.display = "block";
}
}

function Asmatu(NANZnbk)
{
  var LetraNAN;
  switch (NANZnbk % 23)
  {
    case 0: LetraNAN = "T";		break;
    case 1: LetraNAN = "R";		break;
    case 2: LetraNAN = "W";		break;
    case 3: LetraNAN = "A";		break;
    case 4: LetraNAN = "G";		break;
    case 5: LetraNAN = "M";		break;
    case 6: LetraNAN = "Y";		break;
    case 7: LetraNAN = "F";		break;
    case 8: LetraNAN = "P";		break;
    case 9: LetraNAN = "D";		break;
    case 10: LetraNAN = "X";	break;
    case 11: LetraNAN = "B";	break;
    case 12: LetraNAN = "N";	break;
    case 13: LetraNAN = "J";	break;
    case 14: LetraNAN = "Z";	break;
    case 15: LetraNAN = "S";	break;
    case 16: LetraNAN = "Q";	break;
    case 17: LetraNAN = "V";	break;
    case 18: LetraNAN = "H";	break;
    case 19: LetraNAN = "L";	break;
    case 20: LetraNAN = "C";	break;
    case 21: LetraNAN = "K";	break;
    case 22: LetraNAN = "E";	break;

    break;
    default: alert("Zenbakia gaizki sartu duzu");

  }
  return LetraNAN;
}
