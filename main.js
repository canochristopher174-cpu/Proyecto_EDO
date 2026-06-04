const heun = require("./heun");
const rk4 = require("./rk4");

const {
    edoPrimerOrden,
    edoSegundoOrden,
    sistemaLineal,
    sistemaNoLineal
} = require("./problemas");

// ====================================================
// PARÁMETROS GENERALES
// ====================================================

const t0 = 0;

const tfPrimerOrden = 2;
const tfSegundoOrden = 2;
const tfSistemaLineal = 0.5;
const tfSistemaNoLineal = 10;

const h = 0.1;

// ====================================================
// PRUEBA 1
// EDO DE PRIMER ORDEN
// y' = -3y + 2t
// y(0) = 2
// ====================================================

console.log("");
console.log("========================================");
console.log("PRUEBA 1 - EDO DE PRIMER ORDEN");
console.log("========================================");

const y0PrimerOrden = [2];

const resultadoHeun1 =
    heun(
        edoPrimerOrden,
        y0PrimerOrden,
        t0,
        tfPrimerOrden,
        h
    );

const resultadoRK41 =
    rk4(
        edoPrimerOrden,
        y0PrimerOrden,
        t0,
        tfPrimerOrden,
        h
    );

console.log("");
console.log("HEUN");
console.log(resultadoHeun1.Y.slice(-5));

console.log("");
console.log("RK4");
console.log(resultadoRK41.Y.slice(-5));

console.log("");
console.log("VALOR FINAL");
console.log("Heun:", resultadoHeun1.Y.at(-1));
console.log("RK4 :", resultadoRK41.Y.at(-1));

// ====================================================
// PRUEBA 2
// EDO DE SEGUNDO ORDEN
// y'' - 4y' + 3y = e^(2t)
// y(0)=1
// y'(0)=0
// ====================================================

console.log("");
console.log("========================================");
console.log("PRUEBA 2 - EDO DE SEGUNDO ORDEN");
console.log("========================================");

const y0SegundoOrden = [1, 0];

const resultadoHeun2 =
    heun(
        edoSegundoOrden,
        y0SegundoOrden,
        t0,
        tfSegundoOrden,
        h
    );

const resultadoRK42 =
    rk4(
        edoSegundoOrden,
        y0SegundoOrden,
        t0,
        tfSegundoOrden,
        h
    );

console.log("");
console.log("HEUN");
console.log(resultadoHeun2.Y.slice(-5));

console.log("");
console.log("RK4");
console.log(resultadoRK42.Y.slice(-5));

console.log("");
console.log("VALOR FINAL");
console.log("Heun:", resultadoHeun2.Y.at(-1));
console.log("RK4 :", resultadoRK42.Y.at(-1));

// ====================================================
// PRUEBA 3
// SISTEMA LINEAL 2x2
//
// x' = 3x + 2y
// y' = 2x + 3y
//
// x(0)=1
// y(0)=0
// ====================================================

console.log("");
console.log("========================================");
console.log("PRUEBA 3 - SISTEMA LINEAL 2x2");
console.log("========================================");

const y0SistemaLineal = [1, 0];

const resultadoHeun3 =
    heun(
        sistemaLineal,
        y0SistemaLineal,
        t0,
        tfSistemaLineal,
        h
    );

const resultadoRK43 =
    rk4(
        sistemaLineal,
        y0SistemaLineal,
        t0,
        tfSistemaLineal,
        h
    );

console.log("");
console.log("HEUN");
console.log(resultadoHeun3.Y.slice(-5));

console.log("");
console.log("RK4");
console.log(resultadoRK43.Y.slice(-5));

console.log("");
console.log("VALOR FINAL");
console.log("Heun:", resultadoHeun3.Y.at(-1));
console.log("RK4 :", resultadoRK43.Y.at(-1));

// ====================================================
// PRUEBA 4
// SISTEMA NO LINEAL
//
// x' = -0.16x + 0.08xy
// y' = 4.5x + 0.9xy
//
// x(0)=4
// y(0)=1
// ====================================================

console.log("");
console.log("========================================");
console.log("PRUEBA 4 - SISTEMA NO LINEAL");
console.log("========================================");

const y0SistemaNoLineal = [4, 1];

const resultadoHeun4 =
    heun(
        sistemaNoLineal,
        y0SistemaNoLineal,
        t0,
        tfSistemaNoLineal,
        h
    );

const resultadoRK44 =
    rk4(
        sistemaNoLineal,
        y0SistemaNoLineal,
        t0,
        tfSistemaNoLineal,
        h
    );

console.log("");
console.log("HEUN");
console.log(resultadoHeun4.Y.slice(-5));

console.log("");
console.log("RK4");
console.log(resultadoRK44.Y.slice(-5));

console.log("");
console.log("VALOR FINAL");
console.log("Heun:", resultadoHeun4.Y.at(-1));
console.log("RK4 :", resultadoRK44.Y.at(-1));