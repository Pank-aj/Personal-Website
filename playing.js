function checkandview()
{
   var name=document.getElementById('Name').value;
   var phone=document.getElementById('number').value;
   if(!allLetter(name))
   {
     document.getElementById('nameerr').innerHTML="<font color=red>Name Should only contain characters</font>"
   }
   else if(!allLetter(phone))
   {
    document.getElementById('phoneerr').innerHTML='<font color=red>Phone Should only contain Numbers</font>'  
   }
   else
   {   //pickrandcolor();
       generatecolor();
       document.cookie="name="+name;
       document.cookie="phone="+phone;
       document.getElementById('game').classList.remove('hidden');
       document.getElementById('reg').classList.add('hidden');
   }
}
function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z0-9]+$/;
      if(inputtxt.match(letters))
      {
      return true;
      }
      else
      {
      return false;
      }
      }
      function generatecolor()
      {
        var colors=['Black','Blue','Yellow','Green','Orange','Purple','Red','Pink','Indigo','White','Silver','Grey','Silver','Maroon']
        var radio="<h1 style=color:e74576;><u>Colour Guessing Game</u></h1> <h3 style=color:e74576;><u>Pick a Color</u></h3>";
        for(var i=0;i<=13;i++)
        {
            radio=radio+'<div class="form-check"><input class="form-check-input" type="radio" id=selcolor name="selcolor" value='+colors[i]+">"+colors[i]+"</div>";
        }
        radio=radio+'<br><br><input type="button" class="btn aquablue" value="Submit" name="Submit" onclick="pickrandcolor();">';
        console.log(radio);
        document.getElementById('game').innerHTML= radio;
      }
function pickrandcolor()
{
    var selcolor;
    var radios = document.getElementsByName('selcolor');

    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

        selcolor=radios[i].value;
        break;
    }
    }
    console.log(selcolor);
    var colors=['Black','Blue','Yellow','Green','Orange','Purple','Red','Pink','Indigo','White','Silver','Grey','Silver','Maroon']
    var i=parseInt(Math.random(0,13)*10);
    if(selcolor==colors[i])
    {
        alert('You have made it');
    }
    else
    {
        alert('Better Luck Next time');
    }
}