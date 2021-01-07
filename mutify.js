window.onload = function(){ d = document.querySelector("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.now-playing-bar__center > div > div.playback-bar > div:nth-child(3)").innerText; // current song's duration
d = d.split(":");
d = Math.floor(d[0])*60 + Math.floor(d[1]);
console.log(d);
alert(d)
var popo = $("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.now-playing-bar__center > div > div.playback-bar > div:nth-child(3)");
$("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.now-playing-bar__center > div > div.playback-bar > div:nth-child(3)").bind("DOMSubtreeModified",function(){
    i = popo.split(':');
    i = Math.floor(i[0])*60 + Math.floor(i[1]);
    console.log(i);
    if (i > 30){
        
    }
    console.log('changed');
});}
