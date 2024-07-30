// script.js
function speakPhrase() {
  const phrase = document.getElementById('phrase').textContent;
  const utterance = new SpeechSynthesisUtterance(phrase);

  // Opcional: Configurar la voz y el idioma
  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find(voice => voice.lang === 'de-DE');

  if (germanVoice) {
    utterance.voice = germanVoice;
  } else {
    console.warn('German voice not found, using default voice');
  }

  // Configurar el idioma a alemán
  utterance.lang = 'de-DE';

  // Reproducir la frase
  window.speechSynthesis.speak(utterance);
}

// Asegurarse de que las voces estén cargadas antes de buscar
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = function() {
    // Ahora que las voces están cargadas, podemos configurar la voz en speakPhrase
  };
}
