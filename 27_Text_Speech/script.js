function speak() {
  let speakValue = document.querySelector("#getValSpeak").value;

  const utterance = new SpeechSynthesisUtterance(speakValue);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}
