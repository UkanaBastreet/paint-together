export function getCursorPosition(canvas, e) {
  // const rect = canvas.getBoundingClientRect()
  // const x = e.clientX - rect.left
  // const y = e.clientY - rect.top

  let x = e.pageX - e.target.offsetLeft
  let y = e.pageY - e.target.offsetTop

  // let x = e.clientX
  // let y = e.clientY

  return [x, y]
}
