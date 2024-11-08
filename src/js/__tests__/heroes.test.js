import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../heroes.js';

test('should attacked', () => {
    let daemon = new Character('John', 'Daemon', 100)
    expect(daemon.attacked).toBe(100)
    expect(daemon.attacked = 2).toBe(2)
    expect(daemon.attacked).toBe(90)
    expect(daemon.attacked = 12).toBe(12)
    expect(daemon.attacked).toBe(0)

    let magician = new Character('John', 'Magician', 100)
    expect(magician.attacked).toBe(100)
    expect(magician.attacked = 2).toBe(2)
    expect(magician.attacked).toBe(90)
    expect(daemon.attacked = 12).toBe(12)
    expect(daemon.attacked).toBe(0)
})

test('should stoned', () => {
    let daemon = new Character('John', 'Daemon', 100)
    expect(daemon.stoned).toBe(100)
    expect(daemon.stoned = 2).toBe(2)
    expect(daemon.stoned).toBe(85)

    let magician = new Character('John', 'Magician', 100)
    expect(magician.stoned).toBe(100)
    expect(magician.stoned = 2).toBe(2)
    expect(magician.stoned).toBe(85)
})

test('should be magician', () => {
    let magician = new Magician('John')
    expect(magician.attacked).toBe(10)
    expect(magician.attacked = 1).toBe(1)
    expect(magician.attacked).toBe(10)
    expect(magician.stoned).toBe(10)
    expect(magician.stoned = 1).toBe(1)
    expect(magician.stoned).toBe(10)
})

test('should be daemon', () => {
    let daemon = new Daemon('John')
    expect(daemon.attacked).toBe(10)
    expect(daemon.attacked = 1).toBe(1)
    expect(daemon.attacked).toBe(10)
    expect(daemon.stoned).toBe(10)
    expect(daemon.stoned = 1).toBe(1)
    expect(daemon.stoned).toBe(10)
})

test('should be error', () => {
    let daemon = new Character('John', 'Daemon', 100)
    expect(daemon.attacked).toBe(100)
    expect(function() {
        daemon.attacked = 0
    }).toThrow(new Error('Wrong attacked distance...'));
    expect(function() {
        daemon.stoned = 0
    }).toThrow(new Error('Wrong stoned distance...'));
})

test('should mistake', () => {
    expect(function() {
        new Zombie('')
    }).toThrow(new Error('Name is too short / long...'));
    expect(function() {
        new Character('Monster', '')
    }).toThrow(new Error('Wrong type of Hero...'));
});

test('should objects', () => {
    expect(new Character('Monster', 'Daemon')).toEqual({
        name: 'Monster',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined
    });
    expect(new Bowerman('John')).toEqual({
        name: 'John',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
    expect(new Swordsman('John')).toEqual({
        name: 'John',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
    expect(new Magician('John')).toEqual({
        name: 'John',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
    expect(new Daemon('John')).toEqual({
        name: 'John',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
    expect(new Undead('John')).toEqual({
        name: 'John',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
    expect(new Zombie('John')).toEqual({
        name: 'John',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});