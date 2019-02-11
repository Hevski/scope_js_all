// Episode 3
let murderer = 'Professor Plum'; //block scoped - let

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
//Mrs Peacock as she is declared in declareMurderer

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//Professor Plum as it is declared outside and above the function

// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// Miss Scarlet, Pro Plum, Col Mustard - suspect3 has been changed in function
console.log(`Suspect three is ${suspectThree}.`);
//mrs peacock - not calling function?

// Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//revolver - can change a const object

// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//Mrs White - not sure why

Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';
  console.log(murderer);

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    console.log(murderer);

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
      console.log(murderer);
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//miss scarlet (wrong! was Mr green - professor plum changed to mr Green
// and that is the only one accessible outside the function??)

// Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';//mrs peacock
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) { //mrs peacock
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//candlestick - murderer is still mrs peacock? so weapon is changed to candlestick???

// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//professor plum as let is outside the function

// Episode 10
let murderer = 'Louise'
murderer = 'John'
let weapon = 'laptop'

const changeMurderer = function() {
  murderer = 'Juan';
}

const changeWepon = function() {
  weapon = 'duck'
}
changeMurderer()
console.log(`The murderer has changed to ${murderer}`);
murderer = 'Colin'
console.log(`The real murderer is ${murderer} and the weapon is ${weapon}`);
