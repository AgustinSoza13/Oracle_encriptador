
function Encriptar_Texto(){
    encriptar=document.getElementById("encrip").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");;
    
    let array=encriptar.split(" ");
    for (var i = 0; i <= array.length-1; i++) {
        array[i]=array[i].replace(/e/, "enter")
        .replace(/i/, "imes").replace(/a/, "ai")
        .replace(/o/, "ober").replace(/u/, "ufat");
    }
    document.getElementById("unos").innerHTML=array.join(" ");     
    document.getElementById("Copia").style.display="inherit";
    document.getElementById("unos").style.display="inherit";
    document.getElementById("var1").style.display="none";
    document.getElementById("var2").style.display="none";
}
function Desencriptar_Texto(){
    encriptar=document.getElementById("encrip").value.toLowerCase();
    let array=encriptar.split(" ");
    for (var i = 0; i <= array.length-1; i++) {
        array[i]=array[i].replace(/enter/, "e")
        .replace(/imes/, "i").replace(/ai/, "a")
        .replace(/ober/, "o").replace(/ufat/, "u");
    }
    document.getElementById("unos").innerHTML=array.join(" ");
    document.getElementById("Copia").style.display="inherit";
    document.getElementById("unos").style.display="inherit";
    document.getElementById("var1").style.display="none";
    document.getElementById("var2").style.display="none";
}
function copiar_texto(){
    let texto=document.querySelector("#unos");
    texto.select();
    document.execCommand("copy");


}

