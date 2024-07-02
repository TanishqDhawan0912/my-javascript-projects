// chai way

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const height = parseInt(document.querySelector("#heightvalue").value)
//     const weight = parseInt(document.querySelector("#weightvalue").value)
//     const result = document.querySelector("#results")
//     if(height === "" || isNaN(height) || height < 0 ){
//         result.innerHTML= `Please enter a valid height value`
//     }
//     else if(weight === "" || isNaN(weight) || weight < 0 ){
//         result.innerHTML = `Please enter a valid weight value`
//     }
//     else {
//         const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
//         result.innerHTML = `Your BMI is ${bmi}`
//     }
// })

//my way

const submit = document.querySelector(".btn");

submit.addEventListener("click", () => {
  const height = parseInt(document.querySelector("#heightvalue").value);
  const weight = parseInt(document.querySelector("#weightvalue").value);
  const result = document.querySelector("#results");
  if (height === "" || isNaN(height) || height < 0) {
    result.innerHTML = `Please enter a valid height value`;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    result.innerHTML = `Please enter a valid weight value`;
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    if (bmi < 18.5) {
      result.innerHTML = `Your BMI is ${bmi}. You are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = `Your BMI is ${bmi}. You are normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML = `Your BMI is ${bmi}. You are overweight`;
    }
  }
});
