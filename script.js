let პირველი_სემესტრი = [];
let მეორე_სემესტრი = [];
let input;

do {
  input = prompt(
    "შეიყვანე პირველი სემესტრის ნიშნები (დამთავრების შემთხვევაში დაწერეთ 'stop')"
  );
  if (input === "stop") {
    break;
  }
  პირველი_სემესტრი.push(Number(input));
} while (true);
do {
  input = prompt(
    "შეიყვანე მეორე სემესტრის ნიშნები (დამთავრების შემთხვევაში დაწერეთ 'stop')"
  );
  if (input === "stop") {
    break;
  }
  მეორე_სემესტრი.push(Number(input));
} while (true);

ყველა = [avarage(პირველი_სემესტრი), avarage(მეორე_სემესტრი)];

function avarage(list) {
  let sum = 0;
  let length = list.length;
  for (let i of list) {
    sum += i;
  }
  let avarage = sum / length;
  return avarage;
}

function GPA(x) {
  let sum = 0;
  let length = x.length;
  for (let i of x) {
    i -= 50;
    i *= 0.06;
    i++;
    sum += i;
  }
  let gpa = sum / length;
  return gpa;
}

document.getElementById("output").innerHTML = `
        <div class="result">შენი პირველი სემესტრის საშუალო ქულა არის ${avarage(
          პირველი_სემესტრი
        ).toFixed(5)}</div>
        <div class="result">შენი მეორე სემესტრის საშუალო ქულა არის ${avarage(
          მეორე_სემესტრი
        ).toFixed(5)}</div>
        <div class="result">შენი საბოლოო საშუალო ქულა არის ${avarage(
          ყველა
        ).toFixed(5)}</div>
        <hr>
        <div class="result gpa">შენი პირველი სემესტრის GPA არის ${GPA(
          პირველი_სემესტრი
        ).toFixed(3)}</div>
        <div class="result gpa">შენი მეორე სემესტრის GPA არის ${GPA(
          მეორე_სემესტრი
        ).toFixed(3)}</div>
        <div class="result gpa">შენი საბოლოო GPA არის ${GPA(ყველა).toFixed(
          3
        )}</div>
      `;
