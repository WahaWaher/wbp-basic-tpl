const setCounter = (ms = 500) => {
  let counterID;

  if (counterID) {
    clearInterval(counterID);
  }

  let i = 0;
  const counter = document.querySelector('#counter');

  if (!counter) return;

  counter.innerHTML = i;

  counterID = setInterval(() => {
    counter.innerHTML = `... ${i}`;
    i += 1;
  }, ms);
};

export default setCounter;
