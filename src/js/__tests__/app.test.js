import Team2 from '../app'

const archer = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
}

const heal = {
    name: 'Целитель',
    type: 'Healer',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
}

const warrior = {
    name: 'Воин',
    type: 'Warrior',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
}

let team = new Team2(archer, heal, warrior);

test('create team', () => {

    const received = team;
    const expected = {
        char1: archer,
        char2: heal,
        char3: warrior
    }

    expect(received).toEqual(expected);

})

test('iteration', () => {

    function iteration(team) {
        for (let char of team) {
            alert(char);
            if (char == team.char3) {
                return('Цикл прошел успешно!');
            }
        }
    }

    const received = iteration(team);
    const expected = 'Цикл прошел успешно!';

    expect(received).toBe(expected);
})