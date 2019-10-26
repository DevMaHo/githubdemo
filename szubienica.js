var category = prompt("WRITE A CATEGORY")
var password = prompt("GIVE A CLUE");



password = password.toUpperCase();
category = category.toUpperCase();
var pass_length = password.length;
var cat_length = category.length;
var errors=0;

//audio sound
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.mp3");
var fail = new Audio("fail.mp3");

function check(){
    if (pass_length<=0 && cat_length<=0)
    { 
        alert("GIVE ME SOME LETTERS :)")
        location.reload();
    }
    else if (!isNaN(password)&& !isNaN(cat_length))
    {   
        alert("GIVE LETTERS NOT NUMBERS")
        location.reload();
    }
    else 
    {   
        alert("PASSOWORD CORRECT, HAVE A NICE GAME")
    }
}



var password1 = "";
for(i=0; i<pass_length;i++)
{
    if (password.charAt(i)==" ") password1 = password1 + " ";
    else password1 = password1 +"-"

}


function write_password()
{
    
    document.getElementById("plansza").innerHTML=password1;
    document.getElementById("category").innerHTML = "CATEGORY: "+ category;
}

window.onload = start;

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

check();



function start()
{

    var text="";
    for (i=0;i<=34;i++)
    {
        var element = "lit"+i;
        text = text + '<div class="letter" onclick="check_sign('+i+')" id="'+element+'">'+letters[i]+'</div>';
        if((i+1) % 7==0)text = text + '<div style="clear:both;"></div>'
    }
document.getElementById("alfabet").innerHTML = text;

write_password();

}

String.prototype.setSign = function(location,sign)
{
    if(location>this.length-1) return this.toString();
    else return this.substr(0,location) + sign + this.substr(location+1);
}



function check_sign(nr)
{
    var good = false;

    for (i=0;i<pass_length;i++)
    {
        if(password.charAt(i)==letters[nr])
        {
           password1 = password1.setSign(i,letters[nr]);
            good = true;
        }
    }
    if(good == true)
    {
        yes.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        write_password();
    }
    else
    {
        no.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");


        // ERROR
        errors++;
        var image = "img/s"+errors+".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+image+'" />';
    }


  //WIN
    if (password == password1){
    document.getElementById("alfabet").innerHTML = "YESSS!!! You write correct password:"+ password +'<br/><br/><span class="reset" onclick="location.reload()">ONCE AGAIN</span>';
    document.getElementById("alfabet").style.background = "#305e3c";
    win.play();}
// LOSE
    if(errors>=9){
    document.getElementById("alfabet").innerHTML = "GAME OVER!!! <br></br> CORRECT PASSWORD IS:"+ password +'<br/><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?</span>';
    document.getElementById("alfabet").style.background = "#9e1d1b";
    fail.play();}
    

}