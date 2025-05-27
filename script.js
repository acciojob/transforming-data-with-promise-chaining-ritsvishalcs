//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const inputVal = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  if (inputVal === "") {
    outputDiv.innerText = "Please enter a number.";
    return;
  }

  const number = parseFloat(inputVal);

  // Clear any previous output
  outputDiv.innerText = "";

  // Start the promise chain
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerText = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multiplied = num * 2;
        outputDiv.innerText = `Result: ${multiplied}`;
        resolve(multiplied);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subtracted = num - 3;
        outputDiv.innerText = `Result: ${subtracted}`;
        resolve(subtracted);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const divided = num / 2;
        outputDiv.innerText = `Result: ${divided}`;
        resolve(divided);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const finalResult = num + 10;
        outputDiv.innerText = `Final Result: ${finalResult}`;
        resolve(finalResult);
      }, 1000);
    });
  });
});
