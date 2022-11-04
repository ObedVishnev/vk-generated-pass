var pass=document.getElementById("wgen");
var mainblock = document.getElementById("mainblock")
function generated() {
    var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZйцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ";
    var passlen=16;
    var pass="";
    for(let i=0;i<passlen;i++) {
        var randomn=Math.floor(Math.random() * chars.length + 1);
        pass+=chars.substring(randomn,randomn +1);
    }
    document.getElementById("wgen").value = pass;
}
var q=0;
document.onclick=function(){
    if(q<1){
var audio = new Audio();
audio.autoplay="true";
audio.src="bsmusic.mp3";
q++;}
else{
    q++;
}
mainblock.style.display="block";
var maindi=document.getElementById("maindi");
maindi.style.display="none";
}
function copy() {
    var copyText = document.getElementById("wgen");
    copyText.select();
    document.execCommand("copy");
}