const calculatorInput = document.getElementById("calculatorInput");
const resultText = document.getElementById("result");

const checkToDoOperations = function (expression) {
  const matches = expression.match(/(\d+\.\d+|\d+|[-+*/])/g);
  console.log(matches);

  for (let i = 0; i < matches.length; i++) {
    if (isNaN(matches[i]) && isNaN(matches[i++])) {
      return "Errore: Espressione non valida!";
    }
  }
  if (!matches) {
    return "Errore: Espressione non valida!";
  }

  //moltiplicazioni e divisioni
  let accumulator = parseFloat(matches[0]);
  let i = 1;

  while (i < matches.length) {
    accumulator = parseFloat(matches[i - 1]);
    console.log("accumulatore", accumulator);
    const operator = matches[i];
    console.log(operator);
    i++;
    const value = parseFloat(matches[i]);
    console.log(value);
    i++;

    if (operator === "*") {
      console.log(
        "beccata moltiplicaizone, PRIMA matches: ",
        matches,
        "i: ",
        i
      );
      accumulator *= value;
      const splice = matches.splice(i - 3, 3, accumulator.toString());
      //matches[i - 2] = accumulator.toString();
      console.log(
        "beccata moltiplicaizone, matches: ",
        matches,
        "splice: ",
        splice
      );
      i = 1;
    } else if (operator === "/") {
      if (value !== 0) {
        accumulator /= value;
        const splice = matches.splice(i - 3, 3, accumulator.toString());
        i = 1;
        console.log("beccata divisione");
      } else {
        return "Errore: Divisione per zero!";
      }
    }
    console.log("accumulatore", accumulator);
  }

  //addizioni e sottrazione
  i = 1;

  while (i < matches.length) {
    accumulator = parseFloat(matches[i - 1]);
    console.log(
      "console log dell'accumulatore nella sezione addizione e sottrazione,",
      accumulator
    );
    const operator = matches[i];
    console.log(
      "console log dell'operatore nella sezione addizione e sottrazione,",
      operator
    );
    i++;
    const value = parseFloat(matches[i]);
    console.log(
      "console log del value nella sezione addizione e sottrazione,",
      value
    );
    i++;

    if (operator === "+") {
      console.log("beccata addizione, PRIMA matches: ", matches, "i: ", i);
      accumulator += value;
      const splice = matches.splice(i - 3, 3, accumulator.toString());
      //matches[i - 2] = accumulator.toString();
      console.log("beccata addizione, matches: ", matches, "splice: ", splice);
      //console.log("beccata addizione! ", accumulator);
      i = 1;
    } else if (operator === "-") {
      accumulator -= value;
      const splice = matches.splice(i - 3, 3, accumulator.toString());
      i = 1;
    }
    console.log("accumulatore alla fine del ciclo: ", accumulator);
  }

  return accumulator;
};

const execute = function () {
  resultText.textContent = checkToDoOperations(calculatorInput.value);
};
