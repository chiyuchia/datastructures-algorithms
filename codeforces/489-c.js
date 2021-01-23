function foo(m, s) {
  if (m * 9 < s) return [-1, -1];
  if (s === 0) {
    if (m === 1) return [0, 0];
    return [-1, -1];
  }

  let max = 0;
  let m1 = m;
  let s1 = s;
  while (m1) {
    if (s1 >= 9) {
      max = max * 10 + 9;
      s1 -= 9;
    } else {
      max = max * 10 + s1;
      s1 = 0;
    }
    m1 -= 1;
  }

  let min = 0;
  let m2 = m;
  let s2 = s;
  for (let i = 1; i <= m2; i++) {
    const diff = s2 - 9 * (m2 - i);
    if (i === 1) {
      min = min * 10 + (diff > 0 ? diff : 1);
      s2 -= diff > 0 ? diff : 1;
    } else {
      min = min * 10 + (diff > 0 ? diff : 0);
      s2 -= diff > 0 ? diff : 0;
    }
  }

  return [min, max];
}
