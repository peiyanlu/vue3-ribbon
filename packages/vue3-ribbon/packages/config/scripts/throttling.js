const throttling = (fn, wait, immediate = false) => {
  let timer
  let context, args

  const run = () => {
    timer = setTimeout(() => {
      // 如果不需要执行第一次
      if (!immediate) fn.apply(context, args)

      clearTimeout(timer)
      timer = null
    }, wait)
  }

  return function () {
    context = this
    args = arguments

    // 如果已经有任务 return
    if (timer) return

    // 如果需要执行第一次
    if (immediate) fn.apply(context, args)

    run()
  }
}

export default throttling
