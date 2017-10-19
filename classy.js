
class Seq {
  constructor(...args){ this.words = args; }

  mystery() {return this.words.reduce((acc, w) => acc + w.length, 0) / this.words.length;}

  enigma() { return this.words[this.words.length - 1]; }
}



const s = new Seq('cat', 'walrus', 'dog');
console.log(s.mystery());
console.log(s.enigma());
console.log(s.hasOwnProperty('words'));
console.log(s.hasOwnProperty('enigma'));

const p1 = Object.getPrototypeOf(s.words); 
console.log(p1);
const p2 = Object.getPrototypeOf(p1);
console.log(p2);
const p3 = (typeof Seq);
console.log(p3);
const p4 = Object.getPrototypeOf(s);
console.log(p4);
