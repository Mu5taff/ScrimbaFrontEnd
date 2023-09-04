const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOne = document.getElementById("passwordone");
let passwordTwo = document.getElementById("passwordtwo");

function copyPassword(id) {
  let text = document.getElementById(id).textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to clipboard");
      console.log(text);
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
}

function displayPasswords() {
  passwordOne.textContent = generatePassword();
  passwordTwo.textContent = generatePassword();
}

function generatePassword() {
  let password = "";
  let passwordLength = 15;
  for (let i = 0; i < passwordLength; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length);
    password += characters[randomCharacter];
  }
  return password;
}
