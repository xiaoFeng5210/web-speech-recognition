import './styles/index.scss'
import SpeechRecognitionLocale from './lib/speechRecognition'
import AudioPlay from './lib/audioPlay'

window.onload = function () {
  new SpeechRecognitionLocale()
  const audio = new AudioPlay()
  setTimeout(() => {
    audio.play()
  }, 5000)
}


