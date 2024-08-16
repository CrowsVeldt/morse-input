import { morse } from "./morse";

export default function parseMorse() {
  const message = [
    morse.h,
    morse.e,
    morse.l,
    morse.l,
    morse.o,
    morse[","],
    morse.w,
    morse.o,
    morse.r,
    morse.l,
    morse.d,
    morse["!"],
  ];

  function parse(a: string[][]) {
    return a.map((i: string[]) => {
      const value = Object.values(morse).indexOf(i);
      return Object.keys(morse)[value];
    });
  }

  console.log(parse(message));
}
