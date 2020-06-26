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
  let output = "";
  let vowels = ["a", "i", "u", "o", "e"];
  for (letter of input) {
    if (vowels.includes(letter)) {
      output += letter.toUpperCase();
    } else {
      output += letter;
    }
  }
  return output;
};

const consonantCase = (input) => {
  let output = "";
  let vowels = ["a", "i", "u", "o", "e"];
  for (letter of input) {
    if (vowels.includes(letter)) {
      output += letter;
    } else {
      output += letter.toUpperCase();
    }
  }
  return output;
};
const upper = (input) => {
  return input.toUpperCase();
};

const lower = (input) => {
  return input.toLowerCase();
};

const makeCase = function (input, cases) {
  let modifyInput = input;
  let firstPriorityStyle = {
    camel: camelCase,
    pascal: pascalCase,
    snake: snakeCase,
    kebab: kebabCase,
    title: titleCase,
  };
  let secondPriorityStyle = {
    vowel: vowelCase,
    consonant: consonantCase,
  };
  let thirdPriorityStyle = {
    upper: upper,
    lower: lower,
  };

  if (Array.isArray(cases)) {
    for (style of cases) {
      if (firstPriorityStyle[style]) {
        modifyInput = firstPriorityStyle[style](modifyInput);
      }
      if (secondPriorityStyle[style]) {
        modifyInput = secondPriorityStyle[style](modifyInput);
      }
      if(thirdPriorityStyle[style]){
        modifyInput = thirdPriorityStyle[style](modifyInput)
      }
    }
    return modifyInput;
  } else {
    let generalStyle = Object.assign(
      {},
      firstPriorityStyle,
      secondPriorityStyle,
      thirdPriorityStyle
    );
    return (modifyInput = generalStyle[cases](modifyInput));
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
