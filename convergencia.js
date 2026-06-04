const heun = require("./heun");
const rk4 = require("./rk4");

const {
    edoPrimerOrden,
    edoSegundoOrden,
    sistemaLineal
} = require("./problemas");

const pasos = [0.50, 0.20, 0.10, 0.05];

const t0 = 0;

const tfEDO1 = 2;
const tfEDO2 = 2;
const tfSistemaLineal = 0.5;

const y0EDO1 = [2];
const y0EDO2 = [1, 0];
const y0SistemaLineal = [1, 0];

// ====================================================
// SOLUCIONES ANALÍTICAS
// ====================================================

function solucionAnaliticaEDO1(t) {

    return (
        (2 / 3) * t
        - (2 / 9)
        + (20 / 9) * Math.exp(-3 * t)
    );

}

function solucionAnaliticaEDO2(t) {

    return (
        2 * Math.exp(t)
        - Math.exp(2 * t)
    );

}

function solucionAnaliticaX(t) {

    return (
        0.5 * (
            Math.exp(5 * t)
            + Math.exp(t)
        )
    );

}

function solucionAnaliticaY(t) {

    return (
        0.5 * (
            Math.exp(5 * t)
            - Math.exp(t)
        )
    );

}

function calcularOrden(error1, error2, h1, h2) {

    return Math.log(error1 / error2)
        / Math.log(h1 / h2);

}

// ====================================================
// HEUN - EDO 1
// ====================================================

const erroresHeunEDO1 = [];

console.log("");
console.log("========================================");
console.log("CONVERGENCIA HEUN - EDO 1");
console.log("========================================");

for (const h of pasos) {

    const resultado = heun(
        edoPrimerOrden,
        y0EDO1,
        t0,
        tfEDO1,
        h
    );

    let errorMaximo = 0;

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual = resultado.t[i];

        const valorAnalitico =
            solucionAnaliticaEDO1(tActual);

        const valorNumerico =
            resultado.Y[i][0];

        const error =
            Math.abs(
                valorAnalitico - valorNumerico
            );

        if (error > errorMaximo) {
            errorMaximo = error;
        }

    }

    erroresHeunEDO1.push(errorMaximo);

    console.log(
        "h =",
        h,
        "| Error máximo =",
        errorMaximo
    );

}

console.log("");
console.log("ORDEN EXPERIMENTAL HEUN EDO 1");

for (let i = 1; i < erroresHeunEDO1.length; i++) {

    const orden = calcularOrden(
        erroresHeunEDO1[i - 1],
        erroresHeunEDO1[i],
        pasos[i - 1],
        pasos[i]
    );

    console.log(
        "Entre h =",
        pasos[i - 1],
        "y h =",
        pasos[i],
        "-> p =",
        orden
    );

}

// ====================================================
// RK4 - EDO 1
// ====================================================

const erroresRK4EDO1 = [];

console.log("");
console.log("========================================");
console.log("CONVERGENCIA RK4 - EDO 1");
console.log("========================================");

for (const h of pasos) {

    const resultado = rk4(
        edoPrimerOrden,
        y0EDO1,
        t0,
        tfEDO1,
        h
    );

    let errorMaximo = 0;

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual = resultado.t[i];

        const valorAnalitico =
            solucionAnaliticaEDO1(tActual);

        const valorNumerico =
            resultado.Y[i][0];

        const error =
            Math.abs(
                valorAnalitico - valorNumerico
            );

        if (error > errorMaximo) {
            errorMaximo = error;
        }

    }

    erroresRK4EDO1.push(errorMaximo);

    console.log(
        "h =",
        h,
        "| Error máximo =",
        errorMaximo
    );

}

console.log("");
console.log("ORDEN EXPERIMENTAL RK4 EDO 1");

for (let i = 1; i < erroresRK4EDO1.length; i++) {

    const orden = calcularOrden(
        erroresRK4EDO1[i - 1],
        erroresRK4EDO1[i],
        pasos[i - 1],
        pasos[i]
    );

    console.log(
        "Entre h =",
        pasos[i - 1],
        "y h =",
        pasos[i],
        "-> p =",
        orden
    );

}

// ====================================================
// HEUN - EDO 2
// ====================================================

const erroresHeunEDO2 = [];

console.log("");
console.log("========================================");
console.log("CONVERGENCIA HEUN - EDO 2");
console.log("========================================");

for (const h of pasos) {

    const resultado = heun(
        edoSegundoOrden,
        y0EDO2,
        t0,
        tfEDO2,
        h
    );

    let errorMaximo = 0;

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual = resultado.t[i];

        const valorAnalitico =
            solucionAnaliticaEDO2(tActual);

        const valorNumerico =
            resultado.Y[i][0];

        const error =
            Math.abs(
                valorAnalitico - valorNumerico
            );

        if (error > errorMaximo) {
            errorMaximo = error;
        }

    }

    erroresHeunEDO2.push(errorMaximo);

    console.log(
        "h =",
        h,
        "| Error máximo =",
        errorMaximo
    );

}

console.log("");
console.log("ORDEN EXPERIMENTAL HEUN EDO 2");

for (let i = 1; i < erroresHeunEDO2.length; i++) {

    const orden = calcularOrden(
        erroresHeunEDO2[i - 1],
        erroresHeunEDO2[i],
        pasos[i - 1],
        pasos[i]
    );

    console.log(
        "Entre h =",
        pasos[i - 1],
        "y h =",
        pasos[i],
        "-> p =",
        orden
    );

}

