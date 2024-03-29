export function getCursorPosition(e: MouseEvent) {
  const target = e.target;
  const x = e.pageX - (target as HTMLElement).offsetLeft;
  const y = e.pageY - (target as HTMLElement).offsetTop;

  return [x, y];
}
