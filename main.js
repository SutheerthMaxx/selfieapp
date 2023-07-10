

var speechrecognition = window.webkitSpeechRecognition;

var recognition = new speechrecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    
    if (content=="take my selfie")
     {
     console.log("take my selfie ---");
     speak();
    }
}

function speak()
 {
    var synth = window.speechSynthesis;
    hold = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(hold);
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function() {
        selfie();
        save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
   width : 350,
   height : 250,
   image_format : "jpg",
   jpg_quality : 100
});

function selfie()
{
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML = '<img id="save_selfie" src="'+data_uri+'">';
  })
}


function save() 
{
  anchor = document.getElementById("link");
  image = document.getElementById("save_selfie").src; 
  anchor.href = image;
  anchor.click();
}