// ====================================================
// RK4 - EDO 2
// ====================================================

const erroresRK4EDO2 = [];

console.log("");
console.log("========================================");
console.log("CONVERGENCIA RK4 - EDO 2");
console.log("========================================");

for (const h of pasos) {

    const resultado = rk4(
        edoSegundoOrden,
        y0EDO2,
        t0,
        tfEDO2,
        h
    );

    let errorMaximo = 0;

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual = resultado.t[i];

        const valorAnalitico =
            solucionAnaliticaEDO2(tActual);

        const valorNumerico =
            resultado.Y[i][0];

        const error =
            Math.abs(
                valorAnalitico - valorNumerico
            );

        if (error > errorMaximo) {
            errorMaximo = error;
        }

    }

    erroresRK4EDO2.push(errorMaximo);

    console.log(
        "h =",
        h,
        "| Error máximo =",
        errorMaximo
    );

}

console.log("");
console.log("ORDEN EXPERIMENTAL RK4 EDO 2");

for (let i = 1; i < erroresRK4EDO2.length; i++) {

    const orden = calcularOrden(
        erroresRK4EDO2[i - 1],
        erroresRK4EDO2[i],
        pasos[i - 1],
        pasos[i]
    );

    console.log(
        "Entre h =",
        pasos[i - 1],
        "y h =",
        pasos[i],
        "-> p =",
        orden
    );

}
    
// ====================================================
// HEUN - SISTEMA LINEAL
// ====================================================

const erroresHeunSistemaX = [];
const erroresHeunSistemaY = [];

console.log("");
console.log("========================================");
console.log("CONVERGENCIA HEUN - SISTEMA LINEAL");
console.log("========================================");

for (const h of pasos) {

    const resultado = heun(
        sistemaLineal,
        y0SistemaLineal,
        t0,
        tfSistemaLineal,
        h
    );

    let errorMaximoX = 0;
    let errorMaximoY = 0;

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual = resultado.t[i];

        const errorX = Math.abs(
            solucionAnaliticaX(tActual)
            - resultado.Y[i][0]
        );

        const errorY = Math.abs(
            solucionAnaliticaY(tActual)
            - resultado.Y[i][1]
        );

        if (errorX > errorMaximoX) {
            errorMaximoX = errorX;
        }

        if (errorY > errorMaximoY) {
            errorMaximoY = errorY;
        }

    }

    erroresHeunSistemaX.push(errorMaximoX);
    erroresHeunSistemaY.push(errorMaximoY);

    console.log(
        "h =",
        h,
        "| Error X =",
        errorMaximoX,
        "| Error Y =",
        errorMaximoY
    );

}

console.log("");
console.log("ORDEN EXPERIMENTAL HEUN SISTEMA LINEAL");

for (let i = 1; i < erroresHeunSistemaX.length; i++) {

    const ordenX = calcularOrden(
        erroresHeunSistemaX[i - 1],
        erroresHeunSistemaX[i],
        pasos[i - 1],
        pasos[i]
    );

    const ordenY = calcularOrden(
        erroresHeunSistemaY[i - 1],
        erroresHeunSistemaY[i],
        pasos[i - 1],
        pasos[i]
    );

    console.log(
        "Entre h =",
        pasos[i - 1],
        "y h =",
        pasos[i],
        "| p(x) =",
        ordenX,
        "| p(y) =",
        ordenY
    );

}

// ====================================================
// RK4 - SISTEMA LINEAL
// ====================================================

const erroresRK4SistemaX = [];
const erroresRK4SistemaY = [];

console.log("");
console.log("========================================");
console.log("CONVERGENCIA RK4 - SISTEMA LINEAL");
console.log("========================================");

for (const h of pasos) {

    const resultado = rk4(
        sistemaLineal,
        y0SistemaLineal,
        t0,
        tfSistemaLineal,
        h
    );

    let errorMaximoX = 0;
    let errorMaximoY = 0;

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual = resultado.t[i];

        const errorX = Math.abs(
            solucionAnaliticaX(tActual)
            - resultado.Y[i][0]
        );

        const errorY = Math.abs(
            solucionAnaliticaY(tActual)
            - resultado.Y[i][1]
        );

        if (errorX > errorMaximoX) {
            errorMaximoX = errorX;
        }

        if (errorY > errorMaximoY) {
            errorMaximoY = errorY;
        }

    }

    erroresRK4SistemaX.push(errorMaximoX);
    erroresRK4SistemaY.push(errorMaximoY);

    console.log(
        "h =",
        h,
        "| Error X =",
        errorMaximoX,
        "| Error Y =",
        errorMaximoY
    );

}

console.log("");
console.log("ORDEN EXPERIMENTAL RK4 SISTEMA LINEAL");

for (let i = 1; i < erroresRK4SistemaX.length; i++) {

    const ordenX = calcularOrden(
        erroresRK4SistemaX[i - 1],
        erroresRK4SistemaX[i],
        pasos[i - 1],
        pasos[i]
    );

    const ordenY = calcularOrden(
        erroresRK4SistemaY[i - 1],
        erroresRK4SistemaY[i],
        pasos[i - 1],
        pasos[i]
    );

    console.log(
        "Entre h =",
        pasos[i - 1],
        "y h =",
        pasos[i],
        "| p(x) =",
        ordenX,
        "| p(y) =",
        ordenY
    );

}

