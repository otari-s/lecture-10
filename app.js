const mySetTimeout = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2500) + 500;
    console.log(delay);
    setTimeout(() => {
      if (delay < 2000) {
        resolve(`DONE!!!`);
      }
      reject(`ERROR!!!`);
    }, delay);
  });
};

mySetTimeout()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   **********************************************************

getFAceBookProfile(1)
  .then((profile) => {
    return getFAceBookProfile(profile.friends[0].id);
  })
  .then((friendProfile) => {
    return getFAceBookProfile(friendProfile.friends[0].id);
  })
  .then((friendsFriend) => {
    return getFAceBookProfile(friendsFriend.friends[0].id);
  })
  .then((finalProfile) => {
    console.log(`Finally, i have all the profiles`, finalProfile);
  })
  .catch(() => {
    console.log(`ERROR!!!`);
  });
