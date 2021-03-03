function replaceSpace(s: string): string {
  return s
    .split('')
    .map((item) => (item === '' ? '%20' : item))
    .join('');
}
