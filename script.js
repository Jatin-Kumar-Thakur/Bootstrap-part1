
let fun = () => {
  let input_val = document.querySelector("#input");
  let length1 = input_val.length;

  let output_val = document.querySelector("#output");

  if (input_val.selectedIndex == output_val.selectedIndex && input_val.selectedIndex != length1 - 1) 
  {
    return (document.querySelector("#output").selectedIndex =
      input_val.selectedIndex + 1);
  }
  if (input_val.selectedIndex == length1 - 1) {
    return (document.querySelector("#output").selectedIndex =
      input_val.selectedIndex - 2);
  }
};
let fun2 = () => {
  let input_val = document.querySelector("#input");
  let output_val = document.querySelector("#output");
  let length2 = output_val.length;

  if (input_val.selectedIndex == output_val.selectedIndex &&output_val.selectedIndex != length2 - 1 ) 
  {
    return (document.querySelector("#input").selectedIndex =
      output_val.selectedIndex + 1);
  }
  if (output_val.selectedIndex == length2 - 1) {
    return (document.querySelector("#input").selectedIndex =
      output_val.selectedIndex - 2);
  }
};
console.log(fun());

function convert() {
  let input_val = document.querySelector("#input").selectedIndex;
  let output_val = document.querySelector("#output").selectedIndex;
  let input = document.querySelector("#initial_val").value;
  let output = document.querySelector("#result").value;
  let formula = document.querySelector("#formula");
  // celsius to fahrenhrit
  if (input_val == 0 && output_val == 1) {
    output = parseFloat((input * 9) / 5 + parseInt(32));
    document.getElementById("result").value = output;
    formula.innerHTML = "° F = 9/5 ( ° C) + 32";
  }
  // celsius to kelvin
  else if (input_val == 0 && output_val == 2) {
    output = parseFloat(input) + parseFloat(273);
    document.getElementById("result").value = output;
    formula.innerHTML = "K = ° C + 273";
  }

  // fahrenhit to kelvin
  else if (input_val == 1 && output_val == 2) {
    output = parseFloat((5 / 9) * (input - 32) + parseInt(273)).toFixed(3);
    document.getElementById("result").value = output;
    formula.innerHTML = "K = 5/9 (° F - 32) + 273";
  }
  // fahrenhit to celsius 5/9 c= (° F - 32)
  else if (input_val == 1 && output_val == 0) {
    output = ((5 / 9) * (input - 32)).toFixed(3);
    document.getElementById("result").value = output;
    formula.innerHTML = "° C = 5/9 (° F - 32)";
  }
  // kelvin to fahrenhit F = 9/5 (K - 273) + 32
  else if (input_val == 2 && output_val == 1) {
    output = (parseFloat((9 / 5) * (input - 273)) + parseFloat(32)).toFixed(3);
    document.getElementById("result").value = output;
    formula.innerHTML = "° F = 9/5 (K - 273) + 32";
  }
  // kelvin to celsius K - 273
  else if (input_val == 2 && output_val == 0) {
    output = input - 273;
    document.getElementById("result").value = output;
    formula.innerHTML = "° C = K - 273";
  }
}
console.log(convert());
