const debounce = (fn: Function, time: number = 500): any => {
  let timer: any
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}

export default debounce
