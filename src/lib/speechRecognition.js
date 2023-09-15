import { bindStartSpeechRecognition, bindStopSpeechRecognition } from './bindEvents'

class SpeechRecognitionLocale {
  speechRecognition = null
  constructor() {
    this.init()
    this.listenResult()
    // 先对事件进行绑定
    const startRecognition = this.startRecognition.bind(this)
    const stopRecognition = this.stopRecognition.bind(this)
    bindStartSpeechRecognition(startRecognition)
    bindStopSpeechRecognition(stopRecognition)
  }

  init() {
    this.speechRecognition = new webkitSpeechRecognition()
    if (!this.speechRecognition) {
      throw Error('不支持语音识别')
    }
    this.speechRecognition.lang = 'zh-CN'
    this.speechRecognition.continuous = true
  }

  listenResult() {
    if (this.speechRecognition) {
      this.speechRecognition.addEventListener('result', (e) => {
        const transcript = e.results[0][0].transcript;
        console.log('识别结果：', transcript);
      })

      this.speechRecognition.onerror = (event) => {
        console.error('语音识别错误：', event.error);
      };

      this.speechRecognition.onend = () => {
        console.log('语音识别结束');
      };
    }
  }

  // 开始识别
  startRecognition() {
    if ('start' in this.speechRecognition) {
      console.log('可以开始识别')
      this.speechRecognition.start()
    }
  }

  // 停止监听
  stopRecognition() {
    if ('stop' in this.speechRecognition) {
      console.log('停止识别')
      this.speechRecognition.stop()
    }
  }

}

export default SpeechRecognitionLocale
