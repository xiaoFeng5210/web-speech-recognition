import './styles/index.scss'
import SpeechRecognitionLocale from './lib/speechRecognition'
import AudioPlay from './lib/audioPlay'

window.onload = function () {
  new SpeechRecognitionLocale()
  const audio = new AudioPlay()
  window.addEventListener('online', () => {
    console.log('网络已连接')
  })
  window.addEventListener('offline', () => {
    console.log('网络已断开')
  })
  setInterval(() => {
    audio.play()
  }, 5000)
}


