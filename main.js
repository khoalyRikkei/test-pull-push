// function bai_1() {
//   const resultElement = document.querySelector(".result_15");
//   let resultContent;
//   const number = Number(prompt("Nhap vao so bat ky"));
//   for (i = 1; i <= 10; i++) {
//     resultContent += ` ${number}x${i}=${number * i }` +'<br>';
//   }
//   resultElement.innerHTML = resultContent;
// }
function bai_1() {
  const resultElement = document.querySelector(".result_1");
  let resultContent;
  for (let row = 1; row < 10; row++) {
    resultContent += "<tr>";
    for (let col = 1; col < 10; col++) {
      resultContent += `<td> ${col} x ${row} =${col * row}</td>`;
    }
    resultContent += "</tr>";
  }
  resultElement.innerHTML = resultContent;
}
function bai_2() {
  let number = 0;
  let sum = 0;
  let count = 0;
  while (count < 30) {
    if (number % 7 == 0) {
      count++;
      sum = sum + number;
      number++;
    } else {
      number++;
    }
  }
  console.log(sum);
}
function bai_3() {
  const N = Number(prompt("Nhap vao gia tri cua N:"));
  if (N < 2 || N > 100) {
    alert("Vui long nhap lai N");
  } else {
    for (i = 2; i <= N; i++) {
      let number = i * i;
      if (number % 2 == 0) {
        console.log(number);
      }
    }
  }
}

function bai_4() {
  for (i = 0; i <= 10; i++) {
    const a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);
    const color = `rgb(${a}, ${b}, ${c})`;
    console.log("%ckiem tra mau sac", `color:${color}`);
  }
}
function bai_5() {
  const resultElement = document.querySelector(".result_5");
  const N = Number(prompt("Nhap vao gia tri cua N"));
  let isPrime = true;
  if (N < 2) {
    console.log("N khong phai so nguyen to");
    return;
  } else {
    for (i = 2; i < N; i++) {
      if (N % i == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      resultElement.innerHTML = N + " " + "la so nguyen to";
    } else {
      resultElement.innerHTML = N + " " + "khong la so nguyen to";
    }
  }
}
function bai_6() {
  const resultElement = document.querySelector(".result_6");
  const N = Number(prompt("Nhap vao gia tri cua N"));
   let sum = 0;
  for (i = 1; i <= N / 2; i++) {
 
    if (N % i == 0) {
      sum = sum + i;
    }
   
  }
  if (N == sum) { console.log(11111111);
    resultElement.innerHTML = N + " " + "la so hoan hao";
  } else {
    resultElement.innerHTML = N + " " + "la so khong hoan hao";
  }
}
function bai_7() {
  const resultElement = document.querySelector(".result_7");
  let count = 0;
  let N = 6;
  let result = "";

  while (count < 4) {
    let sum = 0;
    for (i = 1; i <= N / 2; i++) {
      if (N % i == 0) {
        sum = sum + i;
      }
    }
    if (N == sum) {
      console.log(222222222);
      count++;
      result = result + " " + N;
    }
    N++;
   
  }
  resultElement.innerHTML = result;
}
