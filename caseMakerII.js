const makeCase = function (input, cases) {
  if (cases === "camel") {
    return camelCase(input);
  }

  if (cases === "pascal") {
    return pascalCase(input);
  }

  if (cases === "snake") {
    return snakeCase(input);
  }

  if (cases === "kebab") {
    return kebabCase(input);
  }

  if (cases === "title") {
    return titleCase(input);
  }
  if (cases === "vowel") {
    return vowelCase(input);
  }
};

const camelCase = (input) => {
  return input
    .split(" ")
    .map((word, index) => {
      if (index == 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

const pascalCase = (input) => {
  return input
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

const snakeCase = (input) => {
  return input.split(" ").join("_");
};

const kebabCase = (input) => {
  return input.split(" ").join("-");
};

const titleCase = (input) => {
  return input
    .split(" ")
    .map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const vowelCase = (input) => {
  return input
    .split(" ")
    .map((word) => {
      word
        .split("")
        .forEach((element) => {
          let vowels = ["a", "i", "u", "o", "e"];
          if (vowels.includes(element)) {
            return element.toUpperCase();
          }
        })
        
    })
    .join(" ");
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
