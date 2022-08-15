var speechRecognition = window.webkitspeechRecognition;


var recognition = new speechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML= "";
    recognition.start();
}
recognition.onresult= function(event) {
    console.log(event);

    var content= event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML= content;
      console.log(content);
      if(content=="take my selfie")
      {
          console.log("taking selfie---");
          speak();
      }


}
 function speak(){
     var synth =window.speechSynthesis;
                                        
     speak_data="Taking your selfie in 5 seconds"

     speak_data=document.getElementById("textbox").Value;

     var utterthis=new SpeechSynthesisUtterance(speak_data);

     synth.speak(utterthis)
     setTimeout(function()
     {
         take_snapshot();
         save();
     },    5000);
 }

 webcam.set({
     width:360,
     height:250,
     image_format :'png',
     png_quality:90
 });
 camera=document.getElementById("camera");
 function take_snapshot()
 {
     webcam.snap(function(data_uri){
         document.getElementById("resut").innerHTML='<img id="selfie_image"src="'+data_uri+'">';
     });
 }