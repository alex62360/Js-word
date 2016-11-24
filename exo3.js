//var mot = prompt("Entrez un mot svp :");
function controle(){

var mot = document.getElementById('motdeux').value

var mot1 = document.getElementById('mot')
mot1.innerHTML = mot ;

var motgras = document.getElementById('gras')
motgras.innerHTML = mot ;
motgras.style.fontWeight = "bold";
motgras.style.color = "red";

var minus = document.getElementById('minuscule')
minus.innerHTML = mot ;
minus.style.fontSize= "small";

var majus = document.getElementById('majuscule')
majus.innerHTML = mot ;
majus.style.textTransform = "uppercase";

var motInverse = mot.split("").reverse().join("");

var motReverse = document.getElementById('inverser')
motReverse.innerHTML = motInverse;

var motvoy = document.getElementById("voyelle");
motvoy.innerHTML = mot.match(/[^eaiouy]/g).length + "consonnes/";
motvoy.innerHTML += mot.match(/[eaiouy]/g).length + "voyelles";



 var countVoy = 0;
// for(var i=0; i<mot.length; i++){
//   if(mot[i]=="a"||mot[i]=="e"||mot[i]=="i"||mot[i]=="o"||mot[i]=="u"||mot[i]=="y"){
//     countVoy++;
//   }
// }

var voyelles = "aeiouyéèà";//voyelles sur lesquelles
for(var i=0; i<mot.length; i++){
  for(var j=0; j<voyelles.length; j++){
    if(mot[i]==voyelles[j]){
      countVoy++;
    }
  }
}
var countCons = mot.length - countVoy

var palind = document.getElementById('palindrome');
palind.innerHTML = (motInverse.toLowerCase()== mot.toLowerCase()) ? 'Un Palindrome' : " Pas Palindrome";
}
