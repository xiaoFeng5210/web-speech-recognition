import mp3url from '../../public/mp4/制作完成.mp3'

class AudioPlay {
  audio = new Audio();
  $button = null
  constructor() {
    this.init()
  }
  init() {
    const self = this
    if (this.audio) {
      this.audio.src = mp3url
      this.$button = document.querySelector('#audio-button')
      this.$button.addEventListener('click', () => {
        // self.play()
        console.log('click')
      })
      this.$button.click()
    }
  }
  play() {
    if (this.audio) {
      const playPromise = this.audio.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // 这里就已经开始播放了
          // 播放UI会出现（如果控件显示的话）
          // 此时可以安全的暂停音视频了
        }).catch(error => {
          // 无法自动播放
          // 显示暂停的UI
          console.log(error)
        });
      }
    }
  }

}

export default AudioPlay
