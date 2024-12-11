const startButton=document.getElementById('startButton');
const stopButton=document.getElementById('stopButton');
const outputDiv=document.getElementById('output');

let recognition= new webkitSpeechRecognition();

recognition.continuous=true;
recognition.interimResults=true;
recognition.lang='en-US';

function startRecording(){
    recognition.start();
    startButton.disabled=true;
    stopButton.disabled=false;
}

function stopRecording(){
    recognition.stop();
    startButton.disabled=false;
    stopButton.disabled=true;

}

recognition.onresult=function (event){
    let finalTrans=event.results[event.results.length-1][0].transcript;
outputDiv.innerHTML='<p>'+
finalTrans+'</p>'
}