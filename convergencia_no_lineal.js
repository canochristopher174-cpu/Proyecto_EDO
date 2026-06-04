const heun = require("./heun");
const rk4 = require("./rk4");

const {
    sistemaNoLineal
} = require("./problemas");

const pasos = [0.50, 0.20, 0.10, 0.05];

const t0 = 0;
const tf = 10;

const y0 = [4, 1];

// ====================================================
// SOLUCIÓN DE REFERENCIA
// ====================================================

const referencia = rk4(
    sistemaNoLineal,
    y0,
    t0,
    tf,
    0.005
);

console.log("");
console.log("========================================");
console.log("SOLUCIÓN DE REFERENCIA");
console.log("========================================");

console.log(
    referencia.Y.at(-1)
);

// ====================================================
// HEUN - SISTEMA NO LINEAL
// ====================================================

console.log("");
console.log("========================================");
console.log("CONVERGENCIA HEUN - SISTEMA NO LINEAL");
console.log("========================================");

for (const h of pasos) {

    const resultado = heun(
        sistemaNoLineal,
        y0,
        t0,
        tf,
        h
    );

    const ultimo =
        resultado.Y.at(-1);

    const errorX = Math.abs(
        ultimo[0]
        - referencia.Y.at(-1)[0]
    );

    const errorY = Math.abs(
        ultimo[1]
        - referencia.Y.at(-1)[1]
    );

    console.log(
        "h =",
        h,
        "| Error X =",
        errorX,
        "| Error Y =",
        errorY
    );

}

// ====================================================
// RK4 - SISTEMA NO LINEAL
// ====================================================

console.log("");
console.log("========================================");
console.log("CONVERGENCIA RK4 - SISTEMA NO LINEAL");
console.log("========================================");

for (const h of pasos) {

    const resultado = rk4(
        sistemaNoLineal,
        y0,
        t0,
        tf,
        h
    );

    const ultimo =
        resultado.Y.at(-1);

    const errorX = Math.abs(
        ultimo[0]
        - referencia.Y.at(-1)[0]
    );

    const errorY = Math.abs(
        ultimo[1]
        - referencia.Y.at(-1)[1]
    );

    console.log(
        "h =",
        h,
        "| Error X =",
        errorX,
        "| Error Y =",
        errorY
    );

}