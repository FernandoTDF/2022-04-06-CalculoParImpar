let btnEnv = document.getElementById("boton");

btnEnv?.addEventListener("click", () => {
  let num1: number = Number(ingreso.value);

  if (num1 == 0) {
    console.log("el valor ingresado es 0");
  } else if (num1 % 2 == 0) {
    console.log("es par");
  } else {
    console.log("no es par");
  }
});
