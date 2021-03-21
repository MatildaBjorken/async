//callbackhell
/*
console.log('start');

function loginUser(email, password, onSuccess) {
  setTimeout(() => {
    console.log('the data');
    callback({ userEmail: email, Password: password });
  }, 4000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3']);
  }, 1000);
}

function videoDetals(video, callback) {
  setTimeout(() => {
    callback('title', 'info');
  }, 2000);
}

const user = loginUser('matilda@gmail.com', 12345, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetals(videos, (videoInfo) => {
      console.log(videoInfo);
    });
  });
});

console.log('finish');
*/

//promises

/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('got it');
    reject(new Error('it failed'));
    resolve({ user: 'ed' });
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
*/

console.log('start');

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('the data');
      resolve({ userEmail: email, Password: password });
    }, 4000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  });
}

function videoDetals(video, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title', 'info');
    }, 2000);
  });
}
/*
loginUser('matilda', 12345)
  .then((user) => getUserVideos(user.userEmail))
  .then((videos) => videoDetals(videos[0]))
  .then((detail) => console.log(detail));
*/

console.log('finish');

//async

async function displayUser() {
  try {
    const loggedUser = await loginUser('matilda', 54321);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetals(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log('error');
  }
}
displayUser();

//get the data at the same time
/*
const first = new Promise((resolve) => {
  setTimeout(() => {
    console.log('first');
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const second = new Promise((resolve) => {
  setTimeout(() => {
    console.log('second');
    resolve({ user: 'userinfo' });
  }, 2000);
});

Promise.all([first, second]).then(result => console.log(result));
*/
