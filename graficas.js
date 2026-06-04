const fs = require("fs");

const heun = require("./heun");
const rk4 = require("./rk4");

const {
    edoPrimerOrden,
    edoSegundoOrden
} = require("./problemas");

// =====================================
// PARÁMETROS
// =====================================

const pasos = [0.50, 0.20, 0.10, 0.05];

const t0 = 0;
const tf = 2;

const y0 = [2];

// =====================================
// SOLUCIÓN ANALÍTICA
// =====================================

function solucionAnalitica(t) {

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

const y0EDO2 = [1, 0];

const tfEDO2 = 2;

// =====================================
// GENERAR CSV PARA CADA h
// =====================================

for (const h of pasos) {

    const resultado = heun(
        edoPrimerOrden,
        y0,
        t0,
        tf,
        h
    );

    let csv =
        "t,Analitica,Heun\n";

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual =
            resultado.t[i];

        const analitica =
            solucionAnalitica(tActual);

        const heunValor =
            resultado.Y[i][0];

        csv +=
            `${tActual},${analitica},${heunValor}\n`;

    }

    const etiquetaH =
    h.toFixed(2)
     .replace(".", "");

const nombreArchivo =
    `edo1_heun_h${etiquetaH}.csv`;

    fs.writeFileSync(
        nombreArchivo,
        csv
    );

    console.log(
        `${nombreArchivo} generado.`
    );

}

// =====================================
// RK4
// =====================================

for (const h of pasos) {

    const resultado = rk4(
        edoPrimerOrden,
        y0,
        t0,
        tf,
        h
    );

    let csv =
        "t,Analitica,RK4\n";

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual =
            resultado.t[i];

        const analitica =
            solucionAnalitica(tActual);

        const rk4Valor =
            resultado.Y[i][0];

        csv +=
            `${tActual},${analitica},${rk4Valor}\n`;

    }

    const etiquetaH =
        h.toFixed(2)
         .replace(".", "");

    const nombreArchivo =
        `edo1_rk4_h${etiquetaH}.csv`;

    fs.writeFileSync(
        nombreArchivo,
        csv
    );

    console.log(
        `${nombreArchivo} generado.`
    );

}

// =====================================
// EDO 2 - HEUN
// =====================================

for (const h of pasos) {

    const resultado = heun(
        edoSegundoOrden,
        y0EDO2,
        t0,
        tfEDO2,
        h
    );

    let csv =
        "t,Analitica,Heun\n";

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual =
            resultado.t[i];

        const analitica =
            solucionAnaliticaEDO2(tActual);

        const heunValor =
            resultado.Y[i][0];

        csv +=
            `${tActual},${analitica},${heunValor}\n`;

    }

    const etiquetaH =
        h.toFixed(2)
         .replace(".", "");

    const nombreArchivo =
        `edo2_heun_h${etiquetaH}.csv`;

    fs.writeFileSync(
        nombreArchivo,
        csv
    );

}

// =====================================
// EDO 2 - RK4
// =====================================

for (const h of pasos) {

    const resultado = rk4(
        edoSegundoOrden,
        y0EDO2,
        t0,
        tfEDO2,
        h
    );

    let csv =
        "t,Analitica,RK4\n";

    for (let i = 0; i < resultado.t.length; i++) {

        const tActual =
            resultado.t[i];

        const analitica =
            solucionAnaliticaEDO2(tActual);

        const rk4Valor =
            resultado.Y[i][0];

        csv +=
            `${tActual},${analitica},${rk4Valor}\n`;

    }

    const etiquetaH =
        h.toFixed(2)
         .replace(".", "");

    const nombreArchivo =
        `edo2_rk4_h${etiquetaH}.csv`;

    fs.writeFileSync(
        nombreArchivo,
        csv
    );

}