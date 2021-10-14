prediction_1 ="";
prediction_2 ="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#camera");

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log('version ml5',ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DQh6R7z1F/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data=Tospeak;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}

function check(){
    img=document.getElementById('captured_image');
classifier.classify(img, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('result_emotion_name').innerHTML=results[0].label;
        gesture=result[0].label;
        Tospeak="";

        if(gesture=="good job"){
        Tospeak="Good job";
        document.getElementById("update_emoji").innerHTML="👍";
        }

        if(gesture=="good luck"){
            Tospeak="Good luck";
            document.getElementById("update_emoji").innerHTML="🤞";
            }

        if(gesture=="peace"){
            Tospeak="Peace";
            document.getElementById("update_emoji").innerHTML="✌️";
            }

            if(gesture=="rock"){
                Tospeak="Rock";
                document.getElementById("update_emoji").innerHTML="🤟";
                }
                speak();
    }

}
