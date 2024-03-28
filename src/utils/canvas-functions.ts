export function getCursorPosition(canvas: HTMLCanvasElement, e: MouseEvent) {
  // const rect = canvas.getBoundingClientRect()
  // const x = e.clientX - rect.left
  // const y = e.clientY - rect.top

  const target = e.target;
  const x = e.pageX - (target as HTMLElement).offsetLeft;
  const y = e.pageY - (target as HTMLElement).offsetTop;

  // let x = e.clientX
  // let y = e.clientY

  return [x, y];
}
