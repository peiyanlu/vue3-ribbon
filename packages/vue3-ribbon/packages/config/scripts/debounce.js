const debounce = (fn, wait, immediate = false) => {
  let timer
  let startTimeStamp = 0
  let context, args

  const run = (timerInterval) => {
    timer = setTimeout(() => {
      const now = new Date().getTime()
      const interval = now - startTimeStamp

      if (interval < timerInterval) {
        startTimeStamp = now
        run(wait - interval)
      } else {
        fn.apply(context, args)
        clearTimeout(timer)
        timer = null
      }
    }, timerInterval)
  }

  return function () {
    startTimeStamp = new Date().getTime()

    context = this
    args = arguments

    // 如果已经有任务 return
    if (timer) return

    if (immediate) fn.apply(context, args)

    run(wait)
  }
}

export default debounce
