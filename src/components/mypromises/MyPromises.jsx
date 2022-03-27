const MyPromises = () => {
  // const promise = new Promise((resolve, reject) => {
  //   let number = 5;
  //   number < 4 ? resolve("Success Bhai") : reject("Failed Boss");
  // });

  // promise
  //   .then((resolve) => console.log(resolve))
  //   .catch((reject) => console.log(new Error(reject)))
  //   .finally(() => alert("Done"))

  const delay = (ms) => {
    return new Promise((res) => {
      return setTimeout(res, ms);
    });
  };

  delay(3000).then(() => alert("res"));

  function delay1(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // delay1(3000).then(() => alert('runs after 3 seconds'));
  return <div></div>;
};

export default MyPromises;
