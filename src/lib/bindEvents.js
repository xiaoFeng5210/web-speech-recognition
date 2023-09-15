export function bindStartSpeechRecognition(fn) {
  const $button = document.getElementById('start_button')
  if ($button) {
    $button.addEventListener('click', function (e) {
      // $button.setAttribute('loading', true)
      e.preventDefault()
      fn && fn()
    })
  }
}

export function bindStopSpeechRecognition(fn) {
  const $button = document.getElementById('stop_button')
  if ($button) {
    $button.addEventListener('click', function (e) {
      // $button.setAttribute('loading', true)
      e.preventDefault()
      fn && fn()
    })
  }
}
