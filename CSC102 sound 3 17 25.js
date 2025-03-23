//I managed to have all the bugs..I think I got them all though...two hours later. I jinxed the tar out of myself with that.. 
function play()
{
mySound = new sound("shenanigans.mp3");
mySound.play();
document.createElement("startButton").disable = true; //turn off the start

document.createElement("stopButton").disabled = false; //Please work
}
function stop()
{
    window.location.reload();
}
 
function sound(src)
{
    this.sound =document.createElement("audio"); // make it
    this.sound.src = src; //defined
    this.play = function() {//music
        this.sound.play();
    }
    //dev tools is what saved me on this one. Eventually.
}