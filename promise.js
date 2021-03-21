//User story: A user can enter a number
//User story: The system picks a random number from 1 to 6
//User story: If the user's number is equal to a random number, give the user 2 points
//User story: If the user's number is different than the random number by 1,
//give the user 1 point. Otherwise, give the user 0 points
//User story: The user can play the game as long as they want to

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt('Enter a number (1 - 6):'));
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(userNumber);
    console.log(randomNumber);

    if (isNaN(userNumber)) {
      reject(new Error('type in a nr 1-6'));
    }

    if (randomNumber === userNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
      console.log('win');
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      resolve({
        points: 1,
        randomNumber,
      });
      console.log('1p');
    } else {
      resolve({
        points: 0,
        randomNumber,
      });
      console.log('0p');
    }
  });
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm('continue?')) {
      //const userNumber = Number(window.prompt('Enter a number (1 - 6):'));
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const handleGame = async () => {
  try {
    const result = await enterNumber();
    alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);

    const count = await continueGame();
    if (count) {
      handleGame();
    } else {
      alert('game ends');
    }
  } catch (error) {
    alert(error.message);
  }
};

handleGame();
