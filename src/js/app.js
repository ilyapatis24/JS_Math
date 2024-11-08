"use strict";

import { Character } from './heroes';
import { Bowerman } from './heroes';
import { Swordsman } from './heroes';
import { Magician } from './heroes';
import { Daemon } from './heroes';
import { Undead } from './heroes';


console.log(new Character('Monster', 'Daemon'));
console.log(new Bowerman('John'));
console.log(new Swordsman('John'));
console.log(new Magician('John'));
console.log(new Daemon('John'));
console.log(new Undead('John'));

let daemon = new Character('John', 'Daemon', 100);
console.log(daemon.stoned);
console.log(daemon.stoned = 10);
console.log(daemon.stoned);
